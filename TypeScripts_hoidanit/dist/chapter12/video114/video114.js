"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name ?? "unknown";
        this.age = age ?? 0;
    }
}
const hoidanit = new Person("eric", 25);
console.log("my name is:", hoidanit.name, "and age is:", hoidanit.age);
const hoidanit1 = new Person();
console.log("my name2 is:", hoidanit1.name, "and age2 is:", hoidanit1.age);
