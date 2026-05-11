"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Download } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { siteData } from "@/app/data";
import { useTypewriter } from "@/hooks/useTypewriter";

const NAV_SECTIONS = [
  { id: "skills",     num: "01" },
  { id: "experience", num: "02" },
  { id: "education",  num: "03" },
  { id: "contact",    num: "04" },
];

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Sidebar() {
  const { lang, setLang, dir } = useLang();
  const d = siteData[lang];
  const isFa = lang === "fa";
  const typeText = useTypewriter(d.hero.titles, { speed: 80, deleteSpeed: 45, pause: 2600 });
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <aside className="sidebar" dir={dir}>
      {/* Eyebrow */}
      <motion.p
        className="sb-eyebrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isFa ? "رزومه آنلاین" : "Portfolio · Resume"}
      </motion.p>

      {/* Name */}
      <motion.h1
        className="sb-name"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {d.hero.nameWords.map((word, i) => (
          <span key={i} className={`sb-name-line${i === 1 ? " sb-name-line--accent" : ""}`}>
            {word}
          </span>
        ))}
      </motion.h1>

      {/* Typewriter */}
      <motion.p
        className="sb-typewriter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.22 }}
      >
        {typeText}
        <span className="sb-typewriter-cursor cursor-blink" />
      </motion.p>

      {/* Short bio */}
      <motion.p
        className="sb-bio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.32 }}
      >
        {d.hero.bioBrief}
      </motion.p>

      <div className="sb-divider" />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.4 }}
      >
        <ul className="nav-list">
          {NAV_SECTIONS.map(({ id, num }) => {
            const isActive = active === id;
            const label = d.nav[id as keyof typeof d.nav];
            return (
              <li key={id}>
                <a href={`#${id}`} className={`nav-link${isActive ? " nav-link--active" : ""}`}>
                  <span className="nav-num">{num}</span>
                  <span className="nav-bar" />
                  <span>{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </motion.nav>

      <div className="sb-divider" />
      <div className="sb-spacer" />

      {/* Contact */}
      <motion.div
        className="sb-contact-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.5 }}
      >
        <a href={`mailto:${d.contact.email}`} className="sb-contact-item">
          {isFa ? <><span>{d.contact.email}</span><Mail size={13} /></> : <><Mail size={13} /><span>{d.contact.email}</span></>}
        </a>
        <a href={`tel:${d.contact.phone}`} className="sb-contact-item">
          {isFa ? <><span>{d.contact.phone}</span><Phone size={13} /></> : <><Phone size={13} /><span>{d.contact.phone}</span></>}
        </a>
        <span className="sb-contact-item">
          {isFa ? <><span>{d.contact.location}</span><MapPin size={13} /></> : <><MapPin size={13} /><span>{d.contact.location}</span></>}
        </span>
        <div className="sb-social-row">
          <a href={d.contact.githubUrl} target="_blank" rel="noopener noreferrer" className="sb-contact-item">
            <GithubIcon />
            <span>GitHub</span>
          </a>
          <a href={d.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="sb-contact-item">
            <LinkedinIcon />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>

      <div className="sb-divider" />

      {/* Actions */}
      <motion.div
        className="sb-actions no-print"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="https://canva.link/fsk4gre0jjba0d0"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <Download size={12} />
          {d.downloadLabel}
        </a>
        <button
          className="btn-accent"
          onClick={() => setLang(lang === "en" ? "fa" : "en")}
        >
          🌐 {d.nav.langLabel}
        </button>
      </motion.div>
    </aside>
  );
}
