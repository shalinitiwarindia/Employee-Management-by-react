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

    ponent
    
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
