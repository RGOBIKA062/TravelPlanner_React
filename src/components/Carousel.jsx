import React from 'react';

export default function Carousel() {
  const images = [
    { src: 'c11.png', alt: 'Mahabalipuram' },
    { src: 'c101.png', alt: 'Goa' },
    { src: 'c102.png', alt: 'Kerala' }
  ];

  return (
    <div id="carouselExample" className="carousel slide my-4" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to={i}
            className={i === 0 ? 'active' : ''}
            aria-label={`Slide ${i + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner rounded shadow" style={{ maxHeight: '400px', overflow: 'hidden' }}>
        {images.map((img, i) => (
          <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
            <img
              src={img.src}
              alt={img.alt}
              className="d-block w-100"
              style={{ objectFit: 'cover', height: '400px' }}
            />
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
