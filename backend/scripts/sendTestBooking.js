const axios = require('axios');

async function send() {
  try {
    const res = await axios.post('http://localhost:5000/api/bookings', {
      name: 'Test User',
      date: new Date().toISOString().slice(0,10),
      time: '18:00',
      addons: { water: true, prime: false, gatorade: true }
    });
    console.log('Status:', res.status);
    console.log('Body:', res.data);
  } catch (err) {
    console.error('Error sending test booking:');
    console.error(err.response?.data || err.message || err);
    process.exit(1);
  }
}

send();
