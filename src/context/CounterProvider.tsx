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

const loadValues = (
  getValue: (id: number) => number
): Record<number, number> => {
  const initial: Record<number, number> = {};
  COUNTER_IDS.forEach((id) => {
    initial[id] = getValue(id);
  });
  return initial;
};

/**
 * Persists only values that actually changed and never lets storage failures crash the app.
 */
const usePersistedValues = (
  values: Record<number, number>,
  saveValue: (id: number, value: number) => void
): void => {
  const prevValuesRef = useRef(values);
  useEffect(() => {
    COUNTER_IDS.forEach((id) => {
      if (values[id] !== prevValuesRef.current[id]) {
        saveValue(id, values[id]);
      }
    });
    prevValuesRef.current = values;
  }, [values, saveValue]);
};

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [counts, setCounts] = useState<Record<number, number>>(() =>
    loadValues(getCounterValue)
  );

  const [steps, setSteps] = useState<Record<number, number>>(() =>
    loadValues(getStepValue)
  );

  usePersistedValues(counts, setCounterValue);
  usePersistedValues(steps, setStepValue);

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
    setCounts(loadValues(() => 0));
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
