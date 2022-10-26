import React from 'react'
import { useNavigate } from "react-router-dom"

function AddProvider() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  return (
    <div className="container">

    <ul className="nav nav-tabs">
            <li className="nav-link" onClick={event => navigate("/PharmaTech/searchProvider")}>
                Search Providers
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/addProvider")}>
                Add Provider
            </li>
    </ul>

    <h1>Add A New Provider</h1>

    <form className="row g-3">

  <div className="col-md-6">
    <label for="firstName" className="form-label">First Name</label>
    <input type="text" className="form-control" id="firstName" required />
  </div>

  <div className="col-md-6">
    <label for="lastName" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lastName" required />
  </div>

  <div className="col-md-12">
    <label for="designation" className="form-label">Designation</label>
    <select id="designation" className="form-select" >
      <option disabled selected>...</option>
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

  <div className="col-md-6">
    <label for="providerID" className="form-label">Provider ID</label>
    <input type="text" className="form-control" id="providerID" />
  </div>

  <div className="col-md-6">
    <label for="NPI" className="form-label">NPI</label>
    <input type="text" className="form-control" id="NPI" />
  </div>

  <div className="col-md-6">
    <label for="city" className="form-label">City</label>
    <input type="text" className="form-control" id="city" />
  </div>

  <div className="col-md-6">
  <label for="state" className="form-label">State</label>
    <select id="state" className="form-select" >
      <option disabled selected>...</option>
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