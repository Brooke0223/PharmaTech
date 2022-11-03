import React from 'react'
import { useNavigate } from "react-router-dom"

function ViewFacility() {
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

      <h1>View Facilities</h1>
      <br></br>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Facility ID</th>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Zip Code</th>
      <th scope="col">Modify</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Spectrum Health</td>
      <td>Hospital</td>
      <td>3712 Robinson Court</td>
      <td>Saginaw</td>
      <td>MI</td>
      <td>48607</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Walgreens</td>
      <td>Pharmacy</td>
      <td>3367 Main Street</td>
      <td>Sunnyvale</td>
      <td>CA</td>
      <td>94086</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>WellNow</td>
      <td>Urgent Care</td>
      <td>833 Pearlman Avenue</td>
      <td>St Louis</td>
      <td>MO</td>
      <td>63101</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Oak Street Health</td>
      <td>Walk-In Clinic</td>
      <td>1983 Tennessee Avenue</td>
      <td>Detroit</td>
      <td>MI</td>
      <td>48226</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
  </tbody>
</table>
</div>

  )
}

export default ViewFacility