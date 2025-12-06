# Implementation Plan

- [-] 1. Implement filter logic and hook

  - [x] 1.1 Create useFilters hook with URL param sync
    - Implement filter state management with useSearchParams
    - Handle category and vibe multi-select logic
    - Sync filter state to/from URL query params
    - _Requirements: 2.2, 2.3, 2.4_
  - [ ]\* 1.2 Write property test for filter matching
    - **Property 2: Filter results match selected criteria**
    - **Validates: Requirements 2.2, 2.3**
  - [ ]\* 1.3 Write property test for URL params round-trip
    - **Property 3: URL params round-trip filter state**
    - **Validates: Requirements 2.4**
  - [ ]\* 1.4 Write property test for clear all
    - **Property 4: Clear all restores full inventory**
    - **Validates: Requirements 2.6**
  - [ ]\* 1.5 Write property test for hasActiveFilters
    - **Property 5: hasActiveFilters reflects filter state**
    - **Validates: Requirements 2.5**

- [x] 2. Build FilterBar component

  - [x] 2.1 Create FilterBar UI component
    - Multi-select dropdowns for categories and vibes
    - Clear All button (visible when filters active)
    - Integrate with useFilters hook
    - _Requirements: 2.1, 2.5, 2.6_
  - [x] 2.2 Integrate FilterBar into home page
    - Add FilterBar above GalleryGrid
    - Connect filtered templates to gallery
    - _Requirements: 2.1_

- [x] 3. Checkpoint - Ensure all tests pass

  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Create template landing pages

  - [x] 4.1 Set up dynamic route structure
    - Create `/templates/[slug]/page.tsx` with generateStaticParams
    - Implement notFound() for invalid slugs
    - _Requirements: 1.1, 1.3_
  - [ ]\* 4.2 Write property test for static params coverage
    - **Property 1: Static params cover all inventory slugs**
    - **Validates: Requirements 1.3**
  - [x] 4.3 Implement first template landing page (modern-saas-hero)
    - Self-contained page with own styling
    - Implements design from prompt description
    - _Requirements: 1.1, 1.2_
  - [x] 4.4 Implement remaining template landing pages
    - dark-devtool-landing, playful-b2c-startup, enterprise-security, minimal-newsletter
    - Each self-contained with unique styling
    - _Requirements: 1.1, 1.2_

- [x] 5. Build About modal

  - [x] 5.1 Create AboutModal component
    - Use Shadcn Dialog component
    - Content explaining Omakase concept and Kiro
    - Close on outside click and Escape key
    - _Requirements: 3.1, 3.2, 3.3_
  - [x] 5.2 Add About button to Navbar
    - Wire button to open AboutModal
    - _Requirements: 3.1_

- [ ] 6. Final Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
