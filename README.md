# Muhammad Tegar Abhiram - Portfolio Website

A modern, responsive portfolio website for Muhammad Tegar Abhiram, showcasing Data Science and AI Engineering expertise. Built with Next.js, Tailwind CSS, and Framer Motion with a stunning Glassmorphism design.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless adaptation across all devices
- **Glassmorphism UI**: Modern glass-effect cards with backdrop blur effects
- **Smooth Animations**: Framer Motion animations with scroll reveal effects
- **Bento Grid Layout**: Dynamic project showcase with varying column spans
- **Dark Theme**: Charcoal black background (#121212) with Amber Gold accents (#F59E0B)
- **Accessibility**: WCAG compliant with proper contrast ratios
- **Performance**: Optimized images and lazy loading

## 📋 Sections

1. **Hero Section** - Professional introduction with profile image and key statistics
2. **About** - Personal background and areas of expertise
3. **Projects** - Featured projects with metrics and Bento Grid layout
4. **Technical Skills** - Categorized programming languages, tools, and frameworks
5. **Experience** - Professional work experience and organizational roles
6. **Certifications** - Professional certifications and achievements
7. **Contact** - Multiple contact methods with styled contact cards

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (headings), JetBrains Mono (technical elements)
- **Language**: TypeScript

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup

1. Navigate to the project directory:
```bash
cd portolioWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 🏗️ Project Structure

```
portolioWebsite/
├── app/
│   ├── globals.css           # Global styles and Tailwind setup
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page
├── components/
│   ├── common/
│   │   ├── Navbar.tsx        # Navigation bar
│   │   └── ScrollReveal.tsx   # Animation wrapper components
│   └── sections/
│       ├── Hero.tsx          # Hero section
│       ├── About.tsx         # About section
│       ├── Projects.tsx      # Projects showcase
│       ├── Skills.tsx        # Technical skills
│       ├── Experience.tsx    # Work and organizational experience
│       ├── Certifications.tsx # Certifications and achievements
│       └── Contact.tsx       # Contact section
├── public/
│   └── profilepic.jpeg       # Profile picture
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
- Primary: Charcoal (#121212)
- Accent: Amber Gold (#F59E0B)

### Fonts
The website uses:
- **Inter**: For headings and general text
- **JetBrains Mono**: For technical/code elements

These are imported from Google Fonts in `app/globals.css`.

### Content
- Update CV information in individual section components
- Modify project details in `components/sections/Projects.tsx`
- Update contact information in `components/sections/Contact.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ✨ Glassmorphism Effects

The portfolio uses custom CSS utilities for glassmorphism:
- `.glass` - Full glass effect with blur and transparency
- `.glass-sm` - Subtle glass effect
- `.glass-hover` - Glass effect with hover animations

## 🚀 Deployment

The project can be deployed to:

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build
npm run start
```

## 📄 License

This portfolio is personal work and showcases Muhammad Tegar Abhiram's professional background.

## 📞 Contact

- Email: tegar.abhiram77@gmail.com
- WhatsApp: +62 822 6907 6085
- LinkedIn: [Muhammad Tegar Abhiram](https://linkedin.com/in/muhammad-tegar-abhiram)
- GitHub: [garr](https://github.com/garr)

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
