"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Template } from "@/types/template";
import { CopyButton } from "@/components/CopyButton";

/**
 * TemplateModal component for displaying template details
 * Requirements: 3.1, 3.2, 3.3, 3.4
 */
interface TemplateModalProps {
  template: Template | null;
  open: boolean;
  onClose: () => void;
}

export function TemplateModal({ template, open, onClose }: TemplateModalProps) {
  if (!template) return null;

  const previewUrl = `/templates/${template.slug}`;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{template.title}</DialogTitle>
          <DialogDescription>{template.description}</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Live Preview - Left Side */}
          <div className="space-y-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
              <iframe
                src={previewUrl}
                title={`${template.title} preview`}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                  transform: "scale(0.25)",
                  transformOrigin: "top left",
                  width: "400%",
                  height: "400%",
                }}
              />
            </div>
            <Button asChild variant="outline" className="w-full">
              <Link href={previewUrl} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Preview
              </Link>
            </Button>
          </div>

          {/* Prompt Content - Right Side */}
          <div className="flex flex-col gap-4">
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                  System Prompt
                </h3>
                <div className="bg-muted p-3 rounded-md text-sm whitespace-pre-wrap max-h-32 overflow-y-auto">
                  {template.prompt.system}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                  User Prompt
                </h3>
                <div className="bg-muted p-3 rounded-md text-sm whitespace-pre-wrap max-h-32 overflow-y-auto">
                  {template.prompt.user}
                </div>
              </div>
            </div>

            <CopyButton prompt={template.prompt} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
