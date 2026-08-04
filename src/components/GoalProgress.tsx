import React from "react";
import { GOAL } from "../constants";
import { clamp, getNextMilestone, getProgress } from "../utils";

interface GoalProgressProps {
  total: number;
}

const GoalProgress: React.FC<GoalProgressProps> = ({ total }) => {
  const progress = getProgress(total);
  const nextMilestone = getNextMilestone(total);

  return (
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
            width: `${clamp((progress / GOAL) * 100, 0, 100)}%`,
          }}
        />
      </div>
    </div>
  );
};

export default GoalProgress;
