import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function IndianPage() {
  const navigate = useNavigate();

  const tourData = [
    {
      title: 'NORTH INDIAN TOURS',
      count: 4,
      image: '/north.jpg',
      path: '/destinations/indian/north'
    },
    {
      title: 'SOUTH INDIAN TOURS',
      count: 4,
      image: '/south.jpg',
      path: '/destinations/indian/south'
    },
    {
      title: 'EAST INDIAN TOURS',
      count: 4,
      image: '/east.jpg',
      path: '/destinations/indian/east'
    },
    {
      title: 'EDUCATIONAL TOURS',
      count: 4,
      image: '/education.jpg',
      path: '/destinations/indian/education'
    }
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="pt-5">
      <div
        style={{
          backgroundImage: `url('/indiantours.png')`,
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
        INDIA TOUR PACKAGES
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
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => handleCardClick(tour.path)}
              >
                <div className="card-body d-flex flex-column justify-content-end text-center bg-dark bg-opacity-50 h-100">
                  <h5 className="card-title fw-bold">{tour.title}</h5>
                  <button className="btn btn-warning mt-2 fw-bold">
                    {tour.count} TOURS
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
