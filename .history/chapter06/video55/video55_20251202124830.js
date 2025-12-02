console.log("video 55");

const myBtn = document.getElementById("submitBtn");
const input = document.getElementById("name");
const 

myBtn.addEventListener("click", () => {
    localStorage.setItem("hoidanit", input.value);
    const message = document.getElementById("message").innerHTML = `<b>${input.value}</b>`
});