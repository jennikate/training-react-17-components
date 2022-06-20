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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\nvar _this = undefined;\n\n\nvar IndexPage = function() {\n    var _this1 = _this;\n    // clean code principle\n    // destructure the import and only bring in what you need\n    // this makes it clearer what the app is using for this page\n    // app uses bootstrap (it's not what we're learning here so this is faster)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                var id = speaker.id, bio = speaker.bio, first = speaker.first, last = speaker.last, favorite = speaker.favorite, twitterHandle = speaker.twitterHandle, company = speaker.company, sessions = speaker.sessions;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card card-height p-4 mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"contain-fit\",\n                                        src: \"/images/speaker-\".concat(id, \".jpg\"),\n                                        width: \"300\",\n                                        alt: \"\".concat(first, \" \").concat(last)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jennikate/dev/training/react-17-components-course/pages/index.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 19\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jennikate/dev/training/react-17-components-course/pages/index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 17\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"speaker-info\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex justify-content-between mb-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-truncate w-200\",\n                                                children: [\n                                                    first,\n                                                    \" \",\n                                                    last\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/jennikate/dev/training/react-17-components-course/pages/index.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jennikate/dev/training/react-17-components-course/pages/index.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    bio,\n                                                    \" \",\n                                                    company,\n                                                    \" \",\n                                                    twitterHandle,\n                                                    \" \",\n                                                    favorite\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/jennikate/dev/training/react-17-components-course/pages/index.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jennikate/dev/training/react-17-components-course/pages/index.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jennikate/dev/training/react-17-components-course/pages/index.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 17\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jennikate/dev/training/react-17-components-course/pages/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 15\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"sessionBox card h-250\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"session w-100\",\n                                children: [\n                                    sessions[0].title,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: [\n                                            \"Room: \",\n                                            sessions[0].room.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jennikate/dev/training/react-17-components-course/pages/index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 19\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jennikate/dev/training/react-17-components-course/pages/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/jennikate/dev/training/react-17-components-course/pages/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jennikate/dev/training/react-17-components-course/pages/index.js\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/jennikate/dev/training/react-17-components-course/pages/index.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/jennikate/dev/training/react-17-components-course/pages/index.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQXNDO0FBRXRDLElBQU1DLFNBQVMsR0FBRyxXQUFNOztJQUV0Qix1QkFBdUI7SUFDdkIseURBQXlEO0lBQ3pELDREQUE0RDtJQUc1RCwyRUFBMkU7SUFDM0UscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHlCQUF5QjtrQkFDdEMsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLEtBQUs7c0JBQ2pCSCxrREFBUSxDQUFDLFNBQUNLLE9BQU8sRUFBSztnQkFDckIsSUFDRUMsRUFBRSxHQVFBRCxPQUFPLENBUlRDLEVBQUUsRUFDRkMsR0FBRyxHQU9ERixPQUFPLENBUFRFLEdBQUcsRUFDSEMsS0FBSyxHQU1ISCxPQUFPLENBTlRHLEtBQUssRUFDTEMsSUFBSSxHQUtGSixPQUFPLENBTFRJLElBQUksRUFDSkMsUUFBUSxHQUlOTCxPQUFPLENBSlRLLFFBQVEsRUFDUkMsYUFBYSxHQUdYTixPQUFPLENBSFRNLGFBQWEsRUFDYkMsT0FBTyxHQUVMUCxPQUFPLENBRlRPLE9BQU8sRUFDUEMsUUFBUSxHQUNOUixPQUFPLENBRFRRLFFBQVE7Z0JBR1YscUJBQ0UsOERBQUNYLEtBQUc7b0JBQUNDLFNBQVMsRUFBQywyREFBMkQ7O3NDQUN4RSw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLDJCQUEyQjs7OENBQ3hDLDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsNkVBQTZFOzhDQUMxRiw0RUFBQ1csS0FBRzt3Q0FDRlgsU0FBUyxFQUFDLGFBQWE7d0NBQ3ZCWSxHQUFHLEVBQUUsa0JBQWlCLENBQUssTUFBSSxDQUFQVCxFQUFFLEVBQUMsTUFBSSxDQUFDO3dDQUNoQ1UsS0FBSyxFQUFDLEtBQUs7d0NBQ1hDLEdBQUcsRUFBRSxFQUFDLENBQVdSLE1BQUksQ0FBYkQsS0FBSyxFQUFDLEdBQUMsQ0FBTyxRQUFMQyxJQUFJLENBQUU7Ozs7OzhDQUN2Qjs7Ozs7MENBQ0U7OENBQ04sOERBQUNQLEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxjQUFjOztzREFDM0IsOERBQUNELEtBQUc7NENBQUNDLFNBQVMsRUFBQyxxQ0FBcUM7c0RBQ2xELDRFQUFDZSxJQUFFO2dEQUFDZixTQUFTLEVBQUMscUJBQXFCOztvREFDaENLLEtBQUs7b0RBQUMsR0FBQztvREFBQ0MsSUFBSTs7Ozs7O3NEQUNWOzs7OztrREFDRDtzREFDTiw4REFBQ1AsS0FBRztzREFDRiw0RUFBQ2lCLEdBQUM7O29EQUNDWixHQUFHO29EQUFDLEdBQUM7b0RBQUNLLE9BQU87b0RBQUMsR0FBQztvREFBQ0QsYUFBYTtvREFBQyxHQUFDO29EQUFDRCxRQUFROzs7Ozs7c0RBQ3ZDOzs7OztrREFDQTs7Ozs7OzBDQUNGOzs7Ozs7a0NBQ0Y7c0NBQ04sOERBQUNSLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyx1QkFBdUI7c0NBQ3BDLDRFQUFDaUIsTUFBSTtnQ0FBQ2pCLFNBQVMsRUFBQyxlQUFlOztvQ0FDNUJVLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ1EsS0FBSztvQ0FBRSxHQUFHO2tEQUN2Qiw4REFBQ0MsUUFBTTs7NENBQUMsUUFBTTs0Q0FBQ1QsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDVSxJQUFJLENBQUNDLElBQUk7Ozs7Ozs4Q0FBVTs7Ozs7O3NDQUN6Qzs7Ozs7a0NBQ0g7Ozs7OzswQkFDRixDQUNOO2FBQ0gsQ0FBQzs7Ozs7aUJBQ0U7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0FBM0RLdkIsS0FBQUEsU0FBUztBQTREZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4uL1NwZWFrZXJEYXRhJztcblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuXG4gIC8vIGNsZWFuIGNvZGUgcHJpbmNpcGxlXG4gIC8vIGRlc3RydWN0dXJlIHRoZSBpbXBvcnQgYW5kIG9ubHkgYnJpbmcgaW4gd2hhdCB5b3UgbmVlZFxuICAvLyB0aGlzIG1ha2VzIGl0IGNsZWFyZXIgd2hhdCB0aGUgYXBwIGlzIHVzaW5nIGZvciB0aGlzIHBhZ2VcblxuXG4gIC8vIGFwcCB1c2VzIGJvb3RzdHJhcCAoaXQncyBub3Qgd2hhdCB3ZSdyZSBsZWFybmluZyBoZXJlIHNvIHRoaXMgaXMgZmFzdGVyKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIHtkYXRhLm1hcCgoc3BlYWtlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgYmlvLFxuICAgICAgICAgICAgZmlyc3QsXG4gICAgICAgICAgICBsYXN0LFxuICAgICAgICAgICAgZmF2b3JpdGUsXG4gICAgICAgICAgICB0d2l0dGVySGFuZGxlLFxuICAgICAgICAgICAgY29tcGFueSxcbiAgICAgICAgICAgIHNlc3Npb25zLFxuICAgICAgICAgIH0gPSBzcGVha2VyO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAge2Jpb30ge2NvbXBhbnl9IHt0d2l0dGVySGFuZGxlfSB7ZmF2b3JpdGV9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XG4gICAgICAgICAgICAgICAgICB7c2Vzc2lvbnNbMF0udGl0bGV9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Sb29tOiB7c2Vzc2lvbnNbMF0ucm9vbS5uYW1lfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXSwibmFtZXMiOlsiZGF0YSIsIkluZGV4UGFnZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInNwZWFrZXIiLCJpZCIsImJpbyIsImZpcnN0IiwibGFzdCIsImZhdm9yaXRlIiwidHdpdHRlckhhbmRsZSIsImNvbXBhbnkiLCJzZXNzaW9ucyIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiaDMiLCJwIiwic3BhbiIsInRpdGxlIiwic3Ryb25nIiwicm9vbSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});