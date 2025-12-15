"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bird {
    makeSound() {
        console.log("chim keu chip chip");
    }
    doFly() {
        console.log("chim bay bang canh");
    }
}
const myBird = new Bird();
myBird.makeSound();
class Person {
}
class NhanVien {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class LapTrinhVien extends NhanVien {
    constructor(skill, id, name) {
        super(id, name);
        this.skill = skill;
    }
}
