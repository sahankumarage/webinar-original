// Site Configuration - Update these values based on your topic!
// This is the central place to configure all content

export const siteConfig = {
  // Brand Info
  name: "IronForge Fitness",
  tagline: "Forge Your Ultimate Physique",
  description: "Unleash your potential with state-of-the-art equipment, elite personal trainers, and a community dedicated to strength and result.",

  // Call to Action
  cta: {
    primary: "Join Now",
    secondary: "Free Trial",
  },

  // Navigation Links
  nav: [
    { label: "Home", href: "#" },
    { label: "Programs", href: "#programs" },
    { label: "Trainers", href: "#trainers" },
    { label: "Membership", href: "#membership" },
  ],

  // Features Section - Add 3-4 key features
  features: [
    {
      icon: "💪",
      title: "Elite Equipment",
      description: "Train with the best. Our floor is stocked with top-tier Hammer Strength and Rogue equipment.",
    },
    {
      icon: "⏱️",
      title: "24/7 Access",
      description: "Fitness on your schedule. We never close, so you can train whenever inspiration strikes.",
    },
    {
      icon: "🧘",
      title: "Recovery Zone",
      description: "Maximize gains with our sauna, steam room, and cryotherapy recovery center.",
    },
    {
      icon: "👥",
      title: "Group Classes",
      description: "High-intensity interval training, powerlifting workshops, and yoga flows daily.",
    },
  ],

  // About Section
  about: {
    title: "About IronForge",
    subtitle: "Built for Strength",
    description: "IronForge Fitness wasn't created to be just another gym. It was built to be a sanctuary for those who refuse to settle for average. Founded by elite athletes, we provide the environment, tools, and expertise you need to shatter your limits.",
    highlights: [
      "Certified Elite Trainers",
      "State-of-the-Art Facility",
      "Results-Driven Culture",
    ],
  },

  // Testimonials
  testimonials: [
    {
      name: "Marcus T.",
      role: "Bodybuilder",
      text: "The atmosphere here is unmatched. Everyone is focused, the equipment is perfect, and the vibe pushes you to lift heavier.",
      avatar: "🏋️‍♂️",
    },
    {
      name: "Sarah J.",
      role: "CrossFit Athlete",
      text: "I love the 24/7 access. No matter my work schedule, IronForge is always open for me to get my grind on.",
      avatar: "🏃‍♀️",
    },
    {
      name: "David K.",
      role: "Member since 2023",
      text: "The trainers actually care about your progress. I've seen more results in 3 months here than 3 years at my old gym.",
      avatar: "💪",
    },
  ],

  // Contact Information
  contact: {
    phone: "+1 (555) 019-2834",
    email: "join@ironforge.fit",
    address: "888 Titan Way, Metro City",
    hours: "Open 24/7",
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
    copyright: `© ${new Date().getFullYear()} IronForge Fitness. All rights reserved.`,
    tagline: "Forged in Iron. Built for Life.",
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
