# Product Context - “SaaS Landing Page Showcase + Prompt Generator”

B

This steering file provides product context for Kiro to understand the product vision, target users, and success metrics.

## Vision

- **Role:** Marketing Manager or First-time Founder.
- **Goal:** Launch a landing page for a new newsletter or service.
- **Pain Points:** Uses ChatGPT/Claude but gets frustrated when results look "ugly." Doesn't know what a "sticky navbar" or "call-to-action hierarchy" is.
- **Why Switch:** Visual selection is easier than text description. She wants to shop for a look like a menu, then get the recipe.


## Mission

1.  **Backend / Database:** The app will be a static site (SPA). Templates are hardcoded in a JSON file. This reduces complexity and hosting costs to zero.
2.  **User Submissions:** We will not allow users to submit their own prompts in V1 to maintain quality control ("The Chef's Standard").
3.  **Live Code Preview:** We will not render the HTML/CSS live. We only show screenshots. Rendering live code introduces security risks and complexity.
4.  **Payment Processing:** The tool is free. Monetization is not a goal for the Hackathon version.


## Target Users

### Persona A: The Indie Hacker (Alex)

- **Role:** Full-stack developer or solo founder.
- **Goal:** Ship an MVP over the weekend.
- **Pain Points:** Good at logic/backend, terrible at CSS and design. Hates wasting time tweaking padding and colors.
- **Why Switch:** Wants "copy-paste UI" but for the AI age. Needs the *prompt* to get the code, not the code itself.

### Persona B: The Non-Technical Visionary (Sarah)

- **Role:** Marketing Manager or First-time Founder.
- **Goal:** Launch a landing page for a new newsletter or service.
- **Pain Points:** Uses ChatGPT/Claude but gets frustrated when results look "ugly." Doesn't know what a "sticky navbar" or "call-to-action hierarchy" is.
- **Why Switch:** Visual selection is easier than text description. She wants to shop for a look like a menu, then get the recipe.

### Persona C: The AI Tinkerer (Devin)

- **Role:** Early adopter of AI tools (v0, Bolt.new).
- **Goal:** Push the limits of what AI builders can do.
- **Pain Points:** Running out of creative ideas to test the tools.
- **Why Switch:** Uses the platform as a prompt library to learn how to better structure their own requests.

---


## User Personas

### Persona A: The Indie Hacker (Alex)

- **Role:** Full-stack developer or solo founder.
- **Goal:** Ship an MVP over the weekend.
- **Pain Points:** Good at logic/backend, terrible at CSS and design. Hates wasting time tweaking padding and colors.
- **Why Switch:** Wants "copy-paste UI" but for the AI age. Needs the *prompt* to get the code, not the code itself.

### Persona B: The Non-Technical Visionary (Sarah)

- **Role:** Marketing Manager or First-time Founder.
- **Goal:** Launch a landing page for a new newsletter or service.
- **Pain Points:** Uses ChatGPT/Claude but gets frustrated when results look "ugly." Doesn't know what a "sticky navbar" or "call-to-action hierarchy" is.
- **Why Switch:** Visual selection is easier than text description. She wants to shop for a look like a menu, then get the recipe.

### Persona C: The AI Tinkerer (Devin)

- **Role:** Early adopter of AI tools (v0, Bolt.new).
- **Goal:** Push the limits of what AI builders can do.
- **Pain Points:** Running out of creative ideas to test the tools.
- **Why Switch:** Uses the platform as a prompt library to learn how to better structure their own requests.

---


## Success Metrics & KPIs

| Metric | Type | Definition | Target Goal |
| :--- | :--- | :--- | :--- |
| **Prompt Copy Rate (PCR)** | Leading | % of unique visitors who click "Copy" on at least one prompt. | > 40% |
| **Time to Value** | Leading | Average time from page load to first "Copy" action. | < 45 seconds |
| **Gallery Scroll Depth** | Engagement | % of users who scroll to the bottom of the template list. | > 60% |
| **Return Rate** | Lagging | % of users returning within 7 days (indicating they use it as a resource). | > 15% |

---


## Constraints

- **Description:** Simple tag-based filtering system.
- **Requirements:**
  - Filter by: Industry (DevTool, B2C, Enterprise), Vibe (Playful, Serious, Dark).
  - Instant client-side filtering (no reload).


## Core Value Proposition

