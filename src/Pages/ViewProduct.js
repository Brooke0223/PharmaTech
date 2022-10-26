import React from 'react'

function ViewProduct() {
  return (
    <div>
      <h1>Product Search Results</h1>
      <br></br>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Product ID</th>
      <th scope="col">Product Type</th>
      <th scope="col">NDC</th>
      <th scope="col">Lot</th>
      <th scope="col">Expiration</th>
      <th scope="col">Dose Volume</th>
      <th scope="col">Dose Unit</th>
      <th scope="col">Modify</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Influenza</td>
      <td>49281042210</td>
      <td>UI975AB</td>
      <td>2023-06-30</td>
      <td>0.5</td>
      <td>mL</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Pneumococcal</td>
      <td>0005200001</td>
      <td>EHEBY352</td>
      <td>2022-05-31</td>
      <td>0.5</td>
      <td>mL</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
  </tbody>
</table>
</div>

  )
}

export default ViewProduct