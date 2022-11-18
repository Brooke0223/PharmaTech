import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home';
import SearchPatient from './Pages/SearchPatient';
import SearchEvent from './Pages/SearchEvent';
import SearchProvider from './Pages/SearchProvider';
import SearchFacility from './Pages/SearchFacility';
import SearchProduct from './Pages/SearchProduct';
import AddPatient from './Pages/AddPatient';
import AddEvent from './Pages/AddEvent';
import AddProvider from './Pages/AddProvider';
import AddFacility from './Pages/AddFacility';
import AddProduct from './Pages/AddProduct';
import AddProductFacility from './Pages/AddProductFacility';
import ViewPatient from './Pages/ViewPatient';
import ViewEvent from './Pages/ViewEvent';
import ViewProvider from './Pages/ViewProvider';
import ViewFacility from './Pages/ViewFacility';
import ViewProduct from './Pages/ViewProduct';
import ViewContact from './Pages/ViewContact';
import AddContact from './Pages/AddContact';
import ViewProviderFacility from './Pages/ViewProviderFacility';
import AddProviderFacility from './Pages/AddProviderFacility';
import ViewProductFacility from './Pages/ViewProductFacility';
import EditPatient from './Pages/EditPatient';
import EditContact from './Pages/EditContact';
import EditFacility from './Pages/EditFacility';


function App() {

  return (



      <Router>
        <div class="links">
        {/* <Link to="/PharmaTech"> Home </Link> */}
        <Link to="/PharmaTech/viewPatient"> Patients </Link>
        <Link to="/PharmaTech/viewContact"> Contacts </Link>
        <Link to="/PharmaTech/viewEvent"> Events </Link>
        <Link to="/PharmaTech/viewFacility"> Facilities </Link>
        <Link to="/PharmaTech/viewProvider"> Providers </Link>
        <Link to="/PharmaTech/viewProduct"> Products </Link>
        <br></br>
        <br></br>
        </div>

        <Routes>
          {/* <Route path="/PharmaTech" element={<Home />} /> */}
          <Route path="/PharmaTech" element={<ViewPatient />} />
          <Route path="/PharmaTech/searchPatient" element={<SearchPatient />} />
          <Route path="/PharmaTech/searchEvent" element={<SearchEvent />} />
          <Route path="/PharmaTech/addEvent" element={<AddEvent />} />
          <Route path="/PharmaTech/searchProvider" element={<SearchProvider />} />
          <Route path="/PharmaTech/searchFacility" element={<SearchFacility />} />
          <Route path="/PharmaTech/searchProduct" element={<SearchProduct />} />
          <Route path="/PharmaTech/addPatient" element={<AddPatient />} />
          <Route path="/PharmaTech/addProvider" element={<AddProvider />} />
          <Route path="/PharmaTech/addFacility" element={<AddFacility />} />
          <Route path="/PharmaTech/addProduct" element={<AddProduct />} />
          <Route path="/PharmaTech/addProductFacility" element={<AddProductFacility />} />
          <Route path="/PharmaTech/viewPatient" element={<ViewPatient />} />
          <Route path="/PharmaTech/viewEvent" element={<ViewEvent />} />
          <Route path="/PharmaTech/viewProvider" element={<ViewProvider />} />
          <Route path="/PharmaTech/viewFacility" element={<ViewFacility />} />
          <Route path="/PharmaTech/viewProduct" element={<ViewProduct />} />
          <Route path="/PharmaTech/viewContact" element={<ViewContact />} />
          <Route path="/PharmaTech/addContact" element={<AddContact />} />
          <Route path="/PharmaTech/viewProviderFacility" element={<ViewProviderFacility />} />
          <Route path="/PharmaTech/addProviderFacility" element={<AddProviderFacility />} />
          <Route path="/PharmaTech/viewProductFacility" element={<ViewProductFacility />} />
          <Route path="/PharmaTech/editPatient/:id" element={<EditPatient />} />
          <Route path="/PharmaTech/editContact/:id" element={<EditContact />} />
          <Route path="/PharmaTech/editFacility/:id" element={<EditFacility />} />
        </Routes>
      </Router>

  
  
  );
}

export default App;
