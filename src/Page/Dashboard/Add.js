import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [eclass, seteclass] = useState('');
    const [sdiv, setsdiv] = useState('');
    const [role, setrole] = useState('');
    const [address, setaddress] = useState('');
    const [city, setcity] = useState('');
    const [pin, setpin] = useState('');
   

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !eclass || !sdiv || !role || !address || !city || !pin ) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            eclass,
            sdiv,
            role,
            address,
            city,
            pin
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Students Data</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="eclass">Enter class</label>
                <input
                    id="eclass"
                    type="number"
                    name="eclass"
                    value={eclass}
                    onChange={e => seteclass(e.target.value)}
                />
                <label htmlFor="eclass">Enter Division</label>
                <input
                    id="sdiv"
                    type="text"
                    name="sdiv"
                    value={sdiv}
                    onChange={e => setsdiv(e.target.value)}
                />
                <label htmlFor="role">Roll No. </label>
                <input
                    id="role"
                    type="number"
                    name="role"
                    value={role}
                    onChange={e => setrole(e.target.value)}
                />
                  <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={e => setaddress(e.target.value)}
                />
                  <label htmlFor="city">City</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    value={city}
                    onChange={e => setcity(e.target.value)}
                />
                  <label htmlFor="pin">Pin code</label>
                <input
                    id="pin"
                    type="number"
                    name="pin"
                    value={pin}
                    onChange={e => setpin(e.target.value)}
                />
               
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add