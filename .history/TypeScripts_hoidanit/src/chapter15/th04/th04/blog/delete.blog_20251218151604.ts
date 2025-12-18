const handleDeleteBlog = () => {
  const tableBody = document.getElementById("contentBlog");

  tableBody?.addEventListener("click", async (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains("delete-btn")) {
      const btnElement = target as HTMLButtonElement;
      const id = btnElement.dataset.id;

      if (!id) return;

      await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      //@ts-ignore
      const toast = new bootstrap.Toast("#liveToastDelete");
      toast.show();

      btnElement.closest("tr")?.remove();
    }
  });
};

export { handleDeleteBlog };
