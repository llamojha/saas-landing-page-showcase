/**
 * Minimal Newsletter Signup Template Page
 * Requirements: 1.1, 1.2 - Self-contained page implementing template design
 *
 * Design: Ultra-clean single-page design focused on newsletter signups.
 * Maximum conversion with minimal distraction.
 */
"use client";

import { useState } from "react";

export default function MinimalNewsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Accent Line */}
        <div className="w-12 h-1 bg-indigo-600 mx-auto mb-12"></div>

        {!isSubmitted ? (
          <>
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Ideas worth sharing.
            </h1>

            {/* Benefits */}
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Join 10,000+ readers getting weekly insights on design,
              technology, and building products that matter. No spam,
              unsubscribe anytime.
            </p>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-600 transition text-center"
                required
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-4 text-lg font-semibold rounded-xl hover:bg-indigo-700 transition"
              >
                Subscribe
              </button>
            </form>

            {/* Trust Signal */}
            <p className="text-sm text-gray-400 mt-6">
              Free forever. No credit card required.
            </p>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="text-5xl mb-6">✓</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              You&apos;re in!
            </h2>
            <p className="text-lg text-gray-600">
              Check your inbox for a confirmation email. Welcome to the
              community.
            </p>
          </>
        )}

        {/* Accent Line */}
        <div className="w-12 h-1 bg-indigo-600 mx-auto mt-12"></div>
      </div>
    </div>
  );
}
