
interface IBlogs {
    id: number;
    title: string;
    author: string;
    content: string;
}

const fetchBlogs = async () => {
    const fetchData = await fetch("http://localhost:8000/blogs");
    const data = await fetchData.json() as ;

    const tbody = document.getElementById("content");

    
}