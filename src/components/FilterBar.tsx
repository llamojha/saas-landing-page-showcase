"use client";

/**
 * FilterBar Component - Multi-select filters for categories and vibes
 * Requirements: 2.1, 2.5, 2.6
 */

import { Category, Vibe } from "@/types/template";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Available filter options
const CATEGORIES: Category[] = ["DevTool", "B2C", "Enterprise", "SaaS"];
const VIBES: Vibe[] = ["Playful", "Serious", "Dark", "Minimal", "Bold"];

interface FilterBarProps {
  selectedCategories: Category[];
  selectedVibes: Vibe[];
  onCategoryChange: (categories: Category[]) => void;
  onVibeChange: (vibes: Vibe[]) => void;
  onClearAll: () => void;
  hasActiveFilters: boolean;
}

export function FilterBar({
  selectedCategories,
  selectedVibes,
  onCategoryChange,
  onVibeChange,
  onClearAll,
  hasActiveFilters,
}: FilterBarProps) {
  const toggleCategory = (category: Category) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter((c) => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const toggleVibe = (vibe: Vibe) => {
    if (selectedVibes.includes(vibe)) {
      onVibeChange(selectedVibes.filter((v) => v !== vibe));
    } else {
      onVibeChange([...selectedVibes, vibe]);
    }
  };

  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            Category:
          </span>
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={
                selectedCategories.includes(category) ? "default" : "outline"
              }
              size="sm"
              onClick={() => toggleCategory(category)}
              className={cn(
                "transition-colors",
                selectedCategories.includes(category) &&
                  "ring-2 ring-primary/20"
              )}
              aria-pressed={selectedCategories.includes(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Vibe filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            Vibe:
          </span>
          {VIBES.map((vibe) => (
            <Button
              key={vibe}
              variant={selectedVibes.includes(vibe) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleVibe(vibe)}
              className={cn(
                "transition-colors",
                selectedVibes.includes(vibe) && "ring-2 ring-primary/20"
              )}
              aria-pressed={selectedVibes.includes(vibe)}
            >
              {vibe}
            </Button>
          ))}
        </div>

        {/* Clear All button - visible when filters active */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear All
          </Button>
        )}
      </div>
    </div>
  );
}
