import React, { useEffect, useState } from "react";
import { CELEBRATION_MS } from "@/constants";
import {
  cn,
  generatePieces,
  prefersReducedMotion,
  type ConfettiPiece,
} from "@/utils";

interface ConfettiProps {
  trigger: number;
}

const Confetti: React.FC<ConfettiProps> = ({ trigger }) => {
  const [reducedMotion] = useState<boolean>(prefersReducedMotion);
  const [pieces, setPieces] = useState<ConfettiPiece[]>(() =>
    trigger === 0 || reducedMotion ? [] : generatePieces(trigger)
  );

  useEffect(() => {
    if (trigger === 0 || reducedMotion) return;
    const timeout = setTimeout(() => setPieces([]), CELEBRATION_MS);
    return () => clearTimeout(timeout);
  }, [trigger, reducedMotion]);

  if (pieces.length === 0) return null;

  return (
    <div
      className={cn("pointer-events-none fixed inset-0 z-50 overflow-hidden")}
      aria-hidden="true"
    >
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className={cn(
            "absolute top-0 block rounded-sm animate-confetti-fall"
          )}
          style={{
            left: `${piece.left}%`,
            width: piece.size,
            height: piece.size * 1.6,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
