import React from "react";

interface CounterDisplayProps {
  count: number;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ count }) => {
  const changeColor =
    count < 0
      ? "text-red-500"
      : count === 0
      ? "text-gray-300"
      : "text-green-500";

  return (
    <h1
      className={`text-4xl font-bold ${changeColor} transition-colors duration-300`}
    >
      {count}
    </h1>
  );
};

export default CounterDisplay;
