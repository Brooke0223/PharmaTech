import React from 'react'
import { useNavigate } from "react-router-dom"

function ViewEvent() {
    let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

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
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>1</td>
      <td>Historical</td>
      <td>2020-10-02</td>
      <td>2022-10-10</td>
      <td>1</td>
      <td><i>Null</i></td>
      <td><i>Null</i></td>
      <td><i>Null</i></td>
      <td><i>Null</i></td>
      <td>Tdap vaccine in 2020, per patient's vaccine card</td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>2</td>
      <td>Administration</td>
      <td>2021-10-05</td>
      <td>2021-10-05</td>
      <td>2</td>
      <td>Left Arm</td>
      <td>Intramuscular</td>
      <td>1</td>
      <td>1</td>
      <td><i>Null</i></td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>3</td>
      <td>Administration</td>
      <td>2021-12-23</td>
      <td>2021-12-23</td>
      <td>3</td>
      <td>Left Arm</td>
      <td>Intramuscular</td>
      <td>2</td>
      <td>2</td>
      <td><i>Null</i></td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>3</td>
      <td>Administration</td>
      <td>2022-2-23</td>
      <td>2022-2-23</td>
      <td>4</td>
      <td>Right Arm</td>
      <td>Intramuscular</td>
      <td>3</td>
      <td>3</td>
      <td><i>Null</i></td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>2</td>
      <td>Administration</td>
      <td>2022-10-17</td>
      <td>2022-10-17</td>
      <td>2</td>
      <td>Left Arm</td>
      <td>Intramuscular</td>
      <td>1</td>
      <td>1</td>
      <td><i>Null</i></td>
      <td>⨁</td>
      <td>⨂</td>
    </tr>
  </tbody>
</table>

    <br/>
    <br/>
    <br/>

</div>

  )
}

export default ViewEvent