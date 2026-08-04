import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  getCounterValue,
  getStepValue,
  setCounterValue,
  setStepValue,
} from "../utils/localStorage";
import { COUNTER_IDS } from "../constants";
import { CounterContext, CounterContextValue } from "./counterContext";

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

  useEffect(() => {
    COUNTER_IDS.forEach((id) => setCounterValue(id, counts[id]));
  }, [counts]);

  useEffect(() => {
    COUNTER_IDS.forEach((id) => setStepValue(id, steps[id]));
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
    setSteps((prev) => ({ ...prev, [id]: value }));
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
