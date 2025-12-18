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

interface IPost {
    id: number;
    title: string;
    content:string;
}

const handleFetchPost = async() => {
    const fetchData = await fetch("http://localhost:8000/posts");
    const data = await fetchData.json() as IPost[];

    if(data){
        const tablePost = document.getElementById("contentPost");
        if(tablePost){
            data.forEach((post) => {
                tablePost.innerHTML += `
                <tr>
                    <th scope="row">${post.id}</th>
                    <td>${post.title}</td>
                    <td>${post.content}</td>
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

handleFetchPost();
