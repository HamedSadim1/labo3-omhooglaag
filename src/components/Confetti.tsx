import React, { useEffect, useState } from "react";
import { CELEBRATION_MS } from "../constants";

const CONFETTI_COLORS = [
  "#ef4444",
  "#3b82f6",
  "#22c55e",
  "#eab308",
  "#a855f7",
  "#f97316",
];

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
}

interface ConfettiProps {
  trigger: number;
}

const generatePieces = (trigger: number): ConfettiPiece[] =>
  Array.from({ length: 40 }, (_, i) => ({
    id: i + trigger * 100,
    left: Math.random() * 100,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    size: 6 + Math.random() * 6,
    delay: Math.random() * 0.3,
    duration: 1.5 + Math.random() * 1.5,
    rotation: Math.random() * 360,
  }));

const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="absolute top-0 block rounded-sm animate-confetti-fall"
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
