# PICKLELUXX - Production Deployment Checklist

## ✅ PRE-DEPLOYMENT CHECKLIST

### 1. Content & Assets
- [ ] Replace `/public/vite.svg` with actual PICKLELUXX favicon/logo
- [ ] Add `/public/og-image.jpg` (1200x630px) for social media sharing
- [ ] Verify all images in `src/assets/` are optimized (WebP format recommended)
- [ ] Test all image paths are working

### 2. Contact Information
- [ ] Verify phone number: +60 18 224 5123
- [ ] Verify addresses are correct
- [ ] Test booking link: https://deeplink.afa-sports.com/Complex/474

### 3. SEO & Analytics
- [ ] Update domain in `index.html` meta tags (replace pickleluxx.com)
- [ ] Add Google Analytics tracking code (optional)
- [ ] Add Facebook Pixel (optional)
- [ ] Generate and add sitemap.xml to `/public/`
- [ ] Verify robots.txt

### 4. Performance
- [ ] Run `npm run build` and test production build locally
- [ ] Check bundle size (should be < 500KB)
- [ ] Test on slow 3G network
- [ ] Verify lazy loading of images

### 5. Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Safari (iOS & macOS)
- [ ] Firefox
- [ ] Mobile browsers (iOS Safari, Chrome Android)

### 6. Mobile Testing
- [ ] iPhone (various sizes: SE, 12/13, Pro Max)
- [ ] Android (various sizes: small, medium, large)
- [ ] iPad/Tablets
- [ ] Test all touch interactions

### 7. Functionality Testing
- [ ] All navigation links scroll to correct sections
- [ ] "Book a Court" button opens correct URL in new tab
- [ ] Scroll to top button appears/works
- [ ] Burger menu opens/closes on mobile
- [ ] All hover effects work on desktop
- [ ] Forms work (if any)

### 8. Security
- [ ] HTTPS enabled
- [ ] Add security headers (CSP, X-Frame-Options, etc.)
- [ ] No sensitive data in code
- [ ] Environment variables properly set

---

## 🚀 DEPLOYMENT STEPS

### Option 1: Vercel (Recommended - Easiest)
1. Push code to GitHub
2. Sign up at vercel.com
3. Import your GitHub repository
4. Vercel auto-detects Vite settings
5. Deploy!
6. Add custom domain

### Option 2: Netlify
1. Push code to GitHub
2. Sign up at netlify.com
3. Connect repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy!

### Option 3: AWS/DigitalOcean
1. Build: `npm run build`
2. Upload `dist/` folder to server
3. Configure nginx/apache
4. Set up SSL certificate
5. Point domain

---

## 📝 BUILD COMMAND
```bash
npm run build
```

This creates optimized production files in `/dist/` folder.

---

## ⚠️ IMPORTANT NOTES

1. **Domain Setup**: Update all `pickleluxx.com` references in:
   - `index.html` (meta tags)
   - `robots.txt`
   - Any future sitemap

2. **Analytics**: Add Google Analytics or similar if needed

3. **Monitoring**: Set up error tracking (Sentry, LogRocket, etc.)

4. **Backup**: Keep regular backups of your code and assets

5. **Updates**: Plan for content updates (prices, hours, etc.)

---

## 🔧 POST-DEPLOYMENT

- [ ] Test live site on multiple devices
- [ ] Submit sitemap to Google Search Console
- [ ] Test page speed: https://pagespeed.web.dev/
- [ ] Monitor for errors in console
- [ ] Set up uptime monitoring

---

## 📞 SUPPORT CONTACTS

- Developer: [Your Contact]
- Hosting Support: [Hosting Provider]
- Domain Registrar: [Domain Provider]
