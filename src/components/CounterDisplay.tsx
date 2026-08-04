import React from "react";
import StatValue from "./StatValue";

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
      className={`text-[length:clamp(2rem,6vw,3.75rem)] ${changeColor} transition-colors duration-300`}
    />
  );
};

export default CounterDisplay;
