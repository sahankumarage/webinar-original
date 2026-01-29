// Site Configuration - Luxury Gems Business
// This is the central place to configure all content

export const siteConfig = {
  // Brand Info
  name: "Royal Gems Collection",
  tagline: "Exquisite Gemstones, Timeless Elegance",
  description: "Discover the world's finest sapphires, rubies, emeralds, and diamonds. Ethically sourced, expertly cut, and certified for exceptional brilliance and lasting beauty.",

  // Call to Action
  cta: {
    primary: "Explore Collection",
    secondary: "Book Consultation",
  },

  // Navigation Links
  nav: [
    { label: "Home", href: "#" },
    { label: "Collection", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  // Features Section - Add 3-4 key features
  features: [
    {
      icon: "💎",
      title: "Certified Gemstones",
      description: "Every stone comes with GIA or IGI certification, guaranteeing authenticity and quality.",
    },
    {
      icon: "✨",
      title: "Expert Craftsmanship",
      description: "Master gem cutters with 30+ years of experience, maximizing brilliance and fire.",
    },
    {
      icon: "🌍",
      title: "Ethically Sourced",
      description: "Conflict-free gems from sustainable mines. Full traceability from origin to you.",
    },
    {
      icon: "👑",
      title: "Bespoke Services",
      description: "Custom jewelry design and setting. Transform your vision into a timeless masterpiece.",
    },
  ],

  // About Section
  about: {
    title: "The Art of Precious Stones",
    subtitle: "Three Generations of Excellence",
    description: "Royal Gems Collection represents three generations of passion for the world's most precious stones. From our humble beginnings in Colombo's gem markets to serving collectors worldwide, we've maintained an unwavering commitment to quality, authenticity, and exceptional service.",
    highlights: [
      "50+ Years of Expertise",
      "10,000+ Satisfied Clients",
      "Worldwide Shipping & Insurance",
    ],
  },

  // Testimonials
  testimonials: [
    {
      name: "Victoria M.",
      role: "Collector",
      text: "The 5-carat Ceylon sapphire I purchased exceeded all expectations. The color and clarity are absolutely stunning.",
      avatar: "👸",
    },
    {
      name: "James H.",
      role: "Jewelry Designer",
      text: "I source all my premium stones from Royal Gems. Their consistency in quality and ethical practices are unmatched.",
      avatar: "💍",
    },
    {
      name: "Priya S.",
      role: "Investment Buyer",
      text: "The team's expertise helped me build a remarkable colored gem portfolio. Professional and trustworthy.",
      avatar: "📈",
    },
  ],

  // Contact Information
  contact: {
    phone: "+94 11 234 5678",
    email: "info@royalgems.lk",
    address: "45 Gem Tower, Colombo 03, Sri Lanka",
    hours: "Mon-Sat: 10am - 7pm",
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Royal Gems Collection. All rights reserved.`,
    tagline: "Where Brilliance Meets Legacy.",
  },
};

// Color Themes - Quick reference for different topics
export const colorThemes = {
  coffee: {
    primary: "#d97706",
    accent: "#fef3c7",
    background: "#fffbeb",
  },
  gym: {
    primary: "#059669",
    accent: "#d1fae5",
    background: "#ecfdf5",
  },
  teaching: {
    primary: "#7c3aed",
    accent: "#ede9fe",
    background: "#f5f3ff",
  },
  restaurant: {
    primary: "#dc2626",
    accent: "#fee2e2",
    background: "#fef2f2",
  },
  tech: {
    primary: "#0ea5e9",
    accent: "#e0f2fe",
    background: "#f0f9ff",
  },
  spa: {
    primary: "#14b8a6",
    accent: "#ccfbf1",
    background: "#f0fdfa",
  },
};
