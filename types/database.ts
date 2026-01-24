export interface Photo {
  id: string;
  created_at: string;
  title: string | null;
  description: string | null;
  display_path: string;
  display_url: string;
  published: boolean;
  exif: Record<string, unknown> | null;
}

export interface PhotoInsert {
  title?: string | null;
  description?: string | null;
  display_path: string;
  display_url: string;
  published?: boolean;
}

export interface PhotoUpdate {
  title?: string | null;
  description?: string | null;
  published?: boolean;
}
