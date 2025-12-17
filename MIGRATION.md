# Turf Booking - Migration Guide

## Original Project to MERN Stack Conversion

This document explains the conversion process from the original static HTML/PHP website to a modern MERN stack application.

## Original Project Structure

```
webTechProject/
├── home.html
├── about.html
├── book.html
├── location.html
├── home.css
├── location.css
├── tutu.php (PHP backend)
├── css/ (Bootstrap files)
└── js/ (Bootstrap files)
```

## New MERN Project Structure

```
turf-booking-mern/
├── backend/ (Node.js + Express + MongoDB)
└── frontend/ (React application)
```

## Conversion Details

### 1. Frontend Conversion

#### home.html → Home.js (React Component)

- Converted static HTML to React component
- Integrated React Router for navigation
- Maintained Bootstrap styling with React-Bootstrap
- Added dynamic content capabilities

#### about.html → About.js

- Converted to React functional component
- Preserved all content and styling
- Made responsive with React-Bootstrap

#### book.html → Booking.js

- Converted form to React controlled components
- Integrated state management with useState hooks
- Added form validation
- Connected to backend API using Axios
- Added success/error message handling

#### location.html → Location.js

- Converted to React component
- Maintained Google Maps integration
- Responsive design with Bootstrap

#### Navigation

- Created reusable Navbar.js component
- Implemented React Router Links
- Consistent across all pages

### 2. Backend Conversion

#### tutu.php → Express.js API

**Original PHP Code:**

```php
<?php
// MySQL connection
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
// Insert booking
$sql = "INSERT INTO bookings...";
?>
```

**New Express.js Code:**

```javascript
// MongoDB with Mongoose
const Booking = require("./models/Booking");
router.post("/", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
});
```

**Key Changes:**

- MySQL → MongoDB
- Synchronous PHP → Async/Await Node.js
- Direct SQL → Mongoose ORM
- Single script → RESTful API with routes

### 3. Database Migration

#### MySQL to MongoDB

**Original MySQL Table:**

```sql
CREATE TABLE bookings (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  date DATE,
  time TIME,
  addon VARCHAR(50)
);
```

**New MongoDB Schema:**

```javascript
const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  addons: {
    water: Boolean,
    prime: Boolean,
    gatorade: Boolean,
  },
  status: { type: String, enum: ["pending", "confirmed", "cancelled"] },
  createdAt: { type: Date, default: Date.now },
});
```

**Improvements:**

- Structured addon data (separate fields instead of string)
- Added status tracking
- Automatic timestamp creation
- Schema validation

### 4. Styling Conversion

#### Original CSS Files

- home.css
- location.css
- Inline styles in HTML

#### New CSS Structure

- Component-specific CSS files
- App.css for global styles
- CSS modules approach
- Maintained design consistency
- Enhanced with modern CSS features

### 5. Dependencies

#### Original Project Dependencies

- Bootstrap 4 (CDN)
- jQuery (CDN)
- Popper.js (CDN)

#### New Project Dependencies

**Backend:**

```json
{
  "express": "^4.18.2",
  "mongoose": "^8.0.0",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "body-parser": "^1.20.2"
}
```

**Frontend:**

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "axios": "^1.6.2",
  "bootstrap": "^5.3.2",
  "react-bootstrap": "^2.9.1"
}
```

## API Mapping

### Original Form Submission

```
POST book.html → tutu.php
- name
- date
- time
- addon1, addon2, addon3 (checkboxes)
```

### New API Endpoints

```
POST /api/bookings
GET /api/bookings
GET /api/bookings/:id
PUT /api/bookings/:id
DELETE /api/bookings/:id
```

## Features Added in MERN Version

1. **RESTful API**: Complete CRUD operations
2. **Status Tracking**: Pending/Confirmed/Cancelled
3. **Confirmation Page**: View all bookings dynamically
4. **Error Handling**: Frontend and backend validation
5. **Responsive Design**: Better mobile experience
6. **Single Page Application**: No page reloads
7. **Modular Code**: Component-based architecture
8. **Environment Configuration**: .env files for settings
9. **Development Tools**: Hot reload, debugging
10. **Scalability**: Easy to add new features

## Running the Application

### Original Project

1. Start Apache/PHP server
2. Start MySQL database
3. Open home.html in browser
4. Forms submit via POST to PHP

### New MERN Project

**Backend:**

```bash
cd backend
npm install
npm start  # Runs on http://localhost:5000
```

**Frontend:**

```bash
cd frontend
npm install
npm start  # Runs on http://localhost:3000
```

## Testing the Migration

1. Start MongoDB service
2. Start backend server
3. Start frontend development server
4. Test all pages:
   - Home page loads correctly
   - Navigation works
   - Booking form submits successfully
   - Confirmation page displays bookings
   - About and Location pages render properly

## Advantages of MERN Stack

1. **JavaScript Everywhere**: Same language for frontend and backend
2. **Modern Development**: Latest frameworks and tools
3. **Better Performance**: SPA performance, async operations
4. **Scalability**: Easier to scale and maintain
5. **Rich Ecosystem**: Large npm package library
6. **Developer Experience**: Better debugging and development tools
7. **API-First**: Can easily add mobile apps or other clients
8. **NoSQL Flexibility**: Easier schema changes with MongoDB

## Migration Checklist

- ✅ Convert HTML pages to React components
- ✅ Replace PHP with Express.js API
- ✅ Migrate MySQL to MongoDB
- ✅ Implement React Router for navigation
- ✅ Create reusable components (Navbar)
- ✅ Set up backend API routes
- ✅ Implement form handling with state
- ✅ Add error handling
- ✅ Create confirmation/admin page
- ✅ Style with React-Bootstrap
- ✅ Add environment configuration
- ✅ Document API endpoints
- ✅ Create README

## Next Steps

1. Deploy to production (Heroku, Vercel, etc.)
2. Add user authentication
3. Implement payment system
4. Add admin dashboard
5. Set up automated testing
6. Add email notifications
7. Implement real-time availability
