import React, { useState } from 'react';
import '../styles/theme.css'
import { FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);


  return (
    <div className="container mt-4">
      <h2 className="mb-4">Contact Us</h2>

      {/* Contact Info */}
      <div className="mb-4 p-3 bg-light rounded shadow-sm">
        <h5>Aarogyam Physiotherapy Clinic</h5>
        <p className="mb-1">
          <strong>Address:</strong> G-5, HIG Main Rd, Near MIG Thana,
          Opposite Triveni Hospital, LIG Colony, Indore, Madhya Pradesh 452011
        </p>
        <p className="mb-1"><strong>Areas served:</strong> Vijay Nagar and nearby areas</p>
        <p className="mb-1"><strong>Hours:</strong> Open 8 am ⋅ Closes 10 pm</p>
        <p className="mb-1">
          <strong>Phone:</strong>{' '}
          <a href="tel:09074248502" className="text-decoration-none">90742 48502</a>
        </p>
         <p className="mb-1">
          <strong>Instagram:</strong>{' '}
          <a 
            href="https://www.instagram.com/aarogyamclinicc/?utm_source=qr&igsh=Y2ptMm15cmFxeWR5#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text fs-4"
          >
            <FaInstagram />
          </a>  
        </p>

        <p className="mb-0">
          <strong>More info:</strong>{' '}
          <a href="https://share.google/a1EjIbPizYkcpnsGg" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            View on Google
          </a>
        </p>
        <small className="text-muted">Suggest an edit · Own this business?</small>
      </div>

  
      {messageSent && <div className="alert alert-success mt-3">Thank you for contacting us!</div>}
    </div>
  );
};

export default Contact;
