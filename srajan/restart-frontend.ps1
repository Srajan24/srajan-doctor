# Restart Frontend to Load New Environment Variables

Write-Host "`n🔄 Restarting Frontend Server..." -ForegroundColor Yellow
Write-Host "=" * 50 -ForegroundColor Cyan

# Find and stop frontend processes
Write-Host "`n📍 Stopping current frontend process..." -ForegroundColor Yellow

$frontendProcesses = Get-Process | Where-Object {
    $_.ProcessName -eq "node" -and 
    $_.Path -like "*frontend*"
}

if ($frontendProcesses) {
    $frontendProcesses | ForEach-Object {
        Write-Host "   Stopping process $($_.Id)..." -ForegroundColor Gray
        Stop-Process -Id $_.Id -Force
    }
    Write-Host "✅ Frontend stopped" -ForegroundColor Green
    Start-Sleep -Seconds 2
} else {
    Write-Host "⚠️  No frontend process found" -ForegroundColor Yellow
}

# Start frontend
Write-Host "`n🚀 Starting frontend with new configuration..." -ForegroundColor Yellow
Write-Host ""

Set-Location frontend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\frontend'; npm run dev"

Set-Location ..

Write-Host "`n" + ("=" * 50) -ForegroundColor Cyan
Write-Host "✅ Frontend is restarting!" -ForegroundColor Green
Write-Host "`n📹 Video calling is now configured!" -ForegroundColor Cyan
Write-Host "   Frontend: http://localhost:5173" -ForegroundColor White
Write-Host "`n💡 Next steps:" -ForegroundColor Yellow
Write-Host "   1. Wait for frontend to start" -ForegroundColor White
Write-Host "   2. Create doctor and patient accounts" -ForegroundColor White
Write-Host "   3. Book an appointment" -ForegroundColor White
Write-Host "   4. Click 'Join Video Call'" -ForegroundColor White
Write-Host "`n📖 See VIDEO_CALL_READY.md for testing guide" -ForegroundColor Cyan
Write-Host ""
