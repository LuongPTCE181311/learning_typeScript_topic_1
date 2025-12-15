console.log("video 117");
class Parent {
    //methods
    shareAHouse() {
        console.log("share a house from parent");
    }
}
class Child extends Parent {
    shareAHouse() {
        super.shareAHouse();
        console.log("share a house from child");
    }
}
const hoidanit = new Child();
hoidanit.shareAHouse();
export {};
