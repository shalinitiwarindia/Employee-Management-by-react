![Screenshot 2024-11-08 140639](https://github.com/user-attachments/assets/8abdff6d-5b62-4767-af3d-d805dfe5db50)

![Screenshot 2024-11-08 140556](https://github.com/user-attachments/assets/9a344057-010e-416b-90a1-411c85302e74)
![Screenshot 2024-11-08 140430](https://github.com/user-attachments/assets/4c2c6297-4229-41c1-bb89-84ace6725410)
![Screenshot 2024-11-08 140040](https://github.com/user-attachments/assets/779e44cf-ba00-40b8-97c5-27078dadfc58)
This is an employee management which is build by using react i.e. Form&ref.
The `EmployeeForm` component in React is designed to gather employee information through a structured form and display a list of entered employees. The form includes inputs for `Name`, `Age`, `Address`, `Department`, `Salary`, and `Marital Status`, with data being stored in the browser's local storage. The component is responsive, ensuring usability across different screen sizes.

### Key Features:

1. **Form Structure**:
   - Collects employee data through text fields, a dropdown, a number field, and a checkbox.
   - A submit button adds the entered data to a table display below the form.

2. **Local Storage**:
   - Employee data is saved to local storage, so data persists across sessions.
   - Data is retrieved from local storage when the component loads.

3. **Employee List**:
   - The component renders a table to display the list of employees, updating dynamically when new employees are added.

4. **Responsive Design with Media Queries**:
   - **Media Queries** are included for responsive design, ensuring a smooth layout on smaller screens by adjusting input sizes, font sizes, and padding. The form fields and table layout adapt to various screen sizes, making it user-friendly on mobile and tablet devices as well as on desktops.

### Responsive CSS (Media Queries):
- Form container is centered and given a max width for readability.
- Font sizes, padding, and layout spacing are adjusted for smaller screens.
- The table columns and form inputs are modified for accessibility and legibility on different devices.

This layout and functionality make `EmployeeForm` an effective tool for managing and displaying employee information in a user-friendly, responsive interface.
