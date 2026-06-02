import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experienceDescription = [
  "Worked on Generative AI and LLM-powered applications focused on enterprise automation, intelligent document processing, and workflow optimization using Python, FastAPI, and Gemini/OpenAI APIs.",
  "Built AI-driven systems for TARIC code prediction and product classification using LLMs, prompt engineering, and contextual reasoning workflows to improve classification accuracy and automation efficiency.",
  "Developed AI agent workflows for Purchase Order (PO) automation including intelligent extraction, validation, structured response generation, and downstream workflow integration.",
  "Designed and implemented Retrieval-Augmented Generation (RAG) pipelines using embeddings, vector databases, and semantic search for contextual information retrieval from enterprise documents and business data.",
  "Built document intelligence pipelines to process Gmail transcripts and PDF documents into structured JSON outputs for automation and knowledge retrieval use cases.",
  "Developed FastAPI backend services and REST APIs for ML/LLM integration, asynchronous processing, and scalable AI-powered applications.",
  "Worked on prompt engineering, structured outputs, tool usage workflows, and response optimization techniques for improving LLM reliability and output quality.",
  "Collaborated with internal teams to build AI-powered automation tools, intelligent assistants, and workflow solutions while using AI coding tools such as Cursor, Windsurf, Codex, and GitHub Copilot for rapid development and debugging.",
];

export default function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="experience" className="bg-white">
      <div className="section-shell">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Professional Experience</h2>

        <article className="card mt-10 p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-ink">
                RAG & Automation Engineer
              </h3>
              <p className="mt-2 text-lg font-semibold text-ocean">
                Viljetech Labs
              </p>
            </div>
            <span className="inline-flex w-fit rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800">
              Oct 2025 - May 2026
            </span>
          </div>

          <p className="mt-6 text-base leading-7 text-ink/75">
            {experienceDescription[0]}
            <br />
            {experienceDescription[1]}
          </p>

          <button
            type="button"
            className="mt-5 inline-flex items-center rounded-lg border border-emerald-900/15 bg-white px-4 py-2 text-sm font-semibold text-ocean transition hover:border-ocean hover:bg-emerald-50"
            onClick={() => setIsModalOpen(true)}
          >
            Read More
          </button>
        </article>
      </div>

      <ExperienceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

function ExperienceModal({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
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
  }, [isOpen, onClose]);

  if (!isOpen) {
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
        aria-labelledby="experience-modal-title"
      >
        <button
          type="button"
          ref={closeButtonRef}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-900/10 bg-white text-ink transition hover:border-ocean hover:text-ocean"
          onClick={onClose}
          aria-label="Close experience details"
        >
          <X size={20} />
        </button>

        <h3
          id="experience-modal-title"
          className="pr-10 text-2xl font-bold text-ink sm:text-3xl"
        >
          RAG & Automation Engineer
        </h3>
        <p className="mt-2 text-base font-semibold text-ocean">
          Viljetech Labs · Oct 2025 - May 2026
        </p>

        <div className="mt-7 grid gap-4">
          {experienceDescription.map((item) => (
            <p key={item} className="text-base leading-7 text-ink/75">
              {item}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
