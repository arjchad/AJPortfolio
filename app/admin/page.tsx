"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { Photo } from "@/types/database";

const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;
const QUALITY = 1.0;

async function compressImage(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;

      // Calculate new dimensions maintaining aspect ratio
      if (width > MAX_WIDTH || height > MAX_HEIGHT) {
        const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Failed to get canvas context"));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Failed to compress image"));
          }
        },
        "image/jpeg",
        QUALITY
      );
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = URL.createObjectURL(file);
  });
}

export default function AdminPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Form state
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(false);

  const router = useRouter();
  const supabase = createClient();

  const fetchPhotos = useCallback(async () => {
    const { data, error } = await supabase
      .from("photos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError("Failed to fetch photos");
      console.error(error);
    } else {
      setPhotos(data || []);
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) {
      setError("Please select a file");
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(null);

    try {
      // Compress image before upload
      const compressedBlob = await compressImage(file);

      // Generate unique filename (always jpg after compression)
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 11)}.jpg`;
      const filePath = `display/${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("portfolio")
        .upload(filePath, compressedBlob, {
          contentType: "image/jpeg",
          upsert: false,
        });

      if (uploadError) {
        throw new Error(`Upload failed: ${uploadError.message}`);
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("portfolio")
        .getPublicUrl(filePath);

      // Insert into database
      const { error: dbError } = await supabase.from("photos").insert({
        title: title || null,
        description: description || null,
        display_path: filePath,
        display_url: urlData.publicUrl,
        published,
      });

      if (dbError) {
        // Clean up uploaded file if DB insert fails
        await supabase.storage.from("portfolio").remove([filePath]);
        throw new Error(`Database error: ${dbError.message}`);
      }

      // Reset form and refresh
      setFile(null);
      setTitle("");
      setDescription("");
      setPublished(false);
      setSuccess("Photo uploaded successfully!");

      // Reset file input
      const fileInput = document.getElementById("file-input") as HTMLInputElement;
      if (fileInput) fileInput.value = "";

      await fetchPhotos();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function togglePublished(photo: Photo) {
    const { error } = await supabase
      .from("photos")
      .update({ published: !photo.published })
      .eq("id", photo.id);

    if (error) {
      setError("Failed to update photo");
    } else {
      await fetchPhotos();
    }
  }

  async function handleDelete(photo: Photo) {
    if (!confirm("Are you sure you want to delete this photo?")) return;

    try {
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from("portfolio")
        .remove([photo.display_path]);

      if (storageError) {
        console.error("Storage delete error:", storageError);
      }

      // Delete from database
      const { error: dbError } = await supabase
        .from("photos")
        .delete()
        .eq("id", photo.id);

      if (dbError) {
        throw new Error(dbError.message);
      }

      setSuccess("Photo deleted successfully");
      await fetchPhotos();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    }
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-red-600">Admin Dashboard</h1>
            <p className="text-neutral-400 mt-1">Manage your portfolio photos</p>
          </div>
          <div className="flex gap-4">
            <a href="/" className="btn-secondary">
              View Gallery
            </a>
            <button onClick={handleSignOut} className="btn-secondary">
              Sign Out
            </button>
          </div>
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-200">
            {error}
            <button onClick={() => setError(null)} className="float-right hover:text-white">×</button>
          </div>
        )}
        {success && (
          <div className="mb-6 p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-200">
            {success}
            <button onClick={() => setSuccess(null)} className="float-right hover:text-white">×</button>
          </div>
        )}

        {/* Upload Form */}
        <div className="bg-neutral-900 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Upload New Photo</h2>
          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Image File *
              </label>
              <input
                id="file-input"
                type="file"
                accept="image/jpeg,image/png,image/webp,image/heic"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Title (optional)
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Photo title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Description (optional)
                </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPublished(!published)}
                className={`toggle ${published ? "toggle-enabled" : "toggle-disabled"}`}
              >
                <span className={`toggle-dot ${published ? "toggle-dot-enabled" : "toggle-dot-disabled"}`} />
              </button>
              <span className="text-neutral-300">Publish immediately</span>
            </div>

            <button type="submit" disabled={uploading || !file}>
              {uploading ? "Compressing & Uploading..." : "Upload Photo"}
            </button>
          </form>
        </div>

        {/* Photo List */}
        <div className="bg-neutral-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Your Photos ({photos.length})
          </h2>

          {loading ? (
            <p className="text-neutral-400">Loading...</p>
          ) : photos.length === 0 ? (
            <p className="text-neutral-400">No photos uploaded yet.</p>
          ) : (
            <div className="space-y-4">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 flex-shrink-0 bg-neutral-700 rounded-lg overflow-hidden">
                    <img
                      src={photo.display_url}
                      alt={photo.title || "Photo"}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-grow min-w-0">
                    <h3 className="font-medium truncate">
                      {photo.title || "Untitled"}
                    </h3>
                    <p className="text-sm text-neutral-400 truncate">
                      {photo.description || "No description"}
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      {new Date(photo.created_at).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2">
                    <span className={`text-sm ${photo.published ? "text-green-400" : "text-neutral-500"}`}>
                      {photo.published ? "Published" : "Draft"}
                    </span>
                    <button
                      onClick={() => togglePublished(photo)}
                      className={`toggle ${photo.published ? "toggle-enabled" : "toggle-disabled"}`}
                    >
                      <span className={`toggle-dot ${photo.published ? "toggle-dot-enabled" : "toggle-dot-disabled"}`} />
                    </button>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(photo)}
                    className="btn-danger text-sm"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
