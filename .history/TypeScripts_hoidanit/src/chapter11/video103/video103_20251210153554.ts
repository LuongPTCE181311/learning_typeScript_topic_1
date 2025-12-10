export {};

interface IPerson {
    name: string;
    age: number;
    address?: string;
    readonly
}

const user:IPerson = {
    age: 25,
    name: "eric"
}

const user1:IPerson = {
    age: 25,
    name: "eric",
    address: "hn"
}