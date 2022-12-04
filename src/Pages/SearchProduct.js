import { useNavigate } from "react-router-dom"
import { React, useState } from 'react'
import { ENDPOINT } from './config';

function SearchProduct() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [searchResults, setSearchResults] = useState('');

  const [type, setType] = useState('');
  const [NDC, setNDC] = useState('');
  const [lot, setLot] = useState('');
  const [expiration, setExpiration] = useState('');
  const [facilityName, setFacilityName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');


  async function fetchProducts() {
    const response = await fetch(`${ENDPOINT}/SearchProduct`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            Type: type,
            NDC: NDC,
            Lot: lot,
            Expiration: expiration,
            FacilityName: facilityName,
            City: city,
            State: state,
            Zip: zip,
          })
        })
      const data = await response.json()
      return data
    }


  const searchHandler = async (e) => {
    e.preventDefault();

    const data = await fetchProducts()
    setSearchResults(data)
    console.log(data)
  }


    //OnClick handler to modify a product
    const modifyHandler = (productID) => {
      navigate("/PharmaTech/editProduct/"+productID)
    }
  

    //OnClick handler to delete a product
    const deleteHandler = (productID) => {
      if (window.confirm(`Are you sure you want to delete the product with the id: ${productID}?`)) {
  
        //send DELETE request to server and refresh page
        fetch(`${ENDPOINT}/DeleteProduct/${productID}`, {
          method: 'DELETE',
        })
        .then(res => res.text())
        .then(res => console.log(res))
        alert("Product successfully deleted.")
        navigate("/PharmaTech/ViewProduct")  
      }
    }

    const clearResults = () =>{
      setSearchResults('')
    }    

  return (

    <div className="container">

      <ul className="nav nav-tabs">
            <li className="nav-link" onClick={event => navigate("/PharmaTech/viewProduct")}>
                View Products
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/searchProduct")}>
                Search Products
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/addProduct")}>
                Add A New Product
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/viewProductFacility")}>
                View Products in Facilities
            </li>

            <li className="nav-link" onClick={event => navigate("/PharmaTech/addProductFacility")}>
                Add Products to Facilities
            </li>
        </ul>



    {/* If the user has not yet searched a patient, display the search inputs */}
    {(searchResults === '') && 
      <>
    <h1>Search Products</h1>

    <form className="row g-3" onSubmit={searchHandler}>

  <div className="col-md-6">
    <label for="productType" className="form-label">Product Type</label>
    <select id="productType" className="form-select" onChange={event => setType(event.target.value)} >
      <option disabled selected>Select</option>
      <option>Covid-19 (Jannssen)</option>
      <option>Covid-19 (Novavax)</option>
      <option>Covid-19 (Pfizer)</option>
      <option>Covid-19 (Moderna)</option>
      <option>Influenza</option>
      <option>Influenza (Adult)</option>
      <option>Zoster RZV (Shingrix)</option>
      <option>Zoster ZVL (Zostavax)</option>
    </select>
  </div>

  <div className="col-md-6">
    <label for="NDC" className="form-label">Product NDC</label>
    <input type="text" className="form-control" id="NDC" placeholder="00000-0000-00" onChange={event => setNDC(event.target.value)} />
  </div>

  <div className="col-md-6">
    <label for="lotNumber" className="form-label">Lot Number</label>
    <input type="text" className="form-control" id="lotNumber" onChange={event => setLot(event.target.value)} />
  </div>

  <div className="col-md-6">
    <label for="expiration" className="form-label">Expiration</label>
    <input type="date" className="form-control" id="expiration" onChange={event => setExpiration(event.target.value)} />
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

  <div className="col-md-6">
    <label for="zip" className="form-label">Zip Code</label>
    <input type="text" className="form-control" id="zip" onChange={event => setZip(event.target.value)} />
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
      <h1>Product Search Results</h1>
      <br/>
      <button className="btn btn-primary" onClick={clearResults}>New Search</button>
      <br/>
      <br/>
      <h5>Search returned {searchResults.length} results</h5>

    <br/>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Product ID</th>
      <th scope="col">Product Type</th>
      <th scope="col">NDC</th>
      <th scope="col">Lot</th>
      <th scope="col">Expiration</th>
      <th scope="col">Dose Volume</th>
      <th scope="col">Dose Unit</th>
      <th scope="col">Modify</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>

  {Array.isArray(searchResults) && searchResults.map((product, index) => {
              return (
                <tbody>
                    <tr key={product.ProductID}>
                      <td>{product.ProductID}</td>
                      <td>{product.ProductType}</td>
                      <td>{product.NDC !== 0 ? product.NDC : ''}</td>
                      <td>{product.Lot}</td>
                      <td>{product.Expiration !== '0000-00-00' ? product.Expiration.slice(0, 10) : ''}</td>
                      <td>{product.DoseVolume !== 0 ? product.DoseVolume : ''}</td>
                      <td>{product.DoseUnit}</td>
                      <td className="modify" onClick={() => modifyHandler(product.ProductID)}>⨁</td>
                      <td className="delete" onClick={() => deleteHandler(product.ProductID)}>⨂</td>
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


export default SearchProduct
