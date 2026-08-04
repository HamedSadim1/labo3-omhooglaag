import React, { useCallback, useMemo, useState } from "react";
import {
  COUNTER_IDS,
  DEFAULT_COUNTER_VALUE,
  DEFAULT_STEP_VALUE,
} from "../constants";
import { CounterContext, CounterContextValue } from "./counterContext";
import { usePersistedValues } from "../hooks/usePersistedValues";
import {
  buildValueMap,
  clampStep,
  getCounterValue,
  getStepValue,
  setCounterValue,
  setStepValue,
} from "../utils";

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [counts, setCounts] = useState<Record<number, number>>(() =>
    buildValueMap(COUNTER_IDS, getCounterValue)
  );

  const [steps, setSteps] = useState<Record<number, number>>(() =>
    buildValueMap(COUNTER_IDS, getStepValue)
  );

  usePersistedValues(COUNTER_IDS, counts, setCounterValue);
  usePersistedValues(COUNTER_IDS, steps, setStepValue);

  const increment = useCallback(
    (id: number) => {
      setCounts((prev) => ({
        ...prev,
        [id]: prev[id] + (steps[id] || DEFAULT_STEP_VALUE),
      }));
    },
    [steps]
  );

  const decrement = useCallback(
    (id: number) => {
      setCounts((prev) => ({
        ...prev,
        [id]: prev[id] - (steps[id] || DEFAULT_STEP_VALUE),
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
    setCounts(buildValueMap(COUNTER_IDS, () => DEFAULT_COUNTER_VALUE));
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
