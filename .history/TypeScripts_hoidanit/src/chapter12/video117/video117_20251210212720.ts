export {};

class Parent {
    gold: number | undefined;
    money: number | undefined;

    //methods
    shareAHouse(){
        console.log("share a house");
    }
}

class Child extends Parent{
    name: string | undefined;
}

const hoidanit = new Child();
