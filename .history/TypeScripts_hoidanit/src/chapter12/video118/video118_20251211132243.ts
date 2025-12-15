export {};

interface IAnimal{
    makeSound(): void;
}

class Bird implements IAnimal{
    name: string | undefined;

    makeSound(){
        console.log("chim keu chip chip");
    }
}

const myBird 

class Person {
    gender: string | undefined;
}

class NhanVien {
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}

class LapTrinhVien extends NhanVien{
    skill: string;
    constructor(skill: string, id: number, name: string){
        super(id, name);
        this.skill = skill;
    }
}