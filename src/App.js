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
      <Link to="/patients"> Patients </Link>
      <Link to="/providers"> Providers </Link>
      <Link to="/products"> Products </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
