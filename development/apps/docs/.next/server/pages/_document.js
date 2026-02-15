"use strict";
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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "(pages-dir-node)/./src/pages/_document.jsx":
/*!*********************************!*\
  !*** ./src/pages/_document.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"(pages-dir-node)/../../node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst themeScript = `\n  let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)')\n\n  function updateTheme(theme) {\n    theme = theme ?? window.localStorage.theme ?? 'system'\n\n    if (theme === 'dark' || (theme === 'system' && isDarkMode.matches)) {\n      document.documentElement.classList.add('dark')\n    } else if (theme === 'light' || (theme === 'system' && !isDarkMode.matches)) {\n      document.documentElement.classList.remove('dark')\n    }\n\n    return theme\n  }\n\n  function updateThemeWithoutTransitions(theme) {\n    updateTheme(theme)\n    document.documentElement.classList.add('[&_*]:!transition-none')\n    window.setTimeout(() => {\n      document.documentElement.classList.remove('[&_*]:!transition-none')\n    }, 0)\n  }\n\n  document.documentElement.setAttribute('data-theme', updateTheme())\n\n  new MutationObserver(([{ oldValue }]) => {\n    let newValue = document.documentElement.getAttribute('data-theme')\n    if (newValue !== oldValue) {\n      try {\n        window.localStorage.setItem('theme', newValue)\n      } catch {}\n      updateThemeWithoutTransitions(newValue)\n    }\n  }).observe(document.documentElement, { attributeFilter: ['data-theme'], attributeOldValue: true })\n\n  isDarkMode.addEventListener('change', () => updateThemeWithoutTransitions())\n`;\nfunction Document() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        className: \"antialiased [font-feature-settings:'ss01']\",\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                    dangerouslySetInnerHTML: {\n                        __html: themeScript\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/brian/Projects/Repositories/pixeloven.com/apps/docs/src/pages/_document.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/brian/Projects/Repositories/pixeloven.com/apps/docs/src/pages/_document.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                className: \"bg-white dark:bg-slate-900\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                        fileName: \"/home/brian/Projects/Repositories/pixeloven.com/apps/docs/src/pages/_document.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                        fileName: \"/home/brian/Projects/Repositories/pixeloven.com/apps/docs/src/pages/_document.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/brian/Projects/Repositories/pixeloven.com/apps/docs/src/pages/_document.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/brian/Projects/Repositories/pixeloven.com/apps/docs/src/pages/_document.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fZG9jdW1lbnQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0RDtBQUU1RCxNQUFNSSxjQUFjLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DckIsQ0FBQztBQUVjLFNBQVNDO0lBQ3RCLHFCQUNFLDhEQUFDSiwrQ0FBSUE7UUFBQ0ssV0FBVTtRQUE2Q0MsTUFBSzs7MEJBQ2hFLDhEQUFDUCwrQ0FBSUE7MEJBQ0gsNEVBQUNRO29CQUFPQyx5QkFBeUI7d0JBQUVDLFFBQVFOO29CQUFZOzs7Ozs7Ozs7OzswQkFFekQsOERBQUNPO2dCQUFLTCxXQUFVOztrQ0FDZCw4REFBQ0osK0NBQUlBOzs7OztrQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluQiIsInNvdXJjZXMiOlsiL2hvbWUvYnJpYW4vUHJvamVjdHMvUmVwb3NpdG9yaWVzL3BpeGVsb3Zlbi5jb20vYXBwcy9kb2NzL3NyYy9wYWdlcy9fZG9jdW1lbnQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWQsIEh0bWwsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50J1xuXG5jb25zdCB0aGVtZVNjcmlwdCA9IGBcbiAgbGV0IGlzRGFya01vZGUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXG5cbiAgZnVuY3Rpb24gdXBkYXRlVGhlbWUodGhlbWUpIHtcbiAgICB0aGVtZSA9IHRoZW1lID8/IHdpbmRvdy5sb2NhbFN0b3JhZ2UudGhlbWUgPz8gJ3N5c3RlbSdcblxuICAgIGlmICh0aGVtZSA9PT0gJ2RhcmsnIHx8ICh0aGVtZSA9PT0gJ3N5c3RlbScgJiYgaXNEYXJrTW9kZS5tYXRjaGVzKSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKVxuICAgIH0gZWxzZSBpZiAodGhlbWUgPT09ICdsaWdodCcgfHwgKHRoZW1lID09PSAnc3lzdGVtJyAmJiAhaXNEYXJrTW9kZS5tYXRjaGVzKSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGVtZVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGhlbWVXaXRob3V0VHJhbnNpdGlvbnModGhlbWUpIHtcbiAgICB1cGRhdGVUaGVtZSh0aGVtZSlcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnWyZfKl06IXRyYW5zaXRpb24tbm9uZScpXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ1smXypdOiF0cmFuc2l0aW9uLW5vbmUnKVxuICAgIH0sIDApXG4gIH1cblxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgdXBkYXRlVGhlbWUoKSlcblxuICBuZXcgTXV0YXRpb25PYnNlcnZlcigoW3sgb2xkVmFsdWUgfV0pID0+IHtcbiAgICBsZXQgbmV3VmFsdWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJylcbiAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgbmV3VmFsdWUpXG4gICAgICB9IGNhdGNoIHt9XG4gICAgICB1cGRhdGVUaGVtZVdpdGhvdXRUcmFuc2l0aW9ucyhuZXdWYWx1ZSlcbiAgICB9XG4gIH0pLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGF0dHJpYnV0ZUZpbHRlcjogWydkYXRhLXRoZW1lJ10sIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlIH0pXG5cbiAgaXNEYXJrTW9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB1cGRhdGVUaGVtZVdpdGhvdXRUcmFuc2l0aW9ucygpKVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2N1bWVudCgpIHtcbiAgcmV0dXJuIChcbiAgICA8SHRtbCBjbGFzc05hbWU9XCJhbnRpYWxpYXNlZCBbZm9udC1mZWF0dXJlLXNldHRpbmdzOidzczAxJ11cIiBsYW5nPVwiZW5cIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8c2NyaXB0IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhlbWVTY3JpcHQgfX0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6Ymctc2xhdGUtOTAwXCI+XG4gICAgICAgIDxNYWluIC8+XG4gICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9IdG1sPlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkh0bWwiLCJNYWluIiwiTmV4dFNjcmlwdCIsInRoZW1lU2NyaXB0IiwiRG9jdW1lbnQiLCJjbGFzc05hbWUiLCJsYW5nIiwic2NyaXB0IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJib2R5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_document.jsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_document.jsx")));
module.exports = __webpack_exports__;

})();