import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-onyx/40 py-28 sm:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="The Journey"
          title="A decade of building, scaling, leading."
          description="The roles and ventures that shaped the way I build products today — in chronological order."
        />

        <div className="mt-16 flex flex-col">
          {experience.map((entry, i) => (
            <Reveal key={entry.role + entry.org} delay={i * 0.06}>
              <div className="grid gap-6 border-t border-gold/10 py-10 sm:grid-cols-[200px_1px_1fr] sm:gap-10">
                <p className="font-mono text-[12px] uppercase tracking-widest2 text-gold/80">
                  {entry.period}
                </p>

                <div className="relative hidden sm:block">
                  <div className="hairline-v absolute inset-y-0 left-0 w-px" />
                  <div className="absolute left-0 top-1.5 h-2 w-2 -translate-x-[3.5px] rounded-full border border-gold bg-obsidian" />
                </div>

                <div>
                  <h3 className="font-display text-2xl text-ivory sm:text-3xl">{entry.role}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-smoke">
                    {entry.org}
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-smoke sm:text-base">
                    {entry.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="hairline" />
        </div>
      </div>
    </section>
  );
}
