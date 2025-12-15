export {};

console.log("video 125");

function testNumber(value: number){
    return value;
}

function testString (value: string){
    return value;
}

function testGeneric<T>(value: T){
    return value;
}

const a = testGeneric<string>("hoidanit");
const b = testGeneric<number>(123);
const c = testGeneric<boolean>(true);


function getFirstElementInArray<T>(arr: T[]){
    return arr[0];
}


const getFirstElementInArray2 = () =


const a1 = getFirstElementInArray<number>([1, 2, 3]);
const a2 = getFirstElementInArray<string>(["1", "2", "3"]);
