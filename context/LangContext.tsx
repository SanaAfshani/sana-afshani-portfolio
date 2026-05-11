"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Lang } from "@/app/data";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  dir: "ltr" | "rtl";
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  dir: "ltr",
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("sana-lang", l); } catch {}
    document.documentElement.lang = l;
    document.documentElement.dir = l === "fa" ? "rtl" : "ltr";
    document.body.className = l === "fa" ? "font-fa" : "font-en";
  }, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sana-lang") as Lang | null;
      if (saved === "fa" || saved === "en") {
        setLang(saved);
      } else {
        document.body.className = "font-en";
      }
    } catch {
      document.body.className = "font-en";
    }
  }, [setLang]);

  return (
    <LangContext.Provider value={{ lang, setLang, dir: lang === "fa" ? "rtl" : "ltr" }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
