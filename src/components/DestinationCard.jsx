import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DestinationCard({ image, title, slug, index = 0 }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="col-md-4 d-flex destination-card-wrapper">
      <div 
        className="card h-100 shadow-sm w-100 destination-card interactive-shadow"
        style={{ '--card-index': index }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="destination-card-inner">
          <div className="position-relative overflow-hidden">
            <img
              src={image}
              className="card-img-top"
              alt={title}
              style={{ 
                height: '220px', 
                objectFit: 'cover',
                transition: 'all 0.4s ease',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
              }}
            />
            <div 
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: isHovered 
                  ? 'linear-gradient(45deg, rgba(0,123,255,0.2), rgba(255,193,7,0.2))' 
                  : 'transparent',
                transition: 'all 0.3s ease'
              }}
            />
          </div>
          <div className="card-body text-center d-flex flex-column justify-content-between position-relative">
            <h5 
              className="card-title fw-bold"
              style={{
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                color: isHovered ? '#007bff' : '#212529'
              }}
            >
              {title}
            </h5>
            <button 
              className="btn btn-primary mt-3 position-relative overflow-hidden"
              onClick={() => navigate(`/destinations/${slug}`)}
              style={{
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)'
              }}
            >
              <span className="position-relative z-index-2">GET IN</span>
              <div 
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: 'linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                  transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
                  transition: 'transform 0.3s ease'
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
