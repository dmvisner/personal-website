type DistributivePick<T, K extends keyof T> = K extends any ? { [P in K]: T[P] } : never;

export default DistributivePick;
