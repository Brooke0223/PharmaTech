import React from 'react'
import { useNavigate } from "react-router-dom"

function AddProvider() {
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

    <h1>Add A New Provider</h1>

    <form className="row g-3">

  <div className="col-md-6">
    <label for="firstName" className="form-label">First Name <b>(required)</b></label>
    <input type="text" className="form-control" id="firstName" required />
  </div>

  <div className="col-md-6">
    <label for="lastName" className="form-label">Last Name <b>(required)</b></label>
    <input type="text" className="form-control" id="lastName" required />
  </div>

  <div className="col-md-6">
    <label for="NPI" className="form-label">NPI</label>
    <input type="text" className="form-control" id="NPI" />
  </div>

  <div className="col-md-6">
    <label for="designation" className="form-label">Designation <b>(required)</b></label>
    <select id="designation" className="form-select" required >
      <option value="" disabled selected>Select</option>
      <option>Physician</option>
      <option>Physician Associate</option>
      <option>Pharmacist</option>
      <option>Advanced Practice Registered Nurse</option>
      <option>Registered Nurse</option>
      <option>Licensed Practical Nurse</option>
      <option>Paramedic</option>
      <option>Other</option>
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