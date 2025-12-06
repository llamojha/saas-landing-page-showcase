/**
 * Template landing page layout
 * Self-contained layout without main app Navbar/Footer
 * Requirements: 1.2 - Template pages are self-contained with own styling
 */
export default function TemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
