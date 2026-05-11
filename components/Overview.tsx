"use client";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LangContext";
import { siteData } from "@/app/data";

function Counter({ value, label, index }: { value: string; label: string; index: number }) {
  const match = value.match(/^([\D]*)(\d+)([\D%+]*)$/);
  const prefix = match?.[1] ?? "";
  const num    = match ? parseInt(match[2]) : 0;
  const suffix = match?.[3] ?? value;

  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, num, {
      duration: 1.8, delay: index * 0.15, ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, num, index]);

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <span className="stat-value">{prefix}{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </motion.div>
  );
}

export default function Overview() {
  const { lang, dir } = useLang();
  const d    = siteData[lang];
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="overview-wrap" dir={dir}>
      <motion.div
        ref={ref}
        className="available-badge"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
      >
        <span className="available-dot pulse-dot" />
        {d.availableBadge}
      </motion.div>

      <motion.p
        className="overview-bio"
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        {d.hero.bio}
      </motion.p>

      <div className="stats-grid">
        {d.stats.map((s, i) => (
          <Counter key={i} value={s.value} label={s.label} index={i} />
        ))}
      </div>
    </section>
  );
}
