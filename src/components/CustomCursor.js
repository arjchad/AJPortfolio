import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isClicked, setIsClicked] = useState(false); // State to toggle the cursor image

    useEffect(() => {
        const offsetX = -20; // Adjust this value for horizontal offset
        const offsetY = -20; // Adjust this value for vertical offset

        const updatePosition = (e) => {
            setPosition({ x: e.clientX - offsetX, y: e.clientY - offsetY });
        };

        const handleMouseDown = () => setIsClicked(true);   // Change to clicked cursor
        const handleMouseUp = () => setIsClicked(false);    // Revert to default cursor

        // Hide the default cursor
        document.documentElement.style.cursor = 'none';
        document.body.style.cursor = 'none';

        // Event listeners
        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.documentElement.style.cursor = 'auto';
            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: '48px',
                height: '48px',
                backgroundImage: isClicked
                    ? "url('/cursor-clicked.gif')" // Second image for clicked state
                    : "url('/cursor.gif')",        // Default cursor image
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                pointerEvents: 'none',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
            }}
        />
    );
};

export default CustomCursor;
