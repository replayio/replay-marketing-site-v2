"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
}

interface WarpSpeedConfig {
  speed?: number;
  targetSpeed?: number;
  speedAdjFactor?: number;
  density?: number;
  shape?: "circle" | "square";
  depthFade?: boolean;
  warpEffect?: boolean;
  warpEffectLength?: number;
  starSize?: number;
  backgroundColor?: string;
  starColor?: string;
}

export default function WarpSpeedBg({
  config,
  darkConfig,
  className,
}: {
  config?: WarpSpeedConfig;
  darkConfig?: WarpSpeedConfig;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function isDark() {
      return document.documentElement.classList.contains("dark");
    }

    function resolvedCfg() {
      const base = config || {};
      if (isDark() && darkConfig) {
        return { ...base, ...darkConfig };
      }
      return base;
    }

    let cfg = resolvedCfg();
    let SPEED = cfg.speed ?? 0.7;
    const TARGET_SPEED = cfg.targetSpeed ?? SPEED;
    const SPEED_ADJ_FACTOR = Math.min(1, Math.max(0, cfg.speedAdjFactor ?? 0.03));
    const DENSITY = cfg.density ?? 0.7;
    const USE_CIRCLES = cfg.shape === undefined ? true : cfg.shape === "circle";
    const DEPTH_ALPHA = cfg.depthFade ?? true;
    const WARP_EFFECT = cfg.warpEffect ?? true;
    const WARP_EFFECT_LENGTH = Math.max(0, cfg.warpEffectLength ?? 5);
    const STAR_SCALE = Math.max(0, cfg.starSize ?? 3);
    let BACKGROUND_COLOR = cfg.backgroundColor ?? "hsl(263,45%,7%)";
    let STAR_COLOR = cfg.starColor ?? "#FFFFFF";

    const observer = new MutationObserver(() => {
      cfg = resolvedCfg();
      BACKGROUND_COLOR = cfg.backgroundColor ?? "hsl(263,45%,7%)";
      STAR_COLOR = cfg.starColor ?? "#FFFFFF";
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    let prevW = -1;
    let prevH = -1;
    let paused = false;
    let drawRequest: number | null = null;

    const stars: Star[] = [];
    for (let i = 0; i < DENSITY * 1000; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 1000,
        y: (Math.random() - 0.5) * 1000,
        z: 1000 * Math.random(),
        size: 0.5 + Math.random(),
      });
    }

    let lastMoveTS = performance.now();

    function move() {
      const t = performance.now();
      const speedMulF = (t - lastMoveTS) / (1000 / 60);
      lastMoveTS = t;
      if (paused) return;
      const speedAdjF = Math.pow(
        Math.min(1, Math.max(0, SPEED_ADJ_FACTOR)),
        1 / speedMulF
      );
      SPEED = TARGET_SPEED * speedAdjF + SPEED * (1 - speedAdjF);
      if (SPEED < 0) SPEED = 0;
      const speed = SPEED * speedMulF;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.z -= speed;
        while (s.z < 1) {
          s.z += 1000;
          s.x = (Math.random() - 0.5) * s.z;
          s.y = (Math.random() - 0.5) * s.z;
        }
      }
    }

    function draw() {
      if (!canvas) return;
      move();

      if (!paused) {
        if (prevW !== canvas.clientWidth || prevH !== canvas.clientHeight) {
          const dpr = window.devicePixelRatio || 1;
          canvas.width = Math.max(10, canvas.clientWidth) * dpr;
          canvas.height = Math.max(10, canvas.clientHeight) * dpr;
        }

        const size =
          (Math.min(canvas.height, canvas.width) / 10) *
          (STAR_SCALE <= 0 ? 0 : STAR_SCALE);
        const maxLineWidth = WARP_EFFECT ? size / 30 : 0;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.globalAlpha = 1.0;
        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = STAR_COLOR;

        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          const xOnDisplay = s.x / s.z;
          const yOnDisplay = s.y / s.z;

          if (
            !WARP_EFFECT &&
            (xOnDisplay < -0.5 ||
              xOnDisplay > 0.5 ||
              yOnDisplay < -0.5 ||
              yOnDisplay > 0.5)
          )
            continue;

          const starSize = (s.size * size) / s.z;
          if (starSize < 0.3) continue;

          if (DEPTH_ALPHA) {
            const alpha = (1000 - s.z) / 1000;
            ctx.globalAlpha = Math.min(1, Math.max(0, alpha));
          }

          if (WARP_EFFECT) {
            ctx.beginPath();
            const x2 = s.x / (s.z + WARP_EFFECT_LENGTH * SPEED);
            const y2 = s.y / (s.z + WARP_EFFECT_LENGTH * SPEED);
            if (x2 < -0.5 || x2 > 0.5 || y2 < -0.5 || y2 > 0.5) continue;
            ctx.moveTo(
              canvas.width * (xOnDisplay + 0.5) - starSize / 2,
              canvas.height * (yOnDisplay + 0.5) - starSize / 2
            );
            ctx.lineTo(
              canvas.width * (x2 + 0.5) - starSize / 2,
              canvas.height * (y2 + 0.5) - starSize / 2
            );
            ctx.lineWidth = Math.min(starSize, maxLineWidth);
            ctx.lineCap = USE_CIRCLES ? "round" : "butt";
            ctx.strokeStyle = ctx.fillStyle;
            ctx.stroke();
          } else if (USE_CIRCLES) {
            ctx.beginPath();
            ctx.arc(
              canvas.width * (xOnDisplay + 0.5) - starSize / 2,
              canvas.height * (yOnDisplay + 0.5) - starSize / 2,
              starSize / 2,
              0,
              2 * Math.PI
            );
            ctx.fill();
          } else {
            ctx.fillRect(
              canvas.width * (xOnDisplay + 0.5) - starSize / 2,
              canvas.height * (yOnDisplay + 0.5) - starSize / 2,
              starSize,
              starSize
            );
          }
        }

        prevW = canvas.clientWidth;
        prevH = canvas.clientHeight;
      }

      drawRequest = requestAnimationFrame(draw);
    }

    drawRequest = requestAnimationFrame(draw);

    return () => {
      paused = true;
      observer.disconnect();
      if (drawRequest !== null) cancelAnimationFrame(drawRequest);
    };
  }, [config, darkConfig]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
