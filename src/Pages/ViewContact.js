import { useNavigate } from "react-router-dom"
import React from 'react'

function ViewContact() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  return (
    
    <div className="container">
    <ul className="nav nav-tabs">
        <li className="nav-link" onClick={event => navigate("/PharmaTech/viewContact")}>
            View Contacts
        </li>

        <li className="nav-link" onClick={event => navigate("/PharmaTech/addContact")}>
            Add Contacts
        </li>
    </ul>

      <h1>View Contacts</h1>
      <p><i>Note: Contacts may be added to a patient as needed, including multiple contacts for a single patient (e.g. in the case of adding two parents for a minor child).</i></p>
      <br></br>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Contact ID</th>
      <th scope="col">Patient ID</th>
      <th scope="col">Phone</th>
      <th scope="col">Phone Type</th>
      <th scope="col">Phone Opt</th>
      <th scope="col">Email</th>
      <th scope="col">Email Opt</th>
      <th scope="col">Street</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Zip</th>
      <th scope="col">Mail Opt</th>
      <th scope="col">Modify</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>1</td>
      <td>2134568967</td>
      <td>M</td>
      <td>Yes</td>
      <td>jennie.nichols@email.com</td>
      <td>Yes</td>
      <td>8929 Valwood Parkway</td>
      <td>Billings</td>
      <td>MI</td>
      <td>63104</td>
      <td>Yes</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>2</td>
      <td>2024922486</td>
      <td>M</td>
      <td>Yes</td>
      <td>alice.tucker@example.com</td>
      <td>Yes</td>
      <td>4265 Beach St.</td>
      <td>Harahan</td>
      <td>LA</td>
      <td>70123</td>
      <td>Yes</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>2</td>
      <td>2129177535</td>
      <td>M</td>
      <td>Yes</td>
      <td>robert.tucker@example.com</td>
      <td>Yes</td>
      <td>3406 W Sherman Drive</td>
      <td>Harahan</td>
      <td>LA</td>
      <td>70123</td>
      <td>Yes</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>3</td>
      <td>2109736773</td>
      <td>M</td>
      <td>No</td>
      <td>calvin.hudson@example.com</td>
      <td>No</td>
      <td>1231 Spring Haven Trail</td>
      <td>East Orange</td>
      <td>NJ</td>
      <td>70170</td>
      <td>Yes</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
  </tbody>
</table>

  <br/>
  <br/>
  <br/>

</div>

  )
}

export default ViewContact