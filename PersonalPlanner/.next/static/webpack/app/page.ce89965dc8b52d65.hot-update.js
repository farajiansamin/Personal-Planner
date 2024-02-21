"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/Components/GoalCard.tsx":
/*!*************************************!*\
  !*** ./app/Components/GoalCard.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GoalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoalItem */ \"(app-pages-browser)/./app/Components/GoalItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GoalCard(props) {\n    _s();\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [goals, setGoals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Start with an empty array\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGoals = async ()=>{\n            try {\n                const response = await fetch(\"http://127.0.0.1:8000/planner/weekly_goals/\");\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setGoals(data); // Assume data is an array of goal objects\n            } catch (error) {\n                console.error(\"Failed to fetch goals:\", error);\n            }\n        };\n        fetchGoals();\n    }, []);\n    //console.log(goals);\n    function handleChange(event) {\n        setInputText(event.target.value);\n    }\n    function handleClick(event) {\n        event.preventDefault();\n        const newGoal = {\n            title: inputText\n        };\n        fetch(\"http://127.0.0.1:8000/planner/weekly_goals/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newGoal)\n        }).then((response)=>response.json()).then((data)=>{\n            setGoals((prevGoals)=>[\n                    ...prevGoals,\n                    data\n                ]); // Assuming the backend returns the created goal with an id\n            setInputText(\"\");\n        }).catch((error)=>console.error(\"Error adding goal:\", error));\n    }\n    function deleteItem(id) {\n        setGoal((prevGoals)=>{\n            return prevGoals.filter((goals, index)=>{\n                return index !== id;\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        tabIndex: 0,\n        className: \"collapse bg-[#fdf2bf] overflow-visible\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\"\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"collapse-title text-black\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container collapse-content z-30 overflow-visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-70 gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc  \",\n                            children: goals.map((goal, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    id: index,\n                                    text: goal,\n                                    onChecked: deleteItem\n                                }, index, false, {\n                                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 9\n                        }, this),\n                        props.goals,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-actions flex flex-row gap-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onClick: handleClick,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Type here\",\n                                        className: \"input input-sm input-bordered w-full max-w-xs\",\n                                        onChange: handleChange,\n                                        name: \"Goal\",\n                                        value: inputText\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-sm m-1 \",\n                                        children: \"ADD\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(GoalCard, \"fXnIRfSpzza4iIq8f6TLGfF+JOs=\");\n_c = GoalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoalCard);\nvar _c;\n$RefreshReg$(_c, \"GoalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL0dvYWxDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ2pCO0FBSWxDLFNBQVNJLFNBQVNDLEtBQUs7O0lBQ3JCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUMsRUFBRSxHQUFHLDRCQUE0QjtJQUVwRUMsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxhQUFhO1lBQ2pCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQjtnQkFFRixJQUFJLENBQUNELFNBQVNFLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFDQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7Z0JBQ2hDUCxTQUFTTSxPQUFPLDBDQUEwQztZQUM1RCxFQUFFLE9BQU9FLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1lBQzFDO1FBQ0Y7UUFFQVA7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFBcUI7SUFFckIsU0FBU1MsYUFBYUMsS0FBSztRQUN6QmIsYUFBYWEsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ2pDO0lBRUEsU0FBU0MsWUFBWUgsS0FBSztRQUN4QkEsTUFBTUksY0FBYztRQUVwQixNQUFNQyxVQUFVO1lBQ2RDLE9BQU9wQjtRQUdUO1FBRUFNLE1BQU0sK0NBQStDO1lBQ25EZSxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047UUFDdkIsR0FDR08sSUFBSSxDQUFDLENBQUNyQixXQUFhQSxTQUFTSyxJQUFJLElBQ2hDZ0IsSUFBSSxDQUFDLENBQUNqQjtZQUNMTixTQUFTLENBQUN3QixZQUFjO3VCQUFJQTtvQkFBV2xCO2lCQUFLLEdBQUcsMkRBQTJEO1lBQzFHUixhQUFhO1FBQ2YsR0FDQzJCLEtBQUssQ0FBQyxDQUFDakIsUUFBVUMsUUFBUUQsS0FBSyxDQUFDLHNCQUFzQkE7SUFDMUQ7SUFFQSxTQUFTa0IsV0FBV0MsRUFBRTtRQUNwQkMsUUFBUSxDQUFDSjtZQUNQLE9BQU9BLFVBQVVLLE1BQU0sQ0FBQyxDQUFDOUIsT0FBTytCO2dCQUM5QixPQUFPQSxVQUFVSDtZQUNuQjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsVUFBVTtRQUFHQyxXQUFVOzswQkFDMUIsOERBQUNDO2dCQUFNQyxNQUFLOzs7Ozs7MEJBQ1osOERBQUNKO2dCQUFJRSxXQUFVOzBCQUE2QnJDLE1BQU1xQixLQUFLOzs7Ozs7MEJBQ3ZELDhEQUFDYztnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ0Y7b0JBQUlFLFdBQVU7O3NDQUNmLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FDVGxDLE1BQU1zQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTVIsc0JBRWQsOERBQUNwQyxpREFBUUE7b0NBQ1RpQyxJQUFJRztvQ0FDSlMsTUFBTUQ7b0NBRU5FLFdBQVdkO21DQUROSTs7Ozs7Ozs7Ozt3QkFjVmxDLE1BQU1HLEtBQUs7c0NBQ2QsOERBQUNnQzs0QkFBSUUsV0FBVTtzQ0FDYiw0RUFBQ1E7Z0NBQUtDLFNBQVM1Qjs7a0RBQ2IsOERBQUNvQjt3Q0FDQ0MsTUFBSzt3Q0FDTFEsYUFBWTt3Q0FDWlYsV0FBVTt3Q0FDVlcsVUFBVWxDO3dDQUNWbUMsTUFBSzt3Q0FDTGhDLE9BQU9oQjs7Ozs7O2tEQUVULDhEQUFDaUQ7d0NBQU9iLFdBQVU7a0RBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2hEO0dBekdTdEM7S0FBQUE7QUEyR1QsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0NvbXBvbmVudHMvR29hbENhcmQudHN4P2QyMmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdvYWxJdGVtIGZyb20gXCIuL0dvYWxJdGVtXCI7XG5cbmltcG9ydCBHb2FsQ2F0ZWdvcnlDYXJkIGZyb20gXCIuL0dvYWxDYXRlZ29yeUNhcmRcIjtcblxuZnVuY3Rpb24gR29hbENhcmQocHJvcHMpIHtcbiAgY29uc3QgW2lucHV0VGV4dCwgc2V0SW5wdXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZ29hbHMsIHNldEdvYWxzXSA9IHVzZVN0YXRlKFtdKTsgLy8gU3RhcnQgd2l0aCBhbiBlbXB0eSBhcnJheVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hHb2FscyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvcGxhbm5lci93ZWVrbHlfZ29hbHMvXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBva1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRHb2FscyhkYXRhKTsgLy8gQXNzdW1lIGRhdGEgaXMgYW4gYXJyYXkgb2YgZ29hbCBvYmplY3RzXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGdvYWxzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoR29hbHMoKTtcbiAgfSwgW10pO1xuXG4gIC8vY29uc29sZS5sb2coZ29hbHMpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHNldElucHV0VGV4dChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgbmV3R29hbCA9IHtcbiAgICAgIHRpdGxlOiBpbnB1dFRleHQsXG4gICAgICAvLyBBZGQgb3RoZXIgbmVjZXNzYXJ5IGZpZWxkcyB3aXRoIGRlZmF1bHQgb3IgaW5wdXQgdmFsdWVzXG4gICAgICAvLyBFeGFtcGxlOiBjb21wbGV0ZWQ6IGZhbHNlLCB3ZWVrX251bWJlcjogMSwgbW9udGg6IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEsIGV0Yy5cbiAgICB9O1xuXG4gICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvcGxhbm5lci93ZWVrbHlfZ29hbHMvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0dvYWwpLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldEdvYWxzKChwcmV2R29hbHMpID0+IFsuLi5wcmV2R29hbHMsIGRhdGFdKTsgLy8gQXNzdW1pbmcgdGhlIGJhY2tlbmQgcmV0dXJucyB0aGUgY3JlYXRlZCBnb2FsIHdpdGggYW4gaWRcbiAgICAgICAgc2V0SW5wdXRUZXh0KFwiXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZ29hbDpcIiwgZXJyb3IpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oaWQpIHtcbiAgICBzZXRHb2FsKChwcmV2R29hbHMpID0+IHtcbiAgICAgIHJldHVybiBwcmV2R29hbHMuZmlsdGVyKChnb2FscywgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZGV4ICE9PSBpZDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJjb2xsYXBzZSBiZy1bI2ZkZjJiZl0gb3ZlcmZsb3ctdmlzaWJsZVwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlLXRpdGxlIHRleHQtYmxhY2tcIj57cHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2xsYXBzZS1jb250ZW50IHotMzAgb3ZlcmZsb3ctdmlzaWJsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy03MCBnYXAtM1wiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjICBcIj4gXG4gICAgICAgICAgICB7Z29hbHMubWFwKChnb2FsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEdvYWxJdGVtXG4gICAgICAgICAgICAgICAgaWQ9e2luZGV4fVxuICAgICAgICAgICAgICAgIHRleHQ9e2dvYWx9XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e2RlbGV0ZUl0ZW19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgXG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICB7cHJvcHMuZ29hbHN9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25zIGZsZXggZmxleC1yb3cgZ2FwLTFcIj5cbiAgICAgICAgICA8Zm9ybSBvbkNsaWNrPXtoYW5kbGVDbGlja30gPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1zbSBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHNcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBuYW1lPVwiR29hbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIG0tMSBcIj5BREQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvYWxDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHb2FsSXRlbSIsIkdvYWxDYXJkIiwicHJvcHMiLCJpbnB1dFRleHQiLCJzZXRJbnB1dFRleHQiLCJnb2FscyIsInNldEdvYWxzIiwiZmV0Y2hHb2FscyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0dvYWwiLCJ0aXRsZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJwcmV2R29hbHMiLCJjYXRjaCIsImRlbGV0ZUl0ZW0iLCJpZCIsInNldEdvYWwiLCJmaWx0ZXIiLCJpbmRleCIsImRpdiIsInRhYkluZGV4IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwidWwiLCJtYXAiLCJnb2FsIiwidGV4dCIsIm9uQ2hlY2tlZCIsImZvcm0iLCJvbkNsaWNrIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm5hbWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/GoalCard.tsx\n"));

/***/ })

});