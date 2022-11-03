import { React, useState } from 'react'
import { useNavigate } from "react-router-dom"

function AddContact() {
    let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

    const [patientID, setPatientID] = useState('');
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
        <li className="nav-link" onClick={event => navigate("/PharmaTech/viewContact")}>
            View Contacts
        </li>

        <li className="nav-link" onClick={event => navigate("/PharmaTech/addContact")}>
            Add Contacts
        </li>
    </ul>

    <h1>Add A New Contact</h1>
    <p><i>Note: Contacts may be added to a patient as needed, including multiple contacts for a single patient (e.g. in the case of adding two parents for a minor child).</i></p>

    <form className="row g-3" >


  <div className="col-md-12">
    <label for="race" className="form-label">Patient ID <b>(required)</b></label>
    <select id="race" className="form-select" required onChange={event => setPatientID(event.target.value)} >
      <option value="" disabled selected>Select</option>
      <option>1 - Jennie Nichols</option>
      <option>2 - Max Tucker</option>
      <option>3 - Calvin James</option>
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
    <input type="text" className="form-control" id="phone" placeholder="(123) 456-7890" onChange={event => setPhone(event.target.value)} />
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

export default AddContact