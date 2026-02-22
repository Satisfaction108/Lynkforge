/**
 * Core type definitions for LinkForge
 */

/**
 * User types
 */
export type UserPlan = "free" | "pro";

export interface User {
  id: string;
  email: string;
  username: string;
  avatarUrl?: string;
  plan: UserPlan;
  createdAt: string;
  updatedAt: string;
}

/**
 * Page types
 */
export interface Page {
  id: string;
  userId: string;
  slug: string;
  title: string;
  bio?: string;
  avatarUrl?: string;
  themeId: string;
  customStyles?: CustomStyles;
  seoTitle?: string;
  seoDescription?: string;
  ogImageUrl?: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CustomStyles {
  backgroundColor?: string;
  backgroundGradient?: string;
  backgroundImage?: string;
  textColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonStyle?: "rounded" | "square" | "pill";
  buttonFill?: "solid" | "outline" | "ghost";
  fontFamily?: string;
  fontSize?: string;
}

/**
 * Link types
 */
export interface Link {
  id: string;
  pageId: string;
  title: string;
  url: string;
  iconUrl?: string;
  thumbnailUrl?: string;
  position: number;
  isActive: boolean;
  scheduledStart?: string;
  scheduledEnd?: string;
  clickCount: number;
  createdAt: string;
  updatedAt: string;
}

/**
 * Block types (for content blocks beyond links)
 */
export type BlockType =
  | "link"
  | "header"
  | "text"
  | "divider"
  | "spacer"
  | "image"
  | "social"
  | "youtube"
  | "spotify"
  | "tiktok"
  | "email-form"
  | "contact-form";

export interface Block {
  id: string;
  pageId: string;
  type: BlockType;
  position: number;
  data: Record<string, unknown>;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * Analytics types
 */
export interface PageView {
  id: string;
  pageId: string;
  visitorId: string;
  referrer?: string;
  country?: string;
  device: "mobile" | "desktop" | "tablet";
  browser?: string;
  timestamp: string;
}

export interface LinkClick {
  id: string;
  linkId: string;
  visitorId: string;
  referrer?: string;
  timestamp: string;
}

export interface AnalyticsSummary {
  totalViews: number;
  totalClicks: number;
  clickThroughRate: number;
  topLinks: { linkId: string; title: string; clicks: number }[];
  viewsByDay: { date: string; views: number }[];
  clicksByDay: { date: string; clicks: number }[];
  topReferrers: { referrer: string; count: number }[];
  deviceBreakdown: { device: string; percentage: number }[];
  countryBreakdown: { country: string; count: number }[];
}

/**
 * Theme types
 */
export interface Theme {
  id: string;
  name: string;
  backgroundColor: string;
  backgroundGradient?: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
  buttonStyle: "rounded" | "square" | "pill";
  fontFamily: string;
  preview?: string;
}

/**
 * API Response types
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Form types
 */
export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  email: string;
  password: string;
  username: string;
}

export interface PageFormData {
  title: string;
  slug: string;
  bio?: string;
}

export interface LinkFormData {
  title: string;
  url: string;
  iconUrl?: string;
}

