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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GoalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoalItem */ \"(app-pages-browser)/./app/Components/GoalItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GoalCard(props) {\n    _s();\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [goals, setGoals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Start with an empty array\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGoals = async ()=>{\n            try {\n                const response = await fetch(\"http://127.0.0.1:8000/planner/goals/\");\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setGoals(data); // Assume data is an array of goal objects\n            } catch (error) {\n                console.error(\"Failed to fetch goals:\", error);\n            }\n        };\n        fetchGoals();\n    }, []);\n    //console.log(goals);\n    function handleChange(event1) {\n        setInputText(event1.target.value);\n    }\n    function handleClick(event1, category) {\n        event1.preventDefault();\n        let categoryID;\n        if (category === \"Health\") {\n            categoryID = 5;\n        }\n        if (category === \"Career\") {\n            categoryID = 6;\n        }\n        if (category === \"Relationship\") {\n            categoryID = 7;\n        }\n        if (category === \"Entertainment\") {\n            categoryID = 8;\n        }\n        console.log(categoryID);\n        const newGoal = {\n            title: inputText,\n            user: 1,\n            goal_type: \"W\",\n            month: null,\n            week: null,\n            day: null,\n            completed: false,\n            category: categoryID\n        };\n        fetch(\"http://127.0.0.1:8000/planner/goals/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newGoal)\n        }).then((response)=>response.json()).then((data)=>{\n            setGoals((prevGoals)=>[\n                    ...prevGoals,\n                    data\n                ]); // Assuming the backend returns the created goal with an id\n            setInputText(\"\");\n        }).catch((error)=>console.error(\"Error adding goal:\", error));\n    }\n    function deleteItem(id) {\n        setGoals((prevGoals)=>{\n            return prevGoals.filter((goals, index)=>{\n                return index !== id;\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        tabIndex: 0,\n        className: \"collapse bg-[#fdf2bf] overflow-visible\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\"\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"collapse-title text-black\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container collapse-content z-30 overflow-visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-70 gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc  \",\n                            children: goals.map((goal, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    id: index,\n                                    text: goal.title,\n                                    onChecked: deleteItem\n                                }, index, false, {\n                                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-actions flex flex-row gap-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Type here\",\n                                        className: \"input input-sm input-bordered w-full max-w-xs\",\n                                        onChange: handleChange,\n                                        name: \"Goal\",\n                                        value: inputText\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dropdown dropdown-right\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                tabIndex: 0,\n                                                role: \"button\",\n                                                className: \"btn m-1\",\n                                                children: \"Click\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                lineNumber: 108,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                tabIndex: 0,\n                                                className: \"dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Career\"),\n                                                            children: \"Career\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 116,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 115,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Health\"),\n                                                            children: \"Health\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 119,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 118,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Relationship\"),\n                                                            children: \"Relationship\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 122,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 121,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        onClick: ()=>handleClick(event, \"Entertainment\"),\n                                                        children: \"Entertainment\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 126,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {}, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 129,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                lineNumber: 111,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(GoalCard, \"fXnIRfSpzza4iIq8f6TLGfF+JOs=\");\n_c = GoalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoalCard);\nvar _c;\n$RefreshReg$(_c, \"GoalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL0dvYWxDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ2pCO0FBSWxDLFNBQVNJLFNBQVNDLEtBQUs7O0lBQ3JCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUMsRUFBRSxHQUFHLDRCQUE0QjtJQUVwRUMsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxhQUFhO1lBQ2pCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixJQUFJLENBQUNELFNBQVNFLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFDQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7Z0JBQ2hDUCxTQUFTTSxPQUFPLDBDQUEwQztZQUM1RCxFQUFFLE9BQU9FLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1lBQzFDO1FBQ0Y7UUFFQVA7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFBcUI7SUFFckIsU0FBU1MsYUFBYUMsTUFBSztRQUN6QmIsYUFBYWEsT0FBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ2pDO0lBRUEsU0FBU0MsWUFBWUgsTUFBSyxFQUFFSSxRQUFRO1FBQ2xDSixPQUFNSyxjQUFjO1FBQ3BCLElBQUlDO1FBQ0osSUFBSUYsYUFBVyxVQUFTO1lBQUVFLGFBQVc7UUFBQztRQUN0QyxJQUFJRixhQUFXLFVBQVM7WUFBQ0UsYUFBVztRQUFDO1FBQ3JDLElBQUlGLGFBQVcsZ0JBQWU7WUFBQ0UsYUFBVztRQUFDO1FBQzNDLElBQUdGLGFBQVcsaUJBQWdCO1lBQUNFLGFBQVc7UUFBQztRQUMzQ1IsUUFBUVMsR0FBRyxDQUFDRDtRQUdaLE1BQU1FLFVBQVU7WUFDZEMsT0FBT3ZCO1lBQ1B3QixNQUFNO1lBQ05DLFdBQVc7WUFDWEMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLEtBQUs7WUFDTEMsV0FBVztZQUNYWCxVQUFTRTtRQUdYO1FBRUFkLE1BQU0sd0NBQXdDO1lBQzVDd0IsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNaO1FBQ3ZCLEdBQ0dhLElBQUksQ0FBQyxDQUFDOUIsV0FBYUEsU0FBU0ssSUFBSSxJQUNoQ3lCLElBQUksQ0FBQyxDQUFDMUI7WUFDTE4sU0FBUyxDQUFDaUMsWUFBYzt1QkFBSUE7b0JBQVczQjtpQkFBSyxHQUFHLDJEQUEyRDtZQUMxR1IsYUFBYTtRQUNmLEdBQ0NvQyxLQUFLLENBQUMsQ0FBQzFCLFFBQVVDLFFBQVFELEtBQUssQ0FBQyxzQkFBc0JBO0lBQzFEO0lBRUEsU0FBUzJCLFdBQVdDLEVBQUU7UUFDcEJwQyxTQUFTLENBQUNpQztZQUNSLE9BQU9BLFVBQVVJLE1BQU0sQ0FBQyxDQUFDdEMsT0FBT3VDO2dCQUM5QixPQUFPQSxVQUFVRjtZQUNuQjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsVUFBVTtRQUFHQyxXQUFVOzswQkFDMUIsOERBQUNDO2dCQUFNQyxNQUFLOzs7Ozs7MEJBQ1osOERBQUNKO2dCQUFJRSxXQUFVOzBCQUE2QjdDLE1BQU13QixLQUFLOzs7Ozs7MEJBQ3ZELDhEQUFDbUI7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNGO29CQUFJRSxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQ1gxQyxNQUFNOEMsR0FBRyxDQUFDLENBQUNDLE1BQU1SLHNCQUNoQiw4REFBQzVDLGlEQUFRQTtvQ0FDUDBDLElBQUlFO29DQUNKUyxNQUFNRCxLQUFLMUIsS0FBSztvQ0FFaEI0QixXQUFXYjttQ0FETkc7Ozs7Ozs7Ozs7c0NBTVgsOERBQUNDOzRCQUFJRSxXQUFVO3NDQUNiLDRFQUFDUTs7a0RBQ0MsOERBQUNQO3dDQUNDQyxNQUFLO3dDQUNMTyxhQUFZO3dDQUNaVCxXQUFVO3dDQUNWVSxVQUFVekM7d0NBQ1YwQyxNQUFLO3dDQUNMdkMsT0FBT2hCOzs7Ozs7a0RBRVQsOERBQUMwQzt3Q0FBSUUsV0FBVTs7MERBQ2IsOERBQUNGO2dEQUFJQyxVQUFVO2dEQUFHYSxNQUFLO2dEQUFTWixXQUFVOzBEQUFVOzs7Ozs7MERBR3BELDhEQUFDRztnREFDQ0osVUFBVTtnREFDVkMsV0FBVTs7a0VBRVYsOERBQUNhO2tFQUNDLDRFQUFDQzs0REFBRUMsU0FBUyxJQUFNMUMsWUFBWUgsT0FBTztzRUFBVzs7Ozs7Ozs7Ozs7a0VBRWxELDhEQUFDMkM7a0VBQ0MsNEVBQUNDOzREQUFFQyxTQUFTLElBQU0xQyxZQUFZSCxPQUFPO3NFQUFXOzs7Ozs7Ozs7OztrRUFFbEQsOERBQUMyQztrRUFDQyw0RUFBQ0M7NERBQUVDLFNBQVMsSUFBTTFDLFlBQVlILE9BQU87c0VBQWlCOzs7Ozs7Ozs7OztrRUFJeEQsOERBQUM0Qzt3REFBRUMsU0FBUyxJQUFNMUMsWUFBWUgsT0FBTztrRUFBa0I7Ozs7OztrRUFHdkQsOERBQUMyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU25CO0dBbklTM0Q7S0FBQUE7QUFxSVQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0NvbXBvbmVudHMvR29hbENhcmQudHN4P2QyMmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdvYWxJdGVtIGZyb20gXCIuL0dvYWxJdGVtXCI7XG5cbmltcG9ydCBHb2FsQ2F0ZWdvcnlDYXJkIGZyb20gXCIuL0dvYWxDYXRlZ29yeUNhcmRcIjtcblxuZnVuY3Rpb24gR29hbENhcmQocHJvcHMpIHtcbiAgY29uc3QgW2lucHV0VGV4dCwgc2V0SW5wdXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZ29hbHMsIHNldEdvYWxzXSA9IHVzZVN0YXRlKFtdKTsgLy8gU3RhcnQgd2l0aCBhbiBlbXB0eSBhcnJheVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hHb2FscyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvcGxhbm5lci9nb2Fscy9cIik7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2tcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0R29hbHMoZGF0YSk7IC8vIEFzc3VtZSBkYXRhIGlzIGFuIGFycmF5IG9mIGdvYWwgb2JqZWN0c1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBnb2FsczpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaEdvYWxzKCk7XG4gIH0sIFtdKTtcblxuICAvL2NvbnNvbGUubG9nKGdvYWxzKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBzZXRJbnB1dFRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50LCBjYXRlZ29yeSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGNhdGVnb3J5SURcbiAgICBpZiAoY2F0ZWdvcnk9PT1cIkhlYWx0aFwiKXsgY2F0ZWdvcnlJRD01fVxuICAgIGlmIChjYXRlZ29yeT09PVwiQ2FyZWVyXCIpe2NhdGVnb3J5SUQ9Nn1cbiAgICBpZiAoY2F0ZWdvcnk9PT1cIlJlbGF0aW9uc2hpcFwiKXtjYXRlZ29yeUlEPTd9XG4gICAgaWYoY2F0ZWdvcnk9PT1cIkVudGVydGFpbm1lbnRcIil7Y2F0ZWdvcnlJRD04fVxuICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5SUQpXG4gICAgXG5cbiAgICBjb25zdCBuZXdHb2FsID0ge1xuICAgICAgdGl0bGU6IGlucHV0VGV4dCxcbiAgICAgIHVzZXI6IDEsXG4gICAgICBnb2FsX3R5cGU6IFwiV1wiLFxuICAgICAgbW9udGg6IG51bGwsXG4gICAgICB3ZWVrOiBudWxsLFxuICAgICAgZGF5OiBudWxsLFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgIGNhdGVnb3J5OmNhdGVnb3J5SURcbiAgICAgIC8vIEFkZCBvdGhlciBuZWNlc3NhcnkgZmllbGRzIHdpdGggZGVmYXVsdCBvciBpbnB1dCB2YWx1ZXNcbiAgICAgIC8vIEV4YW1wbGU6IGNvbXBsZXRlZDogZmFsc2UsIHdlZWtfbnVtYmVyOiAxLCBtb250aDogbmV3IERhdGUoKS5nZXRNb250aCgpICsgMSwgZXRjLlxuICAgIH07XG5cbiAgICBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wbGFubmVyL2dvYWxzL1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdHb2FsKSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRHb2FscygocHJldkdvYWxzKSA9PiBbLi4ucHJldkdvYWxzLCBkYXRhXSk7IC8vIEFzc3VtaW5nIHRoZSBiYWNrZW5kIHJldHVybnMgdGhlIGNyZWF0ZWQgZ29hbCB3aXRoIGFuIGlkXG4gICAgICAgIHNldElucHV0VGV4dChcIlwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGdvYWw6XCIsIGVycm9yKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVJdGVtKGlkKSB7XG4gICAgc2V0R29hbHMoKHByZXZHb2FscykgPT4ge1xuICAgICAgcmV0dXJuIHByZXZHb2Fscy5maWx0ZXIoKGdvYWxzLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gaW5kZXggIT09IGlkO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImNvbGxhcHNlIGJnLVsjZmRmMmJmXSBvdmVyZmxvdy12aXNpYmxlXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UtdGl0bGUgdGV4dC1ibGFja1wiPntwcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbGxhcHNlLWNvbnRlbnQgei0zMCBvdmVyZmxvdy12aXNpYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTcwIGdhcC0zXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyAgXCI+XG4gICAgICAgICAgICB7Z29hbHMubWFwKChnb2FsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8R29hbEl0ZW1cbiAgICAgICAgICAgICAgICBpZD17aW5kZXh9XG4gICAgICAgICAgICAgICAgdGV4dD17Z29hbC50aXRsZX0gLy8gQ29ycmVjdGx5IGFjY2Vzc2luZyB0aGUgcHJvcGVydHkgb2YgdGhlIG9iamVjdFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgb25DaGVja2VkPXtkZWxldGVJdGVtfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25zIGZsZXggZmxleC1yb3cgZ2FwLTNcIj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LXNtIGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14c1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBuYW1lPVwiR29hbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VGV4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBkcm9wZG93bi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgdGFiSW5kZXg9ezB9IHJvbGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gbS0xXCI+XG4gICAgICAgICAgICAgICAgICBDbGlja1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50IHotWzFdIG1lbnUgcC0yIHNoYWRvdyBiZy1iYXNlLTEwMCByb3VuZGVkLWJveCB3LTUyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGV2ZW50LCBcIkNhcmVlclwiKX0+Q2FyZWVyPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soZXZlbnQsIFwiSGVhbHRoXCIpfT5IZWFsdGg8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhldmVudCwgXCJSZWxhdGlvbnNoaXBcIil9PlxuICAgICAgICAgICAgICAgICAgICAgIFJlbGF0aW9uc2hpcFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soZXZlbnQsIFwiRW50ZXJ0YWlubWVudFwiKX0+XG4gICAgICAgICAgICAgICAgICAgIEVudGVydGFpbm1lbnRcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxsaT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHb2FsQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR29hbEl0ZW0iLCJHb2FsQ2FyZCIsInByb3BzIiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0IiwiZ29hbHMiLCJzZXRHb2FscyIsImZldGNoR29hbHMiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwiY2F0ZWdvcnkiLCJwcmV2ZW50RGVmYXVsdCIsImNhdGVnb3J5SUQiLCJsb2ciLCJuZXdHb2FsIiwidGl0bGUiLCJ1c2VyIiwiZ29hbF90eXBlIiwibW9udGgiLCJ3ZWVrIiwiZGF5IiwiY29tcGxldGVkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInByZXZHb2FscyIsImNhdGNoIiwiZGVsZXRlSXRlbSIsImlkIiwiZmlsdGVyIiwiaW5kZXgiLCJkaXYiLCJ0YWJJbmRleCIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInVsIiwibWFwIiwiZ29hbCIsInRleHQiLCJvbkNoZWNrZWQiLCJmb3JtIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm5hbWUiLCJyb2xlIiwibGkiLCJhIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/GoalCard.tsx\n"));

/***/ })

});