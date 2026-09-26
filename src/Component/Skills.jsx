
import { skillCategories } from "../data/Skills.js";
import useScrollReveal from "../Hooks/useScrollReveal.js";

function SkillCard({ category, index, darkMode }) {
  const cardRef = useScrollReveal({
    threshold: 0.12,
    rootMargin: "0px 0px -60px 0px",
  });

  return (
    <article
      ref={cardRef}
      className={`scroll-reveal group relative overflow-hidden rounded-3xl border p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 ${
        darkMode
          ? "border-slate-800 bg-slate-900/60 shadow-black/10 hover:border-indigo-500/30 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-indigo-950/10"
          : "border-slate-200 bg-white shadow-slate-200/50 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100/40"
      }`}
      style={{
        animationDelay: `${index * 120}ms`,
      }}
    >
      {/* Hover Glow */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-100 ${
          darkMode ? "bg-indigo-500/10" : "bg-indigo-400/10"
        }`}
      />

      {/* Top Accent */}
      <span
        aria-hidden="true"
        className="absolute left-6 right-6 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100"
      />

      {/* Card Header */}
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <h3
            className={`text-xl font-bold transition-colors duration-300 ${
              darkMode
                ? "text-white group-hover:text-indigo-100"
                : "text-slate-900 group-hover:text-indigo-700"
            }`}
          >
            {category.title}
          </h3>

          <p
            className={`mt-2 text-sm leading-6 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {category.description}
          </p>
        </div>

        {/* Number Badge */}
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
            darkMode
              ? "bg-indigo-600/15 text-indigo-400 ring-1 ring-indigo-500/20 group-hover:bg-indigo-600/20 group-hover:ring-indigo-400/40"
              : "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200 group-hover:bg-indigo-100 group-hover:ring-indigo-300"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Skills */}
      {category.skills.length > 0 ? (
        <div className="relative mt-6 flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <span
              key={skill}
              className={`cursor-default rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
                darkMode
                  ? "border-slate-700 bg-slate-950/60 text-slate-300 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300 hover:shadow-lg hover:shadow-indigo-950/20"
                  : "border-slate-200 bg-slate-50 text-slate-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md"
              }`}
              style={{
                transitionDelay: `${skillIndex * 25}ms`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      ) : (
        <div
          className={`relative mt-6 rounded-2xl border border-dashed p-4 text-sm transition-all duration-300 group-hover:border-indigo-400/30 ${
            darkMode
              ? "border-slate-700 bg-slate-900/50 text-slate-500"
              : "border-slate-200 bg-slate-50 text-slate-500"
          }`}
        >
          Technologies will be added as they are confirmed.
        </div>
      )}

      {/* Bottom Accent */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500 group-hover:w-full"
      />
    </article>
  );
}

function Skills({ darkMode }) {
  const headingRef = useScrollReveal({
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  });

  const noteRef = useScrollReveal({
    threshold: 0.12,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <section
      id="skills"
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
        <div
          ref={headingRef}
          className="scroll-reveal mx-auto max-w-3xl text-center"
        >
          <p
            className={`text-sm font-semibold uppercase tracking-[0.25em] ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            Skills & Technologies
          </p>

          <h2
            className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Technologies I{" "}
            <span className="text-indigo-500">Work With</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500" />

          <p
            className={`mt-5 text-base leading-7 sm:text-lg ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A practical collection of technologies, tools and development
            concepts I use to build modern, responsive and maintainable web
            applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
              darkMode={darkMode}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <div
          ref={noteRef}
          className={`scroll-reveal group relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border p-6 text-center transition-all duration-500 hover:-translate-y-1 ${
            darkMode
              ? "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-indigo-500/30 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-indigo-950/10"
              : "border-slate-200 bg-slate-50 text-slate-600 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/30"
          }`}
        >
          {/* Top Accent */}
          <span
            aria-hidden="true"
            className="absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
          />

          <p className="text-sm leading-6">
            I continuously improve my development workflow by practicing
            modern frontend techniques, reusable components, responsive
            layouts and clean code.
          </p>

          {/* Bottom Accent */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-10 right-10 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent transition-transform duration-700 group-hover:scale-x-100"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;

