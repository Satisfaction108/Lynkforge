/**
 * Application constants
 */

export const APP_NAME = "LinkForge";
export const APP_DESCRIPTION =
  "Your links. Your brand. 100% free. The link-in-bio tool that gives you everything for free.";
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

/**
 * Route constants
 */
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  DASHBOARD: "/dashboard",
  SETTINGS: "/dashboard/settings",
  NEW_PAGE: "/dashboard/pages/new",
  PRICING: "/pricing",
} as const;

/**
 * API routes
 */
export const API_ROUTES = {
  AUTH: {
    LOGIN: "/api/auth/login",
    SIGNUP: "/api/auth/signup",
    LOGOUT: "/api/auth/logout",
    CALLBACK: "/api/auth/callback",
  },
  PAGES: "/api/pages",
  LINKS: "/api/links",
  ANALYTICS: "/api/analytics",
} as const;

/**
 * Theme configuration
 */
export const THEME = {
  colors: {
    primary: "#6366F1",
    secondary: "#EC4899",
    accent: "#10B981",
    dark: "#0F172A",
    light: "#F8FAFC",
  },
  fonts: {
    sans: "Inter, system-ui, sans-serif",
    mono: "JetBrains Mono, monospace",
  },
} as const;

/**
 * Limits
 */
export const LIMITS = {
  FREE: {
    PAGES: 1,
    LINKS_PER_PAGE: 100,
    IMAGE_SIZE_MB: 2,
  },
  PRO: {
    PAGES: 10,
    LINKS_PER_PAGE: 500,
    IMAGE_SIZE_MB: 10,
  },
} as const;

/**
 * Social media platforms for icons
 */
export const SOCIAL_PLATFORMS = [
  { id: "twitter", name: "Twitter / X", icon: "twitter" },
  { id: "instagram", name: "Instagram", icon: "instagram" },
  { id: "tiktok", name: "TikTok", icon: "tiktok" },
  { id: "youtube", name: "YouTube", icon: "youtube" },
  { id: "linkedin", name: "LinkedIn", icon: "linkedin" },
  { id: "github", name: "GitHub", icon: "github" },
  { id: "discord", name: "Discord", icon: "discord" },
  { id: "twitch", name: "Twitch", icon: "twitch" },
  { id: "spotify", name: "Spotify", icon: "spotify" },
  { id: "snapchat", name: "Snapchat", icon: "snapchat" },
  { id: "pinterest", name: "Pinterest", icon: "pinterest" },
  { id: "facebook", name: "Facebook", icon: "facebook" },
  { id: "email", name: "Email", icon: "mail" },
  { id: "website", name: "Website", icon: "globe" },
] as const;

