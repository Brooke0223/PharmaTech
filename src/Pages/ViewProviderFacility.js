import React from 'react'
import { useNavigate } from "react-router-dom"

function ViewProviderFacility() {
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

      <h1>View Providers Associated with a Facility</h1>
      <br></br>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Provider ID</th>
      <th scope="col">Facility ID</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>1</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>4</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>1</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>2</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>3</td>
      <td>⨂</td>
    </tr>
  </tbody>
</table>
</div>

  )
}

export default ViewProviderFacility