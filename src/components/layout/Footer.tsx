import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(79,142,247,0.12)] bg-[#0a0d14] px-6 md:px-10 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-[#4a5568]">
          &copy; {year}{" "}
          <span className="text-[#4f8ef7]">{personalInfo.name}</span>. Built
          with{" "}
          <span className="text-[#4f8ef7]">Next.js</span>,{" "}
          <span className="text-[#8b5cf6]">Tailwind CSS</span> &amp;{" "}
          <span className="text-[#06d6a0]">Framer Motion</span>.
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: personalInfo.github, icon: Github, label: "GitHub" },
            { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
            {
              href: `mailto:${personalInfo.email}`,
              icon: Mail,
              label: "Email",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center border border-[rgba(79,142,247,0.15)] rounded-lg text-[#8892a4] hover:text-[#4f8ef7] hover:border-[rgba(79,142,247,0.4)] hover:bg-[rgba(79,142,247,0.06)] transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
