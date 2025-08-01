import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import doctorImg from "../assets/doctor-front.jpg";
import "../styles/theme.css";

const About = () => {
  return (
    <div className="about-hero-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Left: Doctor Image */}
           <Col md={5} className="text-center mb-4 mb-md-0">
          <Image
            src={doctorImg}
            alt="Dr. Raj Kushwaha"
            fluid
            className="shadow-lg border border-3 border-primary"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
          <h4 className="mt-3 fw-bold text-dark">Dr. Raj Kushwaha</h4>
          <p className="text-muted mb-1 fst-italic">B.P.T, M.P.T</p>
          <p className="text-muted mb-2">
            CMT | Certified McKenzie Therapist | Joint Rehab Specialist
          </p>
          <span className="badge bg-primary">3+ Years Experience</span>
        </Col>

          {/* Right: Doctor Info */}
          <Col md={6}>
            <h2 className="display-5 fw-bold text-primary mb-3">
              Meet Dr. Raj Kushwaha
            </h2>
            <p className="lead text-dark">
              <strong>B.P.T, M.P.T | CMT | Certified McKenzie Therapist</strong>
            </p>
            <p className="text-muted">
              Dr. Raj Kushwaha is a dedicated and highly qualified physiotherapist
              based in Indore. With over <strong>3+ years of clinical experience</strong>,
              he combines evidence-based techniques and compassionate care to
              deliver exceptional treatment results.
            </p>

            <p className="text-muted">
              He holds advanced certifications in:
              <ul className="about-list ps-4">
                <li>Manual Therapy (CMT)</li>
                <li>McKenzie Therapy (CMS)</li>
                <li>Joint Rehabilitation Techniques</li>
              </ul>
            </p>

            <p className="text-muted mb-1">
              <strong>Areas of Specialization:</strong>
            </p>
            <ul className="about-list ps-4">
              <li>Radiculating Pain Management</li>
              <li>Orthopedic & Neurological Rehabilitation</li>
              <li>Sports Injury Rehab</li>
              <li>Adult & Pediatric Rehabilitation</li>
              <li>Geriatric & Cardiothoracic Rehab</li>
              <li>Health & Lifestyle Counselling</li>
            </ul>

            <p className="mt-4 fw-medium text-dark">
              At <strong>Aarogyam Physiotherapy Clinic</strong>, his goal is to
              help every patient regain mobility, strength, and a pain-free
              lifestyle.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
