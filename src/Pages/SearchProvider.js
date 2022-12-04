import { useNavigate } from "react-router-dom"
import { ENDPOINT } from '../endpoint-config';

function SearchProvider() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [searchResults, setSearchResults] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [NPI, setNPI] = useState('');
  const [designation, setDesignation] = useState('');
  const [facilityName, setFacilityName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');


  async function fetchProviders() {
    const response = await fetch(`${ENDPOINT}/SearchProvider`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            FirstName: firstName,
            LastName: lastName,
            NPI: NPI,
            Designation: designation,
            FacilityName: facilityName,
            City: city,
            State: state,
          })
        })
      const data = await response.json()
      return data
    }


  const searchHandler = async (e) => {
    e.preventDefault();

    const data = await fetchProviders()
    setSearchResults(data)
    console.log(data)
  }


    //OnClick handler to modify a provider
    const modifyHandler = (providerID) => {
      navigate("/PharmaTech/editProvider/"+providerID)
    }
  

    //OnClick handler to delete a provider
    const deleteHandler = (providerID) => {
      if (window.confirm(`Are you sure you want to delete the provider with the id: ${providerID}?`)) {
  
        //send DELETE request to server and refresh page
        fetch(`${ENDPOINT}/DeleteProvider/${providerID}`, {
          method: 'DELETE',
        })
        .then(res => res.text())
        .then(res => console.log(res))
        alert("Provider successfully deleted.")
        navigate("/PharmaTech/ViewProvider")  
      }
    }

  const clearResults = () =>{
    setSearchResults('')
  }


  return (
    <div className="container">

        <ul className="nav nav-tabs">
            <li className="nav-link" onClick={event => navigate("/PharmaTech/viewProvider")}>
                View Providers
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/searchProvider")}>
                Search Providers
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/addProvider")}>
                Add Provider
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/viewProviderFacility")}>
                View Providers' Facilities
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/addProviderFacility")}>
                Add Providers to Facilities
            </li>
         </ul>



  {/* If the user has not yet searched a patient, display the search inputs */}
  {(searchResults === '') && 
    <>
    <h1>Search Providers</h1>

    <form className="row g-3" onSubmit={searchHandler}>

  <div className="col-md-6">
    <label for="firstName" className="form-label">First Name</label>
    <input type="text" className="form-control" id="firstName" onChange={event => setFirstName(event.target.value)} />
  </div>

  <div className="col-md-6">
    <label for="lastName" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="lastName" onChange={event => setLastName(event.target.value)} />
  </div>

  <div className="col-md-12">
    <label for="designation" className="form-label">Designation</label>
    <select id="designation" className="form-select" onChange={event => setDesignation(event.target.value)} >
      <option disabled selected>...</option>
      <option>Physician</option>
      <option>Physician Associate</option>
      <option>Pharmacist</option>
      <option>Advanced Practice Registered Nurse</option>
      <option>Registered Nurse</option>
      <option>Licensed Practical Nurse</option>
      <option>Paramedic</option>
      <option>Other</option>
    </select>
  </div>

  <div className="col-md-6">
    <label for="NPI" className="form-label">NPI</label>
    <input type="text" className="form-control" id="NPI" onChange={event => setNPI(event.target.value)} />
  </div>

  <div className="col-md-6">
    <label for="facilityName" className="form-label">Facility Name</label>
    <input type="text" className="form-control" id="facilityName" onChange={event => setFacilityName(event.target.value)} />
  </div>

  <div className="col-md-6">
    <label for="city" className="form-label">City</label>
    <input type="text" className="form-control" id="city" onChange={event => setCity(event.target.value)} />
  </div>

  <div className="col-md-6">
  <label for="state" className="form-label">State</label>
    <select id="state" className="form-select" onChange={event => setState(event.target.value)} >
      <option disabled selected>...</option>
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

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Search</button>
  </div>
</form>

  <br/>
  <br/>
  <br/>
  </>}


{/* If the user has submitted their search, display search results table */}
{(searchResults !== '') && 
      <>
      <h1>Provider Search Results</h1>
      <br/>
      <button className="btn btn-primary" onClick={clearResults}>New Search</button>
      <br/>
      <br/>
      <h5>Search returned {searchResults.length} results</h5>

      <br/>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Provider ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">NPI</th>
            <th scope="col">Designation</th>
            <th scope="col">Modify</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        {Array.isArray(searchResults) && searchResults.map((provider, index) => {
              return (
                <tbody>
                    <tr key={provider.ProviderID}>
                      <td>{provider.ProviderID}</td>
                      <td>{provider.FirstName}</td>
                      <td>{provider.LastName}</td>
                      <td>{provider.NPI !== 0 ? provider.NPI : ''}</td>
                      <td>{provider.Designation}</td>
                      <td className="modify" onClick={() => modifyHandler(provider.ProviderID)}>⨁</td>
                      <td className="delete" onClick={() => deleteHandler(provider.ProviderID)}>⨂</td>
                    </tr>
                </tbody>
              );
            })}
      </table>
      </>
}
  


</div>
  )
}

export default SearchProvider
