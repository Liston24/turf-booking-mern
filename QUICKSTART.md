# Quick Start Guide

## Prerequisites Check

- ✅ Node.js installed? Run: `node --version`
- ✅ npm installed? Run: `npm --version`
- ✅ MongoDB installed/running? Run: `mongod --version`

## Installation (5 minutes)

### 1. Install Dependencies

**Backend:**

```powershell
cd backend
npm install
```

**Frontend:**

```powershell
cd frontend
npm install
```

### 2. Start MongoDB

**Windows:**

```powershell
net start MongoDB
```

**macOS/Linux:**

```bash
sudo systemctl start mongod
```

**Or use MongoDB Atlas (cloud) - just update the connection string in backend/.env**

### 3. Run the Application

**Terminal 1 - Backend:**

```powershell
cd backend
npm run dev
```

✅ Backend should be running on http://localhost:5000

**Terminal 2 - Frontend:**

```powershell
cd frontend
npm start
```

✅ Frontend should open automatically on http://localhost:3000

## Test the Application

1. **Home Page**: Should load with welcome message and cards
2. **Booking Page**: Fill out the form and submit
3. **Confirmation Page**: Should show your booking
4. **Location Page**: Map should display
5. **About Page**: Information cards should be visible

## Common Issues

### "MongoDB not connected"

- Start MongoDB service
- Check connection string in `backend/.env`

### "Port already in use"

- Kill the process or change ports in configuration

### "Module not found"

- Run `npm install` in the respective directory

## File Structure

```
turf-booking-mern/
├── backend/          # Node.js + Express API
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   └── server.js     # Entry point
├── frontend/         # React application
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   └── styles/      # CSS files
│   └── public/
└── README.md
```

## Next Steps

1. ✅ Application running? Great!
2. 📖 Read README.md for detailed information
3. 🔧 Read MIGRATION.md to understand the conversion
4. 📚 Read INSTALLATION.md for deployment options

## Need Help?

- Check console logs for errors (both backend and frontend)
- Open browser DevTools (F12) to see client-side errors
- Review the documentation files

Happy coding! 🚀
