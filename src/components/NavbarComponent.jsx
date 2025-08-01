// components/Navbar.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import doctorImg from "../assets/doctor.jpg";

import '../styles/theme.css'
// import './Navbar.css'; // Optional for extra styling

const NavbarComponent = () => {
  const location = useLocation();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-info text-white py-2">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-3">
         </div>
          <div className="d-flex gap-4 flex-wrap justify-content-end">
            <div>📞 9074248502</div>
            <div>🕒 Mon-Sun 8 am to 10 pm</div>
            <div>📧 pingakhsraj@gmail.com</div>
          </div>
        </Container>
      </div>

   <Navbar bg="light" expand="lg" className="shadow-sm">
  <Container>
    <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
   <img
  src={doctorImg}
  alt="Dr. Raj Kushwaha"
  height="50"
  className="shadow-sm border border-2 border me-3"
/>


       {/* <Image
                  src={doctorImg}
                  alt="Dr. Sujeeth Kumar"
                  fluid
                  rounded
                  className="shadow"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                /> */}
      <span
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: "700",
          fontSize: "1.8rem",
          color: "#113a78ff",
        }}
      >
        Aarogyam Physiotherapy Clinic
      </span>


          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/about" active={location.pathname === "/about"}>About</Nav.Link>

             

              <Nav.Link as={Link} to="/reviews" active={location.pathname === "/reviews"}>Patient Reviews</Nav.Link>
              <Nav.Link as={Link} to="/our-services" active={location.pathname === "/our-services"}>Our Services</Nav.Link>
              <Nav.Link as={Link} to="/contact-us" active={location.pathname === "/contact-us"}>Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/awards" active={location.pathname === "/awards"}>Awards</Nav.Link>
              <Nav.Link as={Link} to="/appointment" active={location.pathname === "/appointment"}>Appointment</Nav.Link>

             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
