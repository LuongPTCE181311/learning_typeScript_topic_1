export {};

interface IPerson {
    name: string;
    age: number;
    address?: string;
    readonly language: string;
    sayHi
}

const user:IPerson = {
    age: 25,
    name: "eric",
    language: "vn"
}

const user1:IPerson = {
    age: 25,
    name: "eric",
    address: "hn",
    language: "vn"
}