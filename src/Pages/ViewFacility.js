import React from 'react'

function ViewFacility() {
  return (
    <div>
      <h1>Facility Search Results</h1>
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
      <td>Walgreens</td>
      <td>Pharmacy</td>
      <td>3712 Robinson Court</td>
      <td>Sunnyvale</td>
      <td>CA</td>
      <td>94086</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Walgreens</td>
      <td>Pharmacy</td>
      <td>833 Pearlman Avenue</td>
      <td>Sunnyvale</td>
      <td>CA</td>
      <td>94086</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
  </tbody>
</table>
</div>

  )
}

export default ViewFacility