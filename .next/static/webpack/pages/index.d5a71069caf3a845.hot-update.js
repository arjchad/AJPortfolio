"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/RotatingSphere.js":
/*!******************************************!*\
  !*** ./src/components/RotatingSphere.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_loaders_FontLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/FontLoader */ \"./node_modules/three/examples/jsm/loaders/FontLoader.js\");\n/* harmony import */ var three_examples_jsm_geometries_TextGeometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/geometries/TextGeometry */ \"./node_modules/three/examples/jsm/geometries/TextGeometry.js\");\n\nvar _s = $RefreshSig$();\n\n\n // Import FontLoader correctly\n // Import TextGeometry\nconst RotatingSphere = (param)=>{\n    let { words = [] } = param;\n    _s();\n    const mountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"RotatingSphere.useEffect\": ()=>{\n            if (!mountRef.current) return;\n            // Set up scene, camera, and renderer\n            const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n            const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, 1, 0.1, 1000);\n            const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({\n                alpha: true\n            });\n            renderer.setSize(500, 500);\n            mountRef.current.appendChild(renderer.domElement);\n            // Sphere geometry\n            const sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.SphereGeometry(5, 32, 32);\n            const sphereMaterial = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n                wireframe: true,\n                color: 0xffffff\n            });\n            const sphere = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(sphereGeometry, sphereMaterial);\n            scene.add(sphere);\n            // Group for words\n            const wordGroup = new three__WEBPACK_IMPORTED_MODULE_2__.Group();\n            scene.add(wordGroup);\n            // Load and position words dynamically\n            const loader = new three_examples_jsm_loaders_FontLoader__WEBPACK_IMPORTED_MODULE_3__.FontLoader();\n            loader.load(\"https://threejs.org/examples/fonts/helvetiker_regular.typeface.json\", {\n                \"RotatingSphere.useEffect\": (font)=>{\n                    words.forEach({\n                        \"RotatingSphere.useEffect\": (word)=>{\n                            const textGeometry = new three_examples_jsm_geometries_TextGeometry__WEBPACK_IMPORTED_MODULE_4__.TextGeometry(word, {\n                                font: font,\n                                size: 0.5,\n                                height: 0.1\n                            });\n                            const textMaterial = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n                                color: 0xff6347\n                            });\n                            const textMesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(textGeometry, textMaterial);\n                            // Position words randomly on the sphere surface\n                            const theta = Math.random() * Math.PI * 2;\n                            const phi = Math.random() * Math.PI;\n                            textMesh.position.setFromSphericalCoords(5, phi, theta);\n                            wordGroup.add(textMesh);\n                        }\n                    }[\"RotatingSphere.useEffect\"]);\n                }\n            }[\"RotatingSphere.useEffect\"]);\n            // Camera position\n            camera.position.z = 10;\n            // Mouse-based rotation\n            const mouse = {\n                x: 0,\n                y: 0\n            };\n            const onMouseMove = {\n                \"RotatingSphere.useEffect.onMouseMove\": (event)=>{\n                    mouse.x = event.clientX / window.innerWidth * 2 - 1;\n                    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n                }\n            }[\"RotatingSphere.useEffect.onMouseMove\"];\n            document.addEventListener(\"mousemove\", onMouseMove);\n            // Animation loop\n            const animate = {\n                \"RotatingSphere.useEffect.animate\": ()=>{\n                    requestAnimationFrame(animate);\n                    // Rotate sphere and word group based on mouse movement\n                    sphere.rotation.y += (mouse.x * 0.05 - sphere.rotation.y) * 0.05;\n                    sphere.rotation.x += (mouse.y * 0.05 - sphere.rotation.x) * 0.05;\n                    wordGroup.rotation.y = sphere.rotation.y;\n                    wordGroup.rotation.x = sphere.rotation.x;\n                    renderer.render(scene, camera);\n                }\n            }[\"RotatingSphere.useEffect.animate\"];\n            animate();\n            // Cleanup on unmount\n            return ({\n                \"RotatingSphere.useEffect\": ()=>{\n                    mountRef.current.removeChild(renderer.domElement);\n                    document.removeEventListener(\"mousemove\", onMouseMove);\n                }\n            })[\"RotatingSphere.useEffect\"];\n        }\n    }[\"RotatingSphere.useEffect\"], [\n        words\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: mountRef,\n        className: \"w-full h-full\"\n    }, void 0, false, {\n        fileName: \"/Users/ajchadha/IdeaProjects/src/AJPortfolio/src/components/RotatingSphere.js\",\n        lineNumber: 88,\n        columnNumber: 12\n    }, undefined);\n};\n_s(RotatingSphere, \"V9/qkEdV8GfsDZk7lMTA1T8g5Ps=\");\n_c = RotatingSphere;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RotatingSphere);\nvar _c;\n$RefreshReg$(_c, \"RotatingSphere\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RHJCLFVBQVVrQyxRQUFRLENBQUNaLENBQUMsR0FBR3pCLE9BQU9xQyxRQUFRLENBQUNaLENBQUM7b0JBQ3hDdEIsVUFBVWtDLFFBQVEsQ0FBQ2IsQ0FBQyxHQUFHeEIsT0FBT3FDLFFBQVEsQ0FBQ2IsQ0FBQztvQkFFeENwQyxTQUFTa0QsTUFBTSxDQUFDdEQsT0FBT0U7Z0JBQzNCOztZQUNBaUQ7WUFFQSxxQkFBcUI7WUFDckI7NENBQU87b0JBQ0hyRCxTQUFTQyxPQUFPLENBQUN3RCxXQUFXLENBQUNuRCxTQUFTSyxVQUFVO29CQUNoRHdDLFNBQVNPLG1CQUFtQixDQUFDLGFBQWFkO2dCQUM5Qzs7UUFDSjttQ0FBRztRQUFDN0M7S0FBTTtJQUVWLHFCQUFPLDhEQUFDNEQ7UUFBSUMsS0FBSzVEO1FBQVU2RCxXQUFVOzs7Ozs7QUFDekM7R0FuRk0vRDtLQUFBQTtBQXFGTixpRUFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2FqY2hhZGhhL0lkZWFQcm9qZWN0cy9zcmMvQUpQb3J0Zm9saW8vc3JjL2NvbXBvbmVudHMvUm90YXRpbmdTcGhlcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IEZvbnRMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvRm9udExvYWRlclwiOyAvLyBJbXBvcnQgRm9udExvYWRlciBjb3JyZWN0bHlcbmltcG9ydCB7IFRleHRHZW9tZXRyeSB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vZ2VvbWV0cmllcy9UZXh0R2VvbWV0cnlcIjsgLy8gSW1wb3J0IFRleHRHZW9tZXRyeVxuXG5jb25zdCBSb3RhdGluZ1NwaGVyZSA9ICh7IHdvcmRzID0gW10gfSkgPT4ge1xuICAgIGNvbnN0IG1vdW50UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFtb3VudFJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICAgICAgLy8gU2V0IHVwIHNjZW5lLCBjYW1lcmEsIGFuZCByZW5kZXJlclxuICAgICAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIDEsIDAuMSwgMTAwMCk7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbHBoYTogdHJ1ZSB9KTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSg1MDAsIDUwMCk7XG4gICAgICAgIG1vdW50UmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICAgICAgLy8gU3BoZXJlIGdlb21ldHJ5XG4gICAgICAgIGNvbnN0IHNwaGVyZUdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDUsIDMyLCAzMik7XG4gICAgICAgIGNvbnN0IHNwaGVyZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgICAgICAgIHdpcmVmcmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHNwaGVyZSA9IG5ldyBUSFJFRS5NZXNoKHNwaGVyZUdlb21ldHJ5LCBzcGhlcmVNYXRlcmlhbCk7XG4gICAgICAgIHNjZW5lLmFkZChzcGhlcmUpO1xuXG4gICAgICAgIC8vIEdyb3VwIGZvciB3b3Jkc1xuICAgICAgICBjb25zdCB3b3JkR3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgc2NlbmUuYWRkKHdvcmRHcm91cCk7XG5cbiAgICAgICAgLy8gTG9hZCBhbmQgcG9zaXRpb24gd29yZHMgZHluYW1pY2FsbHlcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEZvbnRMb2FkZXIoKTtcbiAgICAgICAgbG9hZGVyLmxvYWQoXG4gICAgICAgICAgICBcImh0dHBzOi8vdGhyZWVqcy5vcmcvZXhhbXBsZXMvZm9udHMvaGVsdmV0aWtlcl9yZWd1bGFyLnR5cGVmYWNlLmpzb25cIixcbiAgICAgICAgICAgIChmb250KSA9PiB7XG4gICAgICAgICAgICAgICAgd29yZHMuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0R2VvbWV0cnkgPSBuZXcgVGV4dEdlb21ldHJ5KHdvcmQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IGZvbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweGZmNjM0NyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dE1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0ZXh0R2VvbWV0cnksIHRleHRNYXRlcmlhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUG9zaXRpb24gd29yZHMgcmFuZG9tbHkgb24gdGhlIHNwaGVyZSBzdXJmYWNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoZXRhID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwaGkgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dE1lc2gucG9zaXRpb24uc2V0RnJvbVNwaGVyaWNhbENvb3Jkcyg1LCBwaGksIHRoZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgd29yZEdyb3VwLmFkZCh0ZXh0TWVzaCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gQ2FtZXJhIHBvc2l0aW9uXG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gMTA7XG5cbiAgICAgICAgLy8gTW91c2UtYmFzZWQgcm90YXRpb25cbiAgICAgICAgY29uc3QgbW91c2UgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIG1vdXNlLnggPSAoZXZlbnQuY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIDIgLSAxO1xuICAgICAgICAgICAgbW91c2UueSA9IC0oZXZlbnQuY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiAyICsgMTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG5cbiAgICAgICAgLy8gQW5pbWF0aW9uIGxvb3BcbiAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblxuICAgICAgICAgICAgLy8gUm90YXRlIHNwaGVyZSBhbmQgd29yZCBncm91cCBiYXNlZCBvbiBtb3VzZSBtb3ZlbWVudFxuICAgICAgICAgICAgc3BoZXJlLnJvdGF0aW9uLnkgKz0gKG1vdXNlLnggKiAwLjA1IC0gc3BoZXJlLnJvdGF0aW9uLnkpICogMC4wNTtcbiAgICAgICAgICAgIHNwaGVyZS5yb3RhdGlvbi54ICs9IChtb3VzZS55ICogMC4wNSAtIHNwaGVyZS5yb3RhdGlvbi54KSAqIDAuMDU7XG5cbiAgICAgICAgICAgIHdvcmRHcm91cC5yb3RhdGlvbi55ID0gc3BoZXJlLnJvdGF0aW9uLnk7XG4gICAgICAgICAgICB3b3JkR3JvdXAucm90YXRpb24ueCA9IHNwaGVyZS5yb3RhdGlvbi54O1xuXG4gICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgICAgIH07XG4gICAgICAgIGFuaW1hdGUoKTtcblxuICAgICAgICAvLyBDbGVhbnVwIG9uIHVubW91bnRcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIG1vdW50UmVmLmN1cnJlbnQucmVtb3ZlQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbd29yZHNdKTtcblxuICAgIHJldHVybiA8ZGl2IHJlZj17bW91bnRSZWZ9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIiAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdGF0aW5nU3BoZXJlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiVEhSRUUiLCJGb250TG9hZGVyIiwiVGV4dEdlb21ldHJ5IiwiUm90YXRpbmdTcGhlcmUiLCJ3b3JkcyIsIm1vdW50UmVmIiwiY3VycmVudCIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwic2V0U2l6ZSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNwaGVyZUdlb21ldHJ5IiwiU3BoZXJlR2VvbWV0cnkiLCJzcGhlcmVNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwid2lyZWZyYW1lIiwiY29sb3IiLCJzcGhlcmUiLCJNZXNoIiwiYWRkIiwid29yZEdyb3VwIiwiR3JvdXAiLCJsb2FkZXIiLCJsb2FkIiwiZm9udCIsImZvckVhY2giLCJ3b3JkIiwidGV4dEdlb21ldHJ5Iiwic2l6ZSIsImhlaWdodCIsInRleHRNYXRlcmlhbCIsInRleHRNZXNoIiwidGhldGEiLCJNYXRoIiwicmFuZG9tIiwiUEkiLCJwaGkiLCJwb3NpdGlvbiIsInNldEZyb21TcGhlcmljYWxDb29yZHMiLCJ6IiwibW91c2UiLCJ4IiwieSIsIm9uTW91c2VNb3ZlIiwiZXZlbnQiLCJjbGllbnRYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNsaWVudFkiLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyb3RhdGlvbiIsInJlbmRlciIsInJlbW92ZUNoaWxkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsInJlZiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RotatingSphere.js\n"));

