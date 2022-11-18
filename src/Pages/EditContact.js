import { useNavigate } from "react-router-dom"
import { React, useState, useEffect } from 'react'


function EditContact() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  //capture contactID of the contact to edit from the URL
  const contactID = window.location.href.split('editContact/')[1]; 
  
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
  

  //fetch Contact Data
  const CollectData = async () => {
    // let response = await fetch(`http://localhost:44265/FindContact/${contactID}`)
    let response = await fetch(`http://flip1.engr.oregonstate.edu:44265/FindContact/${contactID}`)
    response = await response.json();
    
    if(response){
      setPhone(response[0].Phone)
      setPhoneType(response[0].PhoneType)
      setPhoneOpt(response[0].PhoneOpt)
      setEmail(response[0].Email)
      setEmailOpt(response[0].EmailOpt)
      setAddress(response[0].AddressStreet)
      setCity(response[0].AddressCity)
      setState(response[0].AddressState)
      setZip(response[0].AddressZip)
      setMailOpt(response[0].MailOpt)
    }
  }

  // Contact Data will fetch once upon page mount
  useEffect(() => {
    CollectData()
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
  

  //OnClick handler to submit changes
  const modifyHandler = (e) => {
    e.preventDefault();

    // validate phone length before submitting
    if(phone.toString().length !== 10 && phone.toString().length !== 0){
        alert("Please enter a valid 10-digit phone number")
        return
      }

      // validate zipcode length before submitting
      if(zip.toString().length !== 5 && zip.toString().length !== 0){
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
        alert("Please enter a valid mailing address for this patient")
        return
      }

      // detect full email is present if emailOpt is selected
      if(emailOpt === "Yes" && email.length === 0){
        alert("Please enter a valid email address for this patient")
        return
      }

      // detect phone number is present if phoneOpt is selected
      if(phoneOpt === "Yes" && (phone === "" || phoneType === "")){
        alert("Please enter a valid phone number and phone type for this patient")
        return
      }



    // fetch(`http://localhost:44265/EditContact/${contactID}`, {
    fetch(`http://flip1.engr.oregonstate.edu:44265/EditContact/${contactID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
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

      window.alert("Edit complete. You will now be routed back to the Contacts page")
      navigate("/PharmaTech/viewContact")
    }
  
  
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

        <h1>Edit Contact</h1>
        <br></br>


      <form className="row g-3" onSubmit={modifyHandler}>

        <div className="col-md-2">
          <label for="contactID" className="form-label">ContactID </label>
          <input value={contactID} type="text" className="form-control" id="contactID" disabled/>
        </div>

        <div className="col-md-6">
          <label for="address" className="form-label">Address </label>
          <input value={address} type="text" className="form-control" id="address" onChange={event => setAddress(event.target.value)}/>
        </div>

        <div className="col-md-4">
          <label for="city" className="form-label">City </label>
          <input value={city} type="text" className="form-control" id="city"  onChange={event => setCity(event.target.value)}/>
        </div>

        <div className="col-md-3">
          <label for="state" className="form-label">State</label>
          <select id="state" className="form-select" onChange={event => setState(event.target.value)} >
          <option selected disabled>{state}</option>
          <option> </option>
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

        <div className="col-md-3">
          <label for="zip" className="form-label">Zip </label>
          <input value={zip !== 0 ? zip : ''} type="text" className="form-control" id="zip" onChange={zipValidator}/>
        </div>

        <div className="col-md-4">
          <label for="phone" className="form-label">Phone </label>
          <input value={phone !== 0 ? phone : ''} type="text" className="form-control" id="phone" onChange={phoneValidator}/>
        </div>

        <div className="col-md-2">
          <label for="phoneType" className="form-label">Phone Type</label>
          <select id="phoneType" className="form-select" onChange={event => setPhoneType(event.target.value)}>
            <option selected disabled>{phoneType}</option>
            <option></option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>

        <div className="col-md-6">
          <label for="email" className="form-label">Email </label>
          <input value={email} type="text" className="form-control" id="email" onChange={event => setEmail(event.target.value)}/>
        </div>

        <div className="col-md-2">
          <label for="emailOpt" className="form-label">Email Opt</label>
          <select id="emailOpt" className="form-select" onChange={event => setEmailOpt(event.target.value)}>
            <option selected disabled>{emailOpt}</option>
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div className="col-md-2">
          <label for="phoneOpt" className="form-label">Phone Opt</label>
          <select id="phoneOpt" className="form-select" onChange={event => setPhoneOpt(event.target.value)}>
            <option selected disabled>{phoneOpt}</option>
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div className="col-md-2">
          <label for="mailOpt" className="form-label">Mail Opt</label>
          <select id="mailOpt" className="form-select" onChange={event => setMailOpt(event.target.value)}>
            <option selected disabled>{mailOpt}</option>
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>

      </form>
  </div>
  )
}

export default EditContact









