# 🔧 Netlify Troubleshooting - Emergency Button Not Showing

## 🔍 Why Emergency Button Doesn't Show

The emergency call button only appears when:
1. ✅ User is **logged in**
2. ✅ User has role **"patient"** or **"doctor"**
3. ✅ Backend is **connected and running**
4. ✅ Clerk authentication is **configured**

## 🎯 Quick Diagnosis

### Check 1: Are You Logged In?

**Without Backend**:
- ❌ You **cannot** log in
- ❌ No authentication works
- ❌ Emergency button won't show

**Solution**: Deploy backend first!

### Check 2: Environment Variables Set?

Go to Netlify → Site settings → Environment variables

**Required**:
```
VITE_API_URL=https://your-backend-url.onrender.com
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
VITE_AGORA_APP_ID=c3f5a580fd8d475cba3e64eee2027e3f
```

**Missing any?** → Button won't work!

### Check 3: Backend Running?

The frontend needs backend for:
- ✅ User authentication
- ✅ User role (patient/doctor)
- ✅ Emergency call features

**No backend** = No button visibility!

## ✅ Complete Fix

### Step 1: Deploy Backend to Render

1. **Go to**: https://render.com
2. **New Web Service**
3. **Connect GitHub**: `Srajan24/doctor-appointment`
4. **Configure**:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. **Environment Variables**:
   ```
   PORT=5000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/doctor-appointment
   AGORA_APP_ID=c3f5a580fd8d475cba3e64eee2027e3f
   AGORA_APP_CERTIFICATE=a4f1934c4a2b4229b779f4019d5bdf93
   NODE_ENV=production
   ```
6. **Deploy**
7. **Copy URL**: e.g., `https://doctor-appointment-backend.onrender.com`

### Step 2: Update Netlify Environment Variables

1. **Go to Netlify**: Your site → Site settings → Environment variables
2. **Add/Update**:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
   VITE_AGORA_APP_ID=c3f5a580fd8d475cba3e64eee2027e3f
   ```
3. **Save**

### Step 3: Redeploy Frontend

1. **Netlify**: Deploys → Trigger deploy → Deploy site
2. **Wait** for deployment to complete

### Step 4: Configure Clerk

1. **Go to**: https://dashboard.clerk.com
2. **Domains**: Add your Netlify URL
3. **Paths**: Add allowed redirect URLs

### Step 5: Test

1. Visit your Netlify site
2. Sign up / Log in
3. Emergency button should now appear!

## 🎯 Why Button Shows Only When Logged In

**Code Logic**:
```javascript
{user?.role === "patient" && (
    <Link to="/emergency-call">
        <Button>Emergency Call</Button>
    </Link>
)}
```

**Breakdown**:
- `user?.role` comes from backend
- Without backend → `user` is `null`
- `null === "patient"` → `false`
- Button doesn't render!

## 📊 Deployment Status Check

### ✅ Frontend Only (Current)
```
Netlify (Frontend)
├── Static files ✅
├── UI visible ✅
├── No authentication ❌
├── No backend connection ❌
└── Emergency button hidden ❌
```

### ✅ Complete Deployment (Needed)
```
Netlify (Frontend) + Render (Backend) + MongoDB Atlas
├── Static files ✅
├── UI visible ✅
├── Authentication working ✅
├── Backend connected ✅
└── Emergency button visible ✅
```

## 🔧 Quick Environment Variables Guide

### Where to Get Each Variable

**VITE_API_URL**:
- Deploy backend to Render.com
- Copy the URL from Render dashboard
- Example: `https://doctor-appointment-backend.onrender.com`

**VITE_CLERK_PUBLISHABLE_KEY**:
- Go to: https://dashboard.clerk.com
- Select your app
- API Keys → Copy "Publishable Key"
- Starts with: `pk_test_` or `pk_live_`

**VITE_AGORA_APP_ID**:
- Already have it: `c3f5a580fd8d475cba3e64eee2027e3f`

## 🆘 Common Issues

### "Button still not showing after login"

**Check**:
1. User role is "patient" or "doctor"
2. Backend is returning user data
3. Browser console for errors
4. Network tab - check API calls

### "Cannot log in"

**Check**:
1. Backend is deployed and running
2. `VITE_API_URL` is correct
3. Clerk domain is configured
4. MongoDB is connected

### "Environment variables not working"

**Fix**:
1. Make sure variables start with `VITE_`
2. Redeploy after adding variables
3. Clear browser cache
4. Check browser console

## 💡 Testing Without Full Deployment

**You can't!** The emergency button requires:
- ✅ Backend running
- ✅ User authentication
- ✅ Database connection

**Minimum needed**:
- Backend on Render.com
- MongoDB Atlas
- Clerk configured
- Frontend on Netlify with correct env vars

## 🎯 Step-by-Step Checklist

- [ ] Backend deployed to Render.com
- [ ] Backend URL copied
- [ ] MongoDB Atlas connected
- [ ] Netlify environment variables added:
  - [ ] `VITE_API_URL`
  - [ ] `VITE_CLERK_PUBLISHABLE_KEY`
  - [ ] `VITE_AGORA_APP_ID`
- [ ] Frontend redeployed on Netlify
- [ ] Clerk domain configured
- [ ] Test: Sign up on site
- [ ] Test: Log in
- [ ] Test: Emergency button appears
- [ ] Test: Click emergency button

## 🚀 Quick Fix Summary

**Problem**: Emergency button not showing

**Cause**: Frontend only deployed, no backend

**Solution**:
1. Deploy backend to Render.com
2. Add environment variables to Netlify
3. Redeploy frontend
4. Log in to see button

## 📖 Related Guides

- **Backend Deployment**: See `NETLIFY_DEPLOYMENT.md`
- **Environment Variables**: See `ENVIRONMENT_VARIABLES.md`
- **Emergency Feature**: See `EMERGENCY_CALL_FEATURE.md`

---

## 🎊 TL;DR

**Emergency button needs**:
- ✅ Backend deployed (Render.com)
- ✅ User logged in
- ✅ Environment variables set

**Without backend**: Button won't show!

**Deploy backend first**: https://render.com 🚀
