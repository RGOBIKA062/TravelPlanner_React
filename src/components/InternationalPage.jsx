import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function InternationalPage() {
  const navigate = useNavigate();

  const tourData = [
    { title: 'SINGAPORE TOURS', image: '/singapore.jpg', price: 18000 },
    { title: 'DUBAI TOURS', image: '/dubai.jpeg', price: 20000 },
    { title: 'MALAYSIA TOURS', image: '/malaysia.jpeg', price: 17000 },
    { title: 'WORLD TOUR', image: '/worldtour.jpeg', price: 30000 }
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
          backgroundImage: `url('/international.png')`,
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
                className="card text-white"
                style={{
                  height: '340px',
                  backgroundImage: `url(${tour.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <div className="card-body d-flex flex-column justify-content-end text-center bg-dark bg-opacity-50 h-100">
                  <h5 className="card-title fw-bold">{tour.title}</h5>
                  <button
                    className="btn btn-warning fw-bold mt-2"
                    onClick={() => handleBooking(tour)}
                  >
                    BOOK NOW
                  </button>
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
