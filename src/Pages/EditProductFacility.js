import { useNavigate } from "react-router-dom"
import { React, useState, useEffect } from 'react'

const ENDPOINT = 'http://localhost:44265'
// const ENDPOINT = 'http://flip1.engr.oregonstate.edu:44265'


function EditProductFacility() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  //capture productsFacilitiesID of the product/facility to edit from the URL
  const productsFacilitiesID = window.location.href.split('editProductFacility/')[1]; 

  const [productID, setProductID] = useState('');
  const [productType, setProductType] = useState('');
  const [facilityID, setFacilityID] = useState('');
  const [facilityName, setFacilityName] = useState('');
  const [doseQty, setDoseQty] = useState('');
  const [expiration, setExpiration] = useState('');


  //fetch Product/Facility Data
  const CollectData = async () => {
    let response = await fetch(`${ENDPOINT}/FindProductFacility/${productsFacilitiesID}`)
    // let response = await fetch(`http://flip1.engr.oregonstate.edu:44265/FindProduct/${productsFacilitiesID}`)
    response = await response.json();
    
    if(response){
        setProductID(response[0].ProductID)
        setProductType(response[0].ProductType)
        setFacilityID(response[0].FacilityID)
        setFacilityName(response[0].FacilityName)
        setDoseQty(response[0].DoseQty)
        setExpiration(response[0].Expiration.slice(0,4)+'-'+response[0].Expiration.slice(5,7)+'-'+response[0].Expiration.slice(8,10))
    }
  }

  // Product/Facility Data will fetch once upon page mount
  useEffect(() => {
    CollectData()
  }, [])
  

  //OnClick handler to submit changes
  const modifyHandler = (e) => {
    e.preventDefault();

    //send PUT request to server to modify the specified product/facility
    fetch(`${ENDPOINT}/EditProductFacility/${productsFacilitiesID}`, {
    // fetch(`http://flip1.engr.oregonstate.edu:44265/EditProductFacility/${productsFacilitiesID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            DoseQty: doseQty,
            Expiration: expiration,
        })
      })
      .then(res => res.json())
      .then(json => console.log(json));

      window.alert("Edit complete. You will now be routed back to the View Facilities' Product Inventory page")
      navigate("/PharmaTech/viewProductFacility")
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

        <h1>Edit Facilities' Product Inventory</h1>
        <br></br>

        
        <form className="row g-3" onSubmit={modifyHandler}>

        <div className="col-md-2">
            <label for="productID" className="form-label">ProductID <b>(required)</b> </label>
            <input value={productID} type="text" className="form-control" id="productID" disabled/>
        </div>

        <div className="col-md-4">
            <label for="productType" className="form-label">Product Type </label>
            <input value={productType} type="text" className="form-control" id="productType" disabled/>
        </div>

        <div className="col-md-2">
            <label for="facilityID" className="form-label">FacilityID <b>(required)</b> </label>
            <input value={facilityID} type="text" className="form-control" id="facilityID" disabled/>
        </div>

        <div className="col-md-4">
            <label for="facilityName" className="form-label">Facility Name </label>
            <input value={facilityName} type="text" className="form-control" id="facilityName" disabled/>
        </div>

        <div className="col-md-6">
            <label for="doseQty" className="form-label">Dose Quantity <b>(required)</b> </label>
            <input value={doseQty} type="text" className="form-control" id="doseQty" required onChange={event => setDoseQty(event.target.value)} />
        </div>

        <div className="col-md-6">
            <label for="expiration" className="form-label">Expiration <b>(required)</b> </label>
            <input value={expiration} type="date" className="form-control" id="expiration" required onChange={event => setExpiration(event.target.value)} />
        </div>

        <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
        </div>

        </form>
        </div>
  )
}

export default EditProductFacility