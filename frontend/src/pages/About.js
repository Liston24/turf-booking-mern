import React from 'react';
import Navigation from '../components/Navbar';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/About.css';

function About() {
  return (
    <div className="background-container">
      <Navigation />
      <header className="hero">
        <div className="hero-overlay">
          <h1>Welcome to Our Turf Football Ground</h1>
        </div>
      </header>

      <Container className="mt-5">
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <Card className="glass-panel about-card">
              <Card.Body>
                <Card.Title as="h2">Overview</Card.Title>
                <Card.Text>
                  Our turf football ground is a state-of-the-art facility dedicated to the love
                  of the game. With immaculate artificial turf, it provides an exceptional 
                  playing surface for football enthusiasts of all ages and skill levels. We're 
                  committed to promoting the beautiful game and providing a safe and enjoyable 
                  environment for all.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="glass-panel about-card">
              <Card.Body>
                <Card.Title as="h2">Facilities</Card.Title>
                <ul className="card-text">
                  <li>High-quality artificial turf field</li>
                  <li>Stadium seating for spectators</li>
                  <li>Changing rooms and showers</li>
                  <li>Concession stand for snacks and refreshments</li>
                  <li>Training and coaching programs</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="glass-panel about-card">
              <Card.Body>
                <Card.Title as="h2">Upcoming Events</Card.Title>
                <Card.Text>
                  Stay updated with our latest events and tournaments. Whether you're a player
                  or a spectator, there's always something exciting happening at our turf 
                  football ground.
                </Card.Text>
                <ul className="card-text">
                  <li>Monthly 5-a-side tournaments</li>
                  <li>Youth development clinics</li>
                  <li>Community charity matches</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <p>If you have any questions or inquiries, please feel free to get in touch with us:</p>
          <address>
            <p>Email: <a href="mailto:info@turfground.com">info@turfground.com</a></p>
            <p>Phone: <a href="tel:+1234567890">123-456-7890</a></p>
          </address>
        </section>

        <footer className="text-center mt-5 pb-4">
          <p>&copy; 2023 Turf Football Ground. All rights reserved.</p>
        </footer>
      </Container>
    </div>
  );
}

export default About;
