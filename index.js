// Initialize the employee object with name and streetAddress
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
  };
// Function to update an employee object non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object by spreading the properties of the original employee
    return { ...employee, [key]: value };
  }
  // Function to update an employee object destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Mutate the original employee object
    employee[key] = value;
    return employee; 
  }
  
  // Function to delete a key from an employee object non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object by spreading the properties of the original employee
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key from an employee object destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Mutate the original employee object
    delete employee[key];
    return employee; // Return the updated employee (though this step isn't necessary in practice)
  }