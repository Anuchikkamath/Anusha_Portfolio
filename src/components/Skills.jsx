import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-shell">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">Tools I use to ship AI systems</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.category} className="card p-6">
              <h3 className="text-lg font-bold text-ink">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
