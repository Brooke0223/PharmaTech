import './App.css';
import { BrowserRouter as Router, HashRouter, Routes, Route, Link } from "react-router-dom"
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
import EditProvider from './Pages/EditProvider';
import EditProduct from './Pages/EditProduct';
import EditProductFacility from './Pages/EditProductFacility';
import EditEvent from './Pages/EditEvent';

function App() {

  return (



      <HashRouter>
        <div class="links">
        {/* <Link to="/PharmaTech"> Home </Link> */}
        <Link to="/viewPatient"> Patients </Link>
        <Link to="/viewContact"> Contacts </Link>
        <Link to="/viewEvent"> Events </Link>
        <Link to="/viewFacility"> Facilities </Link>
        <Link to="/viewProvider"> Providers </Link>
        <Link to="/viewProduct"> Products </Link>
        <br></br>
        <br></br>
        </div>

        <Routes>
          {/* <Route path="/PharmaTech" element={<Home />} /> */}
          <Route exact path="/" element={<ViewPatient />} />
          <Route path="/searchPatient" element={<SearchPatient />} />
          <Route path="/searchEvent" element={<SearchEvent />} />
          <Route path="/addEvent" element={<AddEvent />} />
          <Route path="/searchProvider" element={<SearchProvider />} />
          <Route path="/searchFacility" element={<SearchFacility />} />
          <Route path="/searchProduct" element={<SearchProduct />} />
          <Route path="/addPatient" element={<AddPatient />} />
          <Route path="/addProvider" element={<AddProvider />} />
          <Route path="/addFacility" element={<AddFacility />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/addProductFacility" element={<AddProductFacility />} />
          <Route path="/viewPatient" element={<ViewPatient />} />
          <Route path="/viewEvent" element={<ViewEvent />} />
          <Route path="/viewProvider" element={<ViewProvider />} />
          <Route path="/viewFacility" element={<ViewFacility />} />
          <Route path="/viewProduct" element={<ViewProduct />} />
          <Route path="/viewContact" element={<ViewContact />} />
          <Route path="/addContact" element={<AddContact />} />
          <Route path="/viewProviderFacility" element={<ViewProviderFacility />} />
          <Route path="/addProviderFacility" element={<AddProviderFacility />} />
          <Route path="/viewProductFacility" element={<ViewProductFacility />} />
          <Route path="/editPatient/:id" element={<EditPatient />} />
          <Route path="/editContact/:id" element={<EditContact />} />
          <Route path="/editFacility/:id" element={<EditFacility />} />
          <Route path="/editProvider/:id" element={<EditProvider />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />
          <Route path="/editProductFacility/:id" element={<EditProductFacility />} />
          <Route path="/editEvent/:id" element={<EditEvent />} />
        </Routes>
      </HashRouter>

  
  
  );
}

export default App;
