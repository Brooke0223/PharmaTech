import { useNavigate } from "react-router-dom"
import { React, useState } from 'react'
import { ENDPOINT } from '../endpoint-config';

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


  async function fetchPatients() {
    const response = await fetch(`${ENDPOINT}/SearchPatient`, {
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
            Status: status,
            Address: address,
            City: city,
            State: state,
            Zip: zip,
            Phone: phone,
            Email: email,
          })
        })
      const data = await response.json()
      return data
    }


  const searchHandler = async (e) => {
    e.preventDefault();

    const data = await fetchPatients()
    setSearchResults(data)
    console.log(data)
  }



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
        .then(res => res.text())
        .then(res => console.log(res))
        alert("Patient successfully deleted.")
        navigate("/ViewPatient")  
      }
    }

    const clearResults = () =>{
      setSearchResults('')
    }

  return (
    
    <div className="container">
    <ul className="nav nav-tabs">
        <li className="nav-link" onClick={event => navigate("/ViewPatient")}>
            View Patients
        </li>

        <li className="nav-link" onClick={event => navigate("/searchPatient")}>
            Search Patients
        </li>

        <li className="nav-link" onClick={event => navigate("/addPatient")}>
            Add Patient
        </li>
    </ul>



    {/* If the user has not yet searched a patient, display the search inputs */}
    {(searchResults === '') && 
      <>
    
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
 </>
}




{/* If the user has submitted their search, display search results table */}
{(searchResults !== '') && 
      <>
      <h1>Patient Search Results</h1>
      <br/>
      <h5>Search returned {searchResults.length} results</h5>

      <br/>
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

        {Array.isArray(searchResults) && searchResults.map((patient, index) => {
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
      <br/>
      <br/>
      <button className="btn btn-primary" onClick={clearResults}>New Search</button>
      <br/>
      </>
}
  


</div>
  )
}

export default SearchPatient
