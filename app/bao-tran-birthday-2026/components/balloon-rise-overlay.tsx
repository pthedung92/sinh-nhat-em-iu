"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState, type CSSProperties } from "react";

const BALLOON_COLORS = [
  { fill: "#e9d5ff", stroke: "#a78bfa" },
  { fill: "#fbcfe8", stroke: "#ec4899" },
  { fill: "#fce7f3", stroke: "#db2777" },
  { fill: "#fef3c7", stroke: "#f59e0b" },
  { fill: "#ddd6fe", stroke: "#8b5cf6" },
  { fill: "#fecdd3", stroke: "#f43f5e" },
] as const;

const BALLOON_COUNT = 44;
const CONFETTI_PER_SIDE = 28;
const OVERLAY_MS = 4600;
const CURTAIN_HOLD_MS = 3000;

const CONFETTI_COLORS = [
  "#7c3aed",
  "#db2777",
  "#e11d48",
  "#f59e0b",
  "#2563eb",
  "#ec4899",
  "#fbbf24",
  "#a855f7",
  "#f43f5e",
  "#ffffff",
] as const;

type BalloonSpec = {
  id: number;
  left: string;
  size: number;
  delay: number;
  duration: number;
  sway: number;
  startTop: string;
  color: (typeof BALLOON_COLORS)[number];
};

type ConfettiSpec = {
  id: string;
  side: "left" | "right";
  top: string;
  w: number;
  h: number;
  color: string;
  delay: number;
  duration: number;
  rotate: number;
  endX: string;
  endY: string;
};

