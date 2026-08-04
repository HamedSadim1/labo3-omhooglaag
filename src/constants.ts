/* ------------------------------------------------------------------ *
 * Single source of truth for all app constants.
 * Keep every magic value here — never inline numbers elsewhere.
 * ------------------------------------------------------------------ */

/* Counters */
export const COUNTER_IDS = [1, 2, 3, 4] as const;
export type CounterId = (typeof COUNTER_IDS)[number];

export const DEFAULT_COUNTER_VALUE = 0;

/* Steps */
export const STEP_PRESETS = [1, 5, 10, 25] as const;
export const STEP_MIN = 1;
export const MAX_STEP = 25;
/** Initial step value; intentionally independent from STEP_MIN (validation bound). */
export const DEFAULT_STEP_VALUE = 1;

/* Goal & celebration */
export const GOAL = 100;
export const CELEBRATION_MS = 3500;

/* Hold-to-repeat timing (press-and-hold on increment/decrement buttons) */
export const REPEAT_DELAY_MS = 500;
export const REPEAT_INTERVAL_MS = 120;
/** Primary pointer button (mouse left button / finger tap). */
export const PRIMARY_POINTER_BUTTON = 0;

/* Storage keys — keep the exact formats so existing saved data keeps loading */
export const COUNTER_STORAGE_KEY_PREFIX = "counter-";
export const STEP_STORAGE_KEY_PREFIX = "step-";

/* Confetti */
export const CONFETTI_CONFIG = {
  colors: ["#ef4444", "#3b82f6", "#22c55e", "#eab308", "#a855f7", "#f97316"],
  pieceCount: 40,
  minSize: 6,
  sizeVariance: 6,
  maxDelay: 0.3,
  minDuration: 1.5,
  durationVariance: 1.5,
  /** Multiplier used to keep piece ids unique per celebration trigger. */
  idMultiplier: 100,
} as const;

/* Number display sizing (fluid clamp so large values never overflow) */
export const COUNTER_NUMBER_SIZE_CLASS =
  "text-[length:clamp(2rem,6vw,3.75rem)]";
export const TOTAL_NUMBER_SIZE_CLASS =
  "text-[length:clamp(2.5rem,10vw,4.5rem)]";
