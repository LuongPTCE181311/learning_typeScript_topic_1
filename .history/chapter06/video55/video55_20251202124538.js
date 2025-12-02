console.log("video 55");

const myBtn = document.getElementById("submitBtn");
const input = document.getElementById("name");

myBtn.addEventListener("click", () => {
    localStorage.setItem("hoi")
    const message = document.getElementById("message").innerHTML = `<b>${input.value}</b>`
});