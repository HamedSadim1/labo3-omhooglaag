import React from "react";
import { useHoldRepeat } from "@/hooks/useHoldRepeat";
import { cn } from "@/utils";

type Variant = "increment" | "decrement" | "reset" | "primary" | "ghost";
type Size = "sm" | "md" | "lg";

interface CounterButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: Variant;
  label?: string;
  size?: Size;
  className?: string;
  disabled?: boolean;
  /** When true, holding the button repeats the action after a short delay. */
  repeat?: boolean;
}

const BLUE_VARIANT =
  "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-400";

const variantClasses: Record<Variant, string> = {
  increment: BLUE_VARIANT,
  decrement:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-400",
  reset:
    "bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400 focus-visible:ring-gray-400",
  primary: BLUE_VARIANT,
  ghost:
    "bg-white/10 text-white hover:bg-white/20 active:bg-white/30 focus-visible:ring-white/40 focus-visible:ring-offset-gray-900",
};

const sizeClasses: Record<Size, string> = {
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
  disabled = false,
  repeat = false,
}) => {
  const hold = useHoldRepeat(onClick, repeat, disabled);

  return (
    <button
      type="button"
      onClick={hold.onClick}
      onPointerDown={hold.onPointerDown}
      onPointerUp={hold.onPointerUp}
      onPointerLeave={hold.onPointerLeave}
      onPointerCancel={hold.onPointerCancel}
      disabled={disabled}
      aria-label={label}
      className={cn(
        "font-semibold shadow-sm transition-all duration-150 ease-out cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </button>
  );
};

export default CounterButton;
