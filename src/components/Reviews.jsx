import React from 'react';
import '../styles/theme.css';

const Reviews = () => {
  return (
    <section className="reviews-section py-5 bg-light">
      <div className="container">
        <h2 className="section-heading text-center mb-4">What Our Patients Say</h2>

        <div className="review-summary mb-4">
          <p>
            Aarogyam Physiotherapy Clinic receives <strong>positive reviews</strong> for its <strong>caring and attentive staff</strong>, 
            <strong> effective physiotherapy sessions</strong>, and <strong>overall quality of service</strong>. Users often highlight the 
            <strong> professionalism and friendliness of the staff</strong>, as well as the <strong>cleanliness and organization of the clinic</strong>.
          </p>
          <ul className="mt-3">
            <li><strong>Positive Staff:</strong> Many reviews praise the staff's attentiveness, care, and friendly demeanor.</li>
            <li><strong>Effective Treatment:</strong> Users report pain relief and improved mobility, with some walking within a day of surgery.</li>
            <li><strong>Clean and Organized:</strong> The clinic is described as hygienic, clean, and well-maintained.</li>
            <li><strong>Expert Physiotherapists:</strong> Dr. Arpit Tiwari and Dr. Raj Kushwah are frequently mentioned for their expertise.</li>
            <li><strong>Comprehensive Services:</strong> Includes physiotherapy for ortho, neuro, post-op recovery, and rehab.</li>
            <li><strong>Customer Service:</strong> Patients value the helpful and polite communication at every visit.</li>
            <li><strong>Positive Experience:</strong> Overall, reviews reflect high patient satisfaction and trust.</li>
          </ul>
          <p className="mt-3">
            While no major issues are frequently noted, it’s always helpful to consider that individual experiences can vary.
          </p>
        </div>

        <div className="text-center">
          <a
            href="https://share.google/gXCOjzDDBopgU1lL1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Add Your Review on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
