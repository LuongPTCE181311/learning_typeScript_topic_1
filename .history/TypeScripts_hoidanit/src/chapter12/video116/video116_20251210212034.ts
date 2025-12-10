export {};

class Cat {
    public name: string;
    private age_: number;
    private _id: number;

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _color: string;

    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }

    constructor(name: string, age: number, id: number, color: string){
        this.age_ = age;
        this.name = name;
        this.
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
