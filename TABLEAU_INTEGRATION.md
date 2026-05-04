# Tableau Integration Guide

## 📊 Embedding Tableau Dashboards

While the current portfolio doesn't have active Tableau dashboards embedded (as Tableau URLs weren't provided), this guide explains how to integrate them.

## 🔧 Creating a Reusable Tableau Component

### Step 1: Create TableauEmbed Component

Create `components/common/TableauEmbed.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TableauEmbedProps {
  url: string
  title: string
  height?: string | number
  showToolbar?: boolean
  showTabs?: boolean
}

export const TableauEmbed = ({
  url,
  title,
  height = '600px',
  showToolbar = true,
  showTabs = true,
}: TableauEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load Tableau JavaScript API
    const script = document.createElement('script')
    script.src = 'https://public.tableau.com/javascripts/api/tableau-2.min.js'
    script.async = true
    script.onload = () => {
      setIsLoaded(true)
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="w-full rounded-2xl overflow-hidden glass p-4 md:p-6"
    >
      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-white mb-4">
        {title}
      </h3>

      {/* Loading state */}
      {!isLoaded && (
        <div className="w-full bg-white/5 rounded-lg animate-pulse" style={{ height }}>
          <div className="flex items-center justify-center h-full">
            <p className="text-white/50">Loading dashboard...</p>
          </div>
        </div>
      )}

      {/* Tableau embed container */}
      <div
        id="tableau-container"
        style={{
          height,
          visibility: isLoaded ? 'visible' : 'hidden',
        }}
        className="rounded-lg overflow-hidden tableau-embed"
      >
        <tableau-viz
          id="tableau-viz"
          src={url}
          toolbar={showToolbar ? 'top' : 'hidden'}
          hide-tabs={showTabs ? 'false' : 'true'}
        />
      </div>

      {/* Responsive wrapper note */}
      <p className="text-xs text-white/40 mt-4">
        Dashboard is responsive and will adapt to your screen size
      </p>
    </motion.div>
  )
}

export default TableauEmbed
```

---

## 📐 Responsive Tableau Component (Wrapper)

### Alternative: Using Iframe (Simpler Approach)

Create `components/common/TableauIframe.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'

interface TableauIframeProps {
  url: string
  title: string
  aspectRatio?: number // width:height ratio (default: 16/9)
}

export const TableauIframe = ({
  url,
  title,
  aspectRatio = 16 / 9,
}: TableauIframeProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="w-full space-y-4"
    >
      <h3 className="text-lg md:text-xl font-bold text-white">
        {title}
      </h3>

      {/* Responsive iframe container */}
      <div
        className="relative w-full rounded-2xl overflow-hidden glass"
        style={{
          paddingBottom: `${(1 / aspectRatio) * 100}%`,
          height: 0,
        }}
      >
        <iframe
          src={url}
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <p className="text-xs text-white/40">
        Interactive Tableau dashboard (responsive)
      </p>
    </motion.div>
  )
}

export default TableauIframe
```

---

## 🎯 Integration in Projects Section

### Adding Tableau Dashboard to Projects

Update `components/sections/Projects.tsx`:

```tsx
import TableauIframe from '@/components/common/TableauIframe'

// In the projects array or as a separate section:

{/* Tableau Dashboard Example */}
<ScrollReveal delay={0.5}>
  <TableauIframe
    url="https://public.tableau.com/views/YourDashboard/YourSheet?:embed=y&:display_count=n&:origin=viz_share_link"
    title="Customer Analytics Dashboard"
    aspectRatio={16 / 9}
  />
</ScrollReveal>
```

---

## 🔗 How to Get Tableau Embed URLs

