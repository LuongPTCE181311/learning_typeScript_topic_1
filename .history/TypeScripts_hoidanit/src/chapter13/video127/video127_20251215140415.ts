export {};

type MyArrString = string[];
type MyArrNumber = number[];

type MyArr<T> = T[];

const a: MyArr<number> = [0, 1];