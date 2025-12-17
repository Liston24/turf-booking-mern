import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navbar';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import '../styles/Booking.css';

function Booking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    addons: {
      water: false,
      prime: false,
      gatorade: false
    }
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        addons: {
          ...prev.addons,
          [name]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      console.log('Submitting booking...', formData);
      const response = await axios.post('/api/bookings', formData);
      console.log('Booking response:', response);
      setSuccess('Booking successfully created!');
      
      // Store booking ID in sessionStorage for confirmation page
      sessionStorage.setItem('lastBookingId', response.data.booking._id);
      
      // Reset form
      setFormData({
        name: '',
        date: '',
        time: '',
        addons: {
          water: false,
          prime: false,
          gatorade: false
        }
      });

      // Redirect to confirmation page after 2 seconds
      setTimeout(() => {
        navigate('/confirmation');
      }, 2000);
    } catch (err) {
      console.error('Booking submission error:', err);
      // Prefer server message, then axios message, then generic
      const serverMsg = err.response?.data?.message;
      const axiosMsg = err.message;
      setError(serverMsg || axiosMsg || 'Error creating booking');
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="background-container">
      <Navigation />
      <Container className="mt-5">
        <div className="header-design">
          <h1>Football Ground Booking</h1>
        </div>
        
        <div className="form-container mt-4">
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Time:</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Add Ons:</Form.Label>
              <div className="ms-4">
                <Form.Check
                  type="checkbox"
                  name="water"
                  label="Water"
                  checked={formData.addons.water}
                  onChange={handleChange}
                />
                <Form.Check
                  type="checkbox"
                  name="prime"
                  label="Prime"
                  checked={formData.addons.prime}
                  onChange={handleChange}
                />
                <Form.Check
                  type="checkbox"
                  name="gatorade"
                  label="Gatorade"
                  checked={formData.addons.gatorade}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Booking;
