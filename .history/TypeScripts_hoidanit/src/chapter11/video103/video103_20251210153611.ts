export {};

interface IPerson {
    name: string;
    age: number;
    address?: string;
    readonly language: string;
}

const user:IPerson = {
    age: 25,
    name: "eric",
    language
}

const user1:IPerson = {
    age: 25,
    name: "eric",
    address: "hn"
}