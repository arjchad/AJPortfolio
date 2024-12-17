import React, { useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import RotatingSphere from '../components/RotatingSphere';
import Footer from '../components/Footer';

export default function Home() {
    const gsapRegistered = useRef(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Dynamically require GSAP on the client side
            const gsap = require('gsap').gsap; // Explicitly grab gsap namespace
            const ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;

            if (!gsapRegistered.current) {
                gsap.registerPlugin(ScrollTrigger);
                gsapRegistered.current = true;

                // Example GSAP animation
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
        }
    }, []);

    return (
        <div className="w-full h-full">
            <NavBar />
            <HeroSection />
            <div className="flex justify-center items-center w-screen h-screen bg-gray-800">
                <RotatingSphere words={['JavaScript', 'React', 'Next.js', 'Three.js', 'GSAP']} />
            </div>

            <div className="fade-in my-20 text-center">
                <h2 className="text-3xl font-bold">Scroll-triggered Animation Section</h2>
                <p className="mt-4">
                    As you scroll, elements fade in, move, or rotate using GSAP & ScrollTrigger.
                </p>
            </div>
            <Footer />
        </div>
    );
}
