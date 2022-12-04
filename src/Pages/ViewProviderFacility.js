import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from '../endpoint-config';

function ViewProviderFacility() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [providers, setProviders] = useState('');

  // fetch ProviderFacility Data once upon page mount
  useEffect(() => {
    fetch(`${ENDPOINT}/ViewProviderFacility`)
    .then(res => res.json())
    .then(data => setProviders(data))
  }, [])
   
  //OnClick handler to delete a provider/facility relationship
  const deleteHandler = (ProvidersFacilitiesID) => {
    if (window.confirm(`Are you sure you want to delete this provider/facility relationship with id: ${ProvidersFacilitiesID}?`)) {

      //send DELETE request to server and refresh page
      fetch(`${ENDPOINT}/DeleteProviderFacility/${ProvidersFacilitiesID}`, {
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

    <h1>View Facilities Associated With a Provider</h1>
    <br></br>
  <table className="table table-hover">
<thead>
  <tr>
    <th scope="col">Provider (ID - Name)</th>
    <th scope="col">Facility (ID - Name)</th>
    <th scope="col">Delete</th>
  </tr>
</thead>

{Array.isArray(providers) && providers.map((provider, index) => {
            return (
              <tbody>
                  <tr key={provider.ProvidersFacilitiesID}>
                    <td>{provider.ProviderID} - {provider.ProviderName}</td>
                    <td>{provider.FacilityID} - {provider.FacilityName}</td>
                    <td className="delete" onClick={() => deleteHandler(provider.ProvidersFacilitiesID)}>⨂</td>
                  </tr>
              </tbody>
            );
          })}
</table>
</div>

)
}

export default ViewProviderFacility
