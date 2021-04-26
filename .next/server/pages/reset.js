(function() {
var exports = {};
exports.id = "pages/reset";
exports.ids = ["pages/reset"];
exports.modules = {

/***/ "./pages/reset/index.js":
/*!******************************!*\
  !*** ./pages/reset/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\vsvij\\Desktop\\MERN Projects\\social-media\\pages\\reset\\index.js";






function ResetPage() {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: emailChecked,
    1: setEmailChecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const resetPassword = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios__WEBPACK_IMPORTED_MODULE_5___default().post(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3___default())}/api/reset`, {
        email
      });
      setEmailChecked(true);
    } catch (error) {
      setErrorMsg((0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_4__.default)(error));
    }

    setLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    errorMsg !== null && setTimeout(() => setErrorMsg(null), 3000);
  }, [errorMsg]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [emailChecked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
      attached: true,
      icon: "mail",
      header: "Check Your Inbox",
      content: "Please check your inbox for further instructions",
      success: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
      attached: true,
      icon: "settings",
      header: "Reset Password",
      color: "teal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      loading: loading,
      onSubmit: resetPassword,
      error: errorMsg !== null,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        error: true,
        header: "Oop\r s!",
        content: errorMsg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
          fluid: true,
          icon: "mail outline",
          type: "email",
          iconPosition: "left",
          label: "Email",
          placeholder: "Enter email address",
          name: "email",
          onChange: e => setEmail(e.target.value),
          value: email,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          disabled: loading || email.length === 0,
          icon: "configure",
          type: "submit",
          color: "orange",
          content: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (ResetPage);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(module) {

const baseUrl = "http://localhost:3000";
module.exports = baseUrl;

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg;

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/reset/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWpheS1zb2NpYWwtbWVkaWEvLi9wYWdlcy9yZXNldC9pbmRleC5qcyIsIndlYnBhY2s6Ly92aWpheS1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL3ZpamF5LXNvY2lhbC1tZWRpYS8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL3ZpamF5LXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdmlqYXktc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly92aWpheS1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly92aWpheS1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIlJlc2V0UGFnZSIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VTdGF0ZSIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJlbWFpbENoZWNrZWQiLCJzZXRFbWFpbENoZWNrZWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc2V0UGFzc3dvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsImJhc2VVcmwiLCJlcnJvciIsImNhdGNoRXJyb3JzIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJyZXF1ZXN0IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxHQUFxQjtBQUNuQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLCtDQUFRLENBQUMsRUFBRCxDQUFsQztB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T0FBUCxHQUFpQlQsT0FBakIsQzs7Ozs7Ozs7Ozs7O0FDRkEsTUFBTUUsV0FBVyxHQUFHRCxLQUFLLElBQUk7QUFDM0IsTUFBSVgsUUFBSjs7QUFFQSxNQUFJVyxLQUFLLENBQUNTLFFBQVYsRUFBb0I7QUFDbEI7QUFFQXBCLFlBQVEsR0FBR1csS0FBSyxDQUFDUyxRQUFOLENBQWVDLElBQTFCO0FBRUFDLFdBQU8sQ0FBQ1gsS0FBUixDQUFjWCxRQUFkO0FBQ0QsR0FORCxNQU1PLElBQUlXLEtBQUssQ0FBQ1ksT0FBVixFQUFtQjtBQUN4QjtBQUNBdkIsWUFBUSxHQUFHVyxLQUFLLENBQUNZLE9BQWpCO0FBRUFELFdBQU8sQ0FBQ1gsS0FBUixDQUFjWCxRQUFkO0FBQ0QsR0FMTSxNQUtBO0FBQ0w7QUFDQUEsWUFBUSxHQUFHVyxLQUFLLENBQUNhLE9BQWpCO0FBRUFGLFdBQU8sQ0FBQ1gsS0FBUixDQUFjWCxRQUFkO0FBQ0Q7O0FBQ0QsU0FBT0EsUUFBUDtBQUNELENBckJEOztBQXVCQSwrREFBZVksV0FBZixFOzs7Ozs7Ozs7OztBQ3ZCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9yZXNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgU2VnbWVudCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSBcIi4uLy4uL3V0aWxzL2NhdGNoRXJyb3JzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIFJlc2V0UGFnZSgpIHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IFtlbWFpbENoZWNrZWQsIHNldEVtYWlsQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgcmVzZXRQYXNzd29yZCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvcmVzZXRgLCB7IGVtYWlsIH0pO1xyXG5cclxuICAgICAgc2V0RW1haWxDaGVja2VkKHRydWUpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3JNc2coY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZXJyb3JNc2cgIT09IG51bGwgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRFcnJvck1zZyhudWxsKSwgMzAwMCk7XHJcbiAgfSwgW2Vycm9yTXNnXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7ZW1haWxDaGVja2VkID8gKFxyXG4gICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICBhdHRhY2hlZFxyXG4gICAgICAgICAgaWNvbj1cIm1haWxcIlxyXG4gICAgICAgICAgaGVhZGVyPVwiQ2hlY2sgWW91ciBJbmJveFwiXHJcbiAgICAgICAgICBjb250ZW50PVwiUGxlYXNlIGNoZWNrIHlvdXIgaW5ib3ggZm9yIGZ1cnRoZXIgaW5zdHJ1Y3Rpb25zXCJcclxuICAgICAgICAgIHN1Y2Nlc3NcclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkIGljb249XCJzZXR0aW5nc1wiIGhlYWRlcj1cIlJlc2V0IFBhc3N3b3JkXCIgY29sb3I9XCJ0ZWFsXCIgLz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxGb3JtIGxvYWRpbmc9e2xvYWRpbmd9IG9uU3VibWl0PXtyZXNldFBhc3N3b3JkfSBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9PlxyXG4gICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcFxyXG4gICAgICAgIHMhXCIgY29udGVudD17ZXJyb3JNc2d9IC8+XHJcblxyXG4gICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj1cIm1haWwgb3V0bGluZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgZW1haWwubGVuZ3RoID09PSAwfVxyXG4gICAgICAgICAgICBpY29uPVwiY29uZmlndXJlXCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCJcclxuICAgICAgICAgICAgY29udGVudD1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXRQYWdlO1xyXG4iLCJjb25zdCBiYXNlVXJsID1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVXJsO1xyXG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IGVycm9yID0+IHtcclxuICBsZXQgZXJyb3JNc2c7XHJcblxyXG4gIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgLy8gSWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgbm90IHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGUgaW4gdGhlIHJhbmdlIG9mIDJ4eFxyXG5cclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgIC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCBubyByZXNwb25zZSB3YXMgcmVjZXZpZWQgZnJvbSBzZXJ2ZXJcclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVxdWVzdDtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaWYgc29tZXRoaW5nIGVsc2UgaGFwcGVuZWQgd2hpbGUgbWFraW5nIHRoZSByZXF1ZXN0XHJcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=