import React from 'react';
import PhotoNavBar from '../components/PhotoNavBar';

const categories = [
    { name: 'Astrophotography', count: 12 },
    { name: 'Portraits', count: 24 },
    { name: 'Grad Photos', count: 18 },
    { name: 'Headshots', count: 15 },
    { name: 'Environment', count: 20 },
];

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-black text-white">
            <PhotoNavBar />

            {/* Header */}
            <section className="pt-32 pb-16 px-8">
                <div className="max-w-7xl mx-auto">
                    <h1
                        className="text-6xl md:text-8xl font-black tracking-tighter"
                        style={{
                            fontFamily: "'Compacta Black Poster', sans-serif",
                        }}
                    >
                        Portfolio
                    </h1>
                    <p className="mt-4 text-white/50 text-lg max-w-xl">
                        Browse my work by category
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="px-8 pb-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categories.map((category) => (
                        <a
                            key={category.name}
                            href={`/portfolio/${category.name.toLowerCase().replace(' ', '-')}`}
                            className="group relative aspect-[16/9] bg-neutral-900 overflow-hidden"
                        >
                            {/* Placeholder background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 group-hover:scale-105 transition-transform duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <h2 className="text-3xl font-bold tracking-tight">
                                    {category.name}
                                </h2>
                                <span className="text-white/50 text-sm mt-1">
                                    {category.count} photos
                                </span>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
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
