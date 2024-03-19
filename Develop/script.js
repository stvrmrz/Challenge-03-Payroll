// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
/* Get user input to create and return an array of employee objects. This function uses a nested while loop to handle 
isNaN() user input error for emplooyee salary number. */
const employeesArray = [];
let keepAddingEmployees = true;

while (keepAddingEmployees) {
  let userInputFirstName = window.prompt("Enter first name:");
  let userInputLastName = window.prompt("Enter last name:");
  let userInputSalary;

  while (true) {
    userInputSalary = window.prompt("Enter salary:");
      if ((isNaN(userInputSalary))) { 
        window.alert("Please enter a valid number");
        continue;
      }
      if (userInputSalary === "") {
        userInputSalary = 0;
      }
    break;
  }
  const employeeData = {
    firstName: userInputFirstName,
    lastName: userInputLastName,
    salary: Number(userInputSalary),
  };
  employeesArray.push(employeeData);
  keepAddingEmployees = window.confirm("Do you want to add another employee?");

}
return employeesArray;
}

// Display the average salary by iterating through Salary data using a for loop. Output to console using a string literal.
const displayAverageSalary = function(employeesArray) {
  let sum = 0; 
  for (let i = 0; i < employeesArray.length; i++)  
    sum += employeesArray[i].salary; 
  const average = sum / employeesArray.length; 
  console.log(`The average employee salary between our ${employeesArray.length} employees(s) is $${average}`);
}

// Select a random employee from employeesArray and display in console using a string literal 
const getRandomEmployee = function(employeesArray) {
 let randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)]
 console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
