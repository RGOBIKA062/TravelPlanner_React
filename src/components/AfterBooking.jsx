import React, { useState, useEffect } from 'react';
import Footer from './Footer';

export default function AfterBooking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  const handleCancel = (indexToRemove) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirmCancel) return;

    const updated = bookings.filter((_, index) => index !== indexToRemove);
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-5 pt-5 flex-grow-1">
        <h2 className="text-center mb-4 fw-bold">Your Bookings</h2>

        {bookings.length === 0 ? (
          <div className="card shadow p-4 mx-auto text-center" style={{ maxWidth: '500px' }}>
            <h4 className="text-muted">No Active Bookings Found</h4>
            <p className="text-secondary">You haven't made a booking yet.</p>
          </div>
        ) : (
          <div className="row">
            {bookings.map((booking, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card shadow-sm p-3 text-center h-100">
                  {booking.image && (
                    <img
                      src={booking.image}
                      alt={booking.destination}
                      className="img-fluid rounded mb-3"
                    />
                  )}
                  <h5 className="fw-bold">{booking.destination}</h5>
                  <p><strong>Duration:</strong> {booking.totalDays} Days</p>
                  <p className="text-success fw-bold">
                    <strong>Total Cost:</strong> ₹{booking.totalCost?.toLocaleString()}
                  </p>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => handleCancel(index)}
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
