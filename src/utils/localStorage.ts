export const getCounterValue = (id: number): number => {
  const saved = localStorage.getItem(`counter-${id}`);
  return saved ? parseInt(saved, 10) : 0;
};

export const setCounterValue = (id: number, value: number): void => {
  localStorage.setItem(`counter-${id}`, value.toString());
};

export const getTotalValue = (): number => {
  const counters = [1, 2, 3, 4];
  return counters.reduce((acc, id) => acc + getCounterValue(id), 0);
};

export const resetAllCounters = (): void => {
  [1, 2, 3, 4].forEach((id) => setCounterValue(id, 0));
};
