/**
 * Footer component for the SaaS Landing Page Showcase
 * Requirements: 1.2 - Display footer with copyright and attribution links
 */

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Prompt Gallery. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with{" "}
          <a
            href="https://kiro.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            Kiro
          </a>
        </p>
      </div>
    </footer>
  );
}
