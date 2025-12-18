import { IBlog } from "./blog.js";

const handleDeleteBlog = () => {
  const deleteBtnAll = document.querySelectorAll(".delete-btn");
  if (deleteBtnAll) {
    deleteBtnAll.forEach((button) => {
      const btnElement = button as HTMLButtonElement;
      removeBlog(btnElement);
    });
  }
};

const removeBlog = async (btnElement: HTMLButtonElement) => {
    btnElement.addEventListener("click", () => {
        const id = btnElement.getAttribute("data-id");
        if(id){

        }
    })
  
};

export { removeBlog, handleDeleteBlog };
