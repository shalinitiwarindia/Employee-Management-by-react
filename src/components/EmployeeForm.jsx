

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
