export const fadeUp = {
  hidden: { opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    transition: {
      delay: Math.min(i, 3) * 0.04,
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

/** Viewport shared — once, không animate lại khi scroll */
export const fadeInView = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -40px 0px",
} as const;

/** Chỉ dùng CSS `.float-soft` — tránh hàng chục Framer timelines */
export const floatSlow = {
  animate: { y: [0, -4, 0] },
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
};

export const PLACEHOLDER_IMG = (seed: string, w = 400, h = 500) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const BIRTHDAY_PAGE_BG = "/images/bao-tran-birthday/2026/bg-liquid-blue.png";

/**
 * Dán link chia sẻ video Google Drive (File → Share → Anyone with the link can view).
 * Ví dụ: https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/view?usp=sharing
 * Để trống "" thì khối video intro sẽ không hiện.
 */
export const INTRO_GOOGLE_DRIVE_VIDEO_SHARE_URL = "";

/** Video thứ hai (cùng phần intro). Để trống "" nếu chỉ cần một video. */
export const INTRO_GOOGLE_DRIVE_VIDEO_SHARE_URL_2 = "";

/** Chuyển link/id Drive → URL embed preview (phát trong iframe). */
export function googleDriveVideoPreviewUrl(shareOrEmbedUrl: string): string | null {
  const trimmed = shareOrEmbedUrl.trim();
  if (!trimmed) return null;
  const fromPath = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (fromPath) return `https://drive.google.com/file/d/${fromPath[1]}/preview`;
  const fromQuery = trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (fromQuery) return `https://drive.google.com/file/d/${fromQuery[1]}/preview`;
  return null;
}

/** Soft pastel scribbles (SVG) — low-contrast “kid crayon on board” hint, tiled. */
export const KID_BOARD_SCRIBBLE_SVG = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" preserveAspectRatio="none">
<path d="M8 108 C72 88 128 132 204 118 S 348 96 504 114" fill="none" stroke="#c084fc" stroke-width="2.2" stroke-linecap="round" opacity="0.55"/>
<path d="M24 268 Q156 238 276 272 T498 258" fill="none" stroke="#5ec0e8" stroke-width="1.8" stroke-linecap="round" opacity="0.5"/>
<path d="M40 372 L118 348 L210 382 L302 342 L426 366" fill="none" stroke="#e8b84a" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" opacity="0.45"/>
<path d="M388 32 Q332 76 352 146 T312 228" fill="none" stroke="#b89cf0" stroke-width="1.7" stroke-linecap="round" opacity="0.42"/>
<path d="M64 444 C148 420 216 462 296 446 S436 428 506 448" fill="none" stroke="#5fd4a8" stroke-width="1.6" stroke-linecap="round" opacity="0.4"/>
<path d="M460 320 C400 300 340 360 280 338" fill="none" stroke="#d8b4fe" stroke-width="1.5" stroke-linecap="round" opacity="0.38"/>
</svg>`,
);

export const DENIM_RECAP_TEXTURE =
  "/images/bao-tran-birthday/2026/denim-recap-texture.png";

export const BIRTHDAY_THEME_MP3 =
  "/audio/bao-tran-birthday-2026/sinh-nhat-2026.mp3";
export const BIRTHDAY_THEME_OGG =
  "/audio/bao-tran-birthday-2026/sinh-nhat-2026.ogg";

/** Sweet spot: real blow needed, not too hard or too easy. */
export const BLOW_RMS_THRESHOLD = 0.016;
export const BLOW_PEAK_THRESHOLD = 0.031;
/** ~8 frames ≈ steady puff ~130ms. */
export const BLOW_FRAMES_REQUIRED = 8;
export const MIC_WARMUP_MS = 220;

export const STICKER_PINK =
  "font-bold uppercase tracking-wide text-[#a78bfa] [text-shadow:_2px_0_0_#fff,_-2px_0_0_#fff,_0_2px_0_#fff,_0_-2px_0_#fff,_1.5px_1.5px_0_#fff,_-1.5px_-1.5px_0_#fff,_1.5px_-1.5px_0_#fff,_-1.5px_1.5px_0_#fff]";
