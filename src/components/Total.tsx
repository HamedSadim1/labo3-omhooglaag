import React from "react";
import CounterButton from "@/components/CounterButton";
import Confetti from "@/components/Confetti";
import GoalMessage from "@/components/GoalMessage";
import GoalProgress from "@/components/GoalProgress";
import StatValue from "@/components/StatValue";
import { useCounter } from "@/context/useCounter";
import { useGoalCelebration } from "@/hooks/useGoalCelebration";
import { getMilestone } from "@/utils";
import { TOTAL_NUMBER_SIZE_CLASS } from "@/constants";

const Total = () => {
  const { total, resetAll } = useCounter();
  const { celebration, resetCelebration } = useGoalCelebration(total);

  const milestone = getMilestone(total);

  const handleResetAll = () => {
    resetCelebration();
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
        <StatValue
          value={total}
          prefix="Totaal is "
          role="status"
          ariaAtomic
          className={TOTAL_NUMBER_SIZE_CLASS}
        />
        <GoalProgress total={total} />
        {celebration > 0 && milestone > 0 && (
          <GoalMessage key={celebration} goalValue={milestone} />
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
