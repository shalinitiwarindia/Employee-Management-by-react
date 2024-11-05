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
      
    
  
  );
};

export default EmployeeForm;
