import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DestinationCard({ image, title, slug }) {
  const navigate = useNavigate();

  return (
    <div className="col-md-4 d-flex">
      <div className="card h-100 shadow-sm w-100">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: '220px', objectFit: 'cover' }}
        />
        <div className="card-body text-center d-flex flex-column justify-content-between">
          <h5 className="card-title fw-bold">{title}</h5>
          <button className="btn btn-primary mt-3" onClick={() => navigate(`/destinations/${slug}`)}>GET IN</button>
        </div>
      </div>
    </div>
  );
}
