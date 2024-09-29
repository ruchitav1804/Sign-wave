import React from 'react';
import '../Contact.css'

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to contact us using the form below:</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
