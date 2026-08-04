import React, { useCallback, useRef } from "react";

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

const REPEAT_DELAY_MS = 500;
const REPEAT_INTERVAL_MS = 120;

const variantClasses: Record<Variant, string> = {
  increment:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-400",
  decrement:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-400",
  reset:
    "bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400 focus-visible:ring-gray-400",
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-400",
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
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const repeatedRef = useRef(false);

  const stopRepeat = useCallback(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const cancelRepeat = useCallback(() => {
    stopRepeat();
    repeatedRef.current = false;
  }, [stopRepeat]);

  const handleClick = () => {
    if (repeatedRef.current) {
      // A press-and-hold already fired the action repeatedly — swallow the release click.
      repeatedRef.current = false;
      return;
    }
    onClick();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!repeat || disabled || e.button !== 0) return;
    stopRepeat();
    timeoutRef.current = window.setTimeout(() => {
      repeatedRef.current = true;
      onClick();
      intervalRef.current = window.setInterval(onClick, REPEAT_INTERVAL_MS);
    }, REPEAT_DELAY_MS);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onPointerDown={handlePointerDown}
      onPointerUp={repeat ? stopRepeat : undefined}
      onPointerLeave={repeat ? cancelRepeat : undefined}
      onPointerCancel={repeat ? cancelRepeat : undefined}
      disabled={disabled}
      aria-label={label}
      className={`font-semibold shadow-sm transition-all duration-150 ease-out cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default CounterButton;
