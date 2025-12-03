console.log("video 72");

fetch("http://localhost:8000/users")
.then(res => res.json())
.then(data => console.log(data));

const fetchData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    console.log(data);   
}

fetchData();