import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from './config';

function ViewFacility() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [facilities, setFacilities] = useState('');
  
  // fetch Facilities Data upon page mount, and refresh if facilities are deleted
  useEffect(() => {
    fetch(`${ENDPOINT}/ViewFacility`)
    .then(res => res.json())
    .then(data => setFacilities(data))
  }, [])

  //OnClick handler to modify a facility
  const modifyHandler = (facilityID) => {
    navigate(`/PharmaTech/editFacility/${facilityID}`)
  }

  //OnClick handler to delete a facility
  const deleteHandler = (facilityID) => {
    if (window.confirm(`Are you sure you want to delete the facility with the id: ${facilityID}?`)) {
      
      //send DELETE request to server and refresh page
      async function deleteData() {
        const response = await fetch(`${ENDPOINT}/DeleteFacility/${facilityID}`, {
          method: 'DELETE'
        })
        if(response.status === 500){
          alert("Unable to delete Facility with associated immunization event(s).")
        }
      }
      deleteData()
      window.location.reload();
    }
  }

  return (
    <div className="container">
    <ul className="nav nav-tabs">
        <li className="nav-link" onClick={event => navigate("/PharmaTech/viewFacility")}>
            View Facilities
        </li>

        <li className="nav-link" onClick={event => navigate("/PharmaTech/searchFacility")}>
            Search Facilities
        </li>

        <li className="nav-link" onClick={event => navigate("/PharmaTech/addFacility")}>
            Add Facility
        </li>
    </ul>

      <h1>View Facilities</h1>
      <br></br>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Facility ID</th>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Zip Code</th>
      <th scope="col">Modify</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>

  {Array.isArray(facilities) && facilities.map((facility, index) => {
      return (
        <tbody>
            <tr key={facility.FacilityID}>
              <td>{facility.FacilityID}</td>
              <td>{facility.FacilityName}</td>
              <td>{facility.FacilityType}</td>
              <td>{facility.AddressStreet}</td>
              <td>{facility.AddressCity}</td>
              <td>{facility.AddressState}</td>
              <td>{facility.AddressZip}</td>
              <td className="modify" onClick={() => modifyHandler(facility.FacilityID)}>⨁</td>
              <td className="delete" onClick={() => deleteHandler(facility.FacilityID)}>⨂</td>
            </tr>
        </tbody>
        );
      })}

</table>
</div>

  )
}

export default ViewFacility