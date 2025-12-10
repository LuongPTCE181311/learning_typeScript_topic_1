export{};
console.log("video 107");

const btn = document.getElementById("btn");
const name = document.getElementById("name") as HTMLInputElement;

if(btn){
    btn.addEventListener("click", () => {
        alert(name.value);
    })
}