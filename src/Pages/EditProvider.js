import { useNavigate } from "react-router-dom"
import { React, useState, useEffect } from 'react'

const ENDPOINT = 'http://localhost:44265'
// const ENDPOINT = 'http://flip1.engr.oregonstate.edu:44265'


function EditProvider() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  //capture providerID of the provider to edit from the URL
  const providerID = window.location.href.split('editProvider/')[1]; 
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [NPI, setNPI] = useState('');
  const [designation, setDesignation] = useState('');
  

  //fetch Provider Data
  const CollectData = async () => {
    let response = await fetch(`${ENDPOINT}/FindProvider/${providerID}`)
    // let response = await fetch(`http://flip1.engr.oregonstate.edu:44265/FindProvider/${providerID}`)
    response = await response.json();
    
    if(response){
      setFirstName(response[0].FirstName)
      setLastName(response[0].LastName)
      setNPI(response[0].NPI)
      setDesignation(response[0].Designation)
    }
  }

  // Provider Data will fetch once upon page mount
  useEffect(() => {
    CollectData()
  }, [])
  

  //OnClick handler to submit changes
  const modifyHandler = (e) => {
    e.preventDefault();

    //send PUT request to server to modify the specified provider
    fetch(`${ENDPOINT}/EditProvider/${providerID}`, {
    // fetch(`http://flip1.engr.oregonstate.edu:44265/EditProvider/${providerID}`, {
        method: 'PUT',
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

      window.alert("Edit complete. You will now be routed back to the Providers page")
      navigate("/PharmaTech/viewProvider")
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

    <h1>Edit Provider</h1>
    <br></br>


      <form className="row g-3" onSubmit={modifyHandler}>

        <div className="col-md-2">
          <label for="providerID" className="form-label">ProviderID <b>(required)</b> </label>
          <input value={providerID} type="text" className="form-control" id="providerID" disabled/>
        </div>

        <div className="col-md-5">
          <label for="firstName" className="form-label">First Name <b>(required)</b> </label>
          <input value={firstName} type="text" className="form-control" id="firstName" onChange={event => setFirstName(event.target.value)}/>
        </div>

        <div className="col-md-5">
          <label for="lastName" className="form-label">Last Name <b>(required)</b></label>
          <input value={lastName} type="text" className="form-control" id="lastName" required onChange={event => setLastName(event.target.value)}/>
        </div>

        <div className="col-md-4">
          <label for="NPI" className="form-label">NPI</label>
          <input value={NPI !== 0 ? NPI : ''} type="text" className="form-control" id="NPI" onChange={event => setNPI(event.target.value)}/>
        </div>

        <div className="col-md-6">
          <label for="designation" className="form-label">Designation <b>(required)</b></label>
          <select id="designation" className="form-select" value={designation} required onChange={event => setDesignation(event.target.value)} >
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
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>

      </form>
  </div>
  )
}

export default EditProvider






