import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { ENDPOINT } from '../endpoint-config';

function AddEvent() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  let newDate = new Date()
  let date = String("0" + newDate.getDate()).slice(-2);
  let month = String("0" + (newDate.getMonth() + 1)).slice(-2);
  let year = String(newDate.getFullYear());

  let currentDate = year+"-"+month+"-"+date

  const [patientID, setPatientID] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [submissionDate, setSubmissionDate] = useState('');
  const [productID, setProductID] = useState('');
  const [administrationSite, setAdministrationSite] = useState('');
  const [administrationRoute, setAdministrationRoute] = useState('');
  const [providerID, setProviderID] = useState('');
  const [facilityID, setFacilityID] = useState('');
  const [notes, setNotes] = useState('');
  const [patients, setPatients] = useState('');
  const [providers, setProviders] = useState('');
  const [facilities, setFacilities] = useState('');
  const [products, setProducts] = useState('');

  //onSubmit handler to add a new event
  const addEvent = (e) => {
    e.preventDefault();

      // validate event date
      let newDateString = new Date()
      let date = String("0" + newDateString.getDate()).slice(-2);
      let month = String("0" + (newDateString.getMonth() + 1)).slice(-2);
      let year = String(newDateString.getFullYear());
      let currentDateInteger = parseInt(year+month+date)
      let eventDateInteger = parseInt(eventDate.slice(0,4)+eventDate.slice(5,7)+eventDate.slice(8,10))
      if(eventDateInteger > currentDateInteger){
        alert("Event Date cannot be set in the future")
        return
      }    

    fetch(`${ENDPOINT}/AddEvent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        PatientID: patientID,
        EventType: eventType,
        EventDate: eventDate,
        SubmissionDate: currentDate,
        ProductID: productID,
        AdministrationSite: administrationSite,
        AdministrationRoute: administrationRoute,
        ProviderID: providerID,
        FacilityID: facilityID,
        Notes: notes,
      })
    })
    .then(res => res.json())
    .then(json => console.log(json));

    window.alert("Event added. You will now be routed back to the main Events page")
    navigate("/PharmaTech/ViewEvent")
  }


    //fetch Patient Data upon page mount (will use PatientID, FirstName, LastName to assist with selection)
    useEffect(() => {
      fetch(`${ENDPOINT}/ViewPatient`)
      // fetch('http://flip1.engr.oregonstate.edu:44265/ViewPatient')
      .then(res => res.json())
      .then(data => setPatients(data))
    }, [])

    //fetch Provider Data upon page mount (will use ProviderID, FirstName, LastName to assist with selection)
    useEffect(() => {
      fetch(`${ENDPOINT}/ViewProvider`)
      // fetch('http://flip1.engr.oregonstate.edu:44265/ViewProvider')
      .then(res => res.json())
      .then(data => setProviders(data))
    }, [])
  
    //fetch Faclity Data upon page mount (will use FacilityID and FacilityName to assist with selection)
    useEffect(() => {
      fetch(`${ENDPOINT}/ViewFacility`)
      // fetch('http://flip1.engr.oregonstate.edu:44265/ViewFacility')
      .then(res => res.json())
      .then(data => setFacilities(data))
    }, [])

    //fetch Product Data upon page mount (will use ProductID and ProductType to assist with selection)
    useEffect(() => {
      fetch(`${ENDPOINT}/ViewProduct`)
      // fetch('http://flip1.engr.oregonstate.edu:44265/ViewProduct')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])


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


    <h1>Add A New Event</h1>

    <form className="row g-3" onSubmit={addEvent}>

        <div className="col-md-4">
          <label for="patientID" className="form-label">Patient ID <b>(required)</b></label>
          <select id="patientID" className="form-select" value={patientID} required onChange={event => setPatientID(event.target.value)}>
            <option value="" disabled >Select</option>
            {Array.isArray(patients) && patients.map((patient, index) => {
              return (
                <option value={patient.PatientID} key={patient.PatientID}>
                  {`${patient.PatientID} - ${patient.FirstName} ${patient.LastName}`}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-md-4">
          <label for="eventType" className="form-label">Event Type <b>(required)</b></label>
          <select id="eventType" className="form-select" value={eventType} required onChange={event => setEventType(event.target.value)}>
          <option value="" disabled >Select</option>
          <option value="Administration">Administration</option>
          <option value="Historical">Historical</option>
          <option value="Refusal">Refusal</option>
          </select>
        </div>

        <div className="col-md-4">
          <label for="eventDate" className="form-label">Event Date <b>(required)</b></label>
          <input value={eventDate} type="date" className="form-control" id="eventDate" required onChange={event => setEventDate(event.target.value)}/>
      </div>

        <div className="col-md-4">
        <label for="submissionDate" className="form-label">Submission Date  <b>(required)</b></label>
        <input value={currentDate} type="text" className="form-control" id="submissionDate" placeholder={currentDate} disabled onChange={event => setSubmissionDate(event.target.value)}/>
        </div>

        <div className="col-md-4">
        <label for="productID" className="form-label">Product ID <b>(required)</b></label>
        <select value={productID} id="productID" className="form-select" required onChange={event => setProductID(event.target.value)}>
          <option value="" selected>Select</option>
          {Array.isArray(products) && products.map((product, index) => {
            return (
              <option value={product.ProductID} key={product.ProductID}>
                {`${product.ProductID} - ${product.ProductType}`}
              </option>
            );
          })}
        </select>
        </div>

        <div className="col-md-4">
        <label for="administrationSite" className="form-label">Administration Site</label>
        <select value={administrationSite} id="administrationSite" className="form-select" onChange={event =>setAdministrationSite(event.target.value)}>
          <option value="" disabled >Select</option>
          <option value="Right Thigh">Right Thigh</option>
          <option value="Left Thigh">Left Thigh</option>
          <option value="Right Arm">Right Arm</option>
          <option value="Left Arm">Left Arm</option>
          <option value="Right Naris">Right Naris</option>
          <option value="Left Naris">Left Naris</option>
          <option value="Both Nares">Both Nares</option>
          <option value="Unknown">Unknown</option>
        </select>
        </div>
        
        <div className="col-md-4">
        <label for="administrationRoute" className="form-label">Administration Route</label>
        <select value={administrationRoute} id="administrationRoute" className="form-select" onChange={event => setAdministrationRoute(event.target.value)}>
          <option value="" disabled >Select</option>
          <option value="Intramuscular">Intramuscular</option>
          <option value="Subcutaneous">Subcutaneous</option>
          <option value="Oral">Oral</option>
          <option value="Intradermal">Intradermal</option>
          <option value="Intranasal">Intranasal</option>
          <option value="Intravenous">Intravenous</option>
          <option value="Percutaneous">Percutaneous</option>
          <option value="IV Piggyback">IV Piggyback</option>
          <option value="Unknown">Unknown</option>
        </select>
        </div>

        <div className="col-md-4">
        <label for="providerID" className="form-label">Provider ID</label>
        <select value={providerID} id="providerID" className="form-select" onChange={event => setProviderID(event.target.value)} >
          <option value="" disabled >Select</option>
          {Array.isArray(providers) && providers.map((provider, index) => {
              return (
                <option value={provider.ProviderID} key={provider.ProviderID}>
                  {`${provider.ProviderID} - ${provider.FirstName} ${provider.LastName}`}
                </option>
              );
            })}
          <option>Unknown</option>
        </select>
        </div>

        <div className="col-md-4">
        <label for="facilityID" className="form-label">Facility ID</label>
        <select value={facilityID} id="facilityID" className="form-select" onChange={event => setFacilityID(event.target.value)}>
          <option value="" disabled >Select</option>
          {Array.isArray(facilities) && facilities.map((facility, index) => {
              return (
                <option value={facility.FacilityID} key={facility.FacilityID}>
                  {`${facility.FacilityID} - ${facility.FacilityName}`}
                </option>
              );
            })}
          <option>Unknown</option>
        </select>
        </div>

        <div className="col-md-12">
        <label for="notes" className="form-label">Notes</label>
        <textarea value={notes} type="text" className="form-control" id="notes" rows="3" onChange={event => setNotes(event.target.value)}/>
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

export default AddEvent
