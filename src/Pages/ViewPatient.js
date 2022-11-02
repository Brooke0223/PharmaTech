import { useNavigate } from "react-router-dom"
import React from 'react'

function ViewPatient() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  return (
    
    <div className="container">
    <ul className="nav nav-tabs">
        <li className="nav-link" onClick={event => navigate("/PharmaTech/ViewPatient")}>
            View Patients
        </li>

        <li className="nav-link" onClick={event => navigate("/PharmaTech/searchPatient")}>
            Search Patients
        </li>

        <li className="nav-link" onClick={event => navigate("/PharmaTech/addPatient")}>
            Add Patient
        </li>
    </ul>

      <h1>View Patients</h1>
      <br></br>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Patient ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Middle Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">DOB</th>
      <th scope="col">Sex</th>
      <th scope="col">Race</th>
      <th scope="col">Ethnicity</th>
      <th scope="col">Active Status</th>
      <th scope="col">Modify</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Jennie</td>
      <td>Elizabeth</td>
      <td>Nichols</td>
      <td>1992-03-08</td>
      <td>F</td>
      <td>White</td>
      <td>Not Hispanic or Latino</td>
      <td>Alive</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Max</td>
      <td><i>NULL</i></td>
      <td>Tucker</td>
      <td>2015-09-05</td>
      <td>M</td>
      <td>Other Race</td>
      <td>Hispanic or Latino</td>
      <td>Alive</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Calvin</td>
      <td>James</td>
      <td>Hudson</td>
      <td>1950-11-07</td>
      <td>M</td>
      <td>Black or African American</td>
      <td>Not Hispanic or Latino</td>
      <td>Alive</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
  </tbody>
</table>
</div>

  )
}

export default ViewPatient