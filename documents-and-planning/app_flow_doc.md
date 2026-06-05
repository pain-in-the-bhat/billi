# 2. App Flow Document - Revised

## 2.1 Home Screen

**Initial Load:**
- Displays the app name ("Billi") and the pixel art Jiji mascot
- Shows a prominent "New Bill" button as the primary action
- Simple, clean interface with 8-bit pixel art aesthetic
- No transaction history, emphasizing a fresh experience every time

**New Bill Button:**
- Navigates to the "New Bill" screen with a playful transition animation

## 2.2 New Bill Screen

**Initial Load:**
- Displays fields to enter the event name and date with pixel art styling
- Date picker has current date pre-selected as default
- Shows a search bar to find and select friends
- Displays area for selected friends as simple pixel-styled name pills

**Input Fields:**
- Event Name: Users enter a name for the event/transaction (e.g., "Dinner at Milano's")
- Date: Users can select or modify the date (defaults to current date)

**Friends Selection:**
- Search bar dynamically filters friends as user types
- Friends can be selected from the filtered results
- Selected friends appear as pixel-styled name pills below
- Friends can be unselected if added by mistake

**"Let's Split!" Button:**
- Primary action button styled as a pixel art magic wand or spell book
- Becomes active once at least an event name and one friend are added
- Transitions to the next screen with a magical animation

## 2.3 Bill Upload Screen

**Initial Load:**
- Displays an option to upload a bill image with Jiji as a guide
- Shows a "Skip Upload" option for manual entry

**Bill Image Upload:**
- Users can take a photo or select an image from their gallery
- Shows a loading animation during OCR processing (pixel art Jiji with a crystal ball)
- Once processing completes, displays a success message with a magical effect

**OCR Preview:**
- Shows a scrollable list of extracted items with their detected prices
- Displays a count of how many items were detected
- Includes reassuring text that items can be added/modified on the next screen

**Continue Button:**
- "Continue to Items" button takes users to the Item Assignment screen
- "Skip Upload" option also navigates to the Item Assignment screen but without extracted items

## 2.4 Item Assignment Screen

**Initial Load:**
- Displays pixel art Jiji as a fortune teller with a crystal ball
- Shows the first item as a "tarot card" with item name and price
- Displays a pixel art progress bar at the top (e.g., "1/8 items")
- Shows the list of participants as selectable name pills below the card

**Card Interaction:**
- Each item is presented as a tarot card held by fortune teller Jiji
- Only one card/item is visible at a time
- The card floats slightly with a subtle animation

**Item Assignment:**
- Users can tap on friend name pills to assign the item to specific participants
- Pills light up or change appearance when selected
- "Split Evenly" button is available to quickly split among all participants
- Once assignment is complete, "Next Item" button becomes active

**Next Item Button:**
- When pressed, the current card animates away (magical disappearing effect)
- The next card appears with a reveal animation
- Progress bar updates to reflect completion

**Review Button:**
- Once all items are assigned, a "Review" button appears
- Navigates to the "Review" screen with a transition animation

## 2.5 Review Screen

**Initial Load:**
- Displays a summary of the event details (name, date) with pixel art styling
- Shows a list of all participants and their total amount
- Displays a breakdown of items assigned to each participant

**Item Details:**
- For each item, shows the name, cost, and which participants are paying for it
- If an item is split, indicates the split type (even or custom) and amount per person

**Edit Option:**
- Users can return to the Item Assignment screen if changes are needed
- Edit button styled as a pixel art scroll or quill

**Calculate Button:**
- "Calculate Final Split" button styled as a magical spell book or potion
- Calculates the individual shares with a magical animation
- Navigates to the "Breakdown" screen

## 2.6 Breakdown Screen

**Initial Load:**
- Displays the final bill breakdown, showing what each participant owes
- Shows the total amount of the bill
- Provides options for the payer to enter their payment details:
  - UPI ID (optional)
  - Phone Number (optional)
- All styled with consistent pixel art aesthetic

**Share Options:**
- Users can copy a pre-formatted message for each participant to their clipboard
- Message includes the participant's name, the amount they owe, and payment details
- "Copy All Messages" button to copy all messages at once
- Option to share via messaging apps (WhatsApp, Messages, etc.)
- Copy actions trigger a playful animation with Jiji

**Finish Button:**
- "Finish" button completes the transaction
- Shows a celebration animation with Jiji
- Returns to the Home Screen
- Clears the current transaction data