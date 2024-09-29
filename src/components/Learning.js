import React from 'react';
import { Link } from 'react-router-dom';
import '../Learning.css';

const LearningComponent = () => {
  return (
    <div className="learning-container">
      <h1>Choose a Learning Option</h1>
      <p>Welcome to our learning platform! Select one of the following options to start exploring different sign languages:</p>

      <div className="option-group">
        <Link to="/isl" className="option">
          <h2>ISL</h2>
          <p>Indian Sign Language</p>
        </Link>
      </div>

      <div className="option-group">
        <Link to="/asl" className="option">
          <h2>ASL</h2>
          <p>American Sign Language</p>
        </Link>
      </div>

      <div className="option-group">
        <Link to="/bsl" className="option">
          <h2>BSL</h2>
          <p>British Sign Language</p>
        </Link>
      </div>

      <p>Each section provides various resources and interactive elements to help you understand and practice different sign languages.</p>
    </div>
  );
};

export default LearningComponent;
