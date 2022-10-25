import React from 'react'

function Providers() {
  return (
    <div class="container">
    <br></br>
    <h1>Manage Providers</h1>

    <form class="row g-3">

  <div class="col-md-6">
    <label for="firstName" class="form-label">First Name</label>
    <input type="text" class="form-control" id="firstName" required />
  </div>

  <div class="col-md-6">
    <label for="lastName" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="lastName" required />
  </div>

  <div class="col-md-12">
    <label for="designation" class="form-label">Designation</label>
    <select id="designation" class="form-select" >
      <option disabled selected>...</option>
      <option>Physician</option>
      <option>Nurse</option>
      <option>Pharmacist</option>
    </select>
  </div>

  <div class="col-md-6">
    <label for="providerID" class="form-label">Provider ID</label>
    <input type="text" class="form-control" id="providerID" />
  </div>

  <div class="col-md-6">
    <label for="NPI" class="form-label">NPI</label>
    <input type="text" class="form-control" id="NPI" />
  </div>

  <div class="col-md-6">
    <label for="city" class="form-label">City</label>
    <input type="text" class="form-control" id="city" />
  </div>

  <div class="col-md-6">
  <label for="state" class="form-label">State</label>
    <select id="state" class="form-select" >
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

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Search</button>
  </div>
</form>

</div>
  )
}

export default Providers