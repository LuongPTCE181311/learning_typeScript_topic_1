export {};

type MyArrString = string[];
type MyArrNumber = number[];

type MyArr<T> = T[];

type Wrapper<T> = {
    data: T;
}

const a: MyArr<number> = [0, 1];
const b: MyArr<string> = ["0", "1"];

const c: Wrapper<number>