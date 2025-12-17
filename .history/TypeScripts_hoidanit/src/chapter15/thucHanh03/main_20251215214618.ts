export{}
console.log("huhu");

const btnElement = document.getElementById("btnCreateTodo");

btnElement?.addEventListener("click", () => {
    const inputElement = document.getElementById("todoName") as HTMLInputElement;
    if(inputElement){
        const nameTodo = inputElement.value;
        
    }
    
})