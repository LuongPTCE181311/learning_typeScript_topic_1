export {};

class Cat {
    public name: string;
    private age_: number;

    constructor(name: string, age: number){
        this.age_ = age;
        this.name = name;
    }

    get age(){
        return this.age_;
    }

    set age(value: number){
        this.age_ = value;
    }

    makeSound(){
        console.log("meo meo...");
    }
    
}

const myCat = new Cat("minhi", 2);
