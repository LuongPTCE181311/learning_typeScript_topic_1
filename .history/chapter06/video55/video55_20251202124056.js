console.log("video 55");

const myBtn = document.getElementById("submitBtn");
const input = document.getElementById("name");
const message = document.getElementById("mes")

myBtn.addEventListener("click", () => {
    alert(input.value);
});