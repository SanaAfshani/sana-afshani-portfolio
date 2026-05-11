"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { profile } from "@/app/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 320,
          height: 320,
          top: "15%",
          right: "8%",
          background: "rgba(124,58,237,0.06)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 200,
          height: 200,
          bottom: "20%",
          left: "5%",
          background: "rgba(167,139,250,0.05)",
          filter: "blur(50px)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        className="relative z-10 max-w-3xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-3">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              background: "rgba(124,58,237,0.15)",
              color: "var(--accent-light)",
              border: "1px solid rgba(124,58,237,0.3)",
            }}
          >
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-7xl font-black tracking-tight leading-none mb-4"
        >
          {profile.name.split(" ").map((word, i) => (
            <span
              key={i}
              className={i === 1 ? "block" : "block"}
              style={i === 1 ? { color: "var(--accent-light)" } : {}}
            >
              {word}
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg font-medium mb-6"
          style={{ color: "var(--accent-light)" }}
        >
          {profile.title}
        </motion.p>

        <motion.p
          variants={item}
          className="text-base leading-relaxed mb-10 max-w-2xl"
          style={{ color: "#9999bb" }}
        >
          {profile.bio}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap gap-4 mb-10"
        >
          {[
            { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
            { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
            { icon: MapPin, label: profile.location, href: undefined },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: "#7a7a99" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7a7a99")}
            >
              <Icon size={14} />
              <span>{label}</span>
            </a>
          ))}
        </motion.div>

        <motion.div variants={item} className="flex gap-4">
          <a
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
            style={{
              background: "rgba(124,58,237,0.15)",
              color: "var(--accent-light)",
              border: "1px solid rgba(124,58,237,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.15)";
            }}
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={`https://linkedin.com/in/${profile.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
            style={{
              background: "rgba(124,58,237,0.15)",
              color: "var(--accent-light)",
              border: "1px solid rgba(124,58,237,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.15)";
            }}
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "#444466" }}>
          scroll
        </span>
        <motion.div
          className="w-px h-8 rounded-full"
          style={{ background: "var(--accent)" }}
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
