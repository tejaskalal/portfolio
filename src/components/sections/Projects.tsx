"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-xl border border-[rgba(79,142,247,0.12)] bg-[#0f1420] transition-all duration-300 hover:border-[rgba(79,142,247,0.35)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
    >
      {/* Top gradient line */}
      <div
        className="absolute left-0 right-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, ${project.accentColor}, #8b5cf6)`,
        }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="mb-3 flex items-start justify-between">
          <div>
            <span
              className="font-mono text-xs tracking-widest"
              style={{ color: project.accentColor }}
            >
              {project.id} — {project.category}
            </span>

            <h3 className="mt-1 text-base font-bold leading-snug text-[#e8edf5] md:text-lg">
              {project.title}
            </h3>
          </div>

          <div className="ml-3 flex flex-shrink-0 gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded border border-[rgba(79,142,247,0.2)] text-[#8892a4] transition-all hover:border-[rgba(79,142,247,0.5)] hover:text-[#4f8ef7]"
              >
                <Github size={14} />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Demo"
                className="flex h-8 w-8 items-center justify-center rounded border border-[rgba(79,142,247,0.2)] text-[#8892a4] transition-all hover:border-[rgba(79,142,247,0.5)] hover:text-[#4f8ef7]"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-[#8892a4]">
          {project.description}
        </p>

        {/* Features toggle */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mb-4 overflow-hidden"
            >
              <div className="space-y-1.5 pt-1">
                {project.features?.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-xs text-[#8892a4]"
                  >
                    <span
                      className="h-1 w-1 flex-shrink-0 rounded-full"
                      style={{ background: project.accentColor }}
                    />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="mb-4 flex items-center gap-1 font-mono text-xs text-[#4a5568] transition-colors hover:text-[#4f8ef7]"
        >
          {expanded ? (
            <>
              <ChevronUp size={12} /> Hide features
            </>
          ) : (
            <>
              <ChevronDown size={12} /> Show features
            </>
          )}
        </button>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech?.map((tech) => (
            <span
              key={tech}
              className="rounded border px-2 py-1 font-mono text-[10px]"
              style={{
                color: project.accentColor,
                borderColor: `${project.accentColor}33`,
                background: `${project.accentColor}0d`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-[#0a0d14] px-6 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="// featured work"
          title="Projects"
          description="Real-world applications built with production-grade architecture and modern tooling."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
         {projects.map((project, i) => {
      if (!project) return null;

  return (
    <ProjectCard
      key={project.id}
      project={project}
      index={i}
    />
  );
})}
        </div>
      </div>
    </section>
  );
}
