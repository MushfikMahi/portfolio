import { navLinks, profile, socialLinks } from "@/lib/data";
import Seal from "./Seal";

export default function Footer() {
  return (
    <footer className="relative bg-obsidian">
      <div className="hairline" />
      <div className="container-luxe flex flex-col gap-10 py-16 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Seal className="h-9 w-9 text-gold/70" />
          <div>
            <p className="font-display text-lg text-ivory">{profile.name}</p>
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-smoke">
              {profile.role}
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-widest2 text-smoke transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center border border-gold/20 text-smoke transition-all duration-300 ease-luxe hover:border-gold hover:text-gold"
              >
                <Icon size={16} strokeWidth={1.5} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="hairline" />
      <div className="container-luxe flex flex-col items-center gap-2 py-8 text-center sm:flex-row sm:justify-between">
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-smoke">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-smoke">
          Designed &amp; built with precision.
        </p>
      </div>
    </footer>
  );
}
