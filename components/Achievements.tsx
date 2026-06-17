import { achievements, recognitions } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="relative bg-obsidian py-28 sm:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Milestones"
          title="Results that speak for themselves."
          description="Numbers don't tell the whole story, but they're a useful proxy for the trust founders, teams, and users have placed in the work."
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-gold/10 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-4 border border-gold/10 bg-onyx/50 p-8">
                  <Icon size={24} strokeWidth={1.25} className="text-gold" />
                  <p className="font-display text-4xl text-ivory sm:text-5xl">
                    <AnimatedCounter
                      value={stat.value}
                      // prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-widest2 text-smoke">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="eyebrow mb-10">Recognition</p>
          </Reveal>
          <div className="grid gap-px border border-gold/10 sm:grid-cols-3">
            {recognitions.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="flex h-full flex-col gap-4 border border-gold/10 p-8">
                    <Icon size={22} strokeWidth={1.25} className="text-gold" />
                    <div>
                      <h3 className="font-display text-lg text-ivory">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-widest2 text-gold/70">
                        {item.org}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-smoke">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
