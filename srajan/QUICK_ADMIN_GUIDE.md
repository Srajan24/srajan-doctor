# 🚀 Quick Admin Setup - 3 Steps

## Step 1: Sign Up
1. Go to `http://localhost:5173`
2. Create an account with your email
3. Remember your email!

## Step 2: Make Yourself Admin

Open a **new terminal** and run:

```bash
cd backend
npm run list-users
```

This shows all users. Find your email, then run:

```bash
npm run make-admin your-email@example.com
```

Replace `your-email@example.com` with your actual email.

## Step 3: Access Admin Dashboard

1. **Refresh your browser** (Ctrl+Shift+R)
2. Log out and log back in if needed
3. You'll now see "Admin" in the navigation menu
4. Click it to access admin features!

---

## 🎯 Quick Commands

```bash
# List all users
npm run list-users

# Make someone admin (by email)
npm run make-admin email@example.com

# Make someone admin (by Clerk ID)
npm run make-admin-id user_xxxxx
```

## ✨ What You Can Do as Admin

- ✅ Approve/reject doctor registrations
- ✅ Suspend doctor accounts
- ✅ Approve payout requests
- ✅ View all platform activity
- ✅ Manage users

---

**Need detailed help?** See `ADMIN_SETUP.md`
