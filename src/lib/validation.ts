import { Template } from "@/types/template";

/**
 * Validates that a Template has all required non-empty string fields
 * Requirements: 2.4
 */
export function validateTemplate(template: Template): boolean {
  const requiredStrings = [
    template.id,
    template.slug,
    template.title,
    template.description,
    template.thumbnail,
    template.preview,
    template.prompt.system,
    template.prompt.user,
  ];

  return requiredStrings.every(
    (s) => typeof s === "string" && s.trim().length > 0
  );
}
