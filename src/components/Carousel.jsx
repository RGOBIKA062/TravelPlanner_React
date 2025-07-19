import React, { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    { src: 'c11.png', alt: 'Mahabalipuram' },
    { src: 'c101.png', alt: 'Goa' },
    { src: 'c102.png', alt: 'Kerala' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="position-relative">
      <div id="carouselExample" className="carousel slide my-4" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to={i}
              className={i === currentSlide ? 'active' : ''}
              aria-label={`Slide ${i + 1}`}
              style={{
                transition: 'all 0.3s ease',
                transform: i === currentSlide ? 'scale(1.2)' : 'scale(1)'
              }}
            ></button>
          ))}
        </div>

        <div className="carousel-inner rounded shadow-lg" style={{ maxHeight: '400px', overflow: 'hidden' }}>
          {images.map((img, i) => (
            <div className={`carousel-item ${i === currentSlide ? 'active' : ''}`} key={i}>
              <div className="position-relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="d-block w-100"
                  style={{ 
                    objectFit: 'cover', 
                    height: '400px',
                    filter: 'brightness(1) contrast(1.1)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carouselExample" 
          data-bs-slide="prev"
          style={{
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carouselExample" 
          data-bs-slide="next"
          style={{
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
