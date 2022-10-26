import React from 'react'

function ViewEvent() {
  return (
    <div>
      <h1>Event Search Results</h1>
      <br></br>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Event ID</th>
      <th scope="col">Patient ID</th>
      <th scope="col">Event Type</th>
      <th scope="col">Event Date</th>
      <th scope="col">Submission Date</th>
      <th scope="col">Product ID</th>
      <th scope="col">Administration Site</th>
      <th scope="col">Administration Route</th>
      <th scope="col">Provider ID</th>
      <th scope="col">Facility ID</th>
      <th scope="col">Notes</th>
      <th scope="col">Modify</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>1</td>
      <td>Administration</td>
      <td>2022-10-17</td>
      <td>2022-10-17</td>
      <td>2</td>
      <td>Left Arm</td>
      <td>Intramuscular</td>
      <td>1</td>
      <td>1</td>
      <td>Null</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>1</td>
      <td>Administration</td>
      <td>2021-2-17</td>
      <td>2021-2-17</td>
      <td>1</td>
      <td>Right Arm</td>
      <td>Intramuscular</td>
      <td>1</td>
      <td>1</td>
      <td>Null</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
  </tbody>
</table>
</div>

  )
}

export default ViewEvent