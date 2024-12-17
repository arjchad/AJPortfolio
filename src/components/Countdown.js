import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export default function Countdown({ onComplete }) {
    const [count, setCount] = useState(3);
    const [shouldFade, setShouldFade] = useState(false);
    const textRef = React.useRef(null);
    const countRef = React.useRef(null);
    const containerRef = React.useRef(null);

    useEffect(() => {
        const font = new FontFace(
            'SpaceMono',
            `url('/fonts/SpaceMono-Regular.ttf')`,
            { style: 'normal', weight: '400' }
        );

        font.load().then((loadedFont) => {
            document.fonts.add(loadedFont);
        }).catch((error) => {
            console.error('Font loading failed:', error);
        });
    }, []);

    useEffect(() => {
        let timer = null;
        if (count > 0) {
            gsap.fromTo(countRef.current,
                {
                    yPercent: -100,
                    opacity: 0
                },
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                }
            );

            timer = setTimeout(() => {
                gsap.to(countRef.current, {
                    yPercent: 100,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: () => setCount((prev) => prev - 1)
                });
            }, 700);
        } else if (count === 0 && !shouldFade) {
            // Show 0 and set up fade out
            gsap.fromTo(countRef.current,
                {
                    yPercent: -100,
                    opacity: 0
                },
                {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                    onComplete: () => {
                        // Wait a moment before starting fade out
                        setTimeout(() => {
                            setShouldFade(true);
                        }, 500);
                    }
                }
            );
        } else if (shouldFade) {
            // Fade out entire container after showing 0
            gsap.to(containerRef.current, {
                opacity: 0,
                duration: 1,
                ease: 'power2.in',
                onComplete: () => {
                    onComplete && onComplete();
                }
            });
        }
        return () => clearTimeout(timer);
    }, [count, shouldFade, onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed right-32 top-1/2 text-center text-white" // Adjusted right position
            style={{
                fontFamily: 'SpaceMono, monospace',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                transform: 'translateY(-50%)'
            }}
        >
            <div className="text-6xl font-bold relative"> {/* Increased from text-3xl to text-6xl */}
                Get to know AJ in T-
                <span
                    ref={countRef}
                    className="inline-block ml-4"
                >
                    {count}
                </span>
            </div>
        </div>
    );
}