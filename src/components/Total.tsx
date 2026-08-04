import React, { useEffect, useRef, useState } from "react";
import CounterButton from "./CounterButton";
import Confetti from "./Confetti";
import { useCounter } from "../context/useCounter";

const GOAL = 100;

const Total = () => {
  const { total, resetAll } = useCounter();
  const [celebration, setCelebration] = useState(0);
  const lastCelebratedGoal = useRef<number>(0);

  const goal = Math.floor(total / GOAL);

  useEffect(() => {
    if (goal > 0 && goal !== lastCelebratedGoal.current) {
      lastCelebratedGoal.current = goal;
      setCelebration((prev) => prev + 1);
    }
  }, [goal]);

  const handleResetAll = () => {
    lastCelebratedGoal.current = 0;
    resetAll();
  };

  return (
    <>
      {celebration > 0 && <Confetti key={celebration} trigger={celebration} />}
      <section
        aria-label="Totaal van alle counters"
        className="col-span-full bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-3xl shadow-xl p-8 flex flex-col items-center gap-4"
      >
        <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
          Totaal
        </h2>
        <p className="text-7xl font-light tabular-nums" aria-live="polite">
          {total}
        </p>
        {goal > 0 && (
          <p className="text-sm font-medium text-yellow-400 animate-pulse">
            🎉 {goal * GOAL} bereikt — goed gedaan!
          </p>
        )}
        <CounterButton
          onClick={handleResetAll}
          variant="reset"
          label="Reset alle counters naar 0"
          className="!bg-white/10 !text-white hover:!bg-white/20 focus-visible:!ring-white/40"
        >
          Alles resetten
        </CounterButton>
      </section>
    </>
  );
};

export default Total;
