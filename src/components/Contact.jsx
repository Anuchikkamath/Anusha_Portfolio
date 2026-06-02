import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/profile.js";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Mobile",
    value: profile.mobile,
    href: `tel:${profile.mobile}`,
    icon: Phone,
    external: false,
  },
  {
    label: "LinkedIn",
    value: profile.linkedIn,
    href: profile.linkedIn,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: profile.gitHub,
    href: profile.gitHub,
    icon: Github,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            I&apos;m open to AI Engineer, ML Engineer, Data Scientist, and Data
            Analyst opportunities.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="card flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:border-ocean/40 hover:shadow-soft"
              >
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-800">
                  <Icon size={22} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink/60">
                    {item.label}
                  </span>
                  <span className="mt-1 block break-words text-base font-bold text-ink">
                    {item.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
