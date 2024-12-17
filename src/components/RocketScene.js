// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
//
// export default function RocketScene({ onRocketRef }) {
//     const mountRef = useRef(null);
//     const rocketRef = useRef(null); // Store rocket mesh
//
//     useEffect(() => {
//         // Scene Setup
//         const scene = new THREE.Scene();
//         scene.background = new THREE.Color('#000000');
//
//         const camera = new THREE.PerspectiveCamera(
//             75,
//             mountRef.current.clientWidth / mountRef.current.clientHeight,
//             0.1,
//             1000
//         );
//         camera.position.set(0, 1, 5);
//
//         const renderer = new THREE.WebGLRenderer({ antialias: true });
//         renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
//         mountRef.current.appendChild(renderer.domElement);
//
//         // Lighting
//         const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//         directionalLight.position.set(5, 10, 7.5);
//         scene.add(directionalLight);
//
//         // Ground Plane
//         const planeGeo = new THREE.PlaneGeometry(100, 100);
//         const planeMat = new THREE.MeshPhongMaterial({ color: '#222222', side: THREE.DoubleSide });
//         const plane = new THREE.Mesh(planeGeo, planeMat);
//         plane.rotation.x = -Math.PI / 2;
//         plane.position.y = -1;
//         scene.add(plane);
//
//         // Load Rocket Model
//         const loader = new GLTFLoader();
//         loader.load('/rocket.glb', (gltf) => {
//             const rocket = gltf.scene;
//             rocket.position.set(0, 0, 0);
//             scene.add(rocket);
//             rocketRef.current = rocket;
//
//             // If parent wants ref to rocket for animations
//             if (onRocketRef) {
//                 onRocketRef(rocketRef);
//             }
//         });
//
//         // Animation Loop
//         const animate = () => {
//             requestAnimationFrame(animate);
//             renderer.render(scene, camera);
//         };
//         animate();
//
//         // Cleanup on unmount
//         return () => {
//             if (renderer) {
//                 renderer.dispose();
//                 scene.dispose();
//             }
//         };
//     }, [onRocketRef]);
//
//     return (
//         <div
//             ref={mountRef}
//             style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
//         ></div>
//     );
// }

// src/components/RocketScene.js
// src/components/RocketScene.js
import React, { useEffect, useRef } from 'react';
import RocketSVG from './RocketSVG';

export default function RocketScene({ onRocketRef }) {
    const mainFlameRef = useRef(null);
    const sideFlame1Ref = useRef(null);
    const sideFlame2Ref = useRef(null);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        function animateFlames() {
            const time = Date.now() / 200;

            // Animate main flame
            if (mainFlameRef.current) {
                const mainHeight = 109 + Math.sin(time) * 5;
                mainFlameRef.current.setAttribute('height', mainHeight);
            }

            // Animate side flames with slight offset
            if (sideFlame1Ref.current) {
                const side1Height = 109 + Math.sin(time + 1) * 3;
                sideFlame1Ref.current.setAttribute('height', side1Height);
            }

            if (sideFlame2Ref.current) {
                const side2Height = 109 + Math.sin(time + 2) * 3;
                sideFlame2Ref.current.setAttribute('height', side2Height);
            }

            animationFrameRef.current = requestAnimationFrame(animateFlames);
        }

        animateFlames();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <svg
            className="Svg-launch"
            viewBox="0 0 1000 1000"
            width="1000"
            height="1000"
            preserveAspectRatio="xMidYMid slice"
        >
            {/* Existing gradients */}
            <defs>
                <linearGradient id="linear-gradient" x1="500" x2="500" y2="1000" gradientUnits="userSpaceOnUse">
                    <stop offset="0.15" stopColor="#250247"/>
                    <stop offset="0.55" stopColor="#1305b2"/>
                    <stop offset="0.8" stopColor="#ff2f92"/>
                </linearGradient>

                <linearGradient id="linear-gradient-2" x1="453" y1="760" x2="453" y2="814" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#ff6d00" stopOpacity="0"/>
                    <stop offset="0.4" stopColor="#ff6d00"/>
                </linearGradient>

                <linearGradient id="linear-gradient-3" x1="494" y1="776" x2="494" y2="830" xlinkHref="#linear-gradient-2"/>
                <linearGradient id="linear-gradient-4" x1="533" x2="533" xlinkHref="#linear-gradient-2"/>

                <radialGradient id="radial-gradient" cx="492" cy="674" r="200"
                                gradientTransform="translate(-98.4 170.8) scale(1.2 0.8)"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.2" stopColor="#fe0" stopOpacity="0.4"/>
                    <stop offset="0.55" stopColor="#ff6500" stopOpacity="0.4"/>
                    <stop offset="1" stopColor="#ff6500" stopOpacity="0"/>
                </radialGradient>
            </defs>

            {/* Flames */}
            <g id="rocket-flames">
                {/* Side flame 1 */}
                <rect
                    ref={sideFlame1Ref}
                    x="443"
                    y="715"
                    width="20"
                    height="109"
                    rx="10"
                    fill="url(#linear-gradient-2)"
                />

                {/* Main flame */}
                <rect
                    ref={mainFlameRef}
                    x="484"
                    y="731"
                    width="20"
                    height="109"
                    rx="10"
                    fill="url(#linear-gradient-3)"
                />

                {/* Side flame 2 */}
                <rect
                    ref={sideFlame2Ref}
                    x="523"
                    y="715"
                    width="20"
                    height="109"
                    rx="10"
                    fill="url(#linear-gradient-4)"
                />
            </g>

            {/* Rocket body */}
            <RocketSVG />
        </svg>
    );
}
