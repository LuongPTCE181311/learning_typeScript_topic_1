console.log("video 53");

const myBtn = document.getElementById("myBtn");
const mytext = document.getElementById("myText");
const myBack = document.getElementById("backBtn");

myBtn.addEventListener("click", () => {
    mytext.style.color = "red";
    mytext.style.backgroundColor = "green";
    mytext.classList.add("hoidanit", eric")
})

myBack.addEventListener("click", () => {
    mytext.style.color = "black";
    mytext.style.backgroundColor = "unset";
})