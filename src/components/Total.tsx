import React, { useEffect, useRef, useState } from "react";
import CounterButton from "./CounterButton";
import Confetti from "./Confetti";
import GoalMessage from "./GoalMessage";
import { useCounter } from "../context/useCounter";
import { GOAL } from "../constants";

const Total = () => {
  const { total, resetAll } = useCounter();
  const [celebration, setCelebration] = useState(0);
  const lastCelebratedMultiple = useRef(0);

  const goal = Math.floor(total / GOAL);
  const progress = Math.max(0, total % GOAL);
  const nextMilestone = Math.max(1, goal + 1) * GOAL;

  useEffect(() => {
    if (total < lastCelebratedMultiple.current) {
      // Dipped below the last celebrated milestone — allow it to be celebrated again.
      lastCelebratedMultiple.current = 0;
      return;
    }
    const multiple = Math.floor(total / GOAL) * GOAL;
    if (multiple >= GOAL && multiple > lastCelebratedMultiple.current) {
      lastCelebratedMultiple.current = multiple;
      setCelebration((prev) => prev + 1);
    }
  }, [total]);

  const handleResetAll = () => {
    lastCelebratedMultiple.current = 0;
    resetAll();
  };

  return (
    <>
      {celebration > 0 && <Confetti key={celebration} trigger={celebration} />}
      <section
        aria-label="Totaal van alle tellers"
        className="col-span-full bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col items-center gap-4"
      >
        <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
          Totaal
        </h2>
        <p
          className="text-[length:clamp(2.5rem,10vw,4.5rem)] font-light tabular-nums min-w-0 overflow-hidden"
          role="status"
          aria-atomic="true"
        >
          <span className="sr-only">Totaal is </span>
          {total}
        </p>
        <div className="w-full max-w-xs">
          <div className="flex items-center justify-between text-xs text-gray-300 mb-1.5">
            <span>Volgende mijlpaal: {nextMilestone}</span>
            <span className="tabular-nums">
              {progress} / {GOAL}
            </span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-yellow-400 transition-all duration-300"
              style={{
                width: `${Math.min(100, (progress / GOAL) * 100)}%`,
              }}
            />
          </div>
        </div>
        {celebration > 0 && goal > 0 && (
          <GoalMessage
            key={celebration}
            goalValue={Math.floor(total / GOAL) * GOAL}
          />
        )}
        <CounterButton
          onClick={handleResetAll}
          variant="ghost"
          label="Reset alle tellers naar 0"
          disabled={total === 0}
        >
          Alles resetten
        </CounterButton>
      </section>
    </>
  );
};

export default Total;
