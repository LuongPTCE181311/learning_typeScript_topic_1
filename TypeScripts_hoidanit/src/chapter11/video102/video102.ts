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

const hoidanit: TProgrammer = {
    id: "huhu",
    name: "eric",
    address: "hahah",
    language: "huhuh"
}
let username: TUsername = "hoidanit";
username = 12345;