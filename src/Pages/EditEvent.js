import { useNavigate } from "react-router-dom"
import { React, useState, useEffect } from 'react'

// const ENDPOINT = 'http://localhost:44265'
const ENDPOINT = 'http://flip1.engr.oregonstate.edu:44265'


function EditEvent() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  //capture eventID of the event to edit from the URL
  const eventID = window.location.href.split('editEvent/')[1]; 

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

  
  //fetch Product/Facility Data
  const CollectData = async () => {
    let response = await fetch(`${ENDPOINT}/FindEvent/${eventID}`)
    // let response = await fetch(`http://flip1.engr.oregonstate.edu:44265/FindEvent/${eventID}`)
    response = await response.json();
    
    if(response){
        setPatientID(response[0].PatientID)
        setEventType(response[0].EventType)
        setEventDate(response[0].EventDate.slice(0,4)+'-'+response[0].EventDate.slice(5,7)+'-'+response[0].EventDate.slice(8,10))
        setSubmissionDate(response[0].SubmissionDate.slice(0,4)+'-'+response[0].SubmissionDate.slice(5,7)+'-'+response[0].SubmissionDate.slice(8,10))
        setProductID(response[0].ProductID)
        setAdministrationSite(response[0].AdministrationSite)
        setAdministrationRoute(response[0].AdministrationRoute)
        setProviderID(response[0].ProviderID)
        setFacilityID(response[0].FacilityID)
        setNotes(response[0].Notes)
    }
  }

  // Event Data will fetch once upon page mount
  useEffect(() => {
    CollectData()
  }, [])
  

  //OnClick handler to submit changes
  const modifyHandler = (e) => {
    e.preventDefault();

    //send PUT request to server to modify the specified event
    fetch(`${ENDPOINT}/EditEvent/${eventID}`, {
    // fetch(`http://flip1.engr.oregonstate.edu:44265/EditEvent/${eventID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            PatientID: patientID,
            EventType: eventType,
            EventDate: eventDate,
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

      window.alert("Edit complete. You will now be routed back to the View Events page")
      navigate("/PharmaTech/viewEvent")
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

        <h1>Edit Event</h1>
        <br></br>

        
        <form className="row g-3" onSubmit={modifyHandler}>

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
        <input value={submissionDate} type="text" className="form-control" id="submissionDate" placeholder={submissionDate} disabled onChange={event => setSubmissionDate(event.target.value)}/>
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
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>


        </form>
        </div>        
        )
}


export default EditEvent
