import React, { useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import DestinationCard from './components/DestinationCard';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

import destinations from './data/destinations';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AfterBooking from './components/AfterBooking';
import ContactPage from './components/ContactPage';
import IndianPage from './components/IndianPage';
import EuropePage from './components/EuropePage';
import InternationalPage from './components/InternationalPage';
import BookingPage from './components/BookingPage';
import ConfirmationPage from './components/ConfirmationPage';
import NorthIndiaPage from './components/NorthIndiaPage';
import SouthIndiaPage from './components/SouthIndiaPage';
import EastIndiaPage from './components/EastIndiaPage';
import EducationalToursPage from './components/EducationalToursPage';
export default function App() {
  const contactRef = useRef(null);
  const navigate = useNavigate();

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        onContactClick={scrollToContact}
        onLoginClick={() => navigate('/login')}
        onSignupClick={() => navigate('/signup')}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div style={{ marginTop: '56px' }}></div>
              <Carousel />
              <div className="container my-5">
                <div className="card shadow p-4">
                  <h2 className="text-center mb-4"><b>POPULAR DESTINATIONS</b></h2>
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    {destinations.map((dest, index) => (
                      <DestinationCard key={index} {...dest} />
                    ))}
                  </div>
                </div>
              </div>
              <div ref={contactRef}>
                <ContactUs />
              </div>
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/my-bookings" element={<AfterBooking />} />
        <Route path="/destinations/indian/education" element={<EducationalToursPage />} />
        <Route path="/destinations/indian" element={<IndianPage />} />
        <Route path="/destinations/indian/north" element={<NorthIndiaPage />} />
        <Route path="/destinations/indian/south" element={<SouthIndiaPage />} />
        <Route path="/destinations/indian/east" element={<EastIndiaPage />} />
        <Route path="/destinations/europe" element={<EuropePage />} />
        <Route path="/destinations/international" element={<InternationalPage />} />
      </Routes>
    </>
  );
}
