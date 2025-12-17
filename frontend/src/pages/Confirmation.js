import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navbar';
import { Container, Table, Alert, Badge } from 'react-bootstrap';
import axios from 'axios';
import '../styles/Confirmation.css';

function Confirmation() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('/api/bookings');
      setBookings(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching bookings');
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const getAddonsText = (addons) => {
    const selectedAddons = [];
    if (addons.water) selectedAddons.push('Water');
    if (addons.prime) selectedAddons.push('Prime');
    if (addons.gatorade) selectedAddons.push('Gatorade');
    return selectedAddons.length > 0 ? selectedAddons.join(', ') : 'None';
  };

  return (
    <div className="background-container">
      <Navigation />
      <Container className="mt-5">
        <div className="confirmation-header">
          <h1>Booking Confirmations</h1>
        </div>

        {loading ? (
          <Alert variant="info" className="mt-4">Loading bookings...</Alert>
        ) : error ? (
          <Alert variant="danger" className="mt-4">{error}</Alert>
        ) : bookings.length === 0 ? (
          <Alert variant="warning" className="mt-4">No bookings found</Alert>
        ) : (
          <div className="table-container mt-4">
            <Table striped bordered hover variant="dark" responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Add-ons</th>
                  <th>Status</th>
                  <th>Booked On</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={booking._id}>
                    <td>{index + 1}</td>
                    <td>{booking.name}</td>
                    <td>{formatDate(booking.date)}</td>
                    <td>{booking.time}</td>
                    <td>{getAddonsText(booking.addons)}</td>
                    <td>
                      <Badge 
                        bg={
                          booking.status === 'confirmed' ? 'success' : 
                          booking.status === 'cancelled' ? 'danger' : 
                          'warning'
                        }
                      >
                        {booking.status}
                      </Badge>
                    </td>
                    <td>{formatDate(booking.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Confirmation;
