import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";


// const ENDPOINT = 'http://localhost:44265'
const ENDPOINT = 'http://flip1.engr.oregonstate.edu:44265'


function SearchEvent() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [searchResults, setSearchResults] = useState(''); 

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [DOB, setDOB] = useState('');
  const [patientID, setPatientID] = useState('');
  const [status, setStatus] = useState('');
  const [facilityName, setFacilityName] = useState('');
  const [facilityCity, setFacilityCity] = useState('');
  const [facilityState, setFacilityState] = useState('');
  const [facilityZip, setFacilityZip] = useState('');


  async function fetchEvents() {
    const response = await fetch(`${ENDPOINT}/SearchEvent`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            FirstName: firstName,
            MiddleName: middleName,
            LastName: lastName,
            DOB: DOB,
            PatientID: patientID,
            Status: status,
            FacilityName: facilityName,
            FacilityCity: facilityCity,
            FacilityState: facilityState,
            FacilityZip: facilityZip,
          })
        })
      const data = await response.json()
      return data
    }


  const searchHandler = async (e) => {
    e.preventDefault();

    const data = await fetchEvents()
    setSearchResults(data)
    console.log(data)
  }


    //OnClick handler to modify an event
    const modifyHandler = (eventID) => {
      navigate("/PharmaTech/editEvent/"+eventID)
    }
  

    //OnClick handler to delete an event
    const deleteHandler = (eventID) => {
      if (window.confirm(`Are you sure you want to delete the event with the id: ${eventID}?`)) {
  
        //send DELETE request to server and refresh page
        fetch(`${ENDPOINT}/DeleteEvent/${eventID}`, {
          method: 'DELETE',
        })
        .then(res => res.text())
        .then(res => console.log(res))
        alert("Event successfully deleted.")
        navigate("/PharmaTech/ViewEvent")  
      }
    }

    const clearResults = () =>{
      setSearchResults('')
    }    


  return (
    <div className="container">
      <ul className="nav nav-tabs">
          <li className="nav-link" onClick={event => navigate("/PharmaTech/viewEvent")}>
              View Events
          </li>

          <li className="nav-link" onClick={event => navigate("/PharmaTech/searchEvent")}>
              Search Events
          </li>

          <li className="nav-link" onClick={event => navigate("/PharmaTech/addEvent")}>
              Add Event
          </li>
      </ul>


    {/* If the user has not yet searched a patient, display the search inputs */}
    {(searchResults === '') && 
      <>
      <h1>Search Events</h1>

      <form className="row g-3" onSubmit={searchHandler}>

        <div className="col-md-4">
          <label for="firstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstName" onChange={event => setFirstName(event.target.value)} />
        </div>

        <div className="col-md-4">
          <label for="middleName" className="form-label">Middle Name</label>
          <input type="text" className="form-control" id="middleName" onChange={event => setMiddleName(event.target.value)} />
        </div>

        <div className="col-md-4">
          <label for="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastName" onChange={event => setLastName(event.target.value)} />
        </div>

        <div className="col-md-4">
          <label for="dob" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" id="dob" onChange={event => setDOB(event.target.value)} />
        </div>

        <div className="col-md-4">
          <label for="patientID" className="form-label">Patient ID</label>
          <input type="text" className="form-control" id="patientID" onChange={event => setPatientID(event.target.value)}/>
        </div>

        <div className="col-md-4">
          <label for="status" className="form-label">Status</label>
          <select id="status" className="form-select" onChange={event => setStatus(event.target.value)}>
            <option disabled selected>Select</option>
            <option>Alive</option>
            <option>Deceased</option>
            <option>Unknown</option>
          </select>
        </div>

        <div className="col-12">
          <label for="facilityName" className="form-label">Facility Name</label>
          <input type="text" className="form-control" id="facilityName" onChange={event => setFacilityName(event.target.value)} />
        </div>

        <div className="col-md-6">
          <label for="facilityCity" className="form-label">Facility City</label>
          <input type="text" className="form-control" id="facilityCity" onChange={event => setFacilityCity(event.target.value)} />
        </div>

        <div className="col-md-4">
          <label for="facilityState" className="form-label">Facility State</label>
          <select id="facilityState" className="form-select" onChange={event => setFacilityState(event.target.value)}>
            <option disabled selected>Select</option>
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

        <div className="col-md-2">
          <label for="facilityZip" className="form-label">Facility Zip</label>
          <input type="text" className="form-control" id="facilityZip" onChange={event => setFacilityZip(event.target.value)} />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>

      <br />
      <br />
      <br />

      </>}


{/* If the user has submitted their search, display search results table */}
{(searchResults !== '') && 
      <>
      <h1>Event Search Results</h1>
      <br/>
      <button className="btn btn-primary" onClick={clearResults}>New Search</button>
      <br/>
      <br/>
      <h5>Search returned {searchResults.length} results</h5>

    <br/>
    <table className="table table-hover">

    <thead>
    <tr>
      <th scope="col">Event ID</th>
      <th scope="col">Patient ID</th>
      <th scope="col">Event Type</th>
      <th scope="col">Event Date</th>
      <th scope="col">Submission Date</th>
      <th scope="col">Product ID</th>
      <th scope="col">Administration Site</th>
      <th scope="col">Administration Route</th>
      <th scope="col">Provider ID</th>
      <th scope="col">Facility ID</th>
      <th scope="col">Notes</th>
      <th scope="col">Modify</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>

  {Array.isArray(searchResults) && searchResults.map((event, index) => {
              return (
                <tbody>
                    <tr key={event.EventID}>
                      <td>{event.EventID}</td>
                      <td>{event.PatientID}</td>
                      <td>{event.EventType}</td>
                      <td>{event.EventDate !== '0000-00-00' ? event.EventDate.slice(0, 10) : ''}</td>
                      <td>{event.SubmissionDate !== '0000-00-00' ? event.SubmissionDate.slice(0, 10) : ''}</td>
                      <td>{event.ProductID}</td>
                      <td>{event.AdministrationSite}</td>
                      <td>{event.AdministrationRoute}</td>
                      <td>{event.ProviderID}</td>
                      <td>{event.FacilityID}</td>
                      <td>{event.Notes}</td>
                      <td className="modify" onClick={() => modifyHandler(event.EventID)}>⨁</td>
                      <td className="delete" onClick={() => deleteHandler(event.EventID)}>⨂</td>
                    </tr>
                </tbody>
              );
            })}
      </table>
      </>
}
  

</div>
  )
}

export default SearchEvent

