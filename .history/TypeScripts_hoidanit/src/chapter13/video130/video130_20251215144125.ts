export {};

function logLength<T extends {length: number}>(value: T){
    console.log(value.length);
}

logLength("phamthanhluong");
// logLength(123)

interface IUser {
    id: number;
    name: string;
}

function testInterface<T extends IUser>(value: T){
    console.log(value);
    
}

testInterface({id: 1, name: "hoidanit"});
// testInterface({id: 1});
testInterface({id: 1, name: "hoidanit", age: 25});

class Animal {
    move(){
        console.log("Moving...");
        
    }
}

class Dog extends Animal {
    bark(){
        console.log("Woof!");
    }
}

function testClass<T extends Animal>(value: T){
    console.log(value);

    if(value instanceof Dog)
}


const a1 = new Dog();
const b1 = new Animal();

testClass(a1);
testClass(b1);