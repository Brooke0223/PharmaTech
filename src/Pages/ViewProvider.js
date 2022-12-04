import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from '../endpoint-config';

function ViewProvider() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [providers, setProviders] = useState('');

  // fetch Provider Data once upon page mount
  useEffect(() => {
    fetch(`${ENDPOINT}/ViewProvider`)
    .then(res => res.json())
    .then(data => setProviders(data))
  }, [])
 

  //OnClick handler to modify a provider
  const modifyHandler = (providerID) => {
    navigate("/PharmaTech/editProvider/"+providerID)
  }

  //OnClick handler to delete a provider
  const deleteHandler = (providerID) => {
    if (window.confirm(`Are you sure you want to delete the provider with the id: ${providerID}?`)) {

      //send DELETE request to server and refresh page
      fetch(`${ENDPOINT}/DeleteProvider/${providerID}`, {
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

       <h1>View Providers</h1>
    <br></br>
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Provider ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">NPI</th>
          <th scope="col">Designation</th>
          <th scope="col">Modify</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>

      {Array.isArray(providers) && providers.map((provider, index) => {
            return (
              <tbody>
                  <tr key={provider.ProviderID}>
                    <td>{provider.ProviderID}</td>
                    <td>{provider.FirstName}</td>
                    <td>{provider.LastName}</td>
                    <td>{provider.NPI !== 0 ? provider.NPI : ''}</td>
                    <td>{provider.Designation}</td>
                    <td className="modify" onClick={() => modifyHandler(provider.ProviderID)}>⨁</td>
                    <td className="delete" onClick={() => deleteHandler(provider.ProviderID)}>⨂</td>
                  </tr>
              </tbody>
            );
          })}
    </table>
</div>
)
}

export default ViewProvider