import React from "react";
import StatValue from "./StatValue";
import { COUNTER_NUMBER_SIZE_CLASS } from "../constants";

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
      className={`${COUNTER_NUMBER_SIZE_CLASS} ${changeColor} transition-colors duration-300`}
    />
  );
};

export default CounterDisplay;
