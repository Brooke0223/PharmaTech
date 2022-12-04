import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from './config';

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
    const [phoneOpt, setPhoneOpt] = useState('');
    const [mailOpt, setMailOpt] = useState('');

    const [patients, setPatients] = useState('');


    //onSubmit handler to add a new Contact
    const addContact = (e) => {
      e.preventDefault();

      
      // validate phone length before submitting
      if(phone.length !== 10 && phone.length !== 0){
        alert("Please enter a valid 10-digit phone number")
        return
      }


      // validate zipcode length before submitting
      if(zip.length !== 5 && zip.length !== 0){
        alert("Please enter a valid 5-digit zip code")
        return
      }


      // reject empty submission
      if(address.length === 0 && phone.length === 0 && email.length === 0){
        alert("Please enter at least one form of contact information for this patient")
        return
      }


      // detect full address is present if 'mailOpt' is selected
      if(mailOpt === "Yes" && (address.length === 0 || city.length === 0 || state.length === 0 || zip.length === 0)){
        alert("Please enter a valid mailing address for this patient, or select 'No' for the 'Mail Opt' option")
        return
      }



      // detect full email is present if 'emailOpt' is selected
      if(emailOpt === "Yes" && email.length === 0){
        alert("Please enter a valid email address for this patient, or select 'No' for the 'Email Opt' option")
        return
      }



      // detect phone number is present if 'phoneOpt' is selected
      if(phoneOpt === "Yes" && (phone === "" || phoneType === "")){
        alert("Please enter a valid phone number and phone type for this patient, or select 'No' for the 'Phone Opt' option")
        return
      }

      // detect phone type is present if phone number is entered
      if(phone !== "" && phoneType === ""){
        alert("Please select a phone type, or remove inputted Phone number")
        return
      }


    
      // send POST request to the server to add this contact
      fetch(`${ENDPOINT}/AddContact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          PatientID: patientID,  
          Address: address,
          City: city,
          State: state,
          Zip: zip,
          Phone: phone,
          PhoneType: phoneType,
          Email: email,
          EmailOpt: emailOpt,
          PhoneOpt: phoneOpt,
          MailOpt: mailOpt,
        })
      })
      .then(res => res.json())
      .then(json => console.log(json));

      window.alert("Contact Added. You will now be routed back to the main Contacts page")
      navigate("/PharmaTech/viewContact")
    }
  
  
    //fetch Patient Data upon page mount (will use PatientID, FirstName, LastName to assist with edit selection)
    useEffect(() => {
      fetch(`${ENDPOINT}/ViewPatient`)
      // fetch('http://flip1.engr.oregonstate.edu:44265/ViewPatient')
      .then(res => res.json())
      .then(data => setPatients(data))
    }, [])



    // data-validator for phone input
    const phoneValidator = (e) => {
      const value = e.target.value.replace(/\D/g, "");
      setPhone(value.slice(0,10));
    };

    // data-validator for zipcode input
    const zipValidator = (e) => {
      const value = e.target.value.replace(/\D/g, "");
      setZip(value.slice(0,5));
    };

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

    <form className="row g-3" onSubmit={addContact} >
      
      <div className="col-md-12">
        <label for="race" className="form-label">Patient ID <b>(required)</b></label>
        <select id="race" className="form-select" required onChange={event => setPatientID(event.target.value)} >
          <option value="" disabled selected>Select</option>

          {Array.isArray(patients) && patients.map((patient, index) => {
                    return (
                      <option value={patient.PatientID} key={patient.PatientID}>
                          {`${patient.PatientID} - ${patient.FirstName} ${patient.LastName}`}
                      </option>
                    );
            })}
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
    <label for="zipCode" className="form-label">Zip</label>
    <input value={zip} type="text" className="form-control" id="zipCode" placeholder="12345" onChange={zipValidator} />
  </div>


  <div className="col-md-4">
    <label for="phone" className="form-label">Phone</label>
    <input value={phone} type="text" className="form-control" id="phone" placeholder="(123) 456-7890" onChange={phoneValidator} />
  </div>

  <div className="col-md-4">
    <label for="phoneType" className="form-label">Phone Type</label>
    <select id="phoneType" className="form-select" onChange={event => setPhoneType(event.target.value)} >
      <option disabled selected>Select</option>
      <option></option>
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
      <option selected disabled>Select</option>
      <option >No</option>
      <option >Yes</option>
    </select>
  </div>

  <div className="col-md-2">
    <label for="phoneOpt" className="form-label">Phone Opt</label>
    <select id="phoneOpt" className="form-select" onChange={event => setPhoneOpt(event.target.value)} >
      <option selected disabled>Select</option>
      <option >No</option>
      <option >Yes</option>
    </select>
  </div>

  <div className="col-md-2">
    <label for="mailOpt" className="form-label">Mail Opt</label>
    <select id="mailOpt" className="form-select" onChange={event => setMailOpt(event.target.value)} >
      <option selected disabled>Select</option>
      <option >No</option>
      <option >Yes</option>
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
