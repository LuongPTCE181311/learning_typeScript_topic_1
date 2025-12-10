export {};

interface IPerson {
    name: string;
    age: number;
    address?: string;
}

const user:IPerson = {
    age: 25,
    name: "eric"
}