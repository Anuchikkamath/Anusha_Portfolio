const stats = [
  { value: "7+", label: "Months Experience" },
  { value: "4+", label: "Projects" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Passion for AI" },
];

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-lg border border-emerald-900/10 bg-mist px-5 py-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-ocean/30 hover:shadow-soft"
            >
              <p className="text-3xl font-bold text-ocean sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-ink/65">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
