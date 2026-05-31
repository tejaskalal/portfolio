"use client";
import { motion } from "framer-motion";

const lines = [
  { type: "prompt", text: "whoami" },
  { type: "output-accent", text: "Tejas Kalal — Full Stack Developer & DevOps Engineer" },
  { type: "blank" },
  { type: "prompt", text: "cat skills.json | jq '.expertise'" },
  { type: "output-blue", text: '[ "MERN Stack", "Docker", "Kubernetes", "Terraform", "Cloud Computing", "CI/CD" , "Linux" , "Ansible" ]' },
  { type: "blank" },
  { type: "prompt", text: "kubectl get deployments --all-namespaces" },
  { type: "output-header", text: "NAME               READY  STATUS" },
  { type: "output-success", text: "lifeai-platform    1/1    Running ✓" },
  { type: "output-success", text: "ai-inference       3/3    Running ✓" },
  { type: "output-success", text: "log-processor      2/2    Running ✓" },
  { type: "output-success", text: "Automated CI/CD         1/1    Running ✓" },
  { type: "blank" },
  { type: "prompt", text: "git log --oneline -4" },
  { type: "output-comment", text: "a3f1b2c feat: add multi-VM AI inference workers" },
  { type: "output-comment", text: "9d84e51 fix: redis queue deadlock in log processor" },
  { type: "output-comment", text: "c720f13 chore: k8s HPA configuration update" },
  { type: "output-comment", text: "0fee321 init: terraform infra for cloud VMs" },
  { type: "blank" },
  { type: "prompt", text: "echo $HIRE_ME" },
  { type: "output-green", text: "true ✓" },
  { type: "cursor" },
];

const textClass: Record<string, string> = {
  "output-accent": "text-[#4f8ef7] pl-4",
  "output-blue": "text-[#9cdcfe] pl-4",
  "output-header": "text-[#9cdcfe] pl-4",
  "output-success": "text-[#4caf50] pl-4",
  "output-comment": "text-[#6a737d] pl-4",
  "output-green": "text-[#06d6a0] pl-4",
};

export default function Terminal() {
  return (
    <section className="py-16 px-6 md:px-10 bg-[#0a0d14]">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.15em] uppercase text-[#4f8ef7] mb-4 text-center"
        >
          // system info
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-[#e8edf5] mb-8"
        >
          $ whoami
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0d1117] border border-[rgba(79,142,247,0.2)] rounded-xl overflow-hidden"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[rgba(255,255,255,0.06)]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28ca41]" />
            <span className="font-mono text-xs text-[#4a5568] ml-2">
              tejas@portfolio ~ zsh
            </span>
          </div>

          {/* Body */}
          <div className="p-6 font-mono text-sm leading-[1.9] overflow-x-auto">
            {lines.map((line, i) => {
              if (line.type === "blank")
                return <div key={i} className="h-2" />;
              if (line.type === "cursor")
                return (
                  <div key={i} className="flex items-center gap-0">
                    <span className="text-[#4ec9b0]">tejas@dev</span>
                    <span className="text-[#569cd6]">:~</span>
                    <span className="text-[#e8edf5]">$ </span>
                    <span className="inline-block w-2 h-[1.1em] bg-[#4f8ef7] ml-0.5 cursor-blink align-middle" />
                  </div>
                );
              if (line.type === "prompt")
                return (
                  <div key={i}>
                    <span className="text-[#4ec9b0]">tejas@dev</span>
                    <span className="text-[#569cd6]">:~</span>
                    <span className="text-[#e8edf5]">$ </span>
                    <span className="text-[#ce9178]">{line.text}</span>
                  </div>
                );
              return (
                <div key={i} className={textClass[line.type] ?? "text-[#e8edf5] pl-4"}>
                  {line.text}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
