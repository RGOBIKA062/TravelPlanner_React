import React from 'react';

export default function Footer({ copyright }) {
  return (
    <footer className="bg-dark text-white text-center p-3 mt-5">
      <div>{copyright || '© 2025 Travel Planner. All Rights Reserved.'}</div>
    </footer>
  );
}
