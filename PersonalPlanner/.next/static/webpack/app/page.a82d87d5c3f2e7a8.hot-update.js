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

/***/ "(app-pages-browser)/./app/Components/GoalCategoryCard.tsx":
/*!*********************************************!*\
  !*** ./app/Components/GoalCategoryCard.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GoalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoalItem */ \"(app-pages-browser)/./app/Components/GoalItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GoalCard(props) {\n    _s();\n    let weekNumber;\n    let month = props.month;\n    let categoryID;\n    if (props.title === \"Career\") {\n        categoryID = 6;\n    }\n    if (props.title === \"Health\") {\n        categoryID = 5;\n    }\n    if (props.title === \"Relationship\") {\n        categoryID = 7;\n    }\n    if (props.title === \"Entertainment\") {\n        categoryID = 8;\n    }\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [goals, setGoals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGoals = async ()=>{\n            // Example: Fetching goals for week 1 where day is null\n            const numericMonth = Number(month);\n            const query = \"month=\".concat(numericMonth, \"&category=\").concat(categoryID, \"&day=null&week=null\");\n            try {\n                const response = await fetch(\"http://127.0.0.1:8000/planner/goals/?\".concat(query));\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setGoals(data); // Initialize goals state with fetched data\n            } catch (error) {\n                console.error(\"Failed to fetch goals:\", error);\n            }\n        };\n        fetchGoals();\n    }, [\n        month,\n        weekNumber\n    ]);\n    //console.log(goals);\n    function handleChange(event1) {\n        setInputText(event1.target.value);\n    }\n    function handleClick(event1, category) {\n        event1.preventDefault();\n        let categoryID;\n        let goalType;\n        if (category === \"Health\") {\n            categoryID = 5;\n        }\n        if (category === \"Career\") {\n            categoryID = 6;\n        }\n        if (category === \"Relationship\") {\n            categoryID = 7;\n        }\n        if (category === \"Entertainment\") {\n            categoryID = 8;\n        }\n        if (props.type === \"Weekly\") {\n            goalType = \"W\";\n        }\n        if (props.type === \"Monthly\") {\n            goalType = \"M\";\n        }\n        if (props.type === \"Daily\") {\n            goalType = \"D\";\n        }\n        const newGoal = {\n            title: inputText,\n            user: 1,\n            goal_type: goalType,\n            month: props.month,\n            week: weekNumber,\n            day: null,\n            completed: false,\n            category: categoryID\n        };\n        fetch(\"http://127.0.0.1:8000/planner/goals/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newGoal)\n        }).then((response)=>response.json()).then((data)=>{\n            setGoals((prevGoals)=>[\n                    ...prevGoals,\n                    data\n                ]); // Assuming the backend returns the created goal with an id\n            setInputText(\"\");\n        }).catch((error)=>console.error(\"Error adding goal:\", error));\n    }\n    function deleteItem(goalId) {\n        // First, make a request to the backend to delete the goal\n        fetch(\"http://127.0.0.1:8000/planner/goals/\".concat(goalId, \"/\"), {\n            method: \"DELETE\",\n            headers: {\n                // If your API requires authentication, make sure to include the necessary headers\n                // \"Authorization\": \"Bearer YOUR_TOKEN_HERE\",\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            if (!response.ok) {\n                // If the server responds with an error, throw an error\n                throw new Error(\"Network response was not ok\");\n            }\n            // If the delete request was successful, update the local state\n            setGoals((prevGoals)=>prevGoals.filter((goal)=>goal.id !== goalId));\n        }).catch((error)=>{\n            console.error(\"Error deleting goal:\", error);\n        // Here, you might want to handle the error, perhaps by showing an error message to the user\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        tabIndex: 0,\n        className: \"collapse bg-[#fdf2bf] overflow-visible\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\"\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"collapse-title text-black\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container collapse-content z-30 overflow-visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-70 gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc  \",\n                            children: goals.map((goal, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    id: goal.id,\n                                    text: goal.title,\n                                    completed: goal.completed,\n                                    category: goal.category,\n                                    onDoubleClick: ()=>deleteItem(goal.id)\n                                }, index, false, {\n                                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-actions flex flex-row gap-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Type here\",\n                                        className: \"input input-sm input-bordered w-full max-w-xs\",\n                                        onChange: handleChange,\n                                        name: \"Goal\",\n                                        value: inputText\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                        lineNumber: 145,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dropdown dropdown-right\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                tabIndex: 0,\n                                                role: \"button\",\n                                                className: \"btn m-1\",\n                                                children: \"Click\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                                lineNumber: 154,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                tabIndex: 0,\n                                                className: \"dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Career\"),\n                                                            children: \"Career\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                                            lineNumber: 162,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                                        lineNumber: 161,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Health\"),\n                                                            children: \"Health\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                                            lineNumber: 165,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                                        lineNumber: 164,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Relationship\"),\n                                                            children: \"Relationship\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                                            lineNumber: 168,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                                        lineNumber: 167,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Entertainment\"),\n                                                            children: \"Entertainment\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                                            lineNumber: 172,\n                                                            columnNumber: 19\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                                        lineNumber: 171,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                                lineNumber: 157,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                        lineNumber: 153,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                            lineNumber: 143,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, this);\n}\n_s(GoalCard, \"fXnIRfSpzza4iIq8f6TLGfF+JOs=\");\n_c = GoalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoalCard);\nvar _c;\n$RefreshReg$(_c, \"GoalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL0dvYWxDYXRlZ29yeUNhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDbUQ7QUFDakI7QUFJbEMsU0FBU0ksU0FBU0MsS0FBSzs7SUFDckIsSUFBSUM7SUFDSixJQUFJQyxRQUFPRixNQUFNRSxLQUFLO0lBQ3RCLElBQUlDO0lBTUYsSUFBSUgsTUFBTUksS0FBSyxLQUFJLFVBQVU7UUFBQ0QsYUFBVztJQUFDO0lBQzFDLElBQUlILE1BQU1JLEtBQUssS0FBSSxVQUFTO1FBQUNELGFBQVc7SUFBQztJQUN6QyxJQUFJSCxNQUFNSSxLQUFLLEtBQUksZ0JBQWU7UUFBQ0QsYUFBVztJQUFDO0lBQy9DLElBQUdILE1BQU1JLEtBQUssS0FBRyxpQkFBZ0I7UUFBQ0QsYUFBVztJQUFDO0lBRWhELE1BQU0sQ0FBQ0UsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUMsRUFBRTtJQUVyQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxhQUFhO1lBQ2pCLHVEQUF1RDtZQUV2RCxNQUFNQyxlQUFlQyxPQUFPVDtZQUM1QixNQUFNVSxRQUFRLFNBQWtDVCxPQUF6Qk8sY0FBYSxjQUF1QixPQUFYUCxZQUFXO1lBRTNELElBQUk7Z0JBQ0YsTUFBTVUsV0FBVyxNQUFNQyxNQUFNLHdDQUE4QyxPQUFORjtnQkFDckUsSUFBSSxDQUFDQyxTQUFTRSxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtnQkFDbEI7Z0JBQ0EsTUFBTUMsT0FBTyxNQUFNSixTQUFTSyxJQUFJO2dCQUNoQ1YsU0FBU1MsT0FBTywyQ0FBMkM7WUFDN0QsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtZQUMxQztRQUNGO1FBRUFWO0lBQ0YsR0FBRztRQUFDUDtRQUFPRDtLQUFXO0lBRXRCLHFCQUFxQjtJQUVyQixT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O3dDQUNWUyxVQUFVdkM7d0NBQ1Z3QyxNQUFLO3dDQUNMckMsT0FBT25COzs7Ozs7a0RBRVQsOERBQUM0Qzt3Q0FBSUUsV0FBVTs7MERBQ2IsOERBQUNGO2dEQUFJQyxVQUFVO2dEQUFHWSxNQUFLO2dEQUFTWCxXQUFVOzBEQUFVOzs7Ozs7MERBR3BELDhEQUFDRTtnREFDQ0gsVUFBVTtnREFDVkMsV0FBVTs7a0VBRVYsOERBQUNZO2tFQUNDLDRFQUFDQzs0REFBRUMsU0FBUyxJQUFNeEMsWUFBWUgsT0FBTztzRUFBVzs7Ozs7Ozs7Ozs7a0VBRWxELDhEQUFDeUM7a0VBQ0MsNEVBQUNDOzREQUFFQyxTQUFTLElBQU14QyxZQUFZSCxPQUFPO3NFQUFXOzs7Ozs7Ozs7OztrRUFFbEQsOERBQUN5QztrRUFDQyw0RUFBQ0M7NERBQUVDLFNBQVMsSUFBTXhDLFlBQVlILE9BQU87c0VBQWlCOzs7Ozs7Ozs7OztrRUFHeEQsOERBQUN5QztrRUFDRCw0RUFBQ0M7NERBQUVDLFNBQVMsSUFBTXhDLFlBQVlILE9BQU87c0VBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXekU7R0FoTFN2QjtLQUFBQTtBQWtMVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvQ29tcG9uZW50cy9Hb2FsQ2F0ZWdvcnlDYXJkLnRzeD9hOWNlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHb2FsSXRlbSBmcm9tIFwiLi9Hb2FsSXRlbVwiO1xuXG5cblxuZnVuY3Rpb24gR29hbENhcmQocHJvcHMpIHtcbiAgbGV0IHdlZWtOdW1iZXJcbiAgbGV0IG1vbnRoID1wcm9wcy5tb250aCBcbiAgbGV0IGNhdGVnb3J5SURcbiAgXG5cblxuICBcbiAgXG4gICAgaWYgKHByb3BzLnRpdGxlID09PVwiQ2FyZWVyXCIpIHtjYXRlZ29yeUlEPTZ9XG4gICAgaWYgKHByb3BzLnRpdGxlID09PVwiSGVhbHRoXCIpe2NhdGVnb3J5SUQ9NX1cbiAgICBpZiAocHJvcHMudGl0bGUgPT09XCJSZWxhdGlvbnNoaXBcIil7Y2F0ZWdvcnlJRD03fVxuICAgIGlmKHByb3BzLnRpdGxlPT09XCJFbnRlcnRhaW5tZW50XCIpe2NhdGVnb3J5SUQ9OH1cbiAgXG4gIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2dvYWxzLCBzZXRHb2Fsc10gPSB1c2VTdGF0ZShbXSk7IFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hHb2FscyA9IGFzeW5jICgpID0+IHtcbiAgICAgIC8vIEV4YW1wbGU6IEZldGNoaW5nIGdvYWxzIGZvciB3ZWVrIDEgd2hlcmUgZGF5IGlzIG51bGxcbiAgICAgXG4gICAgICBjb25zdCBudW1lcmljTW9udGggPSBOdW1iZXIobW9udGgpOyBcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gYG1vbnRoPSR7bnVtZXJpY01vbnRofSZjYXRlZ29yeT0ke2NhdGVnb3J5SUR9JmRheT1udWxsJndlZWs9bnVsbGA7XG4gIFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3BsYW5uZXIvZ29hbHMvPyR7cXVlcnl9YCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2tcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0R29hbHMoZGF0YSk7IC8vIEluaXRpYWxpemUgZ29hbHMgc3RhdGUgd2l0aCBmZXRjaGVkIGRhdGFcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZ29hbHM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICBmZXRjaEdvYWxzKCk7XG4gIH0sIFttb250aCwgd2Vla051bWJlcl0pO1xuXG4gIC8vY29uc29sZS5sb2coZ29hbHMpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHNldElucHV0VGV4dChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQsIGNhdGVnb3J5KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY2F0ZWdvcnlJRFxuICAgIGxldCBnb2FsVHlwZVxuICAgIFxuICAgIFxuICBcbiAgXG4gICAgaWYgKGNhdGVnb3J5PT09XCJIZWFsdGhcIil7IGNhdGVnb3J5SUQ9NSB9XG4gICAgaWYgKGNhdGVnb3J5PT09XCJDYXJlZXJcIil7Y2F0ZWdvcnlJRD02fVxuICAgIGlmIChjYXRlZ29yeT09PVwiUmVsYXRpb25zaGlwXCIpe2NhdGVnb3J5SUQ9N31cbiAgICBpZihjYXRlZ29yeT09PVwiRW50ZXJ0YWlubWVudFwiKXtjYXRlZ29yeUlEPTh9XG5cbiAgICBpZiAocHJvcHMudHlwZSA9PT1cIldlZWtseVwiKXtnb2FsVHlwZT1cIldcIn1cbiAgICBpZiAocHJvcHMudHlwZSA9PT1cIk1vbnRobHlcIil7Z29hbFR5cGU9XCJNXCJ9XG4gICAgaWYgKHByb3BzLnR5cGUgPT09XCJEYWlseVwiKXtnb2FsVHlwZT1cIkRcIn1cblxuICAgIFxuICAgIFxuXG4gICAgY29uc3QgbmV3R29hbCA9IHtcbiAgICAgIHRpdGxlOiBpbnB1dFRleHQsXG4gICAgICB1c2VyOiAxLFxuICAgICAgZ29hbF90eXBlOmdvYWxUeXBlLFxuICAgICAgbW9udGg6IHByb3BzLm1vbnRoLFxuICAgICAgd2Vlazp3ZWVrTnVtYmVyLFxuICAgICAgZGF5OiBudWxsLFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeUlELFxuICAgICAgXG4gICAgfTtcblxuICAgIGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL3BsYW5uZXIvZ29hbHMvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0dvYWwpLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldEdvYWxzKChwcmV2R29hbHMpID0+IFsuLi5wcmV2R29hbHMsIGRhdGFdKTsgLy8gQXNzdW1pbmcgdGhlIGJhY2tlbmQgcmV0dXJucyB0aGUgY3JlYXRlZCBnb2FsIHdpdGggYW4gaWRcbiAgICAgICAgc2V0SW5wdXRUZXh0KFwiXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZ29hbDpcIiwgZXJyb3IpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oZ29hbElkKSB7XG4gICAgXG4gICAgLy8gRmlyc3QsIG1ha2UgYSByZXF1ZXN0IHRvIHRoZSBiYWNrZW5kIHRvIGRlbGV0ZSB0aGUgZ29hbFxuICAgIGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvcGxhbm5lci9nb2Fscy8ke2dvYWxJZH0vYCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLy8gSWYgeW91ciBBUEkgcmVxdWlyZXMgYXV0aGVudGljYXRpb24sIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHRoZSBuZWNlc3NhcnkgaGVhZGVyc1xuICAgICAgICAvLyBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgWU9VUl9UT0tFTl9IRVJFXCIsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgLy8gSWYgdGhlIHNlcnZlciByZXNwb25kcyB3aXRoIGFuIGVycm9yLCB0aHJvdyBhbiBlcnJvclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgfVxuICAgICAgLy8gSWYgdGhlIGRlbGV0ZSByZXF1ZXN0IHdhcyBzdWNjZXNzZnVsLCB1cGRhdGUgdGhlIGxvY2FsIHN0YXRlXG4gICAgICBzZXRHb2FscyhwcmV2R29hbHMgPT4gcHJldkdvYWxzLmZpbHRlcihnb2FsID0+IGdvYWwuaWQgIT09IGdvYWxJZCkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBnb2FsOlwiLCBlcnJvcik7XG4gICAgICAvLyBIZXJlLCB5b3UgbWlnaHQgd2FudCB0byBoYW5kbGUgdGhlIGVycm9yLCBwZXJoYXBzIGJ5IHNob3dpbmcgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgdXNlclxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJjb2xsYXBzZSBiZy1bI2ZkZjJiZl0gb3ZlcmZsb3ctdmlzaWJsZVwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlLXRpdGxlIHRleHQtYmxhY2tcIj57cHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2xsYXBzZS1jb250ZW50IHotMzAgb3ZlcmZsb3ctdmlzaWJsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy03MCBnYXAtM1wiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgIFwiPlxuICAgICAgICAgICAge2dvYWxzLm1hcCgoZ29hbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEdvYWxJdGVtXG4gICAgICAgICAgICAgICAgaWQ9e2dvYWwuaWR9XG4gICAgICAgICAgICAgICAgdGV4dD17Z29hbC50aXRsZX0gXG4gICAgICAgICAgICAgICAgY29tcGxldGVkPXtnb2FsLmNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNhdGVnb3J5ID17Z29hbC5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKGdvYWwuaWQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25zIGZsZXggZmxleC1yb3cgZ2FwLTNcIj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlucHV0LXNtIGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14c1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBuYW1lPVwiR29hbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VGV4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93biBkcm9wZG93bi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgdGFiSW5kZXg9ezB9IHJvbGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gbS0xXCI+XG4gICAgICAgICAgICAgICAgICBDbGlja1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50IHotWzFdIG1lbnUgcC0yIHNoYWRvdyBiZy1iYXNlLTEwMCByb3VuZGVkLWJveCB3LTUyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGV2ZW50LCBcIkNhcmVlclwiKX0+Q2FyZWVyPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soZXZlbnQsIFwiSGVhbHRoXCIpfT5IZWFsdGg8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhldmVudCwgXCJSZWxhdGlvbnNoaXBcIil9PlJlbGF0aW9uc2hpcFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soZXZlbnQsIFwiRW50ZXJ0YWlubWVudFwiKX0+RW50ZXJ0YWlubWVudFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR29hbENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdvYWxJdGVtIiwiR29hbENhcmQiLCJwcm9wcyIsIndlZWtOdW1iZXIiLCJtb250aCIsImNhdGVnb3J5SUQiLCJ0aXRsZSIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsImdvYWxzIiwic2V0R29hbHMiLCJmZXRjaEdvYWxzIiwibnVtZXJpY01vbnRoIiwiTnVtYmVyIiwicXVlcnkiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwiY2F0ZWdvcnkiLCJwcmV2ZW50RGVmYXVsdCIsImdvYWxUeXBlIiwidHlwZSIsIm5ld0dvYWwiLCJ1c2VyIiwiZ29hbF90eXBlIiwid2VlayIsImRheSIsImNvbXBsZXRlZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJwcmV2R29hbHMiLCJjYXRjaCIsImRlbGV0ZUl0ZW0iLCJnb2FsSWQiLCJmaWx0ZXIiLCJnb2FsIiwiaWQiLCJkaXYiLCJ0YWJJbmRleCIsImNsYXNzTmFtZSIsImlucHV0IiwidWwiLCJtYXAiLCJpbmRleCIsInRleHQiLCJvbkRvdWJsZUNsaWNrIiwiZm9ybSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJuYW1lIiwicm9sZSIsImxpIiwiYSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/GoalCategoryCard.tsx\n"));

/***/ })

});