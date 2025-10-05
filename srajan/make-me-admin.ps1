# PowerShell script to make yourself an admin

Write-Host "`n👑 Admin Setup Wizard" -ForegroundColor Cyan
Write-Host "=" * 50 -ForegroundColor Cyan

# Check if we're in the right directory
if (-not (Test-Path "backend\scripts\make-admin.js")) {
    Write-Host "`n❌ Error: Please run this script from the 'srajan' folder" -ForegroundColor Red
    Write-Host "   Current location: $PWD" -ForegroundColor Yellow
    exit 1
}

Write-Host "`nStep 1: Listing all users in the database..." -ForegroundColor Yellow
Write-Host ""

# Run list-users script
cd backend
node scripts/list-users.js

Write-Host "`n" + ("=" * 50) -ForegroundColor Cyan
Write-Host "`nStep 2: Make yourself an admin" -ForegroundColor Yellow
Write-Host ""

# Ask for email
$email = Read-Host "Enter your email address"

if ([string]::IsNullOrWhiteSpace($email)) {
    Write-Host "`n❌ Email cannot be empty!" -ForegroundColor Red
    exit 1
}

Write-Host "`nMaking $email an admin..." -ForegroundColor Yellow
node scripts/make-admin.js $email

Write-Host "`n" + ("=" * 50) -ForegroundColor Cyan
Write-Host "`n✨ Next Steps:" -ForegroundColor Green
Write-Host "   1. Refresh your browser (Ctrl+Shift+R)" -ForegroundColor White
Write-Host "   2. Log out and log back in if needed" -ForegroundColor White
Write-Host "   3. Look for 'Admin' in the navigation menu" -ForegroundColor White
Write-Host "   4. Start managing the platform!" -ForegroundColor White
Write-Host ""

cd ..
