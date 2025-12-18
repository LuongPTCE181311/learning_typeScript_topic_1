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

interface IUser {
    id: number;
    title: string;
    content:string;
}

const handleFetchUser = async() => {
    const fetchData = await fetch("http://localhost:8000/users");
    const data = await fetchData.json() as IUser[];

    if(data){
        const tableUser = document.getElementById("contentUser");
        if(tableUser){
            data.forEach((user) => {
                tableUser.innerHTML += `
                <tr>
                    <th scope="row">${user.id}</th>
                    <td>${user.title}</td>
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

handleFetchUser();
