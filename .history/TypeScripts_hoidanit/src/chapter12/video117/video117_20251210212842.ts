export {};

class Parent {
    gold: number | undefined;
    money: number | undefined;

    //methods
    shareAHouse(){
        console.log("share a house form ");
    }
}

class Child extends Parent{
    name: string | undefined;

    shareAHouse(){
        console.log("share a house");
    }
}

const hoidanit = new Child();
