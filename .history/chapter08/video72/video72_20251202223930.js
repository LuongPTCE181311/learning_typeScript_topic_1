console.log("video 72");

const content = document.getElementById("content");

const fetchData = async () => {
  const res = await fetch("http://localhost:8000/blogs");
  const data = await res.json();
  if (data) {
    data.forEach((blog) => {
      content.innerHTML += `
        <tr>
            <td>${blog.id}</td>
            <td>${blog.title}</td>
            <td>${blog.author}</td>
            <td>${blog.content}</td>
            <td>
            <button 
                data-id=${blog.id} 
                class="delete-btn">
            Delete
            </button>
            </td>
        </tr>
        `;
    });
  }
};

const handleNewRowToEnd = (blog) => {
  const tableBody = document.querySelector("#blogs tbody");

  // Tạo phần tử dòng mới
  const newRow = document.createElement("tr");

  // Gán HTML cho dòng
  newRow.innerHTML = `
      <tr>
            <td>${blog.id}</td>
            <td>${blog.title}</td>
            <td>${blog.author}</td>
            <td>${blog.content}</td>
            <td>
            <button 
                data-id=${blog.id} 
                class="delete-btn">
            Delete
            </button>
            </td>
        </tr>
  `;

  // Thêm dòng vào cuối bảng
  tableBody.appendChild(newRow);

  const btn = document.querySelector(`[data-id="]`)
};

const handleAddNewBlogs = () => {
  const title = document.getElementById("inputTitle");
  const author = document.getElementById("inputAuthor");
  const content = document.getElementById("inputContent");
  const saveBtn = document.getElementById("saveBtn");

  saveBtn.addEventListener("click", async () => {
    const rawResponse = await fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        author: author.value,
        content: content.value,
      }),
    });
    const data = await rawResponse.json();
    handleNewRowToEnd(data);
    console.log("phan hoi tu api: ", data);
  });
};

const handleDeleteBtns = () => {
  const btns = document.querySelectorAll(".delete-btn");
  if (btns) {
    btns.forEach((btn, index) => {
      console.log("delete", btn, index);
      btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const data = await rawResponse.json();
        //delete row
        const row = btn.closest('tr');
        row.remove();
      });
    });
  }
};

fetchData().then(() => {
  handleDeleteBtns();
});
handleAddNewBlogs();
