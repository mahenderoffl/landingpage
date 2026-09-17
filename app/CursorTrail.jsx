"use client";

import { useEffect } from "react";

const COLORS = ["#c084fc", "#818cf8", "#a5b4fc", "#ddd6fe"];
const RIPPLE_THROTTLE_MS = 80;

export default function CursorTrail() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let lastRippleTime = 0;

    function createRipple(x, y) {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];

      const container = document.createElement("div");
      container.className = "cursor-ripple";
      container.style.left = `${x}px`;
      container.style.top = `${y}px`;

      const ripple = document.createElement("div");
      ripple.className = "ripple-ring";
      ripple.style.borderColor = color;

      container.appendChild(ripple);
      document.body.appendChild(container);

      setTimeout(() => container.remove(), 1500);
    }

    function handleMouseMove(e) {
      const now = Date.now();
      if (now - lastRippleTime > RIPPLE_THROTTLE_MS) {
        createRipple(e.clientX, e.clientY);
        lastRippleTime = now;
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
