class Cat {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    constructor(name, age, id, color) {
        this.age_ = age;
        this.name = name;
        this._color = color;
        this._id = id;
    }
    get age() {
        return this.age_;
    }
    set age(value) {
        this.age_ = value;
    }
    makeSound() {
        console.log("meo meo...");
    }
}
export {};
