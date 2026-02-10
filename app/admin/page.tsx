"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { Photo, PhotoSize, PhotoOrientation } from "@/types/database";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const MAX_WIDTH = 4096;
const MAX_HEIGHT = 4096;
const QUALITY = 0.95;

const SIZE_OPTIONS: { value: PhotoSize; label: string }[] = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

interface CompressResult {
  blob: Blob;
  orientation: PhotoOrientation;
}

async function compressImage(file: File): Promise<CompressResult> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const originalWidth = img.width;
      const originalHeight = img.height;
      let { width, height } = img;

      // Determine orientation from original dimensions
      const orientation: PhotoOrientation = originalHeight > originalWidth ? "vertical" : "horizontal";

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
            resolve({ blob, orientation });
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

interface SortablePhotoRowProps {
  photo: Photo;
  onTogglePublished: (photo: Photo) => void;
  onDelete: (photo: Photo) => void;
  onSizeChange: (photo: Photo, size: PhotoSize) => void;
}

function SortablePhotoRow({
  photo,
  onTogglePublished,
  onDelete,
  onSizeChange,
}: SortablePhotoRowProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: photo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg"
    >
      {/* Drag Handle */}
      <button
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing p-2 text-neutral-400 hover:text-white"
        aria-label="Drag to reorder"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8h16M4 16h16"
          />
        </svg>
      </button>

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
        <h3 className="font-medium truncate">{photo.title || "Untitled"}</h3>
        <p className="text-sm text-neutral-400 truncate">
          {photo.description || "No description"}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-xs text-neutral-500">
            {new Date(photo.created_at).toLocaleDateString()}
          </p>
          <span className={`text-xs px-1.5 py-0.5 rounded ${photo.orientation === "vertical" ? "bg-purple-900/50 text-purple-300" : "bg-blue-900/50 text-blue-300"}`}>
            {photo.orientation || "horizontal"}
          </span>
        </div>
      </div>

      {/* Size Selector */}
      <div className="flex items-center gap-2">
        <label className="text-sm text-neutral-400">Size:</label>
        <select
          value={photo.display_size}
          onChange={(e) => onSizeChange(photo, e.target.value as PhotoSize)}
          className="bg-neutral-700 border border-neutral-600 rounded px-2 py-1 text-sm"
        >
          {SIZE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Status */}
      <div className="flex items-center gap-2">
        <span
          className={`text-sm ${photo.published ? "text-green-400" : "text-neutral-500"}`}
        >
          {photo.published ? "Published" : "Draft"}
        </span>
        <button
          onClick={() => onTogglePublished(photo)}
          className={`toggle ${photo.published ? "toggle-enabled" : "toggle-disabled"}`}
        >
          <span
            className={`toggle-dot ${photo.published ? "toggle-dot-enabled" : "toggle-dot-disabled"}`}
          />
        </button>
      </div>

      {/* Delete */}
      <button onClick={() => onDelete(photo)} className="btn-danger text-sm">
        Delete
      </button>
    </div>
  );
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
  const [displaySize, setDisplaySize] = useState<PhotoSize>("medium");

  const router = useRouter();
  const supabase = createClient();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const fetchPhotos = useCallback(async () => {
    const { data, error } = await supabase
      .from("photos")
      .select("*")
      .order("sort_order", { ascending: true });

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

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = photos.findIndex((p) => p.id === active.id);
      const newIndex = photos.findIndex((p) => p.id === over.id);

      const newPhotos = arrayMove(photos, oldIndex, newIndex);
      setPhotos(newPhotos);

      // Update sort_order in database
      const updates = newPhotos.map((photo, index) => ({
        id: photo.id,
        sort_order: (index + 1) * 10,
      }));

      for (const update of updates) {
        await supabase
          .from("photos")
          .update({ sort_order: update.sort_order })
          .eq("id", update.id);
      }
    }
  }

  async function updatePhotoSize(photo: Photo, size: PhotoSize) {
    const { error } = await supabase
      .from("photos")
      .update({ display_size: size })
      .eq("id", photo.id);

    if (error) {
      setError("Failed to update photo size");
    } else {
      setPhotos((prev) =>
        prev.map((p) => (p.id === photo.id ? { ...p, display_size: size } : p))
      );
      setSuccess("Photo size updated");
      setTimeout(() => setSuccess(null), 2000);
    }
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
      const { blob: compressedBlob, orientation } = await compressImage(file);

      // Convert blob to base64 for API upload
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;
          resolve(result.split(",")[1]);
        };
        reader.onerror = reject;
        reader.readAsDataURL(compressedBlob);
      });

      // Generate unique filename (always jpg after compression)
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 11)}.jpg`;

      // Upload to Backblaze B2 via API
      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          file: base64,
          fileName,
          contentType: "image/jpeg",
        }),
      });

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        throw new Error(`Upload failed: ${errorData.error || "Unknown error"}`);
      }

      const { key, url } = await uploadResponse.json();

      // Get the lowest sort_order to put new photo first
      const lowestSortOrder = photos.length > 0 ? Math.min(...photos.map((p) => p.sort_order)) : 10;

      // Insert into database
      const { error: dbError } = await supabase.from("photos").insert({
        title: title || null,
        description: description || null,
        display_path: key,
        display_url: url,
        published,
        display_size: displaySize,
        orientation,
        sort_order: lowestSortOrder - 10,
      });

      if (dbError) {
        // Clean up uploaded file if DB insert fails
        await fetch("/api/delete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key }),
        });
        throw new Error(`Database error: ${dbError.message}`);
      }

      // Reset form and refresh
      setFile(null);
      setTitle("");
      setDescription("");
      setPublished(false);
      setDisplaySize("medium");
      setSuccess("Photo uploaded successfully!");

      // Reset file input
      const fileInput = document.getElementById(
        "file-input"
      ) as HTMLInputElement;
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
      // Delete from Backblaze B2 storage
      const deleteResponse = await fetch("/api/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: photo.display_path }),
      });

      if (!deleteResponse.ok) {
        console.error("Storage delete error");
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
            <p className="text-neutral-400 mt-1">
              Manage your portfolio photos
            </p>
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
            <button
              onClick={() => setError(null)}
              className="float-right hover:text-white"
            >
              ×
            </button>
          </div>
        )}
        {success && (
          <div className="mb-6 p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-200">
            {success}
            <button
              onClick={() => setSuccess(null)}
              className="float-right hover:text-white"
            >
              ×
            </button>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Display Size
                </label>
                <select
                  value={displaySize}
                  onChange={(e) => setDisplaySize(e.target.value as PhotoSize)}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2"
                >
                  {SIZE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPublished(!published)}
                className={`toggle ${published ? "toggle-enabled" : "toggle-disabled"}`}
              >
                <span
                  className={`toggle-dot ${published ? "toggle-dot-enabled" : "toggle-dot-disabled"}`}
                />
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
          <p className="text-sm text-neutral-500 mb-4">
            Drag photos to reorder them in the gallery
          </p>

          {loading ? (
            <p className="text-neutral-400">Loading...</p>
          ) : photos.length === 0 ? (
            <p className="text-neutral-400">No photos uploaded yet.</p>
          ) : (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={photos.map((p) => p.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className="space-y-4">
                  {photos.map((photo) => (
                    <SortablePhotoRow
                      key={photo.id}
                      photo={photo}
                      onTogglePublished={togglePublished}
                      onDelete={handleDelete}
                      onSizeChange={updatePhotoSize}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          )}
        </div>
      </div>
    </main>
  );
}
