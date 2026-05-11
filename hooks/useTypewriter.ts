"use client";
import { useState, useEffect } from "react";

export function useTypewriter(
  texts: string[],
  { speed = 80, deleteSpeed = 45, pause = 2500 }: { speed?: number; deleteSpeed?: number; pause?: number } = {}
) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return;
    const current = texts[index % texts.length];

    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), pause);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), deleteSpeed);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
      }
    }
  }, [displayed, deleting, index, texts, speed, deleteSpeed, pause]);

  return displayed;
}
