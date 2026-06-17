import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-obsidian py-28 sm:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Selected Work"
          title="Ventures & products I've built."
          description="A selection of the companies and products I've founded, led, or shipped end-to-end — spanning fintech, commerce, and productivity."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
