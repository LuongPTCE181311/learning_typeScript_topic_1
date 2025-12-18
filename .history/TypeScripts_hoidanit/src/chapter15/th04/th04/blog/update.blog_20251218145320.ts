
const actionUpdate = (btnElement: HTMLButtonElement) => {
    btnElement.addEventListener("click", () => {
        const idElement = document.getElementById("idUpdate") as HTMLInputElement;
        const titleElement = document.getElementById("titleUpdate") as HTMLInputElement;
        const authorElement = document.getElementById("authorUpdate") as HTMLInputElement;
        const contentElement = document.getElementById("contentUpdate") as HTMLInputElement;

        idElement.value = btnElement.get
    })
}


const handleUpdateBlog = () => {
  const updateBtns = document.querySelectorAll(".edit-blog");
  if (updateBtns) {
    updateBtns.forEach((btn, index) => {
        const btnElement = btn as HTMLButtonElement;
        actionUpdate(btnElement);
    })
  }
};
