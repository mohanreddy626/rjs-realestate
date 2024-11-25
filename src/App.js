import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About  from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Plots from './components/Plots';
import Villas from './components/Villas';
import Apartments from './components/Apartments';

function App(){
  return(
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Plots' element={<Plots />} />
          <Route path='/Apartments' element={<Apartments />} />
          <Route path='/Villas' element={<Villas />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
