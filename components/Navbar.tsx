"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(10,10,15,0)", "rgba(10,10,15,0.9)"]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    ["skills", "experience", "education"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16 backdrop-blur-sm"
      style={{ background: bg, borderBottom: "1px solid rgba(30,30,48,0)" }}
    >
      <a href="#" className="text-sm font-bold" style={{ color: "var(--foreground)" }}>
        SA
      </a>
      <nav className="flex items-center gap-1">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors"
            style={{
              color: active === href.slice(1) ? "var(--foreground)" : "#666688",
            }}
          >
            {active === href.slice(1) && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 rounded-md"
                style={{ background: "rgba(124,58,237,0.15)" }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{label}</span>
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
