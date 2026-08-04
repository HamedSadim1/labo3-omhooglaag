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

export const getCounterValue = (id: number): number =>
  readStoredNumber(`counter-${id}`, 0);

export const setCounterValue = (id: number, value: number): void => {
  try {
    localStorage.setItem(`counter-${id}`, value.toString());
  } catch {
    // Storage unavailable (private mode / quota exceeded) — persistence is best-effort.
  }
};

export const getStepValue = (id: number): number =>
  readStoredNumber(`step-${id}`, 1, 1, MAX_STEP);

export const setStepValue = (id: number, value: number): void => {
  try {
    localStorage.setItem(`step-${id}`, value.toString());
  } catch {
    // Storage unavailable — persistence is best-effort.
  }
};
