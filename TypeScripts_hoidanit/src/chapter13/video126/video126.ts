export {};


function merge<T, U>(a: T, b: U){
    return [a, b];
}


const a = merge<string, number>("hoidanit", 25);