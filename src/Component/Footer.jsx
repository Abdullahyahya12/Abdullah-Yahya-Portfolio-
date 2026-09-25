function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className={`border-t ${
        darkMode
          ? "border-slate-800/70 bg-slate-950"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        {/* Main Footer */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_0.8fr] lg:items-start">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition-transform duration-300 group-hover:scale-105">
                AY
              </span>

              <span
                className={`text-lg font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Abdullah Yahya
              </span>
            </a>

            <p
              className={`mt-4 max-w-sm text-sm leading-7 ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Full Stack Developer building modern, responsive and
              user-focused web applications.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span
                className={`rounded-full border px-3 py-1 text-xs ${
                  darkMode
                    ? "border-slate-800 text-slate-500"
                    : "border-slate-200 text-slate-500"
                }`}
              >
                React
              </span>

              <span
                className={`rounded-full border px-3 py-1 text-xs ${
                  darkMode
                    ? "border-slate-800 text-slate-500"
                    : "border-slate-200 text-slate-500"
                }`}
              >
                JavaScript
              </span>

              <span
                className={`rounded-full border px-3 py-1 text-xs ${
                  darkMode
                    ? "border-slate-800 text-slate-500"
                    : "border-slate-200 text-slate-500"
                }`}
              >
                Tailwind
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                darkMode ? "text-slate-500" : "text-slate-500"
              }`}
            >
              Navigation
            </h3>

            <nav className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    darkMode
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3
              className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                darkMode ? "text-slate-500" : "text-slate-500"
              }`}
            >
              Connect
            </h3>

            <div className="mt-5 space-y-3">
              <a
                href="https://github.com/Abdullahyahya12"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 text-sm ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-bold transition-colors ${
                    darkMode
                      ? "border-slate-800 group-hover:border-indigo-500/40 group-hover:text-indigo-400"
                      : "border-slate-200 group-hover:border-indigo-300 group-hover:text-indigo-600"
                  }`}
                >
                  GH
                </span>

                <span className="transition-colors group-hover:text-indigo-400">
                  GitHub
                </span>
              </a>

              <a
                href="#contact"
                className={`group flex items-center gap-3 text-sm ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg border text-xs transition-colors ${
                    darkMode
                      ? "border-slate-800 group-hover:border-indigo-500/40 group-hover:text-indigo-400"
                      : "border-slate-200 group-hover:border-indigo-300 group-hover:text-indigo-600"
                  }`}
                >
                  @
                </span>

                <span className="transition-colors group-hover:text-indigo-400">
                  Contact Me
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`mt-12 border-t ${
            darkMode ? "border-slate-800" : "border-slate-200"
          }`}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p
            className={`text-xs ${
              darkMode ? "text-slate-500" : "text-slate-500"
            }`}
          >
            © {currentYear} Abdullah Yahya. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <span
              className={`h-1.5 w-1.5 rounded-full bg-emerald-500`}
            />

            <p
              className={`text-xs ${
                darkMode ? "text-slate-500" : "text-slate-500"
              }`}
            >
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;