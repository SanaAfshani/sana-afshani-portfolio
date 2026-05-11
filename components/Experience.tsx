"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { experience } from "@/app/data";
import AnimatedSection from "./AnimatedSection";
import { ChevronDown } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--accent-light)" }}>
          Where I've worked
        </p>
        <h2 className="text-4xl font-black mb-16" style={{ color: "var(--foreground)" }}>
          Experience
        </h2>
      </AnimatedSection>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-0 top-2 bottom-2 w-px hidden sm:block"
          style={{ background: "var(--border)" }}
        />

        <div className="flex flex-col gap-10">
          {experience.map((job, i) => (
            <ExperienceItem key={job.company} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  job,
  index,
}: {
  job: (typeof experience)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="sm:pl-8 relative"
    >
      {/* dot */}
      <motion.div
        className="absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-[3px] hidden sm:block"
        style={{ background: "var(--accent)" }}
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.3 }}
      />

      <button
        className="w-full text-left group"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold leading-tight" style={{ color: "var(--foreground)" }}>
              {job.company}
            </h3>
            <p className="text-sm mt-0.5" style={{ color: "var(--accent-light)" }}>
              {job.role}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 mt-1">
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
              style={{
                background: "rgba(124,58,237,0.1)",
                color: "#9999bb",
                border: "1px solid var(--border)",
              }}
            >
              {job.period}
            </span>
            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown size={16} style={{ color: "#555577" }} />
            </motion.div>
          </div>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: "hidden" }}
      >
        <ul className="mt-4 space-y-2.5">
          {job.highlights.map((h, hi) => (
            <motion.li
              key={hi}
              initial={{ opacity: 0, x: -10 }}
              animate={open ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: hi * 0.05, duration: 0.35 }}
              className="flex gap-3 text-sm leading-relaxed"
              style={{ color: "#8888aa" }}
            >
              <span
                className="mt-2 shrink-0 rounded-full"
                style={{ width: 4, height: 4, background: "var(--accent)", display: "block" }}
              />
              {h}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {index < experience.length - 1 && (
        <div className="mt-8 border-t" style={{ borderColor: "var(--border)" }} />
      )}
    </motion.div>
  );
}
