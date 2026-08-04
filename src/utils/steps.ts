import { DEFAULT_STEP_VALUE, MAX_STEP, STEP_MIN } from "../constants";
import { clamp } from "./math";

/** Rounds `value` and clamps it to the valid step range [STEP_MIN, MAX_STEP]. */
export const clampStep = (value: number): number => {
  const rounded = Math.round(value);
  if (!Number.isFinite(rounded)) return DEFAULT_STEP_VALUE;
  return clamp(rounded, STEP_MIN, MAX_STEP);
};
