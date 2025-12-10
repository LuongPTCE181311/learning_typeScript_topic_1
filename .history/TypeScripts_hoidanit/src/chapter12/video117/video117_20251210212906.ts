export {};

class Parent {
    gold: number | undefined;
    money: number | undefined;

    //methods
    shareAHouse(){
        console.log("share a house from parent");
    }
}

class Child extends Parent{
    name: string | undefined;

    shareAHouse(){
        console.log("share a house from child");
    }
}

const hoidanit = new Child();
console.log(hoidanit.shareAHouse);

