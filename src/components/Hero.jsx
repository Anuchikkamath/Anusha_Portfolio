import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile.js";
import myImage from "../resume/my_image.png";

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden">
      <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div className="max-w-3xl">
          <p className="section-kicker">{profile.location}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold text-ocean sm:text-2xl">
            {profile.role}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-ocean/15 bg-white px-3.5 py-1.5 text-sm font-semibold text-ink/75 shadow-sm"
              >
                {highlight}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">
            I build AI-powered applications using LLMs, RAG, LangChain,
            FastAPI, Python, SQL, and modern data/AI tools.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-800"
            >
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center justify-center rounded-lg border border-emerald-900/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-ocean hover:text-ocean"
              download
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-emerald-900/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-ocean hover:text-ocean"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-emerald-900/10 bg-white text-ink transition hover:border-ocean hover:text-ocean"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.gitHub}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-emerald-900/10 bg-white text-ink transition hover:border-ocean hover:text-ocean"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-emerald-900/10 bg-white text-ink transition hover:border-ocean hover:text-ocean"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-emerald-200/30 blur-2xl" />
          <img
            src={myImage}
            alt="Anusha Chikkamath"
            className="relative mx-auto aspect-[4/5] w-full max-w-xs rounded-2xl object-cover object-top shadow-soft sm:max-w-sm lg:ml-auto"
          />
        </div>
      </div>
    </section>
  );
}
