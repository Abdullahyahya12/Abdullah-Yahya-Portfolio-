
import useScrollReveal from "../Hooks/useScrollReveal";

const projects = [
  {
    id: 1,
    title: "SaaSFlow",
    subtitle: "Modern SaaS Landing Page",
    description:
      "A modern and responsive SaaS landing page built with reusable React components and Tailwind CSS. Focused on clean UI, responsive layouts, smooth interactions and professional visual presentation.",
    image: "/Projects/saasflow.png",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
    ],
    github:
      "https://github.com/Abdullahyahya12/Saas-Landing-Page-React",
    live: "https://saas-landing-page-react-steel.vercel.app/",
  },
  {
    id: 2,
    title: "Task Management System",
    subtitle: "Full Stack Task Management App",
    description:
      "A task management project focused on structured application development, task organization, responsive UI and reusable components.",
    image: null,
    technologies: [
      "React",
      "JavaScript",
      "Responsive Design",
      "CRUD",
    ],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "React Menu Page",
    subtitle: "Modern Restaurant Menu UI",
    description:
      "A responsive restaurant menu interface built with React, focusing on reusable components, clean layouts and an easy-to-use browsing experience.",
    image: null,
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
      "Responsive Design",
    ],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Developer Portfolio",
    subtitle: "Personal Full Stack Developer Portfolio",
    description:
      "A modern developer portfolio designed to showcase technical skills, projects, experience and services with a premium responsive interface.",
    image: null,
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
    ],
    github: "#",
    live: "#",
  },
];

function ProjectCard({ project, index, darkMode }) {
  const cardRef = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <article
      ref={cardRef}
      className={`scroll-reveal group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${
        darkMode
          ? "border-slate-800 bg-slate-900/60 hover:border-indigo-500/30 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-indigo-950/20"
          : "border-slate-200 bg-white hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100/50"
      }`}
      style={{
        animationDelay: `${index * 120}ms`,
      }}
    >
      {/* IMAGE */}
      <div className="relative aspect-[16/9] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading={index === 0 ? "eager" : "lazy"}
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center ${
              darkMode
                ? "bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950"
                : "bg-gradient-to-br from-slate-100 via-white to-indigo-100"
            }`}
          >
            <div className="text-center">
              <span
                className={`text-4xl font-bold ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                {String(project.id).padStart(2, "0")}
              </span>

              <p
                className={`mt-2 text-sm font-medium ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Project Preview
              </p>
            </div>
          </div>
        )}

        {/* IMAGE OVERLAY */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${
            darkMode
              ? "from-slate-950/70 via-transparent to-transparent"
              : "from-slate-950/20 via-transparent to-transparent"
          }`}
        />

        {/* PROJECT NUMBER */}
        <span
          className={`absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold backdrop-blur-md ${
            darkMode
              ? "bg-slate-950/70 text-indigo-300 ring-1 ring-white/10"
              : "bg-white/85 text-indigo-600 shadow-lg ring-1 ring-slate-200"
          }`}
        >
          {String(project.id).padStart(2, "0")}
        </span>

        {/* HOVER LABEL */}
        <div className="absolute inset-0 flex items-center justify-center bg-indigo-950/0 opacity-0 transition-all duration-500 group-hover:bg-indigo-950/20 group-hover:opacity-100">
          <span
            className={`rounded-full px-5 py-2 text-sm font-semibold backdrop-blur-md ${
              darkMode
                ? "bg-white/10 text-white ring-1 ring-white/20"
                : "bg-white/90 text-slate-900 shadow-lg"
            }`}
          >
            View Project
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 sm:p-7">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            darkMode ? "text-indigo-400" : "text-indigo-600"
          }`}
        >
          {project.subtitle}
        </p>

        <h3
          className={`mt-2 text-2xl font-bold tracking-tight transition-colors duration-300 ${
            darkMode
              ? "text-white group-hover:text-indigo-300"
              : "text-slate-900 group-hover:text-indigo-600"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`mt-4 text-sm leading-7 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {project.description}
        </p>

        {/* TECHNOLOGIES */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "border-slate-700 bg-slate-950/60 text-slate-300 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-300"
                  : "border-slate-200 bg-slate-50 text-slate-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              {technology}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-7 flex flex-wrap gap-3">
          {project.github !== "#" ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "bg-white text-slate-900 hover:bg-indigo-50"
                  : "bg-slate-900 text-white hover:bg-indigo-600"
              }`}
            >
              GitHub
            </a>
          ) : (
            <span
              className={`inline-flex cursor-not-allowed items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold opacity-50 ${
                darkMode
                  ? "bg-slate-800 text-slate-400"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              GitHub
            </span>
          )}

          {project.live !== "#" ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Live Demo
            </a>
          ) : (
            <span
              className={`inline-flex cursor-not-allowed items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold opacity-50 ${
                darkMode
                  ? "border border-slate-700 text-slate-500"
                  : "border border-slate-200 text-slate-400"
              }`}
            >
              Live Demo
            </span>
          )}
        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 transition-all duration-500 group-hover:w-full"
      />
    </article>
  );
}

function Projects({ darkMode }) {
  const headingRef = useScrollReveal({
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <section
      id="projects"
      className={`relative overflow-hidden border-t py-24 sm:py-28 ${
        darkMode
          ? "border-slate-800/70 bg-slate-950"
          : "border-slate-200 bg-white"
      }`}
    >
      {/* BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full blur-3xl ${
          darkMode ? "bg-indigo-600/5" : "bg-indigo-400/10"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full blur-3xl ${
          darkMode ? "bg-blue-600/5" : "bg-blue-400/5"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* HEADING */}
        <div
          ref={headingRef}
          className="scroll-reveal mx-auto max-w-3xl text-center"
        >
          <p
            className={`text-sm font-semibold uppercase tracking-[0.25em] ${
              darkMode ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            Featured Projects
          </p>

          <h2
            className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Projects I’ve <span className="text-indigo-500">Built</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500" />

          <p
            className={`mt-5 text-base leading-7 sm:text-lg ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A selection of projects demonstrating my approach to modern
            frontend development, responsive interfaces and reusable React
            components.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              darkMode={darkMode}
            />
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div
          className={`mx-auto mt-10 max-w-3xl rounded-3xl border p-6 text-center ${
            darkMode
              ? "border-slate-800 bg-slate-900/40 text-slate-400"
              : "border-slate-200 bg-slate-50 text-slate-600"
          }`}
        >
          <p className="text-sm leading-6">
            More project details, screenshots and live links can be added as
            the portfolio grows.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
