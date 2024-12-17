/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/lenis.js":
/*!**************************!*\
  !*** ./src/lib/lenis.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LenisSetup: () => (/* binding */ LenisSetup),\n/* harmony export */   getLenis: () => (/* binding */ getLenis)\n/* harmony export */ });\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @studio-freight/lenis */ \"@studio-freight/lenis\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__]);\n_studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nlet lenis = null;\nfunction LenisSetup() {\n    if (!lenis) {\n        lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            duration: 1.2,\n            easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),\n            smoothWheel: true,\n            smoothTouch: false\n        });\n        function raf(time) {\n            lenis.raf(time);\n            requestAnimationFrame(raf);\n        }\n        requestAnimationFrame(raf);\n    }\n}\nfunction getLenis() {\n    return lenis;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2xlbmlzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QztBQUV6QyxJQUFJQyxRQUFRO0FBRUwsU0FBU0M7SUFDWixJQUFJLENBQUNELE9BQU87UUFDUkEsUUFBUSxJQUFJRCw2REFBS0EsQ0FBQztZQUNkRyxVQUFVO1lBQ1ZDLFFBQVEsQ0FBQ0MsSUFBTUMsS0FBS0MsR0FBRyxDQUFDLEdBQUcsUUFBUUQsS0FBS0UsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLSDtZQUNyREksYUFBYTtZQUNiQyxhQUFhO1FBQ2pCO1FBRUEsU0FBU0MsSUFBSUMsSUFBSTtZQUNiWCxNQUFNVSxHQUFHLENBQUNDO1lBQ1ZDLHNCQUFzQkY7UUFDMUI7UUFFQUUsc0JBQXNCRjtJQUMxQjtBQUNKO0FBRU8sU0FBU0c7SUFDWixPQUFPYjtBQUNYIiwic291cmNlcyI6WyIvVXNlcnMvYWpjaGFkaGEvSWRlYVByb2plY3RzL3NyYy9BSlBvcnRmb2xpby9zcmMvbGliL2xlbmlzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZW5pcyBmcm9tICdAc3R1ZGlvLWZyZWlnaHQvbGVuaXMnXG5cbmxldCBsZW5pcyA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBMZW5pc1NldHVwKCkge1xuICAgIGlmICghbGVuaXMpIHtcbiAgICAgICAgbGVuaXMgPSBuZXcgTGVuaXMoe1xuICAgICAgICAgICAgZHVyYXRpb246IDEuMixcbiAgICAgICAgICAgIGVhc2luZzogKHQpID0+IE1hdGgubWluKDEsIDEuMDAxIC0gTWF0aC5wb3coMiwgLTEwICogdCkpLFxuICAgICAgICAgICAgc21vb3RoV2hlZWw6IHRydWUsXG4gICAgICAgICAgICBzbW9vdGhUb3VjaDogZmFsc2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJhZih0aW1lKSB7XG4gICAgICAgICAgICBsZW5pcy5yYWYodGltZSk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExlbmlzKCkge1xuICAgIHJldHVybiBsZW5pcztcbn1cbiJdLCJuYW1lcyI6WyJMZW5pcyIsImxlbmlzIiwiTGVuaXNTZXR1cCIsImR1cmF0aW9uIiwiZWFzaW5nIiwidCIsIk1hdGgiLCJtaW4iLCJwb3ciLCJzbW9vdGhXaGVlbCIsInNtb290aFRvdWNoIiwicmFmIiwidGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdldExlbmlzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/lenis.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_animations_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/animations.css */ \"./src/styles/animations.css\");\n/* harmony import */ var _styles_animations_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_animations_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_lenis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/lenis */ \"./src/lib/lenis.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_lenis__WEBPACK_IMPORTED_MODULE_4__]);\n_lib_lenis__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            // Initialize Lenis for smooth scrolling\n            (0,_lib_lenis__WEBPACK_IMPORTED_MODULE_4__.LenisSetup)();\n        }\n    }[\"MyApp.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/ajchadha/IdeaProjects/src/AJPortfolio/src/pages/_app.js\",\n        lineNumber: 12,\n        columnNumber: 12\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNHO0FBQ0M7QUFDUTtBQUUzQixTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xESixnREFBU0E7MkJBQUM7WUFDTix3Q0FBd0M7WUFDeENDLHNEQUFVQTtRQUNkOzBCQUFHLEVBQUU7SUFFTCxxQkFBTyw4REFBQ0U7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDbkMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hamNoYWRoYS9JZGVhUHJvamVjdHMvc3JjL0FKUG9ydGZvbGlvL3NyYy9wYWdlcy9fYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvYW5pbWF0aW9ucy5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMZW5pc1NldHVwIH0gZnJvbSAnLi4vbGliL2xlbmlzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBMZW5pcyBmb3Igc21vb3RoIHNjcm9sbGluZ1xuICAgICAgICBMZW5pc1NldHVwKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJMZW5pc1NldHVwIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/animations.css":
/*!***********************************!*\
  !*** ./src/styles/animations.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@studio-freight/lenis":
/*!****************************************!*\
  !*** external "@studio-freight/lenis" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@studio-freight/lenis");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();