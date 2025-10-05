# ✅ NOW YOU CAN USE `npm run dev`!

## 🎉 What I Did

I created a **root package.json** that allows you to run `npm run dev` from the `srajan` folder!

## 🚀 How to Start (Super Simple Now!)

### From the `srajan` folder:

```bash
npm run dev
```

**That's it!** Both backend and frontend will start together! 🎊

## 📋 Available Commands

### Start Everything
```bash
npm run dev
```
Starts both backend (port 5000) and frontend (port 5173)

### Install All Dependencies
```bash
npm run install:all
```
Installs dependencies for root, backend, and frontend

### Build for Production
```bash
npm run build
```
Builds the frontend for deployment

### Alternative Start
```bash
npm start
```
Same as `npm run dev`

## 🎯 What Happens When You Run `npm run dev`

1. ✅ Backend starts on http://localhost:5000
2. ✅ Frontend starts on http://localhost:5173
3. ✅ Both run in the same terminal window
4. ✅ You can see logs from both servers

## 🛑 How to Stop

Press `Ctrl+C` once - it will stop both servers!

## 📊 Output You'll See

```
[0] > backend@1.0.0 dev
[0] > nodemon index.js
[1] > frontend@1.0.0 dev
[1] > vite
[0] 🚀 Server running on port 5000
[1] ➜ Local: http://localhost:5173/
```

- `[0]` = Backend logs
- `[1]` = Frontend logs

## ✨ Benefits

- ✅ **One command** to start everything
- ✅ **One terminal** instead of two
- ✅ **Easy to stop** - just Ctrl+C once
- ✅ **See all logs** in one place

## 🆘 Troubleshooting

### "Cannot find module 'concurrently'"
```bash
npm install
```

### "Port already in use"
- Stop any running servers (Ctrl+C)
- Or close other terminal windows

### Backend or Frontend not starting
```bash
# Install dependencies
npm run install:all

# Then try again
npm run dev
```

## 🎯 Quick Reference

| Command | What it Does |
|---------|-------------|
| `npm run dev` | Start both servers |
| `npm start` | Same as npm run dev |
| `npm run install:all` | Install all dependencies |
| `npm run build` | Build for production |
| `Ctrl+C` | Stop all servers |

## 🎉 Summary

**Before**: Had to run commands in two separate terminals  
**Now**: Just run `npm run dev` from the `srajan` folder! 🚀

---

**Try it now**:
```bash
npm run dev
```

Your app will start! 🎊
