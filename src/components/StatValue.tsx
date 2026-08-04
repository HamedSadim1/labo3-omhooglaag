import React from "react";
import { cn } from "@/utils";

interface StatValueProps {
  value: number;
  /** Screen-reader-only prefix read before the value (e.g. "Totaal is "). */
  prefix: string;
  className?: string;
  role?: "status";
  ariaAtomic?: boolean;
}

const StatValue: React.FC<StatValueProps> = ({
  value,
  prefix,
  className = "",
  role,
  ariaAtomic,
}) => (
  <p
    role={role}
    aria-atomic={ariaAtomic}
    className={cn("font-light tabular-nums min-w-0 overflow-hidden", className)}
  >
    <span className="sr-only">{prefix}</span>
    {value}
  </p>
);

export default StatValue;
