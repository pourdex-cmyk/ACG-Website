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
      contact_submissions: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          company: string;
          industry: string | null;
          company_size: string | null;
          primary_challenge: string | null;
          phone: string | null;
          message: string | null;
          status: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          company: string;
          industry?: string | null;
          company_size?: string | null;
          primary_challenge?: string | null;
          phone?: string | null;
          message?: string | null;
          status?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          email?: string;
          company?: string;
          industry?: string | null;
          company_size?: string | null;
          primary_challenge?: string | null;
          phone?: string | null;
          message?: string | null;
          status?: string;
        };
      };
      consultation_requests: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          email: string;
          company: string;
          industry: string | null;
          company_size: string | null;
          primary_challenge: string | null;
          phone: string | null;
          goals: string | null;
          preferred_time: string | null;
          status: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          name: string;
          email: string;
          company: string;
          industry?: string | null;
          company_size?: string | null;
          primary_challenge?: string | null;
          phone?: string | null;
          goals?: string | null;
          preferred_time?: string | null;
          status?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          name?: string;
          email?: string;
          company?: string;
          industry?: string | null;
          company_size?: string | null;
          primary_challenge?: string | null;
          phone?: string | null;
          goals?: string | null;
          preferred_time?: string | null;
          status?: string;
        };
      };
      articles: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          category: string;
          read_time: string;
          published: boolean;
          published_at: string | null;
          author: string;
          tags: string[];
          featured_image: string | null;
        };
        Insert: Omit<Database["public"]["Tables"]["articles"]["Row"], "id" | "created_at" | "updated_at"> & {
          id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["articles"]["Insert"]>;
      };
      case_studies: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          slug: string;
          title: string;
          industry: string;
          challenge: string;
          solution: string;
          results: Json;
          tag: string;
          published: boolean;
          featured_image: string | null;
        };
        Insert: Omit<Database["public"]["Tables"]["case_studies"]["Row"], "id" | "created_at" | "updated_at"> & {
          id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["case_studies"]["Insert"]>;
      };
      testimonials: {
        Row: {
          id: string;
          created_at: string;
          name: string;
          title: string;
          company: string;
          quote: string;
          industry: string;
          published: boolean;
        };
        Insert: Omit<Database["public"]["Tables"]["testimonials"]["Row"], "id" | "created_at"> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["testimonials"]["Insert"]>;
      };
      site_settings: {
        Row: {
          id: string;
          key: string;
          value: Json;
          updated_at: string;
        };
        Insert: {
          id?: string;
          key: string;
          value: Json;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["site_settings"]["Insert"]>;
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}
