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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HeroSection */ \"./src/components/HeroSection.js\");\n/* harmony import */ var _components_RotatingSphere__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RotatingSphere */ \"./src/components/RotatingSphere.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const gsapRegistered = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            if (true) {\n                // Dynamically require GSAP on the client side\n                const gsap = (__webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\").gsap); // Explicitly grab gsap namespace\n                const ScrollTrigger = (__webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\").ScrollTrigger);\n                if (!gsapRegistered.current) {\n                    gsap.registerPlugin(ScrollTrigger);\n                    gsapRegistered.current = true;\n                    // Example GSAP animation\n                    gsap.from('.fade-in', {\n                        opacity: 0,\n                        y: 50,\n                        duration: 1,\n                        scrollTrigger: {\n                            trigger: '.fade-in',\n                            start: 'top 80%',\n                            end: 'top 50%',\n                            scrub: true\n                        }\n                    });\n                }\n            }\n        }\n    }[\"Home.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ajchadha/IdeaProjects/src/AJPortfolio/src/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeroSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ajchadha/IdeaProjects/src/AJPortfolio/src/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-20 flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RotatingSphere__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    words: [\n                        'JavaScript',\n                        'React',\n                        'Next.js',\n                        'Three.js',\n                        'GSAP',\n                        'CSS',\n                        'HTML'\n                    ]\n                }, void 0, false, {\n                    fileName: \"/Users/ajchadha/IdeaProjects/src/AJPortfolio/src/pages/index.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ajchadha/IdeaProjects/src/AJPortfolio/src/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fade-in my-20 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-bold\",\n                        children: \"Scroll-triggered Animation Section\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ajchadha/IdeaProjects/src/AJPortfolio/src/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-4\",\n                        children: \"As you scroll, elements fade in, move, or rotate using GSAP & ScrollTrigger.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ajchadha/IdeaProjects/src/AJPortfolio/src/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ajchadha/IdeaProjects/src/AJPortfolio/src/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ajchadha/IdeaProjects/src/AJPortfolio/src/pages/index.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ajchadha/IdeaProjects/src/AJPortfolio/src/pages/index.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"lFWSmhHXR8GC36WyIbz052J821Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDUDtBQUNVO0FBQ007QUFDaEI7QUFFM0IsU0FBU087O0lBQ3BCLE1BQU1DLGlCQUFpQk4sNkNBQU1BLENBQUM7SUFFOUJELGdEQUFTQTswQkFBQztZQUNOLElBQUksSUFBNkIsRUFBRTtnQkFDL0IsOENBQThDO2dCQUM5QyxNQUFNUSxPQUFPQyxzRUFBb0IsRUFBRSxpQ0FBaUM7Z0JBQ3BFLE1BQU1DLGdCQUFnQkQscUdBQTJDO2dCQUVqRSxJQUFJLENBQUNGLGVBQWVJLE9BQU8sRUFBRTtvQkFDekJILEtBQUtJLGNBQWMsQ0FBQ0Y7b0JBQ3BCSCxlQUFlSSxPQUFPLEdBQUc7b0JBRXpCLHlCQUF5QjtvQkFDekJILEtBQUtLLElBQUksQ0FBQyxZQUFZO3dCQUNsQkMsU0FBUzt3QkFDVEMsR0FBRzt3QkFDSEMsVUFBVTt3QkFDVkMsZUFBZTs0QkFDWEMsU0FBUzs0QkFDVEMsT0FBTzs0QkFDUEMsS0FBSzs0QkFDTEMsT0FBTzt3QkFDWDtvQkFDSjtnQkFDSjtZQUNKO1FBQ0o7eUJBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ3JCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNDLCtEQUFXQTs7Ozs7MEJBQ1osOERBQUNtQjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ25CLGtFQUFjQTtvQkFDWG9CLE9BQU87d0JBQUM7d0JBQWM7d0JBQVM7d0JBQVc7d0JBQVk7d0JBQVE7d0JBQU87cUJBQU87Ozs7Ozs7Ozs7OzBCQUlwRiw4REFBQ0Y7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBcUI7Ozs7OztrQ0FDbkMsOERBQUNHO3dCQUFFSCxXQUFVO2tDQUFPOzs7Ozs7Ozs7Ozs7MEJBSXhCLDhEQUFDbEIsMERBQU1BOzs7Ozs7Ozs7OztBQUduQjtHQWhEd0JDO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvYWpjaGFkaGEvSWRlYVByb2plY3RzL3NyYy9BSlBvcnRmb2xpby9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvU2VjdGlvbic7XG5pbXBvcnQgUm90YXRpbmdTcGhlcmUgZnJvbSAnLi4vY29tcG9uZW50cy9Sb3RhdGluZ1NwaGVyZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBnc2FwUmVnaXN0ZXJlZCA9IHVzZVJlZihmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIER5bmFtaWNhbGx5IHJlcXVpcmUgR1NBUCBvbiB0aGUgY2xpZW50IHNpZGVcbiAgICAgICAgICAgIGNvbnN0IGdzYXAgPSByZXF1aXJlKCdnc2FwJykuZ3NhcDsgLy8gRXhwbGljaXRseSBncmFiIGdzYXAgbmFtZXNwYWNlXG4gICAgICAgICAgICBjb25zdCBTY3JvbGxUcmlnZ2VyID0gcmVxdWlyZSgnZ3NhcC9TY3JvbGxUcmlnZ2VyJykuU2Nyb2xsVHJpZ2dlcjtcblxuICAgICAgICAgICAgaWYgKCFnc2FwUmVnaXN0ZXJlZC5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbiAgICAgICAgICAgICAgICBnc2FwUmVnaXN0ZXJlZC5jdXJyZW50ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIEV4YW1wbGUgR1NBUCBhbmltYXRpb25cbiAgICAgICAgICAgICAgICBnc2FwLmZyb20oJy5mYWRlLWluJywge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICB5OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6ICcuZmFkZS1pbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogJ3RvcCA4MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiAndG9wIDUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3J1YjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiPlxuICAgICAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICAgICAgPEhlcm9TZWN0aW9uIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIwIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8Um90YXRpbmdTcGhlcmVcbiAgICAgICAgICAgICAgICAgICAgd29yZHM9e1snSmF2YVNjcmlwdCcsICdSZWFjdCcsICdOZXh0LmpzJywgJ1RocmVlLmpzJywgJ0dTQVAnLCAnQ1NTJywgJ0hUTUwnXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFkZS1pbiBteS0yMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5TY3JvbGwtdHJpZ2dlcmVkIEFuaW1hdGlvbiBTZWN0aW9uPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIEFzIHlvdSBzY3JvbGwsIGVsZW1lbnRzIGZhZGUgaW4sIG1vdmUsIG9yIHJvdGF0ZSB1c2luZyBHU0FQICYgU2Nyb2xsVHJpZ2dlci5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIk5hdkJhciIsIkhlcm9TZWN0aW9uIiwiUm90YXRpbmdTcGhlcmUiLCJGb290ZXIiLCJIb21lIiwiZ3NhcFJlZ2lzdGVyZWQiLCJnc2FwIiwicmVxdWlyZSIsIlNjcm9sbFRyaWdnZXIiLCJjdXJyZW50IiwicmVnaXN0ZXJQbHVnaW4iLCJmcm9tIiwib3BhY2l0eSIsInkiLCJkdXJhdGlvbiIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJzY3J1YiIsImRpdiIsImNsYXNzTmFtZSIsIndvcmRzIiwiaDIiLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});