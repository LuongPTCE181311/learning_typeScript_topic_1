console.log("video 72");

const content = document.getElementById("content");

const fetchData = async () => {
  const res = await fetch("http://localhost:8000/blogs");
  const data = await res.json();
  console.log(data);
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
      body: JSON.stringify({title: title., b: "Textual content"})
    });
    const content = await rawResponse.json();
  });
};

fetchData();
