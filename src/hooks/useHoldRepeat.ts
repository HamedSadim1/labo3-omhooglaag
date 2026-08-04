import { useCallback, useEffect, useRef } from "react";
import type { PointerEvent } from "react";
import {
  PRIMARY_POINTER_BUTTON,
  REPEAT_DELAY_MS,
  REPEAT_INTERVAL_MS,
} from "../constants";

export interface HoldRepeatHandlers {
  onClick: () => void;
  onPointerDown: (e: PointerEvent<HTMLButtonElement>) => void;
  onPointerUp: (() => void) | undefined;
  onPointerLeave: (() => void) | undefined;
  onPointerCancel: (() => void) | undefined;
}

/**
 * Turns a press-and-hold into repeated `action` invocations: the first repeat fires
 * after REPEAT_DELAY_MS, then every REPEAT_INTERVAL_MS. The release click is swallowed
 * when repeats already fired, so a quick tap still triggers exactly one action.
 */
export const useHoldRepeat = (
  action: () => void,
  repeat: boolean,
  disabled: boolean
): HoldRepeatHandlers => {
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

  // Clean up timers if the component unmounts mid-hold.
  useEffect(() => () => stopRepeat(), [stopRepeat]);

  const handleClick = () => {
    if (repeatedRef.current) {
      // A press-and-hold already fired the action repeatedly — swallow the release click.
      repeatedRef.current = false;
      return;
    }
    action();
  };

  const handlePointerDown = (e: PointerEvent<HTMLButtonElement>) => {
    if (!repeat || disabled || e.button !== PRIMARY_POINTER_BUTTON) return;
    stopRepeat();
    timeoutRef.current = window.setTimeout(() => {
      repeatedRef.current = true;
      action();
      intervalRef.current = window.setInterval(action, REPEAT_INTERVAL_MS);
    }, REPEAT_DELAY_MS);
  };

  return {
    onClick: handleClick,
    onPointerDown: handlePointerDown,
    onPointerUp: repeat ? stopRepeat : undefined,
    onPointerLeave: repeat ? cancelRepeat : undefined,
    onPointerCancel: repeat ? cancelRepeat : undefined,
  };
};
