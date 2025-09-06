# Deployment Instructions for Linde DermaLab CO2 Site

## Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `lindedermalab-site` (or `co2-london`)
3. Make it public
4. Don't initialize with README (we already have one)
5. Click "Create repository"

## Step 2: Push to GitHub
After creating the repo, run these commands (replace YOUR_USERNAME with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/lindedermalab-site.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel
1. Go to https://vercel.com/new
2. Import the GitHub repository you just created
3. Configure the project:
   - Framework Preset: Next.js (should auto-detect)
   - Root Directory: ./ (leave as is)
   - Environment Variables: None needed
4. Click "Deploy"

## Step 4: Connect Custom Domain (co2london.com)
After deployment:
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add `co2london.com`
4. Update your domain's DNS settings with the provided records:
   - Add an A record pointing to Vercel's IP
   - Or add a CNAME record pointing to cname.vercel-dns.com

## Important URLs
- Live site will be at: https://co2london.com (after DNS propagation)
- Vercel preview URL will be provided after deployment
- GitHub repo: https://github.com/YOUR_USERNAME/lindedermalab-site

## GHL Booking Integration
The site is configured to use GHL booking. The URL is set in:
`config/booking.ts`

Current URL: https://booking.lindedermalab.com/booking
(Update this if Tatiana provides a different GHL calendar link)