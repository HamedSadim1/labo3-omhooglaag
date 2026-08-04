import React from "react";
import { MAX_STEP, STEP_MIN, STEP_PRESETS } from "@/constants";
import { cn } from "@/utils";

interface StepInputProps {
  step: number;
  onStepChange: (value: number) => void;
  counterId: number;
}

const StepInput: React.FC<StepInputProps> = ({
  step,
  onStepChange,
  counterId,
}) => {
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onStepChange(parseInt(e.target.value, 10));
  };

  return (
    <div
      className="w-full flex flex-col items-center gap-3"
      aria-label={`Stapgrootte voor counter ${counterId}`}
    >
      <div className="flex items-center justify-between w-full">
        <span className="text-sm font-medium text-gray-500">Stap</span>
        <span className="text-sm font-semibold text-gray-900 tabular-nums bg-gray-100 px-2.5 py-0.5 rounded-md">
          {step}
        </span>
      </div>

      <div className="flex gap-2 w-full" role="group" aria-label="Stap presets">
        {STEP_PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => onStepChange(preset)}
            aria-pressed={step === preset}
            className={cn(
              "flex-1 py-1.5 text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
              step === preset
                ? "bg-gray-900 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            {preset}
          </button>
        ))}
      </div>

      <input
        type="range"
        min={STEP_MIN}
        max={MAX_STEP}
        value={step}
        onChange={handleSliderChange}
        aria-label={`Stapgrootte slider voor counter ${counterId}`}
        aria-valuetext={`${step}`}
        className="w-full accent-gray-900 cursor-pointer"
      />
    </div>
  );
};

export default StepInput;
