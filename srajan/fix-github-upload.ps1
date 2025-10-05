# Fix GitHub Upload - Convert Submodules to Normal Folders

Write-Host "`n============================================" -ForegroundColor Cyan
Write-Host "  🔧 Fixing GitHub Upload" -ForegroundColor Yellow
Write-Host "============================================`n" -ForegroundColor Cyan

Write-Host "📋 What this script does:" -ForegroundColor White
Write-Host "   1. Removes backend/frontend as submodules" -ForegroundColor Gray
Write-Host "   2. Converts them to normal folders" -ForegroundColor Gray
Write-Host "   3. Adds all files to Git" -ForegroundColor Gray
Write-Host "   4. Commits and pushes to GitHub`n" -ForegroundColor Gray

$confirm = Read-Host "Continue? (y/n)"
if ($confirm -ne "y") {
    Write-Host "Cancelled." -ForegroundColor Yellow
    exit
}

Write-Host "`n📦 Step 1: Removing submodule references..." -ForegroundColor Yellow

# Remove .gitmodules if exists
if (Test-Path .gitmodules) {
    Remove-Item .gitmodules -Force
    Write-Host "   ✅ Removed .gitmodules" -ForegroundColor Green
}

# Remove from Git index (not from disk)
git rm --cached -r backend 2>$null
git rm --cached -r frontend 2>$null
Write-Host "   ✅ Removed submodule tracking" -ForegroundColor Green

Write-Host "`n🗑️  Step 2: Removing nested .git folders..." -ForegroundColor Yellow

# Remove nested .git directories
if (Test-Path "backend\.git") {
    Remove-Item -Recurse -Force "backend\.git"
    Write-Host "   ✅ Removed backend\.git" -ForegroundColor Green
}

if (Test-Path "frontend\.git") {
    Remove-Item -Recurse -Force "frontend\.git"
    Write-Host "   ✅ Removed frontend\.git" -ForegroundColor Green
}

Write-Host "`n➕ Step 3: Adding all files to Git..." -ForegroundColor Yellow
git add .
Write-Host "   ✅ All files added" -ForegroundColor Green

Write-Host "`n💾 Step 4: Creating commit..." -ForegroundColor Yellow
git commit -m "Fix: Convert backend and frontend from submodules to regular folders"
Write-Host "   ✅ Commit created" -ForegroundColor Green

Write-Host "`n⬆️  Step 5: Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "   (You may need to enter GitHub credentials)`n" -ForegroundColor Gray

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n============================================" -ForegroundColor Cyan
    Write-Host "  ✅ SUCCESS!" -ForegroundColor Green
    Write-Host "============================================`n" -ForegroundColor Cyan
    Write-Host "🎉 All files uploaded to GitHub!" -ForegroundColor Green
    Write-Host "📍 Check: https://github.com/Srajan24/doctor-appointment`n" -ForegroundColor Cyan
} else {
    Write-Host "`n⚠️  Push failed - you may need to authenticate" -ForegroundColor Yellow
    Write-Host "   Try: gh auth login" -ForegroundColor Gray
    Write-Host "   Then run: git push -u origin main`n" -ForegroundColor Gray
}
