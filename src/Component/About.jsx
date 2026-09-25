
function About({ darkMode }) {
  const highlights = [
    {
      title: "Modern UI",
      description:
        "Building clean and responsive interfaces with attention to usability and visual consistency.",
    },
    {
      title: "React Development",
      description:
        "Creating reusable components and interactive experiences with React.",
    },
    {
      title: "Responsive Design",
      description:
        "Making interfaces work smoothly across desktop, tablet and mobile devices.",
    },
    {
      title: "Clean Code",
      description:
        "Following organized component structures and maintainable development practices.",
    },
  ];

  const technologies = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="about"
      className={`relative overflow-hidden border-t py-24 sm:py-28 ${
        darkMode
          ? "border-slate-800/70 bg-slate-950"
          : "border-slate-200 bg-white"
      }`}
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full blur-3xl ${
          darkMode ? "bg-indigo-600/5" : "bg-indigo-400/10"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full blur-3xl ${
          darkMode ? "bg-blue-600/5" : "bg-blue-400/5"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="about-reveal mx-auto max-w-3xl text-center">
          <p
            className={`text-sm font-semibold uppercase tracking-[0.25em] ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            About Me
          </p>

          <h2
            className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Building Web Experiences With a Practical Approach.
          </h2>

          <div
            className={`mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 transition-all duration-700 ${
              darkMode ? "w-20" : "w-16"
            }`}
          />
        </div>

        {/* Main Content */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Intro Card */}
          <div
            className={`about-reveal group relative overflow-hidden rounded-[2rem] border p-7 shadow-xl transition-all duration-500 hover:-translate-y-2 sm:p-9 ${
              darkMode
                ? "border-slate-800 bg-slate-900/60 shadow-black/10 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-950/20"
                : "border-slate-200 bg-slate-50 shadow-slate-200/50 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/50"
            }`}
            style={{ animationDelay: "120ms" }}
          >
            {/* Card Glow */}
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 ${
                darkMode ? "bg-indigo-600/15" : "bg-indigo-400/15"
              }`}
            />

            {/* Subtle Gradient Line */}
            <div
              aria-hidden="true"
              className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"
            />

            {/* AY Badge */}
            <div
              className={`relative flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                darkMode
                  ? "bg-indigo-600/15 text-indigo-400 ring-1 ring-indigo-500/20 group-hover:bg-indigo-600/20 group-hover:ring-indigo-400/40"
                  : "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200 group-hover:bg-indigo-100 group-hover:ring-indigo-300"
              }`}
            >
              AY
            </div>

            <h3
              className={`relative mt-7 text-2xl font-bold transition-colors duration-300 ${
                darkMode
                  ? "text-white group-hover:text-indigo-100"
                  : "text-slate-900 group-hover:text-indigo-700"
              }`}
            >
              Full Stack Developer
            </h3>

            <div
              className={`relative mt-5 space-y-4 text-sm leading-7 sm:text-base ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <p>
                I enjoy building modern web applications with a strong focus
                on responsive design, reusable components and clean user
                interfaces.
              </p>

              <p>
                My current development focus includes React, JavaScript,
                Tailwind CSS, HTML5, CSS3 and modern frontend development
                workflows.
              </p>

              <p>
                I approach projects by first understanding the requirements,
                then building structured components and refining the
                experience through testing and iteration.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="relative mt-8 flex flex-wrap gap-2">
              {technologies.map((technology, index) => (
                <span
                  key={technology}
                  className={`tech-badge cursor-default rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
                    darkMode
                      ? "border-slate-700 bg-slate-950/60 text-slate-300 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300 hover:shadow-lg hover:shadow-indigo-950/20"
                      : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md"
                  }`}
                  style={{ animationDelay: `${500 + index * 70}ms` }}
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Bottom Accent */}
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-8 right-8 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent transition-transform duration-700 group-hover:scale-x-100"
            />
          </div>

          {/* Right Content */}
          <div>
            {/* Highlights */}
            <div className="grid gap-5 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <article
                  key={item.title}
                  className={`about-card-reveal group relative overflow-hidden rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-2 ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/40 hover:border-indigo-500/30 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-indigo-950/10"
                      : "border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xl hover:shadow-slate-200/50"
                  }`}
                  style={{ animationDelay: `${220 + index * 120}ms` }}
                >
                  {/* Hover Glow */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full opacity-0 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-100 ${
                      darkMode ? "bg-indigo-500/10" : "bg-indigo-400/10"
                    }`}
                  />

                  {/* Top Accent */}
                  <span
                    aria-hidden="true"
                    className="absolute left-6 right-6 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100"
                  />

                  <div className="relative flex items-center justify-between">
                    <span
                      className={`text-xs font-bold transition-all duration-300 group-hover:translate-x-1 ${
                        darkMode ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg ${
                        darkMode
                          ? "bg-indigo-500 group-hover:shadow-indigo-500/40"
                          : "bg-indigo-600 group-hover:shadow-indigo-400/40"
                      }`}
                    />
                  </div>

                  <h3
                    className={`relative mt-7 text-lg font-semibold transition-colors duration-300 ${
                      darkMode
                        ? "text-white group-hover:text-indigo-300"
                        : "text-slate-900 group-hover:text-indigo-600"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`relative mt-3 text-sm leading-7 ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Bottom Accent */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500 group-hover:w-full"
                  />
                </article>
              ))}
            </div>

            {/* Development Mindset */}
            <div
              className={`about-reveal group relative mt-5 overflow-hidden rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-1 ${
                darkMode
                  ? "border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:shadow-xl hover:shadow-indigo-950/10"
                  : "border-indigo-200 bg-indigo-50/60 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-lg hover:shadow-indigo-100/50"
              }`}
              style={{ animationDelay: "760ms" }}
            >
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-cyan-500"
              />

              <p
                className={`pl-2 text-sm leading-7 ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                <span
                  className={`font-semibold ${
                    darkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  Development mindset:
                </span>{" "}
                build with purpose, keep the code organized, test the result
                and continuously improve the user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Developer CTA - Full Width */}
        <div
          className={`about-reveal group relative mt-12 overflow-hidden rounded-3xl border p-7 text-center transition-all duration-500 hover:-translate-y-1 sm:p-9 ${
            darkMode
              ? "border-slate-800 bg-slate-900/60 hover:border-indigo-500/30 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-indigo-950/10"
              : "border-slate-200 bg-white hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/40"
          }`}
          style={{ animationDelay: "900ms" }}
        >
          {/* CTA Glow */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-100 ${
              darkMode ? "bg-indigo-600/10" : "bg-indigo-400/10"
            }`}
          />

          <div
            aria-hidden="true"
            className={`pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-100 ${
              darkMode ? "bg-blue-600/10" : "bg-blue-400/10"
            }`}
          />

          {/* CTA Top Line */}
          <div
            aria-hidden="true"
            className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
          />

          <div className="relative mx-auto max-w-3xl">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.25em] ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              }`}
            >
              Let&apos;s Build Something
            </p>

            <h3
              className={`mt-3 text-2xl font-bold tracking-tight sm:text-3xl ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Have a project in mind?
            </h3>

            <p
              className={`mx-auto mt-3 max-w-2xl text-sm leading-7 sm:text-base ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Explore my work or get in touch to discuss a modern,
              responsive and user-focused web experience.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group/btn inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                View Projects

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                >
                  →
                </span>
              </a>

              <a
                href="#contact"
                className={`inline-flex min-h-12 items-center justify-center rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "border-slate-700 text-slate-300 hover:border-indigo-500/40 hover:bg-indigo-500/5 hover:text-white"
                    : "border-slate-300 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-700"
                }`}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* CTA Bottom Accent */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-10 right-10 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent transition-transform duration-700 group-hover:scale-x-100"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
