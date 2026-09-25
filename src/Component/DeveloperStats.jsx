const focusItems = [
  {
    id: 1,
    title: "Full Stack Development",
    shortTitle: "Full Stack",
    description:
      "Building modern web applications with a focus on clean structure, reusable components and practical development workflows.",
    tags: ["Web Apps", "CRUD", "Components"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="m8 14-2 2 2 2" />
        <path d="m12 18 2-4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "React Development",
    shortTitle: "React",
    description:
      "Creating reusable, component-based interfaces with React, modern JavaScript and clean application structure.",
    tags: ["React", "Hooks", "Vite"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="12" rx="9" ry="3.8" />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.8"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.8"
          transform="rotate(120 12 12)"
        />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Responsive Design",
    shortTitle: "Responsive",
    description:
      "Designing interfaces that adapt smoothly across desktop, tablet and mobile screen sizes.",
    tags: ["Mobile", "Tablet", "Desktop"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="13" height="11" rx="1.5" />
        <path d="M7 20h5M9.5 15v5" />
        <rect x="18" y="7" width="3" height="9" rx="0.8" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Git & GitHub",
    shortTitle: "Version Control",
    description:
      "Using Git and GitHub to manage source code, track development changes and maintain project repositories.",
    tags: ["Git", "GitHub", "Repositories"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="12" cy="18" r="2.5" />
        <path d="M8.2 7.2 10.5 16" />
        <path d="m15.8 7.2-2.3 8.8" />
      </svg>
    ),
  },
];

function DeveloperStats({ darkMode }) {
  return (
    <section
      className={`relative overflow-hidden border-t py-24 sm:py-28 ${
        darkMode
          ? "border-slate-800/70 bg-slate-900/30"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      {/* Background Glows */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl ${
          darkMode ? "bg-indigo-600/5" : "bg-indigo-400/10"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full blur-3xl ${
          darkMode ? "bg-blue-600/5" : "bg-blue-400/10"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="developer-stats-header mx-auto max-w-3xl text-center">
          <p
            className={`text-sm font-semibold uppercase tracking-[0.25em] ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            Development Focus
          </p>

          <div
            className={`mx-auto mt-3 h-1 w-14 rounded-full ${
              darkMode ? "bg-indigo-500" : "bg-indigo-600"
            }`}
          />

          <h2
            className={`mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            What I focus on.
          </h2>

          <p
            className={`mt-5 text-base leading-8 sm:text-lg ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            The core areas I work with while building modern, responsive and
            maintainable web applications.
          </p>
        </div>

        {/* Focus Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusItems.map((item, index) => (
            <article
              key={item.id}
              className={`developer-focus-card group relative overflow-hidden rounded-[2rem] border p-6 transition-all duration-500 hover:-translate-y-2 ${
                darkMode
                  ? "border-slate-800 bg-slate-900/60 hover:border-indigo-500/30 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-indigo-950/20"
                  : "border-slate-200 bg-white hover:border-indigo-300 hover:shadow-2xl hover:shadow-slate-200/60"
              }`}
              style={{
                animationDelay: `${index * 110}ms`,
              }}
            >
              {/* Top Accent */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />

              {/* Glow */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                  darkMode ? "bg-indigo-500/15" : "bg-indigo-400/15"
                }`}
              />

              {/* Number */}
              <span
                aria-hidden="true"
                className={`absolute right-5 top-4 text-5xl font-black transition-all duration-500 group-hover:scale-110 ${
                  darkMode
                    ? "text-slate-800/50 group-hover:text-indigo-500/10"
                    : "text-slate-100 group-hover:text-indigo-100"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className={`developer-focus-icon relative flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                  darkMode
                    ? "border-indigo-500/20 bg-indigo-500/10 text-indigo-400 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/15 group-hover:shadow-lg group-hover:shadow-indigo-500/10"
                    : "border-indigo-200 bg-indigo-50 text-indigo-600 group-hover:border-indigo-300 group-hover:bg-indigo-100"
                }`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="relative mt-6">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                    darkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  {item.shortTitle}
                </p>

                <h3
                  className={`mt-2 text-lg font-bold leading-7 transition-colors duration-300 ${
                    darkMode
                      ? "text-white group-hover:text-indigo-100"
                      : "text-slate-900 group-hover:text-indigo-950"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="relative mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`developer-focus-tag rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                      darkMode
                        ? "border-slate-800 bg-slate-950/70 text-slate-400 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-300"
                        : "border-slate-200 bg-slate-50 text-slate-500 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Statement */}
        <div
          className={`developer-stats-note group relative mt-10 overflow-hidden rounded-[2rem] border p-7 text-center transition-all duration-500 hover:-translate-y-1 sm:p-9 ${
            darkMode
              ? "border-slate-800 bg-slate-900/40 hover:border-indigo-500/20 hover:bg-slate-900/60"
              : "border-slate-200 bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/40"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-1/3 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          <p
            className={`relative text-lg font-semibold sm:text-xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Focused on learning, building and improving.
          </p>

          <p
            className={`relative mx-auto mt-3 max-w-2xl text-sm leading-7 sm:text-base ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I continue to strengthen my development skills through practical
            projects, professional training and hands-on industry experience.
          </p>

          <a
            href="#projects"
            className="group/button relative mt-6 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/10 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-indigo-600/20"
          >
            Explore My Projects
            <span className="ml-2 transition-transform duration-300 group-hover/button:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default DeveloperStats;