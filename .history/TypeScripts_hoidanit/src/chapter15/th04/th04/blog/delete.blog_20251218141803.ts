import { IBlog } from "./blog.js";

const handleDeleteBlog = () => {
  const deleteBtnAll = document.querySelectorAll(".delete-btn");
  if (deleteBtnAll) {
    deleteBtnAll.forEach((button) => {
      const btnElement = button as HTMLButtonElement;
      btnElement.addEventListener("click", () => {
        const id = btnElement.getAttribute("data-id");
        if (id) {
          removeBlog(+id);

          const row = btnElement.closest("tr");
          if (row) row.remove();
        }
      });
    });
  }
};

const removeBlog = async (id: number) => {
  const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data: IBlog = await rawResponse.json();

  if (data) {
    //@ts-ignore
    const toast = new bootstrap.Toast("#liveToastDelete");
    toast.show();
  }
};

export { removeBlog, handleDeleteBlog };
