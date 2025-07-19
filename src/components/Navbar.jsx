import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ onBudgetClick, onLoginClick }) {
  const navigate = useNavigate();

  const handleNavClick = (e, action) => {
    e.preventDefault();
    action();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
      <div className="container">
        <a
          className="navbar-brand"
          href="/"
          onClick={(e) =>
            handleNavClick(e, () => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            })
          }
        >
          TRAVEL PLANNER
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                onClick={(e) =>
                  handleNavClick(e, () => {
                    navigate('/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  })
                }
              >
                Home
              </a>
            </li>



            <li className="nav-item">
              <a
                className="nav-link"
                href="/my-bookings"
                onClick={(e) => handleNavClick(e, () => navigate('/my-bookings'))}
              >
                My Bookings
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/contact"
                onClick={(e) => handleNavClick(e, () => navigate('/contact'))}
              >
                Contact
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/login"
                onClick={(e) => handleNavClick(e, onLoginClick)}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
