# Requirements Document

## Introduction

Phase 2 delivers the Core MVP user flow: Browse → View Detail → Copy Prompt. This phase builds the visual gallery interface, template detail modal, and clipboard interaction that enables users to discover templates and copy AI prompts for use in tools like v0 or Bolt.

## Glossary

- **Gallery**: The responsive grid displaying template thumbnails
- **Template Card**: A clickable card showing template thumbnail, title, and description
- **Modal**: A dialog overlay displaying full template details and prompt
- **Clipboard API**: Browser API for copying text to user's clipboard
- **Toast**: A brief notification message confirming user actions

## Requirements

### Requirement 1

**User Story:** As a user, I want a consistent navigation and footer experience so I understand what the tool is.

#### Acceptance Criteria

1. WHEN the page loads THEN the Layout SHALL display a responsive navbar with the application logo and title
2. WHEN the page loads THEN the Layout SHALL display a footer with copyright and attribution links
3. WHEN the page is rendered THEN the Layout SHALL include SEO meta tags for title and description

### Requirement 2

**User Story:** As a user, I want to view thumbnails of all available templates so I can choose one that fits my aesthetic.

#### Acceptance Criteria

1. WHEN the gallery renders THEN the Gallery SHALL display templates in a responsive grid (1 column mobile, 2 columns tablet, 3 columns desktop)
2. WHEN a template has isChefsChoice set to true THEN the Card SHALL display a "Chef's Choice" badge
3. WHEN a user hovers over a card THEN the Card SHALL display a visual hover state
4. WHEN rendering template images THEN the Gallery SHALL use next/image for optimization

### Requirement 3

**User Story:** As a user, I want to see the full design and prompt details without leaving the page.

#### Acceptance Criteria

1. WHEN a user clicks a gallery card THEN the System SHALL open a modal dialog
2. WHEN the modal opens THEN the Modal SHALL display the full preview image
3. WHEN the modal opens THEN the Modal SHALL display the prompt text with system and user sections clearly formatted
4. WHEN the modal is open THEN the User SHALL be able to close it by clicking outside or pressing Escape

### Requirement 4

**User Story:** As a user, I want to copy the prompt with one click so I can paste it into my AI tool.

#### Acceptance Criteria

1. WHEN a user clicks the copy button THEN the System SHALL copy the combined system and user prompt to clipboard
2. WHEN the copy succeeds THEN the System SHALL display a toast notification confirming success
3. IF the clipboard API fails THEN the System SHALL display an error message to the user
