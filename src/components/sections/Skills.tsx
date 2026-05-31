"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { skills } from "@/lib/data";

const colorMap: Record<string, string> = {
  blue: "border-[rgba(79,142,247,0.3)] text-[#4f8ef7]",
  purple: "border-[rgba(139,92,246,0.3)] text-[#8b5cf6]",
  green: "border-[rgba(6,214,160,0.3)] text-[#06d6a0]",
  amber: "border-[rgba(245,158,11,0.3)] text-[#f59e0b]",
  teal: "border-[rgba(20,184,166,0.3)] text-[#14b8a6]",
};

const bgMap: Record<string, string> = {
  blue: "bg-[rgba(79,142,247,0.06)] hover:bg-[rgba(79,142,247,0.1)] hover:border-[rgba(79,142,247,0.5)]",
  purple: "bg-[rgba(139,92,246,0.06)] hover:bg-[rgba(139,92,246,0.1)] hover:border-[rgba(139,92,246,0.5)]",
  green: "bg-[rgba(6,214,160,0.06)] hover:bg-[rgba(6,214,160,0.1)] hover:border-[rgba(6,214,160,0.5)]",
  amber: "bg-[rgba(245,158,11,0.06)] hover:bg-[rgba(245,158,11,0.1)] hover:border-[rgba(245,158,11,0.5)]",
  teal: "bg-[rgba(20,184,166,0.06)] hover:bg-[rgba(20,184,166,0.1)] hover:border-[rgba(20,184,166,0.5)]",
};

const catBgMap: Record<string, string> = {
  blue: "group-hover:border-[rgba(79,142,247,0.4)]",
  purple: "group-hover:border-[rgba(139,92,246,0.4)]",
  green: "group-hover:border-[rgba(6,214,160,0.4)]",
  amber: "group-hover:border-[rgba(245,158,11,0.4)]",
  teal: "group-hover:border-[rgba(20,184,166,0.4)]",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#050709] px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="// tech stack"
          title="Skills & Technologies"
          description="A curated set of tools and technologies I use to build, ship, and scale applications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group bg-[#0a0d14] border border-[rgba(79,142,247,0.12)] rounded-xl p-6 transition-all duration-300 ${catBgMap[cat.color]}`}
            >
              <h3
                className={`font-mono text-xs tracking-[0.12em] uppercase mb-4 ${colorMap[cat.color].split(" ")[1]}`}
              >
                ⬡ {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`font-mono text-xs px-3 py-1.5 border rounded transition-all cursor-default ${colorMap[cat.color]} ${bgMap[cat.color]}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
