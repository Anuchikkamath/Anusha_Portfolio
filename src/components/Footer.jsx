import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="border-t border-emerald-900/10 bg-mist">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-ink/65 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 {profile.name}. Built with React & Tailwind CSS.</p>
        <a
          href="#home"
          className="font-semibold text-ocean transition hover:text-emerald-700"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
