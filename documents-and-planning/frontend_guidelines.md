# 4. Frontend Guidelines - Revised

## 4.1 Technologies
- Use React for all UI components.
- Use Vite for project setup and build process.
- Use shadcn/ui as a foundation, but customize components to match the pixel art aesthetic.
- Use Tailwind CSS for styling, with custom utility classes for pixel art elements.
- Use Lucide React as a base for icons, but adapt them to the 8-bit pixel style.
- Use Sonner for toast notifications, styled to match the pixel art theme.

## 4.2 Pixel Art Implementation
- Create a consistent pixel grid system (typically 8px or 16px grid).
- Disable anti-aliasing for pixel art elements using `image-rendering: pixelated` CSS property.
- Use CSS techniques like `border-image` and `background-image` with pixel art assets.
- For animations, use frame-by-frame techniques rather than smooth transitions to maintain the pixel art feel.
- Create a library of reusable pixel art elements (borders, backgrounds, buttons).

## 4.3 Component Structure
- Organize components into logical directories:
  - `/components/ui` - Base UI components with pixel styling
  - `/components/cards` - Tarot card components and animations
  - `/components/mascot` - Jiji fortune teller variations
  - `/components/screens` - Main application screens
- Create specialized components for the tarot card interface.
- Implement a dedicated component for the pixel art progress bar.
- Create reusable friend selection pill components.

## 4.4 State Management
- Use useState for component-level state.
- Implement a context provider for managing the bill-splitting flow state.
- Create a dedicated state management approach for the tarot card progression.
- Store item assignments and split calculations in a clear, structured state.

## 4.5 Styling
- Use Tailwind CSS classes for layout and basic styling.
- Create custom CSS for pixel art elements that can't be achieved with Tailwind alone.
- Use CSS custom properties (variables) for pixel art colors and dimensions.
- Create mixins or utility classes for common pixel art styling patterns.
- Maintain consistent 8-bit aesthetic throughout the application.
- Ensure pixel-perfect alignment by snapping to the pixel grid.

## 4.6 Animation Implementation
- Create frame-by-frame animations for the tarot card transitions.
- Use CSS animations with stepped keyframes for pixel art motion.
- Implement subtle sprite animations for the Jiji character.
- Ensure all animations have appropriate reduced-motion alternatives.
- Create reusable animation components for common effects (sparkles, magic glow, etc.).

## 4.7 Touch Interactions
- Design all interactions for touch-first experience.
- Implement swipe gestures where appropriate (card transitions, navigation).
- Ensure all interactive elements have a minimum touch target size of 48×48px.
- Add appropriate touch feedback (visual highlights, subtle animations).
- Test interactions thoroughly on actual mobile devices.
- Provide visual and audio feedback for touch interactions when possible.
- Avoid hover-based interactions that don't work on touch screens.

## 4.8 Responsive Design
- Focus primarily on mobile layouts (portrait orientation).
- Create adaptive layouts that adjust to different screen sizes.
- Ensure the tarot card interface scales appropriately on different devices.
- Test on a variety of mobile screen sizes.
- Implement a simple tablet/desktop layout as a secondary consideration.

## 4.9 Performance Optimization
- Keep pixel art assets small and optimized.
- Use sprite sheets for animations where appropriate.
- Implement code-splitting to keep initial load times fast.
- Optimize the OCR processing to minimize wait times.
- Monitor and maintain 60fps animations even on older devices.
- Use requestAnimationFrame for complex animations.

## 4.10 Accessibility
- Ensure all pixel art has sufficient contrast for readability.
- Provide text alternatives for purely decorative pixel art elements.
- Ensure the application is fully keyboard navigable.
- Implement proper ARIA attributes for custom components.
- Test with screen readers to ensure assistive technology compatibility.
- Create reduced-motion alternatives for all animations.

## 4.11 Asset Management
- Create and maintain a library of pixel art assets.
- Organize assets by type (UI elements, character sprites, cards, etc.).
- Use consistent naming conventions for all assets.
- Implement a sprite sheet system for efficient loading.
- Create both @1x and @2x versions of pixel art assets for different screen densities.
- Use SVG where possible for scaling without loss of pixelation effect.

## 4.12 Code Quality
- Write clean, well-documented code.
- Create reusable hooks for common pixel art animations.
- Use TypeScript for type safety.
- Follow consistent naming conventions for pixel art components.
- Create storybook examples for key pixel art components.
- Add comments explaining unusual or complex pixel art techniques.