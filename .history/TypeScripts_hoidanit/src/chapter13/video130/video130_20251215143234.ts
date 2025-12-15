export {};

function logLength<T extends {length: number}>(value: T){
    console.log(value.length);
}

logLength("phamthanhluong")