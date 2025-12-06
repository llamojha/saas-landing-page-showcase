"use client";

import { Suspense, useState } from "react";
import { Template } from "@/types/template";
import { GalleryGrid } from "@/components/GalleryGrid";
import { TemplateModal } from "@/components/TemplateModal";
import { FilterBar } from "@/components/FilterBar";
import { useFilters } from "@/hooks/useFilters";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/**
 * Home page content with filters, gallery grid, and template modal
 * Requirements: 2.1, 3.1
 */
function HomeContent() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    selectedCategories,
    selectedVibes,
    filteredTemplates,
    setCategories,
    setVibes,
    clearAll,
    hasActiveFilters,
  } = useFilters();

  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="container mx-auto px-4 py-8 flex-1">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Template Gallery</h1>
        <p className="mt-2 text-muted-foreground">
          Browse our curated collection of landing page templates. Click any
          card to view the prompt.
        </p>
      </div>

      <FilterBar
        selectedCategories={selectedCategories}
        selectedVibes={selectedVibes}
        onCategoryChange={setCategories}
        onVibeChange={setVibes}
        onClearAll={clearAll}
        hasActiveFilters={hasActiveFilters}
      />

      <GalleryGrid
        templates={filteredTemplates}
        onSelectTemplate={handleSelectTemplate}
      />

      <TemplateModal
        template={selectedTemplate}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}

/**
 * Home page wrapper with Suspense for useSearchParams
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<HomeLoading />}>
        <HomeContent />
      </Suspense>
      <Footer />
    </>
  );
}

function HomeLoading() {
  return (
    <main className="container mx-auto px-4 py-8 flex-1">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Template Gallery</h1>
        <p className="mt-2 text-muted-foreground">
          Browse our curated collection of landing page templates. Click any
          card to view the prompt.
        </p>
      </div>
      <div className="animate-pulse">
        <div className="mb-6 h-10 bg-muted rounded" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-muted rounded-lg" />
          ))}
        </div>
      </div>
    </main>
  );
}
