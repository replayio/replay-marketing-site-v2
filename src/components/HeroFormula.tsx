"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const tools = [
  { name: "Lovable", logo: "/logos/lovable.svg" },
  { name: "Base44", logo: "/logos/base44.svg" },
  { name: "Bolt", logo: "/logos/bolt.svg" },
  { name: "Replit", logo: "/logos/replit.svg" },
];

export default function HeroFormula() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % tools.length);
        setVisible(true);
      }, 400);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const tool = tools[index];

  return (
    <div className="flex items-center gap-4 sm:gap-6 mb-10">
      {/* Cycling tool */}
      <div className="flex items-center gap-2.5 min-w-[160px] justify-end">
        <div
          className={`flex items-center gap-2.5 transition-all duration-400 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3"
          }`}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-border bg-surface flex items-center justify-center">
            <Image
              src={tool.logo}
              alt={tool.name}
              width={22}
              height={22}
              className="w-[22px] h-[22px] dark:invert"
            />
          </div>
          <span className="text-xl sm:text-2xl font-semibold whitespace-nowrap">
            {tool.name}
          </span>
        </div>
      </div>

      {/* Plus sign */}
      <span className="text-2xl sm:text-3xl font-light text-muted">+</span>

      {/* Replay (static) */}
      <div className="flex items-center gap-2.5 min-w-[160px] justify-start">
        <Image
          src="/logo.svg"
          alt="Replay"
          width={28}
          height={32}
          className="w-7 h-8 sm:w-8 sm:h-9"
        />
        <span className="text-xl sm:text-2xl font-semibold">Replay</span>
      </div>
    </div>
  );
}
