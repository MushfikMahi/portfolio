"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { profile } from "@/lib/data";
import Seal from "./Seal";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-obsidian pt-20 pb-16 lg:pt-28"
    >
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-glow" />

      {/* Rotating seal watermark — only on very large screens where portrait won't overlap */}
      <motion.div
        className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 text-gold/[0.06] xl:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
      >
        <Seal className="h-[480px] w-[480px]" />
      </motion.div>

      <div className="container-luxe relative z-10 w-full">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20">
          {/* Portrait — shows on top on mobile/tablet, right column on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-[240px] sm:w-[280px] lg:order-last lg:w-auto"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-gold/20" />
            <div className="absolute -inset-2 border border-gold/10" />

            {/* Gold corner accents */}
            <span className="absolute -left-1 -top-1 h-6 w-6 border-l-2 border-t-2 border-gold/70 sm:h-8 sm:w-8" />
            <span className="absolute -bottom-1 -right-1 h-6 w-6 border-b-2 border-r-2 border-gold/70 sm:h-8 sm:w-8" />

            <div className="relative h-[300px] w-[240px] overflow-hidden sm:h-[350px] sm:w-[280px] lg:h-[480px] lg:w-[340px]">
              <Image
                src="/mahi.png"
                alt={profile.name}
                fill
                className="object-cover object-top grayscale-[15%]"
                priority
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 340px"
              />
              {/* Subtle gold overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-obsidian/80 to-transparent" />

              {/* Name tag at bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 lg:p-6">
                <p className="font-display text-base text-ivory lg:text-xl">
                  {profile.name}
                </p>
                <p className="mt-0.5 font-mono text-[9px] uppercase tracking-widest2 text-gold/80 lg:text-[10px]">
                  {profile.role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p variants={item} className="eyebrow mb-6">
              Full-Stack Developer · Entrepreneur · Builder
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-[14vw] leading-[0.95] tracking-tight text-ivory sm:text-7xl md:text-8xl lg:text-[6.5rem]"
            >
              {profile.firstName}
              <br />
              <span className="italic text-gradient-gold">
                {profile.lastName}
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg leading-relaxed text-smoke sm:text-xl"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-12 flex flex-wrap items-center gap-5"
            >
              <a
                href="#projects"
                className="shimmer-sweep group inline-flex items-center gap-2 bg-gold-gradient px-8 py-4 font-mono text-[11px] uppercase tracking-widest2 text-obsidian transition-transform duration-300 ease-luxe hover:scale-[1.02]"
              >
                View My Work
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-gold/30 px-8 py-4 font-mono text-[11px] uppercase tracking-widest2 text-ivory transition-all duration-300 ease-luxe hover:border-gold hover:text-gold"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-smoke sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest2">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
