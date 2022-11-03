import React from 'react'
import { useNavigate } from "react-router-dom"

function ViewProduct() {
    let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  return (
    <div className="container">
        <ul className="nav nav-tabs">
            <li className="nav-link" onClick={event => navigate("/PharmaTech/viewProduct")}>
                View Products
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/searchProduct")}>
                Search Products
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/addReceivedProduct")}>
                Receive Product Shipment
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/addProduct")}>
                Add A New Product
            </li>
        </ul>


      <h1>View Products</h1>
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
      <td>Tdap</td>
      <td><i>Null</i></td>
      <td><i>Null</i></td>
      <td><i>Null</i></td>
      <td><i>Null</i></td>
      <td><i>Null</i></td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">2</th>
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
      <th scope="row">3</th>
      <td>Zoster</td>
      <td>58160081912</td>
      <td>4ZYUYGL3</td>
      <td>2022-09-30</td>
      <td>0.5</td>
      <td>mL</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">4</th>
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