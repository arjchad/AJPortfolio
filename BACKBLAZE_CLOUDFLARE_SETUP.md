# Backblaze B2 + Cloudflare CDN Setup Guide

This guide walks you through setting up Backblaze B2 for image storage with Cloudflare's free CDN in front of it. This combination gives you:

- **Ultra-cheap storage**: ~$0.60/month per 100GB
- **Free egress**: Cloudflare and Backblaze have a Bandwidth Alliance partnership
- **Global CDN**: Images cached at Cloudflare's edge locations
- **Free SSL**: HTTPS included via Cloudflare

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Part 1: Backblaze B2 Setup](#part-1-backblaze-b2-setup)
3. [Part 2: Cloudflare Setup](#part-2-cloudflare-setup)
4. [Part 3: Connect Cloudflare to Backblaze](#part-3-connect-cloudflare-to-backblaze)
5. [Part 4: Configure Caching Rules](#part-4-configure-caching-rules)
6. [Part 5: Next.js Integration](#part-5-nextjs-integration)
7. [Part 6: Uploading Images](#part-6-uploading-images)
8. [Part 7: Migrating from Supabase](#part-7-migrating-from-supabase)
9. [Troubleshooting](#troubleshooting)
10. [Cost Breakdown](#cost-breakdown)

---

## Prerequisites

- A domain name you own (e.g., `yourdomain.com`)
- Access to your domain's DNS settings
- Node.js installed locally

---

## Part 1: Backblaze B2 Setup

### Step 1.1: Create a Backblaze Account

1. Go to [backblaze.com](https://www.backblaze.com)
2. Click **"Sign Up"** → Select **"B2 Cloud Storage"**
3. Enter your email and create a password
4. Verify your email address

### Step 1.2: Create a B2 Bucket

1. Log into your Backblaze account
2. Go to **"B2 Cloud Storage"** in the left sidebar
3. Click **"Buckets"**
4. Click **"Create a Bucket"**
5. Configure the bucket:
   - **Bucket Name**: `your-portfolio-images` (must be globally unique, use something like `ajportfolio-images-2024`)
   - **Files in Bucket are**: Select **"Public"**
   - **Default Encryption**: None (Cloudflare will handle SSL)
   - **Object Lock**: Disabled
6. Click **"Create a Bucket"**

### Step 1.3: Note Your Bucket Details

After creating the bucket, note these values (you'll need them later):

- **Bucket Name**: The name you chose
- **Endpoint**: Shown in bucket details, looks like `s3.us-west-004.backblazeb2.com`
- **Bucket ID**: Shown in bucket details

### Step 1.4: Create Application Keys

1. Go to **"Application Keys"** in the left sidebar
2. Click **"Add a New Application Key"**
3. Configure:
   - **Name of Key**: `portfolio-upload-key`
   - **Allow access to Bucket(s)**: Select your bucket
   - **Type of Access**: **"Read and Write"**
   - **Allow List All Bucket Names**: Optional (check if needed)
   - **File name prefix**: Leave empty
   - **Duration**: Leave default
4. Click **"Create New Key"**

**IMPORTANT**: Copy and save these values immediately (they're only shown once):
- **keyID**: `xxxxxxxxxxxx`
- **applicationKey**: `xxxxxxxxxxxxxxxxxxxxxxxxxxxx`

Store these securely - you'll need them for uploading.

---

## Part 2: Cloudflare Setup

### Step 2.1: Create a Cloudflare Account

1. Go to [cloudflare.com](https://www.cloudflare.com)
2. Click **"Sign Up"**
3. Enter email and password
4. Select the **Free** plan

### Step 2.2: Add Your Domain to Cloudflare

1. In Cloudflare dashboard, click **"Add a Site"**
2. Enter your domain (e.g., `yourdomain.com`)
3. Select the **Free** plan
4. Cloudflare will scan your existing DNS records
5. Review and confirm the DNS records

### Step 2.3: Update Your Domain's Nameservers

1. Cloudflare will provide you with two nameservers, like:
   - `ada.ns.cloudflare.com`
   - `bob.ns.cloudflare.com`
2. Go to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
3. Find DNS/Nameserver settings
4. Replace the existing nameservers with Cloudflare's nameservers
5. Save changes

**Note**: DNS propagation can take up to 24-48 hours, but usually completes within a few hours.

### Step 2.4: Verify Domain is Active

1. Return to Cloudflare dashboard
2. Click **"Check nameservers"**
3. Wait until status shows **"Active"**

---

## Part 3: Connect Cloudflare to Backblaze

This is the key step that enables free egress through the Bandwidth Alliance.

### Step 3.1: Create a Subdomain for Images

We'll use a subdomain like `images.yourdomain.com` to serve files from Backblaze.

1. In Cloudflare, go to your domain's dashboard
2. Click **"DNS"** in the left sidebar
3. Click **"Add record"**
4. Configure:
   - **Type**: `CNAME`
   - **Name**: `images` (this creates `images.yourdomain.com`)
   - **Target**: Your Backblaze bucket endpoint, e.g., `f004.backblazeb2.com`
     - Get this from your Backblaze bucket details
     - Use the "Friendly URL" domain part, like `f004.backblazeb2.com`
   - **Proxy status**: **Proxied** (orange cloud ON) - THIS IS CRITICAL
   - **TTL**: Auto
5. Click **"Save"**

### Step 3.2: Configure SSL/TLS

1. In Cloudflare, go to **"SSL/TLS"** → **"Overview"**
2. Set encryption mode to **"Full"**

### Step 3.3: Create a Transform Rule (URL Rewriting)

Backblaze URLs include `/file/bucket-name/` in the path. We need to add this automatically.

1. Go to **"Rules"** → **"Transform Rules"**
2. Click **"Create rule"**
3. Select **"Rewrite URL"**
4. Configure:
   - **Rule name**: `Backblaze B2 URL Rewrite`
   - **When incoming requests match**:
     - Field: `Hostname`
     - Operator: `equals`
     - Value: `images.yourdomain.com`
   - **Then**:
     - **Path**: Select **"Rewrite to"** → **"Dynamic"**
     - Expression: `concat("/file/YOUR-BUCKET-NAME", http.request.uri.path)`
     - Replace `YOUR-BUCKET-NAME` with your actual bucket name
5. Click **"Deploy"**

**Example**: A request to `images.yourdomain.com/photo.jpg` will be rewritten to `images.yourdomain.com/file/your-bucket-name/photo.jpg` and proxied to Backblaze.

---

## Part 4: Configure Caching Rules

Optimize caching for images to reduce requests to Backblaze.

### Step 4.1: Create a Cache Rule

1. Go to **"Caching"** → **"Cache Rules"**
2. Click **"Create rule"**
3. Configure:
   - **Rule name**: `Cache Images`
   - **When incoming requests match**:
     - Field: `Hostname`
     - Operator: `equals`
     - Value: `images.yourdomain.com`
   - **Then**:
     - **Cache eligibility**: Eligible for cache
     - **Edge TTL**: Override origin, set to `1 month` (or your preference)
     - **Browser TTL**: Override origin, set to `1 week`
4. Click **"Deploy"**

### Step 4.2: Enable Additional Performance Settings

1. Go to **"Speed"** → **"Optimization"**
2. Enable **"Auto Minify"** for JavaScript, CSS, HTML
3. Go to **"Caching"** → **"Configuration"**
4. Set **"Browser Cache TTL"** to **"Respect Existing Headers"** or a long duration

---

## Part 5: Next.js Integration

### Step 5.1: Install AWS SDK

Backblaze B2 is S3-compatible, so we use the AWS SDK:

```bash
npm install @aws-sdk/client-s3
```

### Step 5.2: Create Environment Variables

Create or update `.env.local`:

```env
# Backblaze B2 Credentials
B2_KEY_ID=your_key_id_here
B2_APPLICATION_KEY=your_application_key_here
B2_BUCKET_NAME=your-bucket-name
B2_ENDPOINT=https://s3.us-west-004.backblazeb2.com
B2_REGION=us-west-004

# Your Cloudflare-proxied domain for public URLs
NEXT_PUBLIC_IMAGE_CDN_URL=https://images.yourdomain.com
```

**Note**: Get the endpoint and region from your Backblaze bucket details.

### Step 5.3: Create B2 Client Utility

Create `src/lib/b2Client.js`:

```javascript
import { S3Client, PutObjectCommand, DeleteObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';

// Initialize S3-compatible client for Backblaze B2
const b2Client = new S3Client({
  endpoint: process.env.B2_ENDPOINT,
  region: process.env.B2_REGION,
  credentials: {
    accessKeyId: process.env.B2_KEY_ID,
    secretAccessKey: process.env.B2_APPLICATION_KEY,
  },
});

const BUCKET_NAME = process.env.B2_BUCKET_NAME;
const CDN_URL = process.env.NEXT_PUBLIC_IMAGE_CDN_URL;

/**
 * Upload a file to Backblaze B2
 * @param {Buffer} fileBuffer - The file data
 * @param {string} fileName - The name/path for the file
 * @param {string} contentType - MIME type (e.g., 'image/jpeg')
 * @returns {Promise<{url: string, key: string}>}
 */
export async function uploadFile(fileBuffer, fileName, contentType) {
  const key = `${Date.now()}-${fileName}`;

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: fileBuffer,
    ContentType: contentType,
  });

  await b2Client.send(command);

  return {
    key,
    url: `${CDN_URL}/${key}`,
  };
}

/**
 * Delete a file from Backblaze B2
 * @param {string} key - The file key/path
 */
export async function deleteFile(key) {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });

  await b2Client.send(command);
}

/**
 * List all files in the bucket
 * @param {string} prefix - Optional prefix to filter files
 * @returns {Promise<Array>}
 */
export async function listFiles(prefix = '') {
  const command = new ListObjectsV2Command({
    Bucket: BUCKET_NAME,
    Prefix: prefix,
  });

  const response = await b2Client.send(command);
  return response.Contents || [];
}

/**
 * Get the CDN URL for a file
 * @param {string} key - The file key/path
 * @returns {string}
 */
export function getCdnUrl(key) {
  return `${CDN_URL}/${key}`;
}

export default b2Client;
```

### Step 5.4: Create Upload API Route

Create `src/pages/api/upload.js`:

```javascript
import { uploadFile } from '@/lib/b2Client';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb', // Adjust based on your needs
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { file, fileName, contentType } = req.body;

    // Convert base64 to buffer
    const fileBuffer = Buffer.from(file, 'base64');

    const result = await uploadFile(fileBuffer, fileName, contentType);

    res.status(200).json(result);
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
}
```

### Step 5.5: Create Upload Component

Create `src/components/ImageUploader.js`:

```javascript
import { useState } from 'react';

export default function ImageUploader({ onUploadComplete }) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setProgress(0);

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result.split(',')[1];

        const response = await fetch('/api/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            file: base64,
            fileName: file.name,
            contentType: file.type,
          }),
        });

        if (!response.ok) throw new Error('Upload failed');

        const result = await response.json();
        onUploadComplete?.(result);
        setProgress(100);
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploading}
      />
      {uploading && <p>Uploading... {progress}%</p>}
    </div>
  );
}
```

### Step 5.6: Using Images in Your App

Once uploaded, use the CDN URL in your components:

```javascript
// The URL will be like: https://images.yourdomain.com/1234567890-photo.jpg
<img src={imageUrl} alt="Portfolio image" />

// Or with Next.js Image component (requires configuration)
import Image from 'next/image';

<Image
  src={imageUrl}
  alt="Portfolio image"
  width={800}
  height={600}
/>
```

### Step 5.7: Configure Next.js for External Images

Update `next.config.js` to allow images from your CDN:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.yourdomain.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
```

---

## Part 6: Uploading Images

### Option A: Upload via Your App

Use the upload component/API created in Part 5.

### Option B: Upload via Backblaze Web Interface

1. Log into Backblaze
2. Go to **B2 Cloud Storage** → **Buckets**
3. Click on your bucket
4. Click **"Upload"**
5. Select files to upload

### Option C: Upload via CLI (rclone)

Install and configure rclone for bulk uploads:

```bash
# Install rclone
brew install rclone  # macOS
# or download from rclone.org

# Configure rclone
rclone config

# Follow prompts:
# n) New remote
# name> backblaze
# Storage> b2
# account> YOUR_KEY_ID
# key> YOUR_APPLICATION_KEY
# endpoint> (leave blank for default)

# Upload a folder
rclone copy /path/to/images backblaze:your-bucket-name/

# Sync (mirror) a folder
rclone sync /path/to/images backblaze:your-bucket-name/
```

---

## Part 7: Migrating from Supabase

### Step 7.1: Export Images from Supabase

Create a migration script `scripts/migrate-from-supabase.js`:

```javascript
import { createClient } from '@supabase/supabase-js';
import { uploadFile } from '../src/lib/b2Client.js';
import fetch from 'node-fetch';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const SUPABASE_BUCKET = 'your-supabase-bucket';

async function migrateImages() {
  // List all files in Supabase bucket
  const { data: files, error } = await supabase.storage
    .from(SUPABASE_BUCKET)
    .list();

  if (error) {
    console.error('Error listing files:', error);
    return;
  }

  console.log(`Found ${files.length} files to migrate`);

  for (const file of files) {
    try {
      // Get public URL from Supabase
      const { data: { publicUrl } } = supabase.storage
        .from(SUPABASE_BUCKET)
        .getPublicUrl(file.name);

      // Download the file
      const response = await fetch(publicUrl);
      const buffer = Buffer.from(await response.arrayBuffer());

      // Upload to Backblaze
      const result = await uploadFile(
        buffer,
        file.name,
        file.metadata?.mimetype || 'image/jpeg'
      );

      console.log(`Migrated: ${file.name} -> ${result.url}`);
    } catch (err) {
      console.error(`Failed to migrate ${file.name}:`, err);
    }
  }

  console.log('Migration complete!');
}

migrateImages();
```

Run with:
```bash
node scripts/migrate-from-supabase.js
```

### Step 7.2: Update Database References

If you store image URLs in a database, update them to use the new CDN URL:

```sql
-- Example: Update image URLs in your database
UPDATE photos
SET url = REPLACE(url, 'your-supabase-url.supabase.co/storage/v1/object/public/bucket', 'images.yourdomain.com');
```

---

## Troubleshooting

### Images Not Loading

1. **Check DNS propagation**: Use [dnschecker.org](https://dnschecker.org) to verify your CNAME is propagated
2. **Verify proxy is enabled**: The orange cloud must be ON in Cloudflare DNS
3. **Check transform rule**: Ensure the URL rewrite rule is deployed and correct
4. **Test direct Backblaze URL**: Try accessing the image directly from Backblaze to isolate the issue

### 403 Forbidden Errors

1. **Bucket visibility**: Ensure bucket is set to "Public"
2. **File permissions**: Individual files should be public
3. **Transform rule syntax**: Double-check the bucket name in the rewrite expression

### SSL/Certificate Errors

1. **SSL mode**: Ensure Cloudflare SSL is set to "Full" (not "Full Strict")
2. **Wait for certificate**: New subdomains may take a few minutes to get SSL certificates

### Slow Loading

1. **Check caching**: Verify cache rules are active
2. **Check Cloudflare analytics**: Go to Analytics to see cache hit ratio
3. **Optimize images**: Consider compressing images before upload

### CORS Errors

Add CORS rules in Backblaze:

1. Go to your bucket settings
2. Click "Bucket Settings"
3. Add CORS rules:
```json
[
  {
    "corsRuleName": "allowAll",
    "allowedOrigins": ["*"],
    "allowedOperations": ["s3_get", "s3_head"],
    "allowedHeaders": ["*"],
    "exposeHeaders": ["ETag"],
    "maxAgeSeconds": 3600
  }
]
```

---

## Cost Breakdown

### Backblaze B2 Pricing (as of 2024)

| Item | Cost |
|------|------|
| Storage | $0.006 per GB/month |
| Download (Class B transactions) | $0.01 per 10,000 |
| Uploads (Class C transactions) | Free |
| Egress (via Cloudflare) | **FREE** (Bandwidth Alliance) |

### Example: 100GB Storage

- Storage: 100 GB × $0.006 = **$0.60/month**
- Downloads: Covered by Cloudflare (free egress)
- **Total: ~$0.60/month**

### Cloudflare Free Plan Includes

- Unlimited bandwidth
- Global CDN
- SSL certificates
- DDoS protection
- Basic analytics

---

## Quick Reference

### Your Configuration Values

Fill these in as you complete the setup:

```
Backblaze Bucket Name: _____________________
Backblaze Endpoint: _____________________
Backblaze Key ID: _____________________
Cloudflare Subdomain: images._____________________.com
```

### Useful URLs

- Backblaze Dashboard: https://secure.backblaze.com/b2_buckets.htm
- Cloudflare Dashboard: https://dash.cloudflare.com
- Test your CDN: `curl -I https://images.yourdomain.com/test-image.jpg`

### Common Commands

```bash
# Test DNS resolution
dig images.yourdomain.com

# Test CDN URL
curl -I https://images.yourdomain.com/filename.jpg

# Upload via rclone
rclone copy ./images backblaze:bucket-name/

# Check Cloudflare cache status (look for cf-cache-status header)
curl -I https://images.yourdomain.com/filename.jpg | grep cf-cache
```

---

## Next Steps

1. Complete Parts 1-4 to set up the infrastructure
2. Test by uploading a single image via Backblaze web interface
3. Verify you can access it via `https://images.yourdomain.com/filename.jpg`
4. Implement the Next.js integration (Part 5)
5. Migrate existing images from Supabase (Part 7)
6. Update your app to use the new CDN URLs

---

*Last updated: February 2025*
