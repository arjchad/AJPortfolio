import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function StarsBackground() {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Create Starfield
        const starsGeometry = new THREE.BufferGeometry();
        const starsCount = 1000;
        const positions = new Float32Array(starsCount * 3);

        for (let i = 0; i < starsCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 100; // X
            positions[i * 3 + 1] = (Math.random() - 0.5) * 100; // Y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // Z
        }

        starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.2,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.8,
        });

        const starField = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(starField);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            starField.rotation.y += 0.0005; // Slow rotation
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup on unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}
        />
    );
}