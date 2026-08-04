import React, { useCallback, useMemo, useState } from "react";
import {
  getCounterValue,
  getStepValue,
  setCounterValue,
  setStepValue,
} from "../utils/localStorage";
import { COUNTER_IDS, MAX_STEP } from "../constants";
import { CounterContext, CounterContextValue } from "./counterContext";
import { loadValues, usePersistedValues } from "./usePersistedValues";

const clampStep = (value: number): number => {
  const rounded = Math.round(value);
  if (!Number.isFinite(rounded)) return 1;
  return Math.min(MAX_STEP, Math.max(1, rounded));
};

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [counts, setCounts] = useState<Record<number, number>>(() =>
    loadValues(COUNTER_IDS, getCounterValue)
  );

  const [steps, setSteps] = useState<Record<number, number>>(() =>
    loadValues(COUNTER_IDS, getStepValue)
  );

  usePersistedValues(COUNTER_IDS, counts, setCounterValue);
  usePersistedValues(COUNTER_IDS, steps, setStepValue);

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
    setCounts(loadValues(COUNTER_IDS, () => 0));
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
