# 6. Design System Document - Revised

## 6.1 Brand Identity

### 6.1.1 Brand Name and Logo
- **Name:** Billi
- **Logo:** 8-bit pixel art logo featuring a black cat silhouette inspired by Jiji from Kiki's Delivery Service
- **Logo Usage:** Always maintain proper spacing and sizing as defined in the style guide
- **Mascot:** A pixel art black cat character inspired by Jiji, who helps guide users through the bill-splitting process as a fortune teller

### 6.1.2 Brand Voice
- **Tone:** Playful, friendly, and slightly mystical
- **Language:** Clear but with occasional playful expressions and magical references
- **Messaging:** Focus on making bill splitting feel like a magical, game-like experience

## 6.2 Color Palette

### 6.2.1 Primary Colors
- **Deep Black** (#1A1523): Primary background color, inspired by Jiji's fur
- **Purple** (#7E5A9B): Primary buttons and accents, represents magic and fortune telling
- **Pixel Green** (#48C677): Secondary accents and highlights, inspired by Stardew Valley

### 6.2.2 Neutral Colors
- **Dark Gray** (#2D2D33): Cards and secondary elements
- **Medium Gray** (#4A4A52): Borders and dividers 
- **Light Gray** (#8A8A94): Subtle accents and disabled states

### 6.2.3 Text Colors
- **White** (#FFFFFF): Primary text color on dark backgrounds
- **Off-White** (#F2F2F7): Secondary text on dark backgrounds
- **Deep Black** (#1A1523): Text on light backgrounds

### 6.2.4 Pixel Art Accent Colors
- **Pixel Pink** (#FF6B97): Tertiary accent for special highlights
- **Pixel Blue** (#4B95E9): Used for interactive elements
- **Pixel Yellow** (#FFC63F): Used for stars and important highlights

### 6.2.5 Status Colors
- **Success:** #5CCA8F (soft green) - Successful actions and positive feedback
- **Warning:** #FFB97C (soft orange) - Warnings and attention needed
- **Error:** #FA7A7A (soft red) - Errors and critical information
- **Info:** #7CB9FF (soft blue) - Informational messages

## 6.3 Typography

### 6.3.1 Font Family
- **Display Font:** "Pixel Emulator" (or similar 8-bit style font) - Used for headings and emphasis
- **Secondary Font:** "Quicksand" (rounded sans-serif) - Used for body text and interface elements
- **Fallback Fonts:** -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif

### 6.3.2 Font Sizes
- **Heading 1:** 2.25rem (36px) - Page titles, slightly exaggerated for visual impact
- **Heading 2:** 1.75rem (28px) - Section titles
- **Heading 3:** 1.375rem (22px) - Card titles
- **Body:** 1.125rem (18px) - Regular text, slightly larger for better readability on dark backgrounds
- **Small:** 0.875rem (14px) - Labels, captions
- **Extra Small:** 0.75rem (12px) - Fine print, legal text

### 6.3.3 Font Weights
- **Light:** 300 - For large display text
- **Regular:** 400 - Body text
- **Medium:** 500 - Emphasis and subtitles
- **Bold:** 700 - Important buttons and call-to-actions

### 6.3.4 Line Heights
- **Tight:** 1.2 - Headings
- **Regular:** 1.6 - Body text, slightly more spacious for readability on dark backgrounds
- **Relaxed:** 1.8 - Extended text blocks

### 6.3.5 Typography Treatments
- **Pixel Art Text:** Headings and important UI elements use the pixel font
- **Text Shadows:** Subtle shadows on important headings to enhance readability on dark backgrounds
- **Animated Text:** Gentle animations for key messages and celebration text

## 6.4 Spacing System

### 6.4.1 Base Unit
- Base unit: 4px (aligns well with pixel art grid)

### 6.4.2 Spacing Scale
- **xs:** 4px (1 unit) - Minimal spacing
- **sm:** 8px (2 units) - Tight spacing
- **md:** 16px (4 units) - Standard spacing
- **lg:** 24px (6 units) - Relaxed spacing
- **xl:** 32px (8 units) - Section spacing
- **2xl:** 48px (12 units) - Page spacing
- **3xl:** 64px (16 units) - Large spacing

## 6.5 UI Components

### 6.5.1 Buttons
- **Primary Button:** Pixel art styled button with purple background and white text
- **Secondary Button:** Dark gray with pixel art border
- **Text Button:** No background, white text with subtle hover animation
- **Magic Button:** For primary actions, features a pixel art styling with animated sparkles
- **States:** Default, Hover (with pixel glow effect), Active, Focused (with pulsing outline), Disabled

### 6.5.2 Input Fields
- **Text Input:** Dark gray background with pixel art border and subtle purple glow on focus
- **Select:** Custom dropdown with animated cat paw icon as indicator
- **Checkbox:** Pixel art checkbox with pawprint check mark
- **Radio Button:** Pixel art radio button with glowing dot
- **Toggle:** Cat-shaped pixel art toggle
- **States:** Default, Focus (with purple glow), Error (with soft red outline), Disabled

### 6.5.3 Cards
- **Tarot Card:** Special pixel art styled card for displaying bill items
- **Standard Card:** Dark gray background with pixel art border
- **Elevated Card:** Dark gray background with purple glow and slight elevation
- **Interactive Card:** Card with hover animation that slightly increases size and glow

### 6.5.4 Notifications
- **Toast:** Brief notification with pixel art cat icon that slides in
- **Alert:** Persistent notification with animated pixel art cat reactions
- **Banner:** Full-width notification with subtle pixel art background

### 6.5.5 Navigation
- **Top Bar:** App title with stylized pixel art cat silhouette
- **Back Button:** Featuring a pixel art arrow with cat paw
- **Page Transitions:** Smooth fade or slide transitions with pixel art elements

### 6.5.6 Lists
- **Standard List:** Simple list with pixel art cat paw bullet points
- **Action List:** List with items that react to touch with subtle animations
- **Dividers:** Subtle dotted or dashed lines in pixel art style

### 6.5.7 Friend Selection
- **Friend Pill:** Simple rectangular pill with the friend's name
- **Selected State:** Pill lights up or gets a star icon when selected
- **Search Field:** Pixel art styled search bar

## 6.6 Iconography
- **Style:** 8-bit pixel art icons with consistent style
- **Primary Set:** Cat-themed pixel art icons (paw prints, cat silhouettes, etc.)
- **Secondary Set:** Utility icons in pixel art style
- **Size:** 24px default size (aligned to pixel grid)
- **Special Icons:** Animated versions of key icons (like loading, success, etc.)

## 6.7 Animations and Transitions

### 6.7.1 Tarot Card Animations
- **Card Appearance:** Card flips over or fades in when a new item is shown
- **Card Assignment:** Subtle glow when friends are assigned to the card
- **Card Transition:** Card floats away with a magical effect when "Next Item" is pressed

### 6.7.2 General Animations
- **Duration:** Quick (180ms), Standard (350ms), Relaxed (600ms)
- **Easing:** Pixel-perfect easing - sudden movements followed by holds, reminiscent of 8-bit games
- **Hover Effects:** Gentle scaling (1.05x) with soft glow effects
- **Page Transitions:** Fade with slight scaling or gentle slide animations
- **Loading States:** Pixel art animations (sleeping cat, cat with crystal ball, etc.)
- **Success Animations:** Celebratory pixel art animations with confetti
- **Micro-interactions:** Subtle animations for button clicks, toggles, and other interactive elements

## 6.8 Responsive Design
- **Breakpoints:**
  - **Mobile:** < 640px (primary focus for v0)
  - **Tablet:** 640px - 1024px
  - **Desktop:** > 1024px (less emphasis for v0)
- **Layout Philosophy:** Mobile-first design with special attention to touch interactions
- **Dark Mode:** Design optimized for dark mode with deep black backgrounds
- **Touch Targets:** Minimum 48px × 48px for all interactive elements
- **Special Mobile Features:** Tarot card interactions optimized for touch

## 6.9 Illustrations and Graphics
- **Style:** 8-bit pixel art illustrations inspired by Studio Ghibli and Stardew Valley
- **Character:** Jiji-inspired cat mascot in fortune teller outfit
- **Backgrounds:** Subtle textured backgrounds with magical pixel art elements
- **Empty States:** Custom pixel art illustrations for empty states
- **Success States:** Celebration pixel art illustrations with the cat mascot

## 6.10 Accessibility
- **Color Contrast:** Exceed WCAG AA standards (7:1 for normal text, 4.5:1 for large text)
- **Keyboard Navigation:** All interactive elements accessible via keyboard with custom focus styles
- **Screen Readers:** Proper ARIA labels with playful but clear descriptions
- **Focus States:** Highly visible focus indicators with pixel art style
- **Text Sizing:** Support for browser text zoom up to 200%
- **Reduced Motion:** Alternative static designs for users who prefer reduced motion

## 6.11 Implementation Guidelines
- Use Tailwind CSS with a custom theme that includes all design system colors and values
- Create custom component variants in shadcn/ui that implement the pixel art styling
- Use border-image and background-image for pixel art elements
- Ensure animations maintain the pixel art aesthetic (avoid excessive smoothing)
- Create reusable components for common pixel art elements (buttons, cards, etc.)
- Use CSS pixel-snapping techniques to maintain crisp pixel edges