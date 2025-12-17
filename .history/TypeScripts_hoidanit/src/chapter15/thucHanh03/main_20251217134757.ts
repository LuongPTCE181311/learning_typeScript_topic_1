import { getRandomInt } from "./helper.js";

interface ITodo {
    id: number;
    name: string;
}
const btnElement = document.getElementById("btnCreateTodo");

btnElement?.addEventListener("click", () => {
    const inputElement = document.getElementById("todoName") as HTMLInputElement;
    if(inputElement){
        const name = inputElement.value;

        //save todo to localStore
        const newTodo = {
            id: getRandomInt(1, 10000000),
            name
        }
        handleSaveTodoToLocalStorage(newTodo);
        //close model
        //@ts-ignore
        const modelCreateTodo = bootstrap.Modal.getOrCreateInstance('#createTodoModel', {
            Keyboard: false
        })
        modelCreateTodo.hide();
        inputElement.value = "";
    }
    
})

const handleSaveTodoToLocalStorage = (todo: ITodo) => {
    const todoStr = localStorage.getItem("todoList");
    if(todoStr){
        const todoArr = JSON.parse(todoStr) as ITodo[];
        todoArr.push(todo);
        localStorage.setItem("todoList", JSON.stringify(todoArr));
    }else{
        localStorage.setItem("todoList", JSON.stringify([todo]));
    }
}


const handleShowUserTable = () => {
    const body = document.getElementById("content");
    const userStr = localStorage.getItem("todoList");
    if(userStr && body){
        const user = JSON.parse(userStr) as ITodo[];
        user.forEach((u, index) => {
            body.innerHTML += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${u.id}</td>
                    <td>${u.name}</td>
                    <td><button class="btn btn-danger">Delete</button></td>
                </tr>
                `
            })
            
        }else{
            body.innerHTML = `Hong co du lieu`
        } 
    
}

handleShowUserTable();