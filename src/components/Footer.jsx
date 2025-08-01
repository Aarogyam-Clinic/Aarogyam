import React from 'react';
import '../styles/App.css'; // or Footer.css

const Footer = () => {
  return (
    <footer className="footer bg-primary text-white mt-5 pt-4 pb-3">
      <div className="container text-center">

        <h5 className="mb-3 fw-bold">Aarogyam Physiotherapy Clinic</h5>

        <p className="footer-tagline mb-3 px-2">
          Best Physiotherapy Clinic in Indore • Trusted Physiotherapist • Affordable Treatments • Patient-Centered Care
        </p>

        <div className="mb-3">
          <a href="/contact-us" className="text-white text-decoration-none mx-2">Contact Us</a> |
          <a href="https://share.google/gXCOjzDDBopgU1lL1" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none mx-2">Review Us</a>
        </div>

        <div className="text-white-50 small">
          © 2025 Aarogyam Physiotherapy Clinic. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
