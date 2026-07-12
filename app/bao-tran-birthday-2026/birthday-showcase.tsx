"use client";

import { motion } from "framer-motion";
import { BirthdayAudioRoot } from "./components/birthday-audio";
import {
  BIRTHDAY_PAGE_BG,
  KID_BOARD_SCRIBBLE_SVG,
} from "./components/constants";
import { DesktopOnlyOverlay } from "./components/desktop-only-overlay";
import { DenimRecapCollage } from "./components/denim-recap-section";
import { HeartBackgroundField } from "./components/doodles";
import { ScrapbookCalendarSection } from "./components/sections/scrapbook-calendar-section";
import { ScrapbookDailySection } from "./components/sections/scrapbook-daily-section";
import { ScrapbookIntroSection } from "./components/sections/scrapbook-intro-section";
import { ScrapbookLetterSection } from "./components/sections/scrapbook-letter-section";
import { BirthdayMusicStickyBar } from "./components/music-panel";
import { SakuraFallLayer } from "./components/sakura-fall-layer";
import { Y2KScrapbookPoster } from "./components/y2k-poster-section";

export default function BaoTranBirthdayShowcase() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-slate-900 text-slate-900 selection:bg-violet-200">
      <BirthdayAudioRoot>
        <BirthdayMusicStickyBar />
        <div className="pointer-events-none fixed inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BIRTHDAY_PAGE_BG}
            alt=""
            className="h-full min-h-[100dvh] w-full object-cover object-center"
            fetchPriority="low"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-sky-50/25 via-transparent to-white/35"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_0%,rgba(255,255,255,0.18)_100%)]"
            aria-hidden
          />
        </div>
        <div
          className="pointer-events-none fixed inset-0 z-[1] opacity-[0.11] mix-blend-multiply sm:opacity-[0.13]"
          style={{
            backgroundImage: `url("data:image/svg+xml,${KID_BOARD_SCRIBBLE_SVG}")`,
            backgroundSize: "min(92vw, 640px) min(88dvh, 820px)",
            backgroundPosition: "center top",
            backgroundRepeat: "repeat",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none fixed inset-0 z-[1] opacity-[0.045] mix-blend-soft-light"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(120,140,180,0.25) 0.5px, transparent 0.5px)
            `,
            backgroundSize: "100% 34px",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute -left-32 top-20 z-[2] h-72 w-72 rounded-full bg-sky-200/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-1/3 z-[2] h-96 w-96 rounded-full bg-violet-200/20 blur-3xl" />
        <HeartBackgroundField />

        <div className="relative z-10 mx-auto max-w-5xl px-4 pb-32 pt-10 sm:px-6 lg:px-8">
          <Y2KScrapbookPoster />

          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="scrapbook-liquid-glass mb-10 rounded-3xl px-5 py-6 text-center sm:px-8 sm:py-7"
          >
            <p className="font-[family-name:var(--font-be-vietnam-pro)] text-sm font-bold uppercase tracking-[0.2em] text-violet-500">
              13 . 07
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-nunito)] text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Sinh nhật nhất của{" "}
              <span className="rounded-lg bg-violet-100 px-2 py-0.5 shadow-sm ring-1 ring-violet-200/90">
                Phạm Trần Bảo Trân
              </span>
            </h1>
          </motion.header>

          <DenimRecapCollage />
          <div className="grid gap-2 lg:grid-cols-[60%_40%]">
            <ScrapbookIntroSection />
            <ScrapbookCalendarSection />
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
            <ScrapbookLetterSection />
            <ScrapbookDailySection />
          </div>
        </div>

        <SakuraFallLayer />
      </BirthdayAudioRoot>
      <DesktopOnlyOverlay />
    </div>
  );
}
