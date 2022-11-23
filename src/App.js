import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import About from './components/About/About';
import Products from './components/Products/Products';
import Services from './components/Ourservices/Services';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
