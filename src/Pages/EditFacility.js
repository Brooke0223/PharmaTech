import { useNavigate } from "react-router-dom"
import { React, useState, useEffect } from 'react'

// const ENDPOINT = 'http://localhost:44265'
const ENDPOINT = 'http://flip1.engr.oregonstate.edu:44265'


function EditFacility() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  //capture facilityID of the facility to edit from the URL
  const facilityID = window.location.href.split('editFacility/')[1]; 
  
  const [facilityName, setFacilityName] = useState('');
  const [facilityType, setFacilityType] = useState('');
  const [facilityAddress, setFacilityAddress] = useState('');
  const [facilityCity, setFacilityCity] = useState('');
  const [facilityState, setFacilityState] = useState('');
  const [facilityZip, setFacilityZip] = useState('');
  

  //fetch Facility Data
  const CollectData = async () => {
    let response = await fetch(`${ENDPOINT}/FindFacility/${facilityID}`)
    // let response = await fetch(`http://flip1.engr.oregonstate.edu:44265/FindFacility/${facilityID}`)
    response = await response.json();
    
    if(response){
      setFacilityName(response[0].FacilityName)
      setFacilityType(response[0].FacilityType)
      setFacilityAddress(response[0].AddressStreet)
      setFacilityCity(response[0].AddressCity)
      setFacilityState(response[0].AddressState)
      setFacilityZip(response[0].AddressZip)
    }
  }

  // Contact Data will fetch once upon page mount
  useEffect(() => {
    CollectData()
  }, [])


  // data-validator for zipcode input
  const zipValidator = (e) => {
  const value = e.target.value.replace(/\D/g, "");
  setFacilityZip(value.slice(0,5));
  };
  

  //OnClick handler to submit changes
  const modifyHandler = (e) => {
    e.preventDefault();


      // validate zipcode length before submitting
      if(facilityZip.toString().length !== 5 && facilityZip.toString().length !== 0){
        alert("Please enter a valid 5-digit zip code")
        return
      }

    //send PUT request to server to modify the specified facility
    fetch(`${ENDPOINT}/EditFacility/${facilityID}`, {
    // fetch(`http://flip1.engr.oregonstate.edu:44265/EditFacility/${facilityID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Name: facilityName,  
            Type: facilityType,
            Address: facilityAddress,
            City: facilityCity,
            State: facilityState,
            Zip: facilityZip,
        })
      })
      .then(res => res.json())
      .then(json => console.log(json));

      window.alert("Edit complete. You will now be routed back to the Facilities page")
      navigate("/PharmaTech/viewFacility")
    }
  
  
  return (

  
    <div className="container">

    <ul className="nav nav-tabs">
        <li className="nav-link" onClick={event => navigate("/PharmaTech/viewFacility")}>
            View Facilities
        </li>

        <li className="nav-link" onClick={event => navigate("/PharmaTech/searchFacility")}>
            Search Facilities
        </li>

        <li className="nav-link" onClick={event => navigate("/PharmaTech/addFacility")}>
            Add Facility
        </li>
    </ul>

    <h1>Edit Facility</h1>
    <br></br>


      <form className="row g-3" onSubmit={modifyHandler}>

        <div className="col-md-3">
          <label for="facilityID" className="form-label">FacilityID <b>(required)</b> </label>
          <input value={facilityID} type="text" className="form-control" id="facilityID" disabled/>
        </div>

        <div className="col-md-5">
          <label for="facilityName" className="form-label">Name <b>(required)</b> </label>
          <input value={facilityName} type="text" className="form-control" id="facilityName" onChange={event => setFacilityName(event.target.value)}/>
        </div>

        <div className="col-md-4">
          <label for="facilityType" className="form-label">Type <b>(required)</b> </label>
          <select id="facilityType" className="form-select" value={facilityType} onChange={event => setFacilityType(event.target.value)}>
            <option value="" disabled>Select</option>
            <option value="Hospital">Hospital</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Walk-In Clinic">Walk-In Clinic</option>
            <option value="Primary Care Clinic">Primary Care Clinic</option>
            <option value="Other Medical Practice">Other Medical Practice</option>
          </select>
        </div>

        <div className="col-md-12">
          <label for="facilityAddress" className="form-label">Address <b>(required)</b> </label>
          <input value={facilityAddress} type="text" className="form-control" id="facilityAddress" onChange={event => setFacilityAddress(event.target.value)}/>
        </div>

        <div className="col-md-5">
          <label for="facilityCity" className="form-label">City <b>(required)</b> </label>
          <input value={facilityCity} type="text" className="form-control" id="facilityCity"  onChange={event => setFacilityCity(event.target.value)}/>
        </div>

        <div className="col-md-3">
          <label for="facilityState" className="form-label">State <b>(required)</b> </label>
          <select id="facilityState" className="form-select" value={facilityState} onChange={event => setFacilityState(event.target.value)} >
          <option value="" disabled>Select</option>
          <option> </option>
          <option>AL</option>
          <option>AK</option>
          <option>AZ</option>
          <option>AR</option>
          <option>AS</option>
          <option>CA</option>
          <option>CO</option>
          <option>CT</option>
          <option>DE</option>
          <option>DC</option>
          <option>FL</option>
          <option>GA</option>
          <option>GU</option>
          <option>HI</option>
          <option>ID</option>
          <option>IL</option>
          <option>IN</option>
          <option>IA</option>
          <option>KS</option>

          <option>KY</option>
          <option>LA</option>
          <option>ME</option>
          <option>MD</option>
          <option>MA</option>
          <option>MI</option>
          <option>MN</option>
          <option>MS</option>
          <option>MO</option>
          <option>MT</option>
          <option>NE</option>
          <option>NV</option>
          <option>NH</option>
          <option>NJ</option>
          <option>NM</option>
          <option>NY</option>
          <option>NC</option>
          <option>ND</option>
          <option>NM</option>

          <option>OH</option>
          <option>OK</option>
          <option>OR</option>
          <option>PA</option>
          <option>PR</option>
          <option>RI</option>
          <option>SC</option>
          <option>SD</option>
          <option>TN</option>
          <option>TX</option>
          <option>TT</option>
          <option>UT</option>
          <option>VT</option>
          <option>VA</option>
          <option>VI</option>
          <option>WA</option>
          <option>WV</option>
          <option>WI</option>
          <option>WY</option>
        </select>
        </div>

        <div className="col-md-4">
          <label for="facilityZip" className="form-label">Zip <b>(required)</b> </label>
          <input value={facilityZip} type="text" className="form-control" id="facilityZip" onChange={zipValidator}/>
        </div>


        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>

      </form>
  </div>
  )
}

export default EditFacility










