# 📹 Video Call Setup Guide

Your application already has **Agora Video Calling** integrated! This guide will help you set it up and make it work.

## 🎯 What's Already Built

✅ **Backend**: Agora token generation  
✅ **Frontend**: Video call UI with controls  
✅ **Features**: Camera toggle, mic toggle, end call  
✅ **Integration**: Automatic video session creation on appointment booking  

## 🚀 Quick Setup (3 Steps)

### Step 1: Get Agora Credentials (FREE)

1. Go to [Agora.io](https://www.agora.io/)
2. Click "Sign Up" (it's FREE for development)
3. Create a new project
4. Get your **App ID** and **App Certificate**

### Step 2: Add to Backend `.env`

Open `backend/.env` and add:

```env
# Agora Video Configuration
AGORA_APP_ID=your_app_id_here
AGORA_APP_CERTIFICATE=your_app_certificate_here
```

### Step 3: Restart Backend

```bash
# Stop the backend (Ctrl+C in the terminal)
# Then restart:
cd backend
npm run dev
```

## 📋 Detailed Agora Setup

### Creating an Agora Account

1. **Visit**: https://console.agora.io/
2. **Sign Up**: Use email or Google/GitHub
3. **Verify Email**: Check your inbox
4. **Login**: Access the console

### Creating a Project

1. Click **"Project Management"** in sidebar
2. Click **"Create"** button
3. **Project Name**: "Doctor Appointment Video"
4. **Authentication**: Select **"Secured mode: APP ID + Token"**
5. Click **"Submit"**

### Getting Credentials

After creating the project:

1. **App ID**: Copy from project card (looks like: `c3f5a580fd8d475cba3e64eee2027e3f`)
2. **App Certificate**: 
   - Click **"Config"** on your project
   - Click **"Primary Certificate"**
   - Click **"Enable"**
   - Copy the certificate (looks like: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)

## 🔧 Configuration Files

### Backend `.env` (Required)

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/doctor-appointment

# Agora Video Calling
AGORA_APP_ID=c3f5a580fd8d475cba3e64eee2027e3f
AGORA_APP_CERTIFICATE=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

### Frontend (No changes needed)

The frontend is already configured to use Agora!

## 🎥 How Video Calling Works

### 1. Booking an Appointment

When a patient books an appointment:
- Backend generates a unique **channel name**
- Backend creates an **Agora token** for that channel
- Token and channel are saved with the appointment

### 2. Joining the Call

When clicking "Join Video Call":
- Frontend receives: `channel`, `token`, and `appId`
- Agora SDK connects to the channel
- Video/audio streams start automatically

### 3. During the Call

- **Toggle Camera**: Turn video on/off
- **Toggle Mic**: Mute/unmute audio
- **End Call**: Disconnect and return to appointments

## 🧪 Testing Video Calls

### Test Scenario 1: Same Computer

1. **Patient Browser**: Chrome (normal window)
2. **Doctor Browser**: Firefox or Chrome Incognito
3. Book an appointment
4. Both click "Join Video Call"
5. You should see both video feeds!

### Test Scenario 2: Different Devices

1. **Patient**: Use your computer
2. **Doctor**: Use your phone browser
3. Book appointment and join from both
4. Test camera/mic controls

## 🔍 Troubleshooting

### "Invalid video call parameters"

**Problem**: Missing Agora credentials

**Solution**:
1. Check `backend/.env` has `AGORA_APP_ID` and `AGORA_APP_CERTIFICATE`
2. Restart backend server
3. Book a new appointment (old ones won't have tokens)

### "Failed to initialize video call"

**Problem**: Browser permissions or Agora connection

**Solution**:
1. Allow camera/microphone permissions in browser
2. Check browser console (F12) for errors
3. Verify Agora App ID is correct
4. Check internet connection

### Camera/Mic not working

**Problem**: Browser permissions denied

**Solution**:
1. Click the camera icon in browser address bar
2. Allow camera and microphone
3. Refresh the page
4. Try joining the call again

### Remote video not showing

**Problem**: Other participant hasn't joined yet

**Solution**:
- Wait for the other person to join
- Both participants must click "Join Video Call"
- Check if both are in the same appointment

### Token expired

**Problem**: Appointment token is old

**Solution**:
- Tokens expire after 1 hour
- Book a new appointment
- Or regenerate token (feature can be added)

## 📱 Browser Compatibility

### ✅ Supported Browsers

- **Chrome** 58+ (Recommended)
- **Firefox** 56+
- **Safari** 11+
- **Edge** 79+
- **Mobile Chrome** (Android)
- **Mobile Safari** (iOS)

### ❌ Not Supported

- Internet Explorer
- Very old browser versions

## 🎨 Video Call Features

### Current Features

- ✅ Real-time video streaming
- ✅ Real-time audio streaming
- ✅ Camera toggle (on/off)
- ✅ Microphone toggle (mute/unmute)
- ✅ End call button
- ✅ Local and remote video display
- ✅ Automatic connection
- ✅ Clean, modern UI

### Potential Enhancements

Want to add more features? Here are ideas:

- 📷 Screen sharing
- 💬 Text chat during call
- 📝 Call recording
- 🎨 Virtual backgrounds
- 📊 Call quality indicators
- ⏱️ Call duration timer
- 🔔 Call notifications

## 🔐 Security Features

### Already Implemented

- ✅ **Token-based authentication**: Only authorized users can join
- ✅ **Time-limited tokens**: Tokens expire after appointment
- ✅ **Channel isolation**: Each appointment has unique channel
- ✅ **User verification**: Backend verifies user is part of appointment

### Best Practices

- 🔒 Never share Agora credentials publicly
- 🔑 Keep `.env` file secure
- 🚫 Don't commit `.env` to Git
- ✅ Use secured mode (APP ID + Token)

## 💰 Agora Pricing

### Free Tier (Perfect for Development)

- **10,000 minutes/month FREE**
- Enough for ~166 hours of video calls
- Perfect for testing and small deployments

### After Free Tier

- Pay only for what you use
- Starts at $0.99 per 1,000 minutes
- Very affordable for most use cases

## 📊 Monitoring

### Agora Console

View real-time statistics:
1. Login to Agora Console
2. Go to "Usage" section
3. See:
   - Active calls
   - Minutes used
   - Call quality
   - Error rates

## 🆘 Getting Help

### Agora Resources

- **Documentation**: https://docs.agora.io/
- **API Reference**: https://api-ref.agora.io/
- **Community**: https://www.agora.io/en/community/
- **Support**: https://www.agora.io/en/customer-support/

### Common Issues

1. **No video/audio**: Check browser permissions
2. **Connection failed**: Verify Agora credentials
3. **Token errors**: Check App Certificate
4. **Quality issues**: Check internet speed

## ✅ Checklist

Before going live, verify:

- [ ] Agora account created
- [ ] App ID and Certificate obtained
- [ ] Backend `.env` configured
- [ ] Backend restarted
- [ ] Test appointment booked
- [ ] Video call tested
- [ ] Camera toggle works
- [ ] Mic toggle works
- [ ] End call works
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices

## 🎉 You're Ready!

Once you've completed the setup:

1. ✅ Patients can book appointments
2. ✅ Video sessions are automatically created
3. ✅ Both parties can join video calls
4. ✅ High-quality video consultations
5. ✅ Professional healthcare experience

Your video calling system is production-ready! 🚀
