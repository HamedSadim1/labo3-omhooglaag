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
        ? "text-gray-400"
        : "text-gray-900";

  return (
    <p
      role="status"
      className={`text-6xl font-light tabular-nums ${changeColor} transition-colors duration-300`}
    >
      <span className="sr-only">Counter {id} waarde is </span>
      {count}
    </p>
  );
};

export default CounterDisplay;
