import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home';
import Patients from './Pages/Patients';
import Events from './Pages/Events';
import Providers from './Pages/Providers';
import Facilities from './Pages/Facilities';
import Products from './Pages/Products';


function App() {
  return (
  
      <Router>
        <Link to="/PharmaTech"> Home </Link>
        <Link to="/PharmaTech/patients"> Patients </Link>
        <Link to="/PharmaTech/events"> Events </Link>
        <Link to="/PharmaTech/providers"> Providers </Link>
        <Link to="/PharmaTech/facilities"> Facilities </Link>
        <Link to="/PharmaTech/products"> Products </Link>

        <Routes>
          <Route path="/PharmaTech" element={<Home />} />
          <Route path="/PharmaTech/patients" element={<Patients />} />
          <Route path="/PharmaTech/events" element={<Events />} />
          <Route path="/PharmaTech/providers" element={<Providers />} />
          <Route path="/PharmaTech/facilities" element={<Facilities />} />
          <Route path="/PharmaTech/products" element={<Products />} />
        </Routes>
      </Router>

  
  );
}

export default App;
