"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const springX = useSpring(x, { stiffness: 400, damping: 35 });
  const springY = useSpring(y, { stiffness: 400, damping: 35 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="cursor-glow"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    />
  );
}
