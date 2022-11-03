import React from 'react'
import { useNavigate } from "react-router-dom"

function AddProviderFacility() {
    let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

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

            <li className="nav-link" onClick={event => navigate("/PharmaTech/viewProviderFacility")}>
                View Providers' Facilities
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/addProviderFacility")}>
                Add Providers' Facilities
            </li>
        </ul>

    <h1>Add Provider to a Facility</h1>

    <form className="row g-3">


  <div className="col-md-6">
    <label for="providerID" className="form-label">Provider ID</label>
    <select id="providerID" className="form-select" required >
      <option disabled selected>Select</option>
      <option>1 - Rebecca Mitchell</option>
      <option>2 - Timothy Vanleer</option>
      <option>3  Edward Lemus</option>
    </select>
  </div>

  <div className="col-md-6">
    <label for="facilityID" className="form-label">Facility ID</label>
    <select id="facilityID" className="form-select" required >
      <option disabled selected>Select</option>
      <option>1 - Spectrum Health</option>
      <option>2 - Walgreens</option>
      <option>3 - WellNow</option>
      <option>4 - Oak Street Health</option>
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

export default AddProviderFacility