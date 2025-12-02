console.log("video 40");

const myClass = ["Kenldur", "Nam", "Hung", "Eric", "Alibaba"];

const map1 = myClass.map((value) => {
    return value + "hihi";
});

console.log(map1);


const scores = [10, 8 , 3, 4, 9];

scores.forEach((value, index) => {
    console.log("index =", index, "value =", value);
})
const map2 = scores.map((element) => {
    return element*2;
})

console.log(map2);
