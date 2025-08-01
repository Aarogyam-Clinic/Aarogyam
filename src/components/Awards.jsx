import React from 'react';
import '../styles/theme.css'

const Awards = () => {
  const awards = [
    { title: 'Best Physiotherapy Clinic – 2023', description: 'Awarded for excellence in patient care and recovery.', year: 2023 },
    { title: 'Top Rehab Center – 2022', description: 'Recognized for advanced rehabilitation techniques.', year: 2022 },
    { title: 'Health Excellence Award – 2021', description: 'Outstanding contribution to community health.', year: 2021 }
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Our Awards</h2>
      <div className="row">
        {awards.map((award, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card h-100 shadow-sm border-info">
              <div className="card-body">
                <h5 className="card-title text-primary">{award.title}</h5>
                <p className="card-text">{award.description}</p>
                <span className="badge bg-info">{award.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
