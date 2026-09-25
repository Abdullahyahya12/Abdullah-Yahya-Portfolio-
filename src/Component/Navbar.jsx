
import { useEffect, useState } from "react";

function Navbar({ darkMode, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  /* =========================================
     Navbar Scroll State
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     Active Section While Scrolling
  ========================================= */

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      if (!sections.length) return;

      const navbarHeight = 80;

      /*
        The active section is the section whose top
        has reached the navbar area.
      */

      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= navbarHeight + 40) {
          currentSection = section.id;
        }
      });

      /*
        When we reach the very bottom,
        Contact becomes active.
      */

      const scrollPosition =
        window.scrollY + window.innerHeight;

      const pageHeight =
        document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight - 50) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  /* =========================================
     Escape Key
  ========================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =========================================
     Lock Body When Mobile Menu Is Open
  ========================================= */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =========================================
     Navigation Click
  ========================================= */

  const handleNavClick = (href) => {
    setMenuOpen(false);

    const target = document.querySelector(href);

    if (!target) return;

    const sectionId = href.replace("#", "");

    /* Immediately move active line */
    setActiveSection(sectionId);

    const navbarHeight = 80;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "border-b border-slate-800/70 bg-slate-950/80 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "border-b border-slate-200/80 bg-white/85 shadow-lg shadow-slate-200/30 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* =========================================
            Logo
        ========================================= */}

        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="group flex items-center gap-3"
          aria-label="Go to home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 group-hover:scale-105 group-hover:rotate-2">
            AY
          </span>

          <span
            className={`hidden text-sm font-bold tracking-tight transition-colors duration-300 sm:block ${
              darkMode
                ? "text-white group-hover:text-indigo-300"
                : "text-slate-900 group-hover:text-indigo-600"
            }`}
          >
            Abdullah Yahya
          </span>
        </button>

        {/* =========================================
            Desktop Navigation
        ========================================= */}

        <nav
          className={`hidden items-center gap-1 lg:flex ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={`relative rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? darkMode
                      ? "text-white"
                      : "text-indigo-600"
                    : darkMode
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-indigo-600"
                }`}
              >
                {link.name}

                {/* Active Line */}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-indigo-500 transition-all duration-300 ease-out ${
                    isActive
                      ? "w-5 opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* =========================================
            Desktop Actions
        ========================================= */}

        <div className="hidden items-center gap-3 lg:flex">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={darkMode ? "Light mode" : "Dark mode"}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border text-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 ${
              darkMode
                ? "border-slate-800 bg-slate-900 text-yellow-300 hover:border-indigo-500/40 hover:bg-slate-800"
                : "border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:bg-indigo-50"
            }`}
          >
            {darkMode ? "☀" : "☾"}
          </button>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-600/30"
          >
            Resume
          </a>
        </div>

        {/* =========================================
            Mobile Actions
        ========================================= */}

        <div className="flex items-center gap-2 lg:hidden">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={darkMode ? "Light mode" : "Dark mode"}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border text-sm transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "border-slate-800 bg-slate-900 text-yellow-300 hover:border-indigo-500/40"
                : "border-slate-200 bg-white text-slate-700 hover:border-indigo-200"
            }`}
          >
            {darkMode ? "☀" : "☾"}
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "border-slate-800 bg-slate-900 text-white hover:border-indigo-500/40"
                : "border-slate-200 bg-white text-slate-900 hover:border-indigo-200"
            }`}
          >
            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-1.5 rotate-45"
                    : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen
                    ? "scale-0 opacity-0"
                    : ""
                }`}
              />

              <span
                className={`absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen
                    ? "-translate-y-1.5 -rotate-45"
                    : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* =========================================
          Mobile Menu
      ========================================= */}

      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          menuOpen
            ? "max-h-[520px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div
          className={`border-t px-5 pb-6 pt-4 shadow-xl sm:px-8 ${
            darkMode
              ? "border-slate-800/70 bg-slate-950/95 shadow-black/20"
              : "border-slate-200 bg-white/95 shadow-slate-200/40"
          }`}
        >
          <nav
            className="space-y-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive =
                activeSection === sectionId;

              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() =>
                    handleNavClick(link.href)
                  }
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? darkMode
                        ? "bg-indigo-600/10 text-indigo-400"
                        : "bg-indigo-50 text-indigo-600"
                      : darkMode
                      ? "text-slate-300 hover:bg-slate-900 hover:text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                  }`}
                >
                  <span>{link.name}</span>

                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-sm shadow-indigo-500/40" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-600/30"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

