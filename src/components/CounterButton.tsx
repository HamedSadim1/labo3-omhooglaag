import React from "react";

interface CounterButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant: "increment" | "decrement" | "reset";
}

const CounterButton: React.FC<CounterButtonProps> = ({
  onClick,
  children,
  variant,
}) => {
  const baseClasses =
    "font-bold py-2 px-4 rounded-lg transition-all duration-200 backdrop-blur-sm";

  const variantClasses = {
    increment: "bg-blue-500/80 hover:bg-blue-600/80 text-white",
    decrement: "bg-red-500/80 hover:bg-red-600/80 text-white",
    reset: "bg-gray-500/80 hover:bg-gray-600/80 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};

export default CounterButton;
