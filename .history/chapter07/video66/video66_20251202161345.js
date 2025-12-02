console.log("video 66");

fetch("http://localhost:8000/users")
.then(res => res.json())
.then(data => console.log(data));

const fetchData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const data = res.json()
    console.log(res);   
}

fetchData();