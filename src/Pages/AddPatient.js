import { React, useState } from 'react'
import { useNavigate } from "react-router-dom"

function AddPatient() {
    let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

    const [firstName, setFirstName] = useState('');
    const [middlename, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [DOB, setDOB] = useState('');
    const [sex, setSex] = useState('');
    const [status, setStatus] = useState('');
    const [race, setRace] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [email, setEmail] = useState('');
    const [emailOpt, setEmailOpt] = useState('');
    const [phoneOpt, setphoneOpt] = useState('');
    const [mailOpt, setMailOpt] = useState('');

    return (
    <div className="container">
    
    <ul className="nav nav-tabs">
            <li className="nav-link" onClick={event => navigate("/PharmaTech/searchPatient")}>
                Search Patients
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/addPatient")}>
                Add Patient
            </li>
    </ul>

    <h1>Add A New Patient</h1>

    <form className="row g-3" >

  <div className="col-md-4">
    <label for="firstName" className="form-label">First Name</label>
    <input type="text" className="form-control" id="firstName" required onChange={event => setFirstName(event.target.value)}/>
  </div>

  <div className="col-md-4">
    <label for="middleName" className="form-label">Middle Name</label>
    <input type="text" className="form-control" id="middleName"  onChange={event => setMiddleName(event.target.value)}/>
  </div>

  <div className="col-md-4">
    <label for="lastName" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lastName" required onChange={event => setLastName(event.target.value)}/>
  </div>

  <div className="col-md-4">
    <label for="dob" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" id="dob" required onChange={event => setDOB(event.target.value)}/>
  </div>

  <div className="col-md-4">
    <label for="sex" className="form-label">Sex</label>
    <select id="sex" className="form-select" onChange={event => setSex(event.target.value)}>
      <option disabled selected>Select</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
      <option>Unknown</option>
    </select>
  </div>

  <div className="col-md-4">
    <label for="status" className="form-label">Status</label>
    <select id="status" className="form-select" onChange={event => setStatus(event.target.value)} >
      <option disabled selected>Select</option>
      <option>Alive</option>
      <option>Deceased</option>
      <option>Unknown</option>
    </select>
  </div>


  <div className="col-md-6">
    <label for="race" className="form-label">Race</label>
    <select id="race" className="form-select" onChange={event => setRace(event.target.value)} >
      <option disabled selected>Select</option>
      <option>American Indian or Alaska Native</option>
      <option>Asian</option>
      <option>Black or African American</option>
      <option>Native Hawaiian or Other Pacific Islander</option>
      <option>White</option>
      <option>Other Race</option>
      <option>Unknown</option>
    </select>
  </div>

  <div className="col-md-6">
    <label for="ethnicity" className="form-label">Ethnicity</label>
    <select id="ethnicity" className="form-select" onChange={event => setEthnicity(event.target.value)} >
      <option disabled selected>Select</option>
      <option>Hispanic or Latino</option>
      <option>Not Hispanic or Latino</option>
      <option>Unknown</option>
    </select>
  </div>

  <div className="col-6">
    <label for="address" className="form-label">Address</label>
    <input type="text" className="form-control" id="address" placeholder="1234 Main St" onChange={event => setAddress(event.target.value)} />
  </div>

  <div className="col-md-6">
    <label for="city" className="form-label">City</label>
    <input type="text" className="form-control" id="city" onChange={event => setCity(event.target.value)} />
  </div>


  <div className="col-md-2">
    <label for="state" className="form-label">State</label>
    <select id="state" className="form-select" onChange={event => setState(event.target.value)} >
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


  <div className="col-md-4">
    <label for="phone" className="form-label">Phone</label>
    <input type="text" className="form-control" id="phone" placeholder="(123) 456-789" onChange={event => setPhone(event.target.value)} />
  </div>

  <div className="col-md-4">
    <label for="phoneType" className="form-label">Phone Type</label>
    <select id="phoneType" className="form-select" onChange={event => setPhoneType(event.target.value)} >
      <option disabled selected>Select</option>
      <option>Home</option>
      <option>Work</option>
      <option>Mobile</option>
    </select>
  </div>


  <div className="col-md-6">
    <label for="email" className="form-label">Email</label>
    <input type="text" className="form-control" id="email" onChange={event => setEmail(event.target.value)} />
  </div>

  <div className="col-md-2">
    <label for="phoneOpt" className="form-label">Email Opt</label>
    <select id="phoneOpt" className="form-select" onChange={event => setEmailOpt(event.target.value)} >
      <option selected>Yes</option>
      <option>No</option>
    </select>
  </div>

  <div className="col-md-2">
    <label for="phoneOpt" className="form-label">Phone Opt</label>
    <select id="phoneOpt" className="form-select" onChange={event => setphoneOpt(event.target.value)} >
      <option selected>No</option>
      <option>Yes</option>
    </select>
  </div>

  <div className="col-md-2">
    <label for="mailOpt" className="form-label">Mail Opt</label>
    <select id="mailOpt" className="form-select" onChange={event => setMailOpt(event.target.value)} >
      <option selected>No</option>
      <option>Yes</option>
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

export default AddPatient