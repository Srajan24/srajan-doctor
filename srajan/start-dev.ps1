# PowerShell script to start both backend and frontend

Write-Host "`n============================================" -ForegroundColor Cyan
Write-Host "  🚀 Starting Doctor Appointment App" -ForegroundColor Yellow
Write-Host "============================================`n" -ForegroundColor Cyan

# Check if in correct directory
if (-not (Test-Path "backend") -or -not (Test-Path "frontend")) {
    Write-Host "❌ Error: backend or frontend folder not found!" -ForegroundColor Red
    Write-Host "   Make sure you're in the 'srajan' folder" -ForegroundColor Yellow
    exit 1
}

# Start Backend
Write-Host "📦 Starting Backend Server..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$PSScriptRoot\backend'; npm run dev"

# Wait a bit for backend to start
Write-Host "   Waiting for backend to initialize..." -ForegroundColor Gray
Start-Sleep -Seconds 3

# Start Frontend
Write-Host "🎨 Starting Frontend Server..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$PSScriptRoot\frontend'; npm run dev"

Write-Host "`n============================================" -ForegroundColor Cyan
Write-Host "  ✅ Both servers are starting!" -ForegroundColor Green
Write-Host "============================================`n" -ForegroundColor Cyan

Write-Host "📍 Server URLs:" -ForegroundColor White
Write-Host "   Backend:  http://localhost:5000" -ForegroundColor Cyan
Write-Host "   Frontend: http://localhost:5173" -ForegroundColor Cyan

Write-Host "`n💡 Tip: Two new terminal windows will open" -ForegroundColor Yellow
Write-Host "   Keep them open while using the app`n" -ForegroundColor Gray
