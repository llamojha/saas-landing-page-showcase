/**
 * Playful B2C Startup Template Page
 * Requirements: 1.1, 1.2 - Self-contained page implementing template design
 *
 * Design: Vibrant and energetic landing page for consumer apps.
 * Uses bold colors, playful illustrations, and engaging animations.
 */
"use client";

export default function PlayfulB2cStartup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🌟</span>
            <span className="text-white font-bold text-xl">HabitFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-white/80 hover:text-white transition"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-white/80 hover:text-white transition"
            >
              Stories
            </a>
            <a
              href="#pricing"
              className="text-white/80 hover:text-white transition"
            >
              Pricing
            </a>
            <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-white/90 transition shadow-lg">
              Download App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6">
              <span>🎉</span>
              <span>Over 1M happy users!</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Build habits that
              <span className="block text-yellow-300">actually stick</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
              Track your daily habits, celebrate small wins, and transform your
              life one day at a time. It&apos;s like having a cheerful coach in
              your pocket!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition shadow-xl hover:shadow-2xl hover:-translate-y-1">
                🍎 App Store
              </button>
              <button className="bg-teal-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-300 transition shadow-xl hover:shadow-2xl hover:-translate-y-1">
                🤖 Play Store
              </button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden w-64 h-[500px]">
                  {/* App Header */}
                  <div className="bg-gradient-to-r from-orange-400 to-pink-500 px-4 py-6 text-white">
                    <p className="text-sm opacity-80">Good morning! ☀️</p>
                    <h3 className="text-xl font-bold">Your Habits</h3>
                  </div>
                  {/* App Content */}
                  <div className="p-4 space-y-3">
                    <div className="bg-green-50 rounded-2xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-white">
                        ✓
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">
                          Morning Run
                        </p>
                        <p className="text-sm text-gray-500">7 day streak 🔥</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-2xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white">
                        ✓
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">
                          Read 30 mins
                        </p>
                        <p className="text-sm text-gray-500">
                          12 day streak 📚
                        </p>
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-2xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white">
                        ○
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">Meditate</p>
                        <p className="text-sm text-gray-500">Tap to complete</p>
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-2xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center text-white">
                        ○
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">
                          Drink Water
                        </p>
                        <p className="text-sm text-gray-500">4/8 glasses 💧</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-8 bg-yellow-300 rounded-2xl px-4 py-2 shadow-lg animate-bounce">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="absolute -bottom-4 -right-8 bg-teal-300 rounded-2xl px-4 py-2 shadow-lg">
                <span className="font-bold text-teal-800">+15 pts!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="px-6 py-16 bg-white/10 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sarah M.</p>
                  <p className="text-sm text-gray-500">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Finally an app that makes building habits fun! I&apos;ve
                been on a 30-day streak and feeling amazing!&quot;
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div>
                  <p className="font-semibold text-gray-800">James K.</p>
                  <p className="text-sm text-gray-500">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;The gamification aspect keeps me motivated. Love earning
                points and seeing my progress!&quot;
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  E
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Emma L.</p>
                  <p className="text-sm text-gray-500">⭐⭐⭐⭐⭐</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Simple, beautiful, and effective. This app changed my
                morning routine completely!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8">
        <div className="max-w-7xl mx-auto text-center text-white/80">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🌟</span>
            <span className="font-bold text-white">HabitFlow</span>
          </div>
          <p className="text-sm">
            © 2024 HabitFlow. Made with 💖 for habit builders everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
}
