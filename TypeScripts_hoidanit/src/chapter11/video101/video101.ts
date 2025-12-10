export {};

type TTuple = [string, number, boolean?]
const test = ["hoidanit", 25, true];

const test1: TTuple = ["hoidanit", 25, true];
const test2: [string, number, boolean] = ["hoidanit", 25, true];
const test3: TTuple = ["hoidanit", 25];