import React from 'react';
import PhotoNavBar from '../components/PhotoNavBar';

// Placeholder photo data - replace with your actual photos
const photos = [
    { id: 1, category: 'astrophotography', aspectRatio: 'landscape' },
    { id: 2, category: 'portraits', aspectRatio: 'portrait' },
    { id: 3, category: 'environment', aspectRatio: 'landscape' },
    { id: 4, category: 'headshots', aspectRatio: 'portrait' },
    { id: 5, category: 'astrophotography', aspectRatio: 'square' },
    { id: 6, category: 'grad photos', aspectRatio: 'portrait' },
    { id: 7, category: 'environment', aspectRatio: 'landscape' },
    { id: 8, category: 'portraits', aspectRatio: 'portrait' },
    { id: 9, category: 'astrophotography', aspectRatio: 'landscape' },
    { id: 10, category: 'headshots', aspectRatio: 'square' },
    { id: 11, category: 'environment', aspectRatio: 'landscape' },
    { id: 12, category: 'grad photos', aspectRatio: 'portrait' },
];

function PlaceholderImage({ category, aspectRatio }) {
    const aspectClasses = {
        landscape: 'aspect-[3/2]',
        portrait: 'aspect-[2/3]',
        square: 'aspect-square',
    };

    return (
        <div
            className={`${aspectClasses[aspectRatio]} bg-neutral-900 relative overflow-hidden group`}
        >
            {/* Placeholder gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950" />

            {/* Category label */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/50 text-xs uppercase tracking-widest">
                    {category}
                </span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
    );
}

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white">
            <PhotoNavBar />

            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center items-center relative">
                <h1
                    className="text-[15vw] font-black leading-none tracking-tighter"
                    style={{
                        fontFamily: "'Compacta Black Poster', sans-serif",
                        color: '#dc2626',
                    }}
                >
                    AJ SHOOTS
                </h1>

                {/* Scroll indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="px-4 md:px-8 lg:px-16 pb-24">
                {/* Masonry-style grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {photos.map((photo) => (
                        <div key={photo.id} className="break-inside-avoid">
                            <PlaceholderImage
                                category={photo.category}
                                aspectRatio={photo.aspectRatio}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                    <span className="text-white/40 text-sm">
                        &copy; {new Date().getFullYear()} AJ Chadha
                    </span>
                    <a
                        href="https://instagram.com/AJ.Chadha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white transition-colors text-sm"
                    >
                        @AJ.Chadha
                    </a>
                </div>
            </footer>
        </main>
    );
}
