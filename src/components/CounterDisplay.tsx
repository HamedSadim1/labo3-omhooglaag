import React from "react";
import StatValue from "@/components/StatValue";
import { COUNTER_NUMBER_SIZE_CLASS } from "@/constants";
import { cn } from "@/utils";

interface CounterDisplayProps {
  count: number;
  id: number;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ count, id }) => {
  const changeColor =
    count < 0
      ? "text-red-500"
      : count === 0
        ? "text-gray-500"
        : "text-gray-900";

  return (
    <StatValue
      value={count}
      prefix={`Teller ${id} waarde is `}
      className={cn(
        COUNTER_NUMBER_SIZE_CLASS,
        changeColor,
        "transition-colors duration-300"
      )}
    />
  );
};

export default CounterDisplay;
