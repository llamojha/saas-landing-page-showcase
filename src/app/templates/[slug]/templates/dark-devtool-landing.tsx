/**
 * Dark DevTool Landing Template Page
 * Requirements: 1.1, 1.2 - Self-contained page implementing template design
 *
 * Design: Sleek dark-themed landing page for developer tools.
 * Features code snippets and terminal-style elements.
 */
"use client";

export default function DarkDevtoolLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-xl">&gt;_</span>
            <span className="font-bold text-xl">DevCLI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-400 hover:text-white transition"
            >
              Features
            </a>
            <a
              href="#docs"
              className="text-gray-400 hover:text-white transition"
            >
              Docs
            </a>
            <a
              href="#pricing"
              className="text-gray-400 hover:text-white transition"
            >
              Pricing
            </a>
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
            <button className="bg-emerald-500 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-emerald-400 transition">
              Install Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              v2.0 Now Available
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              The CLI tool for
              <span className="text-emerald-400"> modern developers</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Automate your workflow, manage deployments, and ship faster with
              our powerful command-line interface. Built for speed and
              simplicity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-500 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-400 transition">
                Get Started Free
              </button>
              <button className="border border-gray-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition">
                View Documentation
              </button>
            </div>
          </div>

          {/* Right Content - Terminal Mockup */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            {/* Terminal Header */}
            <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-gray-500 text-sm font-mono">
                terminal
              </span>
            </div>
            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              <div className="mb-4">
                <span className="text-emerald-400">$</span>
                <span className="text-gray-300 ml-2">
                  devcli init my-project
                </span>
              </div>
              <div className="text-gray-500 mb-4">
                ✓ Creating project structure...
                <br />
                ✓ Installing dependencies...
                <br />✓ Configuring environment...
              </div>
              <div className="mb-4">
                <span className="text-emerald-400">$</span>
                <span className="text-gray-300 ml-2">devcli deploy --prod</span>
              </div>
              <div className="text-gray-500 mb-4">
                ⠋ Building application...
                <br />
                <span className="text-emerald-400">
                  ✓ Deployed to production!
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-emerald-400">$</span>
                <span className="text-gray-300 ml-2 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-emerald-400 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">
                Execute commands in milliseconds with our optimized runtime
                engine.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-400 text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Extensible</h3>
              <p className="text-gray-400">
                Build custom plugins and extend functionality to fit your
                workflow.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-400 text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-gray-400">
                Enterprise-grade security with encrypted credentials and audit
                logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Snippet Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple Syntax</h2>
          <p className="text-gray-400 text-center mb-12">
            Get started with just a few commands
          </p>
          <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
            <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
              <span className="text-gray-500 text-sm font-mono">
                config.yaml
              </span>
              <button className="text-gray-500 hover:text-white text-sm">
                Copy
              </button>
            </div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-gray-300">
                {`# DevCLI Configuration
project:
  name: my-awesome-app
  version: 1.0.0

deploy:
  provider: aws
  region: us-east-1

scripts:
  build: npm run build
  test: npm run test`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-mono">&gt;_</span>
            <span className="font-bold">DevCLI</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 DevCLI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
