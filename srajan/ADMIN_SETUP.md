# 👑 Admin Setup Guide

This guide will help you set yourself up as an admin to control all authorization in the application.

## 🎯 What Admins Can Do

As an admin, you will have access to:
- ✅ Verify or reject doctor registrations
- ✅ Suspend/unsuspend doctor accounts
- ✅ View all pending and verified doctors
- ✅ Approve payout requests from doctors
- ✅ View all pending payouts
- ✅ Manage the entire platform

## 📋 Prerequisites

Before making yourself an admin:
1. ✅ Backend and frontend servers are running
2. ✅ MongoDB is connected
3. ✅ You have signed up through the application (create an account first!)

## 🚀 Step-by-Step: Become an Admin

### Step 1: Sign Up in the Application

1. Open your browser and go to: `http://localhost:5173`
2. Click "Sign Up" and create your account using Clerk
3. Complete the registration process
4. **Remember your email address** - you'll need it!

### Step 2: List All Users (Optional)

To see all users in the database:

```bash
cd backend
node scripts/list-users.js
```

This will show you:
- All registered users
- Their emails
- Their Clerk User IDs
- Current roles

### Step 3: Make Yourself Admin

You have **two options**:

#### Option A: Using Email (Recommended)

```bash
cd backend
node scripts/make-admin.js your-email@example.com
```

Replace `your-email@example.com` with the email you used to sign up.

#### Option B: Using Clerk User ID

```bash
cd backend
node scripts/make-admin-by-id.js user_2abc123xyz
```

Replace `user_2abc123xyz` with your actual Clerk User ID (found in the list-users output).

### Step 4: Verify Admin Access

1. **Refresh your browser** (or log out and log back in)
2. You should now see the **Admin Dashboard** in the navigation
3. Click on "Admin" to access admin features

## 🔍 Finding Your Clerk User ID

If you need to find your Clerk User ID:

### Method 1: Browser Console
1. Log into the application
2. Open browser DevTools (F12)
3. Go to Console tab
4. Type: `window.Clerk.user.id`
5. Copy the ID that appears

### Method 2: Use the List Users Script
```bash
cd backend
node scripts/list-users.js
```

Look for your email in the output and copy the Clerk ID.

## 📝 Example Workflow

```bash
# 1. Navigate to backend folder
cd c:\Users\sraja\Desktop\doctors appointment\srajan\backend

# 2. List all users to find your email
node scripts/list-users.js

# 3. Make yourself admin (replace with your email)
node scripts/make-admin.js admin@example.com

# 4. You should see:
# 🎉 SUCCESS! User is now an admin:
#    Name: Your Name
#    Email: admin@example.com
#    Role: admin
#    Clerk ID: user_xxxxx
```

## 🛠️ Admin Scripts Reference

### List All Users
```bash
node scripts/list-users.js
```
Shows all registered users with their details.

### Make Admin by Email
```bash
node scripts/make-admin.js <email>
```
Promotes a user to admin using their email address.

### Make Admin by Clerk ID
```bash
node scripts/make-admin-by-id.js <clerkUserId>
```
Promotes a user to admin using their Clerk User ID.

## 🎨 Admin Dashboard Features

Once you're an admin, you'll have access to:

### 1. Doctor Management
- **Pending Doctors**: Review and approve/reject new doctor registrations
- **Verified Doctors**: View all active doctors and suspend if needed
- **Doctor Details**: View credentials, specialties, and experience

### 2. Payout Management
- **Pending Payouts**: Review payout requests from doctors
- **Approve Payouts**: Process and approve legitimate payout requests
- **Transaction History**: Track all payout activities

### 3. Platform Overview
- View statistics
- Monitor system health
- Manage user roles

## ⚠️ Troubleshooting

### "User not found" Error
**Problem:** The script can't find your user in the database.

**Solution:**
1. Make sure you've signed up through the application first
2. Check if MongoDB is connected
3. Run `node scripts/list-users.js` to see all users
4. Verify you're using the correct email

### "MongoDB Connection Error"
**Problem:** Can't connect to the database.

**Solution:**
1. Check if MongoDB is running
2. Verify `MONGO_URI` in `backend/.env`
3. Test connection by starting the backend server

### Admin Dashboard Not Showing
**Problem:** You're admin but can't see the admin menu.

**Solution:**
1. **Hard refresh** your browser (Ctrl+Shift+R)
2. **Clear browser cache**
3. **Log out and log back in**
4. Check browser console for errors

### "Already an admin" Message
**Problem:** Script says you're already an admin but you can't access features.

**Solution:**
1. Clear browser cache and cookies
2. Log out completely from Clerk
3. Log back in
4. The admin role should now be recognized

## 🔒 Security Best Practices

1. **Keep Admin Credentials Safe**: Don't share your admin account
2. **Use Strong Password**: Ensure your Clerk account has a strong password
3. **Enable 2FA**: Enable two-factor authentication in Clerk if available
4. **Monitor Activity**: Regularly check admin actions and logs
5. **Limit Admin Accounts**: Only create admin accounts for trusted users

## 📊 Admin Responsibilities

As an admin, you should:
- ✅ Review doctor credentials carefully before approval
- ✅ Respond to payout requests promptly
- ✅ Monitor for suspicious activity
- ✅ Keep the platform running smoothly
- ✅ Handle user issues professionally

## 🆘 Need Help?

If you encounter issues:
1. Check the error message carefully
2. Review this troubleshooting guide
3. Check backend terminal logs
4. Verify MongoDB connection
5. Ensure you've completed all prerequisites

## 📞 Quick Commands Cheat Sheet

```bash
# Navigate to backend
cd backend

# List all users
node scripts/list-users.js

# Make admin by email
node scripts/make-admin.js your@email.com

# Make admin by ID
node scripts/make-admin-by-id.js user_xxxxx

# Start backend (if not running)
npm run dev
```

## ✨ Next Steps After Becoming Admin

1. **Explore Admin Dashboard**: Familiarize yourself with all features
2. **Test Doctor Approval**: Create a test doctor account and approve it
3. **Review Payout System**: Understand how payouts work
4. **Set Up Monitoring**: Keep track of platform activity
5. **Document Processes**: Create your own admin procedures

---

**Congratulations!** 🎉 You now have full admin access to control the entire platform!
