// Site Configuration - Luxury Real Estate Company
// This is the central place to configure all content

export const siteConfig = {
  // Brand Info
  name: "Prime Properties",
  tagline: "Your Dream Home Awaits",
  description: "Discover exclusive luxury properties, premium estates, and breathtaking homes. We connect you with the finest real estate opportunities in prime locations worldwide.",

  // Call to Action
  cta: {
    primary: "View Properties",
    secondary: "Schedule a Tour",
  },

  // Navigation Links
  nav: [
    { label: "Home", href: "#" },
    { label: "Properties", href: "#features" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  // Features Section - Add 3-4 key features
  features: [
    {
      icon: "🏠",
      title: "Luxury Estates",
      description: "Handpicked selection of premium properties in the most sought-after neighborhoods.",
    },
    {
      icon: "🌟",
      title: "Expert Agents",
      description: "Our dedicated team of professionals ensures a seamless buying or selling experience.",
    },
    {
      icon: "🔐",
      title: "Secure Transactions",
      description: "End-to-end legal support and transparent dealings for your peace of mind.",
    },
    {
      icon: "�",
      title: "Investment Advice",
      description: "Strategic insights to maximize your real estate investment returns.",
    },
  ],

  // About Section
  about: {
    title: "Elevating Your Real Estate Experience",
    subtitle: "Trusted by Thousands of Homeowners",
    description: "Prime Properties has been at the forefront of luxury real estate for over 15 years. From stunning oceanfront villas to prestigious urban penthouses, we specialize in connecting discerning clients with exceptional properties that define modern living.",
    highlights: [
      "15+ Years of Excellence",
      "5,000+ Happy Families",
      "Global Property Network",
    ],
  },

  // Testimonials
  testimonials: [
    {
      name: "Michael Anderson",
      role: "Property Investor",
      text: "Prime Properties helped me find the perfect investment property. Their market knowledge and professionalism were outstanding.",
      avatar: "🏆",
    },
    {
      name: "Sarah Chen",
      role: "Homeowner",
      text: "From search to closing, the team made buying our dream home effortless. Highly recommended!",
      avatar: "🏡",
    },
    {
      name: "David & Emma",
      role: "First-Time Buyers",
      text: "We were nervous about buying our first home, but Prime Properties guided us through every step with patience and expertise.",
      avatar: "�",
    },
  ],

  // Contact Information
  contact: {
    phone: "+94 11 234 5678",
    email: "hello@primeproperties.lk",
    address: "Luxury Tower, Colombo 03, Sri Lanka",
    hours: "Mon-Sat: 9am - 6pm",
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
    copyright: `© ${new Date().getFullYear()} Prime Properties. All rights reserved.`,
    tagline: "Where Luxury Meets Home.",
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
  realEstate: {
    primary: "#ca8a04",
    accent: "#fef3c7",
    background: "#1c1917",
  },
};
