import React from "react";

interface StepInputProps {
  step: number;
  onStepChange: (value: number) => void;
}

const StepInput: React.FC<StepInputProps> = ({ step, onStepChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      onStepChange(value);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <label className="text-white text-sm">Step:</label>
      <input
        type="number"
        value={step}
        onChange={handleChange}
        min="1"
        className="w-16 px-2 py-1 bg-white/20 border border-white/30 rounded text-white text-center backdrop-blur-sm"
      />
    </div>
  );
};

export default StepInput;
