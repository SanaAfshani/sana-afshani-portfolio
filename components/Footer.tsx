import { profile } from "@/app/data";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "#444466" }}>
          © 2025 Sana Afshani · Built with Next.js
        </p>
        <div className="flex items-center gap-5">
          <a href={`mailto:${profile.email}`} style={{ color: "#555577" }} className="hover:text-purple-400 transition-colors">
            <Mail size={16} />
          </a>
          <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" style={{ color: "#555577" }} className="hover:text-purple-400 transition-colors">
            <Github size={16} />
          </a>
          <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: "#555577" }} className="hover:text-purple-400 transition-colors">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
