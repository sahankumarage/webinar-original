// Site Configuration - Update these values based on your topic!
// This is the central place to configure all content

export const siteConfig = {
  // Brand Info
  name: "Glaze & Sprinkle",
  tagline: "Sweet Happiness in Every Bite",
  description: "Freshly baked, hand-crafted donuts made with love and premium ingredients. From classic glazed to gourmet pink creations.",

  // Call to Action
  cta: {
    primary: "Order Now",
    secondary: "Our Menu",
  },

  // Navigation Links
  nav: [
    { label: "Home", href: "#" },
    { label: "Menu", href: "#menu" },
    { label: "Locations", href: "#locations" },
    { label: "Catering", href: "#catering" },
  ],

  // Features Section - Add 3-4 key features
  features: [
    {
      icon: "🍩",
      title: "Freshly Baked",
      description: "Baked fresh every single morning. We never sell day-old donuts.",
    },
    {
      icon: "🍓",
      title: "Premium Ingredients",
      description: "Real fruit, Belgian chocolate, and organic flour. Taste the difference.",
    },
    {
      icon: "🎁",
      title: "Custom Boxes",
      description: "Create your own box of happiness. Perfect for gifts and parties.",
    },
    {
      icon: "🚚",
      title: "Event Catering",
      description: "Make your wedding or corporate event sweet with our donut walls and towers.",
    },
  ],

  // About Section
  about: {
    title: "Our Sweet Story",
    subtitle: "Baked with Love",
    description: "Glaze & Sprinkle started with a simple mission: to make the world a sweeter place, one donut at a time. What began as a small family kitchen experiment has grown into the city's favorite spot for pink treats.",
    highlights: [
      "Family Owned & Operated",
      "100+ Unique Flavors",
      "Community Focused",
    ],
  },

  // Testimonials
  testimonials: [
    {
      name: "Emma W.",
      role: "Donut Lover",
      text: "The pink velvet donut is hands down the best thing I've ever eaten. I come here every weekend!",
      avatar: "👩",
    },
    {
      name: "Mike R.",
      role: "Food Blogger",
      text: "Not just pretty to look at - these donuts are light, fluffy, and perfectly sweet. A must-visit.",
      avatar: "📸",
    },
    {
      name: "Sophie L.",
      role: "Event Planner",
      text: "Ordered 500 donuts for a wedding and they were a hit! The presentation was absolutely stunning.",
      avatar: "🎉",
    },
  ],

  // Contact Information
  contact: {
    phone: "+1 (555) 366-8899",
    email: "hello@glazesprinkle.com",
    address: "123 Sweet Street, Candy City",
    hours: "Mon-Sun: 6am - 8pm",
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
    copyright: `© ${new Date().getFullYear()} Glaze & Sprinkle. All rights reserved.`,
    tagline: "Life is short, eat the donut.",
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
