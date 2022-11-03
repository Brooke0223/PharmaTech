import { React, useState } from 'react'
import { useNavigate } from "react-router-dom"

function AddPatient() {
    let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

    const [firstName, setFirstName] = useState('');
    const [middlename, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [DOB, setDOB] = useState('');
    const [sex, setSex] = useState('');
    const [status, setStatus] = useState('');
    const [race, setRace] = useState('');
    const [ethnicity, setEthnicity] = useState('');


    return (
    <div className="container">
    
    <ul className="nav nav-tabs">
        <li className="nav-link" onClick={event => navigate("/PharmaTech/ViewPatient")}>
            View Patients
        </li>

        <li className="nav-link" onClick={event => navigate("/PharmaTech/searchPatient")}>
            Search Patients
        </li>

        <li className="nav-link" onClick={event => navigate("/PharmaTech/addPatient")}>
            Add Patient
        </li>
    </ul>

    <h1>Add A New Patient</h1>
    <p><i>Note: Add contact methods for a patient (phone, email, and address) via the "Contacts" tab.</i></p>

    <form className="row g-3" >

  <div className="col-md-4">
    <label for="firstName" className="form-label">First Name <b>(required)</b></label>
    <input type="text" className="form-control" id="firstName" required onChange={event => setFirstName(event.target.value)}/>
  </div>

  <div className="col-md-4">
    <label for="middleName" className="form-label">Middle Name</label>
    <input type="text" className="form-control" id="middleName"  onChange={event => setMiddleName(event.target.value)}/>
  </div>

  <div className="col-md-4">
    <label for="lastName" className="form-label">Last Name <b>(required)</b></label>
    <input type="text" className="form-control" id="lastName" required onChange={event => setLastName(event.target.value)}/>
  </div>

  <div className="col-md-4">
    <label for="dob" className="form-label">Date of Birth <b>(required)</b></label>
    <input type="date" className="form-control" id="dob" required onChange={event => setDOB(event.target.value)}/>
  </div>

  <div className="col-md-4">
    <label for="sex" className="form-label">Sex</label>
    <select id="sex" className="form-select" onChange={event => setSex(event.target.value)}>
      <option disabled selected>Select</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
      <option>Unknown</option>
    </select>
  </div>

  <div className="col-md-4">
    <label for="status" className="form-label">Status <b>(required)</b></label>
    <select id="status" className="form-select" required onChange={event => setStatus(event.target.value)} >
      <option value="" disabled selected>Select</option>
      <option>Alive</option>
      <option>Deceased</option>
      <option>Unknown</option>
    </select>
  </div>


  <div className="col-md-6">
    <label for="race" className="form-label">Race</label>
    <select id="race" className="form-select" onChange={event => setRace(event.target.value)} >
      <option disabled selected>Select</option>
      <option>American Indian or Alaska Native</option>
      <option>Asian</option>
      <option>Black or African American</option>
      <option>Native Hawaiian or Other Pacific Islander</option>
      <option>White</option>
      <option>Other Race</option>
      <option>Unknown</option>
    </select>
  </div>

  <div className="col-md-6">
    <label for="ethnicity" className="form-label">Ethnicity</label>
    <select id="ethnicity" className="form-select" onChange={event => setEthnicity(event.target.value)} >
      <option disabled selected>Select</option>
      <option>Hispanic or Latino</option>
      <option>Not Hispanic or Latino</option>
      <option>Unknown</option>
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

export default AddPatient