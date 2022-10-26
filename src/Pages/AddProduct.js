import React from 'react'
import { useNavigate } from "react-router-dom"

function AddProduct() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  return (
    <div className="container">

    <ul className="nav nav-tabs">
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

    <h1>Add A New Product</h1>

    <form className="row g-3">

<div className="col-md-6">
<label for="productType" className="form-label">Type</label>
<select id="productType" className="form-select" required >
  <option disabled selected>...</option>
  <option>Covid-19 (Jannssen)</option>
  <option>Covid-19 (Novavax)</option>
  <option>Covid-19 (Pfizer)</option>
  <option>Covid-19 (Moderna)</option>
  <option>Influenza</option>
  <option>Influenza (Adult)</option>
  <option>Zoster RZV (Shingrix)</option>
  <option>Zoster ZVL (Zostavax)</option>
</select>
</div>

<div className="col-md-6">
<label for="NDC" className="form-label">NDC</label>
<input type="text" className="form-control" id="NDC" placeholder="00000-0000-00" required />
</div>

<div className="col-md-6">
<label for="lotNumber" className="form-label">Lot Number</label>
<input type="text" className="form-control" id="lotNumber" required />
</div>

<div className="col-md-6">
          <label for="expiration" className="form-label">Expiration</label>
          <input type="date" className="form-control" id="expiration" required />
</div>

<div className="col-md-6">
<label for="doseVolume" className="form-label">Dose Volume</label>
<input type="text" className="form-control" id="doseVolume" placeholder="0.5" required />
</div>

<div className="col-md-6">
<label for="doseUnit" className="form-label">Dose Unit</label>
<input type="text" className="form-control" id="doseUnit" placeholder="mL" required />
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

export default AddProduct