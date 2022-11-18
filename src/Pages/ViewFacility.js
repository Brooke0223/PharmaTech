import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

function ViewFacility() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [facilities, setFacilities] = useState('');
  
  // fetch Facilities Data upon page mount, and refresh if facilities are deleted
  useEffect(() => {
    fetch('http://localhost:44265/ViewFacility')
    .then(res => res.json())
    .then(data => setFacilities(data))
    // .then(data => console.log(facilities))
  }, [facilities]) //I changed this to an empty bracket because I think it kept loading forever?????????

  //OnClick handler to modify a facility
  const modifyHandler = (facilityID) => {
    navigate(`/PharmaTech/editFacility/${facilityID}`)
  }

  //OnClick handler to delete a facility
  const deleteHandler = (facilityID) => {
    if (window.confirm(`Are you sure you want to delete the contact with the id: ${facilityID}?`)) {

      //send DELETE request to server (THIS ONE WORKS!!!!! (Except for obviously when the SQL fails))
      // fetch(`http://localhost:44265/DeleteFacility/${facilityID}`, {
      //   method: 'DELETE',
      // })
      // .then(res => res.text())
      // .then(res => console.log(res))
      
      //send DELETE request to server
      async function deleteData() {
        const response = await fetch(`http://localhost:44265/DeleteFacility/${facilityID}`, {
          method: 'DELETE'
        })
        if(response.status === 500){
          alert("Unable to delete Facility with associated immunization event(s).")
        }
      }
      deleteData()
        


      //send GET request to server to re-render updated page contents
      fetch('http://localhost:44265/ViewFacility')
      .then(res => res.json())
      .then(data => setFacilities(data))
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

  {/* <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Spectrum Health</td>
      <td>Hospital</td>
      <td>3712 Robinson Court</td>
      <td>Saginaw</td>
      <td>MI</td>
      <td>48607</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Walgreens</td>
      <td>Pharmacy</td>
      <td>3367 Main Street</td>
      <td>Sunnyvale</td>
      <td>CA</td>
      <td>94086</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>WellNow</td>
      <td>Urgent Care</td>
      <td>833 Pearlman Avenue</td>
      <td>St Louis</td>
      <td>MO</td>
      <td>63101</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Oak Street Health</td>
      <td>Walk-In Clinic</td>
      <td>1983 Tennessee Avenue</td>
      <td>Detroit</td>
      <td>MI</td>
      <td>48226</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
  </tbody> */}


</table>
</div>

  )
}

export default ViewFacility