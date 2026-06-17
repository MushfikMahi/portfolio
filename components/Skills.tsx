import { skillCategories } from "@/lib/data";
import MarqueeBand from "./MarqueeBand";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative bg-onyx/40 py-28 sm:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Capabilities"
          title="A full-stack toolkit, refined over a decade."
          description="From product strategy to production infrastructure — the disciplines I rely on to take a venture from whiteboard to shipped."
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-gold/10 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col gap-5 border border-gold/10 bg-obsidian p-8 transition-colors duration-500 ease-luxe hover:bg-onyx">
                  <Icon
                    size={28}
                    strokeWidth={1.25}
                    className="text-gold transition-transform duration-500 ease-luxe group-hover:-translate-y-1"
                  />
                  <div>
                    <h3 className="font-display text-xl text-ivory">{category.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-smoke">
                      {category.description}
                    </p>
                  </div>
                  <ul className="mt-auto flex flex-col gap-2 pt-4">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-smoke"
                      >
                        <span className="h-1 w-1 rounded-full bg-gold/60" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <MarqueeBand />
      </div>
    </section>
  );
}
