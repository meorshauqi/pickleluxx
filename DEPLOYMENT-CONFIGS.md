# Deployment Configuration Files - Quick Reference

## 📁 Which Config File Do I Need?

Your project now includes configurations for ALL major deployment platforms:

### ✅ Created Files:

| File | Purpose | When to Use |
|------|---------|-------------|
| `public/.htaccess` | Apache server config | cPanel, Bluehost, GoDaddy, Hostinger |
| `public/_redirects` | Netlify routing | Deploying to Netlify |
| `public/robots.txt` | SEO - Search engines | All deployments |
| `vite.config.js` | Build optimization | All deployments (already configured) |

---

## 🎯 Deployment Platform Guide

### Vercel
**Files Needed:** ✅ None (auto-configured)
- Vercel automatically detects Vite
- No manual configuration required
- Just connect and deploy!

### Netlify
**Files Needed:** ✅ `_redirects` (already created)
- Handles SPA routing automatically
- `_redirects` ensures all routes work
- Builds and deploys automatically

### Apache (cPanel/Shared Hosting)
**Files Needed:** ✅ `.htaccess` (already created)
- **Most common for traditional hosting**
- Handles routing, caching, compression, security
- Just upload `dist/` folder contents via FTP
- `.htaccess` does everything automatically

**Common Apache Providers:**
- Hostinger ✅
- Bluehost ✅
- GoDaddy ✅
- SiteGround ✅
- DreamHost ✅
- HostGator ✅
- Any cPanel hosting ✅

### Nginx Server
**Files Needed:** ⚠️ Manual Nginx config (see DEPLOYMENT.md)
- Common for VPS/Cloud servers
- Need to add server block configuration
- More technical setup required

### AWS S3/CloudFront
**Files Needed:** ⚠️ CloudFront config
- Requires AWS console configuration
- S3 bucket + CloudFront distribution
- Error page routing to index.html

---

## 🚀 Quick Deployment Steps by Platform

### For cPanel/Apache Hosting (Most Common):
```bash
# 1. Build the project
npm run build

# 2. Upload these files via FTP to public_html:
- Everything from dist/ folder
- The .htaccess file (already in dist/ folder)

# 3. Done! Your site is live
```

**✅ The `.htaccess` file handles:**
- ✅ SPA routing (all URLs work)
- ✅ HTTPS redirect (force secure connection)
- ✅ Gzip compression (faster loading)
- ✅ Browser caching (performance)
- ✅ Security headers (protection)
- ✅ File access control (security)

### For Vercel/Netlify (Easiest):
```bash
# 1. Push to GitHub
git add .
git commit -m "Deploy to production"
git push

# 2. Connect your repo on Vercel/Netlify

# 3. Deploy button → Done!
```

---

## 🔍 How to Tell Which Server You Have

Not sure which server type you're using? Here's how to find out:

### You have Apache if:
- ✅ You have cPanel login
- ✅ Your hosting mentions "cPanel"
- ✅ You upload files via FTP/File Manager
- ✅ Providers like Bluehost, Hostinger, GoDaddy
- ✅ Shared hosting packages
- **→ Use .htaccess file**

### You have Nginx if:
- ✅ You have VPS/Cloud server (DigitalOcean, Linode, AWS EC2)
- ✅ You SSH into your server
- ✅ You manually configure server blocks
- **→ Need Nginx config (see DEPLOYMENT.md)**

### You're using Vercel/Netlify if:
- ✅ You deployed directly from GitHub
- ✅ You connected your repository
- ✅ Automatic builds on every push
- **→ No manual config needed**

---

## ⚠️ Important Notes

### File Location:
All config files are in the `public/` folder:
```
pickleluxx/
├── public/
│   ├── .htaccess       ← Apache servers
│   ├── _redirects      ← Netlify
│   └── robots.txt      ← All (SEO)
├── dist/               ← Built files (created after npm run build)
└── src/                ← Source code
```

### After Building:
When you run `npm run build`, the `public/` folder contents are automatically copied to `dist/`, so your `.htaccess` and `_redirects` files will be included in the deployment.

### Testing Locally:
```bash
# Build production version
npm run build

# Test locally before deploying
npm run preview

# Then open: http://localhost:4173
```

---

## 🆘 Troubleshooting

### Problem: Routes don't work (404 errors)
**Apache:** Make sure `.htaccess` is uploaded and mod_rewrite is enabled
**Netlify:** Make sure `_redirects` file is present
**Vercel:** Should work automatically

### Problem: HTTPS not working
**cPanel:** Enable SSL in cPanel → SSL/TLS → Install free Let's Encrypt
**Netlify/Vercel:** Automatic HTTPS (free)

### Problem: Images not loading
- Check image paths are correct
- Make sure images are in `src/assets/` folder
- Verify images were included in `dist/` after build

### Problem: Blank page after deployment
- Check browser console for errors
- Verify all asset paths are relative (not absolute)
- Make sure `dist/` folder was fully uploaded

---

## 📞 Need Help?

1. Check which server type you have (Apache/Nginx/Vercel/Netlify)
2. Use the corresponding config file
3. Follow the deployment steps in DEPLOYMENT.md
4. Test locally with `npm run preview` first

**Most common setup:** Apache + cPanel = Just use `.htaccess` ✅
