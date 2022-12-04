import React from 'react'
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from '../endpoint-config';

function AddProviderFacility() {
    let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

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

    <h1>Add Provider to a Facility</h1>

    <form className="row g-3">


  <div className="col-md-6">
    <label for="providerID" className="form-label">Provider ID <b>(required)</b></label>
    <select id="providerID" className="form-select" required >
      <option value="" disabled selected>Select</option>
      <option>1 - Rebecca Mitchell</option>
      <option>2 - Timothy Vanleer</option>
      <option>3  Edward Lemus</option>
    </select>
  </div>

  <div className="col-md-6">
    <label for="facilityID" className="form-label">Facility ID <b>(required)</b></label>
    <select id="facilityID" className="form-select" required >
      <option value="" disabled selected>Select</option>
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