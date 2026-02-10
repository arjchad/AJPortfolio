export type PhotoSize = 'small' | 'medium' | 'large';
export type PhotoOrientation = 'horizontal' | 'vertical';

export interface Photo {
  id: string;
  created_at: string;
  title: string | null;
  description: string | null;
  display_path: string;
  display_url: string;
  published: boolean;
  exif: Record<string, unknown> | null;
  display_size: PhotoSize;
  orientation: PhotoOrientation;
  sort_order: number;
}

export interface PhotoInsert {
  title?: string | null;
  description?: string | null;
  display_path: string;
  display_url: string;
  published?: boolean;
  display_size?: PhotoSize;
  orientation?: PhotoOrientation;
  sort_order?: number;
}

export interface PhotoUpdate {
  title?: string | null;
  description?: string | null;
  published?: boolean;
  display_size?: PhotoSize;
  orientation?: PhotoOrientation;
  sort_order?: number;
}
