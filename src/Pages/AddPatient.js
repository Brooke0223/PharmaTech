import React from 'react'

function AddPatient() {
  return (
    
    <div class="container">
    <br></br>
    <h1>Add A New Patient</h1>

    <form class="row g-3" >

  <div class="col-md-4">
    <label for="firstName" class="form-label">First Name</label>
    <input type="text" class="form-control" id="firstName" required />
  </div>

  <div class="col-md-4">
    <label for="middleName" class="form-label">Middle Name</label>
    <input type="text" class="form-control" id="middleName"  />
  </div>

  <div class="col-md-4">
    <label for="lastName" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="lastName" required />
  </div>

  <div class="col-md-4">
    <label for="dob" class="form-label">Date of Birth</label>
    <input type="date" class="form-control" id="dob" required />
  </div>

  <div class="col-md-4">
    <label for="sex" class="form-label">Sex</label>
    <select id="sex" class="form-select" >
      <option disabled selected>Select</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
      <option>Unknown</option>
    </select>
  </div>

  <div class="col-md-4">
    <label for="status" class="form-label">Status</label>
    <select id="status" class="form-select" >
      <option disabled selected>Select</option>
      <option>Alive</option>
      <option>Deceased</option>
      <option>Unknown</option>
    </select>
  </div>


  <div class="col-md-6">
    <label for="race" class="form-label">Race</label>
    <select id="race" class="form-select" >
      <option disabled selected>Select</option>
      <option>American Indian or Alaska Native</option>
      <option>Asian</option>
      <option>Black or African American</option>
      <option>Native Hawaiian or Other Pacific Islander</option>
      <option>White</option>
      <option>Other Race</option>
      <option>Unknown</option>
    </select>
  </div>

  <div class="col-md-6">
    <label for="ethnicity" class="form-label">Ethnicity</label>
    <select id="ethnicity" class="form-select" >
      <option disabled selected>Select</option>
      <option>Hispanic or Latino</option>
      <option>Not Hispanic or Latino</option>
      <option>Unknown</option>
    </select>
  </div>

  <div class="col-6">
    <label for="address" class="form-label">Address</label>
    <input type="text" class="form-control" id="address" placeholder="1234 Main St" />
  </div>

  <div class="col-md-6">
    <label for="city" class="form-label">City</label>
    <input type="text" class="form-control" id="city" />
  </div>


  <div class="col-md-2">
    <label for="state" class="form-label">State</label>
    <select id="state" class="form-select" >
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

  <div class="col-md-2">
    <label for="zipCode" class="form-label">Zip</label>
    <input type="text" class="form-control" id="zipCode" />
  </div>


  <div class="col-md-4">
    <label for="phone" class="form-label">Phone</label>
    <input type="text" class="form-control" id="phone" placeholder="(123) 456-789"/>
  </div>

  <div class="col-md-4">
    <label for="phoneType" class="form-label">Phone Type</label>
    <select id="phoneType" class="form-select" >
      <option disabled selected>Select</option>
      <option>Home</option>
      <option>Work</option>
      <option>Mobile</option>
    </select>
  </div>


  <div class="col-md-6">
    <label for="email" class="form-label">Email</label>
    <input type="text" class="form-control" id="email" />
  </div>

  <div class="col-md-2">
    <label for="phoneOpt" class="form-label">Email Opt</label>
    <select id="phoneOpt" class="form-select" >
      <option selected>Yes</option>
      <option>No</option>
    </select>
  </div>

  <div class="col-md-2">
    <label for="phoneOpt" class="form-label">Phone Opt</label>
    <select id="phoneOpt" class="form-select" >
      <option selected>No</option>
      <option>Yes</option>
    </select>
  </div>

  <div class="col-md-2">
    <label for="mailOpt" class="form-label">Mail Opt</label>
    <select id="mailOpt" class="form-select" >
      <option selected>No</option>
      <option>Yes</option>
    </select>
  </div>



  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>

</form>

</div>
  )
}

export default AddPatient