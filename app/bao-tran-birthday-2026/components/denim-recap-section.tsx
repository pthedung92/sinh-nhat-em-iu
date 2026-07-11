"use client";

import { motion } from "framer-motion";

export function DenimRecapCollage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative mb-12 overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.18)] ring-2 ring-slate-900/10"
      aria-label="Kỷ niệm — scrapbook denim"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/bao-tran-birthday/2026/bao-tran-6.jpg"
        alt="bao-tran-6"
        className="h-full w-full object-cover"
        decoding="async"
      />
    </motion.section>
  );
}
