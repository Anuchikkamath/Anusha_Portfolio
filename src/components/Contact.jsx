import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/profile.js";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    displayValue: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Mobile",
    value: profile.mobile,
    displayValue: profile.mobile,
    href: `tel:${profile.mobile}`,
    icon: Phone,
    external: false,
  },
  {
    label: "LinkedIn",
    value: profile.linkedIn,
    displayValue: "View LinkedIn Profile",
    href: profile.linkedIn,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: profile.gitHub,
    displayValue: "View GitHub Profile",
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
          <a
            href={profile.resumeUrl}
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            download
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        <div className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-2">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="card flex items-center gap-3 px-4 py-3 transition hover:-translate-y-0.5 hover:border-ocean/40 hover:shadow-soft"
                title={String(item.value)}
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-800">
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-ink/55">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-bold text-ink">
                    {item.displayValue}
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
