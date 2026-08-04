import React from "react";
import Counter from "@/components/Counter";
import Total from "@/components/Total";
import { COUNTER_IDS } from "@/constants";
import { cn } from "@/utils";

const CounterGrid = () => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl w-full"
      )}
    >
      {COUNTER_IDS.map((id) => (
        <Counter key={id} id={id} />
      ))}
      <Total />
    </div>
  );
};

export default CounterGrid;
