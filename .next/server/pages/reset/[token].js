(function() {
var exports = {};
exports.id = "pages/reset/[token]";
exports.ids = ["pages/reset/[token]"];
exports.modules = {

/***/ "./pages/reset/[token].js":
/*!********************************!*\
  !*** ./pages/reset/[token].js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\vsvij\\Desktop\\MERN Projects\\social-media\\pages\\reset\\[token].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function TokenPage() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    0: newPassword,
    1: setNewPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    field1: "",
    field2: ""
  });
  const {
    field1,
    field2
  } = newPassword;
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: success,
    1: setSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setNewPassword(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    errorMsg !== null && setTimeout(() => setErrorMsg(null), 5000);
  }, [errorMsg]);

  const resetPassword = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      if (field1 !== field2) {
        return setErrorMsg("Passwords do not match");
      }

      await axios__WEBPACK_IMPORTED_MODULE_6___default().post(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default())}/api/reset/token`, {
        password: field1,
        token: router.query.token
      });
      setSuccess(true);
    } catch (error) {
      setErrorMsg((0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_5__.default)(error));
    }

    setLoading(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [success ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
      attached: true,
      success: true,
      size: "large",
      header: "Password reset successfull",
      icon: "check",
      content: "Login Again",
      style: {
        cursor: "pointer"
      },
      onClick: () => router.push("/login")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
      attached: true,
      icon: "settings",
      header: "Reset Password",
      color: "teal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, this), !success && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form, {
      loading: loading,
      onSubmit: resetPassword,
      error: errorMsg !== null,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
        error: true,
        header: "Oops!",
        content: errorMsg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
          fluid: true,
          icon: "eye",
          type: "password",
          iconPosition: "left",
          label: "New Password",
          placeholder: "Enter new Password",
          name: "field1",
          onChange: handleChange,
          value: field1,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
          fluid: true,
          icon: "eye",
          type: "password",
          iconPosition: "left",
          label: "Confirm Password",
          placeholder: "Confirm new Password",
          name: "field2",
          onChange: handleChange,
          value: field2,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Divider, {
          hidden: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
          disabled: field1 === "" || field2 === "" || loading,
          icon: "configure",
          type: "submit",
          color: "orange",
          content: "Reset"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (TokenPage);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/reset/[token].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWpheS1zb2NpYWwtbWVkaWEvLi9wYWdlcy9yZXNldC9bdG9rZW5dLmpzIiwid2VicGFjazovL3ZpamF5LXNvY2lhbC1tZWRpYS8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vdmlqYXktc29jaWFsLW1lZGlhLy4vdXRpbHMvY2F0Y2hFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vdmlqYXktc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly92aWpheS1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3ZpamF5LXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdmlqYXktc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vdmlqYXktc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJUb2tlblBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuZXdQYXNzd29yZCIsInNldE5ld1Bhc3N3b3JkIiwidXNlU3RhdGUiLCJmaWVsZDEiLCJmaWVsZDIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInJlc2V0UGFzc3dvcmQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwiYmFzZVVybCIsInBhc3N3b3JkIiwidG9rZW4iLCJxdWVyeSIsImVycm9yIiwiY2F0Y2hFcnJvcnMiLCJjdXJzb3IiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJyZXF1ZXN0IiwibWVzc2FnZSJd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QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSjtBQUFBLGtCQURGO0FBNkREOztBQUVELCtEQUFlUixTQUFmLEU7Ozs7Ozs7Ozs7QUNqSEEsTUFBTXlCLE9BQU8sR0FBRSx1QkFBZjtBQUVBUSxNQUFNLENBQUNDLE9BQVAsR0FBaUJULE9BQWpCLEM7Ozs7Ozs7Ozs7OztBQ0ZBLE1BQU1LLFdBQVcsR0FBR0QsS0FBSyxJQUFJO0FBQzNCLE1BQUluQixRQUFKOztBQUVBLE1BQUltQixLQUFLLENBQUNNLFFBQVYsRUFBb0I7QUFDbEI7QUFFQXpCLFlBQVEsR0FBR21CLEtBQUssQ0FBQ00sUUFBTixDQUFlQyxJQUExQjtBQUVBQyxXQUFPLENBQUNSLEtBQVIsQ0FBY25CLFFBQWQ7QUFDRCxHQU5ELE1BTU8sSUFBSW1CLEtBQUssQ0FBQ1MsT0FBVixFQUFtQjtBQUN4QjtBQUNBNUIsWUFBUSxHQUFHbUIsS0FBSyxDQUFDUyxPQUFqQjtBQUVBRCxXQUFPLENBQUNSLEtBQVIsQ0FBY25CLFFBQWQ7QUFDRCxHQUxNLE1BS0E7QUFDTDtBQUNBQSxZQUFRLEdBQUdtQixLQUFLLENBQUNVLE9BQWpCO0FBRUFGLFdBQU8sQ0FBQ1IsS0FBUixDQUFjbkIsUUFBZDtBQUNEOztBQUNELFNBQU9BLFFBQVA7QUFDRCxDQXJCRDs7QUF1QkEsK0RBQWVvQixXQUFmLEU7Ozs7Ozs7Ozs7O0FDdkJBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL3Jlc2V0L1t0b2tlbl0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBTZWdtZW50LCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi4vLi4vdXRpbHMvY2F0Y2hFcnJvcnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gVG9rZW5QYWdlKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbbmV3UGFzc3dvcmQsIHNldE5ld1Bhc3N3b3JkXSA9IHVzZVN0YXRlKHsgZmllbGQxOiBcIlwiLCBmaWVsZDI6IFwiXCIgfSk7XHJcblxyXG4gIGNvbnN0IHsgZmllbGQxLCBmaWVsZDIgfSA9IG5ld1Bhc3N3b3JkO1xyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgc2V0TmV3UGFzc3dvcmQocHJldiA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZXJyb3JNc2cgIT09IG51bGwgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRFcnJvck1zZyhudWxsKSwgNTAwMCk7XHJcbiAgfSwgW2Vycm9yTXNnXSk7XHJcblxyXG4gIGNvbnN0IHJlc2V0UGFzc3dvcmQgPSBhc3luYyBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGZpZWxkMSAhPT0gZmllbGQyKSB7XHJcbiAgICAgICAgcmV0dXJuIHNldEVycm9yTXNnKFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvcmVzZXQvdG9rZW5gLCB7XHJcbiAgICAgICAgcGFzc3dvcmQ6IGZpZWxkMSxcclxuICAgICAgICB0b2tlbjogcm91dGVyLnF1ZXJ5LnRva2VuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yTXNnKGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzdWNjZXNzID8gKFxyXG4gICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICBhdHRhY2hlZFxyXG4gICAgICAgICAgc3VjY2Vzc1xyXG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgIGhlYWRlcj1cIlBhc3N3b3JkIHJlc2V0IHN1Y2Nlc3NmdWxsXCJcclxuICAgICAgICAgIGljb249XCJjaGVja1wiXHJcbiAgICAgICAgICBjb250ZW50PVwiTG9naW4gQWdhaW5cIlxyXG4gICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvbG9naW5cIil9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZCBpY29uPVwic2V0dGluZ3NcIiBoZWFkZXI9XCJSZXNldCBQYXNzd29yZFwiIGNvbG9yPVwidGVhbFwiIC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7IXN1Y2Nlc3MgJiYgKFxyXG4gICAgICAgIDxGb3JtIGxvYWRpbmc9e2xvYWRpbmd9IG9uU3VibWl0PXtyZXNldFBhc3N3b3JkfSBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9PlxyXG4gICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXtlcnJvck1zZ30gLz5cclxuXHJcbiAgICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgIGljb249XCJleWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJOZXcgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZmllbGQxXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmaWVsZDF9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgIGljb249XCJleWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gbmV3IFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZmllbGQyXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmaWVsZDJ9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtmaWVsZDEgPT09IFwiXCIgfHwgZmllbGQyID09PSBcIlwiIHx8IGxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgaWNvbj1cImNvbmZpZ3VyZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJSZXNldFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9rZW5QYWdlO1xyXG4iLCJjb25zdCBiYXNlVXJsID1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVXJsO1xyXG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IGVycm9yID0+IHtcclxuICBsZXQgZXJyb3JNc2c7XHJcblxyXG4gIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgLy8gSWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgbm90IHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGUgaW4gdGhlIHJhbmdlIG9mIDJ4eFxyXG5cclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgIC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCBubyByZXNwb25zZSB3YXMgcmVjZXZpZWQgZnJvbSBzZXJ2ZXJcclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVxdWVzdDtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaWYgc29tZXRoaW5nIGVsc2UgaGFwcGVuZWQgd2hpbGUgbWFraW5nIHRoZSByZXF1ZXN0XHJcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9