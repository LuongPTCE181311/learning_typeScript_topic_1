console.log("video 66");

fetch("http://localhost:8000/users")
.then(res => res.json())
.then(data => console.log(data));

const fetchData = () => {
    const res = fetch("http://localhost:8000/users");
    console.log(res);
    
}