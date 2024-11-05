// src/EmployeeForm.jsx
import React, { useState, useEffect } from 'react';

const EmployeeForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState('');
    const [maritalStatus, setMaritalStatus] = useState(false);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployees(storedEmployees);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEmployee = {
            name,
            age,
            address,
            department,
            salary,
            maritalStatus,
        };

        const updatedEmployees = [...employees, newEmployee];
        setEmployees(updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));

        // Clear form fields
        setName('');
        setAge('');
        setAddress('');
        setDepartment('');
        setSalary('');
        setMaritalStatus(false);
    };

    return (
        <div>
            <h2>Employee Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                >
                    <option value="">Select Department</option>
                    <option value="HR">HR</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                </select>
                <input
                    type="number"
                    placeholder="Salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    required
                />
                <label>
                    <input
                        type="checkbox"
                        checked={maritalStatus}
                        onChange={() => setMaritalStatus(!maritalStatus)}
                    />
                    Marital Status
                </label>
                <button type="submit">Submit</button>
            </form>

            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Marital Status</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.address}</td>
                            <td>{employee.department}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.maritalStatus ? 'Married' : 'Single'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeForm;


    
