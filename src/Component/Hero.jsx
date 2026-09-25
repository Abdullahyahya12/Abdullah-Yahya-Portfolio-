
function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`relative flex min-h-screen items-center overflow-hidden pt-20 ${
        darkMode ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full blur-3xl ${
          darkMode ? "bg-indigo-600/10" : "bg-indigo-400/10"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full blur-3xl ${
          darkMode ? "bg-blue-600/10" : "bg-blue-400/10"
        }`}
      />

      {/* Grid Background */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 opacity-[0.035] ${
          darkMode
            ? "bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]"
        } bg-[size:48px_48px]`}
      />

      {/* Main Container */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:gap-14 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10 lg:py-24">
        {/* Left Content */}
        <div className="max-w-3xl">
          {/* Developer Badge */}
          <div
            className={`hero-fade-up inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold shadow-sm ${
              darkMode
                ? "border-slate-800 bg-slate-900/70 text-slate-300"
                : "border-slate-200 bg-slate-50 text-slate-600"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>

            Full Stack Developer
          </div>

          {/* Main Heading */}
          <h1
            className={`hero-fade-up mt-7 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl ${
              darkMode ? "text-white" : "text-slate-950"
            }`}
            style={{ animationDelay: "180ms" }}
          >
            Hi, I&apos;m{" "}
            <span className="hero-name-animation bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Abdullah Yahya
            </span>
            .
          </h1>

          {/* Subtitle */}
          <h2
            className={`hero-fade-up mt-5 text-xl font-semibold sm:text-2xl ${
              darkMode ? "text-slate-200" : "text-slate-700"
            }`}
            style={{ animationDelay: "350ms" }}
          >
            I build modern web experiences.
          </h2>

          {/* Description */}
          <p
            className={`hero-fade-up mt-6 max-w-2xl text-base leading-8 sm:text-lg ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
            style={{ animationDelay: "470ms" }}
          >
            I build modern, responsive and user-focused web applications
            using React, JavaScript and modern web technologies.
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ animationDelay: "600ms" }}
          >
            {/* View Projects */}
            <a
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              View My Work

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className={`group inline-flex min-h-12 items-center justify-center rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "border-slate-700 bg-slate-900/60 text-slate-200 hover:border-indigo-500/30 hover:bg-slate-900 hover:text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/40 hover:text-indigo-700"
              }`}
            >
              Contact Me
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "border-slate-800 text-slate-400 hover:border-indigo-500/40 hover:bg-indigo-500/5 hover:text-indigo-400"
                  : "border-slate-200 text-slate-600 hover:border-indigo-300 hover:bg-indigo-50/40 hover:text-indigo-600"
              }`}
            >
              Resume

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </div>

          {/* Quick Links */}
          <div
            className="hero-fade-up mt-9 flex flex-wrap items-center gap-5"
            style={{ animationDelay: "720ms" }}
          >
            <a
              href="https://github.com/Abdullahyahya12"
              target="_blank"
              rel="noopener noreferrer"
              className={`group text-sm font-medium transition-colors duration-200 ${
                darkMode
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              GitHub{" "}
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <span
              aria-hidden="true"
              className={`h-1 w-1 rounded-full ${
                darkMode ? "bg-slate-700" : "bg-slate-300"
              }`}
            />

            <a
              href="#contact"
              className={`group text-sm font-medium transition-colors duration-200 ${
                darkMode
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Let&apos;s Connect{" "}
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* Right Developer Visual */}
        <div
          className="hero-visual-reveal relative mx-auto w-full max-w-md lg:max-w-lg"
          style={{ animationDelay: "350ms" }}
        >
          {/* Outer Glow */}
          <div
            aria-hidden="true"
            className={`absolute inset-8 rounded-[2.5rem] blur-3xl ${
              darkMode ? "bg-indigo-600/10" : "bg-indigo-400/10"
            }`}
          />

          {/* Developer Card */}
          <div
            className={`relative overflow-hidden rounded-[2rem] border p-3 shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:p-4 ${
              darkMode
                ? "border-slate-800 bg-slate-900/70 shadow-black/20 hover:border-indigo-500/20"
                : "border-slate-200 bg-white shadow-slate-200/70 hover:border-indigo-200"
            }`}
          >
            {/* Visual Area */}
            <div
              className={`relative flex aspect-square min-h-[20rem] items-center justify-center overflow-hidden rounded-[1.5rem] sm:min-h-[24rem] lg:min-h-[28rem] ${
                darkMode
                  ? "bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-950"
                  : "bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50"
              }`}
            >
              {/* Center Glow */}
              <div
                aria-hidden="true"
                className={`absolute h-56 w-56 rounded-full blur-3xl sm:h-64 sm:w-64 ${
                  darkMode ? "bg-indigo-600/15" : "bg-indigo-400/15"
                }`}
              />

              {/* Decorative Rings */}
              <div
                aria-hidden="true"
                className={`absolute h-64 w-64 rounded-full border sm:h-72 sm:w-72 ${
                  darkMode ? "border-indigo-500/20" : "border-indigo-300/40"
                }`}
              />

              <div
                aria-hidden="true"
                className={`absolute h-44 w-44 rounded-full border sm:h-52 sm:w-52 ${
                  darkMode ? "border-blue-500/20" : "border-blue-300/40"
                }`}
              />

              {/* Profile Image */}
              <div className="relative z-10 h-52 w-52 overflow-hidden rounded-full border-4 border-white/10 shadow-2xl shadow-indigo-950/30 transition-all duration-500 hover:scale-[1.03] sm:h-60 sm:w-60 md:h-64 md:w-64 lg:h-72 lg:w-72">
                <img
                  src="/profile.png"
                  alt="Abdullah Yahya - Full Stack Developer"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* React */}
              <span
                className={`hero-tech-float absolute left-4 top-6 z-20 rounded-xl border px-3 py-2 text-xs font-semibold shadow-lg backdrop-blur-md sm:left-8 sm:top-7 ${
                  darkMode
                    ? "border-slate-700 bg-slate-900/70 text-indigo-300"
                    : "border-slate-200 bg-white/80 text-indigo-600"
                }`}
                style={{ animationDelay: "0ms" }}
              >
                React
              </span>

              {/* JavaScript */}
              <span
                className={`hero-tech-float absolute right-4 top-12 z-20 rounded-xl border px-3 py-2 text-xs font-semibold shadow-lg backdrop-blur-md sm:right-8 sm:top-16 ${
                  darkMode
                    ? "border-slate-700 bg-slate-900/70 text-blue-300"
                    : "border-slate-200 bg-white/80 text-blue-600"
                }`}
                style={{ animationDelay: "350ms" }}
              >
                JavaScript
              </span>

              {/* Tailwind */}
              <span
                className={`hero-tech-float absolute bottom-7 left-5 z-20 rounded-xl border px-3 py-2 text-xs font-semibold shadow-lg backdrop-blur-md sm:bottom-9 sm:left-10 ${
                  darkMode
                    ? "border-slate-700 bg-slate-900/70 text-cyan-300"
                    : "border-slate-200 bg-white/80 text-cyan-600"
                }`}
                style={{ animationDelay: "700ms" }}
              >
                Tailwind
              </span>

              {/* Git */}
              <span
                className={`hero-tech-float absolute bottom-12 right-4 z-20 rounded-xl border px-3 py-2 text-xs font-semibold shadow-lg backdrop-blur-md sm:bottom-16 sm:right-8 ${
                  darkMode
                    ? "border-slate-700 bg-slate-900/70 text-emerald-300"
                    : "border-slate-200 bg-white/80 text-emerald-600"
                }`}
                style={{ animationDelay: "1050ms" }}
              >
                Git
              </span>
            </div>

            {/* Card Footer */}
            <div className="px-2 pb-2 pt-5 sm:px-3">
              <p
                className={`text-sm font-semibold sm:text-base ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Modern Web Development
              </p>

              <p
                className={`mt-1 text-xs sm:text-sm ${
                  darkMode ? "text-slate-500" : "text-slate-500"
                }`}
              >
                React · JavaScript · Responsive UI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

