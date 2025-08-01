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
          <a href="https://www.google.com/search?sca_esv=2dcb3ec73b8f4595&cs=0&sxsrf=AE3TifOStoQKR6PIl_6Fjb1zg7uKkfTllg:1754049452478&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E9h_-NrxdmDwH33R6S04rDbRnTZSu8JpV4HCmfPmCijnh9px2YniaagbuNz77-lfY2XG52LiDq7h1CdtwGrjO9X7yATHB-RdZYdg1jAPLinvO3nVyQ%3D%3D&q=Aarogyam+Physiotherapy+Clinic+Reviews&sa=X&ved=2ahUKEwjqgKK0x-mOAxXv0TQHHZzDJ1wQ0bkNegQIPhAD&biw=1536&bih=738&dpr=1.25" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none mx-2">Review Us</a>
        </div>

        <div className="text-white-50 small">
          © 2025 Aarogyam Physiotherapy Clinic. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
