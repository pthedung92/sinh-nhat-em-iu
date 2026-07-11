"use client";

import { motion } from "framer-motion";
import { fadeInView, fadeUp } from "../constants";
import { CoupleGameWheel } from "../couple-game-wheel";

export function ScrapbookDailySection() {
  return (
    <motion.section
      custom={6}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={fadeInView}
      className="scrapbook-liquid-glass relative overflow-visible rounded-3xl p-8 lg:col-span-2"
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-violet-500">
        Chơi cùng nhau
      </p>
      <p className="mt-2 max-w-2xl font-[family-name:var(--font-be-vietnam-pro)] text-sm leading-relaxed text-slate-600">
        Quay bánh xe để rút một đề mục — câu hỏi hiện bên dưới, hai đứa lần lượt
        trả lời. Không chấm điểm, chỉ để hiểu nhau hơn. Hai lần quay liên tiếp sẽ{" "}
        <span className="font-semibold text-slate-800">không trùng</span> ô với
        lần trước.
      </p>

      <CoupleGameWheel />
    </motion.section>
  );
}
