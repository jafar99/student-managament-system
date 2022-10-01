import React, { useState } from "react";
import Swal from "sweetalert2";

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
  const id = selectedEmployee.id;

  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [eclass, seteclass] = useState(selectedEmployee.eclass);
  const [sdiv, setsdiv] = useState(selectedEmployee.sdiv);
  const [role, setrole] = useState(selectedEmployee.role);
  const [address, setaddress] = useState(selectedEmployee.role);
  const [city, setcity] = useState(selectedEmployee.role);
  const [pin, setpin] = useState(selectedEmployee.role);


  const handleUpdate = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !eclass || !sdiv || !role || !address || !city || !pin ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      firstName,
      lastName,
      eclass,
      sdiv,
      role,
      address,
      city,
      pin
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="eclass">Enter class</label>
        <input
          id="eclass"
          type="number"
          name="eclass"
          value={eclass}
          onChange={(e) => seteclass(e.target.value)}
        />

        <label htmlFor="sdiv">Enter Division</label>
        <input
          id="sdiv"
          type="text"
          name="sdiv"
          value={sdiv}
          onChange={(e) => setsdiv(e.target.value)}
        />
        <label htmlFor="role">Roll No</label>
        <input
          id="role"
          type="number"
          name="role"
          value={role}
          onChange={(e) => setrole(e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          name="city"
          value={city}
          onChange={(e) => setcity(e.target.value)}
        />
        <label htmlFor="pin">Pin code</label>
        <input
          id="pin"
          type="number"
          name="pin"
          value={pin}
          onChange={(e) => setpin(e.target.value)}
        />
    
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
