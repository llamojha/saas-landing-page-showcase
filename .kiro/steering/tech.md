# Technology Context - “SaaS Landing Page Showcase + Prompt Generator”

B

This steering file provides technology context for Kiro to understand the tech stack, dependencies, and development environment.

## Technology Stack

| Layer | Tool | Purpose |
| :--- | :--- | :--- |
| **Infrastructure** | Vercel Dashboard | Bandwidth, Build Status, Function Invocations. |
| **Frontend Performance** | Google Lighthouse / PageSpeed | CI/CD check for Core Web Vitals. |
| **User Behavior** | PostHog / Vercel Analytics | Funnels, Conversion tracking. |
| **Error Tracking** | Sentry | Client-side exception catching. |


## Dependencies

*   **Purpose**: Delivers the visual gallery interface, handles user interactions, and manages the "copy prompt" workflow.
*   **Responsibilities**:
    *   Routing (Home vs. Detail View).
    *   Rendering responsive image grids.
    *   Client-side filtering (by Category, Vibe, Tech Stack).
    *   Managing the Modal state and Clipboard interactions.
*   **Technology**: Next.js (App Router), React, TypeScript.
*   **Dependencies**: CDN for asset delivery.
*   **Scaling**: Infinite horizontal scaling (executed on client).
*   **Failure Mode**: If CDN fails, site is unreachable. If client JS fails, site renders static HTML (progressive enhancement).


## Framework Versions & Requirements

The system utilizes a **Serverless / Static Site Generation (SSG)** architecture. The entire application logic, data, and assets are pre-built and distributed via a global Content Delivery Network (CDN). There is no persistent runtime server or database connection required during user interaction.

*   **Build Logs**: Monitored in Vercel. Alerts on build failure (e.g., TypeScript errors, image optimization timeouts).
*   **Runtime Errors**:
    *   **Tool**: Sentry (Free Tier).
    *   **Scope**: Catch JavaScript exceptions (e.g., `LocalStorage` quota exceeded, JSON parsing errors on older browsers).
    *   **Alerting**: Email notification on spike in error rate > 1%.


## Development Environment Setup


## Build Configuration

*   **Purpose**: Optional "Remix" button to open the prompt directly in tools like v0.dev or bolt.new.
*   **Protocol**: URL Parameters (GET).
*   **Example**: `https://v0.dev/new?q={URL_ENCODED_PROMPT}`
*   **Authentication**: Handled by the target platform (User must be logged in to v0).

---


## Technical Constraints

### Compute (Build Time Only)

*   **Provider**: Vercel (Serverless Build Container).
*   **Specification**: Standard Node.js environment (18.x or 20.x).
*   **Frequency**: Runs only on git push/merge.

### Storage & Content Delivery

*   **Primary Storage**: Git Repository (GitHub) for code and JSON data.
*   **Asset Storage**: Vercel Blob or bundled static assets for images.
*   **CDN**: Vercel Edge Network.
    *   **Caching**: `stale-while-revalidate` strategy for static assets.
    *   **Bandwidth**: Estimated 50-100GB/month (heavily dependent on image optimization).

### Network

*   **Protocol**: HTTP/2 or HTTP/3 (QUIC).
*   **Latency**: Target < 100ms TTFB (Time to First Byte) globally.
*   **DNS**: Managed via Vercel or external registrar (Cloudflare) pointing to Vercel CNAME.

### Security

*   **SSL/TLS**: Automatic provisioning via Let's Encrypt.
*   **Headers**: 
    *   `X-Content-Type-Options: nosniff`
    *   `X-Frame-Options: DENY`
    *   `Referrer-Policy: strict-origin-when-cross-origin`

### Cost Estimates (Monthly)

| Component | Tier | Estimated Cost | Notes |
| :--- | :--- | :--- | :--- |
| **Hosting (Vercel)** | Hobby / Pro | $0 - $20 | Free for personal/MVP usage. |
| **Domain** | .com | $12/year | ~ $1/month. |
| **Analytics** | Free Tier | $0 | Up to ~2.5k events/month usually free. |
| **Total** | | **~$1 - $20** | Extremely low overhead. |

---

