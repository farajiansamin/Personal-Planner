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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GoalItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoalItem */ \"(app-pages-browser)/./app/Components/GoalItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction GoalCard(props) {\n    _s();\n    let month = props.month;\n    let categoryID;\n    if (props.title === \"Career\") {\n        categoryID = 6;\n    }\n    if (props.title === \"Health\") {\n        categoryID = 5;\n    }\n    if (props.title === \"Relationship\") {\n        categoryID = 7;\n    }\n    if (props.title === \"Entertainment\") {\n        categoryID = 8;\n    }\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [goals, setGoals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGoals = async ()=>{\n            const numericMonth = Number(month);\n            if (props.type === \"Weekly\") {\n                goalType = \"W\";\n            }\n            if (props.type === \"Monthly\") {\n                goalType = \"M\";\n            }\n            if (props.type === \"Daily\") {\n                goalType = \"D\";\n            }\n            let query = \"month=\".concat(numericMonth, \"&category=\").concat(categoryID);\n            query += \"&day=\".concat(day !== null ? day : \"\"); // Add day if it's not null\n            query += \"&week=\".concat(week !== null ? week : \"\"); // Add week if it's not null, remove or adjust according to your needs\n            try {\n                const response = await fetch(\"http://127.0.0.1:8000/planner/goals/?\".concat(query));\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setGoals(data);\n            } catch (error) {\n                console.error(\"Failed to fetch goals:\", error);\n            }\n        };\n        fetchGoals();\n    }, [\n        month,\n        categoryID,\n        day,\n        week\n    ]); // Ensure all used variables are in the dependency array\n    //console.log(goals);\n    function handleChange(event) {\n        setInputText(event.target.value);\n    }\n    function handleClick(event) {\n        event.preventDefault();\n        let goalType1;\n        const newGoal = {\n            title: inputText,\n            user: 1,\n            goal_type: goalType1,\n            month: props.month,\n            week: null,\n            day: null,\n            completed: false,\n            category: categoryID\n        };\n        fetch(\"http://127.0.0.1:8000/planner/goals/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(newGoal)\n        }).then((response)=>response.json()).then((data)=>{\n            setGoals((prevGoals)=>[\n                    ...prevGoals,\n                    data\n                ]); // Assuming the backend returns the created goal with an id\n            setInputText(\"\");\n        }).catch((error)=>console.error(\"Error adding goal:\", error));\n    }\n    function deleteItem(goalId) {\n        // First, make a request to the backend to delete the goal\n        fetch(\"http://127.0.0.1:8000/planner/goals/\".concat(goalId, \"/\"), {\n            method: \"DELETE\",\n            headers: {\n                // If your API requires authentication, make sure to include the necessary headers\n                // \"Authorization\": \"Bearer YOUR_TOKEN_HERE\",\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            if (!response.ok) {\n                // If the server responds with an error, throw an error\n                throw new Error(\"Network response was not ok\");\n            }\n            // If the delete request was successful, update the local state\n            setGoals((prevGoals)=>prevGoals.filter((goal)=>goal.id !== goalId));\n        }).catch((error)=>{\n            console.error(\"Error deleting goal:\", error);\n        // Here, you might want to handle the error, perhaps by showing an error message to the user\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        tabIndex: 0,\n        className: \"collapse \".concat(props.color, \" z-20 overflow-visible\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\"\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"collapse-title text-black\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container collapse-content overflow-visible\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-70 gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc  \",\n                            children: goals.map((goal, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoalItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    id: goal.id,\n                                    text: goal.title,\n                                    completed: goal.completed,\n                                    category: goal.category,\n                                    onDoubleClick: ()=>deleteItem(goal.id)\n                                }, index, false, {\n                                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-actions flex flex-row gap-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Type here\",\n                                        className: \"input input-sm input-bordered w-full max-w-xs\",\n                                        onChange: handleChange,\n                                        name: \"Goal\",\n                                        value: inputText\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClick,\n                                        className: \"btn btn-sm\",\n                                        children: \"Add\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                        lineNumber: 148,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saminfarajian/Desktop/Web Projects/Planner/PersonalPlanner/app/Components/GoalCategoryCard.tsx\",\n        lineNumber: 119,\n        columnNumber: 5\n    }, this);\n}\n_s(GoalCard, \"fXnIRfSpzza4iIq8f6TLGfF+JOs=\");\n_c = GoalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoalCard);\nvar _c;\n$RefreshReg$(_c, \"GoalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db21wb25lbnRzL0dvYWxDYXRlZ29yeUNhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDbUQ7QUFDakI7QUFJbEMsU0FBU0ksU0FBU0MsS0FBSzs7SUFDckIsSUFBSUMsUUFBT0QsTUFBTUMsS0FBSztJQUN0QixJQUFJQztJQU1KLElBQUlGLE1BQU1HLEtBQUssS0FBSSxVQUFTO1FBQUNELGFBQVc7SUFBQztJQUN6QyxJQUFJRixNQUFNRyxLQUFLLEtBQUksVUFBUztRQUFDRCxhQUFXO0lBQUM7SUFDekMsSUFBSUYsTUFBTUcsS0FBSyxLQUFJLGdCQUFlO1FBQUNELGFBQVc7SUFBQztJQUMvQyxJQUFJRixNQUFNRyxLQUFLLEtBQUcsaUJBQWdCO1FBQUNELGFBQVc7SUFBQztJQUUvQyxNQUFNLENBQUNFLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsYUFBYTtZQUNqQixNQUFNQyxlQUFlQyxPQUFPVDtZQUM1QixJQUFJRCxNQUFNVyxJQUFJLEtBQUksVUFBUztnQkFBQ0MsV0FBUztZQUFHO1lBQ3hDLElBQUlaLE1BQU1XLElBQUksS0FBSSxXQUFVO2dCQUFDQyxXQUFTO1lBQUc7WUFDekMsSUFBSVosTUFBTVcsSUFBSSxLQUFJLFNBQVE7Z0JBQUNDLFdBQVM7WUFBRztZQUV2QyxJQUFJQyxRQUFRLFNBQWtDWCxPQUF6Qk8sY0FBYSxjQUF1QixPQUFYUDtZQUM5Q1csU0FBUyxRQUFnQyxPQUF4QkMsUUFBUSxPQUFPQSxNQUFNLEtBQU0sMkJBQTJCO1lBQ3ZFRCxTQUFTLFNBQW1DLE9BQTFCRSxTQUFTLE9BQU9BLE9BQU8sS0FBTSxzRUFBc0U7WUFFckgsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sd0NBQThDLE9BQU5KO2dCQUNyRSxJQUFJLENB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Qzt3Q0FBYXNCLFdBQVU7a0RBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbkU7R0FySlNuRDtLQUFBQTtBQXVKVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvQ29tcG9uZW50cy9Hb2FsQ2F0ZWdvcnlDYXJkLnRzeD9hOWNlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHb2FsSXRlbSBmcm9tIFwiLi9Hb2FsSXRlbVwiO1xuXG5cblxuZnVuY3Rpb24gR29hbENhcmQocHJvcHMpIHtcbiAgbGV0IG1vbnRoID1wcm9wcy5tb250aCBcbiAgbGV0IGNhdGVnb3J5SURcbiAgXG5cblxuICBcbiAgXG4gIGlmIChwcm9wcy50aXRsZSA9PT1cIkNhcmVlclwiKXtjYXRlZ29yeUlEPTZ9XG4gIGlmIChwcm9wcy50aXRsZSA9PT1cIkhlYWx0aFwiKXtjYXRlZ29yeUlEPTV9XG4gIGlmIChwcm9wcy50aXRsZSA9PT1cIlJlbGF0aW9uc2hpcFwiKXtjYXRlZ29yeUlEPTd9XG4gIGlmIChwcm9wcy50aXRsZT09PVwiRW50ZXJ0YWlubWVudFwiKXtjYXRlZ29yeUlEPTh9XG4gIFxuICBjb25zdCBbaW5wdXRUZXh0LCBzZXRJbnB1dFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtnb2Fscywgc2V0R29hbHNdID0gdXNlU3RhdGUoW10pOyBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoR29hbHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBudW1lcmljTW9udGggPSBOdW1iZXIobW9udGgpO1xuICAgICAgaWYgKHByb3BzLnR5cGUgPT09XCJXZWVrbHlcIil7Z29hbFR5cGU9XCJXXCJ9XG4gICAgICBpZiAocHJvcHMudHlwZSA9PT1cIk1vbnRobHlcIil7Z29hbFR5cGU9XCJNXCJ9XG4gICAgICBpZiAocHJvcHMudHlwZSA9PT1cIkRhaWx5XCIpe2dvYWxUeXBlPVwiRFwifVxuXG4gICAgICBsZXQgcXVlcnkgPSBgbW9udGg9JHtudW1lcmljTW9udGh9JmNhdGVnb3J5PSR7Y2F0ZWdvcnlJRH1gO1xuICAgICAgcXVlcnkgKz0gYCZkYXk9JHtkYXkgIT09IG51bGwgPyBkYXkgOiAnJ31gOyAvLyBBZGQgZGF5IGlmIGl0J3Mgbm90IG51bGxcbiAgICAgIHF1ZXJ5ICs9IGAmd2Vlaz0ke3dlZWsgIT09IG51bGwgPyB3ZWVrIDogJyd9YDsgLy8gQWRkIHdlZWsgaWYgaXQncyBub3QgbnVsbCwgcmVtb3ZlIG9yIGFkanVzdCBhY2NvcmRpbmcgdG8geW91ciBuZWVkc1xuICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wbGFubmVyL2dvYWxzLz8ke3F1ZXJ5fWApO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldEdvYWxzKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBnb2FsczpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIGZldGNoR29hbHMoKTtcbiAgfSwgW21vbnRoLCBjYXRlZ29yeUlELCBkYXksIHdlZWtdKTsgLy8gRW5zdXJlIGFsbCB1c2VkIHZhcmlhYmxlcyBhcmUgaW4gdGhlIGRlcGVuZGVuY3kgYXJyYXlcbiAgXG5cbiAgLy9jb25zb2xlLmxvZyhnb2Fscyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgc2V0SW5wdXRUZXh0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgbGV0IGdvYWxUeXBlXG4gICAgXG5cbiAgICBcbiAgICBcbiAgICBcblxuICAgIGNvbnN0IG5ld0dvYWwgPSB7XG4gICAgICB0aXRsZTogaW5wdXRUZXh0LFxuICAgICAgdXNlcjogMSxcbiAgICAgIGdvYWxfdHlwZTpnb2FsVHlwZSxcbiAgICAgIG1vbnRoOiBwcm9wcy5tb250aCxcbiAgICAgIHdlZWs6bnVsbCxcbiAgICAgIGRheTogbnVsbCxcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICBjYXRlZ29yeTogY2F0ZWdvcnlJRCxcbiAgICAgIFxuICAgIH07XG5cbiAgICBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wbGFubmVyL2dvYWxzL1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdHb2FsKSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRHb2FscygocHJldkdvYWxzKSA9PiBbLi4ucHJldkdvYWxzLCBkYXRhXSk7IC8vIEFzc3VtaW5nIHRoZSBiYWNrZW5kIHJldHVybnMgdGhlIGNyZWF0ZWQgZ29hbCB3aXRoIGFuIGlkXG4gICAgICAgIHNldElucHV0VGV4dChcIlwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGdvYWw6XCIsIGVycm9yKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVJdGVtKGdvYWxJZCkge1xuICAgIFxuICAgIC8vIEZpcnN0LCBtYWtlIGEgcmVxdWVzdCB0byB0aGUgYmFja2VuZCB0byBkZWxldGUgdGhlIGdvYWxcbiAgICBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3BsYW5uZXIvZ29hbHMvJHtnb2FsSWR9L2AsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC8vIElmIHlvdXIgQVBJIHJlcXVpcmVzIGF1dGhlbnRpY2F0aW9uLCBtYWtlIHN1cmUgdG8gaW5jbHVkZSB0aGUgbmVjZXNzYXJ5IGhlYWRlcnNcbiAgICAgICAgLy8gXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFlPVVJfVE9LRU5fSEVSRVwiLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIC8vIElmIHRoZSBzZXJ2ZXIgcmVzcG9uZHMgd2l0aCBhbiBlcnJvciwgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHRoZSBkZWxldGUgcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bCwgdXBkYXRlIHRoZSBsb2NhbCBzdGF0ZVxuICAgICAgc2V0R29hbHMocHJldkdvYWxzID0+IHByZXZHb2Fscy5maWx0ZXIoZ29hbCA9PiBnb2FsLmlkICE9PSBnb2FsSWQpKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgZ29hbDpcIiwgZXJyb3IpO1xuICAgICAgLy8gSGVyZSwgeW91IG1pZ2h0IHdhbnQgdG8gaGFuZGxlIHRoZSBlcnJvciwgcGVyaGFwcyBieSBzaG93aW5nIGFuIGVycm9yIG1lc3NhZ2UgdG8gdGhlIHVzZXJcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiB0YWJJbmRleD17MH0gY2xhc3NOYW1lPXtgY29sbGFwc2UgJHtwcm9wcy5jb2xvcn0gei0yMCBvdmVyZmxvdy12aXNpYmxlYH0+XG5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZS10aXRsZSB0ZXh0LWJsYWNrXCI+e3Byb3BzLnRpdGxlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sbGFwc2UtY29udGVudCBvdmVyZmxvdy12aXNpYmxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTcwIGdhcC0zXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyAgXCI+XG4gICAgICAgICAgICB7Z29hbHMubWFwKChnb2FsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8R29hbEl0ZW1cbiAgICAgICAgICAgICAgICBpZD17Z29hbC5pZH1cbiAgICAgICAgICAgICAgICB0ZXh0PXtnb2FsLnRpdGxlfSBcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e2dvYWwuY29tcGxldGVkfVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkgPXtnb2FsLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oZ29hbC5pZCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMgZmxleCBmbGV4LXJvdyBnYXAtM1wiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtc20gaW5wdXQtYm9yZGVyZWQgdy1mdWxsIG1heC13LXhzXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJHb2FsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRUZXh0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJidG4gYnRuLXNtXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHb2FsQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR29hbEl0ZW0iLCJHb2FsQ2FyZCIsInByb3BzIiwibW9udGgiLCJjYXRlZ29yeUlEIiwidGl0bGUiLCJpbnB1dFRleHQiLCJzZXRJbnB1dFRleHQiLCJnb2FscyIsInNldEdvYWxzIiwiZmV0Y2hHb2FscyIsIm51bWVyaWNNb250aCIsIk51bWJlciIsInR5cGUiLCJnb2FsVHlwZSIsInF1ZXJ5IiwiZGF5Iiwid2VlayIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0dvYWwiLCJ1c2VyIiwiZ29hbF90eXBlIiwiY29tcGxldGVkIiwiY2F0ZWdvcnkiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicHJldkdvYWxzIiwiY2F0Y2giLCJkZWxldGVJdGVtIiwiZ29hbElkIiwiZmlsdGVyIiwiZ29hbCIsImlkIiwiZGl2IiwidGFiSW5kZXgiLCJjbGFzc05hbWUiLCJjb2xvciIsImlucHV0IiwidWwiLCJtYXAiLCJpbmRleCIsInRleHQiLCJvbkRvdWJsZUNsaWNrIiwiZm9ybSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJuYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Components/GoalCategoryCard.tsx\n"));

/***/ })

});