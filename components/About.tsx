"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutStats, profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative bg-obsidian py-28 sm:py-36">
      <div className="container-luxe">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Portrait frame */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 border border-gold/20" />
              <div className="relative aspect-[4/5] overflow-hidden border border-gold/30">
                <Image
                  src="/mahi.png"
                  alt={profile.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, x: -16, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-8 -right-6 hidden border border-gold/30 bg-onyx px-6 py-5 sm:block sm:-right-10"
              >
                <div className="flex gap-6">
                  {aboutStats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-display text-2xl text-gold">{stat.value}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-widest2 text-smoke">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="flex flex-col gap-8 pt-4">
            <SectionHeading
              eyebrow="The Builder"
              title="Building at the intersection of code and commerce."
            />

            <Reveal delay={0.1} className="flex flex-col gap-6 text-base leading-relaxed text-smoke sm:text-lg">
              <p>
                I&rsquo;m {profile.firstName}, a self-taught full-stack developer and entrepreneur
                from Chittagong, Bangladesh. I started my journey at Programming Hero in early
                2024 and haven&rsquo;t stopped building since.
              </p>
              <p>
                I founded{" "}
                <a
                  href="https://fragranttouchbd.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold/80 underline underline-offset-4 transition-colors hover:text-gold"
                >
                  Fragrant Touch
                </a>{" "}
                — a full luxury e-commerce platform for fragrances — handling everything from the
                database schema to the customer-facing storefront and admin dashboard. Every
                product decision is weighed against one question: does this serve the user, and
                is it something I&rsquo;d be proud to ship under my own name?
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <blockquote className="border-l border-gold/40 pl-6 font-display text-xl italic leading-relaxed text-ivory sm:text-2xl">
                &ldquo;The best developers don&rsquo;t just write code — they solve real problems,
                build real businesses, and create real value.&rdquo;
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
