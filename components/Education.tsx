"use client";
import { GraduationCap } from "lucide-react";
import { education } from "@/app/data";
import AnimatedSection from "./AnimatedSection";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 max-w-5xl mx-auto">
      <AnimatedSection>
        <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--accent-light)" }}>
          Academic background
        </p>
        <h2 className="text-4xl font-black mb-12" style={{ color: "var(--foreground)" }}>
          Education
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-5">
        {education.map((edu, i) => (
          <AnimatedSection key={edu.degree} delay={i * 0.15}>
            <div
              className="rounded-xl p-6 h-full"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg mb-4"
                style={{ background: "rgba(124,58,237,0.15)" }}
              >
                <GraduationCap size={18} style={{ color: "var(--accent-light)" }} />
              </div>
              <p className="font-bold text-base leading-snug mb-1" style={{ color: "var(--foreground)" }}>
                {edu.degree}
              </p>
              <p className="text-sm mb-3" style={{ color: "#7a7a99" }}>
                {edu.school}
              </p>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(124,58,237,0.1)",
                  color: "var(--accent-light)",
                  border: "1px solid rgba(124,58,237,0.25)",
                }}
              >
                {edu.year}
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
