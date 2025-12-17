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
        //close model
        //@ts-ignore
        const modelCreateTodo = bootstrap.Modal.getOrCreateInstance('#createTodoModel', {
            Keyboard: false
        })
        modelCreateTodo.hide();
        inputElement.value = "";
    }
    
})

const handleSave