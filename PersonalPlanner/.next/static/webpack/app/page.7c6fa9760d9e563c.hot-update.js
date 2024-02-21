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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GoalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoalItem */ \"(app-pages-browser)/./app/Components/GoalItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GoalCard(props) {\n    _s();\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [goals, setGoals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Start with an empty array\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGoals = async ()=>{\n            try {\n                const response = await fetch(\"http://127.0.0.1:8000/planner/goals/\");\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setGoals(data); // Assume data is an array of goal objects\n            } catch (error) {\n                console.error(\"Failed to fetch goals:\", error);\n            }\n        };\n        fetchGoals();\n    }, []);\n    //console.log(goals);\n    function handleChange(event1) {\n        setInputText(event1.target.value);\n    }\n    function handleClick(event1, category) {\n        event1.preventDefault();\n        let categoryID;\n        if (category === \"Health\") {\n            categoryID = 5;\n        }\n        if (category === \"Career\") {\n            categoryID = 6;\n        }\n        if (category === \"Relationship\") {\n            categoryID = 7;\n        }\n        if (category === \"Entertainment\") {\n            categoryID = 8;\n        }\n        console.log(categoryID);\n        const newGoal = {\n            title: inputText,\n            user: 1,\n            goal_type: \"W\",\n            month: null,\n            week: null,\n            day: null,\n            completed: false,\n            category: categoryID\n        };\n        fetch(\"http://127.0.0.1:8000/planner/goals/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newGoal)\n        }).then((response)=>response.json()).then((data)=>{\n            setGoals((prevGoals)=>[\n                    ...prevGoals,\n                    data\n                ]); // Assuming the backend returns the created goal with an id\n            setInputText(\"\");\n        }).catch((error)=>console.error(\"Error adding goal:\", error));\n    }\n    function deleteItem(id) {\n        setGoals((prevGoals)=>{\n            return prevGoals.filter((goals, index)=>{\n                return index !== id;\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        tabIndex: 0,\n        className: \"collapse bg-[#fdf2bf] overflow-visible\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\"\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"collapse-title text-black\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container collapse-content z-30 overflow-visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-70 gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc  \",\n                            children: goals.map((goal, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    id: index,\n                                    text: goal.title,\n                                    onChecked: deleteItem\n                                }, index, false, {\n                                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-actions flex flex-row gap-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Type here\",\n                                        className: \"input input-sm input-bordered w-full max-w-xs\",\n                                        onChange: handleChange,\n                                        name: \"Goal\",\n                                        value: inputText\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dropdown dropdown-right\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                tabIndex: 0,\n                                                role: \"button\",\n                                                className: \"btn m-1\",\n                                                children: \"Click\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                lineNumber: 106,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                tabIndex: 0,\n                                                className: \"dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Career\"),\n                                                            children: \"Career\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 114,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 113,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Health\"),\n                                                            children: \"Health\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 117,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 116,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Relationship\"),\n                                                            children: \"Relationship\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 120,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 119,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        onClick: ()=>handleClick(event, \"Entertainment\"),\n                                                        children: \"Entertainment\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 124,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {}, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 127,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, this);\n}\n_s(GoalCard, \"fXnIRfSpzza4iIq8f6TLGfF+JOs=\");\n_c = GoalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoalCard);\nvar _c;\n$RefreshReg$(_c, \"GoalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL0dvYWxDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ2pCO0FBSWxDLFNBQVNJLFNBQVNDLEtBQUs7O0lBQ3JCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUMsRUFBRSxHQUFHLDRCQUE0QjtJQUVwRUMsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxhQUFhO1lBQ2pCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixJQUFJLENBQUNELFNBQVNFLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFDQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7Z0JBQ2hDUCxTQUFTTSxPQUFPLDBDQUEwQztZQUM1RCxFQUFFLE9BQU9FLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1lBQzFDO1FBQ0Y7UUFFQVA7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFBcUI7SUFFckIsU0FBU1MsYUFBYUMsTUFBSztRQUN6QmIsYUFBYWEsT0FBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ2pDO0lBRUEsU0FBU0MsWUFBWUgsTUFBSyxFQUFFSSxRQUFRO1FBQ2xDSixPQUFNSyxjQUFjO1FBQ3BCLElBQUlDO1FBQ0osSUFBSUYsYUFBVyxVQUFTO1lBQUVFLGFBQVc7UUFBQztRQUN0QyxJQUFJRixhQUFXLFVBQVM7WUFBQ0UsYUFBVztRQUFDO1FBQ3JDLElBQUlGLGFBQVcsZ0JBQWU7WUFBQ0UsYUFBVztRQUFDO1FBQzNDLElBQUdGLGFBQVcsaUJBQWdCO1lBQUNFLGFBQVc7UUFBQztRQUMzQ1IsUUFBUVMsR0FBRyxDQUFDRDtRQUdaLE1BQU1FLFVBQVU7WUFDZEMsT0FBT3ZCO1lBQ1B3QixNQUFNO1lBQ05DLFdBQVc7WUFDWEMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLEtBQUs7WUFDTEMsV0FBVztZQUNYWCxVQUFTRTtRQUNYO1FBRUFkLE1BQU0sd0NBQXdDO1lBQzVDd0IsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNaO1FBQ3ZCLEdBQ0dhLElBQUksQ0FBQyxDQUFDOUIsV0FBYUEsU0FBU0ssSUFBSSxJQUNoQ3lCLElBQUksQ0FBQyxDQUFDMUI7WUFDTE4sU0FBUyxDQUFDaUMsWUFBYzt1QkFBSUE7b0JBQVczQjtpQkFBSyxHQUFHLDJEQUEyRDtZQUMxR1IsYUFBYTtRQUNmLEdBQ0NvQyxLQUFLLENBQUMsQ0FBQzFCLFFBQVVDLFFBQVFELEtBQUssQ0FBQyxzQkFBc0JBO0lBQzFEO0lBRUEsU0FBUzJCLFdBQVdDLEVBQUU7UUFDcEJwQyxTQUFTLENBQUNpQztZQUNSLE9BQU9BLFVBQVVJLE1BQU0sQ0FBQyxDQUFDdEMsT0FBT3VDO2dCQUM5QixPQUFPQSxVQUFVRjtZQUNuQjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsVUFBVTtRQUFHQyxXQUFVOzswQkFDMUIsOERBQUNDO2dCQUFNQyxNQUFLOzs7Ozs7MEJBQ1osOERBQUNKO2dCQUFJRSxXQUFVOzBCQUE2QjdDLE1BQU13QixLQUFLOzs7Ozs7MEJBQ3ZELDhEQUFDbUI7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNGO29CQUFJRSxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQ1gxQyxNQUFNOEMsR0FBRyxDQUFDLENBQUNDLE1BQU1SLHNCQUNoQiw4REFBQzVDLGlEQUFRQTtvQ0FDUDBDLElBQUlFO29DQUNKUyxNQUFNRCxLQUFLMUIsS0FBSztvQ0FFaEI0QixXQUFXYjttQ0FETkc7Ozs7Ozs7Ozs7c0NBTVgsOERBQUNDOzRCQUFJRSxXQUFVO3NDQUNiLDRFQUFDUTs7a0RBQ0MsOERBQUNQO3dDQUNDQyxNQUFLO3dDQUNMTyxhQUFZO3dDQUNaVCxXQUFVO3dDQUNWVSxVQUFVekM7d0NBQ1YwQyxNQUFLO3dDQUNMdkMsT0FBT2hCOzs7Ozs7a0RBRVQsOERBQUMwQzt3Q0FBSUUsV0FBVTs7MERBQ2IsOERBQUNGO2dEQUFJQyxVQUFVO2dEQUFHYSxNQUFLO2dEQUFTWixXQUFVOzBEQUFVOzs7Ozs7MERBR3BELDhEQUFDRztnREFDQ0osVUFBVTtnREFDVkMsV0FBVTs7a0VBRVYsOERBQUNhO2tFQUNDLDRFQUFDQzs0REFBRUMsU0FBUyxJQUFNMUMsWUFBWUgsT0FBTztzRUFBVzs7Ozs7Ozs7Ozs7a0VBRWxELDhEQUFDMkM7a0VBQ0MsNEVBQUNDOzREQUFFQyxTQUFTLElBQU0xQyxZQUFZSCxPQUFPO3NFQUFXOzs7Ozs7Ozs7OztrRUFFbEQsOERBQUMyQztrRUFDQyw0RUFBQ0M7NERBQUVDLFNBQVMsSUFBTTFDLFlBQVlILE9BQU87c0VBQWlCOzs7Ozs7Ozs7OztrRUFJeEQsOERBQUM0Qzt3REFBRUMsU0FBUyxJQUFNMUMsWUFBWUgsT0FBTztrRUFBa0I7Ozs7OztrRUFHdkQsOERBQUMyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU25CO0dBaklTM0Q7S0FBQUE7QUFtSVQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0NvbXBvbmVudHMvR29hbENhcmQudHN4P2QyMmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdvYWxJdGVtIGZyb20gXCIuL0dvYWxJdGVtXCI7XG5cbmltcG9ydCBHb2FsQ2F0ZWdvcnlDYXJkIGZyb20gXCIuL0dvYWxDYXRlZ29yeUNhcmRcIjtcblxuZnVuY3Rpb24gR29hbENhcmQocHJvcHMpIHtcbiAgY29uc3QgW2lucHV0VGV4dCwgc2V0SW5wdXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZ29hbHMsIHNldEdvYWxzXSA9IHVzZVN0YXRlKFtdKTsgLy8gU3RhcnQgd2l0aCBhbiBlbXB0eSBhcnJheVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hHb2FscyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvcGxhbm5lci9nb2Fscy9cIik7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2tcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0R29hbHMoZGF0YSk7IC8vIEFzc3VtZSBkYXRhIGlzIGFuIGFycmF5IG9mIGdvYWwgb2JqZWN0c1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBnb2FsczpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaEdvYWxzKCk7XG4gIH0sIFtdKTtcblxuICAvL2NvbnNvbGUubG9nKGdvYWxzKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBzZXRJbnB1dFRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50LCBjYXRlZ29yeSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGNhdGVnb3J5SURcbiAgICBpZiAoY2F0ZWdvcnk9PT1cIkhlYWx0aFwiKXsgY2F0ZWdvcnlJRD01fVxuICAgIGlmIChjYXRlZ29yeT09PVwiQ2FyZWVyXCIpe2NhdGVnb3J5SUQ9Nn1cbiAgICBpZiAoY2F0ZWdvcnk9PT1cIlJlbGF0aW9uc2hpcFwiKXtjYXRlZ29yeUlEPTd9XG4gICAgaWYoY2F0ZWdvcnk9PT1cIkVudGVydGFpbm1lbnRcIil7Y2F0ZWdvcnlJRD04fVxuICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5SUQpXG4gICAgXG5cbiAgICBjb25zdCBuZXdHb2FsID0ge1xuICAgICAgdGl0bGU6IGlucHV0VGV4dCxcbiAgICAgIHVzZXI6IDEsXG4gICAgICBnb2FsX3R5cGU6IFwiV1wiLFxuICAgICAgbW9udGg6IG51bGwsXG4gICAgICB3ZWVrOiBudWxsLFxuICAgICAgZGF5OiBudWxsLFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgIGNhdGVnb3J5OmNhdGVnb3J5SUQsXG4gICAgfTtcblxuICAgIGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL3BsYW5uZXIvZ29hbHMvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0dvYWwpLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldEdvYWxzKChwcmV2R29hbHMpID0+IFsuLi5wcmV2R29hbHMsIGRhdGFdKTsgLy8gQXNzdW1pbmcgdGhlIGJhY2tlbmQgcmV0dXJucyB0aGUgY3JlYXRlZCBnb2FsIHdpdGggYW4gaWRcbiAgICAgICAgc2V0SW5wdXRUZXh0KFwiXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZ29hbDpcIiwgZXJyb3IpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oaWQpIHtcbiAgICBzZXRHb2FscygocHJldkdvYWxzKSA9PiB7XG4gICAgICByZXR1cm4gcHJldkdvYWxzLmZpbHRlcigoZ29hbHMsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBpbmRleCAhPT0gaWQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiB0YWJJbmRleD17MH0gY2xhc3NOYW1lPVwiY29sbGFwc2UgYmctWyNmZGYyYmZdIG92ZXJmbG93LXZpc2libGVcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZS10aXRsZSB0ZXh0LWJsYWNrXCI+e3Byb3BzLnRpdGxlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sbGFwc2UtY29udGVudCB6LTMwIG92ZXJmbG93LXZpc2libGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctNzAgZ2FwLTNcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjICBcIj5cbiAgICAgICAgICAgIHtnb2Fscy5tYXAoKGdvYWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxHb2FsSXRlbVxuICAgICAgICAgICAgICAgIGlkPXtpbmRleH1cbiAgICAgICAgICAgICAgICB0ZXh0PXtnb2FsLnRpdGxlfSAvLyBDb3JyZWN0bHkgYWNjZXNzaW5nIHRoZSBwcm9wZXJ0eSBvZiB0aGUgb2JqZWN0XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e2RlbGV0ZUl0ZW19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMgZmxleCBmbGV4LXJvdyBnYXAtM1wiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtc20gaW5wdXQtYm9yZGVyZWQgdy1mdWxsIG1heC13LXhzXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJHb2FsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRUZXh0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGRyb3Bkb3duLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiB0YWJJbmRleD17MH0gcm9sZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBtLTFcIj5cbiAgICAgICAgICAgICAgICAgIENsaWNrXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnQgei1bMV0gbWVudSBwLTIgc2hhZG93IGJnLWJhc2UtMTAwIHJvdW5kZWQtYm94IHctNTJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soZXZlbnQsIFwiQ2FyZWVyXCIpfT5DYXJlZXI8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhldmVudCwgXCJIZWFsdGhcIil9PkhlYWx0aDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGV2ZW50LCBcIlJlbGF0aW9uc2hpcFwiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgUmVsYXRpb25zaGlwXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhldmVudCwgXCJFbnRlcnRhaW5tZW50XCIpfT5cbiAgICAgICAgICAgICAgICAgICAgRW50ZXJ0YWlubWVudFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPGxpPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvYWxDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHb2FsSXRlbSIsIkdvYWxDYXJkIiwicHJvcHMiLCJpbnB1dFRleHQiLCJzZXRJbnB1dFRleHQiLCJnb2FscyIsInNldEdvYWxzIiwiZmV0Y2hHb2FscyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJjYXRlZ29yeSIsInByZXZlbnREZWZhdWx0IiwiY2F0ZWdvcnlJRCIsImxvZyIsIm5ld0dvYWwiLCJ0aXRsZSIsInVzZXIiLCJnb2FsX3R5cGUiLCJtb250aCIsIndlZWsiLCJkYXkiLCJjb21wbGV0ZWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicHJldkdvYWxzIiwiY2F0Y2giLCJkZWxldGVJdGVtIiwiaWQiLCJmaWx0ZXIiLCJpbmRleCIsImRpdiIsInRhYkluZGV4IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwidWwiLCJtYXAiLCJnb2FsIiwidGV4dCIsIm9uQ2hlY2tlZCIsImZvcm0iLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibmFtZSIsInJvbGUiLCJsaSIsImEiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/GoalCard.tsx\n"));

/***/ })

});