import React from 'react';
import '../styles/theme.css'

const Appointment = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center g-5">
        {/* Clinic Info Section */}
        <div className="col-md-6">
          <h2 className="mb-3 text-primary">Book Your Appointment</h2>
          <p className="lead">
            For appointments, please call us directly. We do not take online bookings at the moment.
          </p>
          <h4 className="mt-4">
            📞 <strong>Call Now:</strong>{' '}
            <a href="tel:9074248502" className="text-decoration-none text-dark">
              090742 48502
            </a>
          </h4>

          <p className="mt-3 mb-1"><strong>Clinic Hours:</strong> Open – Closes 10 PM</p>
          <p className="mb-1"><strong>Areas Served:</strong> Vijay Nagar and nearby areas</p>

          <a
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-primary mb-4"
      >
        📍 View on Google Maps
      </a>

      {/* Embedded Google Map */}
      <div className="ratio ratio-16x9 mb-5">
        <iframe
          title="Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.7701685370953!2d75.88319977513169!3d22.736782379375033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3e2e7e1987%3A0xc44badd22a49cf76!2sAarogyam%20Physiotherapy%20Clinic!5e0!3m2!1sen!2sin!4v1753971367640!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src="/assets/clinic.jpg"
            alt="Clinic"
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
