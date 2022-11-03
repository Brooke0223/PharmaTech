import React from 'react'
import { useNavigate } from "react-router-dom"

function ViewProductFacility() {
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

            <li className="nav-link" onClick={event => navigate("/PharmaTech/addProduct")}>
                Add A New Product
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/viewProductFacility")}>
                View Products in Facilities
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/addProductFacility")}>
                Add Products to Facilities
            </li>
        </ul>


      <h1>View Facilities' Product Inventory</h1>
      <br></br>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Product Facility ID</th>
      <th scope="col">Product ID</th>
      <th scope="col">Facility ID</th>
      <th scope="col">Dose Quantity</th>
      <th scope="col">Expiration</th>
      <th scope="col">Modify</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>2</td>
      <td>1</td>
      <td>553</td>
      <td>2023-06-30</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>3</td>
      <td>1</td>
      <td>65</td>
      <td>2022-10-31</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>3</td>
      <td>2</td>
      <td>50</td>
      <td>2023-09-30</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>4</td>
      <td>2</td>
      <td>25</td>
      <td>2023-04-30</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>1</td>
      <td>3</td>
      <td>20</td>
      <td>2022-05-31</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>4</td>
      <td>4</td>
      <td>15</td>
      <td>2022-12-31</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
  </tbody>
</table>
</div>

  )
}

export default ViewProductFacility