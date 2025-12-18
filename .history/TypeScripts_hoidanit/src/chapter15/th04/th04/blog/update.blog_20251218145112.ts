
const actionUpdate = (btnElement: HTMLButtonElement) => {
    btnElement.addEventListener("click", () => {
        const idElement = document.getElementById
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
