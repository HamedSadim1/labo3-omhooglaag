import { GOAL } from "../constants";

/** The highest reached milestone (a multiple of GOAL) at or below `total`. */
export const getMilestone = (total: number): number =>
  Math.floor(total / GOAL) * GOAL;

/** Progress (0–GOAL) within the current milestone. */
export const getProgress = (total: number): number => Math.max(0, total % GOAL);

/** The next milestone to reach; never below GOAL. */
export const getNextMilestone = (total: number): number =>
  Math.max(GOAL, getMilestone(total) + GOAL);