function PartyBalloon({
  color,
  className = "",
}: {
  color: (typeof BALLOON_COLORS)[number];
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 40 72" fill="none" aria-hidden>
      <ellipse
        cx="20"
        cy="22"
        rx="14"
        ry="18"
        fill={color.fill}
        stroke={color.stroke}
        strokeWidth="1.6"
      />
      <ellipse cx="14" cy="14" rx="4" ry="6" fill="#fff" opacity="0.35" />
      <path d="M20 40 L17 44 L23 44 Z" fill={color.stroke} opacity="0.85" />
      <path
        d="M20 44 C16 50 24 54 18 60 C14 64 22 67 20 70"
        stroke={color.stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}

function buildBalloons(): BalloonSpec[] {
  return Array.from({ length: BALLOON_COUNT }, (_, i) => {
    const r1 = ((i * 73 + 19) % 97) / 97;
    const r2 = ((i * 41 + 7) % 89) / 89;
    const r3 = ((i * 29 + 53) % 83) / 83;
    const r4 = ((i * 61 + 11) % 71) / 71;
    const swayPx = (r1 > 0.5 ? 1 : -1) * (10 + r2 * 24);
    return {
      id: i,
      left: `${-6 + r1 * 106}%`,
      size: 112 + Math.floor(r2 * 88),
      delay: 0.04 + r3 * 0.62,
      duration: 2.65 + r4 * 0.95,
      sway: swayPx,
      startTop: `${-22 + r2 * 102}%`,
      color: BALLOON_COLORS[i % BALLOON_COLORS.length]!,
    };
  });
}

function buildConfetti(side: "left" | "right"): ConfettiSpec[] {
  return Array.from({ length: CONFETTI_PER_SIDE }, (_, i) => {
    const r1 = ((i * 47 + (side === "left" ? 3 : 31)) % 91) / 91;
    const r2 = ((i * 23 + (side === "left" ? 11 : 41)) % 79) / 79;
    const r3 = ((i * 59 + (side === "left" ? 17 : 5)) % 67) / 67;
    const reach = 34 + r2 * 28;
    return {
      id: `${side}-${i}`,
      side,
      top: `${8 + r1 * 78}%`,
      w: 9 + Math.floor(r2 * 12),
      h: 12 + Math.floor(r3 * 16),
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length]!,
      delay: 0.12 + r1 * 0.4,
      duration: 2.1 + r2 * 1.05,
      rotate: (r3 - 0.5) * 720,
      endX: side === "left" ? `${reach}vw` : `-${reach}vw`,
      endY: `${80 + r2 * 140}px`,
    };
  });
}

/**
 * CSS keyframes (GPU) — đường bay nhiều đoạn + easing mềm, ít blur/shadow để FPS ổn.
 */
const FX_CSS = `
@keyframes bb-rise {
  0%   { transform: translate3d(0, 0, 0) rotate(-2.5deg); opacity: 0.7; }
  12%  { opacity: 1; }
  35%  { transform: translate3d(calc(var(--bb-sway) * 0.45), -42vh, 0) rotate(0.5deg); }
  65%  { transform: translate3d(calc(var(--bb-sway) * 0.82), -86vh, 0) rotate(2deg); }
  100% { transform: translate3d(var(--bb-sway), -132vh, 0) rotate(3.5deg); opacity: 1; }
}
@keyframes bb-confetti-l {
  0%   { transform: translate3d(-10vw, 8px, 0) rotate(0deg) scale(0.4); opacity: 0; }
  14%  { opacity: 1; transform: translate3d(calc(var(--cf-x) * 0.28), -18px, 0) rotate(calc(var(--cf-rot) * 0.28)) scale(1.05); }
  55%  { opacity: 1; transform: translate3d(calc(var(--cf-x) * 0.72), calc(var(--cf-y) * 0.55), 0) rotate(calc(var(--cf-rot) * 0.7)) scale(1); }
  100% { transform: translate3d(var(--cf-x), var(--cf-y), 0) rotate(var(--cf-rot)) scale(0.88); opacity: 0; }
}
@keyframes bb-confetti-r {
  0%   { transform: translate3d(10vw, 8px, 0) rotate(0deg) scale(0.4); opacity: 0; }
  14%  { opacity: 1; transform: translate3d(calc(var(--cf-x) * 0.28), -18px, 0) rotate(calc(var(--cf-rot) * 0.28)) scale(1.05); }
  55%  { opacity: 1; transform: translate3d(calc(var(--cf-x) * 0.72), calc(var(--cf-y) * 0.55), 0) rotate(calc(var(--cf-rot) * 0.7)) scale(1); }
  100% { transform: translate3d(var(--cf-x), var(--cf-y), 0) rotate(var(--cf-rot)) scale(0.88); opacity: 0; }
}
.bb-rise {
  animation-name: bb-rise;
  animation-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
  animation-fill-mode: forwards;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
}
.bb-confetti {
  animation-timing-function: cubic-bezier(0.22, 0.7, 0.28, 1);
  animation-fill-mode: forwards;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
}
.bb-confetti-l { animation-name: bb-confetti-l; }
.bb-confetti-r { animation-name: bb-confetti-r; }
@media (prefers-reduced-motion: reduce) {
  .bb-rise, .bb-confetti {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
`;

export function BalloonRiseOverlay({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [visible, setVisible] = useState(true);
  const balloons = useMemo(() => buildBalloons(), []);
  const confetti = useMemo(
    () => [...buildConfetti("left"), ...buildConfetti("right")],
    [],
  );

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setVisible(false), OVERLAY_MS - 780);
    const doneTimer = window.setTimeout(onComplete, OVERLAY_MS);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="balloon-rise"
          className="pointer-events-none fixed inset-0 z-[210] overflow-hidden [contain:strict]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          <style>{FX_CSS}</style>

          {/* Không dùng backdrop-blur lúc animate — blur full-screen làm giật FPS */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-violet-50/95 via-rose-50/92 to-amber-50/94"
            initial={{ opacity: 0.96 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 1.15,
              delay: CURTAIN_HOLD_MS / 1000,
              ease: [0.33, 0, 0.2, 1],
            }}
          />

          <div className="absolute inset-0 z-0">
            {balloons.map((b) => (
              <div
                key={b.id}
                className="bb-rise absolute"
                style={
                  {
                    left: b.left,
                    top: b.startTop,
                    width: b.size,
                    animationDuration: `${b.duration}s`,
                    animationDelay: `${b.delay}s`,
                    ["--bb-sway" as string]: `${b.sway}px`,
                  } as CSSProperties
                }
              >
                <PartyBalloon color={b.color} className="h-auto w-full" />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 z-20">
            {confetti.map((c) => {
              const fromLeft = c.side === "left";
              return (
                <span
                  key={c.id}
                  className={`bb-confetti absolute rounded-[1.5px] ${
                    fromLeft ? "bb-confetti-l" : "bb-confetti-r"
                  }`}
                  style={
                    {
                      top: c.top,
                      left: fromLeft ? "0%" : "100%",
                      width: c.w,
                      height: c.h,
                      backgroundColor: c.color,
                      animationDuration: `${c.duration}s`,
                      animationDelay: `${c.delay}s`,
                      ["--cf-x" as string]: c.endX,
                      ["--cf-y" as string]: c.endY,
                      ["--cf-rot" as string]: `${c.rotate}deg`,
                    } as CSSProperties
                  }
                />
              );
            })}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
