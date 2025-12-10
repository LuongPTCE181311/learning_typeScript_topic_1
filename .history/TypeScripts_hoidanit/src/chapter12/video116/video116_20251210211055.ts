export {};

class Cat {
    public name: string;
    private age_: number;

    constructor(name: string, age: number){
        this.age_ = age;
        this.name = name;
    }



    makeSound(){
        console.log("meo meo...");
    }
    
}

const myCat = new Cat("minhi", 2);
myCat.