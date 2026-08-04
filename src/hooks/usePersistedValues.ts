import { useEffect, useRef } from "react";

/**
 * Persists only values that actually changed and never lets storage failures crash the app.
 * `ids` must be a stable array reference (module constant) — an inline literal would
 * re-run the effect on every render.
 */
export const usePersistedValues = (
  ids: readonly number[],
  values: Record<number, number>,
  saveValue: (id: number, value: number) => void
): void => {
  const prevValuesRef = useRef(values);
  useEffect(() => {
    ids.forEach((id) => {
      if (values[id] !== prevValuesRef.current[id]) {
        saveValue(id, values[id]);
      }
    });
    prevValuesRef.current = values;
  }, [ids, values, saveValue]);
};
