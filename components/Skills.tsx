"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/app/data";
import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--accent-light)" }}>
          What I work with
        </p>
        <h2 className="text-4xl font-black mb-16" style={{ color: "var(--foreground)" }}>
          Technical Skills
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group, gi) => (
          <SkillCard key={group.category} group={group} index={gi} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ group, index }: { group: { category: string; items: string[] }; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-xl p-5"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
      }}
    >
      <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: "var(--accent-light)" }}>
        {group.category}
      </p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.07 + i * 0.04, duration: 0.3 }}
            className="text-xs px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(124,58,237,0.1)",
              color: "#c4b5fd",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
