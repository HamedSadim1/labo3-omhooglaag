import React from "react";

interface CounterButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "increment" | "decrement" | "reset" | "primary";
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantClasses: Record<string, string> = {
  increment: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
  decrement: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
  reset: "bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400",
  primary: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
};

const sizeClasses: Record<string, string> = {
  sm: "px-3 py-1.5 text-sm rounded-lg",
  md: "px-5 py-2.5 text-base rounded-xl",
  lg: "px-7 py-3 text-lg rounded-2xl",
};

const CounterButton: React.FC<CounterButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  label,
  size = "md",
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`font-semibold shadow-sm transition-all duration-150 ease-out cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default CounterButton;
