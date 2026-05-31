"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Eye, Send } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useCountUp } from "@/hooks/useCountUp";
import { personalInfo, stats } from "@/lib/data";

function StatCard({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const count = useCountUp(value, 1500, true);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 + index * 0.15 }}
      className="bg-[#0a0d14] text-center px-6 py-5 border-r border-[rgba(79,142,247,0.12)] last:border-r-0"
    >
      <div className="font-mono text-2xl md:text-3xl font-bold text-[#4f8ef7]">
        {count}
        {suffix}
      </div>
      <div className="font-mono text-xs uppercase tracking-widest text-[#4a5568] mt-1">
        {label}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const typed = useTypingEffect(personalInfo.roles);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-10 overflow-hidden"
    >
      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#4f8ef7]/5 blur-[100px] animate-glow-pulse" />
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/4 blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-[#06d6a0] border border-[rgba(6,214,160,0.3)] bg-[rgba(6,214,160,0.05)] rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#06d6a0] animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="text-[#4f8ef7]">Tejas</span>
          <br />
          Kalal.
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-mono text-lg md:text-xl text-[#8892a4] mb-6 h-8"
        >
          {typed}
          <span className="inline-block w-0.5 h-5 bg-[#4f8ef7] ml-0.5 align-middle cursor-blink" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-[#8892a4] text-base md:text-lg leading-relaxed max-w-xl mb-10"
        >
          Full Stack Developer focused on{" "}
          MERN Stack, DevOps, cloud
          infrastructure, and AI deployment systems. I build scalable real-world
          applications and distributed cloud-native architectures.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4f8ef7] text-[#050709] font-mono text-sm font-bold rounded tracking-wider hover:bg-[#6ba3ff] hover:-translate-y-0.5 transition-all"
          >
            <Eye size={15} />
            View Projects
          </button>
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(79,142,247,0.3)] text-[#e8edf5] font-mono text-sm rounded tracking-wider hover:border-[#4f8ef7] hover:text-[#4f8ef7] hover:-translate-y-0.5 transition-all"
          >
            <Download size={15} />
            Download Resume
          </a>
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(79,142,247,0.3)] text-[#e8edf5] font-mono text-sm rounded tracking-wider hover:border-[#4f8ef7] hover:text-[#4f8ef7] hover:-translate-y-0.5 transition-all"
          >
            <Send size={15} />
            Contact Me
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="flex gap-3 mb-16"
        >
          {[
            { href: personalInfo.github, icon: Github, label: "GitHub" },
            { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center border border-[rgba(79,142,247,0.15)] rounded-lg text-[#8892a4] hover:text-[#4f8ef7] hover:border-[rgba(79,142,247,0.5)] hover:bg-[rgba(79,142,247,0.08)] transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="grid grid-cols-3 border border-[rgba(79,142,247,0.15)] rounded-lg overflow-hidden max-w-md"
        >
          {stats.map((s, i) => (
            <StatCard
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
