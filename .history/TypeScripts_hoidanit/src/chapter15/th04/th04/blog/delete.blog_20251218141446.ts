import { IBlog } from "./blog.js";

const handleDeleteBlog = () => {
  const tableBody = document.getElementById("contentBlog");

  tableBody?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains("delete-btn")) {
      const id = target.dataset.id;
      if (!id) return;

      removeBlog(+id);

      const row = target.closest("tr");
      if (row) row.remove();
    }
  });
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
