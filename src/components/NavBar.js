import React from 'react';

export default function NavBar() {
    return (
        <nav className="w-full p-4 flex justify-between items-center fixed top-0 bg-black bg-opacity-50 backdrop-blur-sm z-50">
            <div className="text-xl font-bold">My Portfolio</div>
            <div className="space-x-4">
                <a href="#about" className="hover:underline">About</a>
                <a href="#projects" className="hover:underline">Projects</a>
                <a href="#contact" className="hover:underline">Contact</a>
            </div>
        </nav>
    );
}
