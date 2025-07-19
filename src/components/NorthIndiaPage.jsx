import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TourSection.css';
import Footer from './Footer';

export default function NorthIndiaPage() {
  const navigate = useNavigate();

  const tourData = [
    { title: 'DELHI TOUR', image: '/delhi.jpg', price: 8000 },
    { title: 'AGRA TOUR', image: '/agra.webp', price: 7500 },
    { title: 'RAJASTHAN TOUR', image: '/rajasthan.jpeg', price: 12000 },
    { title: 'KASHMIR TOUR', image: '/kashmir.jpeg', price: 14000 }
  ];

  const handleBooking = (tour) => {
    const query = new URLSearchParams({
      destination: tour.title,
      image: tour.image,
      price: tour.price
    }).toString();
    navigate(`/booking?${query}`);
  };

  return (
    <div className="pt-5">
      <div
        style={{
          backgroundImage: `url('/northindiatours.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 5px #000'
        }}
      >
      </div>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {tourData.map((tour, index) => (
            <div className="col" key={index}>
              <div
                className="card text-white tour-card"
                style={{
                  height: '340px',
                  backgroundImage: `url(${tour.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '15px',
                  overflow: 'hidden'
                }}
              >
                <div className="card-body d-flex flex-column justify-content-end text-center bg-dark bg-opacity-50 h-100">
                  <h5 className="card-title fw-bold">{tour.title}</h5>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-warning fw-bold"
                      onClick={() => handleBooking(tour)}
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
