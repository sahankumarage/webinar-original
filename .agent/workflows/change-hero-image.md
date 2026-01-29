---
description: Completely transform the landing page (theme, font, content, images) to match any topic during a live webinar
---

# Change Webinar Topic Workflow

This workflow completely transforms the landing page to match a specific industry or topic. It updates the hero image, color theme, typography, and all text content.

## Quick Usage

**"Change topic to [TOPIC]"**
**"Make a [TOPIC] website"**

Examples:
- "Change topic to coffee shop"
- "Make a gym website"
- "Transform into a luxury real estate site"

## Agent Instructions

### Step 1: Analyze & Plan
Based on the requested `[TOPIC]`, determine the following:
1.  **Visual Style**: Color palette (Primary, Light, Dark, Accent), Font choice (from `next/font/google`).
2.  **Content**: Brand Name, Tagline, Description, 4 Key Features, Call to Actions.
3.  **Imagery**: A prompt for the hero background.

### Step 2: Generate Hero Image
Generate a high-quality, professional background image.
- **Prompt Template**: `Professional [TOPIC] photography, [KEY_ELEMENTS], [LIGHTING_STYLE], bokeh background, 8K ultra realistic, commercial style`
- **Save Path**: `public/hero-bg.png`
- **Action**: Use `generate_image` tool. 
- **Note**: Ensure `src/components/Hero.tsx` is pointing to `url('/hero-bg.png')`. (It should be by default, but check if unsure).

### Step 3: Update Color Theme (globals.css)
Update the CSS variables in `src/app/globals.css`. The color MUST match the psychological vibe of the topic.

**Topic -> Color Mapping Guide**:
| Topic | Primary | Background Mode | Vibe |
| :--- | :--- | :--- | :--- |
| **Gym / Fitness** | Electric Orange (`#ea580c`) | **Dark** (`#0a0a0a`) | Energetic, Aggressive |
| **Coffee Shop** | Warm Amber (`#d97706`) | **Light** (`#fffbeb`) | Cozy, Inviting |
| **Medical / Health** | Trust Blue (`#0284c7`) | **White** (`#ffffff`) | Clean, Sterile |
| **Eco / Nature** | Fresh Green (`#059669`) | **Light** (`#ecfdf5`) | Natural, Organic |
| **Tech / SaaS** | Neon Purple (`#7c3aed`) | **Dark** (`#0f172a`) | Futuristic, Sleek |
| **Luxury / Real Estate** | Gold (`#ca8a04`) | **Dark** (`#1c1917`) | Premium, Exclusive |

- **Target File**: `src/app/globals.css`
- **Action**:
    1.  Update `--primary`, `--primary-light`, and `--primary-dark`.
    2.  Update `--background` and `--foreground` based on the "Background Mode".
    3.  Update `--accent` to a complementary color (subtle tint of primary).

### Step 4: Update Typography (layout.tsx)
Switch the main font to match the vibe.
- **Target File**: `src/app/layout.tsx`
- **Action**:
    1.  Import a new font from `next/font/google` (e.g., `Playfair_Display`, `Poppins`, `Lato`, `Oswald`, `Merriweather`).
    2.  Configure the font constant (e.g., `const mainFont = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-main" });`).
    3.  Update the `<body>` className to use the new variable (e.g., `${mainFont.variable}`).
    4.  **Crucial**: Update `globals.css` to use this variable in the `@theme` or `body` rule if necessary, OR just ensure `layout.tsx` injects the variable that tailwind expects.
        *   *Simpler approach*: Update `globals.css` body rule: `font-family: var(--font-main), sans-serif;`

### Step 5: Update Content (config.ts)
Rewrite the site configuration.
- **Target File**: `src/lib/config.ts`
- **Action**: Use `replace_file_content` (or multi-replace) to update `siteConfig`.
    - `name`: Creative brand name
    - `tagline`: Catchy headline
    - `description`: 2 sentences selling the value
    - `cta`: Relevant button text (e.g., "Book Class", "Order Now")
    - `features`: 4 distinct features with matching emojis

### Step 6: Verify
- Take a screenshot of the Hero section and Features section.
- Confirm the new look resonates with the topic.
