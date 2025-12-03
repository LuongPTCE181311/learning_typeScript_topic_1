console.log("video 72");

const content = in

const fetchData = async () => {
  const res = await fetch("http://localhost:8000/blogs");
  const data = await res.json();
  console.log(data);
};

fetchData();
