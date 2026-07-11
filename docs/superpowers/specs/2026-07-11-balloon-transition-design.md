# Balloon transition after candle splash

## Goal
After the user blows out the candles, show a short birthday-balloon overlay (~15–20 balloons, 3–4s) while transitioning into the scrapbook. Balloons only during this transition — not continuous on the page.

## Flow
1. Candles extinguish (existing).
2. ~0.3s later: full-screen balloon overlay starts (pastel violet / pink / cream, strings, staggered rise).
3. Music starts + scrapbook becomes visible under/with the overlay (same `entered` gate as today).
4. ~3.5s total: overlay fades out and unmounts.

## Approach
Framer Motion overlay in `birthday-audio.tsx` (or a small sibling component). SVG/CSS balloons — no canvas.

## Out of scope
Confetti, fireworks, continuous background balloons, soap bubbles.
