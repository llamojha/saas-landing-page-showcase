"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/**
 * AboutModal component explaining the Omakase concept and Kiro
 * Requirements: 3.1, 3.2, 3.3
 */
interface AboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AboutModal({ open, onOpenChange }: AboutModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>About Prompt Gallery</DialogTitle>
          <DialogDescription>
            A curated collection of AI-ready landing page prompts
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 text-sm">
          <section>
            <h3 className="font-semibold mb-2">The Omakase Approach</h3>
            <p className="text-muted-foreground">
              Like a chef&apos;s tasting menu, we&apos;ve carefully curated each
              prompt to deliver high-quality results. Instead of overwhelming
              you with endless options, we present a thoughtfully selected
              collection of landing page designs that work.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Built with Kiro</h3>
            <p className="text-muted-foreground">
              This site was built using{" "}
              <a
                href="https://kiro.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Kiro
              </a>
              , an AI-powered IDE that helps developers build software through
              spec-driven development. Kiro transforms rough ideas into detailed
              requirements, designs, and implementation plans.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">How to Use</h3>
            <p className="text-muted-foreground">
              Browse the gallery, find a design you like, and copy the prompt.
              Paste it into your favorite AI tool (v0, Bolt, Claude, ChatGPT) to
              generate your own landing page code.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
