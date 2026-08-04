import { CONFETTI_CONFIG } from "@/constants";

export interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
}

export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const generatePieces = (trigger: number): ConfettiPiece[] =>
  Array.from({ length: CONFETTI_CONFIG.pieceCount }, (_, i) => ({
    id: i + trigger * CONFETTI_CONFIG.idMultiplier,
    left: Math.random() * 100,
    color:
      CONFETTI_CONFIG.colors[
        Math.floor(Math.random() * CONFETTI_CONFIG.colors.length)
      ],
    size:
      CONFETTI_CONFIG.minSize + Math.random() * CONFETTI_CONFIG.sizeVariance,
    delay: Math.random() * CONFETTI_CONFIG.maxDelay,
    duration:
      CONFETTI_CONFIG.minDuration +
      Math.random() * CONFETTI_CONFIG.durationVariance,
    rotation: Math.random() * 360,
  }));
