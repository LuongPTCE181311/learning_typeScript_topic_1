"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logLength(value) {
    console.log(value.length);
}
logLength("phamthanhluong");
function testInterface(value) {
    console.log(value);
}
testInterface({ id: 1, name: "hoidanit" });
// testInterface({id: 1});
testInterface({ id: 1, name: "hoidanit", age: 25 });
class Animal {
    move() {
        console.log("Moving...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}
function testClass(value) {
    console.log(value);
    if (value instanceof Dog) {
        value.bark();
    }
}
const a1 = new Dog();
const b1 = new Animal();
testClass(a1);
testClass(b1);
