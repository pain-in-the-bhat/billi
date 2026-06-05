# 1. Product Requirements Document (PRD) - Revised

## 1.1 Introduction
Billi is a Progressive Web Application (PWA) designed for personal use among small groups of friends to simplify the process of splitting bills. It aims to eliminate the hassle of manual calculations while providing a delightful, unique experience through an 8-bit pixel art aesthetic inspired by Studio Ghibli and games like Stardew Valley.

## 1.2 Goals
- Provide a user-friendly and enjoyable way to split bills among friends.
- Minimize manual data entry through OCR technology.
- Ensure accurate and transparent calculation of individual shares.
- Facilitate easy sharing of the bill breakdown with participants.
- Offer a fast and responsive experience on various mobile devices.
- Create a distinctive and memorable user experience that stands apart from traditional utility apps.

## 1.3 Target Audience
- Small groups of friends who frequently dine out or share expenses.
- Users who want a quick and easy way to split bills without complex calculations.
- Individuals who prefer a more delightful and engaging experience over traditional accounting apps.
- People who appreciate unique design aesthetics and playful interactions.

## 1.4 Scope

### 1.4.1 Features

**Home Screen:**
- Clean, focused interface with a prominent "New Bill" button.
- App name and Jiji mascot displayed prominently.
- No transaction history displayed, emphasizing each bill-splitting as a fresh experience.

**Transaction Creation:**
- Users can create a new transaction by specifying the event name and date.
- Users can add participants to the transaction by searching and selecting from a predefined list of friends.

**Bill Image Upload and OCR:**
- Users can upload a photo of the bill.
- The app will use OCR technology to extract item details (name and cost) from the bill.

**Item Assignment:**
- Interactive "tarot card" interface where each item appears as a card presented by Jiji as a fortune teller.
- Users assign each item to participants before moving to the next item.
- Options to:
  - Assign items to specific participants by tapping their names.
  - Split an item's cost evenly among all participants with a "Split Evenly" button.
  - Progress through items one at a time with a guided flow.
  - See progress through a pixel art progress bar.

**Review and Confirmation:**
- Users can review all entered items and their assigned participants.
- Users can edit item details and participant assignments on the review screen.

**Breakdown and Sharing:**
- The app will calculate the individual share for each participant.
- The app will generate a shareable breakdown of the bill.
- Users can copy pre-formatted messages for each participant, containing their share and payment details (Payer's UPI ID and phone number), to clipboard.
- Users can copy all messages at once.

### 1.4.2 Non-Functional Requirements
- **Performance:** The app should load quickly and provide a smooth, responsive user experience.
- **Usability:** The app should be intuitive and easy to use, with a focus on mobile touch interactions.
- **Aesthetic:** The app should maintain a consistent 8-bit pixel art aesthetic inspired by Studio Ghibli and games like Stardew Valley.
- **Responsiveness:** The app should work seamlessly on various smartphone screen sizes.
- **Installability:** The app should be installable as a PWA on supported devices.
- **Data Persistence:** Transaction data should be stored locally on the user's device.
- **Security:** User data (transaction details) should be stored securely.
- **Offline Capability:** The app should be installable and load even without an internet connection.

## 1.5 Out of Scope
- User accounts or login system.
- Online payment integration.
- Advanced reporting or analytics.
- Currency conversion.
- Support for very large groups (beyond 8-10 people).
- Backend server for v0/v1.
- Custom pixel avatars for friends (planned for future versions).
- Transaction history (intentionally excluded for v0/v1).