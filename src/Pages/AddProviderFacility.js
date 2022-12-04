import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from '../endpoint-config';

function AddProviderFacility() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [providerID, setProviderID] = useState('');
  const [facilityID, setFacilityID] = useState('');
  const [providers, setProviders] = useState('');
  const [facilities, setFacilities] = useState('');

  //onSubmit handler to add a provider to a facility
  const addProviderFacility = (e) => {
    e.preventDefault();
  
  
    fetch(`${ENDPOINT}/AddProviderFacility`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ProviderID: providerID,
        FacilityID: facilityID,
      })
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      if(json.errno && json.errno === 1062){
        window.alert("Provider Facility relationship already exists.")        
      }else{
        window.alert("Provider added to facility. You will now be routed back to the View Providers' Facilities page")
        navigate("/PharmaTech/ViewProviderFacility")
      }
    });               
  }


    //fetch Provider Data upon page mount (will use ProviderID, FirstName, LastName to assist with selection)
    useEffect(() => {
      fetch(`${ENDPOINT}/ViewProvider`)
      // fetch('http://flip1.engr.oregonstate.edu:44265/ViewProvider')
      .then(res => res.json())
      .then(data => setProviders(data))
    }, [])
  
    //fetch Facility Data upon page mount (will use FacilityID and FacilityName to assist with selection)
    useEffect(() => {
      fetch(`${ENDPOINT}/ViewFacility`)
      // fetch('http://flip1.engr.oregonstate.edu:44265/ViewFacility')
      .then(res => res.json())
      .then(data => setFacilities(data))
    }, [])


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

    <h1>Add Provider to a Facility</h1>

    <form className="row g-3" onSubmit={addProviderFacility}>

      <div className="col-md-6">
        <label for="providerID" className="form-label">Provider ID <b>(required)</b></label>
        <select id="providerID" className="form-select" value={providerID} required onChange={event => setProviderID(event.target.value)}>
          <option value="" disabled >Select</option>
          {Array.isArray(providers) && providers.map((provider, index) => {
              return (
                <option value={provider.ProviderID} key={provider.ProviderID}>
                  {`${provider.ProviderID} - ${provider.FirstName} ${provider.LastName}`}
                </option>
              );
            })}
        </select>
      </div>

      <div className="col-md-6">
        <label for="facilityID" className="form-label">Facility ID <b>(required)</b></label>
        <select id="facilityID" className="form-select" value={facilityID} required onChange={event => setFacilityID(event.target.value)} >
          <option value="" disabled >Select</option>
          {Array.isArray(facilities) && facilities.map((facility, index) => {
              return (
                <option value={facility.FacilityID} key={facility.FacilityID}>
                  {`${facility.FacilityID} - ${facility.FacilityName}`}
                </option>
              );
            })}
        </select>
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

export default AddProviderFacility
