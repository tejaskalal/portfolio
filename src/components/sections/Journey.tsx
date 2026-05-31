"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { timeline } from "@/lib/data";

const dotColors: Record<string, string> = {
  blue: "bg-[#4f8ef7] shadow-[0_0_0_4px_rgba(79,142,247,0.2)]",
  purple: "bg-[#8b5cf6] shadow-[0_0_0_4px_rgba(139,92,246,0.2)]",
  green: "bg-[#06d6a0] shadow-[0_0_0_4px_rgba(6,214,160,0.2)]",
  amber: "bg-[#f59e0b] shadow-[0_0_0_4px_rgba(245,158,11,0.2)]",
  teal: "bg-[#14b8a6] shadow-[0_0_0_4px_rgba(20,184,166,0.2)]",
};

const tagColors: Record<string, string> = {
  blue: "border-[rgba(79,142,247,0.25)] text-[#4f8ef7] bg-[rgba(79,142,247,0.06)]",
  purple: "border-[rgba(139,92,246,0.25)] text-[#8b5cf6] bg-[rgba(139,92,246,0.06)]",
  green: "border-[rgba(6,214,160,0.25)] text-[#06d6a0] bg-[rgba(6,214,160,0.06)]",
  amber: "border-[rgba(245,158,11,0.25)] text-[#f59e0b] bg-[rgba(245,158,11,0.06)]",
  teal: "border-[rgba(20,184,166,0.25)] text-[#14b8a6] bg-[rgba(20,184,166,0.06)]",
};

const phaseColors: Record<string, string> = {
  blue: "text-[#4f8ef7]",
  purple: "text-[#8b5cf6]",
  green: "text-[#06d6a0]",
  amber: "text-[#f59e0b]",
  teal: "text-[#14b8a6]",
};

export default function Journey() {
  return (
    <section id="journey" className="section-padding bg-[#050709] px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="// learning path" title="My Journey" />

        <div className="relative mt-12 pl-8 md:pl-12">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[rgba(79,142,247,0.15)]" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-10 last:pb-0"
            >
              {/* Dot */}
              <div
                className={`absolute -left-8 md:-left-12 top-1 w-2.5 h-2.5 rounded-full ${dotColors[item.color]}`}
                style={{ transform: "translateX(calc(-50% + 0.5px))" }}
              />

              <div className="bg-[#0a0d14] border border-[rgba(79,142,247,0.12)] rounded-xl p-5 hover:border-[rgba(79,142,247,0.25)] transition-colors">
                <div className={`font-mono text-xs tracking-widest uppercase mb-1 ${phaseColors[item.color]}`}>
                  {item.phase}
                  {item.current && (
                    <span className="ml-2 inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#06d6a0] animate-pulse" />
                      <span className="text-[#06d6a0]">Current</span>
                    </span>
                  )}
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#e8edf5] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#8892a4] leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-mono text-[10px] px-2.5 py-1 border rounded ${tagColors[item.color]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
