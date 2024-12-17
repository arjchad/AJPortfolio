import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const RotatingSphere = ({ words = [] }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Get the actual size of the container
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // Scene, Camera, and Renderer Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 12;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        // Sphere Setup
        const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({
            wireframe: true,
            color: 0x00ffff,
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        scene.add(sphere);

        // Words Group
        const wordGroup = new THREE.Group();
        scene.add(wordGroup);

        // Load and place words outside the sphere
        const loader = new FontLoader();
        loader.load(
            "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
            (font) => {
                words.forEach((word) => {
                    const textGeometry = new TextGeometry(word, {
                        font: font,
                        size: 0.5,
                        height: 0.05,
                    });
                    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
                    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

                    // Position words slightly outside the sphere radius
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.random() * Math.PI;
                    const radius = 6;
                    textMesh.position.setFromSphericalCoords(radius, phi, theta);

                    // Make the text face outward:
                    // Face toward the center first
                    textMesh.lookAt(0, 0, 0);
                    // Rotate 180 degrees to face outward
                    textMesh.rotateY(Math.PI);

                    wordGroup.add(textMesh);
                });
            }
        );

        // Mouse Interactivity
        const mouse = { x: 0, y: 0 };
        const boundaryRadius = 500; // Adjust sensitivity as desired

        const onMouseMove = (event) => {
            const rect = mountRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Mouse positions relative to the container's center
            const relX = event.clientX - centerX;
            const relY = event.clientY - centerY;

            mouse.x = relX / (rect.width / 2);
            mouse.y = -(relY / (rect.height / 2));

            const dist = Math.sqrt(relX * relX + relY * relY);
            mouse.insideBoundary = dist < boundaryRadius;
        };

        document.addEventListener("mousemove", onMouseMove);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Baseline rotation: always rotate
            sphere.rotation.y += 0.005;

            // If inside boundary, add additional rotation based on mouse position
            if (mouse.insideBoundary) {
                sphere.rotation.x += mouse.y * 0.03;
                sphere.rotation.y += mouse.x * 0.03;
            }

            // Sync word group with sphere rotation
            wordGroup.rotation.x = sphere.rotation.x;
            wordGroup.rotation.y = sphere.rotation.y;

            renderer.render(scene, camera);
        };
        animate();

        // Cleanup on unmount
        return () => {
            if (renderer.domElement && mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, [words]);

    // Ensure this div has a known size and is centered by the parent container
    return <div ref={mountRef} style={{ width: '500px', height: '500px' }} />;
};

export default RotatingSphere;
