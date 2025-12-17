import React from 'react';
import Navigation from '../components/Navbar';
import { Container } from 'react-bootstrap';
import '../styles/Location.css';

function Location() {
  return (
    <div className="background-container">
      <Navigation />
      <div className="jumbotron">
        <h1 className="display-4">Location</h1>
        <p className="lead">This is where you have to be</p>
      </div>

      <Container className="mt-5">
        <div className="map-container text-center">
          <iframe
            title="Turf Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-86.1234567!3d40.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE1JzUyLjYiTiA4NsKwMTInMzcuMSJX!5e0!3m2!1sen!2sus!4v1234567890"
            allowFullScreen
            style={{ width: '100%', maxWidth: '800px', height: '500px', border: 0 }}
          ></iframe>
        </div>

        <div className="address-section lead">
          <p>We are conveniently located at:</p>
          <address>
            <p>24/G The GOAT Arena</p>
            <p>Areal, Goa 40367</p>
          </address>
        </div>
      </Container>
    </div>
  );
}

export default Location;
