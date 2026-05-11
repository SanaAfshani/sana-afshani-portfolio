"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { siteData } from "@/app/data";

type ColorKey = "red" | "orange" | "pink" | "green";

const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

function ExpCard({
  job,
  index,
  defaultOpen,
}: {
  job: (typeof siteData.en.experience)[0];
  index: number;
  defaultOpen: boolean;
}) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [open, setOpen] = useState(defaultOpen);
  const ck = job.colorKey as ColorKey;

  return (
    <motion.div
      ref={ref}
      className="exp-card"
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      {/* Card header — clickable */}
      <button className="exp-card-btn" onClick={() => setOpen((v) => !v)}>
        <div className="exp-meta">
          <div className="exp-company-row">
            <span className="exp-company-name">{job.company}</span>
            {job.website && (
              <a
                href={job.website}
                target="_blank"
                rel="noopener noreferrer"
                className="exp-link-icon"
                onClick={(e) => e.stopPropagation()}
                title={`Visit ${job.company}`}
              >
                <ExternalLinkIcon />
              </a>
            )}
            <span className={`exp-period exp-period--${ck}`}>{job.period}</span>
          </div>
          <p className="exp-role">{job.role}</p>
        </div>

        <motion.span
          className="exp-chevron"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
        >
          <ChevronDown size={15} />
        </motion.span>
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="exp-body"
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="exp-body-inner">
              <ul className="exp-highlights">
                {job.highlights.map((h, hi) => (
                  <motion.li
                    key={hi}
                    className="exp-highlight"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: hi * 0.04, duration: 0.28 }}
                  >
                    <span className={`exp-highlight-dot exp-dot--${ck}`} />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Experience() {
  const { lang, dir } = useLang();
  const d      = siteData[lang];
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-wrap" dir={dir}>
      <motion.div
        ref={ref}
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
      >
        <span className="section-num">02</span>
        <div className="section-rule" />
        <h2 className="section-title">{d.experienceTitle}</h2>
      </motion.div>

      <div className="exp-list">
        {d.experience.map((job, i) => (
          <ExpCard key={job.company} job={job} index={i} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}
