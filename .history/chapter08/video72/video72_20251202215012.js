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

const handleAddNewBlogs = () =>{

}

fetchData();




