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
            href="https://www.google.com/search?sca_esv=2dcb3ec73b8f4595&cs=0&sxsrf=AE3TifOStoQKR6PIl_6Fjb1zg7uKkfTllg:1754049452478&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E9h_-NrxdmDwH33R6S04rDbRnTZSu8JpV4HCmfPmCijnh9px2YniaagbuNz77-lfY2XG52LiDq7h1CdtwGrjO9X7yATHB-RdZYdg1jAPLinvO3nVyQ%3D%3D&q=Aarogyam+Physiotherapy+Clinic+Reviews&sa=X&ved=2ahUKEwjqgKK0x-mOAxXv0TQHHZzDJ1wQ0bkNegQIPhAD&biw=1536&bih=738&dpr=1.25"
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
