"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/context/LangContext";
import { siteData } from "@/app/data";

function SkillGroup({ group, index }: { group: { category: string; items: string[] }; index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="skill-group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <p className="skill-group-title">{group.category}</p>
      <div className="skill-tags">
        {group.items.map((item, i) => (
          <motion.span
            key={item}
            className="tag"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.05 + i * 0.04, duration: 0.25 }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { lang, dir } = useLang();
  const d      = siteData[lang];
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-wrap" dir={dir}>
      <motion.div
        ref={ref}
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
      >
        <span className="section-num">01</span>
        <div className="section-rule" />
        <h2 className="section-title">{d.skillsTitle}</h2>
      </motion.div>

      <div className="skills-list">
        {d.skills.map((group, i) => (
          <SkillGroup key={group.category} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}
