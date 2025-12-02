console.log("video 44");

const sv1 = {
  username: "hoidanit",
  score: 9.6,
};

const sv2 = {
  username: "eric",
  score: 3,
};

const sv3 = {
  username: "bla bla",
  score: 5,
};

const sinhvien = [sv1, sv2, sv3];
console.log(">>>>>> check sinhvien: ", sinhvien);

sinhvien.forEach((item, index) => {
    console.log(">>>> index = ", index, "name =", item.username); 
})

for(let key in )