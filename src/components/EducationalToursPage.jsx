import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function EducationalToursPage() {
  const navigate = useNavigate();

  const tourData = [
    { title: 'SCIENCE MUSEUM TOUR', image: '/science_museum.jpeg', price: 4000 },
    { title: 'PLANETARIUM VISIT', image: '/planetarium.jpeg', price: 3500 },
    { title: 'ISRO SPACE CENTER TRIP', image: '/isro.jpeg', price: 5500 },
    { title: 'HISTORICAL SITES TOUR', image: '/historical.jpeg', price: 3000 },
  ];

  const handleBooking = (tour) => {
    const query = new URLSearchParams({
      destination: tour.title,
      image: tour.image,
      price: tour.price,
    }).toString();
    navigate(`/booking?${query}`);
  };

  return (
    <div className="pt-5">
      <div
        style={{
          backgroundImage: `url('/education.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 5px #000',
        }}
      >
        EDUCATIONAL TOUR PACKAGES
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
