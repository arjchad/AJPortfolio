import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const RotatingSphere = ({ words = [] }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Get container size
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
        camera.position.z = 12;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        const parentGroup = new THREE.Group();
        scene.add(parentGroup);

        // Sphere
        const sphereGeometry = new THREE.SphereGeometry(5, 28, 28);
        const sphereMaterial = new THREE.MeshBasicMaterial({
            wireframe: true,
            color: 0xFBC02D,
        });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        parentGroup.add(sphere);

        // Words Group
        const wordGroup = new THREE.Group();
        parentGroup.add(wordGroup);

        // Tilt the Parent Group around the Z-axis
        const tiltAngle = Math.PI / -8; // 30 degrees tilt
        parentGroup.rotation.z = tiltAngle;

        // Define the original axis (0,1,0) - global Y
        let axis = new THREE.Vector3(0, 1, 0);

        // Rotate this axis by tiltAngle around Z to align with the parent's local tilted axis
        const zAxis = new THREE.Vector3(0,0,1);
        axis.applyAxisAngle(zAxis, tiltAngle);

        const rotationQuaternion = new THREE.Quaternion();
        const rotationSpeed = 0.0033; // Adjust speed

        // Load words
        const loader = new FontLoader();
        const placedPositions = [];
        const minDistance = 1.8;

        loader.load(
            "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
            (font) => {
                words.forEach((word) => {
                    let positionAccepted = false;
                    let theta, phi, position;
                    while (!positionAccepted) {
                        theta = Math.random() * Math.PI * 2;
                        const phiMin = Math.PI / 3;
                        const phiMax = (2 * Math.PI) / 3;
                        phi = phiMin + (phiMax - phiMin) * Math.random();
                        const radius = 5.85;

                        const x = radius * Math.sin(phi) * Math.cos(theta);
                        const y = radius * Math.cos(phi);
                        const z = radius * Math.sin(phi) * Math.sin(theta);

                        position = new THREE.Vector3(x, y, z);
                        positionAccepted = placedPositions.every((prev) => position.distanceTo(prev) >= minDistance);
                    }

                    placedPositions.push(position);

                    const textGeometry = new TextGeometry(word, {
                        font: font,
                        size: 0.38,
                        height: 0.038,
                    });
                    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
                    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

                    textMesh.position.copy(position);
                    textMesh.lookAt(0, 0, 0);
                    textMesh.rotateY(Math.PI);
                    wordGroup.add(textMesh);
                });
            }
        );

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate around the now tilted local axis
            rotationQuaternion.setFromAxisAngle(axis, rotationSpeed);
            parentGroup.quaternion.multiplyQuaternions(rotationQuaternion, parentGroup.quaternion);

            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            if (renderer.domElement && mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, [words]);

    return <div ref={mountRef} style={{ width: '500px', height: '500px' }} />;
};

export default RotatingSphere;
