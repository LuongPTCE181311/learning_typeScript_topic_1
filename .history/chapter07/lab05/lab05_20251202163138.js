const fetchData = async () => {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();
  console.log(data);

  const tbody = document.getElementById("tbody");

  if(data )
  tbody.innerHTML = `
<tr>
    <td>data 1</td>
    <td>data 2</td>
    <td>data 2</td>
</tr>
  `;
};

fetchData();
