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
import { gsap } from "gsap";
import CustomCursor from '../components/CustomCursor';

function StarsAndPlanets() {
    return (
        <div className="absolute top-0 w-full h-[1000px] pointer-events-none">
            <div className="w-full h-full bg-[url('/stars.gif')] bg-cover" />
        </div>
    );
}

function CloudsAndGrass() {
    return (
        <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute bottom-0 w-full h-[5%] bg-green-700" />
            <div className="absolute top-[75%] left-[10%] w-[19%] h-[5%] bg-[url('/sun.gif')] bg-cover" />
            <div className="clouds-sprite-U" />
            <div className="clouds-sprite-M" />
            <div className="clouds-sprite-L" />
        </div>
    );
}

export default function Home() {
    const gsapRegistered = useRef(false);
    const rocketRef = useRef(null);
    const rocketShakeRef = useRef(null);
    const smokeSystemRef = useRef(null);
    const scrollTriggersRef = useRef([]);

    useEffect(() => {

        document.body.style.overflow = 'hidden';
        const updateSizes = () => {
            const containerHeight = rocketRef.current?.clientHeight || 0;
            if (smokeSystemRef.current) {
                smokeSystemRef.current.spawnConfig.baseY = containerHeight * 0.68;
            }
        };
        window.addEventListener('resize', updateSizes);
        updateSizes();

        // Initialize GSAP and ScrollTrigger immediately
        if (typeof window !== 'undefined' && !gsapRegistered.current) {
            const gsap = require('gsap').gsap;
            const { ScrollTrigger } = require('gsap/ScrollTrigger');
            gsap.registerPlugin(ScrollTrigger);
            gsapRegistered.current = true;

            // Set up ScrollTrigger animations immediately
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach((element) => {
                const trigger = gsap.fromTo(element,
                    {
                        opacity: 0,
                        y: 50
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: element,
                            start: 'top 80%',
                            end: 'top 50%',
                            toggleActions: 'play none none reverse',
                            scrub: 1,
                            markers: false, // Keep markers for debugging
                            invalidateOnRefresh: true
                        }
                    }
                );
                scrollTriggersRef.current.push(trigger);
            });
        }

        window.scrollTo(0, 6000);

        return () => {
            window.removeEventListener('resize', updateSizes);
            if (smokeSystemRef.current) {
                smokeSystemRef.current.stop();
            }
            // Kill all ScrollTriggers on cleanup
            scrollTriggersRef.current.forEach(trigger => {
                if (trigger.scrollTrigger) {
                    trigger.scrollTrigger.kill();
                }
            });
        };
    }, []);

    const handleCountdownComplete = () => {
        if (!rocketRef.current || typeof window === 'undefined') return;

        const rocketContainerHeight = rocketRef.current.clientHeight;

        if (!rocketShakeRef.current) {
            rocketShakeRef.current = new RocketShake(rocketRef);
        }

        const smokeCanvas = document.querySelector('.rocket-smoke');
        if (!smokeSystemRef.current) {
            smokeSystemRef.current = new SmokeSystem(
                smokeCanvas,
                {
                    spreadX: 20,
                    spawnRate: { min: 1, max: 2 },
                    initialRadius: { min: 8, max: 12 },
                },
                rocketRef.current
            );
            smokeSystemRef.current.start();
        }

        const gsap = require('gsap').gsap;
        const scrollToPlugin = require('gsap/ScrollToPlugin');
        const { ScrollTrigger } = require('gsap/ScrollTrigger');
        gsap.registerPlugin(scrollToPlugin, ScrollTrigger);

        // Main animation timeline
        const tl = gsap.timeline({
            onUpdate: () => {
                // Refresh ScrollTrigger on each update
                ScrollTrigger.refresh();
            },
            onComplete: () => {
                const finalTl = gsap.timeline({
                    onComplete: () => {
                        setTimeout(() => {
                            document.body.style.overflow = 'auto';
                            document.body.style.touchAction = 'auto';
                            document.documentElement.style.overflow = 'auto';
                            ScrollTrigger.refresh();
                        }, 100);
                    }
                });

                finalTl.to(rocketRef.current, {
                    y: '-1000%',
                    duration: 1,
                    ease: 'power2.out'
                });

                finalTl.to(smokeSystemRef.current, {
                    position: -200 * (window.innerHeight / 100),
                    duration: 1,
                    ease: 'power2.out'
                }, '<');
            }
        });

        // Synchronize scroll and rocket movement
        tl.to(window, {
            scrollTo: { y: 0 },
            duration: 5,
            ease: 'power2.inOut',
            onUpdate: () => {
                // Refresh ScrollTrigger during scroll animation
                ScrollTrigger.refresh(true);
            }
        }, 0);

        tl.to(rocketRef.current, {
            y: -2 * rocketContainerHeight + 'px',
            duration: 7.2,
            ease: 'power2.inOut'
        }, 0.04);

        tl.to(smokeSystemRef.current, {
            position: -200 * (rocketContainerHeight / 100),
            duration: 7.4,
            ease: 'power2.inOut'
        }, 0);
    };

    return (
        <main className="relative w-screen overflow-hidden"
              style={{
                  height: '6000px',
                  background: 'linear-gradient(to top, #87CEEB, #4682B4, #1D3F72, #0B1B34, #0D1845, #000F1E, black)'
              }}>
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

            <div className="fixed bottom-0 left-0 w-full flex justify-center">
                <canvas className="rocket-smoke fixed top-0 left-0 w-full h-full pointer-events-none" />
                <div ref={rocketRef}>
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
            <CustomCursor />
        </main>
    );
}