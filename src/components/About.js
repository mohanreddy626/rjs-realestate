// src/components/Home.js
import React from "react";
import "../about.css";
import Header from "./Header";
import imageA from "../Images/HomeDesimgs/sellhome.img.jpg";
import image1 from "../Images/HomeDesimgs/buyhome.img.jpg";
import image2 from "../Images/HomeDesimgs/sellhome.img.jpg";
import image3 from "../Images/HomeDesimgs/renthome.img.jpg";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <Header />
      <div className="container about-container">
        <div className="row about-row">
          <div className="col-md-6 col-sm about-col">
            <h1>This is the About us content that will fill half the screen.</h1>
            <p>
              You can add as much text as you need. You can add as much text as
              you need. You can add as much text as you need. You can add as
              much text as you need.
            </p>
          </div>
          <div className="col-md-6 col-lg-6 col-sm mt-4">
            <img src={imageA} alt="Image description" className="img-fluid" />
          </div>
        </div>
      </div>
       
      <div>
      <div class=" bg-white mb-0 mt-4 pb-5" style={{ width: "100%" }}>
        <h2 class="text-center pt-4">Our Projects</h2>
        
      </div>

      <div class="container">
        <div class="card-group my-0 mb-3 row g-3">
          <div class="card col-md-4 ">
            <img src={image1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Project 1</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
              <button class="bg-white rounded border border-info">
                Browse 
              </button>
            </div>
          </div>
          <div class="card col-md-4">
            <img src={image2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Project 2</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
              <button class="bg-white rounded border border-info">
                Browse 
              </button>
            </div>
          </div>
          <div class="card col-md-4">
            <img src={image3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Project 3</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
              <button class="bg-white rounded border border-info">
                Browse 
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
