"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 107");
const fetchUsers = async () => {
    const fetchData = await fetch("http://localhost:8000/users");
    const data = (await fetchData.json());
    console.log(data);
};
fetchUsers();
