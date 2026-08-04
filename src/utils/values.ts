/** Builds a `Record<number, number>` by applying `getValue` to every id. */
export const buildValueMap = (
  ids: readonly number[],
  getValue: (id: number) => number
): Record<number, number> => {
  const initial: Record<number, number> = {};
  ids.forEach((id) => {
    initial[id] = getValue(id);
  });
  return initial;
};
