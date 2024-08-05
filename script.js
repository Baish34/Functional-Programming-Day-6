const employees = [
  { id: 1, name: "Alice", experience: 2 },
  { id: 2, name: "Bob", experience: 9 },
  { id: 3, name: "Charlie", experience: 4 },
  { id: 4, name: "John", experience: 19 }
]

const employeeListContainer = document.querySelector("#employeeList")
const jobExperience = document.querySelector("#jobExperience")

function renderEmployees(filterOnly5Year) {
  const filteredEmployees = filterOnly5Year ? employees.filter(employee => employee.experience > 5) : employees

  const employeeListHTML = filteredEmployees.map(employee => `
  <li>
  <strong>ID:</strong> ${employee.id}<br>
  <strong>Name:</strong> ${employee.name}<br>
  <strong>Experience:</strong> ${employee.experience}<br>
  </li>
  <hr>
  `)

  employeeListContainer.innerHTML = employeeListHTML.join('')
}

renderEmployees(false)

jobExperience.addEventListener("change", function() {
  renderEmployees(jobExperience.checked)
})
