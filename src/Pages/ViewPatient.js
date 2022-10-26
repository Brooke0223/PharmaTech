import React from 'react'

function ViewPatient() {
  return (
    <div>
      <h1>Patient Search Results</h1>
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
      <td>Yes</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jennie</td>
      <td>Thornton</td>
      <td>Nichols</td>
      <td>1992-03-08</td>
      <td>F</td>
      <td>Black or African American</td>
      <td>Not Hispanic or Latino</td>
      <td>Yes</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
  </tbody>
</table>
</div>

  )
}

export default ViewPatient