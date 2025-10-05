# 🔧 Fix Vercel 404 Error - Backend Deployment

## The Problem
Vercel is trying to deploy the entire repository, but your backend is in `srajan/backend/`. This causes 404 errors.

## Solution: Deploy Backend as Separate Project

### Option 1: Configure Root Directory in Vercel (RECOMMENDED)

1. **Go to your Vercel project dashboard**
2. Click **Settings** → **General**
3. Find **Root Directory** section
4. Click **Edit**
5. Enter: `srajan/backend`
6. Click **Save**
7. Go to **Deployments** tab
8. Click **Redeploy** on the latest deployment

### Option 2: Create New Vercel Project for Backend Only

If Option 1 doesn't work:

1. **Delete current Vercel project** (or keep it for frontend later)
2. **Create new Vercel project**:
   - Import from GitHub: `Srajan24/srajan-doctor`
   - When asked for Root Directory: Enter `srajan/backend`
   - Framework Preset: **Other**
   - Build Command: Leave empty
   - Output Directory: Leave empty
   - Install Command: `npm install`

3. **Add Environment Variables** in Vercel:
   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   LIVEKIT_API_KEY=your_livekit_key
   LIVEKIT_API_SECRET=your_livekit_secret
   LIVEKIT_URL=your_livekit_url
   NODE_ENV=production
   ```

4. **Deploy**

### Verify It Works

After deployment, visit:
- `https://your-project.vercel.app/` → Should show "Backend is running 🚀"
- `https://your-project.vercel.app/api/user/...` → Should work

## Important Notes

- ✅ The `vercel.json` in `srajan/backend/` is already configured correctly
- ✅ The `index.js` exports the app properly for Vercel
- ⚠️ Make sure MongoDB URI is from **MongoDB Atlas** (not localhost)
- ⚠️ All environment variables must be set in Vercel dashboard

## Still Getting 404?

Check Vercel build logs:
1. Go to Deployments tab
2. Click on the failed deployment
3. Check the **Build Logs** and **Function Logs**
4. Look for errors about missing files or modules

Common issues:
- Root directory not set to `srajan/backend`
- Missing environment variables (especially MONGO_URI)
- Node modules not installing properly
