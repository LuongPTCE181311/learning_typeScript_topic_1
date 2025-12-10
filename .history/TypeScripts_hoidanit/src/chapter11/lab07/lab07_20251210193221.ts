
interface IBlogs {
    id: number;
    title: string;
    author: string;
    content: string;
}

const fetchBlogs = async () => {
    const fetchData = await fetch("http://localhost:8000/blogs");
    const data = await fetchData.json() as IBlogs[];

    const tbody = document.getElementById("content");

    data.forEach((blog) => {
        tbody?.innerHTML += `
            <td>${blog.id}</td>
            <td>${blog.title}</td>
            <td>${user.email}</td>
        `
    })
}