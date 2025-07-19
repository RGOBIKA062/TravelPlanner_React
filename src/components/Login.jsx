import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Login() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-5 pt-5 flex-grow-1">
        <div className="card p-4 shadow" style={{ maxWidth: '400px', margin: '0 auto' }}>
          <h3 className="mb-3 text-center">Login</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter password" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <p className="mt-3 text-center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
