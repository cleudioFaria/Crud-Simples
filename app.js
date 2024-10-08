let users = [];
let editIndex = -1;

function addUser() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name === "" || email === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  const user = { name, email };

  if (editIndex === -1) {
    users.push(user);
  } else {
    users[editIndex] = user;
    editIndex = -1;
  }

  resetForm();
  renderTable();
}
//fim da funçao adicionar o usuario//



function renderTable() {
  const tbody = document.querySelector("#userTable tbody");
  tbody.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td class="actions">
        <button class="edit-btn" onclick="editUser(${index})">Editar</button>
        <button class="delete-btn" onclick="deleteUser(${index})">Deletar</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

function resetForm() {
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
}

function editUser(index) {
  const user = users[index];
  document.getElementById('name').value = user.name;
  document.getElementById('email').value = user.email;
  editIndex = index;
}

function deleteUser(index) {
  users.splice(index, 1);
  renderTable();
}
