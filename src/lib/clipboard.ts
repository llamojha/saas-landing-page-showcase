/**
 * Clipboard utility functions
 * Requirements: 4.1
 */

import { Prompt } from "@/types/template";

/**
 * Formats a prompt for clipboard copying by combining system and user prompts.
 * @param prompt - The Prompt object containing system and user prompt text
 * @returns A formatted string with both prompt sections
 */
export function formatPromptForClipboard(prompt: Prompt): string {
  return `## System Prompt\n${prompt.system}\n\n## User Prompt\n${prompt.user}`;
}
