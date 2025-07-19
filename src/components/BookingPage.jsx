import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const destination = params.get('destination') || 'Not Selected';
  const image = params.get('image') || 'https://via.placeholder.com/400';
  const price = parseFloat(params.get('price')) || 0;

  const [numTravelers, setNumTravelers] = useState(1);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [travelType, setTravelType] = useState('bus');
  const [totalDays, setTotalDays] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const travelCosts = {
    bus: 2000,
    train: 4000,
    airplane: 20000
  };

  useEffect(() => {
    if (fromDate && toDate) {
      const from = new Date(fromDate);
      const to = new Date(toDate);
      const days = Math.ceil((to - from) / (1000 * 60 * 60 * 24));
      setTotalDays(days > 0 ? days : 0);
    }
  }, [fromDate, toDate]);

  useEffect(() => {
    if (totalDays > 0 && numTravelers > 0) {
      const travelCost = travelCosts[travelType] * numTravelers;
      const stayCost = totalDays * numTravelers * price;
      setTotalCost(travelCost + stayCost);
    }
  }, [totalDays, numTravelers, price, travelType]);

  const handleBooking = () => {
    const booking = {
      destination,
      fromDate,
      toDate,
      numTravelers,
      travelType,
      totalDays,
      totalCost,
      image,
      daysNights: `${totalDays} Days / ${totalDays - 1} Nights`,
      totalAmount: `₹${totalCost.toLocaleString()}`
    };

    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    existingBookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));
    localStorage.setItem('latestBooking', JSON.stringify(booking));

    navigate('/confirmation');
  };

  return (
    <div className="booking-layout d-flex flex-column min-vh-100">
      <div className="container my-5 pt-5 flex-grow-1">
        <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: '700px' }}>
          <h2 className="text-center mb-4 fw-bold">Confirm Your Booking</h2>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Destination</label>
              <input type="text" className="form-control" value={destination} readOnly />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Price per Day (₹)</label>
              <input type="text" className="form-control" value={price} readOnly />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">From Date</label>
              <input
                type="date"
                className="form-control"
                value={fromDate}
                onChange={e => setFromDate(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">To Date</label>
              <input
                type="date"
                className="form-control"
                value={toDate}
                onChange={e => setToDate(e.target.value)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Number of Travelers</label>
              <input
                type="number"
                className="form-control"
                min={1}
                value={numTravelers}
                onChange={e => setNumTravelers(parseInt(e.target.value) || 1)}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Travel Mode</label>
              <select
                className="form-control"
                value={travelType}
                onChange={e => setTravelType(e.target.value)}
              >
                <option value="bus">Bus</option>
                <option value="train">Train</option>
                <option value="airplane">Airplane</option>
              </select>
            </div>

            {totalDays > 0 && (
              <div className="col-md-6 mb-3">
                <label className="form-label">Total Duration</label>
                <input
                  type="text"
                  className="form-control"
                  value={`${totalDays} Days / ${totalDays - 1} Nights`}
                  readOnly
                />
              </div>
            )}

            {totalCost > 0 && (
              <div className="col-md-6 mb-3">
                <label className="form-label">Total Amount (₹)</label>
                <input
                  type="text"
                  className="form-control text-success fw-bold"
                  value={`₹${totalCost.toLocaleString()}`}
                  readOnly
                />
              </div>
            )}
          </div>

          <button className="btn btn-success mt-4 w-100 fw-bold" onClick={handleBooking}>
            Confirm Booking
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
