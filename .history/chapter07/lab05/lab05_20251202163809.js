const fetchData = async () => {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();
  console.log(data);

  const tbody = document.getElementById("content");

  if (data && data.lenght) {
    log
    data.forEach((user, index) => {
      tbody.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>
        `;
    });
  }
};

fetchData();
