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

const BALLOON_COUNT = 56;
const CONFETTI_PER_SIDE = 36;
const OVERLAY_MS = 4200;
const CURTAIN_HOLD_MS = 2800;

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
  sway: string;
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
    const swayPx = (r1 > 0.5 ? 1 : -1) * (12 + r2 * 28);
    return {
      id: i,
      left: `${-8 + r1 * 108}%`,
      size: 120 + Math.floor(r2 * 95),
      delay: 0.06 + r3 * 0.5,
      duration: 2.3 + r4 * 0.85,
      sway: `${swayPx}px`,
      startTop: `${-25 + r2 * 105}%`,
      color: BALLOON_COLORS[i % BALLOON_COLORS.length]!,
    };
  });
}

function buildConfetti(side: "left" | "right"): ConfettiSpec[] {
  return Array.from({ length: CONFETTI_PER_SIDE }, (_, i) => {
    const r1 = ((i * 47 + (side === "left" ? 3 : 31)) % 91) / 91;
    const r2 = ((i * 23 + (side === "left" ? 11 : 41)) % 79) / 79;
    const r3 = ((i * 59 + (side === "left" ? 17 : 5)) % 67) / 67;
    const reach = 36 + r2 * 30;
    return {
      id: `${side}-${i}`,
      side,
      top: `${8 + r1 * 78}%`,
      w: 10 + Math.floor(r2 * 14),
      h: 14 + Math.floor(r3 * 18),
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length]!,
      delay: 0.1 + r1 * 0.32,
      duration: 1.85 + r2 * 0.95,
      rotate: (r3 - 0.5) * 840,
      endX: side === "left" ? `${reach}vw` : `-${reach}vw`,
      endY: `${90 + r2 * 160}px`,
    };
  });
}

/**
 * CSS keyframes (GPU) thay vì hàng trăm Framer Motion timelines —
 * nhìn giống cũ nhưng mượt hơn nhiều.
 */
const FX_CSS = `
@keyframes bb-rise {
  from { transform: translate3d(0, 0, 0) rotate(-2deg); }
  to   { transform: translate3d(var(--bb-sway), -125vh, 0) rotate(3deg); }
}
@keyframes bb-confetti-l {
  0%   { transform: translate3d(-12vw, 0, 0) rotate(0deg) scale(0.45); opacity: 0; }
  12%  { opacity: 1; transform: translate3d(calc(var(--cf-x) * 0.35), -28px, 0) rotate(calc(var(--cf-rot) * 0.35)) scale(1.1); }
  70%  { opacity: 1; }
  100% { transform: translate3d(var(--cf-x), var(--cf-y), 0) rotate(var(--cf-rot)) scale(0.9); opacity: 0; }
}
@keyframes bb-confetti-r {
  0%   { transform: translate3d(12vw, 0, 0) rotate(0deg) scale(0.45); opacity: 0; }
  12%  { opacity: 1; transform: translate3d(calc(var(--cf-x) * 0.35), -28px, 0) rotate(calc(var(--cf-rot) * 0.35)) scale(1.1); }
  70%  { opacity: 1; }
  100% { transform: translate3d(var(--cf-x), var(--cf-y), 0) rotate(var(--cf-rot)) scale(0.9); opacity: 0; }
}
.bb-rise {
  animation-name: bb-rise;
  animation-timing-function: cubic-bezier(0.25, 0.7, 0.35, 1);
  animation-fill-mode: forwards;
  will-change: transform;
  backface-visibility: hidden;
}
.bb-confetti {
  animation-timing-function: cubic-bezier(0.15, 0.8, 0.3, 1);
  animation-fill-mode: forwards;
  will-change: transform, opacity;
  backface-visibility: hidden;
}
.bb-confetti-l { animation-name: bb-confetti-l; }
.bb-confetti-r { animation-name: bb-confetti-r; }
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
    const fadeTimer = window.setTimeout(() => setVisible(false), OVERLAY_MS - 650);
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
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          <style>{FX_CSS}</style>

          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-violet-50/90 via-rose-50/88 to-amber-50/90 backdrop-blur-md"
            initial={{ opacity: 0.92 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 0.85,
              delay: CURTAIN_HOLD_MS / 1000,
              ease: [0.4, 0, 0.2, 1],
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
                    ["--bb-sway" as string]: b.sway,
                  } as CSSProperties
                }
              >
                <PartyBalloon
                  color={b.color}
                  className="h-auto w-full drop-shadow-lg"
                />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 z-20">
            {confetti.map((c) => {
              const fromLeft = c.side === "left";
              return (
                <span
                  key={c.id}
                  className={`bb-confetti absolute rounded-[1.5px] ring-1 ring-black/10 ${
                    fromLeft ? "bb-confetti-l" : "bb-confetti-r"
                  }`}
                  style={
                    {
                      top: c.top,
                      left: fromLeft ? "0%" : "100%",
                      width: c.w,
                      height: c.h,
                      backgroundColor: c.color,
                      boxShadow: "0 2px 6px rgba(15,23,42,0.28)",
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
