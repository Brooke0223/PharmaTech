import { useNavigate } from "react-router-dom"
import { React, useState, useEffect } from 'react'


function EditPatient() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  //capture patient to edit's patientID from the URL
  const patientID = window.location.href.split('editPatient/')[1]; 
  
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [DOB, setDOB] = useState('');
  const [sex, setSex] = useState('');
  const [status, setStatus] = useState('');
  const [race, setRace] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  

  //fetch Patient Data
  const CollectData = async () => {
    // let response = await fetch(`http://flip3.engr.oregonstate.edu:44265/FindPatient/${patientID}`)
    let response = await fetch(`http://flip1.engr.oregonstate.edu:44265/FindPatient/${patientID}`)
    response = await response.json();
    
    if(response){
      setFirstName(response[0].FirstName)
      setMiddleName(response[0].MiddleName)
      setLastName(response[0].LastName)
      setDOB(response[0].DOB.slice(0,4)+'-'+response[0].DOB.slice(5,7)+'-'+response[0].DOB.slice(8,10))
      setSex(response[0].Sex)
      setStatus(response[0].ActiveStatus)
      setRace(response[0].Race)
      setEthnicity(response[0].Ethnicity)
    }
  }

  // Patient Data will fetch once upon page mount
  useEffect(() => {
    CollectData()
  }, [])
  

  //OnClick handler to submit changes
  const modifyHandler = (e) => {
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

    // fetch(`http://flip3.engr.oregonstate.edu:44265/EditPatient/${patientID}`, {
    fetch(`http://flip1.engr.oregonstate.edu:44265/EditPatient/${patientID}`, {
        method: 'PUT',
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

      window.alert("Edit complete. You will now be routed back to the main page")
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

        <h1>Edit Patient</h1>
        <br></br>


      <form className="row g-3" onSubmit={modifyHandler}>

        <div className="col-md-3">
          <label for="patientID" className="form-label">PatientID <b>(required)</b></label>
          <input value={patientID} type="text" className="form-control" id="patientID" disabled/>
        </div>

        <div className="col-md-3">
          <label for="firstName" className="form-label">First Name <b>(required)</b></label>
          <input value={firstName} type="text" className="form-control" id="firstName" required onChange={event => setFirstName(event.target.value)}/>
        </div>

        <div className="col-md-3">
          <label for="middleName" className="form-label">Middle Name</label>
          <input value={middleName} type="text" className="form-control" id="middleName"  onChange={event => setMiddleName(event.target.value)}/>
        </div>

        <div className="col-md-3">
          <label for="lastName" className="form-label">Last Name <b>(required)</b></label>
          <input value={lastName} type="text" className="form-control" id="lastName" required onChange={event => setLastName(event.target.value)}/>
        </div>

        <div className="col-md-4">
          <label for="dob" className="form-label">Date of Birth <b>(required)</b></label>
          <input value={DOB} type="date" className="form-control" id="dob" required onChange={event => setDOB(event.target.value)}/>
        </div>

        <div className="col-md-4">
          <label for="sex" className="form-label">Sex</label>
          <select id="sex" className="form-select" onChange={event => setSex(event.target.value)}>
            <option selected disabled>{sex}</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            <option>Unknown</option>
          </select>
        </div>

        <div className="col-md-4">
          <label for="status" className="form-label">Status <b>(required)</b></label>
          <select id="status" className="form-select" required onChange={event => setStatus(event.target.value)} >
            <option selected disabled>{status}</option>
            <option>Alive</option>
            <option>Deceased</option>
            <option>Unknown</option>
          </select>
        </div>


        <div className="col-md-3">
          <label for="race" className="form-label">Race</label>
          <select id="race" className="form-select" onChange={event => setRace(event.target.value)} >
            <option selected disabled>{race}</option>
            <option>American Indian or Alaska Native</option>
            <option>Asian</option>
            <option>Black or African American</option>
            <option>Native Hawaiian or Other Pacific Islander</option>
            <option>White</option>
            <option>Other Race</option>
            <option>Unknown</option>
          </select>
        </div>

        <div className="col-md-3">
          <label for="ethnicity" className="form-label">Ethnicity</label>
          <select id="ethnicity" className="form-select" onChange={event => setEthnicity(event.target.value)} >
            <option selected disabled>{ethnicity}</option>
            <option>Hispanic or Latino</option>
            <option>Not Hispanic or Latino</option>
            <option>Unknown</option>
          </select>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>

      </form>
  </div>
  )
}

export default EditPatient









