---
description: Build a stunning one-page landing site in under 10 minutes for any topic (coffee shop, gym, teaching, etc.)
---

# 🚀 RAPID LANDING PAGE BUILDER - AI Agent Workflow

## OVERVIEW
This workflow helps you build a beautiful, responsive, one-page static site in under 10 minutes during your webinar. Just provide a **TOPIC** (e.g., "Coffee Shop", "Gym", "Teaching Academy") and follow these steps.

---

## 📋 PRE-FLIGHT CHECKLIST
Before starting, ensure:
- [ ] Dev server is running: `npm run dev`
- [ ] Browser is open at `http://localhost:3000`
- [ ] You have the topic ready from your audience

---

## 🎯 STEP 1: RECEIVE TOPIC & DEFINE THEME (1 minute)

When the user provides a topic, immediately define:

```
TOPIC: [e.g., "Coffee Shop"]
BRAND_NAME: [e.g., "Brew & Bean"]
PRIMARY_COLOR: [e.g., "amber" for coffee, "emerald" for gym, "violet" for teaching]
TAGLINE: [e.g., "Where Every Sip Tells a Story"]
```

### Color Palette Suggestions:
| Topic | Primary | Accent | Mood |
|-------|---------|--------|------|
| Coffee Shop | amber/brown | cream | Warm, cozy |
| Gym/Fitness | emerald/lime | orange | Energetic |
| Teaching/Academy | violet/indigo | sky | Professional |
| Restaurant | rose/red | gold | Elegant |
| Spa/Wellness | teal/cyan | pink | Calm, serene |
| Tech Startup | blue/cyan | purple | Modern |

---

## 🎨 STEP 2: UPDATE GLOBAL STYLES (1 minute)
// turbo

Update `src/app/globals.css` with the topic-specific color scheme. The base animations and styles are already set up.

Example for Coffee Shop:
```css
:root {
  --primary: #d97706; /* amber-600 */
  --primary-light: #fbbf24; /* amber-400 */
  --primary-dark: #92400e; /* amber-800 */
  --accent: #fef3c7; /* amber-100 */
  --background: #fffbeb; /* amber warm background */
  --foreground: #451a03; /* dark brown text */
}
```

---

## 🏗️ STEP 3: UPDATE SITE CONFIG (30 seconds)
// turbo

Update `src/lib/config.ts` with the topic details:

```typescript
export const siteConfig = {
  name: "BRAND_NAME",
  tagline: "TAGLINE",
  description: "Full description of the business",
  cta: "Get Started", // or "Book Now", "Join Us", etc.
  features: [
    { icon: "☕", title: "Feature 1", description: "..." },
    { icon: "🌿", title: "Feature 2", description: "..." },
    { icon: "❤️", title: "Feature 3", description: "..." },
  ],
  testimonials: [
    { name: "Customer 1", text: "Quote...", role: "Role" },
    // Add 2-3 testimonials
  ],
  contact: {
    phone: "+94 77 123 4567",
    email: "hello@brandname.com",
    address: "123 Main Street, Colombo"
  }
};
```

---

## 🖼️ STEP 4: GENERATE HERO IMAGE (2 minutes)

Use the `generate_image` tool to create a stunning hero image:

**Prompt Structure:**
```
"Professional hero image for [TOPIC] website, [specific scene], 
modern aesthetic, vibrant colors, high quality, web banner style, 
16:9 aspect ratio, no text"
```

**Examples:**
- Coffee Shop: "Professional hero image for coffee shop website, cozy cafe interior with warm lighting, steam rising from latte art, modern aesthetic, amber tones"
- Gym: "Professional hero image for gym website, modern fitness center with equipment, energetic atmosphere, emerald green accents, motivational"
- Teaching: "Professional hero image for online academy website, modern classroom with digital elements, professional, violet and blue tones"

Save to: `public/hero.jpg`

---

## 📝 STEP 5: BUILD THE PAGE (4 minutes)
// turbo

The components are pre-built! Just update `src/app/page.tsx` to use them:

```tsx
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
```

---

## ✨ STEP 6: CUSTOMIZE CONTENT (2 minutes)

Update each component with topic-specific content:

### Hero Component - Key elements:
- Brand name
- Tagline
- CTA button text
- Hero background image

### Features Component - 3-4 key selling points:
- Icon (emoji or lucide-react icon)
- Title
- Short description

### About Component:
- Brief story about the business
- Mission statement

### Testimonials:
- 2-3 customer quotes with names

### CTA (Call to Action):
- Compelling headline
- Action button

### Footer:
- Contact info
- Social links
- Copyright

---

## 🚀 STEP 7: FINAL POLISH (30 seconds)
// turbo

1. Check responsive design in browser
2. Verify all sections are visible
3. Test dark mode toggle (if applicable)
4. Ensure smooth scrolling

---

## 📦 BONUS: EXPORT AS STATIC SITE

To build for deployment:
```bash
npm run build
```

The static files will be in the `out/` folder, ready for any hosting.

---

## 🎪 LIVE DEMO SCRIPT

**Opening (30 sec):**
"I'll now build a complete landing page in under 10 minutes. Give me a topic!"

**Receive Topic (30 sec):**
"[Topic] - Perfect! Let me quickly define the brand..."

**Build Phase (8 min):**
- Show config update
- Generate hero image (wow moment!)
- Customize components
- Live preview changes

**Closing (1 min):**
"And there you have it - a complete, professional landing page built in [time]!"

---

## 🔧 TROUBLESHOOTING

| Issue | Solution |
|-------|----------|
| Styles not updating | Hard refresh (Cmd+Shift+R) |
| Image not loading | Check file path in public folder |
| Component error | Check imports and exports |
| Server error | Restart dev server |

---

## 💡 PRO TIPS FOR WEBINAR

1. **Have fallback images** ready in case generation is slow
2. **Type fast, explain as you go** - Keep the energy high
3. **Use keyboard shortcuts** - Faster navigation
4. **Keep browser & editor side-by-side** - Show live updates
5. **Engage audience** - "What color should we use?"

---

## 🎨 COMPONENT REFERENCE

All components are in `src/components/`:
- `Hero.tsx` - Full-width hero with image, title, CTA
- `Features.tsx` - 3-column feature grid with icons
- `About.tsx` - Split layout with image and text
- `Testimonials.tsx` - Customer reviews carousel/grid
- `CTA.tsx` - Call-to-action banner
- `Footer.tsx` - Contact info and links
- `Navbar.tsx` - Fixed navigation (optional)

Each component is self-contained and easily customizable!
