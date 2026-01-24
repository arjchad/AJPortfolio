# AJ Shoots - Photography Portfolio

A minimal, owner-only admin photography portfolio built with Next.js (App Router), TypeScript, and Supabase.

## Features

- **Public Gallery**: Visitors can view published photos
- **Admin Dashboard**: Upload, manage, publish/unpublish, and delete photos
- **Secure Auth**: Email/password login restricted to a single admin email
- **Supabase Backend**: Auth, Postgres database, and Storage (free tier friendly)
- **Vercel Ready**: Works in serverless environments

---

## Setup Instructions

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your project URL and anon key from **Settings → API**

### 2. Create Database Table

Go to **SQL Editor** in Supabase and run:

```sql
-- Create photos table
CREATE TABLE photos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  title TEXT,
  description TEXT,
  display_path TEXT NOT NULL,
  display_url TEXT NOT NULL,
  published BOOLEAN DEFAULT false NOT NULL,
  exif JSONB
);

-- Create index for faster queries on published photos
CREATE INDEX idx_photos_published ON photos(published) WHERE published = true;
```

### 3. Set Up Row Level Security (RLS)

Run this SQL to enable RLS and create policies:

```sql
-- Enable RLS
ALTER TABLE photos ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view published photos
CREATE POLICY "Public can view published photos"
  ON photos
  FOR SELECT
  USING (published = true);

-- Policy: Authenticated admin can view all photos
CREATE POLICY "Admin can view all photos"
  ON photos
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' = current_setting('app.allowed_admin_email', true));

-- Policy: Admin can insert photos
CREATE POLICY "Admin can insert photos"
  ON photos
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.jwt() ->> 'email' = current_setting('app.allowed_admin_email', true));

-- Policy: Admin can update photos
CREATE POLICY "Admin can update photos"
  ON photos
  FOR UPDATE
  TO authenticated
  USING (auth.jwt() ->> 'email' = current_setting('app.allowed_admin_email', true))
  WITH CHECK (auth.jwt() ->> 'email' = current_setting('app.allowed_admin_email', true));

-- Policy: Admin can delete photos
CREATE POLICY "Admin can delete photos"
  ON photos
  FOR DELETE
  TO authenticated
  USING (auth.jwt() ->> 'email' = current_setting('app.allowed_admin_email', true));
```

**Important**: Set the admin email in Supabase:

```sql
-- Set your admin email (replace with your actual email)
ALTER DATABASE postgres SET app.allowed_admin_email = 'your-email@example.com';
```

### 4. Create Storage Bucket

1. Go to **Storage** in Supabase
2. Click **New bucket**
3. Name: `portfolio`
4. Check **Public bucket**
5. Click **Create bucket**

### 5. Set Up Storage Policies

Go to **Storage → Policies** for the `portfolio` bucket and create these policies:

**Policy 1: Public Read (for display folder)**
```sql
-- Allow public to read files in display folder
CREATE POLICY "Public can view display photos"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'portfolio' AND (storage.foldername(name))[1] = 'display');
```

**Policy 2: Admin Upload**
```sql
-- Allow admin to upload
CREATE POLICY "Admin can upload photos"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'portfolio'
    AND auth.jwt() ->> 'email' = current_setting('app.allowed_admin_email', true)
  );
```

**Policy 3: Admin Delete**
```sql
-- Allow admin to delete
CREATE POLICY "Admin can delete photos"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'portfolio'
    AND auth.jwt() ->> 'email' = current_setting('app.allowed_admin_email', true)
  );
```

### 6. Create Admin User

1. Go to **Authentication → Users**
2. Click **Add user → Create new user**
3. Enter your admin email and a strong password
4. Click **Create user**

### 7. Configure Environment Variables

Create a `.env.local` file:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
ALLOWED_ADMIN_EMAIL=your-email@example.com
```

### 8. Install Dependencies & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the gallery.
Go to [http://localhost:3000/login](http://localhost:3000/login) to access the admin dashboard.

---

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Public gallery (server component)
│   ├── globals.css         # Global styles
│   ├── login/
│   │   └── page.tsx        # Login page (client component)
│   └── admin/
│       └── page.tsx        # Admin dashboard (client component)
├── lib/
│   └── supabase/
│       ├── client.ts       # Browser Supabase client
│       └── server.ts       # Server Supabase client
├── types/
│   └── database.ts         # TypeScript types
├── middleware.ts           # Route protection
└── ...config files
```

---

## Deployment to Vercel

1. Push your code to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `ALLOWED_ADMIN_EMAIL`
4. Deploy!

---

## Security Notes

- **RLS is enabled**: Database operations are restricted by policies
- **No service role key**: Only the anon key is used (safe for client)
- **Admin email allowlist**: Only the specified email can access admin features
- **Middleware protection**: `/admin` routes redirect unauthenticated users

---

## Scripts

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

---

## Archived Files

Previous rocket launch portfolio files are preserved in `src/archive/` for future reference.
