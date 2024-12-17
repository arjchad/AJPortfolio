import React, { useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import RotatingSphere from '../components/RotatingSphere';
import Footer from '../components/Footer';
import RocketScene from '../components/RocketScene';
import Countdown from '../components/Countdown';
import { RocketShake } from '../utils/rocketAnimations';
import { SmokeSystem } from '../lib/SmokeSystem';
import RocketLaunchPad from '../components/RocketLaunchPad';
import RocketSVG from '../components/RocketSVG';

function StarsAndPlanets() {
    return (
        <div className="absolute top-0 w-full h-[1000px] pointer-events-none">
            {/* Placeholder starry sky/planets area */}
            <div className="w-full h-full bg-[url('/stars.png')] bg-cover" />
        </div>
    );
}

function CloudsAndGrass() {
    return (
        <div className="absolute bottom-0 w-full h-[1000px] pointer-events-none">
            {/* Grass at bottom */}
            <div className="absolute bottom-0 w-full h-1/3 bg-green-700" />
            {/* Clouds above grass */}
            <div className="absolute top-0 w-full h-2/3 bg-[url('/clouds.png')] bg-cover" />
        </div>
    );
}

export default function Home() {
    const gsapRegistered = useRef(false);
    const rocketRef = useRef(null);
    const rocketShakeRef = useRef(null);
    const smokeSystemRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const gsap = require('gsap').gsap;
            const { ScrollTrigger } = require('gsap/ScrollTrigger');

            if (!gsapRegistered.current) {
                gsap.registerPlugin(ScrollTrigger);
                gsapRegistered.current = true;

                gsap.from('.fade-in', {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    scrollTrigger: {
                        trigger: '.fade-in',
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: true,
                    },
                });
            }

            window.scrollTo(0, 6000);

            // Add cleanup
            return () => {
                if (smokeSystemRef.current) {
                    smokeSystemRef.current.stop();
                }
            };
        }
    }, []);

    const handleCountdownComplete = () => {
        if (!rocketRef.current || typeof window === 'undefined') return;

        if (!rocketShakeRef.current) {
            rocketShakeRef.current = new RocketShake(rocketRef);
        }

        const smokeCanvas = document.querySelector('.rocket-smoke');
        if (!smokeSystemRef.current) {
            smokeSystemRef.current = new SmokeSystem(smokeCanvas);
            // Configure smoke position and spread
            smokeSystemRef.current.spawnConfig = {
                baseY: 680, // Higher spawn point (adjusted from 740)
                spreadX: 20, // Control horizontal spread
                spawnRate: { min: 1, max: 2 }, // Control particle generation rate
                initialRadius: { min: 8, max: 12 } // Slightly smaller initial particles
            };
            smokeSystemRef.current.start();
        }

        const gsap= require('gsap').gsap;
        const scrollToPlugin = require('gsap/ScrollToPlugin');
        gsap.registerPlugin(scrollToPlugin);

        const tl = gsap.timeline({
            onComplete: () => {
                // Final exit animation for both rocket and smoke
                gsap.to(rocketRef.current, {
                    y: '-1000%',
                    duration: 1,
                    ease: 'power2.out'
                });

                gsap.to(smokeSystemRef.current, {
                    position: -200 * (window.innerHeight / 100), // Convert percentage to pixels
                    duration: 1,
                    ease: 'power2.out',
                    // onComplete: () => {
                    //     rocketShakeRef.current.stop();
                    //     smokeSystemRef.current.stop();
                    // }
                });
            }
        });

        // Synchronize the page scroll
        tl.to(window, {
            scrollTo: { y: 0 },
            duration: 4.5,
            ease: 'power2.inOut'
        }, 0);

        // Initial rocket movement
        tl.to(rocketRef.current, {
            y: '-400%',
            duration: 9,
            ease: 'power2.inOut'
        }, 0.04);

        // Initial smoke movement in parallel
        tl.to(smokeSystemRef.current, {
            position: -150 * (window.innerHeight / 100), // Convert percentage to pixels
            duration: 9.3,
            ease: 'power2.inOut'
        }, 0);


    };



    return (
        <main className="relative w-screen overflow-hidden"
              style={{
                  height: '6000px',
                  background: 'linear-gradient(to top, #87CEEB, #4682B4, #1D3F72, #0B1B34, #0D1845, #000F1E, black)'
              }}
        >
            <NavBar />

            <div className="absolute top-0 w-full h-screen">
                <HeroSection />
            </div>

            <div className="fade-in absolute left-2/3 -translate-x-2/3 bottom-[4200px] flex justify-center items-center w-[1200px] h-[800px]">
                <RotatingSphere words={['JavaScript', 'React', 'Next.js', 'Three.js', 'GSAP', 'Django', 'Angular.js',
                    'Java', 'Python', 'Node.js', 'AWS', 'Node.js', 'Tensorflow', 'Mongo.db', 'PostGreSQL',
                    'Docker', 'Postman']} />
            </div>

            <CloudsAndGrass />
            <StarsAndPlanets />

            {/*<div className="fixed bottom-0 left-0 w-full flex justify-center">*/}
            {/*    <RocketLaunchPad/>*/}
            {/*</div>*/}
            <div className="fixed bottom-0 left-0 w-full flex justify-center">
                <canvas className="rocket-smoke fixed top-0 left-0 w-full h-full pointer-events-none" />

                {/* The rocket and platform container */}
                <div
                    ref={rocketRef}
                    className="relative"
                    style={{
                        width: '1000px',
                        height: '1000px',
                        transform: 'translateY(0px)'
                    }}
                >
                    <RocketScene />
                </div>
            </div>

            <Countdown onComplete={handleCountdownComplete} />

            <div className="fade-in absolute left-1/2 -translate-x-1/2 top-[400px] text-center">
                <h2 className="text-3xl font-bold text-white">Scroll-triggered Animation Section</h2>
                <p className="mt-4 text-white">
                    As you scroll, elements fade in, move, or rotate using GSAP & ScrollTrigger.
                </p>
            </div>

            <Footer />
        </main>
    );
}