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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GoalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoalItem */ \"(app-pages-browser)/./app/Components/GoalItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GoalCard(props) {\n    _s();\n    let weekNumber = props.week;\n    let month = props.month;\n    let day = props.dayOfWeek;\n    if (props.type === \"Weekly\") {\n        day = null;\n        if (props.title === \"Week One\") {\n            weekNumber = 1;\n        }\n        if (props.title === \"Week Two\") {\n            weekNumber = 2;\n        }\n        if (props.title === \"Week Three\") {\n            weekNumber = 3;\n        }\n        if (props.title === \"Week Four\") {\n            weekNumber = 4;\n        }\n    }\n    if (props.type === \"Daily\") {\n        if (props.title === \"Day one\") {\n            day = 1;\n        }\n        if (props.title === \"Day Two\") {\n            day = 2;\n        }\n        if (props.title === \"Day Three\") {\n            day = 3;\n        }\n        if (props.title === \"Day Four\") {\n            day = 4;\n        }\n        if (props.title === \"Day Five\") {\n            day = 5;\n        }\n        if (props.title === \"Day Six\") {\n            day = 6;\n        }\n        if (props.title === \"Day Seven\") {\n            day = 7;\n        }\n    }\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [goals, setGoals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGoals = async ()=>{\n            // Example: Fetching goals for week 1 where day is null\n            const numericMonth = Number(month);\n            let query = \"month=\".concat(numericMonth, \"&week=\").concat(weekNumber);\n            if (day !== null) {\n                query += \"&day=\".concat(day);\n            }\n            try {\n                const response = await fetch(\"http://127.0.0.1:8000/planner/goals/?\".concat(query));\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setGoals(data); // Initialize goals state with fetched data\n            } catch (error) {\n                console.error(\"Failed to fetch goals:\", error);\n            }\n        };\n        fetchGoals();\n    }, [\n        month,\n        weekNumber,\n        day\n    ]);\n    //console.log(goals);\n    function handleChange(event1) {\n        setInputText(event1.target.value);\n    }\n    function handleClick(event1, category) {\n        event1.preventDefault();\n        let categoryID;\n        let goalType;\n        if (category === \"Health\") {\n            categoryID = 5;\n        }\n        if (category === \"Career\") {\n            categoryID = 6;\n        }\n        if (category === \"Relationship\") {\n            categoryID = 7;\n        }\n        if (category === \"Entertainment\") {\n            categoryID = 8;\n        }\n        if (props.type === \"Weekly\") {\n            goalType = \"W\";\n        }\n        if (props.type === \"Monthly\") {\n            goalType = \"M\";\n        }\n        if (props.type === \"Daily\") {\n            goalType = \"D\";\n        }\n        const newGoal = {\n            title: inputText,\n            user: 1,\n            goal_type: goalType,\n            month: props.month,\n            week: weekNumber,\n            day: day,\n            completed: false,\n            category: categoryID\n        };\n        fetch(\"http://127.0.0.1:8000/planner/goals/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newGoal)\n        }).then((response)=>response.json()).then((data)=>{\n            setGoals((prevGoals)=>[\n                    ...prevGoals,\n                    data\n                ]); // Assuming the backend returns the created goal with an id\n            setInputText(\"\");\n        }).catch((error)=>console.error(\"Error adding goal:\", error));\n    }\n    function deleteItem(goalId) {\n        // First, make a request to the backend to delete the goal\n        fetch(\"http://127.0.0.1:8000/planner/goals/\".concat(goalId, \"/\"), {\n            method: \"DELETE\",\n            headers: {\n                // If your API requires authentication, make sure to include the necessary headers\n                // \"Authorization\": \"Bearer YOUR_TOKEN_HERE\",\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            if (!response.ok) {\n                // If the server responds with an error, throw an error\n                throw new Error(\"Network response was not ok\");\n            }\n            // If the delete request was successful, update the local state\n            setGoals((prevGoals)=>prevGoals.filter((goal)=>goal.id !== goalId));\n        }).catch((error)=>{\n            console.error(\"Error deleting goal:\", error);\n        // Here, you might want to handle the error, perhaps by showing an error message to the user\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        tabIndex: 0,\n        className: \"collapse bg-[#fdf2bf] overflow-visible\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\"\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"collapse-title text-black\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container collapse-content z-10 overflow-visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-70 gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc  \",\n                            children: goals.map((goal, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    id: goal.id,\n                                    text: goal.title,\n                                    completed: goal.completed,\n                                    category: goal.category,\n                                    onDoubleClick: ()=>deleteItem(goal.id),\n                                    goalCategory: false\n                                }, index, false, {\n                                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                    lineNumber: 154,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                            lineNumber: 152,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-actions flex flex-row gap-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Type here\",\n                                        className: \"input input-sm input-bordered w-full max-w-xs\",\n                                        onChange: handleChange,\n                                        name: \"Goal\",\n                                        value: inputText\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                        lineNumber: 168,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dropdown dropdown-right\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                tabIndex: 0,\n                                                role: \"button\",\n                                                className: \"btn m-1\",\n                                                children: \"Click\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                lineNumber: 177,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                tabIndex: 0,\n                                                className: \"dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Career\"),\n                                                            children: \"Career\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 185,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 184,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Health\"),\n                                                            children: \"Health\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 188,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 187,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Relationship\"),\n                                                            children: \"Relationship\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 191,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 190,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Entertainment\"),\n                                                            children: \"Entertainment\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 195,\n                                                            columnNumber: 19\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 194,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                lineNumber: 180,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                        lineNumber: 176,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                lineNumber: 167,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                            lineNumber: 166,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                    lineNumber: 151,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n        lineNumber: 147,\n        columnNumber: 5\n    }, this);\n}\n_s(GoalCard, \"fXnIRfSpzza4iIq8f6TLGfF+JOs=\");\n_c = GoalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoalCard);\nvar _c;\n$RefreshReg$(_c, \"GoalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL0dvYWxDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ2pCO0FBSWxDLFNBQVNJLFNBQVNDLEtBQUs7O0lBQ3JCLElBQUlDLGFBQVdELE1BQU1FLElBQUk7SUFDekIsSUFBSUMsUUFBT0gsTUFBTUcsS0FBSztJQUN0QixJQUFJQyxNQUFJSixNQUFNSyxTQUFTO0lBT3JCLElBQUdMLE1BQU1NLElBQUksS0FBRyxVQUFTO1FBQ3ZCRixNQUFJO1FBQ0osSUFBSUosTUFBTU8sS0FBSyxLQUFJLFlBQVk7WUFBQ04sYUFBVztRQUFDO1FBQzVDLElBQUlELE1BQU1PLEtBQUssS0FBSSxZQUFXO1lBQUNOLGFBQVc7UUFBQztRQUMzQyxJQUFJRCxNQUFNTyxLQUFLLEtBQUksY0FBYTtZQUFDTixhQUFXO1FBQUM7UUFDN0MsSUFBR0QsTUFBTU8sS0FBSyxLQUFHLGFBQVk7WUFBQ04sYUFBVztRQUFDO0lBRTVDO0lBRUEsSUFBR0QsTUFBTU0sSUFBSSxLQUFHLFNBQVE7UUFDdEIsSUFBSU4sTUFBTU8sS0FBSyxLQUFJLFdBQVc7WUFBQ0gsTUFBSTtRQUFDO1FBQ3BDLElBQUlKLE1BQU1PLEtBQUssS0FBSSxXQUFVO1lBQUNILE1BQUk7UUFBQztRQUNuQyxJQUFJSixNQUFNTyxLQUFLLEtBQUksYUFBWTtZQUFDSCxNQUFJO1FBQUM7UUFDckMsSUFBSUosTUFBTU8sS0FBSyxLQUFJLFlBQVc7WUFBQ0gsTUFBSTtRQUFDO1FBQ3BDLElBQUdKLE1BQU1PLEtBQUssS0FBRyxZQUFXO1lBQUNILE1BQUk7UUFBQztRQUNsQyxJQUFHSixNQUFNTyxLQUFLLEtBQUcsV0FBVTtZQUFDSCxNQUFJO1FBQUM7UUFDakMsSUFBR0osTUFBTU8sS0FBSyxLQUFHLGFBQVk7WUFBQ0gsTUFBSTtRQUFDO0lBR3JDO0lBSUYsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FB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Ozs7O2tFQUd4RCw4REFBQ3dDO2tFQUNELDRFQUFDQzs0REFBRUMsU0FBUyxJQUFNdkMsWUFBWUgsT0FBTztzRUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVd6RTtHQXZNUzFCO0tBQUFBO0FBeU1ULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Db21wb25lbnRzL0dvYWxDYXJkLnRzeD9kMjJlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHb2FsSXRlbSBmcm9tIFwiLi9Hb2FsSXRlbVwiO1xuXG5cblxuZnVuY3Rpb24gR29hbENhcmQocHJvcHMpIHtcbiAgbGV0IHdlZWtOdW1iZXI9cHJvcHMud2Vla1xuICBsZXQgbW9udGggPXByb3BzLm1vbnRoIFxuICBsZXQgZGF5PXByb3BzLmRheU9mV2Vla1xuXG5cblxuICBcblxuXG4gICAgaWYocHJvcHMudHlwZT09PVwiV2Vla2x5XCIpe1xuICAgICAgZGF5PW51bGxcbiAgICAgIGlmIChwcm9wcy50aXRsZSA9PT1cIldlZWsgT25lXCIpIHt3ZWVrTnVtYmVyPTF9XG4gICAgICBpZiAocHJvcHMudGl0bGUgPT09XCJXZWVrIFR3b1wiKXt3ZWVrTnVtYmVyPTJ9XG4gICAgICBpZiAocHJvcHMudGl0bGUgPT09XCJXZWVrIFRocmVlXCIpe3dlZWtOdW1iZXI9M31cbiAgICAgIGlmKHByb3BzLnRpdGxlPT09XCJXZWVrIEZvdXJcIil7d2Vla051bWJlcj00fVxuXG4gICAgfVxuXG4gICAgaWYocHJvcHMudHlwZT09PVwiRGFpbHlcIil7XG4gICAgICBpZiAocHJvcHMudGl0bGUgPT09XCJEYXkgb25lXCIpIHtkYXk9MX1cbiAgICAgIGlmIChwcm9wcy50aXRsZSA9PT1cIkRheSBUd29cIil7ZGF5PTJ9XG4gICAgICBpZiAocHJvcHMudGl0bGUgPT09XCJEYXkgVGhyZWVcIil7ZGF5PTN9XG4gICAgICBpZiAocHJvcHMudGl0bGUgPT09XCJEYXkgRm91clwiKXtkYXk9NH1cbiAgICAgIGlmKHByb3BzLnRpdGxlPT09XCJEYXkgRml2ZVwiKXtkYXk9NX1cbiAgICAgIGlmKHByb3BzLnRpdGxlPT09XCJEYXkgU2l4XCIpe2RheT02fVxuICAgICAgaWYocHJvcHMudGl0bGU9PT1cIkRheSBTZXZlblwiKXtkYXk9N31cblxuXG4gICAgfVxuICBcbiAgICBcbiAgXG4gIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2dvYWxzLCBzZXRHb2Fsc10gPSB1c2VTdGF0ZShbXSk7IFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hHb2FscyA9IGFzeW5jICgpID0+IHtcbiAgICAgIC8vIEV4YW1wbGU6IEZldGNoaW5nIGdvYWxzIGZvciB3ZWVrIDEgd2hlcmUgZGF5IGlzIG51bGxcbiAgICAgXG4gICAgICBjb25zdCBudW1lcmljTW9udGggPSBOdW1iZXIobW9udGgpOyBcbiAgICAgIGxldCBxdWVyeSA9IGBtb250aD0ke251bWVyaWNNb250aH0md2Vlaz0ke3dlZWtOdW1iZXJ9YDtcbiAgICAgIGlmIChkYXkgIT09IG51bGwpIHtcbiAgICAgICAgcXVlcnkgKz0gYCZkYXk9JHtkYXl9YDtcbiAgICAgIH1cbiAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvcGxhbm5lci9nb2Fscy8/JHtxdWVyeX1gKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBva1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRHb2FscyhkYXRhKTsgLy8gSW5pdGlhbGl6ZSBnb2FscyBzdGF0ZSB3aXRoIGZldGNoZWQgZGF0YVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBnb2FsczpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIGZldGNoR29hbHMoKTtcbiAgfSwgW21vbnRoLCB3ZWVrTnVtYmVyLGRheV0pO1xuXG4gIC8vY29uc29sZS5sb2coZ29hbHMpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHNldElucHV0VGV4dChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQsIGNhdGVnb3J5KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgY2F0ZWdvcnlJRFxuICAgIGxldCBnb2FsVHlwZVxuICAgIFxuICAgIFxuICBcbiAgXG4gICAgaWYgKGNhdGVnb3J5PT09XCJIZWFsdGhcIil7IGNhdGVnb3J5SUQ9NSB9XG4gICAgaWYgKGNhdGVnb3J5PT09XCJDYXJlZXJcIil7Y2F0ZWdvcnlJRD02fVxuICAgIGlmIChjYXRlZ29yeT09PVwiUmVsYXRpb25zaGlwXCIpe2NhdGVnb3J5SUQ9N31cbiAgICBpZihjYXRlZ29yeT09PVwiRW50ZXJ0YWlubWVudFwiKXtjYXRlZ29yeUlEPTh9XG5cbiAgICBpZiAocHJvcHMudHlwZSA9PT1cIldlZWtseVwiKXtnb2FsVHlwZT1cIldcIn1cbiAgICBpZiAocHJvcHMudHlwZSA9PT1cIk1vbnRobHlcIil7Z29hbFR5cGU9XCJNXCJ9XG4gICAgaWYgKHByb3BzLnR5cGUgPT09XCJEYWlseVwiKXtnb2FsVHlwZT1cIkRcIn1cblxuICAgIFxuICBcblxuICAgIGNvbnN0IG5ld0dvYWwgPSB7XG4gICAgICB0aXRsZTogaW5wdXRUZXh0LFxuICAgICAgdXNlcjogMSxcbiAgICAgIGdvYWxfdHlwZTpnb2FsVHlwZSxcbiAgICAgIG1vbnRoOiBwcm9wcy5tb250aCxcbiAgICAgIHdlZWs6d2Vla051bWJlcixcbiAgICAgIGRheTogZGF5LFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeUlELFxuICAgICAgXG4gICAgfTtcblxuICAgIGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL3BsYW5uZXIvZ29hbHMvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0dvYWwpLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldEdvYWxzKChwcmV2R29hbHMpID0+IFsuLi5wcmV2R29hbHMsIGRhdGFdKTsgLy8gQXNzdW1pbmcgdGhlIGJhY2tlbmQgcmV0dXJucyB0aGUgY3JlYXRlZCBnb2FsIHdpdGggYW4gaWRcbiAgICAgICAgc2V0SW5wdXRUZXh0KFwiXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZ29hbDpcIiwgZXJyb3IpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oZ29hbElkKSB7XG4gICAgXG4gICAgLy8gRmlyc3QsIG1ha2UgYSByZXF1ZXN0IHRvIHRoZSBiYWNrZW5kIHRvIGRlbGV0ZSB0aGUgZ29hbFxuICAgIGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvcGxhbm5lci9nb2Fscy8ke2dvYWxJZH0vYCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgLy8gSWYgeW91ciBBUEkgcmVxdWlyZXMgYXV0aGVudGljYXRpb24sIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHRoZSBuZWNlc3NhcnkgaGVhZGVyc1xuICAgICAgICAvLyBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgWU9VUl9UT0tFTl9IRVJFXCIsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgLy8gSWYgdGhlIHNlcnZlciByZXNwb25kcyB3aXRoIGFuIGVycm9yLCB0aHJvdyBhbiBlcnJvclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgfVxuICAgICAgLy8gSWYgdGhlIGRlbGV0ZSByZXF1ZXN0IHdhcyBzdWNjZXNzZnVsLCB1cGRhdGUgdGhlIGxvY2FsIHN0YXRlXG4gICAgICBzZXRHb2FscyhwcmV2R29hbHMgPT4gcHJldkdvYWxzLmZpbHRlcihnb2FsID0+IGdvYWwuaWQgIT09IGdvYWxJZCkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBnb2FsOlwiLCBlcnJvcik7XG4gICAgICAvLyBIZXJlLCB5b3UgbWlnaHQgd2FudCB0byBoYW5kbGUgdGhlIGVycm9yLCBwZXJoYXBzIGJ5IHNob3dpbmcgYW4gZXJyb3IgbWVzc2FnZSB0byB0aGUgdXNlclxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHRhYkluZGV4PXswfSBjbGFzc05hbWU9XCJjb2xsYXBzZSBiZy1bI2ZkZjJiZl0gb3ZlcmZsb3ctdmlzaWJsZVwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlLXRpdGxlIHRleHQtYmxhY2tcIj57cHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2xsYXBzZS1jb250ZW50IHotMTAgb3ZlcmZsb3ctdmlzaWJsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy03MCBnYXAtM1wiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgIFwiPlxuICAgICAgICAgICAge2dvYWxzLm1hcCgoZ29hbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEdvYWxJdGVtXG4gICAgICAgICAgICAgICAgaWQ9e2dvYWwuaWR9XG4gICAgICAgICAgICAgICAgdGV4dD17Z29hbC50aXRsZX0gXG4gICAgICAgICAgICAgICAgY29tcGxldGVkPXtnb2FsLmNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGNhdGVnb3J5ID17Z29hbC5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKGdvYWwuaWQpfVxuICAgICAgICAgICAgICAgIGdvYWxDYXRlZ29yeT17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMgZmxleCBmbGV4LXJvdyBnYXAtM1wiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtc20gaW5wdXQtYm9yZGVyZWQgdy1mdWxsIG1heC13LXhzXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJHb2FsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRUZXh0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGRyb3Bkb3duLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiB0YWJJbmRleD17MH0gcm9sZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBtLTFcIj5cbiAgICAgICAgICAgICAgICAgIENsaWNrXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnQgei1bMV0gbWVudSBwLTIgc2hhZG93IGJnLWJhc2UtMTAwIHJvdW5kZWQtYm94IHctNTJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soZXZlbnQsIFwiQ2FyZWVyXCIpfT5DYXJlZXI8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhldmVudCwgXCJIZWFsdGhcIil9PkhlYWx0aDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGV2ZW50LCBcIlJlbGF0aW9uc2hpcFwiKX0+UmVsYXRpb25zaGlwXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhldmVudCwgXCJFbnRlcnRhaW5tZW50XCIpfT5FbnRlcnRhaW5tZW50XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHb2FsQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR29hbEl0ZW0iLCJHb2FsQ2FyZCIsInByb3BzIiwid2Vla051bWJlciIsIndlZWsiLCJtb250aCIsImRheSIsImRheU9mV2VlayIsInR5cGUiLCJ0aXRsZSIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsImdvYWxzIiwic2V0R29hbHMiLCJmZXRjaEdvYWxzIiwibnVtZXJpY01vbnRoIiwiTnVtYmVyIiwicXVlcnkiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwiY2F0ZWdvcnkiLCJwcmV2ZW50RGVmYXVsdCIsImNhdGVnb3J5SUQiLCJnb2FsVHlwZSIsIm5ld0dvYWwiLCJ1c2VyIiwiZ29hbF90eXBlIiwiY29tcGxldGVkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInByZXZHb2FscyIsImNhdGNoIiwiZGVsZXRlSXRlbSIsImdvYWxJZCIsImZpbHRlciIsImdvYWwiLCJpZCIsImRpdiIsInRhYkluZGV4IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ1bCIsIm1hcCIsImluZGV4IiwidGV4dCIsIm9uRG91YmxlQ2xpY2siLCJnb2FsQ2F0ZWdvcnkiLCJmb3JtIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm5hbWUiLCJyb2xlIiwibGkiLCJhIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/GoalCard.tsx\n"));

/***/ })

});