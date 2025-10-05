# 🔐 Environment Variables Guide

Complete list of all environment variables needed for deployment.

## 📦 Backend Environment Variables

Copy these to Vercel → Backend Project → Settings → Environment Variables

```env
# Server Configuration
PORT=5000
NODE_ENV=production

# Database (REQUIRED)
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/doctor-appointment?retryWrites=true&w=majority

# Agora Video Calling (REQUIRED)
AGORA_APP_ID=c3f5a580fd8d475cba3e64eee2027e3f
AGORA_APP_CERTIFICATE=a4f1934c4a2b4229b779f4019d5bdf93
```

### How to Get MongoDB URI

1. Go to https://cloud.mongodb.com
2. Create a free cluster
3. Database Access → Create user
4. Network Access → Allow 0.0.0.0/0
5. Clusters → Connect → "Connect your application"
6. Copy connection string
7. Replace `<password>` with your database password
8. Replace `<dbname>` with `doctor-appointment`

**Example**:
```
mongodb+srv://admin:MyPassword123@cluster0.abc123.mongodb.net/doctor-appointment?retryWrites=true&w=majority
```

## 🎨 Frontend Environment Variables

Copy these to Vercel → Frontend Project → Settings → Environment Variables

```env
# API Configuration (REQUIRED)
VITE_API_URL=https://your-backend-url.vercel.app

# Clerk Authentication (REQUIRED)
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Agora Video Calling (REQUIRED)
VITE_AGORA_APP_ID=c3f5a580fd8d475cba3e64eee2027e3f
```

### How to Get Backend URL

After deploying backend to Vercel:
1. Go to your backend project on Vercel
2. Copy the URL from the deployment (e.g., `https://backend-abc123.vercel.app`)
3. Use this as `VITE_API_URL`

### How to Get Clerk Key

1. Go to https://dashboard.clerk.com
2. Select your application
3. Go to "API Keys"
4. Copy "Publishable Key"
5. Use as `VITE_CLERK_PUBLISHABLE_KEY`

## 📋 Quick Copy Templates

### Backend (.env for local development)

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/doctor-appointment
AGORA_APP_ID=c3f5a580fd8d475cba3e64eee2027e3f
AGORA_APP_CERTIFICATE=a4f1934c4a2b4229b779f4019d5bdf93
```

### Backend (Vercel production)

```env
PORT=5000
NODE_ENV=production
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/doctor-appointment?retryWrites=true&w=majority
AGORA_APP_ID=c3f5a580fd8d475cba3e64eee2027e3f
AGORA_APP_CERTIFICATE=a4f1934c4a2b4229b779f4019d5bdf93
```

### Frontend (.env for local development)

```env
VITE_API_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_AGORA_APP_ID=c3f5a580fd8d475cba3e64eee2027e3f
```

### Frontend (Vercel production)

```env
VITE_API_URL=https://your-backend.vercel.app
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_AGORA_APP_ID=c3f5a580fd8d475cba3e64eee2027e3f
```

## ✅ Verification Checklist

### Backend Variables
- [ ] `PORT` is set to 5000
- [ ] `MONGO_URI` points to MongoDB Atlas
- [ ] `AGORA_APP_ID` is set
- [ ] `AGORA_APP_CERTIFICATE` is set
- [ ] `NODE_ENV` is set to production

### Frontend Variables
- [ ] `VITE_API_URL` points to deployed backend
- [ ] `VITE_CLERK_PUBLISHABLE_KEY` is set
- [ ] `VITE_AGORA_APP_ID` is set

## 🔄 Updating Environment Variables

### On Vercel

1. Go to project dashboard
2. Settings → Environment Variables
3. Click "Edit" on the variable
4. Update value
5. Click "Save"
6. **Important**: Redeploy for changes to take effect
   - Deployments → Click "..." → "Redeploy"

### Locally

1. Edit `.env` file in backend or frontend folder
2. Save the file
3. Restart the server
   - Backend: `npm run dev`
   - Frontend: `npm run dev`

## 🚨 Security Best Practices

### DO ✅
- ✅ Use environment variables for all secrets
- ✅ Use different values for dev and production
- ✅ Keep `.env` files in `.gitignore`
- ✅ Use strong passwords for MongoDB
- ✅ Rotate credentials periodically

### DON'T ❌
- ❌ Never commit `.env` files to Git
- ❌ Never hardcode secrets in code
- ❌ Never share credentials publicly
- ❌ Never use production keys in development

## 📊 Environment Variable Priority

### Local Development
```
.env file → Used by application
```

### Vercel Production
```
Vercel Environment Variables → Override everything
```

## 🔍 Debugging Environment Variables

### Check if variables are loaded

**Backend** (add to index.js temporarily):
```javascript
console.log("Environment check:");
console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI ? "✅ Set" : "❌ Missing");
console.log("AGORA_APP_ID:", process.env.AGORA_APP_ID ? "✅ Set" : "❌ Missing");
```

**Frontend** (check in browser console):
```javascript
console.log("API URL:", import.meta.env.VITE_API_URL);
console.log("Clerk Key:", import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ? "✅ Set" : "❌ Missing");
```

## 🎯 Summary

### Required Variables

**Backend (3 critical)**:
1. `MONGO_URI` - Database connection
2. `AGORA_APP_ID` - Video calling
3. `AGORA_APP_CERTIFICATE` - Video calling

**Frontend (3 critical)**:
1. `VITE_API_URL` - Backend connection
2. `VITE_CLERK_PUBLISHABLE_KEY` - Authentication
3. `VITE_AGORA_APP_ID` - Video calling

### Optional Variables
- `PORT` - Defaults to 5000
- `NODE_ENV` - Defaults to development

---

**All environment variables are documented and ready for deployment!** 🎉
