/**
 * Dynamic template landing page
 * Requirements: 1.1, 1.3 - Display dedicated landing page for each template
 */
import { notFound } from "next/navigation";
import { TEMPLATE_INVENTORY } from "@/data/inventory";
import { Metadata } from "next";

// Template page components
import ModernSaasHero from "./templates/modern-saas-hero";
import DarkDevtoolLanding from "./templates/dark-devtool-landing";
import PlayfulB2cStartup from "./templates/playful-b2c-startup";
import EnterpriseSecurity from "./templates/enterprise-security";
import MinimalNewsletter from "./templates/minimal-newsletter";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate static params for all templates in inventory
 * Requirements: 1.3 - Generate static pages for all templates
 */
export async function generateStaticParams() {
  return TEMPLATE_INVENTORY.map((template) => ({
    slug: template.slug,
  }));
}

/**
 * Generate metadata for each template page
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = TEMPLATE_INVENTORY.find((t) => t.slug === slug);

  if (!template) {
    return {
      title: "Template Not Found",
    };
  }

  return {
    title: `${template.title} | Prompt Gallery`,
    description: template.description,
  };
}

/**
 * Map slugs to their corresponding template components
 */
const TEMPLATE_COMPONENTS: Record<string, React.ComponentType> = {
  "modern-saas-hero": ModernSaasHero,
  "dark-devtool-landing": DarkDevtoolLanding,
  "playful-b2c-startup": PlayfulB2cStartup,
  "enterprise-security": EnterpriseSecurity,
  "minimal-newsletter": MinimalNewsletter,
};

/**
 * Template landing page component
 * Requirements: 1.1 - Display dedicated landing page implementing template design
 */
export default async function TemplatePage({ params }: PageProps) {
  const { slug } = await params;

  // Find template in inventory
  const template = TEMPLATE_INVENTORY.find((t) => t.slug === slug);

  // Return 404 for invalid slugs
  if (!template) {
    notFound();
  }

  // Get the component for this template
  const TemplateComponent = TEMPLATE_COMPONENTS[slug];

  // If no component exists yet, show a placeholder
  if (!TemplateComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {template.title}
          </h1>
          <p className="text-gray-600">Template preview coming soon</p>
        </div>
      </div>
    );
  }

  return <TemplateComponent />;
}
