export {};

console.log("video 94");


const student1 = {
    name: string
}

 const person: {
    name: string;
    age: number;
    address: string;
    isHandsome: boolean;
 } = {
    name: "pham thanh luong with Nguyen Thi Nhu Y",
    age: 21,
    address: "Bac Lieu",
    isHandsome: true
 }

 const printInfo = (people: {
    name: string;
    age: number;
    address: string;
    isHandsome: boolean;
 }) => {
    console.log("people name 's :", people.name);
 }

 printInfo(person);
