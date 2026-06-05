function billiApp() {
    const DEFAULT_FRIENDS = [
        { id: 1, name: 'Guru' },
        { id: 2, name: 'Manyu' },
        { id: 3, name: 'Safal' },
        { id: 4, name: 'Sparsh' },
        { id: 5, name: 'Shailu' },
        { id: 6, name: 'Lalit' },
        { id: 7, name: 'Deva' },
        { id: 8, name: 'Mayank' },
        { id: 9, name: 'Jayashree' },
        { id: 10, name: 'Gauransh' },
        { id: 11, name: 'Snehal' },
        { id: 12, name: 'Nidheesh' },
        { id: 13, name: 'Vamsi' },
        { id: 14, name: 'Manan' }
    ];

    return {
        screen: 'home',
        friends: [],
        newFriendName: '',
        showFriendsModal: false,

        bill: {
            eventName: '',
            eventDate: '',
            participants: [],
        },

        searchTerm: '',
        filteredFriends: [],

        billImage: null,
        billImagePreview: null,
        ocrRaw: '',
        ocrItems: [],
        ocrProcessing: false,
        ocrProgress: 0,

        reviewItems: [],

        assignments: {},
        currentItemIndex: 0,
        selectedFriends: [],
        cardFlipped: false,
        isComplete: false,

        payerUpi: '',
        payerPhone: '',
        breakdown: [],
        copiedStates: {},

        toastMessage: '',
        showToast: false,

        init() {
            this.friends = this.loadFriends();
            this.bill.eventDate = this.getCurrentDate();

            const savedPayer = localStorage.getItem('billi_payer');
            if (savedPayer) {
                const p = JSON.parse(savedPayer);
                this.payerUpi = p.upiId || '';
                this.payerPhone = p.phone || '';
            }

            this.filterFriends();
        },

        loadFriends() {
            const stored = localStorage.getItem('billi_friends');
            if (stored) {
                try { return JSON.parse(stored); } catch(e) {}
            }
            return JSON.parse(JSON.stringify(DEFAULT_FRIENDS));
        },

        saveFriends() {
            localStorage.setItem('billi_friends', JSON.stringify(this.friends));
        },

        getCurrentDate() {
            const now = new Date();
            const y = now.getFullYear();
            const m = String(now.getMonth() + 1).padStart(2, '0');
            const d = String(now.getDate()).padStart(2, '0');
            return `${y}-${m}-${d}`;
        },

        formatDateDisplay(dateStr) {
            if (!dateStr) return '';
            const d = new Date(dateStr);
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const year = d.getFullYear();
            return `${day}/${month}/${year}`;
        },

        navigate(screen) {
            this.screen = screen;
            window.scrollTo(0, 0);
        },

        filterFriends() {
            if (!this.searchTerm) {
                this.filteredFriends = [...this.friends];
                return;
            }
            const s = this.searchTerm.toLowerCase();
            this.filteredFriends = this.friends.filter(f =>
                f.name.toLowerCase().includes(s) &&
                !this.bill.participants.some(p => p.id === f.id)
            );
        },

        addFriend(friend) {
            if (!this.bill.participants.some(p => p.id === friend.id)) {
                this.bill.participants.push({ ...friend });
                this.searchTerm = '';
                this.filterFriends();
            }
        },

        removeFriend(friend) {
            this.bill.participants = this.bill.participants.filter(f => f.id !== friend.id);
        },

        isFormValid() {
            return this.bill.eventName.trim() !== '' && this.bill.participants.length > 0;
        },

        addNewFriend() {
            if (!this.newFriendName.trim()) return;
            const maxId = this.friends.reduce((max, f) => Math.max(max, f.id), 0);
            this.friends.push({ id: maxId + 1, name: this.newFriendName.trim() });
            this.newFriendName = '';
            this.saveFriends();
            this.filterFriends();
        },

        deleteFriend(id) {
            this.friends = this.friends.filter(f => f.id !== id);
            this.saveFriends();
            this.filterFriends();
        },

        handleImageUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                this.billImagePreview = e.target.result;
                this.billImage = e.target.result;
            };
            reader.readAsDataURL(file);
        },

        async processOCR() {
            if (!this.billImage) return;

            this.ocrProcessing = true;
            this.ocrProgress = 0;
            this.ocrRaw = '';
            this.ocrItems = [];

            try {
                const worker = await Tesseract.createWorker('eng', 1, {
                    logger: (m) => {
                        if (m.status === 'recognizing text') {
                            this.ocrProgress = Math.round(m.progress * 100);
                        }
                    }
                });

                const { data: { text } } = await worker.recognize(this.billImage);
                await worker.terminate();

                this.ocrRaw = text;
                this.ocrItems = this.parseOCRText(text);

                if (this.ocrItems.length === 0) {
                    this.showToastMessage('No items detected. Try manual entry.');
                }
            } catch (err) {
                console.error('OCR failed:', err);
                this.showToastMessage('OCR failed. Try manual entry.');
            }

            this.ocrProcessing = false;
            this.ocrProgress = 100;
        },

        parseOCRText(text) {
            const lines = text.split('\n').filter(l => l.trim());
            const items = [];
            let id = 1;

            for (const line of lines) {
                const cleaned = line.trim();
                if (cleaned.length < 3) continue;

                const patterns = [
                    /(.+?)\s+₹\s*([\d,]+\.?\d*)/,
                    /(.+?)\s+Rs\.?\s*([\d,]+\.?\d*)/,
                    /(.+?)\s+INR\s*([\d,]+\.?\d*)/,
                    /(.+?)\s+([\d,]+\.\d{2})\s*$/,
                    /(.+?)\s+([\d,]+)\s*\/-?\s*$/,
                    /(.+?)\s+([\d,]+)\s*$/,
                ];

                for (const pattern of patterns) {
                    const match = cleaned.match(pattern);
                    if (match) {
                        let name = match[1].trim();
                        let priceStr = match[2].replace(/,/g, '');
                        let price = parseFloat(priceStr);

                        if (isNaN(price) || price <= 0) continue;
                        if (price > 100000) continue;

                        const skipWords = ['total', 'subtotal', 'tax', 'gst', 'tip', 'grand total', 'amount', 'balance', 'cash', 'card', 'upi', 'round', 'discount', 'cgst', 'sgst', 'igst'];
                        const nameLower = name.toLowerCase();
                        if (skipWords.some(w => nameLower === w || nameLower.startsWith(w + ' '))) continue;

                        items.push({ id: id++, name, price });
                        break;
                    }
                }
            }

            return items;
        },

        skipOCR() {
            this.ocrItems = [];
            this.reviewItems = [];
            this.navigate('review');
        },

        continueFromOCR() {
            this.reviewItems = this.ocrItems.map(item => ({ ...item }));
            this.navigate('review');
        },

        addReviewItem() {
            const maxId = this.reviewItems.length > 0
                ? Math.max(...this.reviewItems.map(i => i.id))
                : 0;
            this.reviewItems.push({ id: maxId + 1, name: '', price: 0 });
        },

        deleteReviewItem(id) {
            this.reviewItems = this.reviewItems.filter(i => i.id !== id);
        },

        getReviewTotal() {
            return this.reviewItems.reduce((sum, i) => sum + (parseFloat(i.price) || 0), 0);
        },

        startAssignment() {
            if (this.reviewItems.length === 0) {
                this.showToastMessage('Add at least one item');
                return;
            }

            this.assignments = {};
            this.currentItemIndex = 0;
            this.selectedFriends = [];
            this.cardFlipped = false;
            this.isComplete = false;
            this.navigate('assign');
        },

        get currentItem() {
            return this.reviewItems[this.currentItemIndex];
        },

        toggleFriend(friendId) {
            if (this.selectedFriends.includes(friendId)) {
                this.selectedFriends = this.selectedFriends.filter(id => id !== friendId);
            } else {
                this.selectedFriends.push(friendId);
            }
        },

        splitEvenly() {
            this.selectedFriends = this.bill.participants.map(f => f.id);
        },

        nextItem() {
            if (this.selectedFriends.length === 0) return;

            this.assignments[this.currentItem.id] = {
                item: { ...this.currentItem },
                friendIds: [...this.selectedFriends],
                splitAmount: this.currentItem.price / this.selectedFriends.length
            };

            this.cardFlipped = true;

            setTimeout(() => {
                if (this.currentItemIndex < this.reviewItems.length - 1) {
                    this.currentItemIndex++;
                    this.selectedFriends = [];
                    this.cardFlipped = false;
                }
            }, 800);
        },

        finishAssignment() {
            if (this.selectedFriends.length > 0) {
                this.assignments[this.currentItem.id] = {
                    item: { ...this.currentItem },
                    friendIds: [...this.selectedFriends],
                    splitAmount: this.currentItem.price / this.selectedFriends.length
                };
            }

            this.isComplete = true;
        },

        goToBreakdown() {
            this.calculateBreakdown();
            this.navigate('breakdown');
        },

        calculateBreakdown() {
            const personTotals = {};
            const personItems = {};

            for (const participant of this.bill.participants) {
                personTotals[participant.id] = 0;
                personItems[participant.id] = [];
            }

            for (const itemId in this.assignments) {
                const assignment = this.assignments[itemId];
                const splitAmount = assignment.splitAmount;

                for (const friendId of assignment.friendIds) {
                    personTotals[friendId] = (personTotals[friendId] || 0) + splitAmount;
                    personItems[friendId].push({
                        name: assignment.item.name,
                        amount: splitAmount
                    });
                }
            }

            this.breakdown = this.bill.participants.map(p => ({
                id: p.id,
                name: p.name,
                total: personTotals[p.id] || 0,
                items: personItems[p.id] || []
            }));
        },

        savePayerDetails() {
            localStorage.setItem('billi_payer', JSON.stringify({
                upiId: this.payerUpi,
                phone: this.payerPhone
            }));
        },

        getMessageForPerson(person) {
            const amount = Math.round(person.total);
            let msg = `Hey ${person.name}! Your share from "${this.bill.eventName}" is ₹${amount}.`;

            if (this.payerUpi) {
                msg += `\nPay to UPI: ${this.payerUpi}`;
            }
            if (this.payerPhone) {
                msg += `\nPhone: ${this.payerPhone}`;
            }

            return msg;
        },

        copyMessage(personId) {
            const person = this.breakdown.find(p => p.id === personId);
            if (!person) return;

            const msg = this.getMessageForPerson(person);
            navigator.clipboard.writeText(msg).then(() => {
                this.copiedStates[personId] = true;
                setTimeout(() => { this.copiedStates[personId] = false; }, 2000);
            });
        },

        copyAllMessages() {
            const messages = this.breakdown
                .filter(p => p.total > 0)
                .map(p => this.getMessageForPerson(p))
                .join('\n\n---\n\n');

            navigator.clipboard.writeText(messages).then(() => {
                this.showToastMessage('All messages copied!');
            });
        },

        finishBill() {
            this.bill = { eventName: '', eventDate: this.getCurrentDate(), participants: [] };
            this.billImage = null;
            this.billImagePreview = null;
            this.ocrRaw = '';
            this.ocrItems = [];
            this.reviewItems = [];
            this.assignments = {};
            this.currentItemIndex = 0;
            this.selectedFriends = [];
            this.cardFlipped = false;
            this.isComplete = false;
            this.breakdown = [];
            this.copiedStates = {};
            this.navigate('home');
        },

        showToastMessage(msg) {
            this.toastMessage = msg;
            this.showToast = true;
            setTimeout(() => { this.showToast = false; }, 2000);
        }
    };
}
