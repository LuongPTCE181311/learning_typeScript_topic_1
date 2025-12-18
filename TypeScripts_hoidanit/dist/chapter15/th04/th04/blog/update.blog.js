import { addNewRowWithJs } from "./blog.js";
const actionSubmitModal = () => {
    const updateBtn = document.getElementById("btnUpdateBlog");
    updateBtn?.addEventListener("click", async () => {
        const idElement = document.getElementById("idUpdate");
        const titleElement = document.getElementById("titleUpdate");
        const authorElement = document.getElementById("authorUpdate");
        const contentElement = document.getElementById("contentUpdate");
        await fetch(`http://localhost:8000/blogs/${idElement.value}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: titleElement.value,
                author: authorElement.value,
                content: contentElement.value,
            }),
        });
        const btnUpdateElement = document.querySelector(`[data-update-id="${idElement.value}"]`);
        const row = btnUpdateElement?.closest("tr");
        if (row)
            row.remove();
        addNewRowWithJs({
            id: +idElement.value,
            title: titleElement.value,
            author: authorElement.value,
            content: contentElement.value,
        });
        //@ts-ignore
        const modelBlog = bootstrap.Modal.getOrCreateInstance("#modalBlogUpdate", {
            Keyboard: false,
        });
        modelBlog.hide();
        //@ts-ignore
        const toast = new bootstrap.Toast("#updateBlogToast");
        toast.show();
    });
};
const actionUpdate = (btnElement) => {
    btnElement.addEventListener("click", () => {
        const idElement = document.getElementById("idUpdate");
        const titleElement = document.getElementById("titleUpdate");
        const authorElement = document.getElementById("authorUpdate");
        const contentElement = document.getElementById("contentUpdate");
        idElement.value = btnElement.getAttribute("data-update-id");
        titleElement.value = btnElement.getAttribute("data-title");
        authorElement.value = btnElement.getAttribute("data-author");
        contentElement.value = btnElement.getAttribute("data-content");
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
            const btnElement = btn;
            actionUpdate(btnElement);
        });
    }
};
export { handleUpdateBlog, actionUpdate, actionSubmitModal };
