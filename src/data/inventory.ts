/**
 * Template inventory data for the SaaS Landing Page Showcase
 * Requirements: 3.1, 3.2, 3.3
 */

import { Template } from "@/types/template";

export const TEMPLATE_INVENTORY: Template[] = [
  {
    id: "1",
    slug: "modern-saas-hero",
    title: "Modern SaaS Hero",
    description:
      "Clean hero section with gradient background and floating UI elements. Perfect for developer tools and productivity apps.",
    thumbnail: "https://placehold.co/600x400/6366f1/ffffff?text=Modern+SaaS",
    preview:
      "https://placehold.co/1200x800/6366f1/ffffff?text=Modern+SaaS+Preview",
    prompt: {
      system:
        "You are a senior frontend developer specializing in modern SaaS landing pages. You write clean, semantic HTML with Tailwind CSS. Focus on accessibility, responsive design, and smooth animations.",
      user: "Create a modern SaaS landing page hero section with a gradient background transitioning from indigo to purple. Include a bold headline, subheadline, two CTA buttons (primary and secondary), and a floating dashboard mockup image. Use Tailwind CSS for styling.",
    },
    category: ["SaaS", "DevTool"],
    vibe: ["Minimal", "Bold"],
    techStack: ["Next.js", "Tailwind"],
    isChefsChoice: true,
  },
  {
    id: "2",
    slug: "dark-devtool-landing",
    title: "Dark DevTool Landing",
    description:
      "Sleek dark-themed landing page designed for developer tools. Features code snippets and terminal-style elements.",
    thumbnail: "https://placehold.co/600x400/1f2937/10b981?text=Dark+DevTool",
    preview:
      "https://placehold.co/1200x800/1f2937/10b981?text=Dark+DevTool+Preview",
    prompt: {
      system:
        "You are a frontend developer who specializes in dark-themed interfaces for developer tools. You prioritize readability, syntax highlighting aesthetics, and a professional developer experience.",
      user: "Build a dark-themed landing page for a CLI tool. Include a hero with a terminal mockup showing sample commands, feature cards with icons, and a code snippet section demonstrating the tool's syntax. Use a dark gray background with green and blue accent colors.",
    },
    category: ["DevTool"],
    vibe: ["Dark", "Serious"],
    techStack: ["Next.js", "Tailwind", "Shadcn"],
    isChefsChoice: false,
  },
  {
    id: "3",
    slug: "playful-b2c-startup",
    title: "Playful B2C Startup",
    description:
      "Vibrant and energetic landing page for consumer apps. Uses bold colors, playful illustrations, and engaging animations.",
    thumbnail: "https://placehold.co/600x400/f97316/ffffff?text=Playful+B2C",
    preview:
      "https://placehold.co/1200x800/f97316/ffffff?text=Playful+B2C+Preview",
    prompt: {
      system:
        "You are a creative frontend developer who builds fun, engaging landing pages for consumer products. You love using vibrant colors, playful micro-interactions, and approachable copy.",
      user: "Create a playful landing page for a mobile app that helps people track their daily habits. Use bright colors (coral, teal, yellow), rounded corners, and include animated illustrations. Add a phone mockup showing the app interface and testimonial cards from happy users.",
    },
    category: ["B2C"],
    vibe: ["Playful", "Bold"],
    techStack: ["React", "Tailwind"],
    isChefsChoice: true,
  },
  {
    id: "4",
    slug: "enterprise-security",
    title: "Enterprise Security Platform",
    description:
      "Professional and trustworthy landing page for enterprise security solutions. Emphasizes credibility and compliance.",
    thumbnail: "https://placehold.co/600x400/1e3a5f/ffffff?text=Enterprise",
    preview:
      "https://placehold.co/1200x800/1e3a5f/ffffff?text=Enterprise+Preview",
    prompt: {
      system:
        "You are a frontend developer experienced in building enterprise B2B landing pages. You focus on conveying trust, security, and professionalism through clean design and strategic use of whitespace.",
      user: "Design an enterprise landing page for a cybersecurity platform. Include a hero with a shield icon and trust badges, a features grid highlighting compliance certifications (SOC2, GDPR), customer logos section, and a demo request form. Use navy blue and white with subtle gray accents.",
    },
    category: ["Enterprise", "SaaS"],
    vibe: ["Serious", "Minimal"],
    techStack: ["Next.js", "Tailwind", "Shadcn"],
    isChefsChoice: false,
  },
  {
    id: "5",
    slug: "minimal-newsletter",
    title: "Minimal Newsletter Signup",
    description:
      "Ultra-clean single-page design focused on newsletter signups. Maximum conversion with minimal distraction.",
    thumbnail: "https://placehold.co/600x400/f5f5f5/333333?text=Minimal",
    preview: "https://placehold.co/1200x800/f5f5f5/333333?text=Minimal+Preview",
    prompt: {
      system:
        "You are a conversion-focused frontend developer. You build minimal, distraction-free landing pages that maximize signup rates through clear value propositions and simple forms.",
      user: "Create a minimal newsletter signup page with a single headline, one paragraph of benefits, an email input field, and a subscribe button. Use lots of whitespace, a single accent color, and ensure the form is prominently centered. No navigation or footer needed.",
    },
    category: ["B2C", "SaaS"],
    vibe: ["Minimal"],
    techStack: ["React", "Tailwind"],
    isChefsChoice: true,
  },
];
