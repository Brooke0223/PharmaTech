import React from 'react'

function ViewProvider() {
  return (
    <div>
      <h1>Provider Search Results</h1>
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