const acctionSubmitModal = () => {
  const updateBtn = document.getElementById("btnUpdateBlog");

  updateBtn?.addEventListener("click", async() => {
    const idElement = document.getElementById("idUpdate") as HTMLInputElement;
    const titleElement = document.getElementById(
      "titleUpdate"
    ) as HTMLInputElement;
    const authorElement = document.getElementById(
      "authorUpdate"
    ) as HTMLInputElement;
    const contentElement = document.getElementById(
      "contentUpdate"
    ) as HTMLInputElement;

    await fetch(`http://localhost:8000/blogs/${idElement.value}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON
      });

  });

};

const actionUpdate = (btnElement: HTMLButtonElement) => {
  btnElement.addEventListener("click", () => {
    const idElement = document.getElementById("idUpdate") as HTMLInputElement;
    const titleElement = document.getElementById(
      "titleUpdate"
    ) as HTMLInputElement;
    const authorElement = document.getElementById(
      "authorUpdate"
    ) as HTMLInputElement;
    const contentElement = document.getElementById(
      "contentUpdate"
    ) as HTMLInputElement;

    idElement.value = btnElement.getAttribute("data-update-id")!;
    titleElement.value = btnElement.getAttribute("data-title")!;
    authorElement.value = btnElement.getAttribute("data-author")!;
    contentElement.value = btnElement.getAttribute("data-content")!;

    //@ts-ignore
    const modelBlog = bootstrap.Modal.getOrCreateInstance("#modalBlogUpdate", {
      Keyboard: false,
    });
    modelBlog.show();
  });
};

const handleUpdateBlog = () => {
  const updateBtns = document.querySelectorAll(".edit-blog");
  if (updateBtns) {
    updateBtns.forEach((btn, index) => {
      const btnElement = btn as HTMLButtonElement;
      actionUpdate(btnElement);
    });
  }
};

export { handleUpdateBlog, actionUpdate };
