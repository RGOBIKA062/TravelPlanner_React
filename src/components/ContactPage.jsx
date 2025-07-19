import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      
      {/* Spacer between Navbar and content */}
      <div style={{ height: '80px' }}></div>

      <main className="container flex-grow-1">
        <div className="row g-4 justify-content-center">
          
          {/* Contact Details Card */}
          <div className="col-lg-5 col-md-6">
            <div className="card shadow p-4 h-100 w-100">
              <h4 className="text-primary mb-3">Essential Details</h4>
              <p className="mb-2"><strong>Email:</strong> support@travelplanner.com</p>
              <p className="mb-2"><strong>Phone:</strong> +91-98765-43210</p>
              <p className="mb-2"><strong>Address:</strong> 123 Travel Street, Chennai, India</p>
              <p className="text-muted small">
                We'd love to hear from you! Reach out to us for queries and suggestions.
              </p>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="col-lg-5 col-md-6">
            <div className="card shadow p-4 h-100 w-100">
              <ContactForm />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
