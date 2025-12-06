import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * SEO metadata for the application
 * Requirements: 1.3 - Include SEO meta tags for title and description
 */
export const metadata: Metadata = {
  title: "Prompt Gallery | SaaS Landing Page Templates",
  description:
    "Browse curated AI prompts for beautiful SaaS landing pages. Copy prompts and paste into v0, Bolt, or your favorite AI tool to generate stunning designs.",
  keywords: ["AI prompts", "landing page", "SaaS", "v0", "Bolt", "templates"],
  openGraph: {
    title: "Prompt Gallery | SaaS Landing Page Templates",
    description: "Browse curated AI prompts for beautiful SaaS landing pages.",
    type: "website",
  },
};

/**
 * Root layout component
 * Requirements: 1.1, 1.2, 1.3 - Global layout with Navbar, Footer, and SEO
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