### Step 1: Create/Open Your Dashboard in Tableau Public
- Go to [Tableau Public](https://public.tableau.com/)
- Create or upload your dashboard

### Step 2: Get Embed URL
1. Click **Share** button
2. Choose **Embed Code**
3. Copy the URL from the iframe `src` attribute

Example URL format:
```
https://public.tableau.com/views/YourWorkbookName/YourSheetName?:embed=y&:display_count=n&:origin=viz_share_link
```

### Step 3: Add to Portfolio

#### Option A: Using TableauIframe Component
```tsx
<TableauIframe
  url="YOUR_EMBED_URL_HERE"
  title="My Data Analysis"
/>
```

#### Option B: Direct in Projects
```tsx
const projects = [
  // ... other projects
  {
    id: 'tableau-1',
    title: 'Customer Churn Analysis',
    description: 'Interactive Tableau dashboard showing customer churn metrics',
    tags: ['Tableau', 'Business Intelligence', 'Data Analysis'],
    component: (
      <TableauIframe
        url="YOUR_URL"
        title="Churn Analysis Dashboard"
      />
    ),
    colSpan: 'col-span-2',
  },
]
```

---

## 📱 Responsive Design for Tableau

### Mobile Optimization

```tsx
interface ResponsiveTableauProps {
  url: string
  title: string
  mobileHeight?: string
  desktopHeight?: string
}

export const ResponsiveTableau = ({
  url,
  title,
  mobileHeight = '400px',
  desktopHeight = '600px',
}: ResponsiveTableauProps) => {
  return (
    <div className="w-full">
      <h3 className="text-lg md:text-xl font-bold text-white mb-4">
        {title}
      </h3>

      <div className="rounded-2xl overflow-hidden glass">
        <div
          className="md:block hidden"
          style={{ height: desktopHeight }}
        >
          <iframe
            src={url}
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>

        <div
          className="md:hidden block"
          style={{ height: mobileHeight }}
        >
          <iframe
            src={url}
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
```

---

## 🔐 Security Considerations

### API Best Practices

1. **Never expose credentials** in client-side code
2. **Use public Tableau URLs** for public portfolios
3. **Enable SSL/TLS** for all connections
4. **Use Content Security Policy (CSP)** headers

### CSP Header Example (in `next.config.js`):

```javascript
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "frame-src 'self' https://public.tableau.com; script-src 'self' https://public.tableau.com",
  },
]

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
```

---

## 🎨 Styling Tableau for Glassmorphism

### Custom CSS for Embedded Dashboards

```css
/* app/globals.css */

.tableau-embed {
  border-radius: 1rem;
  overflow: hidden;
}

.tableau-embed iframe {
  border-radius: 1rem;
}

.tableau-viz {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

---

## 📊 Example Dashboard Integration

### Customer Churn Analysis (from CV)

```tsx
// In components/sections/Projects.tsx

import TableauIframe from '@/components/common/TableauIframe'

{/* Tableau Dashboard as Project Card */}
<ScrollReveal delay={0.4}>
  <div className="col-span-2 glass-hover p-8 rounded-2xl">
    <h3 className="text-2xl font-bold mb-6">
      Customer Churn Analysis Dashboard
    </h3>

    <TableauIframe
      url="https://public.tableau.com/YOUR_CHURN_DASHBOARD_URL"
      title="Databel Telecom Analysis"
      aspectRatio={16 / 9}
    />

    <p className="text-white/70 mt-6">
      Interactive dashboard analyzing customer churn patterns using Tableau
    </p>

    <div className="flex gap-2 mt-4">
      <span className="px-3 py-1 bg-amber-gold/10 text-amber-gold text-xs font-semibold rounded-full">
        Tableau
      </span>
      <span className="px-3 py-1 bg-amber-gold/10 text-amber-gold text-xs font-semibold rounded-full">
        Analytics
      </span>
    </div>
  </div>
</ScrollReveal>
```

---

## 🚀 Performance Tips

### 1. Lazy Loading
```tsx
<iframe
  src={url}
  loading="lazy"
  className="w-full h-full border-0"
/>
```

### 2. Responsive Sizing
- Use percentages for width: `width: 100%`
- Calculate height based on aspect ratio
- Adjust on different screen sizes

### 3. Caching
```tsx
export const TableauEmbed = React.memo(({ url, title }) => {
  return (
    // Component JSX
  )
}, (prevProps, nextProps) => {
  return prevProps.url === nextProps.url
})
```

---

## 🔧 Troubleshooting

### Dashboard Not Loading
1. Verify URL is correct
2. Check CORS settings in Tableau
3. Ensure iframe is allowed in CSP headers
4. Check browser console for errors

### Performance Issues
1. Reduce dashboard size/complexity
2. Use lazy loading
3. Optimize data sources
4. Consider server-side caching

### Mobile Display Issues
1. Test on real devices
2. Adjust height calculations
3. Consider mobile-first approach
4. Use media queries for responsive design

---

## 📚 Resources

- [Tableau Embedding Guide](https://help.tableau.com/current/api/embedding_api/en-us/index.html)
- [Tableau Public Help](https://public.tableau.com/s/help)
- [Responsive Iframe Pattern](https://www.w3schools.com/html/html_iframe.asp)
- [Next.js Image Optimization](https://nextjs.org/docs/pages/building-your-application/optimizing/images)

---

**Last Updated**: May 4, 2026
**Framework**: Next.js + Tableau Public
**Status**: Ready for integration
