import { handleDeleteBlog } from "./delete.blog.js";

/*
 * Author: Hỏi Dân IT - @hoidanit
 *
 * This source code is developed for the course
 * "TypeScript Pro - Tự Học TypeScript & JavaScript từ số 0".
 * It is intended for educational purposes only.
 * Unauthorized distribution, reproduction, or modification is strictly prohibited.
 *
 * Copyright (c) 2025 Hỏi Dân IT. All Rights Reserved.
 */
interface IBlog {
  id: number;
  title: string;
  author: string;
  content: string;
}

const handleFetch = async () => {
  const fetchData = await fetch("http://localhost:8000/blogs");
  const data = (await fetchData.json()) as IBlog[];

  if (data) {
    renderTable(data);
  }
};

const renderTable = (data: IBlog[]) => {
  const tableBlog = document.getElementById("contentBlog");
  if (tableBlog) {
    data.forEach((blog, index) => {
      tableBlog.innerHTML += `
                <tr>
                    <th>${blog.id}</th>
                    <td>${blog.title}</td>
                    <td>${blog.author}</td>
                    <td>${blog.content}</td>
                    <td>
                    <button 
                    data-update-id="${blog.id}"
                    data-title="${blog.title}"
                    data-author="${blog.author}"
                    data-content="${blog.content}"
                     class="btn btn-warning edit-blog"
                     >
                     Edit
                     </button>
                    <button data-id=${blog.id} class="btn btn-danger delete-btn">Delete</button>
                    </td>
                </tr>
                `;
    });
  }
};

const handleCreateBlog = () => {
  const btnCreate = document.getElementById("saveBtn");
  btnCreate?.addEventListener("click", async () => {
    const titleInput = document.getElementById("title") as HTMLInputElement;
    const authorInput = document.getElementById("author") as HTMLInputElement;
    const contentInput = document.getElementById("content") as HTMLInputElement;

    const title = titleInput.value;
    const author = authorInput.value;
    const content = contentInput.value;

    if (!title && !author && !content) {
      alert("empty input...");
      return;
    }
    const rawResponse = await fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, content }),
    });
    const data: IBlog = await rawResponse.json();

    addNewRowWithJs(data);

    //@ts-ignore
    const modelBlog = bootstrap.Modal.getOrCreateInstance("#modalBlog", {
      Keyboard: false,
    });
    modelBlog.hide();

    //@ts-ignore
    const toast = new bootstrap.Toast("#createBlogToast");
    toast.show();

    titleInput.value = "";
    authorInput.value = "";
    contentInput.value = "";
  });
};

const addNewRowWithJs = (blog: IBlog) => {
  const tableBody = document.getElementById("contentBlog");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
        <tr>            
                    <th>${blog.id}</th>
                    <td>${blog.title}</td>
                    <td>${blog.author}</td>
                    <td>${blog.content}</td>
                    <td>
                    <button data-id=${blog.id} class="btn btn-warning update-btn">Edit</button>
                    <button data-id=${blog.id} class="btn btn-danger delete-btn">Delete</button>
                    </td>
                </tr>
    `;

  tableBody?.appendChild(newRow);
};

handleFetch().then(() => {
  handleDeleteBlog();
});
handleCreateBlog();
