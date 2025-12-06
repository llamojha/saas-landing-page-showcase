# Design Document

## Overview

Phase 3 completes the MVP by adding three key features: template landing pages that serve as live previews, client-side filtering for template discovery, and an About modal explaining the Kiro-built approach. The architecture remains static/client-side, with filtering logic operating on the in-memory inventory.

## Architecture

```mermaid
graph TB
    subgraph Pages
        Home[Home Page]
        Template[/templates/[slug]]
    end

    subgraph Components
        FilterBar[FilterBar]
        Gallery[GalleryGrid]
        AboutModal[AboutModal]
    end

    subgraph Hooks
        useFilters[useFilters Hook]
    end

    subgraph Data
        Inventory[TEMPLATE_INVENTORY]
    end

    Home --> FilterBar
    Home --> Gallery
    FilterBar --> useFilters
    Gallery --> useFilters
    useFilters --> Inventory
    Template --> Inventory
```

## Components and Interfaces

### FilterBar Component

```typescript
interface FilterBarProps {
  categories: Category[];
  vibes: Vibe[];
  selectedCategories: Category[];
  selectedVibes: Vibe[];
  onCategoryChange: (categories: Category[]) => void;
  onVibeChange: (vibes: Vibe[]) => void;
  onClearAll: () => void;
}
```

### useFilters Hook

```typescript
interface UseFiltersReturn {
  selectedCategories: Category[];
  selectedVibes: Vibe[];
  filteredTemplates: Template[];
  setCategories: (categories: Category[]) => void;
  setVibes: (vibes: Vibe[]) => void;
  clearAll: () => void;
  hasActiveFilters: boolean;
}
```

### AboutModal Component

```typescript
interface AboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
```

## Data Models

Existing `Template`, `Category`, and `Vibe` types from Phase 1 are sufficient. No new data models required.

## Correctness Properties

_A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees._

### Property 1: Static params cover all inventory slugs

_For any_ template inventory, generateStaticParams SHALL return a slug entry for every template in the inventory.
**Validates: Requirements 1.3**

### Property 2: Filter results match selected criteria

_For any_ set of selected categories and vibes, and any template inventory, all templates in the filtered result SHALL have at least one category in the selected categories (if any selected) AND at least one vibe in the selected vibes (if any selected).
**Validates: Requirements 2.2, 2.3**

### Property 3: URL params round-trip filter state

_For any_ filter state (selected categories and vibes), serializing to URL params and parsing back SHALL produce the same filter state.
**Validates: Requirements 2.4**

### Property 4: Clear all restores full inventory

_For any_ filter state, calling clearAll SHALL result in filteredTemplates equaling the full inventory.
**Validates: Requirements 2.6**

### Property 5: hasActiveFilters reflects filter state

_For any_ filter state, hasActiveFilters SHALL be true if and only if selectedCategories or selectedVibes is non-empty.
**Validates: Requirements 2.5**

## Error Handling

| Scenario                       | Handling                                          |
| ------------------------------ | ------------------------------------------------- |
| Invalid template slug          | Return 404 via Next.js notFound()                 |
| Empty filter results           | Display "No templates match your filters" message |
| URL params with invalid values | Ignore invalid values, use valid ones only        |

## Testing Strategy

### Property-Based Testing

- Use `fast-check` library for property-based tests
- Each property test runs minimum 100 iterations
- Tests tagged with format: `**Feature: phase3-mvp-complete, Property {N}: {description}**`

### Unit Tests

- FilterBar component renders correct filter options
- AboutModal opens/closes correctly
- Template pages render without errors

### Integration Tests

- Filter selection updates URL and gallery simultaneously
- Navigation to template pages works from gallery
