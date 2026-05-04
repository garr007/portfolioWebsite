# Portfolio Website - Quick Start Guide

## ✅ Project Setup Complete!

Your professional portfolio website has been successfully created with all required features according to the RTCC-O specifications.

## 🚀 Getting Started

### Option 1: Run Development Server (Recommended for Testing)

1. Open a terminal in the project directory
2. Run the development server:
```bash
npm run dev
```
3. Open [http://localhost:3000](http://localhost:3000) in your browser

The development server will automatically reload when you make changes.

### Option 2: Build for Production

```bash
npm run build
npm run start
```

This will create an optimized production build.

## 📁 Project Structure

```
portolioWebsite/
├── app/                              # Next.js app directory
│   ├── globals.css                   # Global styles and Tailwind utilities
│   ├── layout.tsx                    # Root layout with Navbar
│   └── page.tsx                      # Main page (imports all sections)
│
├── components/
│   ├── common/
│   │   ├── Navbar.tsx               # Fixed navigation bar
│   │   └── ScrollReveal.tsx         # Framer Motion animation wrappers
│   │
│   └── sections/
│       ├── Hero.tsx                 # Hero section with profile image
│       ├── About.tsx                # About section with expertise
│       ├── Projects.tsx             # Projects with Bento Grid layout
│       ├── Skills.tsx               # Technical skills categorized
│       ├── Experience.tsx           # Professional & organizational experience
│       ├── Certifications.tsx       # Certifications and achievements
│       └── Contact.tsx              # Contact methods with cards
│
├── public/
│   └── profilepic.jpeg              # Profile picture asset
│
├── tailwind.config.js               # Tailwind CSS configuration
├── next.config.js                   # Next.js configuration
├── tsconfig.json                    # TypeScript configuration
├── postcss.config.js                # PostCSS configuration
└── package.json                     # Dependencies
```

## 🎨 Design Features

### Glassmorphism Effects
- Backdrop blur with transparent borders
- Hover effects with smooth transitions
- Gradient overlays for depth

### Color Scheme
- **Background**: Charcoal Black (#121212)
- **Accent**: Amber Gold (#F59E0B)
- **Accents**: Amber Gold Light (#FBBF24), Amber Gold Dark (#D97706)

### Typography
- **Headings**: Inter font
- **Technical**: JetBrains Mono font
- **Body**: Inter font

### Animations
- Fade-in-up scroll reveal animations
- Smooth hover transitions
- Floating profile image animation
- Scroll indicator pulse

## 📱 Responsive Design

The website is fully responsive across all devices:
- **Mobile**: Single column layout
- **Tablet**: 2-column layout
- **Desktop**: Full-width optimized layout

## 🔧 Customization Guide

### Modify Contact Information
Edit `components/sections/Contact.tsx`:
- Email
- WhatsApp link
- LinkedIn profile
- GitHub profile

### Update Project Information
Edit `components/sections/Projects.tsx`:
- Add/remove projects
- Update metrics and statistics
- Change tags and descriptions

### Adjust Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'charcoal': '#121212',
  'amber-gold': '#F59E0B',
  // Add more custom colors here
}
```

### Add/Remove Sections
Edit `app/page.tsx` to add or remove section imports and components.

## 🚢 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Automatic deployments on every push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Push to GitHub and connect to Netlify

### Traditional Hosting
```bash
npm run build
npm run start
```

## 📊 Performance Optimizations

- ✅ Image optimization with Next.js Image component
- ✅ Lazy loading for images
- ✅ CSS-in-JS with Tailwind for minimal bundle size
- ✅ Code splitting with Next.js App Router
- ✅ Font optimization with Google Fonts

## 🔍 SEO Features

- Meta tags configured in `layout.tsx`
- Semantic HTML5 structure
- Proper heading hierarchy
- Social meta tags ready

## 🎯 Key Features Implemented

According to RTCC-O Specifications:

✅ Single-page portfolio website
✅ Mobile-first responsive design
✅ Glassmorphism UI effects
✅ Bento Grid project layout
✅ Framer Motion animations
✅ Semantic HTML5
✅ WCAG accessibility compliance
✅ Custom color palette
✅ Custom typography (Inter + JetBrains Mono)
✅ All required sections:
   - Hero Section
   - About
   - Projects (with metrics)
   - Technical Skills
   - Experience (professional & organizational)
   - Certifications & Achievements
   - Contact with social cards

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Build Errors
Clear the build cache and node_modules:
```bash
rm -r node_modules .next
npm install
npm run dev
```

### Image Not Loading
Ensure `profilepic.jpeg` is in the `public/` folder.

## 📞 Support Files

- `README.md` - Comprehensive project documentation
- `package.json` - Dependencies and scripts
- `tailwind.config.js` - Tailwind customization
- `tsconfig.json` - TypeScript configuration

## 🎉 You're All Set!

Your portfolio website is ready to showcase your impressive career in Data Science and AI Engineering. Start the development server and explore your new portfolio!

```bash
npm run dev
```

Then visit: http://localhost:3000

---

**Last Updated**: May 4, 2026
**Project**: Muhammad Tegar Abhiram Portfolio Website
**Tech Stack**: Next.js 14 | Tailwind CSS | Framer Motion | TypeScript
