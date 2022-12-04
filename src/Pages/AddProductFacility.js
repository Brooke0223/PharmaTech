import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from '../endpoint-config';

function AddProductFacility() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [productID, setProductID] = useState('');
  const [facilityID, setFacilityID] = useState('');
  const [products, setProducts] = useState('');
  const [facilities, setFacilities] = useState('');
  const [doseQty, setDoseQty] = useState('');
  const [expiration, setExpiration] = useState('');

  //onSubmit handler to add a product to a facility
  const addProductFacility = (e) => {
    e.preventDefault();
  
    // send POST request to the server to add this product to facility
    fetch(`${ENDPOINT}/AddProductFacility`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ProductID: productID,
        FacilityID: facilityID,
        DoseQty: doseQty,
        Expiration: expiration,
      })
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      if(json.errno && json.errno === 1062){
        window.alert("A product with the provided expiration already exists for the selected facility. If you intend to modify the doses on hand, please do so via the View Products in Facilities page.")        
      }
      else{
        window.alert("Product added to facility. You will now be routed back to the View Products in Facilities page")
        navigate("/PharmaTech/ViewProductFacility") 
      }
    });                
    }
  

    //fetch Product Data upon page mount (will use ProductID and ProductType to assist with selection)
    useEffect(() => {
      fetch(`${ENDPOINT}/ViewProduct`)
      // fetch('http://flip1.engr.oregonstate.edu:44265/ViewPatient')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])
  
    //fetch Faclity Data upon page mount (will use FacilityID and FacilityName to assist with selection)
    useEffect(() => {
      fetch(`${ENDPOINT}/ViewFacility`)
      // fetch('http://flip1.engr.oregonstate.edu:44265/ViewPatient')
      .then(res => res.json())
      .then(data => setFacilities(data))
    }, [])



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

    <form className="row g-3" onSubmit={addProductFacility}>

  <div className="col-md-6">
  <label for="productID" className="form-label">Product ID <b>(required)</b></label>
  <select id="productID" className="form-select" value={productID} required onChange={event => setProductID(event.target.value)}>
    <option value="" disabled selected>Select</option>
    {Array.isArray(products) && products.map((product, index) => {
            return (
              <option value={product.ProductID} key={product.ProductID}>
                {`${product.ProductID} - ${product.ProductType}`}
              </option>
            );
          })}
  </select>
  </div>

  <div className="col-md-6">
    <label for="FacilityID" className="form-label">Facility ID <b>(required)</b></label>
    <select id="FacilityID" className="form-select" value={facilityID} required onChange={event => setFacilityID(event.target.value)}>
      <option value="" disabled selected>Select</option>
      {Array.isArray(facilities) && facilities.map((facility, index) => {
              return (
                <option value={facility.FacilityID} key={facility.FacilityID}>
                  {`${facility.FacilityID} - ${facility.FacilityName}`}
                </option>
              );
            })}
    </select>
  </div>

  <div className="col-md-6">
    <label for="doseQuantity" className="form-label">Dose Quantity <b>(required)</b></label>
    <input type="text" className="form-control" id="doseQuantity" placeholder="e.g. 550 individual doses" required onChange={event => setDoseQty(event.target.value)}/>
  </div>

  <div className="col-md-6">
          <label for="expiration" className="form-label">Expiration <b>(required)</b></label>
          <input type="date" className="form-control" id="expiration" required onChange={event => setExpiration(event.target.value)}/>
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