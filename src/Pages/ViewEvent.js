import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from '../endpoint-config';

function ViewEvent() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [events, setEvents] = useState('');

  // fetch Event Data once upon page mount
  useEffect(() => {
    fetch(`${ENDPOINT}/ViewEvent`)
    .then(res => res.json())
    .then(data => setEvents(data))
  }, [])
 

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
      window.location.reload();
    }
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


    <h1>View Events</h1>
    <br></br>
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

{Array.isArray(events) && events.map((event, index) => {
            return (
              <tbody>
                  <tr key={event.EventID}>
                    <td>{event.EventID}</td>
                    <td>{event.PatientID}</td>
                    <td>{event.EventType}</td>
                    <td>{event.EventDate.slice(0, 10)}</td>
                    <td>{event.SubmissionDate.slice(0, 10)}</td>
                    <td>{event.ProductID}</td>
                    <td>{event.AdministrationSite}</td>
                    <td>{event.AdministrationRoute}</td>
                    <td>{event.ProviderID !== 0 ? event.ProviderID : ''}</td>
                    <td>{event.FacilityID !== 0 ? event.FacilityID : ''}</td>
                    <td>{event.Notes}</td>
                    <td className="modify" onClick={() => modifyHandler(event.EventID)}>⨁</td>
                    <td className="delete" onClick={() => deleteHandler(event.EventID)}>⨂</td>
                  </tr>
              </tbody>
            );
          })}


</table>

  <br/>
  <br/>
  <br/>

</div>

)
}

export default ViewEvent
