let employees = [
    {
      nome: "João",
      email: "joao@example.com",
      endereco: "Rua A, 123",
      fone: "(00) 1234-5678"
    },
    {
      nome: "Maria",
      email: "maria@example.com",
      endereco: "Rua B, 456",
      fone: "(00) 2345-6789"
    },
    {
      nome: "Pedro",
      email: "pedro@example.com",
      endereco: "Rua C, 789",
      fone: "(00) 3456-7890"
    },
    {
      nome: "Ana",
      email: "ana@example.com",
      endereco: "Rua D, 012",
      fone: "(00) 4567-8901"
    },
    {
      nome: "Lucas",
      email: "lucas@example.com",
      endereco: "Rua E, 345",
      fone: "(00) 5678-9012"
    }
  ];
  

function generateBodyOfTable(){
    let body = document.getElementById("body-table");
    let html = "";

    employees.forEach((employee, index) => {
        html += `
            <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>${employee.nome}</td>
                <td>${employee.email}</td>
                <td>${employee.endereco}</td>
                <td>${employee.fone}</td>
                <td class="actions">
                    <button class="yellow-text" onclick="editEmployee( ${index} )">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="red-text margin-left" onclick="deleteEmployee( ${index} )">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    body.innerHTML = html;
}

function editEmployee(index){
    let employee = employees[index];

    document.getElementById("nome").value = employee.nome;
    document.getElementById("email").value = employee.email;
    document.getElementById("endereco").value = employee.endereco;
    document.getElementById("fone").value = employee.fone;

    document.getElementById("btn-save").setAttribute("onclick", `saveEmployee(${index})`);
}

function saveEmployee(){
    let employee;

    employee.nome = document.getElementById("nome").value;
    employee.email = document.getElementById("email").value;
    employee.endereco = document.getElementById("endereco").value;
    employee.fone = document.getElementById("fone").value;

    employees.push(employee);

    generateBodyOfTable();
}

function deleteEmployee(index){
    employees.splice(index, 1);

    generateBodyOfTable();
}

generateBodyOfTable();