import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

export default function Countdown({ onComplete }) {
    const [phase, setPhase] = useState('intro'); // 'intro', 'countdown', 'zoom', 'done'
    const [introWordIndex, setIntroWordIndex] = useState(-1);
    const [count, setCount] = useState(3);

    const containerRef = useRef(null);
    const introWordsRef = useRef([]);
    const countRef = useRef(null);
    const flashRef = useRef(null);
    const flashIntervalRef = useRef(null);

    const introWords = ['Get', 'to', 'know', 'AJ', 'in'];

    useEffect(() => {
        // Scroll to bottom first
        window.scrollTo(0, 6000);
        const scrollY = window.scrollY;

        // Lock user scrolling
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
        document.documentElement.style.overflow = 'hidden';

        // Font loading
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

        // Start intro sequence after a brief delay
        setTimeout(() => {
            setIntroWordIndex(0);
        }, 500);
    }, []);

    // Handle intro word animation
    useEffect(() => {
        if (phase !== 'intro' || introWordIndex < 0) return;

        if (introWordIndex < introWords.length) {
            const wordEl = introWordsRef.current[introWordIndex];
            if (wordEl) {
                // Animate word appearing
                gsap.fromTo(wordEl,
                    {
                        scale: 0,
                        opacity: 0,
                    },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.15,
                        ease: 'back.out(2)',
                        onComplete: () => {
                            // Move to next word after delay
                            setTimeout(() => {
                                setIntroWordIndex(prev => prev + 1);
                            }, 250);
                        }
                    }
                );
            }
        } else {
            // All intro words shown, transition to countdown
            setTimeout(() => {
                // Fade out intro words
                gsap.to(introWordsRef.current, {
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.3,
                    stagger: 0.05,
                    onComplete: () => {
                        setPhase('countdown');
                    }
                });
            }, 400);
        }
    }, [introWordIndex, phase]);

    // Handle countdown phase with rave flashing
    useEffect(() => {
        if (phase !== 'countdown') return;

        // Start rave flashing
        let flashState = false;
        flashIntervalRef.current = setInterval(() => {
            flashState = !flashState;
            if (flashRef.current) {
                flashRef.current.style.backgroundColor = flashState ? '#ffffff' : '#000000';
            }
        }, 80); // Fast flashing

        // Animate the number appearing
        const animateCount = () => {
            if (!countRef.current) return;

            gsap.fromTo(countRef.current,
                {
                    scale: 3,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.2,
                    ease: 'power2.out',
                }
            );
        };

        animateCount();

        return () => {
            if (flashIntervalRef.current) {
                clearInterval(flashIntervalRef.current);
            }
        };
    }, [phase]);

    // Handle countdown timer
    useEffect(() => {
        if (phase !== 'countdown') return;

        if (count > 1) {
            const timer = setTimeout(() => {
                gsap.to(countRef.current, {
                    scale: 0.5,
                    opacity: 0,
                    duration: 0.15,
                    ease: 'power2.in',
                    onComplete: () => {
                        setCount(prev => prev - 1);
                        // Animate new number in
                        gsap.fromTo(countRef.current,
                            { scale: 3, opacity: 0 },
                            { scale: 1, opacity: 1, duration: 0.2, ease: 'power2.out' }
                        );
                    }
                });
            }, 600);
            return () => clearTimeout(timer);
        } else if (count === 1) {
            // On "1", prepare for zoom transition
            const timer = setTimeout(() => {
                // Stop flashing, set to white
                if (flashIntervalRef.current) {
                    clearInterval(flashIntervalRef.current);
                }
                if (flashRef.current) {
                    flashRef.current.style.backgroundColor = '#000000';
                }
                setPhase('zoom');
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [count, phase]);

    // Handle zoom transition
    useEffect(() => {
        if (phase !== 'zoom') return;

        const tl = gsap.timeline();

        // Zoom into the "1"
        tl.to(countRef.current, {
            scale: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.in',
        });

        // Simultaneously fade the background to white (smoke color)
        tl.to(flashRef.current, {
            backgroundColor: '#ffffff',
            duration: 0.6,
            ease: 'power2.in',
        }, 0);

        // Hold on white briefly, then trigger the scene transition
        tl.call(() => {
            // Signal to parent that we're ready for the zoom-out-from-smoke transition
            // onComplete will start the rocket and smoke
            onComplete && onComplete();
        }, null, 0.8);

        // Fade out the white overlay to reveal the zoomed-in scene
        tl.to(flashRef.current, {
            opacity: 0,
            duration: 1.2,
            ease: 'power2.out',
            onComplete: () => {
                setPhase('done');
            }
        }, 1.0);

    }, [phase, onComplete]);

    // Handle completion
    useEffect(() => {
        if (phase !== 'done') return;

        // Restore scroll position
        const scrollY = Math.abs(parseInt(document.body.style.top, 10));
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        document.documentElement.style.overflow = '';

        window.scrollTo(0, scrollY);

        onComplete && onComplete();
    }, [phase, onComplete]);

    if (phase === 'done') return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0"
            style={{ zIndex: 100 }}
        >
            {/* Background flash layer */}
            <div
                ref={flashRef}
                className="absolute inset-0 transition-colors"
                style={{ backgroundColor: '#000000' }}
            />


            {/* Intro words */}
            {phase === 'intro' && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-wrap justify-center gap-4 text-6xl md:text-8xl font-black"
                         style={{ fontFamily: "'Compacta Black Poster', 'SpaceMono', monospace" }}>
                        {introWords.map((word, index) => (
                            <span
                                key={word}
                                ref={el => introWordsRef.current[index] = el}
                                className="text-red-600"
                                style={{
                                    opacity: 0,
                                    textShadow: '0 0 15px rgba(255, 0, 0, 0.5), 0 0 30px rgba(255, 0, 0, 0.2)'
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Countdown numbers */}
            {(phase === 'countdown' || phase === 'zoom') && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span
                        ref={countRef}
                        className="text-red-600 font-black"
                        style={{
                            fontSize: 'min(50vw, 50vh)',
                            fontFamily: "'Compacta Black Poster', 'SpaceMono', monospace",
                            textShadow: '0 0 20px rgba(255, 0, 0, 0.4), 0 0 40px rgba(255, 0, 0, 0.2)',
                            lineHeight: 1,
                        }}
                    >
                        {count}
                    </span>
                </div>
            )}
        </div>
    );
}
