import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full text-center py-4 border-t border-gray-700 mt-20">
            <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
        </footer>
    );
}
