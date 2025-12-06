---
inclusion: manual
---

# Spec Generation Guide - “SaaS Landing Page Showcase + Prompt Generator”

B

Use this guide to generate Kiro specs from your MVP roadmap. Each feature in your roadmap can become a complete spec with requirements, design, and tasks.

## Quick Start

**To generate a spec, copy this prompt and replace [FEATURE_NAME]:**

```
Create a new spec for "[FEATURE_NAME]" based on the roadmap at #[[file:docs/roadmap.md]].

Use the PRD at #[[file:docs/PRD.md]] for product context and the tech architecture at #[[file:docs/tech-architecture.md]] for technical guidance.

Generate three files in .kiro/specs/[feature-slug]/:
1. requirements.md - User story and acceptance criteria
2. design.md - Technical approach and component design
3. tasks.md - Implementation checklist
```

## Spec Structure

Kiro will create specs with this structure:

```
.kiro/specs/[feature-name]/
├── requirements.md   # What to build (user story, acceptance criteria)
├── design.md         # How to build it (technical approach, components)
└── tasks.md          # Step-by-step implementation checklist
```

## Generating Specs by Phase

Your roadmap is organized into build phases. Generate specs in order:

### Phase 1: Foundation (Start Here)
These features have no dependencies. Generate and implement them first.

### Phase 2: Core MVP
These depend on Phase 1. Generate after foundation is complete.

### Phase 3: MVP Complete
These round out the MVP. Generate after core features work.

### Phase 4: Post-MVP (Optional)
Nice-to-have features. Generate only after MVP validation.

## Detailed Prompts

### Generate Full Spec (Recommended)
```
I want to implement "[FEATURE_NAME]" from the roadmap #[[file:docs/roadmap.md]].

Create a complete spec in .kiro/specs/[feature-slug]/ with:

**requirements.md:**
- User story from the roadmap
- Acceptance criteria (convert checkboxes to EARS format)
- References to PRD sections

**design.md:**
- Technical approach based on #[[file:docs/tech-architecture.md]]
- Key components and interfaces
- Data models if needed
- Error handling strategy

**tasks.md:**
- Implementation tasks derived from acceptance criteria
- Each task should be completable in one session
- Include a checkpoint task at the end
```

### Generate Requirements Only
```
Generate requirements.md for "[FEATURE_NAME]" based on #[[file:docs/roadmap.md]].
Include the user story and convert acceptance criteria to EARS format.
Reference relevant sections from #[[file:docs/PRD.md]].
```

### Generate Design Only
```
Generate design.md for "[FEATURE_NAME]".
Use the tech stack from #[[file:docs/tech-architecture.md]].
Include technical approach, component design, and error handling.
```

### Generate Tasks Only
```
Generate tasks.md for "[FEATURE_NAME]".
Break down the acceptance criteria into implementable tasks.
Each task should be small enough to complete in one session.
Add a checkpoint task to verify the feature works.
```

## Tips for Better Specs

1. **Generate in order** - Start with Phase 1 features, they have no dependencies
2. **Review before implementing** - Read through the spec and refine if needed
3. **Reference existing code** - Once you have code, point Kiro to it for consistency
4. **Keep tasks small** - If a task feels too big, ask Kiro to break it down
5. **Update as you learn** - Specs can evolve as you implement

## After Generating a Spec

1. Review the generated files in `.kiro/specs/[feature-name]/`
2. Edit if needed - you know your project best
3. Open `tasks.md` and click "Start task" on the first task
4. Let Kiro implement incrementally, reviewing each change
5. Mark tasks complete as you go

## Example Prompts

### Generate Requirements
```
Based on the roadmap item "[ITEM_NAME]" from #[[file:docs/roadmap.md]],
generate a requirements.md file with:
- A clear user story
- 3-5 acceptance criteria in EARS format
- References to relevant PRD sections
```

### Generate Design
```
Based on the requirements for "[FEATURE_NAME]" and the tech architecture
in #[[file:docs/tech-architecture.md]], generate a design.md file with:
- Technical approach
- Component design
- Data models
- Error handling strategy
```

### Generate Tasks
```
Based on the design for "[FEATURE_NAME]", generate a tasks.md file with:
- Numbered implementation tasks
- Sub-tasks where appropriate
- Test tasks marked as optional
- Checkpoint tasks for validation
```

## Tips for Iterating on Specs

1. **Start with requirements** - Get the user story and acceptance criteria right first
2. **Review before proceeding** - Have Kiro explain the requirements before generating design
3. **Reference existing code** - Point Kiro to relevant existing implementations
4. **Keep tasks small** - Each task should be completable in one session
5. **Include tests** - Property-based tests catch edge cases early
