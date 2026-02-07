# Vikramshila Softwares - Modern Website

A completely redesigned, modern, and mobile-friendly website for Vikramshila Softwares.

## 🎨 Key Improvements

### Design & User Experience
- **Modern UI/UX**: Clean, contemporary design with smooth animations
- **Mobile-First Approach**: Fully responsive design that works flawlessly on all devices
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging scroll animations
- **Better Typography**: Modern fonts (Inter & Poppins) for improved readability
- **Professional Color Scheme**: Maintained brand colors with better contrast and visual hierarchy

### Technical Enhancements
- **Bootstrap 5**: Upgraded from Bootstrap 4 to the latest version
- **Improved Performance**: Optimized CSS and removed redundant code
- **Better Navigation**: Sticky navbar with scroll effects
- **Accessibility**: Better semantic HTML and ARIA labels
- **SEO Friendly**: Improved meta tags and structure

### New Features
1. **Hero Section**
   - Full-screen video background with overlay
   - Call-to-action buttons
   - Scroll indicator animation

2. **Stats Section**
   - Eye-catching statistics with icons
   - Hover effects for engagement

3. **Modern Service Cards**
   - Alternating layout for visual interest
   - Icon-based design
   - Feature lists with checkmarks

4. **Why Choose Us**
   - Card-based layout with quotes
   - Smooth flip animations
   - Professional testimonials

5. **Enhanced Footer**
   - Organized contact information
   - Social media integration
   - Better visual hierarchy

## 📱 Mobile Responsive Features

- **Breakpoints**: Optimized for all screen sizes
  - Desktop (1200px+)
  - Laptop (992px - 1199px)
  - Tablet (768px - 991px)
  - Mobile (< 768px)

- **Touch-Friendly**: Larger buttons and tap targets on mobile
- **Optimized Images**: Responsive images that scale properly
- **Hamburger Menu**: Clean mobile navigation
- **Readable Text**: Font sizes adjust based on screen size

## 🚀 Getting Started

### Files Included
1. `index.html` - Modern HTML structure
2. `modern-style.css` - Complete responsive CSS

### Installation

1. **Replace Old Files**
   ```
   - Backup your current index.html and style2.css
   - Replace with the new index.html and modern-style.css
   ```

2. **Update File Paths**
   - Make sure all image paths match your folder structure
   - Update the logo path: `video/logo png.png`
   - Update video path: `video/Circuit - 27725.mp4`

3. **Link the New CSS**
   ```html
   <link rel="stylesheet" href="modern-style.css">
   ```

4. **No Additional Setup Required**
   - All libraries (Bootstrap 5, Font Awesome, AOS) are loaded via CDN
   - No npm or package installation needed

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📋 Customization Guide

### Changing Colors
Edit the CSS variables in `modern-style.css`:
```css
:root {
    --primary-color: #801336;      /* Your brand color */
    --primary-dark: #5c0e26;       /* Darker shade */
    --secondary-color: #2c3e50;    /* Secondary color */
    --accent-color: #3498db;       /* Accent color */
}
```

### Updating Content
All content is in `index.html` and can be easily edited:
- Hero section text
- About cards
- Statistics numbers
- Service descriptions
- Contact information

### Adding Pages
Create similar pages for:
- `about.html`
- `services.html`
- `contactus.html`

Use the same header and footer from `index.html` for consistency.

## 🔧 Advanced Features

### Smooth Scroll
Automatically enabled for all anchor links (#services, #contact, etc.)

### Navbar Scroll Effect
Navbar becomes solid when scrolling down for better visibility

### Animation Timing
Adjust AOS animation duration in the JavaScript:
```javascript
AOS.init({
    duration: 1000,  // Change this value (in milliseconds)
    once: true,
    offset: 100
});
```

## 📊 Performance Tips

1. **Optimize Images**
   - Use WebP format for better compression
   - Compress images before uploading
   - Recommended tool: TinyPNG or ImageOptim

2. **Video Optimization**
   - Keep video file under 5MB
   - Use H.264 codec for best compatibility
   - Consider using a poster image

3. **Lazy Loading**
   - Add `loading="lazy"` to images below the fold

## 🐛 Troubleshooting

### Video Not Playing
- Check video file path
- Ensure video file is in correct format (MP4)
- Verify video file permissions

### Animations Not Working
- Check if AOS library loaded (check browser console)
- Verify internet connection (for CDN resources)

### Mobile Menu Not Opening
- Ensure Bootstrap JS is loaded
- Check browser console for errors

## 📞 Support

For support or questions:
- Email: info@vikramshilasoftwares.in
- Phone: +91-7014836734

## 📄 License

© Copyright 2024 Vikramshila Softwares. All Rights Reserved.

---

**Note**: This is a complete redesign focused on modern web standards, mobile responsiveness, and user experience. All old functionality has been preserved while significantly improving the design and performance.
