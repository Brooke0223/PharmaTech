import React from 'react'
import { useNavigate } from "react-router-dom"

function ViewProviderFacility() {
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

      <h1>View Facilities Associated With a Provider</h1>
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