"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { githubStats, languages } from "@/lib/data";

function ContribGrid() {
  const cells = useMemo(() => {
    return Array.from({ length: 52 * 7 }, (_, i) => {
      const pattern = [0, 1, 2, 3, 4, 5];
      return pattern[i % pattern.length];
    });
  }, []);

  const opacities = [0.06, 0.18, 0.35, 0.55, 0.75, 1.0];

  return (
    <div>
      <div
        className="grid gap-[3px]"
        style={{ gridTemplateColumns: "repeat(52, minmax(0, 1fr))" }}
      >
        {cells.map((level, i) => (
          <div
            key={i}
            className="contrib-cell"
            style={{
              paddingBottom: "100%",
              background: `rgba(79,142,247,${opacities[level]})`,
            }}
            title={`${level * 2} contributions`}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 mt-3 font-mono text-xs text-[#4a5568]">
        <span>Less</span>

        {opacities.map((op, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-sm"
            style={{ background: `rgba(79,142,247,${op})` }}
          />
        ))}

        <span>More</span>
      </div>
    </div>
  );
}

export default function GitHub() {
  return (
    <section id="github" className="section-padding bg-[#0a0d14] px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="// activity" title="GitHub Stats" />

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0f1420] border border-[rgba(79,142,247,0.12)] rounded-xl p-6"
          >
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#4a5568] mb-4">
              Overview
            </h3>
            {Object.entries({
              "Total Repositories": githubStats.repos,
              "Total Commits": githubStats.commits,
              "Pull Requests": githubStats.prs,
              "Contributions (Year)": githubStats.contributions
            }).map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between items-center py-2.5 border-b border-[rgba(255,255,255,0.04)] last:border-0"
              >
                <span className="text-sm text-[#8892a4]">{label}</span>
                <span className="font-mono text-sm font-bold text-[#4f8ef7]">
                  {value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0f1420] border border-[rgba(79,142,247,0.12)] rounded-xl p-6"
          >
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#7ea3e4] mb-5">
              Top Languages
            </h3>
            <div className="space-y-4">
              {languages.map((lang, i) => (
                <div key={lang.name} className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#8892a4]">{lang.name}</span>
                    <span
                      className="font-mono text-xs"
                      style={{ color: lang.color }}
                    >
                      {lang.pct}%
                    </span>
                  </div>
                  <div className="h-1 bg-[#0a0d14] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                      className="h-full rounded-full"
                      style={{ background: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contribution graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 bg-[#0f1420] border border-[rgba(79,142,247,0.12)] rounded-xl p-6"
          >
            <h3 className="font-mono text-xs tracking-widest uppercase text-[#4a5568] mb-5">
              Contribution Activity
            </h3>
            <ContribGrid />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
