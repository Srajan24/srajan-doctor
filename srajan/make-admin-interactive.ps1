# Interactive Admin Setup Script

Write-Host "`n============================================" -ForegroundColor Cyan
Write-Host "     👑 ADMIN SETUP WIZARD" -ForegroundColor Yellow
Write-Host "============================================`n" -ForegroundColor Cyan

# Check directory
if (-not (Test-Path "backend\scripts\make-admin.js")) {
    Write-Host "❌ Error: Run this from the 'srajan' folder" -ForegroundColor Red
    exit 1
}

Write-Host "This wizard will make you an admin.`n" -ForegroundColor White

# Step 1: Ask for email
Write-Host "📧 Step 1: Enter your email" -ForegroundColor Yellow
Write-Host "   (The email you used to sign up in the app)`n" -ForegroundColor Gray

$email = Read-Host "Your email"

if ([string]::IsNullOrWhiteSpace($email)) {
    Write-Host "`n❌ Email cannot be empty!" -ForegroundColor Red
    exit 1
}

Write-Host "`n✅ Email: $email" -ForegroundColor Green

# Step 2: Confirm
Write-Host "`n📋 Step 2: Confirmation" -ForegroundColor Yellow
$confirm = Read-Host "Make '$email' an admin? (yes/no)"

if ($confirm -ne "yes" -and $confirm -ne "y") {
    Write-Host "`n❌ Cancelled" -ForegroundColor Red
    exit 0
}

# Step 3: Run the script
Write-Host "`n⚙️  Step 3: Processing..." -ForegroundColor Yellow
Write-Host ""

cd backend
node scripts/make-admin.js $email

# Step 4: Next steps
Write-Host "`n============================================" -ForegroundColor Cyan
Write-Host "     ✨ NEXT STEPS" -ForegroundColor Yellow
Write-Host "============================================`n" -ForegroundColor Cyan

Write-Host "1. Open your browser to: http://localhost:5173" -ForegroundColor White
Write-Host "2. Press Ctrl+Shift+R to hard refresh" -ForegroundColor White
Write-Host "3. Log out and log back in" -ForegroundColor White
Write-Host "4. Look for 'Admin' in the navigation menu" -ForegroundColor White
Write-Host "5. Click it to access admin features!`n" -ForegroundColor White

Write-Host "🎉 You're now an admin!" -ForegroundColor Green
Write-Host ""

cd ..
