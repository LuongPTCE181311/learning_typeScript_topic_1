export{};
console.log("video 106");

const btn = document.getElementById("btn");
const name = document.getElementById("name") as HTML;

if(btn){
    btn.addEventListener("click", () => {
        alert(name.value);
    })
}