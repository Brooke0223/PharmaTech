import { useNavigate } from "react-router-dom"
import { React, useState, useEffect } from 'react'
import { ENDPOINT } from '../endpoint-config';

function ViewPatient() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [patients, setPatients] = useState('');


  // fetch Patient Data once upon page mount
  useEffect(() => {
    const fetchPatients = async () => {
      const data = await fetch(`${ENDPOINT}/ViewPatient`);
      const json = await data.json();
      setPatients(json);
    }
    fetchPatients()
      .catch(console.error);;
  }, [])

  //OnClick handler to modify a patient
  const modifyHandler = (patientID) => {
    navigate("/editPatient/"+patientID)
  }

  //OnClick handler to delete a patient
  const deleteHandler = (patientID) => {
    if (window.confirm(`Are you sure you want to delete the patient with the id: ${patientID}?`)) {

      //send DELETE request to server and refresh page
      fetch(`${ENDPOINT}/DeletePatient/${patientID}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        if(json.errno && json.errno === 1451){
          window.alert("Unable to delete Patient with associated immunization event(s) or contact method(s).")
        }else{
          window.location.reload();
        }
    })
  }}

  return (

    <div className="container">
      <ul className="nav nav-tabs">
          <li className="nav-link" onClick={event => window.location.reload()}>
              View Patients
          </li>

          <li className="nav-link" onClick={event => navigate("/searchPatient")}>
              Search Patients
          </li>

          <li className="nav-link" onClick={event => navigate("/addPatient")}>
              Add Patient
          </li>
      </ul>

      <h1>View Patients</h1>
      <br></br>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Patient ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Middle Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">DOB</th>
            <th scope="col">Sex</th>
            <th scope="col">Race</th>
            <th scope="col">Ethnicity</th>
            <th scope="col">Active Status</th>
            <th scope="col">Modify</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        {Array.isArray(patients) && patients.map((patient, index) => {
              return (
                <tbody>
                    <tr key={patient.PatientID}>
                      <td>{patient.PatientID}</td>
                      <td>{patient.FirstName}</td>
                      <td>{patient.MiddleName}</td>
                      <td>{patient.LastName}</td>
                      <td>{patient.DOB.slice(0, 10)}</td>
                      <td>{patient.Sex}</td>
                      <td>{patient.Race}</td>
                      <td>{patient.Ethnicity}</td>
                      <td>{patient.ActiveStatus}</td>
                      <td className="modify" onClick={() => modifyHandler(patient.PatientID)}>⨁</td>
                      <td className="delete" onClick={() => deleteHandler(patient.PatientID)}>⨂</td>
                    </tr>
                </tbody>
              );
            })}
      </table>
  </div>
  )
}

export default ViewPatient
