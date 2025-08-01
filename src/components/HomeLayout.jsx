import React from 'react';
import NavbarComponent from './NavbarComponent';
import './HomeLayout.css'; // Optional: for custom layout styling
import doctorImg from '../assets/doctor.jpg';

const HomeLayout = ({ children }) => {
  return (
    <>
      {/* Header with Logo and Title */}
      <header className="bg-white shadow-sm py-2">
        <div className="container d-flex align-items-center">
          <img
            src={doctorImg}
            alt="Doctor"
            height="50"
            className="me-3"
          />
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: '700',
              fontSize: '1.8rem',
              color: '#0d6efd',
            }}
          >
            Aarogyam Physiotherapy Clinic
          </span>
        </div>
      </header>

      {/* Navbar */}
      <NavbarComponent />

      {/* Page content */}
      <main className="container py-4">{children}</main>

      {/* Footer */}
      <footer className="bg-light text-center py-3 mt-auto">
        <p className="mb-0 text-muted">&copy; 2025 Aarogyam Physiotherapy Clinic</p>
      </footer>
    </>
  );
};

export default HomeLayout;
