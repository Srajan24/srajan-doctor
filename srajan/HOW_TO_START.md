# 🚀 How to Start the Application

## ⚡ Quick Start (Easiest Way)

### From the `srajan` folder, run:

```powershell
.\start-dev.ps1
```

This will:
- ✅ Start backend on port 5000
- ✅ Start frontend on port 5173
- ✅ Open two terminal windows automatically

## 📋 Why `npm run dev` Doesn't Work from Root

The error happens because:
- ❌ There's **no package.json** in the root `srajan` folder
- ✅ Backend has its own package.json in `backend/`
- ✅ Frontend has its own package.json in `frontend/`

## 🎯 Three Ways to Start

### Option 1: Use the Script (Recommended)

```powershell
# From srajan folder
.\start-dev.ps1
```

### Option 2: Start Manually (Two Terminals)

**Terminal 1 - Backend:**
```powershell
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```powershell
cd frontend
npm run dev
```

### Option 3: One-Line Commands

**Backend:**
```powershell
cd backend; npm run dev
```

**Frontend (in another terminal):**
```powershell
cd frontend; npm run dev
```

## 📂 Correct Directory Structure

```
srajan/                          ← You are here (NO package.json)
├── backend/                     ← Has package.json
│   ├── package.json            ← Run npm run dev HERE
│   └── index.js
├── frontend/                    ← Has package.json
│   ├── package.json            ← Run npm run dev HERE
│   └── src/
└── start-dev.ps1               ← Or use THIS script
```

## ✅ What to Do

### If you're in the `srajan` folder:

```powershell
# Use the script
.\start-dev.ps1

# OR manually:
cd backend
npm run dev
# Then open another terminal
cd frontend
npm run dev
```

### If you're in `backend` folder:

```powershell
npm run dev
```

### If you're in `frontend` folder:

```powershell
npm run dev
```

## 🎯 Server URLs

After starting:
- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:5173

## 🛑 How to Stop

- Press `Ctrl+C` in each terminal window
- Or close the terminal windows

## 💡 Pro Tips

### Always Use the Script

```powershell
# From srajan folder
.\start-dev.ps1
```

This is the easiest way - it handles everything automatically!

### Check if Servers are Running

**Backend:**
```powershell
# Visit in browser
http://localhost:5000
# Should show: "Backend is running 🚀"
```

**Frontend:**
```powershell
# Visit in browser
http://localhost:5173
# Should show your app
```

## 🆘 Troubleshooting

### "npm: command not found"
- Install Node.js from https://nodejs.org

### "Port already in use"
- Stop the existing server (Ctrl+C)
- Or change the port in .env files

### "Cannot find module"
- Run `npm install` in backend and frontend folders

### Script doesn't work
- Make sure you're in the `srajan` folder
- Check that backend and frontend folders exist

## 📊 Quick Command Reference

| Command | Where to Run | What it Does |
|---------|-------------|--------------|
| `.\start-dev.ps1` | `srajan/` | Starts both servers |
| `npm run dev` | `backend/` | Starts backend only |
| `npm run dev` | `frontend/` | Starts frontend only |
| `npm install` | `backend/` or `frontend/` | Installs dependencies |

## 🎉 Summary

**DON'T** run `npm run dev` from the `srajan` folder ❌

**DO** run one of these:
- ✅ `.\start-dev.ps1` (from srajan folder)
- ✅ `cd backend && npm run dev` (for backend)
- ✅ `cd frontend && npm run dev` (for frontend)

---

**Easy way**: Just use `.\start-dev.ps1` and you're done! 🚀
