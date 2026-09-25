
function Experience({ darkMode }) {
  const experience = [
    {
      id: 1,
      type: "Current Internship",
      title: "Full Stack Developer Intern",
      organization: "TAGXA Technologies",
      duration: "9 September 2026 – 9 December 2026",
      description:
        "Currently gaining practical industry experience through full stack development work, focusing on modern web technologies, responsive interfaces and production-style development practices.",
      points: [
        "Developing responsive and user-focused web interfaces",
        "Working with React and modern JavaScript development",
        "Building reusable and component-based UI structures",
        "Using Git and GitHub for version control and project workflow",
        "Testing, debugging and improving application functionality",
        "Following clean and maintainable development practices",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "Vite",
      ],
    },

    {
      id: 2,
      type: "Professional Training",
      title: "Full Stack Developer Course",
      organization: "Corvit Institute Lahore",
      duration: "14 February 2026 – 20 June 2026",
      description:
        "Completed full stack development training with a focus on modern web development concepts, practical programming and building web applications.",
      points: [
        "Learned core frontend development concepts",
        "Worked with HTML, CSS and JavaScript",
        "Learned React and component-based development",
        "Practiced responsive web design",
        "Worked with Git and GitHub",
        "Built practical development projects",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Git",
        "GitHub",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`relative overflow-hidden border-t py-24 sm:py-28 ${
        darkMode
          ? "border-slate-800/70 bg-slate-950"
          : "border-slate-200 bg-white"
      }`}
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full blur-3xl ${
          darkMode ? "bg-indigo-600/5" : "bg-indigo-400/10"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full blur-3xl ${
          darkMode ? "bg-blue-600/5" : "bg-blue-400/10"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="experience-reveal mx-auto max-w-3xl text-center">
          <p
            className={`text-sm font-semibold uppercase tracking-[0.25em] ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            Experience & Training
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
            My development journey.
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-8 sm:text-lg ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            My practical development experience and professional training in
            modern full stack web development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Timeline Line */}
          <div
            aria-hidden="true"
            className={`experience-line absolute bottom-0 left-5 top-0 w-px origin-top sm:left-7 ${
              darkMode ? "bg-slate-800" : "bg-slate-200"
            }`}
          />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <div
                key={item.id}
                className="experience-item relative grid gap-6 pl-14 sm:pl-20 lg:grid-cols-[220px_1fr] lg:gap-10"
                style={{
                  animationDelay: `${index * 180}ms`,
                }}
              >
                {/* Timeline Dot */}
                <div
                  className={`experience-dot absolute left-0 top-1 flex h-11 w-11 items-center justify-center rounded-full border-4 transition-all duration-300 ${
                    darkMode
                      ? "border-slate-950 bg-indigo-600 text-white hover:bg-indigo-500"
                      : "border-white bg-indigo-600 text-white hover:bg-indigo-500"
                  }`}
                >
                  <span className="experience-dot-inner h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Timeline Info */}
                <div className="experience-info pt-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-[0.18em] ${
                      darkMode ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    {item.type}
                  </span>

                  <p
                    className={`mt-2 text-sm font-medium leading-6 ${
                      darkMode ? "text-slate-500" : "text-slate-500"
                    }`}
                  >
                    {item.organization}
                  </p>

                  <p
                    className={`mt-2 text-xs leading-5 ${
                      darkMode ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    {item.duration}
                  </p>
                </div>

                {/* Experience Card */}
                <article
                  className={`experience-card group relative overflow-hidden rounded-[2rem] border p-6 shadow-xl transition-all duration-500 sm:p-8 ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/60 shadow-black/10 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-indigo-950/20"
                      : "border-slate-200 bg-slate-50 shadow-slate-200/50 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-indigo-100"
                  }`}
                >
                  {/* Top Gradient Line */}
                  <div
                    className={`absolute left-0 right-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
                      darkMode
                        ? "bg-gradient-to-r from-indigo-500 via-blue-500 to-transparent"
                        : "bg-gradient-to-r from-indigo-500 via-blue-500 to-transparent"
                    }`}
                  />

                  {/* Card Glow */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                      darkMode ? "bg-indigo-500/10" : "bg-indigo-400/10"
                    }`}
                  />

                  <div className="relative">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p
                          className={`text-sm font-medium transition-colors duration-300 ${
                            darkMode
                              ? "text-indigo-400 group-hover:text-indigo-300"
                              : "text-indigo-600 group-hover:text-indigo-700"
                          }`}
                        >
                          {item.organization}
                        </p>

                        <h3
                          className={`mt-1 text-2xl font-bold transition-colors duration-300 sm:text-3xl ${
                            darkMode
                              ? "text-white group-hover:text-indigo-50"
                              : "text-slate-900 group-hover:text-indigo-950"
                          }`}
                        >
                          {item.title}
                        </h3>

                        {/* Mobile Date */}
                        <p
                          className={`mt-3 text-sm sm:hidden ${
                            darkMode ? "text-slate-500" : "text-slate-500"
                          }`}
                        >
                          {item.duration}
                        </p>
                      </div>

                      <span
                        className={`experience-type w-fit rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 group-hover:-translate-y-0.5 ${
                          darkMode
                            ? "border-slate-700 bg-slate-950 text-slate-400 group-hover:border-indigo-500/30 group-hover:text-indigo-300"
                            : "border-slate-200 bg-white text-slate-500 group-hover:border-indigo-300 group-hover:text-indigo-600"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className={`mt-5 max-w-3xl text-sm leading-7 sm:text-base ${
                        darkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Focus Areas */}
                    <div className="mt-7">
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                          darkMode ? "text-slate-500" : "text-slate-500"
                        }`}
                      >
                        Focus Areas
                      </p>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {item.points.map((point, pointIndex) => (
                          <div
                            key={point}
                            className={`experience-point flex items-start gap-3 text-sm leading-6 transition-transform duration-300 group-hover:translate-x-0.5 ${
                              darkMode
                                ? "text-slate-400"
                                : "text-slate-600"
                            }`}
                            style={{
                              transitionDelay: `${pointIndex * 25}ms`,
                            }}
                          >
                            <span className="experience-point-dot mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 transition-transform duration-300 group-hover:scale-125" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div
                      className={`mt-8 border-t pt-6 ${
                        darkMode ? "border-slate-800" : "border-slate-200"
                      }`}
                    >
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                          darkMode ? "text-slate-500" : "text-slate-500"
                        }`}
                      >
                        Technologies & Tools
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className={`experience-tech rounded-xl border px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                              darkMode
                                ? "border-slate-800 bg-slate-950 text-slate-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300"
                                : "border-slate-200 bg-white text-slate-600 hover:-translate-y-1 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
                            }`}
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Note */}
        <div
          className={`experience-note group relative mt-10 overflow-hidden rounded-3xl border p-6 text-center transition-all duration-500 hover:-translate-y-1 ${
            darkMode
              ? "border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-500/30 hover:bg-indigo-500/[0.07] hover:shadow-lg hover:shadow-indigo-950/10"
              : "border-indigo-200 bg-indigo-50/60 hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-lg hover:shadow-indigo-100"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-1/3 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          <p
            className={`relative text-sm leading-7 sm:text-base ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <span
              className={`font-semibold ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              }`}
            >
              Continuous learning:
            </span>{" "}
            building practical experience through professional training,
            internship work and hands-on web development projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;

