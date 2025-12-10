export {};
console.log("video 115");


class Animal {

    public name: string;
    private id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }

    makeSound(){
        console.log("bla bla");
    }
}


const myDog = new Animal("dog", 1);
