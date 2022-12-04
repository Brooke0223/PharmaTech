import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from '../endpoint-config';

function ViewProduct() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [products, setProducts] = useState('');

  // fetch Product Data once upon page mount
  useEffect(() => {
    fetch(`${ENDPOINT}/ViewProduct`)
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
 

  //OnClick handler to modify a product
  const modifyHandler = (productID) => {
    navigate("/PharmaTech/editProduct/"+productID)
  }

  //OnClick handler to delete a product
  const deleteHandler = (productID) => {
    if (window.confirm(`Are you sure you want to delete the product with the id: ${productID}?`)) {

      //send DELETE request to server and refresh page
      fetch(`${ENDPOINT}/DeleteProduct/${productID}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        if(json.errno && json.errno === 1451){
          window.alert("Unable to delete Product with associated immunization event(s) or facility/facilities.")
        }else{
          window.location.reload();
        }
    })
  }}

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

{Array.isArray(products) && products.map((product, index) => {
            return (
              <tbody>
                  <tr key={product.ProductID}>
                    <td>{product.ProductID}</td>
                    <td>{product.ProductType}</td>
                    <td>{product.NDC !== 0 ? product.NDC : ''}</td>
                    <td>{product.Lot !== 0 ? product.Lot : ''}</td>
                    <td>{product.Expiration !== '0000-00-00' ? product.Expiration.slice(0, 10) : ''}</td>
                    <td>{product.DoseVolume !== 0 ? product.DoseVolume : ''}</td>
                    <td>{product.DoseUnit}</td>
                    <td className="modify" onClick={() => modifyHandler(product.ProductID)}>⨁</td>
                    <td className="delete" onClick={() => deleteHandler(product.ProductID)}>⨂</td>
                  </tr>
              </tbody>
            );
          })}

</table>
</div>

)
}

export default ViewProduct
