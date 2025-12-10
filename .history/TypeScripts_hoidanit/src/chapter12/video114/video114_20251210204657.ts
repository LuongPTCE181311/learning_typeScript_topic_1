export {};

class Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const hoidanit = new Person("eric", 25);
console.log("my name is:", hoidanit.name, "and age is:", hoidanit.age);

