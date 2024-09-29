import React from 'react';
import '../Home.css'; // Import your CSS file for custom styling

export default function Home() {
  return (
    <div className="home-container">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2020/07/07/19/48/sign-language-5381754_1280.png" className="d-block  carousel-image" alt="first image" />
            <div className="carousel-caption">
              <h2>Sign Wave</h2>
              <p>Welcome to <em><strong>Sign Wave</strong></em>, where we bridge the gap between sign language and audio communication</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2017/11/07/01/03/hand-2925342_1280.png" className="d-block carousel-image" alt="second image" />
            <div className="carousel-caption">
              <h2>Mission</h2>
              <p>Our mission is to make communication accessible for everyone by providing a seamless conversion from sign language to audio.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
