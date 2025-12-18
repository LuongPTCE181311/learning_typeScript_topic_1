

const handleDeleteBlog = () => {
  const deleteBtnAll = document.querySelectorAll(".delete-btn");
  if (deleteBtnAll) {
    deleteBtnAll.forEach((button) => {
      const btnElement = button as HTMLButtonElement;
      removeBlog(btnElement);
    });
  }
};

const removeBlog = (btnElement: HTMLButtonElement) => {
  btnElement.addEventListener("click", async () => {
    const id = btnElement.getAttribute("data-id");
    if (id) {
      const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      //@ts-ignore
      const toast = new bootstrap.Toast("#liveToastDelete");
      toast.show();

      const row = btnElement.closest("tr");
      if (row) row.remove();
    }
  });
};

export { removeBlog, handleDeleteBlog };
