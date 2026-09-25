function ProjectCard({ project, darkMode }) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        darkMode
          ? "border-slate-800 bg-slate-900 shadow-black/20 hover:border-indigo-500/40"
          : "border-slate-200 bg-white shadow-slate-200/70 hover:border-indigo-300"
      }`}
    >
      {/* Project Preview */}
      <div
        className={`relative flex h-56 items-center justify-center overflow-hidden ${
          darkMode
            ? "bg-slate-950"
            : "bg-slate-100"
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="text-center">
            <div
              className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold ${
                darkMode
                  ? "bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20"
                  : "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200"
              }`}
            >
              {project.title?.charAt(0) || "P"}
            </div>

            <p
              className={`mt-3 text-sm font-medium ${
                darkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              Project Preview
            </p>
          </div>
        )}

        {/* Project Number */}
        <div
          className={`absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border text-xs font-bold backdrop-blur-md ${
            darkMode
              ? "border-slate-700 bg-slate-900/85 text-indigo-300"
              : "border-slate-200 bg-white/90 text-indigo-600"
          }`}
        >
          {String(project.id).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="p-7 sm:p-8">

        {/* Subtitle */}
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            darkMode ? "text-indigo-400" : "text-indigo-600"
          }`}
        >
          {project.subtitle}
        </p>

        {/* Title */}
        <h3
          className={`mt-2 text-2xl font-bold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className={`mt-4 text-sm leading-7 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies?.map((technology) => (
            <span
              key={technology}
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                darkMode
                  ? "border-slate-700 bg-slate-950 text-slate-300 hover:border-indigo-500/40 hover:text-indigo-300"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Features */}
        {project.features?.length > 0 && (
          <div className="mt-7">
            <p
              className={`text-sm font-semibold ${
                darkMode ? "text-slate-200" : "text-slate-800"
              }`}
            >
              Key Features
            </p>

            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className={`text-sm leading-6 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  <span className="mr-2 font-semibold text-indigo-500">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Buttons */}
        <div
          className={`mt-7 flex flex-col gap-3 border-t pt-6 sm:flex-row ${
            darkMode ? "border-slate-800" : "border-slate-200"
          }`}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex flex-1 items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                darkMode
                  ? "border-slate-700 bg-slate-950 text-slate-200 hover:border-indigo-500 hover:text-indigo-400"
                  : "border-slate-300 bg-white text-slate-700 hover:border-indigo-400 hover:text-indigo-600"
              }`}
            >
              GitHub
              <span className="ml-2">↗</span>
            </a>
          )}

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-500/20"
            >
              Live Demo
              <span className="ml-2">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;