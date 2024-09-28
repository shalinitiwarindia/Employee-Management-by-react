import React, { useState, useRef } from 'react';

const EmployeeForm = ({ onAddEmployee }) => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const addressRef = useRef(null);
  const departmentRef = useRef(null);
  const salaryRef = useRef(null);
  const [isMarried, setIsMarried] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an employee object from form input values
    const newEmployee = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      address: addressRef.current.value,
      department: departmentRef.current.value,
      salary: salaryRef.current.value,
      isMarried: isMarried
    };

    // Pass the new employee data back to the parent component
    onAddEmployee(newEmployee);

    // Reset the form
    e.target.reset();
    setIsMarried(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" ref={nameRef} required />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" ref={ageRef} required />
      </div>
      <div>
        <label>Address: </label>
        <input type="text" ref={addressRef} required />
      </div>
      <div>
        <label>Department: </label>
        <select ref={departmentRef} required>
          <option value="HR">HR</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
          <option value="Sales">Sales</option>
        </select>
      </div>
      <div>
        <label>Salary: </label>
        <input type="number" ref={salaryRef} required />
      </div>
      <div>
        <label>Marital Status: </label>
        <input type="checkbox" checked={isMarried} onChange={(e) => setIsMarried(e.target.checked)} />
        Married
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
