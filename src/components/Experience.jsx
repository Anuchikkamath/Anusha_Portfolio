export default function Experience() {
  return (
    <section id="experience" className="bg-white">
      <div className="section-shell">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Recent work</h2>

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
            Worked on AI automation, RAG pipelines, LLM-based classification,
            document intelligence, and structured extraction workflows. Built
            backend API workflows using FastAPI and integrated LLMs for
            real-world business automation use cases.
          </p>

          <p className="mt-5 rounded-lg border border-emerald-900/10 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
            Some work projects are internal company projects, so source code is
            confidential. The case studies below explain my contribution,
            workflow, and outcome.
          </p>
        </article>
      </div>
    </section>
  );
}
