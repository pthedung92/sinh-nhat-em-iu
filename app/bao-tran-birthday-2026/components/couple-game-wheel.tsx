"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import {
  pickWheelIndexExcluding,
  WHEEL_GAMES,
  type WheelGameId,
} from "./couple-game-data";

const SEGMENTS = WHEEL_GAMES.length;
const SEG_DEG = 360 / SEGMENTS;

const WEDGE_COLORS = [
  "#f3e8ff",
  "#e0f2fe",
  "#fef3c7",
  "#ede9fe",
  "#d1fae5",
  "#fecdd3",
  "#cffafe",
  "#fde68a",
  "#e9d5ff",
  "#bbf7d0",
  "#e9d5ff",
  "#bae6fd",
  "#fef08a",
  "#ddd6fe",
  "#fda4af",
] as const;

function conicStops(): string {
  return Array.from({ length: SEGMENTS }, (_, i) => {
    const c = WEDGE_COLORS[i % WEDGE_COLORS.length]!;
    return `${c} ${i * SEG_DEG}deg ${(i + 1) * SEG_DEG}deg`;
  }).join(", ");
}

function gameAtIndex(i: number) {
  return WHEEL_GAMES[i]!;
}

function gameIdAtIndex(i: number): WheelGameId {
  return WHEEL_GAMES[i]!.id;
}

function QuestionPanel({ gameId }: { gameId: WheelGameId }) {
  const game = WHEEL_GAMES.find((g) => g.id === gameId);
  if (!game) return null;

  return (
    <div className="rounded-2xl border border-violet-200/90 bg-white/85 p-4 text-left shadow-sm backdrop-blur-sm">
      <p className="font-[family-name:var(--font-be-vietnam-pro)] text-xs font-semibold uppercase tracking-wide text-violet-500">
        Câu hỏi — hai đứa lần lượt trả lời
      </p>
      <h3 className="mt-2 font-[family-name:var(--font-nunito)] text-lg font-extrabold text-slate-900">
        {game.title}
      </h3>
      <p className="mt-3 font-[family-name:var(--font-be-vietnam-pro)] text-sm leading-relaxed text-slate-800">
        {game.question}
      </p>
    </div>
  );
}

export function CoupleGameWheel() {
  const rotation = useMotionValue(0);
  const rotationRef = useRef(0);
  const lastSpinIndexRef = useRef<number | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);
  const [playSession, setPlaySession] = useState(0);

  const spin = useCallback(() => {
    if (spinning) return;
    setSpinning(true);
    setWinnerIndex(null);

    const i = pickWheelIndexExcluding(SEGMENTS, lastSpinIndexRef.current);
    const fullSpins = 5 + Math.floor(Math.random() * 3);
    const targetRem = (360 - (i + 0.5) * SEG_DEG + 720) % 360;
    const currentRem = ((rotationRef.current % 360) + 360) % 360;
    let delta = targetRem - currentRem;
    if (delta <= 0) delta += 360;
    const nextTotal = rotationRef.current + fullSpins * 360 + delta;

    animate(rotation, nextTotal, {
      duration: 4.2,
      ease: [0.12, 0.8, 0.12, 1],
    }).then(() => {
      rotationRef.current = nextTotal;
      lastSpinIndexRef.current = i;
      setWinnerIndex(i);
      setPlaySession((s) => s + 1);
      setSpinning(false);
    });
  }, [rotation, spinning]);

  const activeId = winnerIndex !== null ? gameIdAtIndex(winnerIndex) : null;
  const winner = winnerIndex !== null ? gameAtIndex(winnerIndex) : null;

  return (
    <div className="mt-8">
      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center overflow-visible px-0 sm:px-1">
        <div
          className="relative z-30 -mb-1 h-0 w-0 border-x-[18px] border-x-transparent border-t-[26px] border-t-violet-600 drop-shadow-[0_3px_6px_rgba(109,40,217,0.35)]"
          aria-hidden
        />

        <div className="relative aspect-square w-full max-w-[min(100%,400px)] sm:max-w-[min(100%,440px)] lg:max-w-[min(480px,94vw)]">
          <div
            className="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-br from-violet-200/50 via-amber-100/35 to-sky-200/45 blur-lg"
            aria-hidden
          />
          <motion.div
            className="absolute inset-0 box-border rounded-full border-[4px] border-white/90 shadow-[0_8px_0_rgba(124,58,237,0.12),0_20px_40px_rgba(124,58,237,0.18)] ring-2 ring-violet-300/40"
            style={{
              rotate: rotation,
              background: `conic-gradient(from 0deg, ${conicStops()})`,
            }}
          >
            {WHEEL_GAMES.map((item, i) => {
              const mid = i * SEG_DEG + SEG_DEG / 2;
              return (
                <div
                  key={item.id}
                  className="pointer-events-none absolute inset-0"
                  style={{ transform: `rotate(${mid}deg)` }}
                >
                  <span
                    className="absolute left-1/2 top-[4.5%] max-w-[4.2rem] -translate-x-1/2 whitespace-pre-line text-center font-[family-name:var(--font-nunito)] text-[0.42rem] font-extrabold leading-[1.05] tracking-tight text-slate-900/90 sm:top-[5%] sm:max-w-[4.6rem] sm:text-[0.48rem]"
                    style={{ transform: "rotate(90deg)" }}
                  >
                    {item.short}
                  </span>
                </div>
              );
            })}
          </motion.div>

          <div
            className="pointer-events-none absolute inset-[30%] rounded-full border-2 border-white/85 bg-gradient-to-br from-white/55 via-violet-50/35 to-sky-50/25 shadow-[inset_0_2px_12px_rgba(255,255,255,0.85)] backdrop-blur-[4px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-[30%] rounded-full ring-1 ring-violet-200/50"
            aria-hidden
          />
        </div>

        <button
          type="button"
          onClick={spin}
          disabled={spinning}
          className="mt-6 rounded-full border-2 border-violet-400 bg-white px-6 py-2.5 font-[family-name:var(--font-nunito)] text-sm font-extrabold uppercase tracking-wide text-violet-600 shadow-[4px_4px_0_rgba(124,58,237,0.2)] transition hover:bg-violet-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {spinning ? "Đang quay…" : "Quay"}
        </button>

        <div
          className="mt-4 w-full rounded-2xl border border-violet-200/80 bg-white/70 px-4 py-3 text-center backdrop-blur-sm"
          aria-live="polite"
        >
          {winner ? (
            <p className="font-[family-name:var(--font-nunito)] text-base font-extrabold text-slate-900">
              {winner.title}
            </p>
          ) : (
            <p className="font-[family-name:var(--font-be-vietnam-pro)] text-sm text-slate-500">
              Bấm Quay — đề mục và câu hỏi sẽ hiện bên dưới.
            </p>
          )}
        </div>

        {activeId && (
          <div className="mt-6 w-full">
            <QuestionPanel key={playSession} gameId={activeId} />
          </div>
        )}
      </div>
    </div>
  );
}
