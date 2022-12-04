import { useNavigate } from "react-router-dom"
import { React, useState, useEffect } from 'react'
import { ENDPOINT } from '../endpoint-config';

function EditProduct() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  //capture productID of the product to edit from the URL
  const productID = window.location.href.split('editProduct/')[1]; 

  const [productType, setProductType] = useState('');
  const [NDC, setNDC] = useState('');
  const [lot, setLot] = useState('');
  const [expiration, setExpiration] = useState('');
  const [doseVolume, setDoseVolume] = useState('');
  const [doseUnit, setDoseUnit] = useState('');
  

  //fetch Product Data
  const CollectData = async () => {
    let response = await fetch(`${ENDPOINT}/FindProduct/${productID}`)
    // let response = await fetch(`http://flip1.engr.oregonstate.edu:44265/FindProduct/${productID}`)
    response = await response.json();
    
    if(response){
      setProductType(response[0].ProductType)
      setNDC(response[0].NDC)
      setLot(response[0].Lot)
      setExpiration(response[0].Expiration.slice(0,4)+'-'+response[0].Expiration.slice(5,7)+'-'+response[0].Expiration.slice(8,10))
      setDoseVolume(response[0].DoseVolume)
      setDoseUnit(response[0].DoseUnit)
    }
  }

  // Product Data will fetch once upon page mount
  useEffect(() => {
    CollectData()
  }, [])
  

  //OnClick handler to submit changes
  const modifyHandler = (e) => {
    e.preventDefault();

    //send PUT request to server to modify the specified product
    fetch(`${ENDPOINT}/EditProduct/${productID}`, {
    // fetch(`http://flip1.engr.oregonstate.edu:44265/EditProduct/${productID}`, {
        method: 'PUT',
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

      window.alert("Edit complete. You will now be routed back to the Products page")
      navigate("/PharmaTech/viewProduct")
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

            <h1>Edit Product</h1>
            <br></br>


            <form className="row g-3" onSubmit={modifyHandler}>

            <div className="col-md-2">
                <label for="productID" className="form-label">ProductID <b>(required)</b> </label>
                <input value={productID} type="text" className="form-control" id="productID" disabled/>
            </div>

            <div className="col-md-5">
                <label for="productType" className="form-label">Product Type <b>(required)</b></label>
                <select id="productType" className="form-select" value={productType} required onChange={event => setProductType(event.target.value)}>
                    <option value="" disabled>Select</option>
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

            <div className="col-md-5">
                <label for="NDC" className="form-label">NDC</label>
                <input value={NDC !== 0 ? NDC : ''} type="text" className="form-control" id="NDC" placeholder="00000-0000-00" onChange={event => setNDC(event.target.value)} />
            </div>

            <div className="col-md-6">
                <label for="lot" className="form-label">Lot</label>
                <input value={lot} type="text" className="form-control" id="lot" onChange={event => setLot(event.target.value)} />
            </div>

            <div className="col-md-6">
                <label for="expiration" className="form-label">Expiration</label>
                <input value={expiration} type="date" className="form-control" id="expiration" onChange={event => setExpiration(event.target.value)} />
            </div>

            <div className="col-md-6">
                <label for="doseVolume" className="form-label">Dose Volume</label>
                <input value={doseVolume !== 0 ? doseVolume : ''} type="text" className="form-control" id="doseVolume" placeholder="0.5" onChange={event => setDoseVolume(event.target.value)} />
            </div>

            <div className="col-md-6">
                <label for="doseUnit" className="form-label">Dose Unit</label>
                <input value={doseUnit} type="text" className="form-control" id="doseUnit" placeholder="mL" onChange={event => setDoseUnit(event.target.value)} />
            </div>


            <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </form>
        </div>
  )
}

export default EditProduct