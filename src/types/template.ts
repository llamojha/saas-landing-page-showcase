/**
 * Template type definitions for the SaaS Landing Page Showcase
 * Requirements: 2.1, 2.2
 */

export type Category = "DevTool" | "B2C" | "Enterprise" | "SaaS";

export type Vibe = "Playful" | "Serious" | "Dark" | "Minimal" | "Bold";

export type TechStack = "React" | "Next.js" | "Tailwind" | "Shadcn";

export interface Prompt {
  system: string;
  user: string;
}

export interface Template {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  preview: string;
  prompt: Prompt;
  category: Category[];
  vibe: Vibe[];
  techStack: TechStack[];
  isChefsChoice: boolean;
}
