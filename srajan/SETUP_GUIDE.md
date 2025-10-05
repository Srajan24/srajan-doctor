# Complete Setup Guide - Doctor Appointment Application

## 🔧 Prerequisites

Before you begin, ensure you have:
- **Node.js** (v16 or higher) installed
- **MongoDB** (local installation or MongoDB Atlas account)
- **Clerk Account** (for authentication) - Sign up at https://clerk.com
- **Git** (optional, for version control)

## 📋 Step-by-Step Setup

### Step 1: Install Dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd frontend
npm install
```

### Step 2: Configure Environment Variables

#### Backend Configuration

1. Copy the example file:
   ```bash
   cd backend
   copy .env.example .env
   ```

2. Edit `.env` and fill in your values:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/doctor-appointment
   # Add other API keys as needed
   ```

**MongoDB Setup Options:**

**Option A: Local MongoDB**
- Install MongoDB locally
- Use: `MONGO_URI=mongodb://localhost:27017/doctor-appointment`

**Option B: MongoDB Atlas (Cloud)**
- Create free account at https://www.mongodb.com/cloud/atlas
- Create a cluster
- Get connection string
- Use: `MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/doctor-appointment`

#### Frontend Configuration

1. Copy the example file:
   ```bash
   cd frontend
   copy .env.example .env
   ```

2. Edit `.env` and fill in your values:
   ```env
   VITE_API_URL=http://localhost:5000
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
   ```

**Clerk Setup:**
1. Sign up at https://clerk.com
2. Create a new application
3. Copy the "Publishable Key" from the dashboard
4. Paste it as `VITE_CLERK_PUBLISHABLE_KEY`

### Step 3: Start the Application

#### Option 1: Using PowerShell Script (Recommended)
```powershell
.\start-dev.ps1
```
This will open two terminal windows - one for backend, one for frontend.

#### Option 2: Manual Start

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Wait for: `🚀 Server running on port 5000` and `✅ MongoDB Connected`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Wait for: `Local: http://localhost:5173/`

### Step 4: Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

## 🎯 Verification Checklist

- [ ] Backend starts without errors
- [ ] See "✅ MongoDB Connected" message
- [ ] See "🚀 Server running on port 5000" message
- [ ] Frontend starts without errors
- [ ] Can access http://localhost:5173
- [ ] No console errors in browser
- [ ] Can see Clerk authentication UI

## 🐛 Troubleshooting

### Backend Issues

**Error: "Cannot connect to MongoDB"**
- Check if MongoDB is running (if local)
- Verify MONGO_URI in `.env`
- Check network connection (if using Atlas)

**Error: "Port 5000 already in use"**
- Change PORT in backend `.env` to another port (e.g., 5001)
- Update VITE_API_URL in frontend `.env` to match

**Error: "Module not found"**
- Run `npm install` again in backend folder
- Delete `node_modules` and `package-lock.json`, then run `npm install`

### Frontend Issues

**Error: "Failed to fetch" or "Network Error"**
- Ensure backend is running
- Check VITE_API_URL in frontend `.env` matches backend port
- Check browser console for CORS errors

**Error: "Clerk is not defined"**
- Verify VITE_CLERK_PUBLISHABLE_KEY in `.env`
- Ensure key starts with `pk_test_` or `pk_live_`
- Restart frontend dev server after changing .env

**Error: "Port 5173 already in use"**
- Vite will automatically try the next available port
- Or manually specify port: `npm run dev -- --port 3000`

### Common Issues

**Changes not reflecting:**
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Restart dev servers

**API calls failing:**
- Check Network tab in browser DevTools
- Verify backend is responding at http://localhost:5000
- Check backend terminal for error logs

## 📁 Project Structure

```
srajan/
├── backend/
│   ├── config/           # Database and other configs
│   ├── controllers/      # Business logic
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── index.js         # Server entry point
│   ├── .env             # Environment variables (create this)
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── actions/     # API call functions
│   │   ├── components/  # Reusable components
│   │   ├── config/      # API configuration
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── main.jsx     # App entry point
│   ├── .env             # Environment variables (create this)
│   └── package.json
│
├── README.md            # Basic documentation
├── SETUP_GUIDE.md       # This file
├── FIXES_APPLIED.md     # List of fixes made
└── start-dev.ps1        # Startup script
```

## 🔑 Required API Keys Summary

| Service | Required | Purpose | Get It From |
|---------|----------|---------|-------------|
| MongoDB | ✅ Yes | Database | mongodb.com/cloud/atlas |
| Clerk | ✅ Yes | Authentication | clerk.com |
| LiveKit | ⚠️ Optional | Video calls | livekit.io |
| Agora | ⚠️ Optional | Video calls | agora.io |
| Vonage | ⚠️ Optional | Video calls | vonage.com |

## 📞 Support

If you encounter issues:
1. Check the error message carefully
2. Review this troubleshooting guide
3. Check backend and frontend terminal logs
4. Verify all environment variables are set correctly
5. Ensure all dependencies are installed

## 🚀 Next Steps

After successful setup:
1. Create an account using Clerk authentication
2. Explore the application features
3. Check the database to see data being stored
4. Review the code structure
5. Start developing new features!

## 📝 Notes

- The application uses Clerk for authentication - users must sign in to access features
- MongoDB is required for storing user data, appointments, and doctor information
- Video calling features require additional API keys (LiveKit, Agora, or Vonage)
- All API calls now point to localhost for development
- To deploy to production, update environment variables accordingly
