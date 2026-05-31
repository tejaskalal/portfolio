"use client";
import { motion } from "framer-motion";
import { MapPin, Code2, Cloud, Cpu } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/lib/data";

const infoRows = [
  { label: "Location", value: "Maharashtra, India 🇮🇳", icon: MapPin },
  { label: "Role", value: "Full Stack Developer", icon: Code2 },
  { label: "Focus", value: "MERN · DevOps · Cloud · AI", icon: Cpu },
  { label: "Cloud", value: "AWS · Kubernetes · Terraform", icon: Cloud },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#0a0d14] px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="// about me" title="Who Am I?" />

        <div className="grid md:grid-cols-2 gap-12 mt-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#8892a4] leading-relaxed mb-4 text-sm md:text-base">
              I&apos;m a passionate{" "}
              <span className="text-[#e8edf5] font-semibold">
                Full Stack Developer
              </span>{" "}
              from Maharashtra, India, specializing in the MERN stack with a
              growing focus on DevOps and cloud infrastructure.
            </p>
            <p className="text-[#8892a4] leading-relaxed mb-4 text-sm md:text-base">
              My journey started with building web applications and has evolved
              into deploying distributed AI inference systems, GitOps pipelines,
              and Kubernetes-orchestrated microservices in production
              environments.
            </p>
            <div className="border-l-2 border-[#4f8ef7] pl-4 my-6">
              <p className="text-[#e8edf5] font-semibold text-base leading-relaxed">
                &ldquo;{personalInfo.tagline}&rdquo;
              </p>
            </div>
            <p className="text-[#8892a4] leading-relaxed text-sm md:text-base">
              Currently exploring AI deployment patterns, cloud-native
              architectures, and infrastructure-as-code. I thrive on solving
              complex engineering challenges at the intersection of software and
              operations.
            </p>

            {/* Tech highlights */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["MERN Stack", "DevOps", "Kubernetes", "AI Deployment", "Cloud"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1.5 border border-[rgba(79,142,247,0.2)] rounded text-[#4f8ef7] bg-[rgba(79,142,247,0.06)]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Info grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {infoRows.map(({ label, value, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 bg-[#0f1420] border border-[rgba(79,142,247,0.12)] rounded-lg hover:border-[rgba(79,142,247,0.3)] transition-colors group"
              >
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-[rgba(79,142,247,0.08)] rounded-md text-[#4f8ef7] group-hover:bg-[rgba(79,142,247,0.15)] transition-colors">
                  <Icon size={16} />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#4a5568] mb-0.5">
                    {label}
                  </div>
                  <div className="text-sm text-[#e8edf5]">{value}</div>
                </div>
              </motion.div>
            ))}

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 p-4 bg-[rgba(6,214,160,0.04)] border border-[rgba(6,214,160,0.2)] rounded-lg"
            >
              <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-[rgba(6,214,160,0.1)] rounded-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#06d6a0] animate-pulse" />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#4a5568] mb-0.5">
                  Status
                </div>
                <div className="text-sm text-[#06d6a0] font-semibold">
                  Open to Work
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
