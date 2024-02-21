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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GoalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoalItem */ \"(app-pages-browser)/./app/Components/GoalItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GoalCard(props) {\n    _s();\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [goals, setGoals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGoals = async ()=>{\n            try {\n                const response = await fetch(\"http://127.0.0.1:8000/planner/goals/\");\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setGoals(data);\n            } catch (error) {\n                console.error(\"Failed to fetch goals:\", error);\n            }\n        };\n        fetchGoals();\n    }, []);\n    //console.log(goals);\n    function handleChange(event1) {\n        setInputText(event1.target.value);\n    }\n    function handleClick(event1, category) {\n        event1.preventDefault();\n        let categoryID;\n        if (category === \"Health\") {\n            categoryID = 5;\n        }\n        if (category === \"Career\") {\n            categoryID = 6;\n        }\n        if (category === \"Relationship\") {\n            categoryID = 7;\n        }\n        if (category === \"Entertainment\") {\n            categoryID = 8;\n        }\n        console.log(category);\n        console.log(categoryID);\n        const newGoal = {\n            title: inputText,\n            user: 1,\n            goal_type: \"W\",\n            month: null,\n            week: null,\n            day: null,\n            completed: false,\n            category: categoryID\n        };\n        fetch(\"http://127.0.0.1:8000/planner/goals/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newGoal)\n        }).then((response)=>response.json()).then((data)=>{\n            setGoals((prevGoals)=>[\n                    ...prevGoals,\n                    data\n                ]); // Assuming the backend returns the created goal with an id\n            setInputText(\"\");\n        }).catch((error)=>console.error(\"Error adding goal:\", error));\n    }\n    function deleteItem(id) {\n        setGoals((prevGoals)=>{\n            return prevGoals.filter((goals, index)=>{\n                return index !== id;\n            });\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        tabIndex: 0,\n        className: \"collapse bg-[#fdf2bf] overflow-visible\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\"\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"collapse-title text-black\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container collapse-content z-30 overflow-visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-70 gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc  \",\n                            children: goals.map((goal, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    id: index,\n                                    text: goal.title,\n                                    onChecked: deleteItem\n                                }, index, false, {\n                                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-actions flex flex-row gap-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Type here\",\n                                        className: \"input input-sm input-bordered w-full max-w-xs\",\n                                        onChange: handleChange,\n                                        name: \"Goal\",\n                                        value: inputText\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dropdown dropdown-right\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                tabIndex: 0,\n                                                role: \"button\",\n                                                className: \"btn m-1\",\n                                                children: \"Click\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                tabIndex: 0,\n                                                className: \"dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Career\"),\n                                                            children: \"Career\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 117,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 116,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Health\"),\n                                                            children: \"Health\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 120,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 119,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Relationship\"),\n                                                            children: \"Relationship\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 123,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 122,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        onClick: ()=>handleClick(event, \"Entertainment\"),\n                                                        children: \"Entertainment\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 127,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {}, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 130,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                lineNumber: 112,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(GoalCard, \"fXnIRfSpzza4iIq8f6TLGfF+JOs=\");\n_c = GoalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoalCard);\nvar _c;\n$RefreshReg$(_c, \"GoalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL0dvYWxDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ2pCO0FBSWxDLFNBQVNJLFNBQVNDLEtBQUs7O0lBQ3JCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUVyQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxhQUFhO1lBQ2pCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixJQUFJLENBQUNELFNBQVNFLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFDQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7Z0JBQ2hDUCxTQUFTTTtZQUNYLEVBQUUsT0FBT0UsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7WUFDMUM7UUFDRjtRQUVBUDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUFxQjtJQUVyQixTQUFTUyxhQUFhQyxNQUFLO1FBQ3pCYixhQUFhYSxPQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDakM7SUFFQSxTQUFTQyxZQUFZSCxNQUFLLEVBQUVJLFFBQVE7UUFDbENKLE9BQU1LLGNBQWM7UUFDcEIsSUFBSUM7UUFDSixJQUFJRixhQUFXLFVBQVM7WUFBRUUsYUFBVztRQUFFO1FBQ3ZDLElBQUlGLGFBQVcsVUFBUztZQUFDRSxhQUFXO1FBQUM7UUFDckMsSUFBSUYsYUFBVyxnQkFBZTtZQUFDRSxhQUFXO1FBQUM7UUFDM0MsSUFBR0YsYUFBVyxpQkFBZ0I7WUFBQ0UsYUFBVztRQUFDO1FBQzNDUixRQUFRUyxHQUFHLENBQUVIO1FBQ2JOLFFBQVFTLEdBQUcsQ0FBQ0Q7UUFHWixNQUFNRSxVQUFVO1lBQ2RDLE9BQU92QjtZQUNQd0IsTUFBTTtZQUNOQyxXQUFXO1lBQ1hDLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxLQUFLO1lBQ0xDLFdBQVc7WUFDWFgsVUFBVUU7UUFHWjtRQUVBZCxNQUFNLHdDQUF3QztZQUM1Q3dCLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDWjtRQUN2QixHQUNHYSxJQUFJLENBQUMsQ0FBQzlCLFdBQWFBLFNBQVNLLElBQUksSUFDaEN5QixJQUFJLENBQUMsQ0FBQzFCO1lBQ0xOLFNBQVMsQ0FBQ2lDLFlBQWM7dUJBQUlBO29CQUFXM0I7aUJBQUssR0FBRywyREFBMkQ7WUFDMUdSLGFBQWE7UUFDZixHQUNDb0MsS0FBSyxDQUFDLENBQUMxQixRQUFVQyxRQUFRRCxLQUFLLENBQUMsc0JBQXNCQTtJQUMxRDtJQUVBLFNBQVMyQixXQUFXQyxFQUFFO1FBQ3BCcEMsU0FBUyxDQUFDaUM7WUFDUixPQUFPQSxVQUFVSSxNQUFNLENBQUMsQ0FBQ3RDLE9BQU91QztnQkFDOUIsT0FBT0EsVUFBVUY7WUFDbkI7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFVBQVU7UUFBR0MsV0FBVTs7MEJBQzFCLDhEQUFDQztnQkFBTUMsTUFBSzs7Ozs7OzBCQUNaLDhEQUFDSjtnQkFBSUUsV0FBVTswQkFBNkI3QyxNQUFNd0IsS0FBSzs7Ozs7OzBCQUN2RCw4REFBQ21CO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDRjtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUNYMUMsTUFBTThDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNUixzQkFDaEIsOERBQUM1QyxpREFBUUE7b0NBQ1AwQyxJQUFJRTtvQ0FDSlMsTUFBTUQsS0FBSzFCLEtBQUs7b0NBRWhCNEIsV0FBV2I7bUNBRE5HOzs7Ozs7Ozs7O3NDQU1YLDhEQUFDQzs0QkFBSUUsV0FBVTtzQ0FDYiw0RUFBQ1E7O2tEQUNDLDhEQUFDUDt3Q0FDQ0MsTUFBSzt3Q0FDTE8sYUFBWTt3Q0FDWlQsV0FBVTt3Q0FDVlUsVUFBVXpDO3dDQUNWMEMsTUFBSzt3Q0FDTHZDLE9BQU9oQjs7Ozs7O2tEQUVULDhEQUFDMEM7d0NBQUlFLFdBQVU7OzBEQUNiLDhEQUFDRjtnREFBSUMsVUFBVTtnREFBR2EsTUFBSztnREFBU1osV0FBVTswREFBVTs7Ozs7OzBEQUdwRCw4REFBQ0c7Z0RBQ0NKLFVBQVU7Z0RBQ1ZDLFdBQVU7O2tFQUVWLDhEQUFDYTtrRUFDQyw0RUFBQ0M7NERBQUVDLFNBQVMsSUFBTTFDLFlBQVlILE9BQU87c0VBQVc7Ozs7Ozs7Ozs7O2tFQUVsRCw4REFBQzJDO2tFQUNDLDRFQUFDQzs0REFBRUMsU0FBUyxJQUFNMUMsWUFBWUgsT0FBTztzRUFBVzs7Ozs7Ozs7Ozs7a0VBRWxELDhEQUFDMkM7a0VBQ0MsNEVBQUNDOzREQUFFQyxTQUFTLElBQU0xQyxZQUFZSCxPQUFPO3NFQUFpQjs7Ozs7Ozs7Ozs7a0VBSXhELDhEQUFDNEM7d0RBQUVDLFNBQVMsSUFBTTFDLFlBQVlILE9BQU87a0VBQWtCOzs7Ozs7a0VBR3ZELDhEQUFDMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNuQjtHQXBJUzNEO0tBQUFBO0FBc0lULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Db21wb25lbnRzL0dvYWxDYXJkLnRzeD9kMjJlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHb2FsSXRlbSBmcm9tIFwiLi9Hb2FsSXRlbVwiO1xuXG5pbXBvcnQgR29hbENhdGVnb3J5Q2FyZCBmcm9tIFwiLi9Hb2FsQ2F0ZWdvcnlDYXJkXCI7XG5cbmZ1bmN0aW9uIEdvYWxDYXJkKHByb3BzKSB7XG4gIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2dvYWxzLCBzZXRHb2Fsc10gPSB1c2VTdGF0ZShbXSk7IFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hHb2FscyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvcGxhbm5lci9nb2Fscy9cIik7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2tcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0R29hbHMoZGF0YSk7IFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBnb2FsczpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaEdvYWxzKCk7XG4gIH0sIFtdKTtcblxuICAvL2NvbnNvbGUubG9nKGdvYWxzKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBzZXRJbnB1dFRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50LCBjYXRlZ29yeSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGNhdGVnb3J5SURcbiAgICBpZiAoY2F0ZWdvcnk9PT1cIkhlYWx0aFwiKXsgY2F0ZWdvcnlJRD01IH1cbiAgICBpZiAoY2F0ZWdvcnk9PT1cIkNhcmVlclwiKXtjYXRlZ29yeUlEPTZ9XG4gICAgaWYgKGNhdGVnb3J5PT09XCJSZWxhdGlvbnNoaXBcIil7Y2F0ZWdvcnlJRD03fVxuICAgIGlmKGNhdGVnb3J5PT09XCJFbnRlcnRhaW5tZW50XCIpe2NhdGVnb3J5SUQ9OH1cbiAgICBjb25zb2xlLmxvZyAoY2F0ZWdvcnkpXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcnlJRClcbiAgICBcblxuICAgIGNvbnN0IG5ld0dvYWwgPSB7XG4gICAgICB0aXRsZTogaW5wdXRUZXh0LFxuICAgICAgdXNlcjogMSxcbiAgICAgIGdvYWxfdHlwZTogXCJXXCIsXG4gICAgICBtb250aDogbnVsbCxcbiAgICAgIHdlZWs6IG51bGwsXG4gICAgICBkYXk6IG51bGwsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5SUQsXG4gICAgICAvLyBBZGQgb3RoZXIgbmVjZXNzYXJ5IGZpZWxkcyB3aXRoIGRlZmF1bHQgb3IgaW5wdXQgdmFsdWVzXG4gICAgICAvLyBFeGFtcGxlOiBjb21wbGV0ZWQ6IGZhbHNlLCB3ZWVrX251bWJlcjogMSwgbW9udGg6IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDEsIGV0Yy5cbiAgICB9O1xuXG4gICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvcGxhbm5lci9nb2Fscy9cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3R29hbCksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0R29hbHMoKHByZXZHb2FscykgPT4gWy4uLnByZXZHb2FscywgZGF0YV0pOyAvLyBBc3N1bWluZyB0aGUgYmFja2VuZCByZXR1cm5zIHRoZSBjcmVhdGVkIGdvYWwgd2l0aCBhbiBpZFxuICAgICAgICBzZXRJbnB1dFRleHQoXCJcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBnb2FsOlwiLCBlcnJvcikpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlSXRlbShpZCkge1xuICAgIHNldEdvYWxzKChwcmV2R29hbHMpID0+IHtcbiAgICAgIHJldHVybiBwcmV2R29hbHMuZmlsdGVyKChnb2FscywgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZGV4ICE9PSBpZDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJjb2xsYXBzZSBiZy1bI2ZkZjJiZl0gb3ZlcmZsb3ctdmlzaWJsZVwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlLXRpdGxlIHRleHQtYmxhY2tcIj57cHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2xsYXBzZS1jb250ZW50IHotMzAgb3ZlcmZsb3ctdmlzaWJsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy03MCBnYXAtM1wiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgIFwiPlxuICAgICAgICAgICAge2dvYWxzLm1hcCgoZ29hbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEdvYWxJdGVtXG4gICAgICAgICAgICAgICAgaWQ9e2luZGV4fVxuICAgICAgICAgICAgICAgIHRleHQ9e2dvYWwudGl0bGV9IC8vIENvcnJlY3RseSBhY2Nlc3NpbmcgdGhlIHByb3BlcnR5IG9mIHRoZSBvYmplY3RcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17ZGVsZXRlSXRlbX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9ucyBmbGV4IGZsZXgtcm93IGdhcC0zXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1zbSBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHNcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgbmFtZT1cIkdvYWxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gZHJvcGRvd24tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHRhYkluZGV4PXswfSByb2xlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIG0tMVwiPlxuICAgICAgICAgICAgICAgICAgQ2xpY2tcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudCB6LVsxXSBtZW51IHAtMiBzaGFkb3cgYmctYmFzZS0xMDAgcm91bmRlZC1ib3ggdy01MlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhldmVudCwgXCJDYXJlZXJcIil9PkNhcmVlcjwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGV2ZW50LCBcIkhlYWx0aFwiKX0+SGVhbHRoPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soZXZlbnQsIFwiUmVsYXRpb25zaGlwXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICBSZWxhdGlvbnNoaXBcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGV2ZW50LCBcIkVudGVydGFpbm1lbnRcIil9PlxuICAgICAgICAgICAgICAgICAgICBFbnRlcnRhaW5tZW50XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8bGk+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR29hbENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdvYWxJdGVtIiwiR29hbENhcmQiLCJwcm9wcyIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsImdvYWxzIiwic2V0R29hbHMiLCJmZXRjaEdvYWxzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGljayIsImNhdGVnb3J5IiwicHJldmVudERlZmF1bHQiLCJjYXRlZ29yeUlEIiwibG9nIiwibmV3R29hbCIsInRpdGxlIiwidXNlciIsImdvYWxfdHlwZSIsIm1vbnRoIiwid2VlayIsImRheSIsImNvbXBsZXRlZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJwcmV2R29hbHMiLCJjYXRjaCIsImRlbGV0ZUl0ZW0iLCJpZCIsImZpbHRlciIsImluZGV4IiwiZGl2IiwidGFiSW5kZXgiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJ1bCIsIm1hcCIsImdvYWwiLCJ0ZXh0Iiwib25DaGVja2VkIiwiZm9ybSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJuYW1lIiwicm9sZSIsImxpIiwiYSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/GoalCard.tsx\n"));

/***/ })

});