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

testInterface({id: })