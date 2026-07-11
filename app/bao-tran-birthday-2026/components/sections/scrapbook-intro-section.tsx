"use client";

import { motion } from "framer-motion";
import {
  fadeInView,
  fadeUp,
  googleDriveVideoPreviewUrl,
  INTRO_GOOGLE_DRIVE_VIDEO_SHARE_URL,
  INTRO_GOOGLE_DRIVE_VIDEO_SHARE_URL_2,
} from "../constants";
import {
  DoodleHeart,
  DoodleSparkle,
  DoodleStar,
  KidCrayonScribbleA,
  KidCrayonScribbleB,
  KidCrayonScribbleC,
  hl,
} from "../doodles";
import { PhotoFrame } from "../photo-elements";

const introPartyEmojis = ["🌟", "🎀", "👑", "🌸", "💝"] as const;

function IntroDoodleFooter() {
  return (
    <div
      className="relative mt-5 w-full border-t-2 border-dashed border-rose-200/80 pt-5 sm:mt-6 sm:pt-6"
      aria-hidden
    >
      <div className="flex w-full flex-col items-stretch gap-5 sm:gap-6">
        <div className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:justify-evenly sm:gap-x-5">
          <KidCrayonScribbleB className="h-12 w-[4.25rem] shrink-0 -rotate-3 opacity-80 sm:h-14 sm:w-22" />
          <DoodleHeart className="h-7 w-7 shrink-0 text-rose-400 opacity-90 sm:h-8 sm:w-8" />
          <KidCrayonScribbleA className="h-10 w-[4.25rem] shrink-0 rotate-3 opacity-75 sm:h-11 sm:w-22" />
          <DoodleStar className="h-7 w-7 shrink-0 rotate-12 opacity-90 sm:h-8 sm:w-8" />
          <KidCrayonScribbleC className="h-11 w-14 shrink-0 -rotate-6 opacity-80 sm:h-12 sm:w-16" />
          <DoodleSparkle className="h-6 w-6 shrink-0 text-amber-400 opacity-85 sm:h-7 sm:w-7" />
        </div>

        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-4">
          {introPartyEmojis.map((emoji, i) => (
            <span
              key={emoji}
              className="float-soft text-2xl sm:text-[1.65rem]"
              style={{ animationDelay: `${i * 0.35}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ScrapbookIntroSection() {
  const drivePreviews = [
    INTRO_GOOGLE_DRIVE_VIDEO_SHARE_URL,
    INTRO_GOOGLE_DRIVE_VIDEO_SHARE_URL_2,
  ]
    .map((url) => googleDriveVideoPreviewUrl(url))
    .filter((src): src is string => src !== null);

  return (
    <motion.section
      custom={0}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={fadeInView}
      className="scrapbook-liquid-glass relative rounded-3xl p-6"
    >
      <DoodleStar className="absolute -right-2 -top-2 h-8 w-8" />
      <h2 className="font-[family-name:var(--font-nunito)] text-xl font-bold leading-snug sm:text-2xl">
        Meeting you was fate, becoming your friend was a choice, but{" "}
        {hl("falling in love with you", "bg-violet-200")} was beyond my control….
      </h2>
      {drivePreviews.length > 0 ? (
        <div className="mt-4 flex w-full flex-col gap-4">
          {drivePreviews.map((src, i) => (
            <div
              key={`${i}-${src}`}
              className="w-full overflow-hidden rounded-2xl border-2 border-slate-800/10 bg-slate-900/5 shadow-inner"
            >
              <div className="relative aspect-video w-full">
                <iframe
                  title={
                    i === 0
                      ? "Video chúc mừng sinh nhật"
                      : `Video chúc mừng sinh nhật (${i + 1})`
                  }
                  src={src}
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}
      <div className="mt-5 flex flex-col gap-4">
        <PhotoFrame
          src="/images/bao-tran-birthday/2026/bao-tran-7.jpg"
          alt="Ảnh lớn Bảo Trân"
          className="h-auto w-full object-cover"
        />
        <div className="flex flex-wrap gap-3">
          <PhotoFrame
            src="/images/bao-tran-birthday/2026/bao-tran-9.jpg"
            alt="Ảnh tròn 9"
            variant="circle"
            className="h-28 w-28"
          />
          <PhotoFrame
            src="/images/bao-tran-birthday/2026/bao-tran-10.jpg"
            alt="Ảnh tròn 10"
            variant="circle"
            className="h-28 w-28"
          />
          <PhotoFrame
            src="/images/bao-tran-birthday/2026/bao-tran-11.jpg"
            alt="Ảnh tròn 11"
            variant="circle"
            className="h-28 w-28"
          />
          <PhotoFrame
            src="/images/bao-tran-birthday/2026/bao-tran-12.jpg"
            alt="Ảnh tròn 12"
            variant="circle"
            className="h-28 w-28"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <PhotoFrame
            src="/images/bao-tran-birthday/2026/bao-tran-15.png"
            alt="Khung kiểu 7 — ảnh 15"
            className="aspect-[4/5] w-full object-cover"
          />
          <PhotoFrame
            src="/images/bao-tran-birthday/2026/bao-tran-16.png"
            alt="Khung kiểu 7 — ảnh 16"
            className="aspect-[4/5] w-full object-cover"
          />
          <PhotoFrame
            src="/images/bao-tran-birthday/2026/bao-tran-17.png"
            alt="Khung kiểu 7 — ảnh 17"
            className="col-span-2 aspect-[4/5] w-full object-cover sm:col-span-1"
          />
        </div>
        <IntroDoodleFooter />
      </div>
    </motion.section>
  );
}
