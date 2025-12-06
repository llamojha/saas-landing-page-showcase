"use client";

/**
 * useFilters Hook - Filter state management with URL param sync
 * Requirements: 2.2, 2.3, 2.4
 *
 * Feature: phase3-mvp-complete
 */

import { useCallback, useMemo } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Category, Vibe, Template } from "@/types/template";
import { TEMPLATE_INVENTORY } from "@/data/inventory";

// Valid category and vibe values for validation
const VALID_CATEGORIES: Category[] = ["DevTool", "B2C", "Enterprise", "SaaS"];
const VALID_VIBES: Vibe[] = ["Playful", "Serious", "Dark", "Minimal", "Bold"];

export interface UseFiltersReturn {
  selectedCategories: Category[];
  selectedVibes: Vibe[];
  filteredTemplates: Template[];
  setCategories: (categories: Category[]) => void;
  setVibes: (vibes: Vibe[]) => void;
  clearAll: () => void;
  hasActiveFilters: boolean;
}

/**
 * Parse categories from URL params, filtering out invalid values
 */
export function parseCategories(param: string | null): Category[] {
  if (!param) return [];
  return param
    .split(",")
    .filter((c): c is Category => VALID_CATEGORIES.includes(c as Category));
}

/**
 * Parse vibes from URL params, filtering out invalid values
 */
export function parseVibes(param: string | null): Vibe[] {
  if (!param) return [];
  return param
    .split(",")
    .filter((v): v is Vibe => VALID_VIBES.includes(v as Vibe));
}

/**
 * Serialize categories to URL param string
 */
export function serializeCategories(categories: Category[]): string {
  return categories.join(",");
}

/**
 * Serialize vibes to URL param string
 */
export function serializeVibes(vibes: Vibe[]): string {
  return vibes.join(",");
}

/**
 * Filter templates based on selected categories and vibes
 * A template matches if it has at least one category in selected categories (if any)
 * AND at least one vibe in selected vibes (if any)
 */
export function filterTemplates(
  templates: Template[],
  selectedCategories: Category[],
  selectedVibes: Vibe[]
): Template[] {
  return templates.filter((template) => {
    // If no categories selected, all templates pass category filter
    const matchesCategory =
      selectedCategories.length === 0 ||
      template.category.some((c) => selectedCategories.includes(c));

    // If no vibes selected, all templates pass vibe filter
    const matchesVibe =
      selectedVibes.length === 0 ||
      template.vibe.some((v) => selectedVibes.includes(v));

    return matchesCategory && matchesVibe;
  });
}

/**
 * Custom hook for managing filter state with URL param synchronization
 */
export function useFilters(): UseFiltersReturn {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Parse current filter state from URL params
  const selectedCategories = useMemo(
    () => parseCategories(searchParams.get("categories")),
    [searchParams]
  );

  const selectedVibes = useMemo(
    () => parseVibes(searchParams.get("vibes")),
    [searchParams]
  );

  // Filter templates based on current selection
  const filteredTemplates = useMemo(
    () =>
      filterTemplates(TEMPLATE_INVENTORY, selectedCategories, selectedVibes),
    [selectedCategories, selectedVibes]
  );

  // Check if any filters are active
  const hasActiveFilters = useMemo(
    () => selectedCategories.length > 0 || selectedVibes.length > 0,
    [selectedCategories, selectedVibes]
  );

  // Update URL params helper
  const updateParams = useCallback(
    (categories: Category[], vibes: Vibe[]) => {
      const params = new URLSearchParams();

      if (categories.length > 0) {
        params.set("categories", serializeCategories(categories));
      }

      if (vibes.length > 0) {
        params.set("vibes", serializeVibes(vibes));
      }

      const queryString = params.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
      router.push(newUrl, { scroll: false });
    },
    [pathname, router]
  );

  // Set categories and update URL
  const setCategories = useCallback(
    (categories: Category[]) => {
      updateParams(categories, selectedVibes);
    },
    [updateParams, selectedVibes]
  );

  // Set vibes and update URL
  const setVibes = useCallback(
    (vibes: Vibe[]) => {
      updateParams(selectedCategories, vibes);
    },
    [updateParams, selectedCategories]
  );

  // Clear all filters
  const clearAll = useCallback(() => {
    router.push(pathname, { scroll: false });
  }, [pathname, router]);

  return {
    selectedCategories,
    selectedVibes,
    filteredTemplates,
    setCategories,
    setVibes,
    clearAll,
    hasActiveFilters,
  };
}
