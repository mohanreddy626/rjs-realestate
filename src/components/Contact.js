
import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Contact() {
    return (
  <div>
        <Header />
    <div className="container ">

     <div className="row my-5 mb-3">
        <div className="col-md-6 my-5 p-5">
          <h1>Contact US</h1>
          <p>
            You can add as much text as you need.
            You can add as much text as you need.
            You can add as much text as you need.
            You can add as much text as you need.
          </p>
        </div>
      <div className='col-md-4 rounded mt-5 p-4' style={{ background: "#e1e1e9" }}>
       <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">Mobile Number</label>
          <input type="mobile number" className="form-control" id="email" placeholder="Your Number" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
       </form>
      </div>
    </div>
   </div>
    <Footer />
  </div>
    );
  }


