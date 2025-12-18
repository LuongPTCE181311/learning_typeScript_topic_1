
const actionUpdate = (btnElement: HTMLButtonElement) => {
    btnElement.addEventListener("click", () => {
        const idElement = document.getElementById("idUpdate") as HTMLInputElement;
        const titleElement = document.getElementById("titUpdate") as HTMLInputElement;
        const authorElement = document.getElementById("idUpdate") as HTMLInputElement;
        const contentElement = document.getElementById("idUpdate") as HTMLInputElement;
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
