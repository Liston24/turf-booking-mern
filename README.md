# Turf Booking MERN Application

A full-stack turf booking application converted from a static HTML/PHP website to a modern MERN (MongoDB, Express.js, React, Node.js) stack application.

## Features

- **Home Page**: Welcome page with information about the turf facility
- **About Page**: Details about facilities, services, and upcoming events
- **Location Page**: Interactive map and address information
- **Booking Page**: Form to book turf with date, time, and add-ons selection
- **Confirmation Page**: View all bookings with status tracking

## Technology Stack

### Backend

- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling

### Frontend

- **React**: Frontend library
- **React Router**: Client-side routing
- **Bootstrap & React-Bootstrap**: UI components
- **Axios**: HTTP client

## Project Structure

```
turf-booking-mern/
├── backend/
│   ├── config/
│   ├── models/
│   │   └── Booking.js
│   ├── routes/
│   │   └── bookings.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   └── Navbar.js
    │   ├── pages/
    │   │   ├── Home.js
    │   │   ├── About.js
    │   │   ├── Location.js
    │   │   ├── Booking.js
    │   │   └── Confirmation.js
    │   ├── styles/
    │   │   ├── Home.css
    │   │   ├── About.css
    │   │   ├── Location.css
    │   │   ├── Booking.css
    │   │   └── Confirmation.css
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    ├── .gitignore
    └── package.json
```

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   - Edit the `.env` file
   - Update `MONGODB_URI` with your MongoDB connection string
   - Default: `mongodb://localhost:27017/turf_booking`

4. Start the backend server:

   ```bash
   npm start
   ```

   Or for development with auto-reload:

   ```bash
   npm run dev
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`

## API Endpoints

### Bookings

- **GET** `/api/bookings` - Get all bookings
- **GET** `/api/bookings/:id` - Get single booking by ID
- **POST** `/api/bookings` - Create new booking
- **PUT** `/api/bookings/:id` - Update booking
- **DELETE** `/api/bookings/:id` - Delete booking

### Example Request Body (POST /api/bookings)

```json
{
  "name": "John Doe",
  "date": "2024-12-25",
  "time": "14:00",
  "addons": {
    "water": true,
    "prime": false,
    "gatorade": true
  }
}
```

## Database Schema

### Booking Model

```javascript
{
  name: String (required),
  date: Date (required),
  time: String (required),
  addons: {
    water: Boolean,
    prime: Boolean,
    gatorade: Boolean
  },
  status: String (enum: ['pending', 'confirmed', 'cancelled']),
  createdAt: Date (auto-generated)
}
```

## Key Improvements from Original Project

1. **Modern Architecture**: Converted from static HTML/PHP to MERN stack
2. **RESTful API**: Backend API with proper routing and error handling
3. **Single Page Application**: React-based SPA with client-side routing
4. **Database Integration**: MongoDB for persistent data storage
5. **Component-Based UI**: Reusable React components
6. **State Management**: React hooks for state management
7. **Responsive Design**: Bootstrap integration for mobile-friendly UI
8. **Error Handling**: Comprehensive error handling on both frontend and backend
9. **Status Tracking**: Booking status management (pending/confirmed/cancelled)
10. **Real-time Updates**: Dynamic data fetching and display

## Development Notes

### Original Project Analysis

- Static HTML pages with Bootstrap 4
- PHP backend for form processing
- MySQL database
- No client-side routing
- Server-side form submission

### MERN Conversion

- React components replace HTML pages
- Express.js API replaces PHP scripts
- MongoDB replaces MySQL
- React Router for navigation
- Axios for API communication
- Modern ES6+ JavaScript

## Future Enhancements

- User authentication and authorization
- Admin dashboard for managing bookings
- Payment integration
- Email notifications
- Booking calendar view
- Time slot availability checking
- User profiles and booking history
- Real-time availability updates
- Review and rating system

## License

This project is open source and available for educational purposes.

## Support

For issues or questions, please contact the development team.
