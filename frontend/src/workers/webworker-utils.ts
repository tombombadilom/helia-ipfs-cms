// @/src/webworker/Utils.ts
export const blockingFunc = () => {
  new Array(100_000_000)
    .map((elm, index) => elm + index)
    .reduce((acc, cur) => acc + cur, 0);
};
export const blockingFunc = () => {
  new Array(100_000_000)
    .map((elm, index) => elm + index)
    .reduce((acc, cur) => acc + cur, 0);
};

export const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const blockingFunc = () => {
  new Array(100_000_000)
    .map((elm, index) => elm + index)
    .reduce((acc, cur) => acc + cur, 0);
};

export const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// worker instance
export const workerInstance = new ComlinkWorker<typeof import("./sw/worker")>(
  new URL("./sw/worker", import.meta.url)
);
// @/src/utils.ts

export const blockingFunc = () => {
  new Array(100_000_000)
    .map((elm, index) => elm + index)
    .reduce((acc, cur) => acc + cur, 0);
};

// worker instance
export const workerInstance = new ComlinkWorker<typeof import("./sw/worker")>(
  new URL("./sw/worker", import.meta.url)
);
export const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; 