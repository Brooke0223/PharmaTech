import React from 'react'
import { useNavigate } from "react-router-dom"

function AddProductFacility() {
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

    <h1>Add Product To Facility Inventory</h1>

    <form className="row g-3">

    <div className="col-md-6">
    <label for="productID" className="form-label">Product ID <b>(required)</b></label>
    <select id="productID" className="form-select" required >
      <option value="" disabled selected>Select</option>
      <option>1 - Tdap</option>
      <option>2 - Influenza</option>
      <option>3 - Zoster</option>
      <option>4 - Pneumococcal</option>
    </select>
  </div>

  <div className="col-md-6">
    <label for="FacilityID" className="form-label">Facility ID <b>(required)</b></label>
    <select id="FacilityID" className="form-select" required >
      <option value="" disabled selected>Select</option>
      <option>1 - Spectrum Health</option>
      <option>2 - Walgreens</option>
      <option>3 - Wellnow</option>
      <option>4 - Oak Street Health</option>
    </select>
  </div>

  <div className="col-md-6">
    <label for="doseQuantity" className="form-label">Dose Quantity <b>(required)</b></label>
    <input type="text" className="form-control" id="doseQuantity" placeholder="e.g. 550 individual doses"required/>
  </div>

  <div className="col-md-6">
          <label for="expiration" className="form-label">Expiration <b>(required)</b></label>
          <input type="date" className="form-control" id="expiration" required />
  </div>


  <div className="col-12">
    <button type="submit" className="btn btn-primary">Add</button>
  </div>
</form>

    <br/>
    <br/>
    <br/>

</div>
  )
}

export default AddProductFacility