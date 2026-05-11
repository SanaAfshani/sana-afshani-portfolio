"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/context/LangContext";
import { siteData } from "@/app/data";

export default function Education() {
  const { lang, dir } = useLang();
  const d      = siteData[lang];
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-wrap" dir={dir}>
      <motion.div
        ref={ref}
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
      >
        <span className="section-num">03</span>
        <div className="section-rule" />
        <h2 className="section-title">{d.educationTitle}</h2>
      </motion.div>

      <div className="edu-grid">
        {d.education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            className="edu-card"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div className="edu-icon">🎓</div>
            <p className="edu-degree">{edu.degree}</p>
            <p className="edu-school">{edu.school}</p>
            <span className="edu-year">{edu.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
