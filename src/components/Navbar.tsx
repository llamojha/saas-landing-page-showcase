"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AboutModal } from "@/components/AboutModal";

/**
 * Navbar component for the SaaS Landing Page Showcase
 * Requirements: 1.1 - Display responsive navbar with application logo and title
 * Requirements: 3.1 - About button to open informational modal
 */

export function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
              aria-hidden="true"
            >
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
            <span className="text-lg font-semibold tracking-tight">
              Prompt Gallery
            </span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setAboutOpen(true)}>
            About
          </Button>
        </nav>
      </header>
      <AboutModal open={aboutOpen} onOpenChange={setAboutOpen} />
    </>
  );
}
