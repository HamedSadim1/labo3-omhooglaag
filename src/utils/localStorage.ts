import {
  COUNTER_STORAGE_KEY_PREFIX,
  DEFAULT_COUNTER_VALUE,
  DEFAULT_STEP_VALUE,
  MAX_STEP,
  STEP_MIN,
  STEP_STORAGE_KEY_PREFIX,
} from "@/constants";
import { clamp } from "@/utils/math";

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
  if (min !== undefined) return clamp(parsed, min, max ?? parsed);
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
  readStoredNumber(`${COUNTER_STORAGE_KEY_PREFIX}${id}`, DEFAULT_COUNTER_VALUE);

export const setCounterValue = (id: number, value: number): void =>
  setStoredNumber(`${COUNTER_STORAGE_KEY_PREFIX}${id}`, value);

export const getStepValue = (id: number): number =>
  readStoredNumber(
    `${STEP_STORAGE_KEY_PREFIX}${id}`,
    DEFAULT_STEP_VALUE,
    STEP_MIN,
    MAX_STEP
  );

export const setStepValue = (id: number, value: number): void =>
  setStoredNumber(`${STEP_STORAGE_KEY_PREFIX}${id}`, value);
