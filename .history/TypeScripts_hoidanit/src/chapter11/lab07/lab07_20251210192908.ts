
const fetchBlogs = async () => {
    const fetchData = await fetch("http://localhost:8000/blogs");
    const data = await fetchData.json();

    const tbody = document.getElementById("content");
    
}