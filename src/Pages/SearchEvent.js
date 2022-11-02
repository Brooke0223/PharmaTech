import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchEvent() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [firstName, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [DOB, setDOB] = useState('');
  const [patientID, setPatientID] = useState('');
  const [status, setStatus] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');


  //If no matching patient is found, allow re-direct to add a new patient
  const submitHandler = (e) => {
    e.preventDefault(); //prevent page refresh

    if(firstName === "Jennie" && lastName==="Nichols" && DOB==="1992-03-08"){
      navigate("/PharmaTech/viewEvent")
      return
    } 
      
    if (window.confirm("Patient not found. Would you like to add a new patient?")) {
        navigate("/PharmaTech/addPatient")
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

      <h1>Search Events</h1>

      <form className="row g-3" onSubmit={submitHandler}>
        <div className="col-md-4">
          <label for="firstName" className="form-label">
            First Name
          </label>
          <input type="text" className="form-control" id="firstName" required onChange={event => setFirstName(event.target.value)} />
        </div>

        <div className="col-md-4">
          <label for="middleName" className="form-label">
            Middle Name
          </label>
          <input type="text" className="form-control" id="middleName" onChange={event => setMiddleName(event.target.value)} />
        </div>

        <div className="col-md-4">
          <label for="lastName" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" id="lastName" required onChange={event => setLastName(event.target.value)} />
        </div>

        <div className="col-md-4">
          <label for="dob" className="form-label">
            Date of Birth
          </label>
          <input type="date" className="form-control" id="dob" required onChange={event => setDOB(event.target.value)} />
        </div>

        <div className="col-md-4">
          <label for="patientID" className="form-label">
            Patient ID
          </label>
          <input type="text" className="form-control" id="patientID" onChange={event => setPatientID(event.target.value)}/>
        </div>

        <div className="col-md-4">
          <label for="status" className="form-label">
            Status
          </label>
          <select id="status" className="form-select" onChange={event => setStatus(event.target.value)}>
            <option disabled selected>
              ...
            </option>
            <option>Alive</option>
            <option>Deceased</option>
            <option>Unknown</option>
          </select>
        </div>

        <div className="col-12">
          <label for="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="1234 Main St"
            onChange={event => setAddress(event.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label for="city" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="city" onChange={event => setCity(event.target.value)} />
        </div>

        <div className="col-md-4">
          <label for="state" className="form-label">
            State
          </label>
          <select id="state" className="form-select" onChange={event => setState(event.target.value)}>
            <option disabled selected>
              Select
            </option>
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
            <option>CM</option>

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
          <label for="zipCode" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="zipCode" onChange={event => setZip(event.target.value)} />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      <br />
      <br />
      <br />
    </div>
  );
}

export default SearchEvent;
