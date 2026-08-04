import React from "react";

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
    <p
      className={`text-[length:clamp(2rem,6vw,3.75rem)] font-light tabular-nums min-w-0 overflow-hidden ${changeColor} transition-colors duration-300`}
    >
      <span className="sr-only">Teller {id} waarde is </span>
      {count}
    </p>
  );
};

export default CounterDisplay;
