import { MAX_STEP } from "../constants";

const readStoredNumber = (
  key: string,
  fallback: number,
  min?: number,
  max?: number
): number => {
  const raw = localStorage.getItem(key);
  if (raw === null) return fallback;
  const parsed = Number.parseInt(raw, 10);
  if (Number.isNaN(parsed)) return fallback;
  if (min !== undefined) return Math.min(max ?? parsed, Math.max(min, parsed));
  return parsed;
};

const setStoredNumber = (key: string, value: number): void => {
  try {
    localStorage.setItem(key, value.toString());
  } catch {
    // Storage unavailable (private mode / quota exceeded) — persistence is best-effort.
  }
};

export const getCounterValue = (id: number): number =>
  readStoredNumber(`counter-${id}`, 0);

export const setCounterValue = (id: number, value: number): void =>
  setStoredNumber(`counter-${id}`, value);

export const getStepValue = (id: number): number =>
  readStoredNumber(`step-${id}`, 1, 1, MAX_STEP);

export const setStepValue = (id: number, value: number): void =>
  setStoredNumber(`step-${id}`, value);
