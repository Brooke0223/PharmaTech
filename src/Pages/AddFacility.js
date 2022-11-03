import React from 'react'
import { useNavigate } from "react-router-dom"

function AddFacility() {
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
        </ul>

    <h1>Add A New Facility</h1>

    <form className="row g-3">

    <div className="col-md-6">
    <label for="facilityName" className="form-label">Name <b>(required)</b></label>
    <input type="text" className="form-control" id="facilityName" required />
  </div>

  <div className="col-md-6">
    <label for="designation" className="form-label">Type <b>(required)</b></label>
    <select id="designation" className="form-select" required >
      <option value="" disabled selected>Select</option>
      <option>Hospital</option>
      <option>Pharmacy</option>
      <option>Walk-In Clinic</option>
      <option>Primary Care Clinic</option>
      <option>Other Medical Practice</option>
    </select>
  </div>

  <div className="col-12">
    <label for="address" className="form-label">Address <b>(required)</b></label>
    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
  </div>

  <div className="col-md-6">
    <label for="city" className="form-label">City <b>(required)</b></label>
    <input type="text" className="form-control" id="city" required />
  </div>

  <div className="col-md-4">
    <label for="state" className="form-label">State <b>(required)</b></label>
    <select id="state" className="form-select" required>
      <option value="" disabled selected>Select</option>
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
      <option>CM</option>

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

  <div className="col-md-2">
    <label for="zipCode" className="form-label">Zip <b>(required)</b></label>
    <input type="text" className="form-control" id="zipCode" required />
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

export default AddFacility