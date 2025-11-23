# Deploy Portfolio to Render - Step by Step Guide

## Repository Info
- **Repository Name**: Portfolio-LP-C
- **Platform**: Render (Static Site)

## Step-by-Step Instructions

### Step 1: Create Render Account
1. Go to https://render.com
2. Click **"Get Started for Free"** or **"Sign Up"**
3. Sign up with your GitHub account (recommended) or email

### Step 2: Create New Static Site
1. Once logged in, click **"New +"** button (top right)
2. Select **"Static Site"** from the dropdown

### Step 3: Connect GitHub Repository
1. Click **"Connect account"** if not already connected
2. Authorize Render to access your GitHub repositories
3. In the **"Connect a repository"** section:
   - Search for: `Portfolio-LP-C`
   - Select your repository: `YOUR_USERNAME/Portfolio-LP-C`

### Step 4: Configure Build Settings

Fill in the following details:

**Name:**
```
portfolio-lp-c
```
(or any name you prefer - this will be your subdomain)

**Branch:**
```
main
```
(or `master` if that's your default branch)

**Root Directory:**
```
.
```
(leave as default - root of repository)

**Build Command:**
```bash
npm install && npm run build
```

**Publish Directory:**
```
dist
```
(This is where Vite outputs the built files)

### Step 5: Advanced Settings (Optional)
Click **"Advanced"** to expand additional settings:

**Environment Variables:**
- Usually not needed for a static site, but if you have any API keys, add them here

**Pull Request Previews:**
- Enable if you want to preview changes from PRs (optional)

### Step 6: Deploy
1. Click **"Create Static Site"** button
2. Render will start building your site
3. Wait for the build to complete (usually 2-5 minutes)

### Step 7: Get Your Live URL
1. Once deployment is successful, you'll see a green status
2. Your site will be available at: `https://portfolio-lp-c.onrender.com`
3. You can customize the subdomain in settings

### Step 8: Custom Domain (Optional)
1. Go to your site's settings
2. Click **"Custom Domains"**
3. Add your domain (e.g., `logeshperumal.dev`)
4. Follow DNS configuration instructions

## Important Notes

### Build Configuration
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Node Version**: Render will auto-detect (should be Node 18+)

### Automatic Deployments
- Render automatically deploys when you push to the `main` branch
- Each deployment creates a new build
- Previous deployments are kept for rollback

### Free Tier Limitations
- Static sites on free tier may spin down after inactivity
- First request after inactivity may take 30-60 seconds
- Consider upgrading to paid plan for always-on service

## Troubleshooting

### Build Fails
1. Check build logs in Render dashboard
2. Common issues:
   - Missing dependencies (check `package.json`)
   - TypeScript errors (run `npm run build` locally first)
   - Missing environment variables

### 404 Errors on Routes
- For SPA routing, add a `_redirects` file in `public` folder:
  ```
  /*    /index.html   200
  ```

### Assets Not Loading
- Ensure all assets are in the `public` folder
- Check that paths use `/` (absolute) not `./` (relative)

## Update Your Site
After making changes:
```bash
git add .
git commit -m "Update portfolio"
git push
```
Render will automatically rebuild and deploy!

