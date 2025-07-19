import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Home, Calendar, Phone, LogIn } from 'lucide-react';

export default function Navbar({ onBudgetClick, onLoginClick }) {
  const navigate = useNavigate();

  const handleNavClick = (e, action) => {
    e.preventDefault();
    action();
  };

  const handleBrandHover = (isHovering) => {
    const brand = document.querySelector('.brand-with-icon');
    const icon = brand?.querySelector('.travel-icon');
    const text = brand?.querySelector('.brand-text');
    
    const color = isHovering ? '#D4AF37' : '#ffffff';
    
    if (brand) brand.style.color = color;
    if (icon) icon.style.color = color;
    if (text) text.style.color = color;
  };

  const handleNavLinkHover = (linkElement, isHovering) => {
    const icon = linkElement.querySelector('.nav-icon');
    const span = linkElement.querySelector('span');
    
    const color = isHovering ? '#D4AF37' : '#ffffff';
    
    linkElement.style.color = color;
    if (icon) icon.style.color = color;
    if (span) span.style.color = color;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top professional-navbar">
      <div className="container">
        <a
          className="navbar-brand brand-with-icon"
          href="/"
          style={{ color: '#ffffff' }}
          onMouseEnter={() => handleBrandHover(true)}
          onMouseLeave={() => handleBrandHover(false)}
          onClick={(e) =>
            handleNavClick(e, () => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            })
          }
        >
          <Plane 
            className="travel-icon" 
            size={24} 
            style={{ color: '#ffffff' }}
          />
          <span 
            className="brand-text" 
            style={{ color: '#ffffff' }}
          >
            TRAVEL PLANNER
          </span>
        </a>

        <button
          className="navbar-toggler custom-toggler"
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
                className="nav-link custom-nav-link"
                href="/"
                style={{ color: '#ffffff' }}
                onMouseEnter={(e) => handleNavLinkHover(e.target, true)}
                onMouseLeave={(e) => handleNavLinkHover(e.target, false)}
                onClick={(e) =>
                  handleNavClick(e, () => {
                    navigate('/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  })
                }
              >
                <Home size={18} className="nav-icon" style={{ color: '#ffffff' }} />
                <span style={{ color: '#ffffff' }}>Home</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link custom-nav-link"
                href="/my-bookings"
                style={{ color: '#ffffff' }}
                onMouseEnter={(e) => handleNavLinkHover(e.target, true)}
                onMouseLeave={(e) => handleNavLinkHover(e.target, false)}
                onClick={(e) => handleNavClick(e, () => navigate('/my-bookings'))}
              >
                <Calendar size={18} className="nav-icon" style={{ color: '#ffffff' }} />
                <span style={{ color: '#ffffff' }}>My Bookings</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link custom-nav-link"
                href="/contact"
                style={{ color: '#ffffff' }}
                onMouseEnter={(e) => handleNavLinkHover(e.target, true)}
                onMouseLeave={(e) => handleNavLinkHover(e.target, false)}
                onClick={(e) => handleNavClick(e, () => navigate('/contact'))}
              >
                <Phone size={18} className="nav-icon" style={{ color: '#ffffff' }} />
                <span style={{ color: '#ffffff' }}>Contact</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link custom-nav-link"
                href="/login"
                style={{ color: '#ffffff' }}
                onMouseEnter={(e) => handleNavLinkHover(e.target, true)}
                onMouseLeave={(e) => handleNavLinkHover(e.target, false)}
                onClick={(e) => handleNavClick(e, onLoginClick)}
              >
                <LogIn size={18} className="nav-icon" style={{ color: '#ffffff' }} />
                <span style={{ color: '#ffffff' }}>Login</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
