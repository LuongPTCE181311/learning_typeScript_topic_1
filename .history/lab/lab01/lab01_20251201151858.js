console.log("Lab 01");

const fullName = "Pham Thanh Luong"
let birthYear = 2004;
let isStudent;

const today = new Date();
const currentYear = today.getFullYear();

let old = currentYear - birthYear;
if(old >= 7 && old <= 24){
    isStudent = true;
}else{
    isStudent = false;
}

console.log(`
    Ten: ${fullName}
    tuoi: ${old}
    Sinh vien: ${isStudent === true ? "dung" : "sai"}
    `);