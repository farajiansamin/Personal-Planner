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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GoalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoalItem */ \"(app-pages-browser)/./app/Components/GoalItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GoalCard(props) {\n    _s();\n    let weekNumber = props.week;\n    let month = props.month;\n    let day = props.dayOfWeek;\n    if (props.type === \"Weekly\") {\n        day = null;\n        if (props.title === \"Week One\") {\n            weekNumber = 1;\n        }\n        if (props.title === \"Week Two\") {\n            weekNumber = 2;\n        }\n        if (props.title === \"Week Three\") {\n            weekNumber = 3;\n        }\n        if (props.title === \"Week Four\") {\n            weekNumber = 4;\n        }\n    }\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [goals, setGoals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGoals = async ()=>{\n            // Example: Fetching goals for week 1 where day is null\n            const numericMonth = Number(month);\n            let query = \"month=\".concat(numericMonth, \"&week=\").concat(weekNumber);\n            if (day !== null) {\n                query += \"&day=\".concat(day);\n            }\n            try {\n                const response = await fetch(\"http://127.0.0.1:8000/planner/goals/?\".concat(query));\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setGoals(data); // Initialize goals state with fetched data\n            } catch (error) {\n                console.error(\"Failed to fetch goals:\", error);\n            }\n        };\n        fetchGoals();\n    }, [\n        month,\n        weekNumber\n    ]);\n    //console.log(goals);\n    function handleChange(event1) {\n        setInputText(event1.target.value);\n    }\n    function handleClick(event1, category) {\n        event1.preventDefault();\n        let categoryID;\n        let goalType;\n        if (category === \"Health\") {\n            categoryID = 5;\n        }\n        if (category === \"Career\") {\n            categoryID = 6;\n        }\n        if (category === \"Relationship\") {\n            categoryID = 7;\n        }\n        if (category === \"Entertainment\") {\n            categoryID = 8;\n        }\n        if (props.type === \"Weekly\") {\n            goalType = \"W\";\n        }\n        if (props.type === \"Monthly\") {\n            goalType = \"M\";\n        }\n        if (props.type === \"Daily\") {\n            goalType = \"D\";\n        }\n        if (props.type === \"Weely\") {\n            const newGoal1 = {\n                title: inputText,\n                user: 1,\n                goal_type: goalType,\n                month: props.month,\n                week: weekNumber,\n                day: null,\n                completed: false,\n                category: categoryID\n            };\n        }\n        fetch(\"http://127.0.0.1:8000/planner/goals/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newGoal)\n        }).then((response)=>response.json()).then((data)=>{\n            setGoals((prevGoals)=>[\n                    ...prevGoals,\n                    data\n                ]); // Assuming the backend returns the created goal with an id\n            setInputText(\"\");\n        }).catch((error)=>console.error(\"Error adding goal:\", error));\n    }\n    function deleteItem(goalId) {\n        // First, make a request to the backend to delete the goal\n        fetch(\"http://127.0.0.1:8000/planner/goals/\".concat(goalId, \"/\"), {\n            method: \"DELETE\",\n            headers: {\n                // If your API requires authentication, make sure to include the necessary headers\n                // \"Authorization\": \"Bearer YOUR_TOKEN_HERE\",\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            if (!response.ok) {\n                // If the server responds with an error, throw an error\n                throw new Error(\"Network response was not ok\");\n            }\n            // If the delete request was successful, update the local state\n            setGoals((prevGoals)=>prevGoals.filter((goal)=>goal.id !== goalId));\n        }).catch((error)=>{\n            console.error(\"Error deleting goal:\", error);\n        // Here, you might want to handle the error, perhaps by showing an error message to the user\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        tabIndex: 0,\n        className: \"collapse bg-[#fdf2bf] overflow-visible\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\"\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"collapse-title text-black\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 141,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container collapse-content z-10 overflow-visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-70 gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc  \",\n                            children: goals.map((goal, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    id: goal.id,\n                                    text: goal.title,\n                                    completed: goal.completed,\n                                    category: goal.category,\n                                    onDoubleClick: ()=>deleteItem(goal.id),\n                                    goalCategory: false\n                                }, index, false, {\n                                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                    lineNumber: 146,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                            lineNumber: 144,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-actions flex flex-row gap-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Type here\",\n                                        className: \"input input-sm input-bordered w-full max-w-xs\",\n                                        onChange: handleChange,\n                                        name: \"Goal\",\n                                        value: inputText\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                        lineNumber: 160,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dropdown dropdown-right\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                tabIndex: 0,\n                                                role: \"button\",\n                                                className: \"btn m-1\",\n                                                children: \"Click\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                lineNumber: 169,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                tabIndex: 0,\n                                                className: \"dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Career\"),\n                                                            children: \"Career\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 177,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 176,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Health\"),\n                                                            children: \"Health\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 180,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 179,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Relationship\"),\n                                                            children: \"Relationship\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 183,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 182,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            onClick: ()=>handleClick(event, \"Entertainment\"),\n                                                            children: \"Entertainment\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                            lineNumber: 187,\n                                                            columnNumber: 19\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                        lineNumber: 186,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                                lineNumber: 172,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                        lineNumber: 168,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                                lineNumber: 159,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                            lineNumber: 158,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCard.tsx\",\n        lineNumber: 139,\n        columnNumber: 5\n    }, this);\n}\n_s(GoalCard, \"fXnIRfSpzza4iIq8f6TLGfF+JOs=\");\n_c = GoalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoalCard);\nvar _c;\n$RefreshReg$(_c, \"GoalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL0dvYWxDYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ2pCO0FBSWxDLFNBQVNJLFNBQVNDLEtBQUs7O0lBQ3JCLElBQUlDLGFBQVdELE1BQU1FLElBQUk7SUFDekIsSUFBSUMsUUFBT0gsTUFBTUcsS0FBSztJQUN0QixJQUFJQyxNQUFJSixNQUFNSyxTQUFTO0lBT3JCLElBQUdMLE1BQU1NLElBQUksS0FBRyxVQUFTO1FBQ3ZCRixNQUFJO1FBQ0osSUFBSUosTUFBTU8sS0FBSyxLQUFJLFlBQVk7WUFBQ04sYUFBVztRQUFDO1FBQzVDLElBQUlELE1BQU1PLEtBQUssS0FBSSxZQUFXO1lBQUNOLGFBQVc7UUFBQztRQUMzQyxJQUFJRCxNQUFNTyxLQUFLLEtBQUksY0FBYTtZQUFDTixhQUFXO1FBQUM7UUFDN0MsSUFBR0QsTUFBTU8sS0FBSyxLQUFHLGFBQVk7WUFBQ04sYUFBVztRQUFDO0lBRTVDO0lBSUYsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1lLGFBQWE7WUFDakIsdURBQXVEO1lBRXZELE1BQU1DLGVBQWVDLE9BQU9YO1lBQzVCLElBQUlZLFFBQVEsU0FBOEJkLE9BQXJCWSxjQUFhLFVBQW1CLE9BQVhaO1lBQzFDLElBQUlHLFFBQVEsTUFBTTtnQkFDaEJXLFNBQVMsUUFBWSxPQUFKWDtZQUNuQjtZQUVBLElBQUk7Z0JBQ0YsTUFBTVksV0FBVyxNQUFNQyxNQUFNLHdDQUE4QyxPQUFORjtnQkFDckUsSUFBSSxDQUFDQyxTQUFTRSxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtnQkFDbEI7Z0JBQ0EsTUFBTUMsT0FBTyxNQUFNSixTQUFTSyxJQUFJO2dCQUNoQ1YsU0FBU1MsT0FBTywyQ0FBMkM7WUFDN0QsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtZQUMxQztRQUNGO1FBRUFWO0lBQ0YsR0FBRztRQUFDVDtRQUFPRjtLQUFXO0lBRXRCLHFCQUFxQjtJQUVyQixTQUFTdUIsYUFBYUMsTUFBSztRQUN6QmhCLGFBQWFnQixPQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDakM7SUFFQSxTQUFTQyxZQUFZSCxNQUFLLEVBQUVJLFFBQVE7UUFDbENKLE9BQU1LLGNBQWM7UUFDcEIsSUFBSUM7UUFDSixJQUFJQztRQUtKLElBQUlILGFBQVcsVUFBUztZQUFFRSxhQUFXO1FBQUU7UUFDdkMsSUFBSUYsYUFBVyxVQUFTO1lBQUNFLGFBQVc7UUFBQztRQUNyQyxJQUFJRixhQUFXLGdCQUFlO1lBQUNFLGFBQVc7UUFBQztRQUMzQyxJQUFHRixhQUFXLGlCQUFnQjtZQUFDRSxhQUFXO1FBQUM7UUFFM0MsSUFBSS9CLE1BQU1NLElBQUksS0FBSSxVQUFTO1lBQUMwQixXQUFTO1FBQUc7UUFDeEMsSUFBSWhDLE1BQU1NLElBQUksS0FBSSxXQUFVO1lBQUMwQixXQUFTO1FBQUc7UUFDekMsSUFBSWhDLE1BQU1NLElBQUksS0FBSSxTQUFRO1lBQUMwQixXQUFTO1FBQUc7UUFHdkMsSUFBSWhDLE1BQU1NLElBQUksS0FBRyxTQUFRO1lBQ3ZCLE1BQU0yQixXQUFVO2dCQUNkMUIsT0FBT0M7Z0JBQ1AwQixNQUFNO2dCQUNOQyxXQUFVSDtnQkFDVjdCLE9BQU9ILE1BQU1HLEtBQUs7Z0JBQ2xCRCxNQUFLRDtnQkFDTEcsS0FBSztnQkFDTGdDLFdBQVc7Z0JBQ1hQLFVBQVVFO1lBRVo7UUFHRjtRQUlBZCxNQUFNLHdDQUF3QztZQUM1Q29CLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDUjtRQUN2QixHQUNHUyxJQUFJLENBQUMsQ0FBQzFCLFdBQWFBLFNBQVNLLElBQUksSUFDaENxQixJQUFJLENBQUMsQ0FBQ3RCO1lBQ0xULFNBQVMsQ0FBQ2dDLFlBQWM7dUJBQUlBO29CQUFXdkI7aUJBQUssR0FBRywyREFBMkQ7WUFDMUdYLGFBQWE7UUFDZixHQUNDbUMsS0FBSyxDQUFDLENBQUN0QixRQUFVQyxRQUFRRCxLQUFLLENBQUMsc0JBQXNCQTtJQUMxRDtJQUVBLFNBQVN1QixXQUFXQyxNQUFNO1FBRXhCLDBEQUEwRDtRQUMxRDdCLE1BQU0sdUNBQThDLE9BQVA2QixRQUFPLE1BQUk7WUFDdERULFFBQVE7WUFDUkMsU0FBUztnQkFDUCxrRkFBa0Y7Z0JBQ2xGLDZDQUE2QztnQkFDN0MsZ0JBQWdCO1lBQ2xCO1FBQ0YsR0FDQ0ksSUFBSSxDQUFDMUIsQ0FBQUE7WUFDSixJQUFJLENBQUNBLFNBQVNFLEVBQUUsRUFBRTtnQkFDaEIsdURBQXVEO2dCQUN2RCxNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFDQSwrREFBK0Q7WUFDL0RSLFNBQVNnQyxDQUFBQSxZQUFhQSxVQUFVSSxNQUFNLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLEVBQUUsS0FBS0g7UUFDN0QsR0FDQ0YsS0FBSyxDQUFDdEIsQ0FBQUE7WUFDTEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdEMsNEZBQTRGO1FBQzlGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQzRCO1FBQUlDLFVBQVU7UUFBR0MsV0FBVTs7MEJBQzFCLDhEQUFDQztnQkFBTS9DLE1BQUs7Ozs7OzswQkFDWiw4REFBQzRDO2dCQUFJRSxXQUFVOzBCQUE2QnBELE1BQU1PLEtBQUs7Ozs7OzswQkFDdkQsOERBQUMyQztnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ0Y7b0JBQUlFLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBR0YsV0FBVTtzQ0FDWDFDLE1BQU02QyxHQUFHLENBQUMsQ0FBQ1AsTUFBTVEsc0JBQ2hCLDhEQUFDMUQsaURBQVFBO29DQUNQbUQsSUFBSUQsS0FBS0MsRUFBRTtvQ0FDWFEsTUFBTVQsS0FBS3pDLEtBQUs7b0NBQ2hCNkIsV0FBV1ksS0FBS1osU0FBUztvQ0FFekJQLFVBQVdtQixLQUFLbkIsUUFBUTtvQ0FDeEI2QixlQUFlLElBQU1iLFdBQVdHLEtBQUtDLEVBQUU7b0NBQ3ZDVSxjQUFjO21DQUhUSDs7Ozs7Ozs7OztzQ0FRWCw4REFBQ047NEJBQUlFLFdBQVU7c0NBQ2IsNEVBQUNROztrREFDQyw4REFBQ1A7d0NBQ0MvQyxNQUFLO3dDQUNMdUQsYUFBWTt3Q0FDWlQsV0FBVTt3Q0FDVlUsVUFBVXRDO3dDQUNWdUMsTUFBSzt3Q0FDTHBDLE9BQU9uQjs7Ozs7O2tEQUVULDhEQUFDMEM7d0NBQUlFLFdBQVU7OzBEQUNiLDhEQUFDRjtnREFBSUMsVUFBVTtnREFBR2EsTUFBSztnREFBU1osV0FBVTswREFBVTs7Ozs7OzBEQUdwRCw4REFBQ0U7Z0RBQ0NILFVBQVU7Z0RBQ1ZDLFdBQVU7O2tFQUVWLDhEQUFDYTtrRUFDQyw0RUFBQ0M7NERBQUVDLFNBQVMsSUFBTXZDLFlBQVlILE9BQU87c0VBQVc7Ozs7Ozs7Ozs7O2tFQUVsRCw4REFBQ3dDO2tFQUNDLDRFQUFDQzs0REFBRUMsU0FBUyxJQUFNdkMsWUFBWUgsT0FBTztzRUFBVzs7Ozs7Ozs7Ozs7a0VBRWxELDhEQUFDd0M7a0VBQ0MsNEVBQUNDOzREQUFFQyxTQUFTLElBQU12QyxZQUFZSCxPQUFPO3NFQUFpQjs7Ozs7Ozs7Ozs7a0VBR3hELDhEQUFDd0M7a0VBQ0QsNEVBQUNDOzREQUFFQyxTQUFTLElBQU12QyxZQUFZSCxPQUFPO3NFQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3pFO0dBL0xTMUI7S0FBQUE7QUFpTVQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0NvbXBvbmVudHMvR29hbENhcmQudHN4P2QyMmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdvYWxJdGVtIGZyb20gXCIuL0dvYWxJdGVtXCI7XG5cblxuXG5mdW5jdGlvbiBHb2FsQ2FyZChwcm9wcykge1xuICBsZXQgd2Vla051bWJlcj1wcm9wcy53ZWVrXG4gIGxldCBtb250aCA9cHJvcHMubW9udGggXG4gIGxldCBkYXk9cHJvcHMuZGF5T2ZXZWVrXG5cblxuXG4gIFxuXG5cbiAgICBpZihwcm9wcy50eXBlPT09XCJXZWVrbHlcIil7XG4gICAgICBkYXk9bnVsbFxuICAgICAgaWYgKHByb3BzLnRpdGxlID09PVwiV2VlayBPbmVcIikge3dlZWtOdW1iZXI9MX1cbiAgICAgIGlmIChwcm9wcy50aXRsZSA9PT1cIldlZWsgVHdvXCIpe3dlZWtOdW1iZXI9Mn1cbiAgICAgIGlmIChwcm9wcy50aXRsZSA9PT1cIldlZWsgVGhyZWVcIil7d2Vla051bWJlcj0zfVxuICAgICAgaWYocHJvcHMudGl0bGU9PT1cIldlZWsgRm91clwiKXt3ZWVrTnVtYmVyPTR9XG5cbiAgICB9XG4gIFxuICAgIFxuICBcbiAgY29uc3QgW2lucHV0VGV4dCwgc2V0SW5wdXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZ29hbHMsIHNldEdvYWxzXSA9IHVzZVN0YXRlKFtdKTsgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaEdvYWxzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gRXhhbXBsZTogRmV0Y2hpbmcgZ29hbHMgZm9yIHdlZWsgMSB3aGVyZSBkYXkgaXMgbnVsbFxuICAgICBcbiAgICAgIGNvbnN0IG51bWVyaWNNb250aCA9IE51bWJlcihtb250aCk7IFxuICAgICAgbGV0IHF1ZXJ5ID0gYG1vbnRoPSR7bnVtZXJpY01vbnRofSZ3ZWVrPSR7d2Vla051bWJlcn1gO1xuICAgICAgaWYgKGRheSAhPT0gbnVsbCkge1xuICAgICAgICBxdWVyeSArPSBgJmRheT0ke2RheX1gO1xuICAgICAgfVxuICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wbGFubmVyL2dvYWxzLz8ke3F1ZXJ5fWApO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldEdvYWxzKGRhdGEpOyAvLyBJbml0aWFsaXplIGdvYWxzIHN0YXRlIHdpdGggZmV0Y2hlZCBkYXRhXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGdvYWxzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgZmV0Y2hHb2FscygpO1xuICB9LCBbbW9udGgsIHdlZWtOdW1iZXJdKTtcblxuICAvL2NvbnNvbGUubG9nKGdvYWxzKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBzZXRJbnB1dFRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50LCBjYXRlZ29yeSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGNhdGVnb3J5SURcbiAgICBsZXQgZ29hbFR5cGVcbiAgICBcbiAgICBcbiAgXG4gIFxuICAgIGlmIChjYXRlZ29yeT09PVwiSGVhbHRoXCIpeyBjYXRlZ29yeUlEPTUgfVxuICAgIGlmIChjYXRlZ29yeT09PVwiQ2FyZWVyXCIpe2NhdGVnb3J5SUQ9Nn1cbiAgICBpZiAoY2F0ZWdvcnk9PT1cIlJlbGF0aW9uc2hpcFwiKXtjYXRlZ29yeUlEPTd9XG4gICAgaWYoY2F0ZWdvcnk9PT1cIkVudGVydGFpbm1lbnRcIil7Y2F0ZWdvcnlJRD04fVxuXG4gICAgaWYgKHByb3BzLnR5cGUgPT09XCJXZWVrbHlcIil7Z29hbFR5cGU9XCJXXCJ9XG4gICAgaWYgKHByb3BzLnR5cGUgPT09XCJNb250aGx5XCIpe2dvYWxUeXBlPVwiTVwifVxuICAgIGlmIChwcm9wcy50eXBlID09PVwiRGFpbHlcIil7Z29hbFR5cGU9XCJEXCJ9XG5cbiAgICBcbiAgICBpZiAocHJvcHMudHlwZT09PVwiV2VlbHlcIil7XG4gICAgICBjb25zdCBuZXdHb2FsID0ge1xuICAgICAgICB0aXRsZTogaW5wdXRUZXh0LFxuICAgICAgICB1c2VyOiAxLFxuICAgICAgICBnb2FsX3R5cGU6Z29hbFR5cGUsXG4gICAgICAgIG1vbnRoOiBwcm9wcy5tb250aCxcbiAgICAgICAgd2Vlazp3ZWVrTnVtYmVyLFxuICAgICAgICBkYXk6IG51bGwsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeUlELFxuICAgICAgICBcbiAgICAgIH07XG5cblxuICAgIH1cblxuICAgIFxuXG4gICAgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvcGxhbm5lci9nb2Fscy9cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3R29hbCksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0R29hbHMoKHByZXZHb2FscykgPT4gWy4uLnByZXZHb2FscywgZGF0YV0pOyAvLyBBc3N1bWluZyB0aGUgYmFja2VuZCByZXR1cm5zIHRoZSBjcmVhdGVkIGdvYWwgd2l0aCBhbiBpZFxuICAgICAgICBzZXRJbnB1dFRleHQoXCJcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBnb2FsOlwiLCBlcnJvcikpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlSXRlbShnb2FsSWQpIHtcbiAgICBcbiAgICAvLyBGaXJzdCwgbWFrZSBhIHJlcXVlc3QgdG8gdGhlIGJhY2tlbmQgdG8gZGVsZXRlIHRoZSBnb2FsXG4gICAgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wbGFubmVyL2dvYWxzLyR7Z29hbElkfS9gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAvLyBJZiB5b3VyIEFQSSByZXF1aXJlcyBhdXRoZW50aWNhdGlvbiwgbWFrZSBzdXJlIHRvIGluY2x1ZGUgdGhlIG5lY2Vzc2FyeSBoZWFkZXJzXG4gICAgICAgIC8vIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBZT1VSX1RPS0VOX0hFUkVcIixcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAvLyBJZiB0aGUgc2VydmVyIHJlc3BvbmRzIHdpdGggYW4gZXJyb3IsIHRocm93IGFuIGVycm9yXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICB9XG4gICAgICAvLyBJZiB0aGUgZGVsZXRlIHJlcXVlc3Qgd2FzIHN1Y2Nlc3NmdWwsIHVwZGF0ZSB0aGUgbG9jYWwgc3RhdGVcbiAgICAgIHNldEdvYWxzKHByZXZHb2FscyA9PiBwcmV2R29hbHMuZmlsdGVyKGdvYWwgPT4gZ29hbC5pZCAhPT0gZ29hbElkKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGdvYWw6XCIsIGVycm9yKTtcbiAgICAgIC8vIEhlcmUsIHlvdSBtaWdodCB3YW50IHRvIGhhbmRsZSB0aGUgZXJyb3IsIHBlcmhhcHMgYnkgc2hvd2luZyBhbiBlcnJvciBtZXNzYWdlIHRvIHRoZSB1c2VyXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgdGFiSW5kZXg9ezB9IGNsYXNzTmFtZT1cImNvbGxhcHNlIGJnLVsjZmRmMmJmXSBvdmVyZmxvdy12aXNpYmxlXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UtdGl0bGUgdGV4dC1ibGFja1wiPntwcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbGxhcHNlLWNvbnRlbnQgei0xMCBvdmVyZmxvdy12aXNpYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTcwIGdhcC0zXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyAgXCI+XG4gICAgICAgICAgICB7Z29hbHMubWFwKChnb2FsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8R29hbEl0ZW1cbiAgICAgICAgICAgICAgICBpZD17Z29hbC5pZH1cbiAgICAgICAgICAgICAgICB0ZXh0PXtnb2FsLnRpdGxlfSBcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e2dvYWwuY29tcGxldGVkfVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkgPXtnb2FsLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oZ29hbC5pZCl9XG4gICAgICAgICAgICAgICAgZ29hbENhdGVnb3J5PXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9ucyBmbGV4IGZsZXgtcm93IGdhcC0zXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1zbSBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHNcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgbmFtZT1cIkdvYWxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gZHJvcGRvd24tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHRhYkluZGV4PXswfSByb2xlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIG0tMVwiPlxuICAgICAgICAgICAgICAgICAgQ2xpY2tcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudCB6LVsxXSBtZW51IHAtMiBzaGFkb3cgYmctYmFzZS0xMDAgcm91bmRlZC1ib3ggdy01MlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhldmVudCwgXCJDYXJlZXJcIil9PkNhcmVlcjwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGV2ZW50LCBcIkhlYWx0aFwiKX0+SGVhbHRoPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soZXZlbnQsIFwiUmVsYXRpb25zaGlwXCIpfT5SZWxhdGlvbnNoaXBcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGV2ZW50LCBcIkVudGVydGFpbm1lbnRcIil9PkVudGVydGFpbm1lbnRcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvYWxDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHb2FsSXRlbSIsIkdvYWxDYXJkIiwicHJvcHMiLCJ3ZWVrTnVtYmVyIiwid2VlayIsIm1vbnRoIiwiZGF5IiwiZGF5T2ZXZWVrIiwidHlwZSIsInRpdGxlIiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0IiwiZ29hbHMiLCJzZXRHb2FscyIsImZldGNoR29hbHMiLCJudW1lcmljTW9udGgiLCJOdW1iZXIiLCJxdWVyeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJjYXRlZ29yeSIsInByZXZlbnREZWZhdWx0IiwiY2F0ZWdvcnlJRCIsImdvYWxUeXBlIiwibmV3R29hbCIsInVzZXIiLCJnb2FsX3R5cGUiLCJjb21wbGV0ZWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicHJldkdvYWxzIiwiY2F0Y2giLCJkZWxldGVJdGVtIiwiZ29hbElkIiwiZmlsdGVyIiwiZ29hbCIsImlkIiwiZGl2IiwidGFiSW5kZXgiLCJjbGFzc05hbWUiLCJpbnB1dCIsInVsIiwibWFwIiwiaW5kZXgiLCJ0ZXh0Iiwib25Eb3VibGVDbGljayIsImdvYWxDYXRlZ29yeSIsImZvcm0iLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwibmFtZSIsInJvbGUiLCJsaSIsImEiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/GoalCard.tsx\n"));

/***/ })

});