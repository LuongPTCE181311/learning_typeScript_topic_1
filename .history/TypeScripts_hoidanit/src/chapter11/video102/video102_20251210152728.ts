export {};

type TUsername = string | number;

type TStudent = {
    id: string;
    name: string;
}

type TCoder = {
    address: string;
    language: string;
}

type TProgrammer = TStudent & TCoder;

const hoidanit: T
let username: TUsername = "hoidanit";
username = 12345;