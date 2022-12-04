import { React, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from '../endpoint-config';

function SearchProvider() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [NPI, setNPI] = useState('');
  const [designation, setDesignation] = useState('');
  const [facilityName, setFacilityName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  //If no matching provider is found, allow re-direct to add a new provider
  const submitHandler = (e) => {
    e.preventDefault(); //prevent page refresh

    if(firstName === "Rebecca" && lastName==="Mitchell"){
      navigate("/PharmaTech/viewProvider")
      return
    } 
      
    if (window.confirm("Provider not found. Would you like to add a new provider?")) {
        navigate("/PharmaTech/addProvider")
    }

  }


  return (
    <div className="container">

        <ul className="nav nav-tabs">
            <li className="nav-link" onClick={event => navigate("/PharmaTech/viewProvider")}>
                View Providers
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/searchProvider")}>
                Search Providers
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/addProvider")}>
                Add Provider
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/viewProviderFacility")}>
                View Providers' Facilities
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/addProviderFacility")}>
                Add Providers to Facilities
            </li>
         </ul>

    <h1>Search Providers</h1>

    <form className="row g-3" onSubmit={submitHandler}>

  <div className="col-md-6">
    <label for="firstName" className="form-label">First Name</label>
    <input type="text" className="form-control" id="firstName" onChange={event => setFirstName(event.target.value)} />
  </div>

  <div className="col-md-6">
    <label for="lastName" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lastName" onChange={event => setLastName(event.target.value)} />
  </div>

  <div className="col-md-12">
    <label for="designation" className="form-label">Designation</label>
    <select id="designation" className="form-select" onChange={event => setDesignation(event.target.value)} >
      <option disabled selected>...</option>
      <option>Physician</option>
      <option>Physician Associate</option>
      <option>Pharmacist</option>
      <option>Advanced Practice Registered Nurse</option>
      <option>Registered Nurse</option>
      <option>Licensed Practical Nurse</option>
      <option>Paramedic</option>
      <option>Other</option>
    </select>
  </div>

  <div className="col-md-6">
    <label for="NPI" className="form-label">NPI</label>
    <input type="text" className="form-control" id="NPI" onChange={event => setNPI(event.target.value)} />
  </div>

  <div className="col-md-6">
    <label for="FacilityName" className="form-label">Facility Name</label>
    <input type="text" className="form-control" id="FacilityName" onChange={event => setFacilityName(event.target.value)} />
  </div>

  <div className="col-md-6">
    <label for="city" className="form-label">City</label>
    <input type="text" className="form-control" id="city" onChange={event => setCity(event.target.value)} />
  </div>

  <div className="col-md-6">
  <label for="state" className="form-label">State</label>
    <select id="state" className="form-select" onChange={event => setState(event.target.value)} >
      <option disabled selected>...</option>
      <option>AL</option>
      <option>AK</option>
      <option>AZ</option>
      <option>AR</option>
      <option>AS</option>
      <option>CA</option>
      <option>CO</option>
      <option>CT</option>
      <option>DE</option>
      <option>DC</option>
      <option>FL</option>
      <option>GA</option>
      <option>GU</option>
      <option>HI</option>
      <option>ID</option>
      <option>IL</option>
      <option>IN</option>
      <option>IA</option>
      <option>KS</option>

      <option>KY</option>
      <option>LA</option>
      <option>ME</option>
      <option>MD</option>
      <option>MA</option>
      <option>MI</option>
      <option>MN</option>
      <option>MS</option>
      <option>MO</option>
      <option>MT</option>
      <option>NE</option>
      <option>NV</option>
      <option>NH</option>
      <option>NJ</option>
      <option>NM</option>
      <option>NY</option>
      <option>NC</option>
      <option>ND</option>
      <option>NM</option>

      <option>OH</option>
      <option>OK</option>
      <option>OR</option>
      <option>PA</option>
      <option>PR</option>
      <option>RI</option>
      <option>SC</option>
      <option>SD</option>
      <option>TN</option>
      <option>TX</option>
      <option>TT</option>
      <option>UT</option>
      <option>VT</option>
      <option>VA</option>
      <option>VI</option>
      <option>WA</option>
      <option>WV</option>
      <option>WI</option>
      <option>WY</option>
    </select>
  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Search</button>
  </div>
</form>

  <br/>
  <br/>
  <br/>

</div>
  )
}

export default SearchProvider