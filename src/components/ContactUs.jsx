import React from 'react';
export default function ContactUs() {
  return (
    <div className="container my-5">
      <div className="card shadow p-4 text-center">
        <h2>Contact Us</h2>
        <p>Email: support@travelplanner.com | Phone: +123-456-7890</p>
        <p>Follow us on social media:</p>
        <div>
          <button className="btn btn-primary mx-2">Facebook</button>
          <button className="btn btn-danger mx-2">Instagram</button>
          <button className="btn btn-info mx-2">Twitter</button>
        </div>
      </div>
    </div>
  );
}
