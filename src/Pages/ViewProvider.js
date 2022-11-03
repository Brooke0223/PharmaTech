import React from 'react'
import { useNavigate } from "react-router-dom"

function ViewProvider() {
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
        </ul>

      <h1>View Providers</h1>
      <br></br>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Provider ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">NPI</th>
      <th scope="col">Designation</th>
      <th scope="col">Modify</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Rebecca</td>
      <td>Mitchell</td>
      <td>1467586115</td>
      <td>Physician</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Rebecca</td>
      <td>Mitchell</td>
      <td>1367862067</td>
      <td>Pharmacist</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
  </tbody>
</table>
</div>

  )
}

export default ViewProvider