// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let employeesArray = [];
  let keepOn = true;

    while (keepOn){
      let firstName = prompt('Please enter your first name.');
        if( firstName === null || firstName.trim() === ''){
          alert('first name is required');
        continue;
        }
      let lastName = prompt('Please enter last name.')
        if(lastName === null || lastName.trim() === ''){
          alert('last name is required');
        continue;
        }
      let salary = prompt('Please enter a salary amount.');
        if (salary === null || salary.trim() === '' || isNaN(salary)){
          alert('please enter a valid number')
          continue;
        }
        const employeeInfo = {
            firstName: firstName,
            lastName: lastName,
            salary: parseFloat(salary)
        }; 
        employeesArray.push(employeeInfo);
        keepOn = window.confirm('Would you like to enter another employee?')

    }     
   return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  let averageSalary = totalSalary / employeesArray.length;
  console.log(`Average Salary: ${averageSalary.toFixed(2)}`);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulation ${randomEmployee.firstName} ${randomEmployee.lastName}, you have been randomly selected into our local vault, vault 111! `);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

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
