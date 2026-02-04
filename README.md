# Mansi Verma - 3D Animated Portfolio

A modern, professional animated 3D portfolio website built with HTML5, CSS3, and Three.js. Features a sleek grey and white theme with interactive 3D objects and smooth animations.

## Features

✨ **Interactive 3D Graphics**
- Animated 3D objects (cube, sphere, torus, pyramid, octahedron)
- Mouse-tracking camera system
- Smooth floating animations
- Scroll-based parallax effects

🎨 **Modern Design**
- Professional grey and white color scheme
- Responsive layout for all devices
- Smooth transitions and animations
- Clean typography and spacing

📱 **Fully Responsive**
- Mobile-friendly design
- Adaptive navigation
- Optimized for all screen sizes

🔗 **Key Sections**
- Hero section with 3D animation
- About Me
- Skills showcase
- Experience timeline
- Projects gallery
- Contact information

## Files

- `index.html` - Main HTML structure and styling
- `script.js` - 3D animations and interactivity
- `README.md` - This file

## How to Use

1. **Open in Browser**: Simply open `index.html` in your web browser
2. **No Installation Required**: All libraries are loaded from CDN
3. **No Server Needed**: Works perfectly as static HTML files

## Customization Guide

### 1. Update Personal Information
In `index.html`, find and replace:
```html
<!-- Replace in hero section -->
<h1>Hi, I'm <span class="highlight">Mansi Verma</span></h1>

<!-- Replace contact information -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="#">linkedin.com/in/mansi</a>
<a href="#">github.com/mansi</a>
```

### 2. Update Skills
Locate the skills section and modify the skill cards:
```html
<div class="skill-card">
    <h3>Your Skill Category</h3>
    <p>List your technologies and skills here</p>
</div>
```

### 3. Update Experience
Modify the timeline items in the experience section:
```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <div class="date">Year - Year</div>
        <p>Job description and responsibilities</p>
    </div>
</div>
```

### 4. Update Projects
Customize the project cards:
```html
<div class="project-card">
    <div class="project-image">🎯</div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
    </div>
</div>
```

### 5. Change Colors
Modify the CSS color scheme:
```css
/* Main colors */
#666666 - Dark Grey
#888888 - Medium Grey
#aaaaaa - Light Grey
#f5f5f5 - Very Light Grey
#ffffff - White
```

## 3D Object Customization

In `script.js`, modify 3D objects:
```javascript
// Change colors
new THREE.MeshPhongMaterial({
    color: 0x666666  // Change hex color
})

// Adjust rotation speed
obj.rotationSpeed = 0.005  // Higher = faster rotation

// Change object positions
mesh.position.x = -3  // X, Y, Z coordinates
```

## Performance Tips

- The 3D animation is GPU-accelerated
- Smooth 60 FPS performance on modern browsers
- Optimized for desktop and mobile devices
- Minimal CPU usage when not actively rendering

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with animations
- **JavaScript** - Interactive functionality
- **Three.js** - 3D graphics library
- **CDN** - No build process required

## Font & Typography

Default font: Segoe UI, Tahoma, Geneva, Verdana, sans-serif

For custom fonts, add to `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

## Deployment

### Deploy to GitHub Pages
1. Push files to GitHub repository
2. Go to Settings > Pages
3. Select main branch as source
4. Visit `yourusername.github.io/repository-name`

### Deploy to Netlify
1. Connect GitHub repository to Netlify
2. Automatic deployment on push
3. Get free HTTPS and domain

### Deploy to Vercel
1. Connect GitHub repository to Vercel
2. Automatic deployment
3. Optimized performance

## License

Free to use and modify for personal projects.

## Notes

- Keep all files in the same directory
- No database or backend required
- Works completely offline after initial load
- All animations are hardware-accelerated

---

**Last Updated**: February 2026
**Version**: 1.0
