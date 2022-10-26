import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home';
import Patients from './Pages/Patients';
import Events from './Pages/Events';
import AddEvent from './Pages/AddEvent';
import Providers from './Pages/Providers';
import Facilities from './Pages/Facilities';
import Products from './Pages/Products';
import AddPatient from './Pages/AddPatient';
import AddProvider from './Pages/AddProvider';
import AddFacility from './Pages/AddFacility';
import AddProduct from './Pages/AddProduct';
import AddReceivedProduct from './Pages/AddReceivedProduct';


function App() {

  return (



      <Router>
        {/* <Link to="/PharmaTech"> Home </Link> */}
        <Link to="/PharmaTech/patients"> Patients </Link>
        <Link to="/PharmaTech/events"> Events </Link>
        <Link to="/PharmaTech/providers"> Providers </Link>
        <Link to="/PharmaTech/facilities"> Facilities </Link>
        <Link to="/PharmaTech/products"> Products </Link>
        <br></br>
        <br></br>

        <Routes>
          {/* <Route path="/PharmaTech" element={<Home />} /> */}
          <Route path="/PharmaTech" element={<Patients />} />
          <Route path="/PharmaTech/patients" element={<Patients />} />
          <Route path="/PharmaTech/events" element={<Events />} />
          <Route path="/PharmaTech/addEvent" element={<AddEvent />} />
          <Route path="/PharmaTech/providers" element={<Providers />} />
          <Route path="/PharmaTech/facilities" element={<Facilities />} />
          <Route path="/PharmaTech/products" element={<Products />} />
          <Route path="/PharmaTech/addPatient" element={<AddPatient />} />
          <Route path="/PharmaTech/addProvider" element={<AddProvider />} />
          <Route path="/PharmaTech/addFacility" element={<AddFacility />} />
          <Route path="/PharmaTech/addProduct" element={<AddProduct />} />
          <Route path="/PharmaTech/addReceivedProduct" element={<AddReceivedProduct />} />
        </Routes>
      </Router>

  
  
  );
}

export default App;
