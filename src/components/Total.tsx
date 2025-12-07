import React, { useState, useEffect } from "react";
import CounterButton from "./CounterButton";
import { getTotalValue, resetAllCounters } from "../utils/localStorage";

const Total = () => {
  const [total, setTotal] = useState<number>(0);

  const updateTotal = () => {
    setTotal(getTotalValue());
  };

  useEffect(() => {
    updateTotal();
    const interval = setInterval(updateTotal, 100); // Update every 100ms
    return () => clearInterval(interval);
  }, []);

  const handleResetAll = () => {
    resetAllCounters();
    setTotal(0);
  };

  return (
    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-2xl col-span-full">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">Total</h2>
      <p className="text-5xl font-bold text-center text-yellow-400 mb-4">
        {total}
      </p>
      <div className="flex justify-center">
        <CounterButton onClick={handleResetAll} variant="decrement">
          Reset All
        </CounterButton>
      </div>
    </div>
  );
};

export default Total;
