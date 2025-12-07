import React from "react";
import Counter from "./Counter";
import Total from "./Total";

const CounterGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
      <Counter id={1} />
      <Counter id={2} />
      <Counter id={3} />
      <Counter id={4} />
      <Total />
    </div>
  );
};

export default CounterGrid;
