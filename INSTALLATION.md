# Installation Guide - Turf Booking MERN Application

## System Requirements

- **Node.js**: Version 14.x or higher
- **npm**: Version 6.x or higher (comes with Node.js)
- **MongoDB**: Version 4.x or higher
- **Operating System**: Windows, macOS, or Linux
- **Browser**: Modern browser (Chrome, Firefox, Safari, Edge)

## Step-by-Step Installation

### 1. Install Node.js and npm

If you don't have Node.js installed:

**Windows:**

1. Download from https://nodejs.org/
2. Run the installer
3. Follow installation wizard
4. Verify installation:
   ```powershell
   node --version
   npm --version
   ```

**macOS:**

```bash
brew install node
```

**Linux:**

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Install MongoDB

**Option A: Local Installation**

**Windows:**

1. Download MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Run the installer
3. Choose "Complete" installation
4. Install as a Windows Service
5. Start MongoDB:
   ```powershell
   net start MongoDB
   ```

**macOS:**

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux (Ubuntu):**

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

**Option B: MongoDB Atlas (Cloud)**

1. Sign up at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Use in `.env` file

### 3. Clone or Download the Project

Navigate to the project directory:

```powershell
cd "c:\Users\Liston\Desktop\All folder\turf-booking-mern"
```

### 4. Backend Setup

1. Open a terminal and navigate to backend folder:

   ```powershell
   cd backend
   ```

2. Install backend dependencies:

   ```powershell
   npm install
   ```

3. Configure environment variables:

   - Open `.env` file
   - Update the following variables:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/turf_booking
   NODE_ENV=development
   ```

   If using MongoDB Atlas:

   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/turf_booking
   ```

4. Start the backend server:

   ```powershell
   npm start
   ```

   Or with auto-reload for development:

   ```powershell
   npm run dev
   ```

   You should see:

   ```
   Server is running on port 5000
   MongoDB connected successfully
   ```

### 5. Frontend Setup

1. Open a NEW terminal window/tab
2. Navigate to frontend folder:

   ```powershell
   cd "c:\Users\Liston\Desktop\All folder\turf-booking-mern\frontend"
   ```

3. Install frontend dependencies:

   ```powershell
   npm install
   ```

   This will install React and all required packages.

4. Start the React development server:

   ```powershell
   npm start
   ```

   The application will automatically open in your browser at:

   ```
   http://localhost:3000
   ```

## Verification

### Check Backend

1. Backend running on: http://localhost:5000
2. Test health endpoint: http://localhost:5000/api/health
3. Should return: `{"status":"Server is running","timestamp":"..."}`

### Check Frontend

1. Frontend running on: http://localhost:3000
2. Should display the Home page
3. Navigation should work
4. Try booking a turf

### Check Database

1. Open MongoDB Compass (if installed)
2. Connect to: `mongodb://localhost:27017`
3. Look for `turf_booking` database
4. After creating a booking, check `bookings` collection

## Troubleshooting

### Issue: "npm: command not found"

**Solution:** Install Node.js and restart terminal

### Issue: "Cannot connect to MongoDB"

**Solution:**

- Check if MongoDB service is running
- Windows: `net start MongoDB`
- macOS/Linux: `sudo systemctl status mongod`
- Verify connection string in `.env`

### Issue: Port 3000 or 5000 already in use

**Solution:**

- Kill process using that port
- Windows: `netstat -ano | findstr :3000` then `taskkill /PID <PID> /F`
- Or change port in `.env` (backend) or package.json (frontend)

### Issue: "Module not found" errors

**Solution:**

```powershell
rm -r node_modules
rm package-lock.json
npm install
```

### Issue: MongoDB connection timeout

**Solution:**

- Check firewall settings
- If using Atlas, whitelist your IP address
- Verify connection string is correct

### Issue: CORS errors in browser

**Solution:**

- Ensure backend is running
- Check proxy in frontend package.json: `"proxy": "http://localhost:5000"`

## Development Workflow

### Running Both Servers

You need TWO terminal windows:

**Terminal 1 (Backend):**

```powershell
cd backend
npm run dev
```

**Terminal 2 (Frontend):**

```powershell
cd frontend
npm start
```

### Making Changes

**Backend Changes:**

- Edit files in `backend/` folder
- Server auto-restarts with `nodemon` (if using `npm run dev`)

**Frontend Changes:**

- Edit files in `frontend/src/` folder
- Browser auto-reloads with React hot reload

## Production Deployment

### Backend Deployment (Heroku example)

1. Install Heroku CLI
2. Login to Heroku:

   ```bash
   heroku login
   ```

3. Create app:

   ```bash
   cd backend
   heroku create turf-booking-api
   ```

4. Set environment variables:

   ```bash
   heroku config:set MONGODB_URI=your_mongodb_atlas_uri
   heroku config:set NODE_ENV=production
   ```

5. Deploy:
   ```bash
   git push heroku main
   ```

### Frontend Deployment (Vercel example)

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy:

   ```bash
   cd frontend
   vercel
   ```

3. Update API endpoint in frontend to point to deployed backend

## Additional Tools (Optional)

### MongoDB Compass

- GUI for MongoDB
- Download: https://www.mongodb.com/products/compass

### Postman

- API testing tool
- Download: https://www.postman.com/

### VS Code Extensions

- ES7 React/Redux/GraphQL snippets
- MongoDB for VS Code
- ESLint
- Prettier

## Getting Help

- Check README.md for general information
- Check MIGRATION.md for conversion details
- Review console logs for errors
- Check browser developer tools (F12)

## Quick Start Commands

```powershell
# Clone and setup
cd "c:\Users\Liston\Desktop\All folder\turf-booking-mern"

# Terminal 1 - Backend
cd backend
npm install
npm run dev

# Terminal 2 - Frontend
cd frontend
npm install
npm start
```

The application should now be running!

- Frontend: http://localhost:3000
- Backend: http://localhost:5000
