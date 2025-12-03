console.log("video 70");

const saveBtn = document.getElementById("saveBtn");
const inputName = document.getElementById("inputName");

saveBtn.addEventListener("click", () => {
  
  const myTodo = {
    id: 1,
    name: inputName.value,
  };
  const currentTodoStr = localStorage.getItem("todo");
  if (currentTodoStr) {
    currentTodo = JSON.parse(currentTodoStr);

    currentTodo

  }
  localStorage.setItem("todo", JSON.stringify([myTodo]));
});
