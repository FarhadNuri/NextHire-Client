'use client';

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* Top section */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">

          {/* Brand column */}
          <div className="flex flex-col gap-4 lg:max-w-[220px]">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 w-fit">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 shrink-0">
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-sm font-semibold leading-tight text-white">
                Next<br />Hire
              </span>
            </a>

            {/* Tagline */}
            <p className="text-sm leading-relaxed text-white/50">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-20">

            {/* Product */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-violet-400">Product</h3>
              <ul className="flex flex-col gap-3">
                {['Job discovery', 'Worker AI', 'Companies', 'Salary data'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigations */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-blue-400">Navigations</h3>
              <ul className="flex flex-col gap-3">
                {['Help center', 'Career library', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-amber-400">Resources</h3>
              <ul className="flex flex-col gap-3">
                {['Brand Guideline', 'Newsroom'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

          {/* Social icons */}
          <div className="flex items-center gap-2">

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* GitHub — replaces Pinterest */}
            <a
              href="#"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-white transition-colors hover:bg-violet-500"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

          </div>

          {/* Copyright + legal */}
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-sm text-white/40">
              Copyright 2026 — Next Hire
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-white/55 transition-colors hover:text-white">
                Terms &amp; Policy
              </a>
              <span className="text-white/20">·</span>
              <a href="#" className="text-sm text-white/55 transition-colors hover:text-white">
                Privacy Guideline
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;