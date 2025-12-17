export{}
console.log("huhu");

const btnElement = document.getElementById("btnCreateTodo");

btnElement?.addEventListener("click", () => {
    const inputElement = document.getElementById("todoName") as HTMLInputElement;
    if(inputElement){
        const name = inputElement.value;

        //save todo to localStore

        //close model
        
        const modelCreateTodo = new bootstrap.Modal.getOrCreateInstance('#createTodoModel', {
            Keyboard: false
        })

        modelCreateTodo.hide();
    }
    
})