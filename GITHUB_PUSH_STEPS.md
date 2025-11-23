# Steps to Push Portfolio to GitHub

## Prerequisites
- GitHub account created
- Git installed on your system

## Step-by-Step Instructions

### Step 1: Initialize Git Repository
```bash
git init
```

### Step 2: Add All Files
```bash
git add .
```

### Step 3: Make Initial Commit
```bash
git commit -m "Initial commit: Portfolio website with modern UI"
```

### Step 4: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `lp-portfolio` (or your preferred name)
3. Description: "Modern portfolio website for Logesh Perumal C"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

### Step 5: Add Remote Repository
Replace `YOUR_USERNAME` with your GitHub username:
```bash
git remote add origin https://github.com/YOUR_USERNAME/lp-portfolio.git
```

### Step 6: Rename Branch to Main (if needed)
```bash
git branch -M main
```

### Step 7: Push to GitHub
```bash
git push -u origin main
```

## Alternative: Using SSH (if you have SSH keys set up)
```bash
git remote add origin git@github.com:YOUR_USERNAME/lp-portfolio.git
git push -u origin main
```

## Future Updates
After making changes:
```bash
git add .
git commit -m "Description of changes"
git push
```

## Notes
- The `.gitignore` file already excludes `node_modules`, `dist`, and other build files
- Your resume PDF will be included in the repository
- Make sure to keep your repository updated with `git push` after changes

