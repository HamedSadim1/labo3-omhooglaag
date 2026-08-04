import { createContext } from "react";

export interface CounterContextValue {
  counts: Record<number, number>;
  steps: Record<number, number>;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  reset: (id: number) => void;
  setStep: (id: number, value: number) => void;
  resetAll: () => void;
  total: number;
}

export const CounterContext = createContext<CounterContextValue | null>(null);
