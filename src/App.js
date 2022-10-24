import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home';
import Patients from './Pages/Patients';
import Providers from './Pages/Providers';
import Products from './Pages/Products';

function App() {
  return (
  
      <Router>
        <Link to="/"> Home </Link>
        <Link to="/PharmaTech/patients"> Patients </Link>
        <Link to="/PharmaTech/providers"> Providers </Link>
        <Link to="/PharmaTech/products"> Products </Link>

        <Routes>
          <Route path="/PharmaTech" element={<Home />} />
          <Route path="/PharmaTech/patients" element={<Patients />} />
          <Route path="/PharmaTech/providers" element={<Providers />} />
          <Route path="/PharmaTech/products" element={<Products />} />
        </Routes>
      </Router>

  
  );
}

export default App;
