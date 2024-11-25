// src/components/Home.js
import React from 'react';
import Header from './Header';
import '../style.css';
import Description from './Description';
import Footer from './Footer';
export default function Home() {

return(
<div>
  <Header />
    <div className="bg-image">
      <div className="bg-overlay">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <h1 className="display-4">Welcome to Our Website</h1>
              <p className="lead">Explore our amazing features and services.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Description />
    <Footer />
</div>
)
}


