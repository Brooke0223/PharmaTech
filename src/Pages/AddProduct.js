import { React, useState } from 'react'
import { useNavigate } from "react-router-dom"

// const ENDPOINT = 'http://localhost:44265'
const ENDPOINT = 'http://flip1.engr.oregonstate.edu:44265'

function AddProduct() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [productType, setProductType] = useState('');
  const [NDC, setNDC] = useState('');
  const [lot, setLot] = useState('');
  const [expiration, setExpiration] = useState('');
  const [doseVolume, setDoseVolume] = useState('');
  const [doseUnit, setDoseUnit] = useState('');

  //onSubmit handler to add a new product
  const addProduct = (e) => {
    e.preventDefault();


    fetch(`${ENDPOINT}/AddProduct`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ProductType: productType,
        NDC: NDC,
        Lot: lot,
        Expiration: expiration,
        DoseVolume: doseVolume,
        DoseUnit: doseUnit,
      })
    })
    .then(res => res.json())
    .then(json => console.log(json));

    window.alert("Product added. You will now be routed back to the main Products page")
    navigate("/PharmaTech/ViewProduct")
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

    <h1>Add A New Product</h1>

    <form className="row g-3" onSubmit={addProduct}>

<div className="col-md-6">
  <label for="productType" className="form-label">Type <b>(required)</b></label>
  <select id="productType" className="form-select" value={productType} required onChange={event => setProductType(event.target.value)}>
    <option value="" disabled >Select</option>
    <option value="Covid-19 (Jannssen)">Covid-19 (Jannssen)</option>
    <option value="Covid-19 (Novavax)">Covid-19 (Novavax)</option>
    <option value="Covid-19 (Pfizer)">Covid-19 (Pfizer)</option>
    <option value="Covid-19 (Moderna)">Covid-19 (Moderna)</option>
    <option value="Influenza">Influenza</option>
    <option value="Influenza (Adult)">Influenza (Adult)</option>
    <option value="Zoster RZV (Shingrix)">Zoster RZV (Shingrix)</option>
    <option value="Zoster ZVL (Zostavax)">Zoster ZVL (Zostavax)</option>
  </select>
</div>

<div className="col-md-6">
  <label for="NDC" className="form-label">NDC</label>
  <input value={NDC} type="text" pattern='\d{11}' title="11 digit number with no special characters or spaces" className="form-control" id="NDC" placeholder="00000-0000-00" onChange={event => setNDC(event.target.value)}/>
</div>

<div className="col-md-6">
  <label for="lot" className="form-label">Lot</label>
  <input value={lot} type="text" className="form-control" id="lot" onChange={event => setLot(event.target.value)}/>
</div>

<div className="col-md-6">
  <label for="expiration" className="form-label">Expiration</label>
  <input value={expiration} type="date" className="form-control" id="expiration" onChange={event => setExpiration(event.target.value)}/>
</div>

<div className="col-md-6">
  <label for="doseVolume" className="form-label">Dose Volume</label>
  <input value={doseVolume} type="text" className="form-control" id="doseVolume" placeholder="0.5" onChange={event => setDoseVolume(event.target.value)}/>
</div>

<div className="col-md-6">
  <label for="doseUnit" className="form-label">Dose Unit</label>
  <input type="text" className="form-control" id="doseUnit" placeholder="mL" onChange={event => setDoseUnit(event.target.value)}/>
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
