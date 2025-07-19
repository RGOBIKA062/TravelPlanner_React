import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #007bff, #0056b3)',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        boxShadow: '0 4px 15px rgba(0,123,255,0.3)',
        transition: 'all 0.3s ease',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        zIndex: 1000
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1) translateY(-5px)';
        e.target.style.boxShadow = '0 6px 20px rgba(0,123,255,0.4)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1) translateY(0)';
        e.target.style.boxShadow = '0 4px 15px rgba(0,123,255,0.3)';
      }}
    >
      ↑
    </button>
  );
}
