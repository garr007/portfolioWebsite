# Glassmorphism Implementation Guide

## 📘 Overview

Glassmorphism is a modern design trend that creates a frosted glass effect. This portfolio implements glassmorphism throughout using Tailwind CSS utilities combined with CSS backdrop filters.

## 🎨 Core Glassmorphism Classes

### 1. `.glass` - Full Glass Effect
**Usage**: Main card containers, large sections

```css
.glass {
  @apply bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl;
}
```

**CSS Properties**:
- `bg-white/10` - 10% white background (semi-transparent)
- `backdrop-blur-md` - Medium blur effect (16px)
- `border border-white/20` - Subtle white border at 20% opacity
- `rounded-2xl` - 16px border radius

**Example Usage**:
```tsx
<div className="glass p-8">
  {/* content */}
</div>
```

---

### 2. `.glass-sm` - Subtle Glass Effect
**Usage**: Secondary cards, smaller elements, tags

```css
.glass-sm {
  @apply bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl;
}
```

**CSS Properties**:
- `bg-white/5` - 5% white background (very transparent)
- `backdrop-blur-sm` - Small blur effect (4px)
- `border border-white/10` - Very subtle white border at 10% opacity
- `rounded-xl` - 12px border radius

**Example Usage**:
```tsx
<span className="glass-sm px-3 py-1 text-xs font-semibold">
  Tag
</span>
```

---

### 3. `.glass-hover` - Interactive Glass Effect
**Usage**: Clickable cards, interactive elements

```css
.glass-hover {
  @apply glass transition-all duration-300 hover:bg-white/15 hover:border-amber-gold/30 hover:shadow-lg hover:shadow-amber-gold/10;
}
```

**Properties on Hover**:
- `hover:bg-white/15` - Increases to 15% white background
- `hover:border-amber-gold/30` - Border becomes amber-gold at 30% opacity
- `hover:shadow-lg` - Large drop shadow
- `hover:shadow-amber-gold/10` - Shadow tinted with amber-gold at 10% opacity
- `transition-all duration-300` - Smooth 300ms transition

**Example Usage**:
```tsx
<div className="glass-hover p-8 rounded-2xl">
  {/* content */}
</div>
```

---

## 🎯 Implementation in Project Components

### Hero Section
```tsx
<div className="glass-sm p-6 md:p-8 rounded-2xl">
  {/* Hero content */}
</div>
```

### Project Cards (Bento Grid)
```tsx
<div className="glass-hover p-6 md:p-8 rounded-2xl h-full flex flex-col">
  {/* Project card */}
</div>
```

### Experience Timeline
```tsx
<motion.div className="glass-hover p-6 md:p-8 rounded-2xl group relative">
  {/* Experience item */}
</motion.div>
```

### Contact Cards
```tsx
<a className="group glass-hover p-8 rounded-2xl flex flex-col h-full">
  {/* Contact method */}
</a>
```

---

## 🌈 Color Combinations

### Primary Glassmorphism (Charcoal Background)
```
Background: #121212 (Charcoal Black)
Glass Background: rgba(255, 255, 255, 0.1) → 10% white
Border: rgba(255, 255, 255, 0.2) → 20% white
Accent on Hover: rgba(245, 158, 11, 0.3) → Amber Gold
```

### Suggested Color Overlays
```css
/* Light glass on dark background */
bg-white/5 to bg-white/15

/* Borders */
border-white/10 to border-white/30

/* On hover, use accent color */
border-amber-gold/20 to border-amber-gold/30

/* Shadow tints */
shadow-amber-gold/5 to shadow-amber-gold/10
```

---

## 🔧 Advanced Techniques

### 1. Gradient Overlays
```tsx
<div className="glass-hover p-8 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-amber-gold/5 to-amber-gold/10 group-hover:from-amber-gold/10 group-hover:to-amber-gold/15 transition-colors duration-300 -z-10"></div>
  {/* content */}
</div>
```

### 2. Animated Borders
```tsx
<div className="glass-hover p-8 relative">
  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-amber-gold/0 via-amber-gold/0 to-amber-gold/0"></div>
  {/* content */}
</div>
```

### 3. Nested Glass Effects
```tsx
<div className="glass p-8">
  <div className="glass-sm p-4 my-4">
    {/* Nested element */}
  </div>
</div>
```

---

