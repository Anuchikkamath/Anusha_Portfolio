import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectModal from "./ProjectModal.jsx";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects">
      <div className="section-shell">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">My Projects</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <button
              key={project.title}
              type="button"
              className="card group flex h-full flex-col p-6 text-left transition hover:-translate-y-1 hover:border-ocean/40 hover:shadow-soft"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-xl font-bold text-ink">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-base leading-7 text-ink/70">
                {project.shortDescription}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.slice(0, 5).map((tech) => (
                  <span key={tech} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="mt-6 text-sm font-bold text-ocean transition group-hover:text-emerald-700">
                View Details
              </span>
            </button>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
