import { React, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from '../endpoint-config';

function AddPatient() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [DOB, setDOB] = useState('');
  const [sex, setSex] = useState('');
  const [status, setStatus] = useState('');
  const [race, setRace] = useState('');
  const [ethnicity, setEthnicity] = useState('');


  //onSubmit handler to add a new patient
  const addPatient = (e) => {
    e.preventDefault();

    // validate patient's DOB
    let newDateString = new Date()
    let date = String("0" + newDateString.getDate()).slice(-2);
    let month = String("0" + (newDateString.getMonth() + 1)).slice(-2);
    let year = String(newDateString.getFullYear());
    let currentDateInteger = parseInt(year+month+date)
    let DOBInteger = parseInt(DOB.slice(0,4)+DOB.slice(5,7)+DOB.slice(8,10))
    if(DOBInteger > currentDateInteger){
      alert("Patient's Date of Birth cannot be set in the future")
      return
    }

    fetch(`${ENDPOINT}/AddPatient`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        FirstName: firstName,
        MiddleName: middleName,
        LastName: lastName,
        DOB: DOB,
        Sex: sex,
        ActiveStatus: status,
        Race: race,
        Ethnicity: ethnicity,
      })
    })
    .then(res => res.json())
    .then(json => console.log(json));

    window.alert("Patient added. You will now be routed back to the main Patients page")
    navigate("/PharmaTech/ViewPatient")
  }

  

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

  <form className="row g-3" onSubmit={addPatient}>

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
  <select id="sex" className="form-select" value = {sex} onChange={event => setSex(event.target.value)}>
    <option value="" disabled>Select</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Other">Other</option>
    <option value="Unknown">Unknown</option>
  </select>
</div>

<div className="col-md-4">
  <label for="status" className="form-label">Status <b>(required)</b></label>
  <select id="status" className="form-select" value = {status} required onChange={event => setStatus(event.target.value)} >
    <option value="" disabled>Select</option>
    <option value="Alive">Alive</option>
    <option value="Deceased">Deceased</option>
    <option value="Unknown">Unknown</option>
  </select>
</div>


<div className="col-md-6">
  <label for="race" className="form-label">Race</label>
  <select id="race" className="form-select" value = {race} onChange={event => setRace(event.target.value)} >
    <option value="" disabled>Select</option>
    <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
    <option value="Asian">Asian</option>
    <option value="Black or African American">Black or African American</option>
    <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
    <option value= "White">White</option>
    <option value="Other Race">Other Race</option>
    <option value="Unknown">Unknown</option>
  </select>
</div>

<div className="col-md-6">
  <label for="ethnicity" className="form-label">Ethnicity</label>
  <select id="ethnicity" className="form-select" value = {ethnicity} onChange={event => setEthnicity(event.target.value)} >
    <option value="" disabled>Select</option>
    <option value="Hispanic or Latino">Hispanic or Latino</option>
    <option value="Not Hispanic or Latino">Not Hispanic or Latino</option>
    <option value="Unknown">Unknown</option>
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
