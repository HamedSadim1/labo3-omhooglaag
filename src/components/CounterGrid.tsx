import React from "react";
import Counter from "./Counter";
import Total from "./Total";
import { COUNTER_IDS } from "../constants";

const CounterGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl w-full">
      {COUNTER_IDS.map((id) => (
        <Counter key={id} id={id} />
      ))}
      <Total />
    </div>
  );
};

export default CounterGrid;
