export{};
console.log("video 107");

const fetchUsers = async () => {
    const fetchData = await fetch("http://localhost:8000/users");
    const data = await fetchData.json();
}

fetchUsers()