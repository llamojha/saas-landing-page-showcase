"use client";

import { Template } from "@/types/template";
import { TEMPLATE_INVENTORY } from "@/data/inventory";
import { TemplateCard } from "@/components/TemplateCard";

interface GalleryGridProps {
  templates?: Template[];
  onSelectTemplate?: (template: Template) => void;
}

/**
 * GalleryGrid Component - Displays templates in a responsive grid
 * Requirements: 2.1
 */
export function GalleryGrid({ templates, onSelectTemplate }: GalleryGridProps) {
  // Use provided templates or fall back to full inventory
  const displayTemplates = templates ?? TEMPLATE_INVENTORY;

  if (displayTemplates.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground">
          No templates match your filters. Try adjusting your selection.
        </p>
      </div>
    );
  }

  const handleSelect = (template: Template) => {
    onSelectTemplate?.(template);
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {displayTemplates.map((template) => (
        <TemplateCard
          key={template.id}
          template={template}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}
