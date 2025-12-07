import React, { useState, useEffect } from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";
import StepInput from "./StepInput";
import { getCounterValue, setCounterValue } from "../utils/localStorage";

interface CounterProps {
  id: number;
}

const Counter: React.FC<CounterProps> = ({ id }) => {
  const [count, setCount] = useState<number>(() => getCounterValue(id));
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    setCounterValue(id, count);
  }, [count, id]);

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleStepChange = (value: number) => {
    setStep(value);
  };

  return (
    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-2xl">
      <h1 className="text-2xl font-bold text-white mb-4 text-center">
        Counter {id}
      </h1>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-2">
          <CounterButton onClick={handleIncrement} variant="increment">
            +{step}
          </CounterButton>
          <CounterButton onClick={handleDecrement} variant="decrement">
            -{step}
          </CounterButton>
        </div>
        <CounterDisplay count={count} />
        <CounterButton onClick={handleReset} variant="reset">
          Reset
        </CounterButton>
        <StepInput step={step} onStepChange={handleStepChange} />
      </div>
    </div>
  );
};

export default Counter;
