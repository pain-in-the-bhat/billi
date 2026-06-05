# Billi

Split bills with friends, made purr-fect. A PWA with OCR-powered receipt scanning and a playful 8-bit pixel art aesthetic.

**Live:** [bekku.xyz](https://bekku.xyz)

## Features

- **OCR Receipt Scanning** - Take a photo of your bill, Tesseract.js extracts items and prices automatically
- **Tarot Card Item Assignment** - Assign each item to friends one at a time with a fun card-flip interface
- **Smart Splitting** - Split items evenly or assign to specific people
- **Share via Clipboard** - Copy formatted payment messages with UPI ID and phone number
- **Works Offline** - PWA with service worker, loads even without internet
- **No Backend** - Everything runs client-side, your data stays on your device

## Tech Stack

- **Alpine.js** - Reactive UI framework
- **Tesseract.js** - Client-side OCR (runs in the browser, no API needed)
- **Vanilla JS + CSS** - No build step, no bundler, just static files
- **PWA** - Service worker for offline support, installable on mobile

## Screens

1. **Home** - Jiji the cat mascot welcomes you
2. **New Bill** - Enter event name, date, and select friends from your saved list
3. **Upload Bill** - Take a photo or upload an image, OCR processes it
4. **Review Items** - Edit OCR results, add missing items, delete extras
5. **Assign Items** - Go through each item as a tarot card, assign to friends
6. **Breakdown** - See who owes what, enter your UPI/phone, copy share messages

## Local Development

```bash
npm install
npm start
```

Open `http://localhost:3000` in your browser.

## Deploy to GitHub Pages

1. Push to a GitHub repo
2. Go to **Settings → Pages** → Deploy from `main` branch, `/ (root)`
3. Add your custom domain (e.g., `bekku.xyz`)
4. Add 4 A records on your DNS provider pointing to GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
5. Enable **Enforce HTTPS** after DNS propagates

## Design

8-bit pixel art aesthetic inspired by Studio Ghibli and Stardew Valley, featuring Jiji the cat as a fortune teller guiding you through bill splitting.
