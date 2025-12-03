console.log("video 70");

const saveBtn = document.getElementById("saveBtn");
const inputName = document.getElementById("inputName");

saveBtn.addEventListener("click", () => {
    const myTodo = {
        id: 1,
        name: inputName.value
    }

    localStorage.setItem("todo", JSON.stringify)
})