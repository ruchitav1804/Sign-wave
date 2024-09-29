import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">Sign-Wave</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/accordion" style={{color:"white"}}>About Us</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to="/video">Start</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link active" aria-current="page" to="/Contact" style={{color:"white"}}>Contact Us</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link active" aria-current="page" to="/feedback" style={{color:"white"}}>Feedback</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link active" aria-current="page" to="/Learning" style={{color:"white"}}>Learning</Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="darkModeToggle"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <label className="form-check-label" htmlFor="darkModeToggle">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
