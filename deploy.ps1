$ErrorActionPreference = "Stop"
Set-Location "dist"
git init
git checkout -B deployment
git add .
git commit -m "Manual deploy"
try {
    git remote add origin https://github.com/WallyAq/diaSete.git
} catch {
    # If remote exists (from previous run), update it or ignore
    git remote set-url origin https://github.com/WallyAq/diaSete.git
}
# We need to make sure we don't error if remote add fails but set-url works. 
# Actually git remote add returns error exit code which powershell catches.
# Let's simplify: remove first.
git remote remove origin 2>$null
git remote add origin https://github.com/WallyAq/diaSete.git
git push -f origin deployment:gh-pages
