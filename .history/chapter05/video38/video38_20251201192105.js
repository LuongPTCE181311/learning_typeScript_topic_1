console.log("video 38");

const names = ["Thanh Luong", "Eric", "Alibaba", "Nam"];

console.log("0 =",names[0]);
console.log("2 =", names[2]);
console.log("10 =", names[10]);

names[2] = 'update name';

console.log(names);

names.push("Nu", 123);
names.unshift("hihi");
console.log(names);

names.pop