/**
 * Database types for Lynkforge
 * Matches the actual Supabase schema
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string | null;
          display_name: string | null;
          bio: string | null;
          avatar_url: string | null;
          is_pro: boolean;
          pro_expires_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username?: string | null;
          display_name?: string | null;
          bio?: string | null;
          avatar_url?: string | null;
          is_pro?: boolean;
          pro_expires_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string | null;
          display_name?: string | null;
          bio?: string | null;
          avatar_url?: string | null;
          is_pro?: boolean;
          pro_expires_at?: string | null;
          updated_at?: string;
        };
      };
      pages: {
        Row: {
          id: string;
          user_id: string;
          slug: string;
          title: string;
          bio: string | null;
          avatar_url: string | null;
          theme_id: string;
          custom_styles: Json | null;
          seo_title: string | null;
          seo_description: string | null;
          og_image_url: string | null;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          slug: string;
          title: string;
          bio?: string | null;
          avatar_url?: string | null;
          theme_id?: string;
          custom_styles?: Json | null;
          seo_title?: string | null;
          seo_description?: string | null;
          og_image_url?: string | null;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          slug?: string;
          title?: string;
          bio?: string | null;
          avatar_url?: string | null;
          theme_id?: string;
          custom_styles?: Json | null;
          seo_title?: string | null;
          seo_description?: string | null;
          og_image_url?: string | null;
          is_published?: boolean;
          updated_at?: string;
        };
      };
      links: {
        Row: {
          id: string;
          page_id: string;
          title: string;
          url: string;
          icon_url: string | null;
          thumbnail_url: string | null;
          position: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          page_id: string;
          title?: string;
          url: string;
          icon_url?: string | null;
          thumbnail_url?: string | null;
          position?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          page_id?: string;
          title?: string;
          url?: string;
          icon_url?: string | null;
          thumbnail_url?: string | null;
          position?: number;
          is_active?: boolean;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

// Helper types for easier usage
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type ProfileInsert = Database["public"]["Tables"]["profiles"]["Insert"];
export type ProfileUpdate = Database["public"]["Tables"]["profiles"]["Update"];

export type Page = Database["public"]["Tables"]["pages"]["Row"];
export type PageInsert = Database["public"]["Tables"]["pages"]["Insert"];
export type PageUpdate = Database["public"]["Tables"]["pages"]["Update"];

export type Link = Database["public"]["Tables"]["links"]["Row"];
export type LinkInsert = Database["public"]["Tables"]["links"]["Insert"];
export type LinkUpdate = Database["public"]["Tables"]["links"]["Update"];

// Page with links (common query pattern)
export type PageWithLinks = Page & {
  links: Link[];
};

