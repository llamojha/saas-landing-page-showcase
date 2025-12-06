"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Template } from "@/types/template";

interface TemplateCardProps {
  template: Template;
  onSelect: (template: Template) => void;
}

export function TemplateCard({ template, onSelect }: TemplateCardProps) {
  const previewUrl = `/templates/${template.slug}`;

  return (
    <Card
      className="cursor-pointer overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50"
      onClick={() => onSelect(template)}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <iframe
          src={previewUrl}
          title={template.title}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            transform: "scale(0.25)",
            transformOrigin: "top left",
            width: "400%",
            height: "400%",
          }}
          loading="lazy"
        />
        {template.isChefsChoice && (
          <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full z-10">
            Chef&apos;s Choice
          </span>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{template.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-2">
          {template.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