/***/ }),

/***/ "./node_modules/three/examples/jsm/geometries/TextGeometry.js":
/*!********************************************************************!*\
  !*** ./node_modules/three/examples/jsm/geometries/TextGeometry.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TextGeometry: () => (/* binding */ TextGeometry)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/**\n * Text = 3D Text\n *\n * parameters = {\n *  font: <THREE.Font>, // font\n *\n *  size: <float>, // size of the text\n *  depth: <float>, // thickness to extrude text\n *  curveSegments: <int>, // number of points on the curves\n *\n *  bevelEnabled: <bool>, // turn on bevel\n *  bevelThickness: <float>, // how deep into text bevel goes\n *  bevelSize: <float>, // how far from text outline (including bevelOffset) is bevel\n *  bevelOffset: <float> // how far from text outline does bevel start\n * }\n */\n\n\n\nclass TextGeometry extends three__WEBPACK_IMPORTED_MODULE_0__.ExtrudeGeometry {\n\n\tconstructor( text, parameters = {} ) {\n\n\t\tconst font = parameters.font;\n\n\t\tif ( font === undefined ) {\n\n\t\t\tsuper(); // generate default extrude geometry\n\n\t\t} else {\n\n\t\t\tconst shapes = font.generateShapes( text, parameters.size );\n\n\t\t\t// translate parameters to ExtrudeGeometry API\n\n\t\t\tif ( parameters.depth === undefined && parameters.height !== undefined ) {\n\n\t\t\t\tconsole.warn( 'THREE.TextGeometry: .height is now depreciated. Please use .depth instead' ); // @deprecated, r163\n\n\t\t\t}\n\n\t\t\tparameters.depth = parameters.depth !== undefined ?\n\t\t\t\tparameters.depth : parameters.height !== undefined ?\n\t\t\t\t\tparameters.height : 50;\n\n\t\t\t// defaults\n\n\t\t\tif ( parameters.bevelThickness === undefined ) parameters.bevelThickness = 10;\n\t\t\tif ( parameters.bevelSize === undefined ) parameters.bevelSize = 8;\n\t\t\tif ( parameters.bevelEnabled === undefined ) parameters.bevelEnabled = false;\n\n\t\t\tsuper( shapes, parameters );\n\n\t\t}\n\n\t\tthis.type = 'TextGeometry';\n\n\t}\n\n}\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2dlb21ldHJpZXMvVGV4dEdlb21ldHJ5LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSWU7O0FBRWYsMkJBQTJCLGtEQUFlOztBQUUxQyxvQ0FBb0M7O0FBRXBDOztBQUVBOztBQUVBLFlBQVk7O0FBRVosSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQSxpR0FBaUc7O0FBRWpHOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUd3QiIsInNvdXJjZXMiOlsiL1VzZXJzL2FqY2hhZGhhL0lkZWFQcm9qZWN0cy9zcmMvQUpQb3J0Zm9saW8vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9nZW9tZXRyaWVzL1RleHRHZW9tZXRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRleHQgPSAzRCBUZXh0XG4gKlxuICogcGFyYW1ldGVycyA9IHtcbiAqICBmb250OiA8VEhSRUUuRm9udD4sIC8vIGZvbnRcbiAqXG4gKiAgc2l6ZTogPGZsb2F0PiwgLy8gc2l6ZSBvZiB0aGUgdGV4dFxuICogIGRlcHRoOiA8ZmxvYXQ+LCAvLyB0aGlja25lc3MgdG8gZXh0cnVkZSB0ZXh0XG4gKiAgY3VydmVTZWdtZW50czogPGludD4sIC8vIG51bWJlciBvZiBwb2ludHMgb24gdGhlIGN1cnZlc1xuICpcbiAqICBiZXZlbEVuYWJsZWQ6IDxib29sPiwgLy8gdHVybiBvbiBiZXZlbFxuICogIGJldmVsVGhpY2tuZXNzOiA8ZmxvYXQ+LCAvLyBob3cgZGVlcCBpbnRvIHRleHQgYmV2ZWwgZ29lc1xuICogIGJldmVsU2l6ZTogPGZsb2F0PiwgLy8gaG93IGZhciBmcm9tIHRleHQgb3V0bGluZSAoaW5jbHVkaW5nIGJldmVsT2Zmc2V0KSBpcyBiZXZlbFxuICogIGJldmVsT2Zmc2V0OiA8ZmxvYXQ+IC8vIGhvdyBmYXIgZnJvbSB0ZXh0IG91dGxpbmUgZG9lcyBiZXZlbCBzdGFydFxuICogfVxuICovXG5cbmltcG9ydCB7XG5cdEV4dHJ1ZGVHZW9tZXRyeVxufSBmcm9tICd0aHJlZSc7XG5cbmNsYXNzIFRleHRHZW9tZXRyeSBleHRlbmRzIEV4dHJ1ZGVHZW9tZXRyeSB7XG5cblx0Y29uc3RydWN0b3IoIHRleHQsIHBhcmFtZXRlcnMgPSB7fSApIHtcblxuXHRcdGNvbnN0IGZvbnQgPSBwYXJhbWV0ZXJzLmZvbnQ7XG5cblx0XHRpZiAoIGZvbnQgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0c3VwZXIoKTsgLy8gZ2VuZXJhdGUgZGVmYXVsdCBleHRydWRlIGdlb21ldHJ5XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zdCBzaGFwZXMgPSBmb250LmdlbmVyYXRlU2hhcGVzKCB0ZXh0LCBwYXJhbWV0ZXJzLnNpemUgKTtcblxuXHRcdFx0Ly8gdHJhbnNsYXRlIHBhcmFtZXRlcnMgdG8gRXh0cnVkZUdlb21ldHJ5IEFQSVxuXG5cdFx0XHRpZiAoIHBhcmFtZXRlcnMuZGVwdGggPT09IHVuZGVmaW5lZCAmJiBwYXJhbWV0ZXJzLmhlaWdodCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLlRleHRHZW9tZXRyeTogLmhlaWdodCBpcyBub3cgZGVwcmVjaWF0ZWQuIFBsZWFzZSB1c2UgLmRlcHRoIGluc3RlYWQnICk7IC8vIEBkZXByZWNhdGVkLCByMTYzXG5cblx0XHRcdH1cblxuXHRcdFx0cGFyYW1ldGVycy5kZXB0aCA9IHBhcmFtZXRlcnMuZGVwdGggIT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdHBhcmFtZXRlcnMuZGVwdGggOiBwYXJhbWV0ZXJzLmhlaWdodCAhPT0gdW5kZWZpbmVkID9cblx0XHRcdFx0XHRwYXJhbWV0ZXJzLmhlaWdodCA6IDUwO1xuXG5cdFx0XHQvLyBkZWZhdWx0c1xuXG5cdFx0XHRpZiAoIHBhcmFtZXRlcnMuYmV2ZWxUaGlja25lc3MgPT09IHVuZGVmaW5lZCApIHBhcmFtZXRlcnMuYmV2ZWxUaGlja25lc3MgPSAxMDtcblx0XHRcdGlmICggcGFyYW1ldGVycy5iZXZlbFNpemUgPT09IHVuZGVmaW5lZCApIHBhcmFtZXRlcnMuYmV2ZWxTaXplID0gODtcblx0XHRcdGlmICggcGFyYW1ldGVycy5iZXZlbEVuYWJsZWQgPT09IHVuZGVmaW5lZCApIHBhcmFtZXRlcnMuYmV2ZWxFbmFibGVkID0gZmFsc2U7XG5cblx0XHRcdHN1cGVyKCBzaGFwZXMsIHBhcmFtZXRlcnMgKTtcblxuXHRcdH1cblxuXHRcdHRoaXMudHlwZSA9ICdUZXh0R2VvbWV0cnknO1xuXG5cdH1cblxufVxuXG5cbmV4cG9ydCB7IFRleHRHZW9tZXRyeSB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/three/examples/jsm/geometries/TextGeometry.js\n"));

/***/ }),

/***/ "./node_modules/three/examples/jsm/loaders/FontLoader.js":
/*!***************************************************************!*\
  !*** ./node_modules/three/examples/jsm/loaders/FontLoader.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Font: () => (/* binding */ Font),\n/* harmony export */   FontLoader: () => (/* binding */ FontLoader)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nclass FontLoader extends three__WEBPACK_IMPORTED_MODULE_0__.Loader {\n\n\tconstructor( manager ) {\n\n\t\tsuper( manager );\n\n\t}\n\n\tload( url, onLoad, onProgress, onError ) {\n\n\t\tconst scope = this;\n\n\t\tconst loader = new three__WEBPACK_IMPORTED_MODULE_0__.FileLoader( this.manager );\n\t\tloader.setPath( this.path );\n\t\tloader.setRequestHeader( this.requestHeader );\n\t\tloader.setWithCredentials( this.withCredentials );\n\t\tloader.load( url, function ( text ) {\n\n\t\t\tconst font = scope.parse( JSON.parse( text ) );\n\n\t\t\tif ( onLoad ) onLoad( font );\n\n\t\t}, onProgress, onError );\n\n\t}\n\n\tparse( json ) {\n\n\t\treturn new Font( json );\n\n\t}\n\n}\n\n//\n\nclass Font {\n\n\tconstructor( data ) {\n\n\t\tthis.isFont = true;\n\n\t\tthis.type = 'Font';\n\n\t\tthis.data = data;\n\n\t}\n\n\tgenerateShapes( text, size = 100 ) {\n\n\t\tconst shapes = [];\n\t\tconst paths = createPaths( text, size, this.data );\n\n\t\tfor ( let p = 0, pl = paths.length; p < pl; p ++ ) {\n\n\t\t\tshapes.push( ...paths[ p ].toShapes() );\n\n\t\t}\n\n\t\treturn shapes;\n\n\t}\n\n}\n\nfunction createPaths( text, size, data ) {\n\n\tconst chars = Array.from( text );\n\tconst scale = size / data.resolution;\n\tconst line_height = ( data.boundingBox.yMax - data.boundingBox.yMin + data.underlineThickness ) * scale;\n\n\tconst paths = [];\n\n\tlet offsetX = 0, offsetY = 0;\n\n\tfor ( let i = 0; i < chars.length; i ++ ) {\n\n\t\tconst char = chars[ i ];\n\n\t\tif ( char === '\\n' ) {\n\n\t\t\toffsetX = 0;\n\t\t\toffsetY -= line_height;\n\n\t\t} else {\n\n\t\t\tconst ret = createPath( char, scale, offsetX, offsetY, data );\n\t\t\toffsetX += ret.offsetX;\n\t\t\tpaths.push( ret.path );\n\n\t\t}\n\n\t}\n\n\treturn paths;\n\n}\n\nfunction createPath( char, scale, offsetX, offsetY, data ) {\n\n\tconst glyph = data.glyphs[ char ] || data.glyphs[ '?' ];\n\n\tif ( ! glyph ) {\n\n\t\tconsole.error( 'THREE.Font: character \"' + char + '\" does not exists in font family ' + data.familyName + '.' );\n\n\t\treturn;\n\n\t}\n\n\tconst path = new three__WEBPACK_IMPORTED_MODULE_0__.ShapePath();\n\n\tlet x, y, cpx, cpy, cpx1, cpy1, cpx2, cpy2;\n\n\tif ( glyph.o ) {\n\n\t\tconst outline = glyph._cachedOutline || ( glyph._cachedOutline = glyph.o.split( ' ' ) );\n\n\t\tfor ( let i = 0, l = outline.length; i < l; ) {\n\n\t\t\tconst action = outline[ i ++ ];\n\n\t\t\tswitch ( action ) {\n\n\t\t\t\tcase 'm': // moveTo\n\n\t\t\t\t\tx = outline[ i ++ ] * scale + offsetX;\n\t\t\t\t\ty = outline[ i ++ ] * scale + offsetY;\n\n\t\t\t\t\tpath.moveTo( x, y );\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'l': // lineTo\n\n\t\t\t\t\tx = outline[ i ++ ] * scale + offsetX;\n\t\t\t\t\ty = outline[ i ++ ] * scale + offsetY;\n\n\t\t\t\t\tpath.lineTo( x, y );\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'q': // quadraticCurveTo\n\n\t\t\t\t\tcpx = outline[ i ++ ] * scale + offsetX;\n\t\t\t\t\tcpy = outline[ i ++ ] * scale + offsetY;\n\t\t\t\t\tcpx1 = outline[ i ++ ] * scale + offsetX;\n\t\t\t\t\tcpy1 = outline[ i ++ ] * scale + offsetY;\n\n\t\t\t\t\tpath.quadraticCurveTo( cpx1, cpy1, cpx, cpy );\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 'b': // bezierCurveTo\n\n\t\t\t\t\tcpx = outline[ i ++ ] * scale + offsetX;\n\t\t\t\t\tcpy = outline[ i ++ ] * scale + offsetY;\n\t\t\t\t\tcpx1 = outline[ i ++ ] * scale + offsetX;\n\t\t\t\t\tcpy1 = outline[ i ++ ] * scale + offsetY;\n\t\t\t\t\tcpx2 = outline[ i ++ ] * scale + offsetX;\n\t\t\t\t\tcpy2 = outline[ i ++ ] * scale + offsetY;\n\n\t\t\t\t\tpath.bezierCurveTo( cpx1, cpy1, cpx2, cpy2, cpx, cpy );\n\n\t\t\t\t\tbreak;\n\n\t\t\t}\n\n\t\t}\n\n\t}\n\n\treturn { offsetX: glyph.ha * scale, path: path };\n\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvRm9udExvYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFJZTs7QUFFZix5QkFBeUIseUNBQU07O0FBRS9COztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHFCQUFxQiw2Q0FBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsc0NBQXNDLFFBQVE7O0FBRTlDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxrQkFBa0Isa0JBQWtCOztBQUVwQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGtCQUFrQiw0Q0FBUzs7QUFFM0I7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXVDLE9BQU87O0FBRTlDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsVUFBVTs7QUFFVjs7QUFFNEIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hamNoYWRoYS9JZGVhUHJvamVjdHMvc3JjL0FKUG9ydGZvbGlvL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9Gb250TG9hZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEZpbGVMb2FkZXIsXG5cdExvYWRlcixcblx0U2hhcGVQYXRoXG59IGZyb20gJ3RocmVlJztcblxuY2xhc3MgRm9udExvYWRlciBleHRlbmRzIExvYWRlciB7XG5cblx0Y29uc3RydWN0b3IoIG1hbmFnZXIgKSB7XG5cblx0XHRzdXBlciggbWFuYWdlciApO1xuXG5cdH1cblxuXHRsb2FkKCB1cmwsIG9uTG9hZCwgb25Qcm9ncmVzcywgb25FcnJvciApIHtcblxuXHRcdGNvbnN0IHNjb3BlID0gdGhpcztcblxuXHRcdGNvbnN0IGxvYWRlciA9IG5ldyBGaWxlTG9hZGVyKCB0aGlzLm1hbmFnZXIgKTtcblx0XHRsb2FkZXIuc2V0UGF0aCggdGhpcy5wYXRoICk7XG5cdFx0bG9hZGVyLnNldFJlcXVlc3RIZWFkZXIoIHRoaXMucmVxdWVzdEhlYWRlciApO1xuXHRcdGxvYWRlci5zZXRXaXRoQ3JlZGVudGlhbHMoIHRoaXMud2l0aENyZWRlbnRpYWxzICk7XG5cdFx0bG9hZGVyLmxvYWQoIHVybCwgZnVuY3Rpb24gKCB0ZXh0ICkge1xuXG5cdFx0XHRjb25zdCBmb250ID0gc2NvcGUucGFyc2UoIEpTT04ucGFyc2UoIHRleHQgKSApO1xuXG5cdFx0XHRpZiAoIG9uTG9hZCApIG9uTG9hZCggZm9udCApO1xuXG5cdFx0fSwgb25Qcm9ncmVzcywgb25FcnJvciApO1xuXG5cdH1cblxuXHRwYXJzZSgganNvbiApIHtcblxuXHRcdHJldHVybiBuZXcgRm9udCgganNvbiApO1xuXG5cdH1cblxufVxuXG4vL1xuXG5jbGFzcyBGb250IHtcblxuXHRjb25zdHJ1Y3RvciggZGF0YSApIHtcblxuXHRcdHRoaXMuaXNGb250ID0gdHJ1ZTtcblxuXHRcdHRoaXMudHlwZSA9ICdGb250JztcblxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cblx0fVxuXG5cdGdlbmVyYXRlU2hhcGVzKCB0ZXh0LCBzaXplID0gMTAwICkge1xuXG5cdFx0Y29uc3Qgc2hhcGVzID0gW107XG5cdFx0Y29uc3QgcGF0aHMgPSBjcmVhdGVQYXRocyggdGV4dCwgc2l6ZSwgdGhpcy5kYXRhICk7XG5cblx0XHRmb3IgKCBsZXQgcCA9IDAsIHBsID0gcGF0aHMubGVuZ3RoOyBwIDwgcGw7IHAgKysgKSB7XG5cblx0XHRcdHNoYXBlcy5wdXNoKCAuLi5wYXRoc1sgcCBdLnRvU2hhcGVzKCkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBzaGFwZXM7XG5cblx0fVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhdGhzKCB0ZXh0LCBzaXplLCBkYXRhICkge1xuXG5cdGNvbnN0IGNoYXJzID0gQXJyYXkuZnJvbSggdGV4dCApO1xuXHRjb25zdCBzY2FsZSA9IHNpemUgLyBkYXRhLnJlc29sdXRpb247XG5cdGNvbnN0IGxpbmVfaGVpZ2h0ID0gKCBkYXRhLmJvdW5kaW5nQm94LnlNYXggLSBkYXRhLmJvdW5kaW5nQm94LnlNaW4gKyBkYXRhLnVuZGVybGluZVRoaWNrbmVzcyApICogc2NhbGU7XG5cblx0Y29uc3QgcGF0aHMgPSBbXTtcblxuXHRsZXQgb2Zmc2V0WCA9IDAsIG9mZnNldFkgPSAwO1xuXG5cdGZvciAoIGxldCBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdGNvbnN0IGNoYXIgPSBjaGFyc1sgaSBdO1xuXG5cdFx0aWYgKCBjaGFyID09PSAnXFxuJyApIHtcblxuXHRcdFx0b2Zmc2V0WCA9IDA7XG5cdFx0XHRvZmZzZXRZIC09IGxpbmVfaGVpZ2h0O1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc3QgcmV0ID0gY3JlYXRlUGF0aCggY2hhciwgc2NhbGUsIG9mZnNldFgsIG9mZnNldFksIGRhdGEgKTtcblx0XHRcdG9mZnNldFggKz0gcmV0Lm9mZnNldFg7XG5cdFx0XHRwYXRocy5wdXNoKCByZXQucGF0aCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gcGF0aHM7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlUGF0aCggY2hhciwgc2NhbGUsIG9mZnNldFgsIG9mZnNldFksIGRhdGEgKSB7XG5cblx0Y29uc3QgZ2x5cGggPSBkYXRhLmdseXBoc1sgY2hhciBdIHx8IGRhdGEuZ2x5cGhzWyAnPycgXTtcblxuXHRpZiAoICEgZ2x5cGggKSB7XG5cblx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuRm9udDogY2hhcmFjdGVyIFwiJyArIGNoYXIgKyAnXCIgZG9lcyBub3QgZXhpc3RzIGluIGZvbnQgZmFtaWx5ICcgKyBkYXRhLmZhbWlseU5hbWUgKyAnLicgKTtcblxuXHRcdHJldHVybjtcblxuXHR9XG5cblx0Y29uc3QgcGF0aCA9IG5ldyBTaGFwZVBhdGgoKTtcblxuXHRsZXQgeCwgeSwgY3B4LCBjcHksIGNweDEsIGNweTEsIGNweDIsIGNweTI7XG5cblx0aWYgKCBnbHlwaC5vICkge1xuXG5cdFx0Y29uc3Qgb3V0bGluZSA9IGdseXBoLl9jYWNoZWRPdXRsaW5lIHx8ICggZ2x5cGguX2NhY2hlZE91dGxpbmUgPSBnbHlwaC5vLnNwbGl0KCAnICcgKSApO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwLCBsID0gb3V0bGluZS5sZW5ndGg7IGkgPCBsOyApIHtcblxuXHRcdFx0Y29uc3QgYWN0aW9uID0gb3V0bGluZVsgaSArKyBdO1xuXG5cdFx0XHRzd2l0Y2ggKCBhY3Rpb24gKSB7XG5cblx0XHRcdFx0Y2FzZSAnbSc6IC8vIG1vdmVUb1xuXG5cdFx0XHRcdFx0eCA9IG91dGxpbmVbIGkgKysgXSAqIHNjYWxlICsgb2Zmc2V0WDtcblx0XHRcdFx0XHR5ID0gb3V0bGluZVsgaSArKyBdICogc2NhbGUgKyBvZmZzZXRZO1xuXG5cdFx0XHRcdFx0cGF0aC5tb3ZlVG8oIHgsIHkgKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgJ2wnOiAvLyBsaW5lVG9cblxuXHRcdFx0XHRcdHggPSBvdXRsaW5lWyBpICsrIF0gKiBzY2FsZSArIG9mZnNldFg7XG5cdFx0XHRcdFx0eSA9IG91dGxpbmVbIGkgKysgXSAqIHNjYWxlICsgb2Zmc2V0WTtcblxuXHRcdFx0XHRcdHBhdGgubGluZVRvKCB4LCB5ICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdxJzogLy8gcXVhZHJhdGljQ3VydmVUb1xuXG5cdFx0XHRcdFx0Y3B4ID0gb3V0bGluZVsgaSArKyBdICogc2NhbGUgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdGNweSA9IG91dGxpbmVbIGkgKysgXSAqIHNjYWxlICsgb2Zmc2V0WTtcblx0XHRcdFx0XHRjcHgxID0gb3V0bGluZVsgaSArKyBdICogc2NhbGUgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdGNweTEgPSBvdXRsaW5lWyBpICsrIF0gKiBzY2FsZSArIG9mZnNldFk7XG5cblx0XHRcdFx0XHRwYXRoLnF1YWRyYXRpY0N1cnZlVG8oIGNweDEsIGNweTEsIGNweCwgY3B5ICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlICdiJzogLy8gYmV6aWVyQ3VydmVUb1xuXG5cdFx0XHRcdFx0Y3B4ID0gb3V0bGluZVsgaSArKyBdICogc2NhbGUgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdGNweSA9IG91dGxpbmVbIGkgKysgXSAqIHNjYWxlICsgb2Zmc2V0WTtcblx0XHRcdFx0XHRjcHgxID0gb3V0bGluZVsgaSArKyBdICogc2NhbGUgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdGNweTEgPSBvdXRsaW5lWyBpICsrIF0gKiBzY2FsZSArIG9mZnNldFk7XG5cdFx0XHRcdFx0Y3B4MiA9IG91dGxpbmVbIGkgKysgXSAqIHNjYWxlICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRjcHkyID0gb3V0bGluZVsgaSArKyBdICogc2NhbGUgKyBvZmZzZXRZO1xuXG5cdFx0XHRcdFx0cGF0aC5iZXppZXJDdXJ2ZVRvKCBjcHgxLCBjcHkxLCBjcHgyLCBjcHkyLCBjcHgsIGNweSApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIHsgb2Zmc2V0WDogZ2x5cGguaGEgKiBzY2FsZSwgcGF0aDogcGF0aCB9O1xuXG59XG5cbmV4cG9ydCB7IEZvbnRMb2FkZXIsIEZvbnQgfTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/three/examples/jsm/loaders/FontLoader.js\n"));

/***/ })

});