## 📐 Backdrop Blur Values

| Class | Value | Use Case |
|-------|-------|----------|
| `backdrop-blur-xs` | 2px | Subtle backgrounds |
| `backdrop-blur-sm` | 4px | Secondary elements, tags |
| `backdrop-blur-md` | 16px | Main cards (default) |
| `backdrop-blur-lg` | 30px | Hero sections |
| `backdrop-blur-xl` | 40px | Navbars, important elements |

---

## 🎨 Tailwind Configuration

From `tailwind.config.js`:

```javascript
backdropBlur: {
  xs: '2px',
  sm: '4px',
},

colors: {
  'charcoal': '#121212',
  'amber-gold': '#F59E0B',
  'amber-gold-dark': '#D97706',
  'amber-gold-light': '#FBBF24',
}
```

---

## 💡 Best Practices

### 1. Opacity Hierarchy
```
Background:  white/5   (very subtle)
             white/10  (standard)
             white/15  (stronger)
             white/20  (strong)

Border:      white/10  (subtle)
             white/20  (standard)
             white/30  (strong)

Hover State: accent-color/20 to accent-color/30
```

### 2. Transitions
Always include smooth transitions for interactive elements:
```css
transition-all duration-300
hover:transition-colors duration-300
group-hover:scale-110 transition-transform duration-300
```

### 3. Border Consistency
- `.glass` → `border-white/20`
- `.glass-sm` → `border-white/10`
- `hover` → `border-amber-gold/30`

### 4. Shadow Effects
```css
shadow-lg shadow-amber-gold/10      /* Subtle glow */
shadow-xl shadow-amber-gold/20      /* Strong glow */
hover:shadow-2xl hover:shadow-amber-gold/20
```

---

## 🚀 Performance Considerations

### Backdrop Filter Performance
- Backdrop filters are GPU-accelerated
- Generally performant on modern browsers
- Fallback: CSS will gracefully degrade to semi-transparent backgrounds

### Browser Support
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (15.4+)
- Mobile: Excellent support on iOS and Android

### Optimization Tips
1. Use `.glass-sm` for smaller, less critical elements
2. Apply `will-change: filter` to frequently animated glass elements
3. Consider reducing blur on mobile if performance is a concern

---

## 📝 Usage Examples

### Creating a New Glass Card
```tsx
<div className="glass-hover p-6 rounded-2xl group">
  {/* Icon or Image */}
  <div className="w-12 h-12 rounded-lg bg-amber-gold/10 text-amber-gold group-hover:bg-amber-gold group-hover:text-charcoal transition-all duration-300">
    <Icon size={24} />
  </div>
  
  {/* Content */}
  <h3 className="text-lg font-bold mt-4 group-hover:text-amber-gold transition-colors duration-300">
    Title
  </h3>
  <p className="text-white/70">Description</p>
</div>
```

### Adding Glass Background to Navbar
```tsx
<nav className="glass z-50 border-b border-white/10">
  {/* Navigation items */}
</nav>
```

---

## 🔄 Customizing Glassmorphism

### Increase Blur Effect
Edit `tailwind.config.js`:
```javascript
backdropBlur: {
  md: '24px',  // Changed from 16px
}
```

### Change Border Transparency
Update `.glass` class in `app/globals.css`:
```css
.glass {
  @apply bg-white/15 backdrop-blur-md border border-white/30;
}
```

### Adjust Accent Color
Modify hover state:
```css
.glass-hover {
  @apply glass ... hover:border-amber-gold/50 ...;
}
```

---

## 🎬 Animation with Glassmorphism

### Smooth Entrance
```tsx
<motion.div
  initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
  animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
  className="glass"
>
  {/* content */}
</motion.div>
```

### Hover Scale with Glass
```tsx
<motion.div
  className="glass-hover"
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3 }}
>
  {/* content */}
</motion.div>
```

---

## 📚 Resources

- [Tailwind CSS Backdrop Filters](https://tailwindcss.com/docs/backdrop-filter)
- [CSS Backdrop-filter Specification](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [Glassmorphism Design](https://uxdesign.cc/glassmorphism-in-user-interface-design-4f4f41c57498)

---

**Last Updated**: May 4, 2026
**Portfolio**: Muhammad Tegar Abhiram
**Framework**: Next.js + Tailwind CSS + Framer Motion
