import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from '../endpoint-config';

function ViewProductFacility() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [products, setProducts] = useState('');

  // fetch ProductFacility Data once upon page mount
  useEffect(() => {
    fetch(`${ENDPOINT}/ViewProductFacility`)
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
   
//OnClick handler to modify a product/facility
const modifyHandler = (ProductsFacilitiesID) => {
  navigate("/PharmaTech/editProductFacility/"+ProductsFacilitiesID)
}

  //OnClick handler to delete a product from a facility 
  const deleteHandler = (ProductsFacilitiesID) => {
    if (window.confirm(`Are you sure you want to delete this product/facility id: ${ProductsFacilitiesID}?`)) {

      //send DELETE request to server and refresh page
      fetch(`${ENDPOINT}/DeleteProductFacility/${ProductsFacilitiesID}`, {
        method: 'DELETE',
      })
      .then(res => res.text())
      .then(res => console.log(res))
      window.location.reload();
    }
  }


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
    <th scope="col">Product (ID - Name)</th>
    <th scope="col">Facility (ID - Name)</th>
    <th scope="col">Dose Quantity</th>
    <th scope="col">Expiration</th>
    <th scope="col">Modify</th>
    <th scope="col">Delete</th>
  </tr>
</thead>

{Array.isArray(products) && products.map((product, index) => {
            return (
              <tbody>
                  <tr key={product.ProductsFacilitiesID}>
                    <td>{product.ProductsFacilitiesID}</td>
                    <td>{product.ProductID} - {product.ProductType}</td>
                    <td>{product.FacilityID} - {product.FacilityName}</td>
                    <td>{product.DoseQty}</td>
                    <td>{product.Expiration.slice(0, 10)}</td>
                    <td className="modify" onClick={() => modifyHandler(product.ProductsFacilitiesID)}>⨁</td>
                    <td className="delete" onClick={() => deleteHandler(product.ProductsFacilitiesID)}>⨂</td>
                  </tr>
              </tbody>
            );
          })}

</table>
</div>

)
}

export default ViewProductFacility
