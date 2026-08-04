import React from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";
import StepInput from "./StepInput";
import { useCounter } from "../context/useCounter";

interface CounterProps {
  id: number;
}

const Counter: React.FC<CounterProps> = ({ id }) => {
  const { counts, steps, increment, decrement, reset, setStep } = useCounter();
  const count = counts[id] ?? 0;
  const step = steps[id] ?? 1;

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
