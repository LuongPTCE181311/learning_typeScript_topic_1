export {};

class Person {
    name: string;
    age: number;

    constructor();
    constructor(name: string, age: number);
    constructor(name?: string, age?: number){
        this.name = name ?? "unknown";
        this.age = age ?? 0;
    }
}

const hoidanit = new Person("eric", 25);
console.log("my name is:", hoidanit.name, "and age is:", hoidanit.age);



