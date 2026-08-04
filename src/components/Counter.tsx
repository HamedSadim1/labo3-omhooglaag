import React from "react";
import CounterButton from "@/components/CounterButton";
import CounterDisplay from "@/components/CounterDisplay";
import StepInput from "@/components/StepInput";
import { useCounter } from "@/context/useCounter";
import {
  DEFAULT_COUNTER_VALUE,
  DEFAULT_STEP_VALUE,
  type CounterId,
} from "@/constants";

interface CounterProps {
  id: CounterId;
}

const Counter: React.FC<CounterProps> = ({ id }) => {
  const { counts, steps, increment, decrement, reset, setStep } = useCounter();
  const count = counts[id] ?? DEFAULT_COUNTER_VALUE;
  const step = steps[id] ?? DEFAULT_STEP_VALUE;

  const stepActions = [
    {
      variant: "decrement" as const,
      symbol: "−",
      label: `Verlaag teller ${id} met ${step}`,
      onClick: () => decrement(id),
    },
    {
      variant: "increment" as const,
      symbol: "+",
      label: `Verhoog teller ${id} met ${step}`,
      onClick: () => increment(id),
    },
  ];

  return (
    <section
      aria-label={`Teller ${id}`}
      className="bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/50 p-6 flex flex-col items-center gap-5 transition-shadow duration-300 hover:shadow-xl hover:shadow-gray-200/60"
    >
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
        Teller {id}
      </h2>

      <CounterDisplay count={count} id={id} />

      <div className="flex gap-3">
        {stepActions.map(({ variant, symbol, label, onClick }) => (
          <CounterButton
            key={variant}
            onClick={onClick}
            variant={variant}
            label={label}
            size="sm"
            repeat
          >
            {symbol}
            {step}
          </CounterButton>
        ))}
      </div>

      <CounterButton
        onClick={() => reset(id)}
        variant="reset"
        label={`Reset teller ${id} naar 0`}
        size="sm"
        disabled={count === 0}
      >
        Reset
      </CounterButton>

      <StepInput
        step={step}
        onStepChange={(value) => setStep(id, value)}
        counterId={id}
      />
    </section>
  );
};

export default Counter;
