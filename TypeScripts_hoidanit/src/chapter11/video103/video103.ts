export {};

interface IPerson {
    name: string;
    age: number;
    address?: string;
    readonly language: string;
    sayHi: () => void;
}

const user:IPerson = {
    age: 25,
    name: "eric",
    language: "vn",
    sayHi: () => console.log("im user")
    
}
user.sayHi();
const user1:IPerson = {
    age: 25,
    name: "eric",
    address: "hn",
    language: "vn",
    sayHi: () => console.log("im user 2")
}
//=========================================
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};
