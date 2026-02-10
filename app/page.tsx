import { createClient } from "@/lib/supabase/server";
import type { Photo, PhotoSize, PhotoOrientation } from "@/types/database";
import Image from "next/image";

export const revalidate = 60; // Revalidate every 60 seconds

const TOTAL_COLS = 30;

async function getPublishedPhotos(): Promise<Photo[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("photos")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Error fetching photos:", error);
    return [];
  }

  return data || [];
}

function getBaseColSpan(size: PhotoSize, orientation: PhotoOrientation): number {
  if (orientation === "vertical") {
    // Vertical: S=6, M=9, L=12
    switch (size) {
      case "small": return 6;
      case "medium": return 9;
      case "large": return 12;
      default: return 9;
    }
  } else {
    // Horizontal: S=9, M=15, L=21
    switch (size) {
      case "small": return 9;
      case "medium": return 15;
      case "large": return 21;
      default: return 9;
    }
  }
}

interface LayoutItem {
  photo: Photo;
  colSpan: number;
  rowSpan: number;
}

interface PhotoWithSpan {
  photo: Photo;
  baseSpan: number;
  rowSpan: number;
}

// Calculate row span based on column span and aspect ratio
// Using base row unit of 10px, scaled to create proper proportions
function calculateRowSpan(colSpan: number, orientation: PhotoOrientation): number {
  // Assume 3:2 aspect ratio for horizontal, 2:3 for vertical
  // Row span = (colSpan * aspectHeight / aspectWidth) * scale factor
  const baseUnit = 10; // Each row is 10px
  const colWidth = 100 / TOTAL_COLS; // Each column is ~3.33% of width

  if (orientation === "vertical") {
    // 2:3 aspect ratio (taller than wide)
    // For every 2 units wide, 3 units tall
    return Math.round(colSpan * 1.5 * 3); // Scale factor of 3 for reasonable sizing
  } else {
    // 3:2 aspect ratio (wider than tall)
    // For every 3 units wide, 2 units tall
    return Math.round(colSpan * 0.67 * 3);
  }
}

function calculateLayout(photos: Photo[]): LayoutItem[] {
  // Calculate base spans for all photos
  const items: PhotoWithSpan[] = photos.map(photo => {
    const orientation = photo.orientation || "horizontal";
    const baseSpan = getBaseColSpan(photo.display_size, orientation);
    return {
      photo,
      baseSpan,
      rowSpan: calculateRowSpan(baseSpan, orientation),
    };
  });

  // Bin-packing: greedily fill rows to exactly 30 columns
  const result: LayoutItem[] = [];
  const used = new Set<number>();

  while (used.size < items.length) {
    const row = fillRow(items, used, TOTAL_COLS);
    result.push(...row);
  }

  return result;
}

function fillRow(items: PhotoWithSpan[], used: Set<number>, target: number): LayoutItem[] {
  const row: LayoutItem[] = [];
  let remaining = target;

  // Try to find exact fits first, then best fits
  while (remaining > 0) {
    const bestIdx = findBestFit(items, used, remaining);

    if (bestIdx === -1) {
      // No more items fit - expand last item to fill gap
      if (row.length > 0) {
        row[row.length - 1].colSpan += remaining;
      }
      break;
    }

    const item = items[bestIdx];
    used.add(bestIdx);

    // Adjust span if item is slightly too big (contract by up to 1)
    let span = item.baseSpan;
    if (span > remaining && span - 1 >= remaining) {
      span = remaining;
    } else if (span > remaining) {
      // Item too big, expand previous items and break
      if (row.length > 0) {
        row[row.length - 1].colSpan += remaining;
      }
      // Put this item back for next row
      used.delete(bestIdx);
      break;
    }

    row.push({ photo: item.photo, colSpan: span, rowSpan: item.rowSpan });
    remaining -= span;
  }

  return row;
}

function findBestFit(items: PhotoWithSpan[], used: Set<number>, remaining: number): number {
  let bestIdx = -1;
  let bestDiff = Infinity;

  for (let i = 0; i < items.length; i++) {
    if (used.has(i)) continue;

    const span = items[i].baseSpan;

    // Exact fit is best
    if (span === remaining) {
      return i;
    }

    // Prefer items that fit without needing adjustment
    if (span <= remaining) {
      const diff = remaining - span;
      if (diff < bestDiff) {
        bestDiff = diff;
        bestIdx = i;
      }
    }

    // Allow contracting by 1 if nothing else fits
    if (bestIdx === -1 && span === remaining + 1) {
      bestIdx = i;
      bestDiff = 1;
    }
  }

  return bestIdx;
}

function getSizes(size: PhotoSize, orientation: PhotoOrientation): string {
  if (orientation === "vertical") {
    // Vertical: S=20%, M=30%, L=40%
    switch (size) {
      case "large": return "(max-width: 768px) 50vw, 40vw";
      case "small": return "(max-width: 768px) 33vw, 20vw";
      default: return "(max-width: 768px) 33vw, 30vw";
    }
  } else {
    // Horizontal: S=30%, M=50%, L=70%
    switch (size) {
      case "large": return "(max-width: 768px) 66vw, 70vw";
      case "medium": return "(max-width: 768px) 50vw, 50vw";
      default: return "(max-width: 768px) 50vw, 30vw";
    }
  }
}

// Generate md breakpoint col spans (using 18 columns on tablet)
function getMdColSpan(size: PhotoSize, orientation: PhotoOrientation): number {
  if (orientation === "vertical") {
    switch (size) {
      case "small": return 4;
      case "medium": return 6;
      case "large": return 8;
      default: return 6;
    }
  } else {
    switch (size) {
      case "small": return 6;
      case "medium": return 9;
      case "large": return 12;
      default: return 6;
    }
  }
}

export default async function GalleryPage() {
  const photos = await getPublishedPhotos();
  const layoutItems = calculateLayout(photos);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-red-600">
            AJ SHOOTS
          </a>
          <a
            href="https://instagram.com/AJ.Chadha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-[15vw] font-black leading-none tracking-tighter text-red-600">
          AJ SHOOTS
        </h1>
      </section>

      {/* Gallery */}
      <section className="px-4 md:px-8 lg:px-16 pb-24">
        {photos.length === 0 ? (
          <p className="text-center text-neutral-500 py-20">
            No photos published yet. Check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-18 lg:grid-cols-30 gap-4 auto-rows-[10px]">
            {layoutItems.map(({ photo, colSpan, rowSpan }) => {
              const orientation = photo.orientation || "horizontal";
              const mdSpan = getMdColSpan(photo.display_size, orientation);

              return (
                <div
                  key={photo.id}
                  className={`group relative overflow-hidden rounded-lg bg-neutral-900`}
                  style={{
                    gridColumn: `span ${colSpan}`,
                    gridRow: `span ${rowSpan}`,
                  }}
                  data-md-span={mdSpan}
                >
                  <Image
                    src={photo.display_url}
                    alt={photo.title || "Photo"}
                    fill
                    sizes={getSizes(photo.display_size, orientation)}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  {(photo.title || photo.description) && (
                    <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                        {photo.title && (
                          <h3 className="font-medium text-white">{photo.title}</h3>
                        )}
                        {photo.description && (
                          <p className="text-sm text-neutral-300">
                            {photo.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <span className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} AJ Chadha
          </span>
          <a
            href="https://instagram.com/AJ.Chadha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors text-sm"
          >
            @AJ.Chadha
          </a>
        </div>
      </footer>
    </main>
  );
}
