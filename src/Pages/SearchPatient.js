import { BrowserRouter as Router, useNavigate } from "react-router-dom"
import { React, useState } from 'react'

function SearchPatient() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [searchResults, setSearchResults] = useState('');
  
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [DOB, setDOB] = useState('');
  const [patientID, setPatientID] = useState('');
  const [status, setStatus] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const searchHandler = (e) => {
    e.preventDefault();

    fetch('http://localhost:44265/SearchPatient', {
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
            Address: address,
            City: city,
            State: state,
            Zip: zip,
            Phone: phone,
            Email: email,
          })
        })
    }


  return (
    
    <div className="container">
    <ul className="nav nav-tabs">
        <li className="nav-link" onClick={event => navigate("/PharmaTech/ViewPatient")}>
            View Patients
        </li>

        <li className="nav-link" onClick={event => navigate("/PharmaTech/searchPatient")}>
            Search Patients
        </li>

        <li className="nav-link" onClick={event => navigate("/PharmaTech/addPatient")}>
            Add Patient
        </li>
    </ul>

    <h1>Search Patients</h1>
    

    <form className="row g-3" onSubmit={searchHandler}>

    <div className="col-md-4">
    <label for="firstName" className="form-label">First Name</label>
    <input type="text" className="form-control" id="firstName" onChange={event => setFirstName(event.target.value)} />
  </div>

  <div className="col-md-4">
    <label for="middleName" className="form-label">Middle Name</label>
    <input type="text" className="form-control" id="middleName"  onChange={event => setMiddleName(event.target.value)}/>
  </div>

  <div className="col-md-4">
    <label for="lastName" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lastName" onChange={event => setLastName(event.target.value)}/>
  </div>

  <div className="col-md-4">
    <label for="dob" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" id="dob" onChange={event => setDOB(event.target.value)} />
  </div>

  <div className="col-md-4">
    <label for="patientID" className="form-label">Patient ID</label>
    <input type="text" className="form-control" id="patientID" onChange={event => setPatientID(event.target.value)} />
  </div>

  <div className="col-md-4">
    <label for="status" className="form-label">Status</label>
    <select id="status" className="form-select" onChange={event => setStatus(event.target.value)}>
      <option disabled selected>...</option>
      <option>Alive</option>
      <option>Deceased</option>
      <option>Unknown</option>
    </select>
  </div>

  <div className="col-12">
    <label for="address" className="form-label">Address</label>
    <input type="text" className="form-control" id="address" placeholder="1234 Main St" onChange={event => setAddress(event.target.value)}/>
  </div>

  <div className="col-md-6">
    <label for="city" className="form-label">City</label>
    <input type="text" className="form-control" id="city" onChange={event => setCity(event.target.value)} />
  </div>

  <div className="col-md-4">
    <label for="state" className="form-label">State</label>
    <select id="state" className="form-select" onChange={event => setState(event.target.value)}>
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
    <label for="zipCode" className="form-label">Zip</label>
    <input type="text" className="form-control" id="zipCode" onChange={event => setZip(event.target.value)} />
  </div>

  <div className="col-md-6">
    <label for="phone" className="form-label">Phone</label>
    <input type="text" className="form-control" id="phone" placeholder="(123) 456-7890" onChange={event => setPhone(event.target.value)} />
  </div>

  <div className="col-md-6">
    <label for="email" className="form-label">Email</label>
    <input type="text" className="form-control" id="email" onChange={event => setEmail(event.target.value)} />
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

export default SearchPatient