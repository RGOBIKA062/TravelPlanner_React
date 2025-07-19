import React from 'react';
import Footer from './Footer';

export default function ConfirmationPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container text-center my-5 pt-5 flex-grow-1">
        <div className="card p-4 shadow-lg mx-auto" style={{ maxWidth: '500px' }}>
          <h2 className="text-success fw-bold">🎉 Booking Confirmed!</h2>
          <p className="mt-3">Thank you for your booking.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
