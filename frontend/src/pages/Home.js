import React from 'react';
import Navigation from '../components/Navbar';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Home.css';
import qualityImg from '../assets/enc-sports-turf-jk-gram-thane-west-mumbai-yhq2pyqds4.avif';
import flexibleImg from '../assets/top-quality-artificial-grass-e1646141587391.jpeg';
import staffImg from '../assets/istockphoto-163352420-612x612.jpg';

function Home() {
  return (
    <div className="background-container">
      <Navigation />
      <Container className="mt-5">
        <div className="jumbotron text-center">
          <h1 className="display-4">Welcome to Turf Booking!</h1>
          <p className="lead">Book your turf and enjoy sports with friends.</p>
        </div>

        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={qualityImg}
                alt="Quality Turf"
              />
              <Card.Body>
                <Card.Title>Quality Turf</Card.Title>
                <Card.Text>
                  Our turfs are well-maintained and perfect for various sports activities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={flexibleImg}
                alt="Flexible Booking"
              />
              <Card.Body>
                <Card.Title>Flexible Booking</Card.Title>
                <Card.Text>
                  Book your turf at your convenience and enjoy sports anytime.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={staffImg}
                alt="Professional Staff"
              />
              <Card.Body>
                <Card.Title>Professional Staff</Card.Title>
                <Card.Text>
                  Our staff is dedicated to ensuring you have a great sports experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
