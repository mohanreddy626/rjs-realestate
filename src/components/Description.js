import React from 'react'
import image1 from '../Images/HomeDesimgs/buyhome.img.jpg'
import image2 from '../Images/HomeDesimgs/sellhome.img.jpg'
import image3 from '../Images/HomeDesimgs/renthome.img.jpg'
import "../style.css";

export default function Description() {
  return (
    <div>
      <div class=" bg-white mb-0 pb-5" style={{width:'100%'}}>
        <h2 class="text-center pt-4">Explore Premium Properties on our Site</h2>
        <p class="text-center">
          Take a deep dive and browse Properties for sale, original neighborhood
          photos, resident reviews and local insights to find what is right for
          you.
        </p>
      </div>
      <div class='container'>
      <div class="card-group my-0 mb-3 row">
        <div class="card col-md-4 ">
          <img src={image1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Buy a Property</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
            <button class="bg-white rounded border border-info">
              Browse 
            </button>
          </div>
        </div>
        <div class="card col-md-4 ">
          <img src={image2} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Sell a property</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
            <button class="bg-white rounded border border-info">
              Browse 
            </button>
          </div>
        </div>
        <div class="card col-md-4">
          <img src={image3} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Rent a property</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
            <button class="bg-white rounded border border-info">
              Browse
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
