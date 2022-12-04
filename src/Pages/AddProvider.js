import { React, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from '../endpoint-config';

// const ENDPOINT = 'http://localhost:44265'
const ENDPOINT = 'http://flip1.engr.oregonstate.edu:44265'

function AddProvider() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [NPI, setNPI] = useState('');
  const [designation, setDesignation] = useState('');


  //onSubmit handler to add a new provider
  const addProvider = (e) => {
    e.preventDefault();


    fetch(`${ENDPOINT}/AddProvider`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        FirstName: firstName,
        LastName: lastName,
        NPI: NPI,
        Designation: designation,
      })
    })
    .then(res => res.json())
    .then(json => console.log(json));

    window.alert("Provider added. You will now be routed back to the main Providers page")
    navigate("/PharmaTech/ViewProvider")
  }

  return (
    <div className="container">

        <ul className="nav nav-tabs">
            <li className="nav-link" onClick={event => navigate("/PharmaTech/viewProvider")}>
                View Providers
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/searchProvider")}>
                Search Providers
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/addProvider")}>
                Add Provider
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/viewProviderFacility")}>
                View Providers' Facilities
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/addProviderFacility")}>
                Add Providers to Facilities
            </li>
         </ul>

    <h1>Add A New Provider</h1>

    <form className="row g-3" onSubmit={addProvider}>

        <div className="col-md-6">
          <label for="firstName" className="form-label">First Name <b>(required)</b> </label>
          <input value={firstName} type="text" className="form-control" id="firstName" required onChange={event => setFirstName(event.target.value)}/>
        </div>

        <div className="col-md-6">
          <label for="lastName" className="form-label">Last Name <b>(required)</b></label>
          <input value={lastName} type="text" className="form-control" id="lastName" required onChange={event => setLastName(event.target.value)}/>
        </div>

        <div className="col-md-6">
          <label for="NPI" className="form-label">NPI</label>
          <input value={NPI} type="text" className="form-control" id="NPI" onChange={event => setNPI(event.target.value)}/>
        </div>

        <div className="col-md-6">
          <label for="designation" className="form-label">Designation <b>(required)</b></label>
          <select id="designation" className="form-select" value={designation} onChange={event => setDesignation(event.target.value)} >
            <option value="" disabled >Select</option>
            <option value="Physician">Physician</option>
            <option value="Physician Associate">Physician Associate</option>
            <option value="Pharmacist">Pharmacist</option>
            <option value="Advanced Practice Registered Nurse">Advanced Practice Registered Nurse</option>
            <option value="Registered Nurse">Registered Nurse</option>
            <option value="Licensed Practical Nurse">Licensed Practical Nurse</option>
            <option value="Paramedic">Paramedic</option>
            <option value="Other">Other</option>
          </select>
        </div>

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Add</button>
  </div>
</form>

    <br/>
    <br/>
    <br/>

</div>
  )
}

export default AddProvider
