import { useNavigate } from "react-router-dom"
import { React, useState, useEffect } from 'react'

function ViewPatient() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [patients, setPatients] = useState('');


  //fetch Patient Data upon page mount, and refresh if patients are deleted
  useEffect(() => {
    fetch('http://localhost:44265/ViewPatient')
    .then(res => res.json())
    .then(data => setPatients(data))
  }, [patients])


  //OnClick handler to modify a patient
  const modifyHandler = (patientID) => {
    navigate("/PharmaTech/editPatient/"+patientID)
  }

  //OnClick handler to delete a patient
  const deleteHandler = (patientID) => {
    if (window.confirm(`Are you sure you want to delete the patient with the id: ${patientID}?`)) {

      //send DELETE request to server
      fetch('http://localhost:44265/DeletePatient/' + patientID, {
        method: 'DELETE',
      })
      .then(res => res.text())
      .then(res => console.log(res))


      //send GET request to server to re-render updated page contents
      fetch('http://localhost:44265/ViewPatient')
      .then(res => res.json())
      .then(data => setPatients(data))
    }
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