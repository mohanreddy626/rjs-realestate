import React from "react";
import '../style.css';

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" style={{color:'rgb(91, 23, 23)'}}>
       RealEstate.
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0 me-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./About">
                About
              </a>
            </li>
            <div class="dropdown">
              <a
                class=" nav-link dropdown-toggle "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Ventures
              </a>

              <div class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="./Plots">
                    Plots
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="./Villas">
                 Villas
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="./Apartments">
                  Apartments
                  </a>
                </li>
              </div>
            </div>
            <li class="nav-item">
              <a class="nav-link" href="./Contact">
              Contact
              </a>
            </li>
          </ul>
          <div class='me-4'>
            <input placeholder="search" class='rounded'/>
          </div>
          <div className="login">
            <a href="#" class=''>Login</a>
            <a href="#" class='bg-success px-1 py-1 text-white rounded'>Signin</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
