# Implementation Plan

- [x] 1. Set up Shadcn UI components

  - Install required Shadcn components: Card, Dialog, Button, Sonner (toast)
  - Run `npx shadcn@latest add card dialog button sonner`
  - _Requirements: 2.1, 3.1, 4.2_

- [x] 2. Create global layout components

  - [x] 2.1 Create Navbar component
    - Create `src/components/Navbar.tsx` with logo and title
    - Style with Tailwind for responsive behavior
    - _Requirements: 1.1_
  - [x] 2.2 Create Footer component
    - Create `src/components/Footer.tsx` with copyright and "Built with Kiro" link
    - _Requirements: 1.2_
  - [x] 2.3 Update layout.tsx
    - Add Navbar and Footer to root layout
    - Update metadata for SEO (title, description)
    - Add Sonner Toaster provider
    - _Requirements: 1.1, 1.2, 1.3_

- [x] 3. Create clipboard utility

  - [x] 3.1 Create formatPromptForClipboard function
    - Create `src/lib/clipboard.ts`
    - Implement function that combines system and user prompts
    - _Requirements: 4.1_
  - [ ]\* 3.2 Write property test for copy function
    - **Property 3: Copy Function Produces Combined Prompt**
    - **Validates: Requirements 4.1**

- [x] 4. Create gallery components

  - [x] 4.1 Create TemplateCard component
    - Create `src/components/TemplateCard.tsx`
    - Display thumbnail, title, description using Shadcn Card
    - Conditionally render "Chef's Choice" badge based on isChefsChoice
    - Add hover state styling
    - _Requirements: 2.1, 2.2, 2.3, 2.4_
  - [ ]\* 4.2 Write property test for badge consistency
    - **Property 1: Chef's Choice Badge Consistency**
    - **Validates: Requirements 2.2**
  - [x] 4.3 Create GalleryGrid component
    - Create `src/components/GalleryGrid.tsx`
    - Render responsive grid (1/2/3 columns)
    - Map through TEMPLATE_INVENTORY
    - Handle card selection state
    - _Requirements: 2.1_

- [x] 5. Create modal and copy functionality

  - [x] 5.1 Create CopyButton component
    - Create `src/components/CopyButton.tsx`
    - Use navigator.clipboard.writeText with formatPromptForClipboard
    - Show success toast on copy
    - Handle clipboard API errors with error toast
    - _Requirements: 4.1, 4.2, 4.3_
  - [x] 5.2 Create TemplateModal component
    - Create `src/components/TemplateModal.tsx`
    - Use Shadcn Dialog
    - Display preview image on left, prompt on right
    - Format prompt with system and user sections
    - Include CopyButton
    - _Requirements: 3.1, 3.2, 3.3, 3.4_
  - [ ]\* 5.3 Write property test for modal prompt display
    - **Property 2: Modal Displays Both Prompt Sections**
    - **Validates: Requirements 3.3**

- [x] 6. Wire up home page

  - Update `src/app/page.tsx` to render GalleryGrid
  - Add modal state management
  - Connect card selection to modal open
  - _Requirements: 2.1, 3.1_

- [x] 7. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
