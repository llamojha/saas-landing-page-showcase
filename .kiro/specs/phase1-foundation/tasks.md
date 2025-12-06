# Implementation Plan

- [x] 1. Initialize Next.js project with TypeScript and Tailwind

  - Run `npx create-next-app@latest` with App Router, TypeScript, Tailwind, ESLint
  - Verify `tsconfig.json` and `tailwind.config.ts` are created
  - Install `lucide-react` for icons
  - _Requirements: 1.1, 1.2_

- [x] 2. Initialize Shadcn/UI

  - Run `npx shadcn@latest init` to set up components.json
  - Configure with default style and CSS variables
  - _Requirements: 1.3_

- [x] 3. Create TypeScript interfaces and validation

  - [x] 3.1 Create type definitions in `src/types/template.ts`
    - Define Category, Vibe, TechStack union types
    - Define Prompt interface with system and user fields
    - Define Template interface with all required fields
    - _Requirements: 2.1, 2.2_
  - [x] 3.2 Create validation function in `src/lib/validation.ts`
    - Implement validateTemplate function checking non-empty required strings
    - _Requirements: 2.4_
  - [ ]\* 3.3 Write property test for JSON round-trip
    - **Property 1: Template JSON Round-Trip**
    - **Validates: Requirements 2.3**
  - [ ]\* 3.4 Write property test for validation rejects empty fields
    - **Property 2: Template Validation Rejects Empty Fields**
    - **Validates: Requirements 2.4**

- [-] 4. Create seed inventory data

  - [x] 4.1 Create inventory file at `src/data/inventory.ts`
    - Export TEMPLATE_INVENTORY array with 3-5 placeholder templates
    - Use /images/ paths for thumbnail and preview
    - Include system and user prompt sections
    - _Requirements: 3.1, 3.2, 3.3_
  - [ ]\* 4.2 Write property test for image paths
    - **Property 3: Image Paths Are Relative to Public**
    - **Validates: Requirements 3.2**
  - [ ]\* 4.3 Write property test for prompt structure
    - **Property 4: Prompts Have Both Sections**
    - **Validates: Requirements 3.3**

- [x] 5. Create placeholder images directory

  - Create `/public/images/` directory
  - Add placeholder images or document that real images are needed
  - _Requirements: 3.2_

- [x] 6. Verify build succeeds

  - Run `npm run build` to ensure static generation works
  - _Requirements: 1.4_

- [x] 7. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
