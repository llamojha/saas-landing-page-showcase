"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Prompt } from "@/types/template";
import { formatPromptForClipboard } from "@/lib/clipboard";

/**
 * CopyButton component for copying prompts to clipboard
 * Requirements: 4.1, 4.2, 4.3
 */
interface CopyButtonProps {
  prompt: Prompt;
}

export function CopyButton({ prompt }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const formattedPrompt = formatPromptForClipboard(prompt);
      await navigator.clipboard.writeText(formattedPrompt);
      setCopied(true);
      toast.success("Prompt copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
      toast.error("Failed to copy prompt. Please try again.");
    }
  };

  return (
    <Button onClick={handleCopy} className="gap-2">
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          Copy Prompt
        </>
      )}
    </Button>
  );
}
