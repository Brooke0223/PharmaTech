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
import AddReceivedProduct from './Pages/AddReceivedProduct';
import ViewPatient from './Pages/ViewPatient';
import ViewEvent from './Pages/ViewEvent';
import ViewProvider from './Pages/ViewProvider';
import ViewFacility from './Pages/ViewFacility';
import ViewProduct from './Pages/ViewProduct';


function App() {

  return (



      <Router>
        {/* <Link to="/PharmaTech"> Home </Link> */}
        <Link to="/PharmaTech/searchPatient"> Patients </Link>
        <Link to="/PharmaTech/searchEvent"> Events </Link>
        <Link to="/PharmaTech/searchProvider"> Providers </Link>
        <Link to="/PharmaTech/searchFacility"> Facilities </Link>
        <Link to="/PharmaTech/searchProduct"> Products </Link>
        <br></br>
        <br></br>

        <Routes>
          {/* <Route path="/PharmaTech" element={<Home />} /> */}
          <Route path="/PharmaTech" element={<SearchPatient />} />
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
          <Route path="/PharmaTech/addReceivedProduct" element={<AddReceivedProduct />} />
          <Route path="/PharmaTech/viewPatient" element={<ViewPatient />} />
          <Route path="/PharmaTech/viewEvent" element={<ViewEvent />} />
          <Route path="/PharmaTech/viewProvider" element={<ViewProvider />} />
          <Route path="/PharmaTech/viewFacility" element={<ViewFacility />} />
          <Route path="/PharmaTech/viewProduct" element={<ViewProduct />} />
        </Routes>
      </Router>

  
  
  );
}

export default App;
