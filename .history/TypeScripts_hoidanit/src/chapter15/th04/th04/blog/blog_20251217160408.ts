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
    content:string;
}

const handleFetch = async() => {
    const fetchData = await fetch("http://localhost:8000/blogs");
    const data = await fetchData.json() as IBlog[];

    if(data){
        const tableBlog = document.getElementById("content");
        if(tableBlog){
            data.forEach((blog) => {
                tableBlog.innerHTML += `
                <tr>
                    <th scope="row">${blog.id}</th>
                    <td>${blog.title}</td>
                    <td>${blog.author}</td>
                    <td>${blog.content}</td>
                    <td>
                    <button class="btn btn-warning">Edit</button>
                    <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
                `
            })
        }
    }
}

handleFetch();
