"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col border border-gold/10 bg-onyx/60 transition-colors duration-500 ease-luxe hover:border-gold/30"
    >
      {/* Visual */}
      <div className="shimmer-sweep relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-gold/10 bg-gradient-to-br from-charcoal via-onyx to-obsidian">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top transition-transform duration-700 ease-luxe group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ) : (
          <span className="font-display text-[7rem] italic text-gold/10 transition-transform duration-700 ease-luxe group-hover:scale-105 sm:text-[9rem]">
            {project.name.charAt(0)}
          </span>
        )}
        {/* Overlay gradient for readability */}
        {project.image && (
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/20 to-transparent" />
        )}
        <span className="absolute left-6 top-6 font-mono text-[11px] uppercase tracking-widest2 text-gold/80 drop-shadow">
          {project.year}
        </span>
        <span className="absolute right-6 top-6 font-mono text-[11px] uppercase tracking-widest2 text-ivory/70 drop-shadow">
          {project.role}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-5 p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl text-ivory sm:text-3xl">{project.name}</h3>
          <div className="flex shrink-0 gap-3 pt-1">
            {project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name} live`}
                className="text-smoke transition-colors duration-300 hover:text-gold"
              >
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.name} repository`}
              className="text-smoke transition-colors duration-300 hover:text-gold"
            >
              <Github size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-smoke sm:text-base">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-gold/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-gold/10 pt-5">
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-smoke">
            {project.metric.label}
          </span>
          <span className="font-display text-xl text-gold">{project.metric.value}</span>
        </div>
      </div>
    </motion.article>
  );
}
