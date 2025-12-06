/**
 * Enterprise Security Platform Template Page
 * Requirements: 1.1, 1.2 - Self-contained page implementing template design
 *
 * Design: Professional and trustworthy landing page for enterprise security solutions.
 * Emphasizes credibility and compliance.
 */
"use client";

export default function EnterpriseSecurity() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="px-6 py-4 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">🛡️</span>
            </div>
            <span className="font-bold text-xl text-slate-900">
              SecureGuard
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#solutions"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Solutions
            </a>
            <a
              href="#compliance"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Compliance
            </a>
            <a
              href="#customers"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Customers
            </a>
            <a
              href="#resources"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Resources
            </a>
            <button className="bg-slate-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-slate-800 transition">
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white/10 text-white/80 px-4 py-1 rounded-full text-sm">
              SOC 2 Type II
            </span>
            <span className="bg-white/10 text-white/80 px-4 py-1 rounded-full text-sm">
              ISO 27001
            </span>
            <span className="bg-white/10 text-white/80 px-4 py-1 rounded-full text-sm">
              GDPR Compliant
            </span>
            <span className="bg-white/10 text-white/80 px-4 py-1 rounded-full text-sm">
              HIPAA Ready
            </span>
          </div>

          {/* Shield Icon */}
          <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <span className="text-5xl">🛡️</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Enterprise-Grade Security for the Modern Workplace
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Protect your organization with comprehensive cybersecurity
            solutions. Trusted by Fortune 500 companies worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition">
              Schedule a Demo
            </button>
            <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-700 transition">
              View Security Whitepaper
            </button>
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <section className="px-6 py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-slate-500 text-sm mb-8 uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <span className="text-slate-400 text-2xl font-bold">Microsoft</span>
            <span className="text-slate-400 text-2xl font-bold">
              Salesforce
            </span>
            <span className="text-slate-400 text-2xl font-bold">Oracle</span>
            <span className="text-slate-400 text-2xl font-bold">IBM</span>
            <span className="text-slate-400 text-2xl font-bold">Cisco</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="solutions" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            End-to-end protection for your entire organization, from endpoints
            to cloud infrastructure.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-2xl">🔐</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Identity & Access
              </h3>
              <p className="text-slate-600">
                Zero-trust architecture with multi-factor authentication and
                role-based access control.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Threat Detection
              </h3>
              <p className="text-slate-600">
                AI-powered threat detection with real-time monitoring and
                automated response.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Compliance
              </h3>
              <p className="text-slate-600">
                Automated compliance reporting for SOC 2, GDPR, HIPAA, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Certifications */}
      <section id="compliance" className="px-6 py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Compliance & Certifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-3">✓</div>
              <h4 className="font-semibold text-slate-900">SOC 2 Type II</h4>
              <p className="text-sm text-slate-500 mt-1">Certified</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-3">✓</div>
              <h4 className="font-semibold text-slate-900">ISO 27001</h4>
              <p className="text-sm text-slate-500 mt-1">Certified</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-3">✓</div>
              <h4 className="font-semibold text-slate-900">GDPR</h4>
              <p className="text-sm text-slate-500 mt-1">Compliant</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-3">✓</div>
              <h4 className="font-semibold text-slate-900">HIPAA</h4>
              <p className="text-sm text-slate-500 mt-1">Ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="px-6 py-20">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Request a Demo
          </h2>
          <p className="text-slate-600 text-center mb-8">
            See how SecureGuard can protect your organization.
          </p>
          <form className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <div className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="email"
                placeholder="Work Email"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-600">
                <option>Company Size</option>
                <option>1-50 employees</option>
                <option>51-200 employees</option>
                <option>201-1000 employees</option>
                <option>1000+ employees</option>
              </select>
              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-4 rounded-lg font-semibold hover:bg-slate-800 transition"
              >
                Request Demo
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">🛡️</span>
            <span className="font-bold">SecureGuard</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2024 SecureGuard Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
