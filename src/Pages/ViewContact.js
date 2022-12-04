import { useNavigate } from "react-router-dom"
import { React, useState, useEffect } from 'react'
import { ENDPOINT } from './config';

function ViewContact() {
  let navigate = useNavigate(); //This allows us to link user to another page in the pop-up alert window

  const [contacts, setContacts] = useState('');

  // fetch Contact Data once upon page mount
  useEffect(() => {
    fetch(`${ENDPOINT}/ViewContact`)
    .then(res => res.json())
    .then(data => setContacts(data))
  }, [])

  
    //OnClick handler to modify a contact
    const modifyHandler = (contactID) => {
      navigate(`/PharmaTech/editContact/${contactID}`)
    }
  
    //OnClick handler to delete a contact
    const deleteHandler = (contactID) => {
      if (window.confirm(`Are you sure you want to delete the contact with the id: ${contactID}?`)) {
  
        //send DELETE request to server and refresh page
        fetch(`${ENDPOINT}/DeleteContact/${contactID}`, {
          method: 'DELETE',
        })
        .then(res => res.text())
        .then(res => console.log(res))
        window.location.reload();
      }
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

      <h1>View Contacts</h1>
      <p><i>Note: Contacts may be added to a patient as needed, including multiple contacts for a single patient (e.g. in the case of adding two parents for a minor child).</i></p>
      <br></br>
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Contact ID</th>
          <th scope="col">Patient ID</th>
          <th scope="col">Patient Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Phone Type</th>
          <th scope="col">Phone Opt</th>
          <th scope="col">Email</th>
          <th scope="col">Email Opt</th>
          <th scope="col">Street</th>
          <th scope="col">City</th>
          <th scope="col">State</th>
          <th scope="col">Zip</th>
          <th scope="col">Mail Opt</th>
          <th scope="col">Modify</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>

      {Array.isArray(contacts) && contacts.map((contact, index) => {
      return (
        <tbody>
            <tr key={contact.contactID}>
              <td>{contact.ContactID}</td>
              <td>{contact.PatientID}</td>
              <td>{contact.PatientName}</td>
              <td>{contact.Phone !== 0 ? contact.Phone : ''}</td>
              <td>{contact.PhoneType}</td>
              <td>{contact.PhoneOpt}</td>
              <td>{contact.Email}</td>
              <td>{contact.EmailOpt}</td>
              <td>{contact.AddressStreet}</td>
              <td>{contact.AddressCity}</td>
              <td>{contact.AddressState}</td>
              <td>{contact.AddressZip !== 0 ? contact.AddressZip  : ''}</td>
              <td>{contact.MailOpt}</td>
              <td className="modify" onClick={() => modifyHandler(contact.ContactID)}>⨁</td>
              <td className="delete" onClick={() => deleteHandler(contact.ContactID)}>⨂</td>
            </tr>
        </tbody>
        );
      })}
    </table>

  <br/>
  <br/>
  <br/>

</div>

  )
}

export default ViewContact
