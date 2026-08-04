import { useCallback, useEffect, useRef, useState } from "react";
import { GOAL } from "@/constants";
import { getMilestone } from "@/utils";

export interface GoalCelebration {
  /** Increments each time a new milestone is crossed; 0 until the first milestone. */
  celebration: number;
  /** Drops the tracked milestone so a milestone can be celebrated again. */
  resetCelebration: () => void;
}

/**
 * Tracks goal-milestone crossings of `total`. Celebrates whenever a new multiple
 * of GOAL is reached from below, and allows re-celebration after dipping below it.
 */
export const useGoalCelebration = (total: number): GoalCelebration => {
  const [celebration, setCelebration] = useState(0);
  const lastCelebratedMultiple = useRef(0);

  useEffect(() => {
    if (total < lastCelebratedMultiple.current) {
      // Dipped below the last celebrated milestone — allow it to be celebrated again.
      lastCelebratedMultiple.current = 0;
      return;
    }
    const multiple = getMilestone(total);
    if (multiple >= GOAL && multiple > lastCelebratedMultiple.current) {
      lastCelebratedMultiple.current = multiple;
      setCelebration((prev) => prev + 1);
    }
  }, [total]);

  const resetCelebration = useCallback(() => {
    lastCelebratedMultiple.current = 0;
  }, []);

  return { celebration, resetCelebration };
};
