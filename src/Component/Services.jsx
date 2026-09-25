
import { services } from "../data/services";

const serviceIcons = [
  <svg
    key="website"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18" />
    <path d="M7 6.5h.01M10 6.5h.01" />
  </svg>,

  <svg
    key="react"
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
  </svg>,

  <svg
    key="responsive"
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
  </svg>,

  <svg
    key="frontend"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="m8 8-4 4 4 4" />
    <path d="m16 8 4 4-4 4" />
    <path d="m14 5-4 14" />
  </svg>,

  <svg
    key="ui"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>,

  <svg
    key="bug"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    <rect x="7" y="8" width="10" height="11" rx="5" />
    <path d="M4 11h3M17 11h3M4 16h3M17 16h3M9 19v2M15 19v2" />
  </svg>,
];

function Services({ darkMode }) {
  return (
    <section
      id="services"
      className={`relative overflow-hidden border-t py-24 sm:py-28 ${
        darkMode
          ? "border-slate-800/70 bg-slate-900/30"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      {/* Background Glows */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full blur-3xl ${
          darkMode ? "bg-indigo-600/10" : "bg-indigo-400/10"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full blur-3xl ${
          darkMode ? "bg-blue-600/5" : "bg-blue-400/10"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="services-header mx-auto max-w-3xl text-center">
          <p
            className={`text-sm font-semibold uppercase tracking-[0.25em] ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            Services
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
            Development Services I Can Provide.
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I focus on building clean, responsive and user-focused web
            experiences using modern frontend technologies and practical
            development approaches.
          </p>

          {/* Service Count */}
          <div
            className={`services-count mx-auto mt-6 inline-flex rounded-2xl border px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 ${
              darkMode
                ? "border-slate-800 bg-slate-900/70 text-slate-400 hover:border-indigo-500/30 hover:text-indigo-300"
                : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
            }`}
          >
            {services.length} Services
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.id || service.title}
              className={`service-card group relative overflow-hidden rounded-[2rem] border p-7 transition-all duration-500 hover:-translate-y-2 ${
                darkMode
                  ? "border-slate-800 bg-slate-900/60 hover:border-indigo-500/30 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-indigo-950/20"
                  : "border-slate-200 bg-white hover:border-indigo-300 hover:shadow-2xl hover:shadow-slate-200/60"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Top Accent */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />

              {/* Card Glow */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                  darkMode ? "bg-indigo-500/15" : "bg-indigo-400/15"
                }`}
              />

              {/* Background Number */}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute right-5 top-4 text-6xl font-black transition-all duration-500 group-hover:scale-110 ${
                  darkMode
                    ? "text-slate-800/40 group-hover:text-indigo-500/10"
                    : "text-slate-100 group-hover:text-indigo-100"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className={`service-icon relative flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                  darkMode
                    ? "border-indigo-500/20 bg-indigo-500/10 text-indigo-400 group-hover:border-indigo-500/40 group-hover:bg-indigo-500/15 group-hover:shadow-lg group-hover:shadow-indigo-500/10"
                    : "border-indigo-200 bg-indigo-50 text-indigo-600 group-hover:border-indigo-300 group-hover:bg-indigo-100"
                }`}
              >
                {serviceIcons[index % serviceIcons.length]}
              </div>

              {/* Content */}
              <div className="relative mt-7">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    darkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  Service {String(index + 1).padStart(2, "0")}
                </p>

                <h3
                  className={`mt-2 text-xl font-bold tracking-tight transition-colors duration-300 sm:text-2xl ${
                    darkMode
                      ? "text-white group-hover:text-indigo-100"
                      : "text-slate-900 group-hover:text-indigo-950"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`mt-4 text-sm leading-7 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {service.description}
                </p>
              </div>

              {/* Bottom Detail */}
              <div
                className={`mt-7 flex items-center justify-between border-t pt-5 ${
                  darkMode ? "border-slate-800" : "border-slate-200"
                }`}
              >
                <span
                  className={`text-xs font-medium ${
                    darkMode ? "text-slate-500" : "text-slate-500"
                  }`}
                >
                  Modern & Responsive
                </span>

                <span
                  aria-hidden="true"
                  className={`text-lg transition-all duration-300 group-hover:translate-x-1 ${
                    darkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`services-cta relative mt-10 overflow-hidden rounded-[2rem] border ${
            darkMode
              ? "border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-slate-900/70 to-blue-500/10"
              : "border-indigo-200 bg-gradient-to-r from-indigo-50 via-white to-blue-50"
          }`}
        >
          {/* CTA Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl"
          />

          <div className="relative flex flex-col gap-6 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p
                className={`text-xl font-bold sm:text-2xl ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Have a web project in mind?
              </p>

              <p
                className={`mt-2 text-sm leading-7 sm:text-base ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Let&apos;s discuss your requirements and build a clean,
                responsive web experience.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/10 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-indigo-600/20"
            >
              Contact Me
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

