"use client";

import { useState, useEffect } from "react";

const tools = ["Lovable", "Replit", "Base44"];

export default function CyclingTool() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % tools.length);
        setVisible(true);
      }, 600);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block transition-all duration-700 ease-in-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2"
      }`}
    >
      {tools[index]}
    </span>
  );
}
