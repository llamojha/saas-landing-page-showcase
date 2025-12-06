/**
 * Modern SaaS Hero Template Landing Page
 * Requirements: 1.1, 1.2 - Self-contained page implementing template design
 *
 * Design: Clean hero section with gradient background and floating UI elements.
 * Perfect for developer tools and productivity apps.
 */
"use client";

export default function ModernSaasHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800">
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-xl">SaaSify</div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-white/80 hover:text-white transition"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-white/80 hover:text-white transition"
            >
              Pricing
            </a>
            <a
              href="#docs"
              className="text-white/80 hover:text-white transition"
            >
              Docs
            </a>
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Build faster with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                modern tools
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
              Streamline your workflow with our all-in-one platform. Ship
              products faster, collaborate better, and scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition shadow-lg shadow-indigo-900/30">
                Start Free Trial
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition">
                Watch Demo
              </button>
            </div>
            <p className="text-white/60 text-sm mt-4">
              No credit card required • 14-day free trial
            </p>
          </div>

          {/* Right Content - Floating Dashboard Mockup */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                {/* Dashboard Header */}
                <div className="bg-gray-50 px-4 py-3 border-b flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* Dashboard Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-gray-900">Dashboard</h3>
                    <span className="text-sm text-gray-500">Last 7 days</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">Users</p>
                      <p className="text-2xl font-bold text-indigo-600">
                        12.4k
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">Revenue</p>
                      <p className="text-2xl font-bold text-purple-600">$48k</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">Growth</p>
                      <p className="text-2xl font-bold text-green-600">+24%</p>
                    </div>
                  </div>
                  {/* Chart Placeholder */}
                  <div className="h-32 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-end justify-around px-4 pb-4">
                    <div
                      className="w-8 bg-indigo-400 rounded-t"
                      style={{ height: "40%" }}
                    ></div>
                    <div
                      className="w-8 bg-indigo-500 rounded-t"
                      style={{ height: "60%" }}
                    ></div>
                    <div
                      className="w-8 bg-indigo-400 rounded-t"
                      style={{ height: "45%" }}
                    ></div>
                    <div
                      className="w-8 bg-purple-500 rounded-t"
                      style={{ height: "80%" }}
                    ></div>
                    <div
                      className="w-8 bg-purple-400 rounded-t"
                      style={{ height: "65%" }}
                    ></div>
                    <div
                      className="w-8 bg-purple-500 rounded-t"
                      style={{ height: "90%" }}
                    ></div>
                    <div
                      className="w-8 bg-purple-600 rounded-t"
                      style={{ height: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg px-4 py-2">
              <span className="text-green-500 font-semibold">+127%</span>
              <span className="text-gray-500 text-sm ml-1">this month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60 text-sm mb-8">
            TRUSTED BY INNOVATIVE TEAMS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <span className="text-white text-xl font-bold">Stripe</span>
            <span className="text-white text-xl font-bold">Vercel</span>
            <span className="text-white text-xl font-bold">Linear</span>
            <span className="text-white text-xl font-bold">Notion</span>
            <span className="text-white text-xl font-bold">Figma</span>
          </div>
        </div>
      </section>
    </div>
  );
}
