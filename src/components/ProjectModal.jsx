import { X } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-md"
      onMouseDown={onClose}
      role="presentation"
    >
      <article
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl sm:p-8"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          ref={closeButtonRef}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-900/10 bg-white text-ink transition hover:border-ocean hover:text-ocean"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-800">
          {project.type}
        </span>
        <h3
          id="project-modal-title"
          className="mt-4 pr-10 text-2xl font-bold text-ink sm:text-3xl"
        >
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-ink/75">
          {project.description}
        </p>

        <div className="mt-7 grid gap-5">
          <DetailBlock label="Problem statement" value={project.problem} />
          <DetailBlock label="My role" value={project.myRole} />
          <DetailBlock label="Workflow" value={project.workflow} />
          <DetailBlock label="Outcome" value={project.outcome} />
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-ink/60">
              Tech stack
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function DetailBlock({ label, value }) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wide text-ink/60">
        {label}
      </h4>
      <p className="mt-2 text-base leading-7 text-ink/75">{value}</p>
    </div>
  );
}
