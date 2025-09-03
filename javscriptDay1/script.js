const employees = [
  { id: 101, name: "Alice", department: "HR", salary: 50000 },
  { id: 102, name: "Bob", department: "Engineering", salary: 60000 },
  { id: 103, name: "Charlie", department: "HR", salary: 70000 },
  { id: 104, name: "David", department: "Marketing", salary: 80000 },
  { id: 105, name: "Eva", department: "Engineering", salary: 90000 },
];

// const ouput=document.getElementById("employeesDetails");

function displayEmployees() {
  const totalEmployee = employees
    .map(
      (employee) =>
        `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}`
    )
    .join(" ");
  document.getElementById("employeesDetails").innerHTML = totalEmployee;
}

function calculateTotalSalary() {
  const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
  alert(`Total Salaries:${totalSalary}`);
}

function displayHREmployee() {
  const findHR = employees.filter((empl) => empl.department === "HR");
  console.log(findHR);
  const findm = findHR
    .map(
      (elem) =>
        `<p>${elem.id}:${elem.name}-${elem.department}-${elem.salary}</P>`
    )
    .join("");
  document.getElementById("employeesDetails").innerHTML = findm;
}

function findEmployeeById(employeeId) {
  const findID = employees.find((elem) => elem.id === employeeId);

  if (findID) {
    document.getElementById(
      "employeesDetails"
    ).innerHTML = `<p>${findID.id}:${findID.name}:${findID.department}:${findID.salary}`;
  } else {
    document.getElementById("employeesDetails").innerHTML =
      "no employee has been found!";
  }
}
