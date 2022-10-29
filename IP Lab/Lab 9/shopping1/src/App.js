import React from 'react';
import Navbar from './Navbar.js';
import Product from './Product.js';
import Contact from './Contact.js';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
    <Navbar />
      <Routes>
        <Route path='/' element={<Product/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
