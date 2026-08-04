import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  getCounterValue,
  getStepValue,
  setCounterValue,
  setStepValue,
} from "../utils/localStorage";
import { COUNTER_IDS, MAX_STEP } from "../constants";
import { CounterContext, CounterContextValue } from "./counterContext";

const clampStep = (value: number): number => {
  const rounded = Math.round(value);
  if (!Number.isFinite(rounded)) return 1;
  return Math.min(MAX_STEP, Math.max(1, rounded));
};

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [counts, setCounts] = useState<Record<number, number>>(() => {
    const initial: Record<number, number> = {};
    COUNTER_IDS.forEach((id) => {
      initial[id] = getCounterValue(id);
    });
    return initial;
  });

  const [steps, setSteps] = useState<Record<number, number>>(() => {
    const initial: Record<number, number> = {};
    COUNTER_IDS.forEach((id) => {
      initial[id] = getStepValue(id);
    });
    return initial;
  });

  // Persist only counters that actually changed; never let storage failures crash the app.
  const prevCountsRef = useRef(counts);
  useEffect(() => {
    COUNTER_IDS.forEach((id) => {
      if (counts[id] !== prevCountsRef.current[id]) {
        setCounterValue(id, counts[id]);
      }
    });
    prevCountsRef.current = counts;
  }, [counts]);

  const prevStepsRef = useRef(steps);
  useEffect(() => {
    COUNTER_IDS.forEach((id) => {
      if (steps[id] !== prevStepsRef.current[id]) {
        setStepValue(id, steps[id]);
      }
    });
    prevStepsRef.current = steps;
  }, [steps]);

  const increment = useCallback(
    (id: number) => {
      setCounts((prev) => ({
        ...prev,
        [id]: prev[id] + (steps[id] || 1),
      }));
    },
    [steps]
  );

  const decrement = useCallback(
    (id: number) => {
      setCounts((prev) => ({
        ...prev,
        [id]: prev[id] - (steps[id] || 1),
      }));
    },
    [steps]
  );

  const reset = useCallback((id: number) => {
    setCounts((prev) => ({ ...prev, [id]: 0 }));
  }, []);

  const setStep = useCallback((id: number, value: number) => {
    setSteps((prev) => ({ ...prev, [id]: clampStep(value) }));
  }, []);

  const resetAll = useCallback(() => {
    setCounts(() => {
      const next: Record<number, number> = {};
      COUNTER_IDS.forEach((id) => {
        next[id] = 0;
      });
      return next;
    });
  }, []);

  const total = useMemo(
    () => COUNTER_IDS.reduce((acc, id) => acc + (counts[id] || 0), 0),
    [counts]
  );

  const value: CounterContextValue = useMemo(
    () => ({
      counts,
      steps,
      increment,
      decrement,
      reset,
      setStep,
      resetAll,
      total,
    }),
    [counts, steps, increment, decrement, reset, setStep, resetAll, total]
  );

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
