import React, { useState } from 'react';
import '../FeedbackPage.css'; // Import CSS file for styling

function FeedbackPage() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
  };

  return (
    <div className="feedback-container">
      <h1 className="feedback-title">Feedback Page</h1>
      {!submitted ? (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <label className="feedback-label">
            Your Feedback:
            <textarea
              className="feedback-textarea"
              value={feedback}
              onChange={(event) => setFeedback(event.target.value)}
              rows={5}
              cols={50}
              required
            />
          </label>
          <br />
          <button className="submit-button" type="submit">
            Submit Feedback
          </button>
        </form>
      ) : (
        <div className="feedback-confirmation">
          <p className="confirmation-message">Thank you for your feedback!</p>
          {/* You can add additional content or actions after feedback submission */}
        </div>
      )}
    </div>
  );
}

export default FeedbackPage;
