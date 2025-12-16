# Script per pubblicare su GitHub
# Assicurati di aver creato il repository su GitHub prima di eseguire questo script

Write-Host "=== Pubblicazione su GitHub ===" -ForegroundColor Cyan
Write-Host ""

# Chiedi il nome del repository
$repoName = Read-Host "Inserisci il nome del repository GitHub (default: personale)"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "personale"
}

# Chiedi lo username GitHub
$username = Read-Host "Inserisci il tuo username GitHub (default: JacopoMarini)"
if ([string]::IsNullOrWhiteSpace($username)) {
    $username = "JacopoMarini"
}

Write-Host ""
Write-Host "Repository: $username/$repoName" -ForegroundColor Yellow
Write-Host ""

$confirm = Read-Host "Hai già creato il repository su GitHub? (s/n)"
if ($confirm -ne "s" -and $confirm -ne "S") {
    Write-Host ""
    Write-Host "Prima crea il repository su GitHub:" -ForegroundColor Red
    Write-Host "1. Vai su https://github.com/new" -ForegroundColor Yellow
    Write-Host "2. Nome: $repoName" -ForegroundColor Yellow
    Write-Host "3. NON inizializzare con README" -ForegroundColor Yellow
    Write-Host "4. Clicca 'Create repository'" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Premi INVIO quando hai creato il repository"
}

Write-Host ""
Write-Host "Aggiungo il remote..." -ForegroundColor Green
git remote add origin "https://github.com/$username/$repoName.git" 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Il remote esiste già, lo aggiorno..." -ForegroundColor Yellow
    git remote set-url origin "https://github.com/$username/$repoName.git"
}

Write-Host "Rinomino il branch in main..." -ForegroundColor Green
git branch -M main

Write-Host "Eseguo il push..." -ForegroundColor Green
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=== Pubblicazione completata! ===" -ForegroundColor Green
    Write-Host ""
    Write-Host "Repository: https://github.com/$username/$repoName" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Per abilitare GitHub Pages:" -ForegroundColor Yellow
    Write-Host "1. Vai su https://github.com/$username/$repoName/settings/pages" -ForegroundColor Yellow
    Write-Host "2. Source: GitHub Actions" -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "Errore durante il push. Verifica:" -ForegroundColor Red
    Write-Host "- Il repository esiste su GitHub" -ForegroundColor Yellow
    Write-Host "- Hai i permessi per scrivere" -ForegroundColor Yellow
    Write-Host "- Sei autenticato (git config --global credential.helper)" -ForegroundColor Yellow
}

