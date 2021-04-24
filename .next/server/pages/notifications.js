(function() {
var exports = {};
exports.id = "pages/notifications";
exports.ids = ["pages/notifications"];
exports.modules = {

/***/ "./components/Layout/NoData.js":
/*!*************************************!*\
  !*** ./components/Layout/NoData.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoProfilePosts": function() { return /* binding */ NoProfilePosts; },
/* harmony export */   "NoFollowData": function() { return /* binding */ NoFollowData; },
/* harmony export */   "NoMessages": function() { return /* binding */ NoMessages; },
/* harmony export */   "NoPosts": function() { return /* binding */ NoPosts; },
/* harmony export */   "NoProfile": function() { return /* binding */ NoProfile; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\vsvij\\Desktop\\MERN Projects\\social-media\\components\\Layout\\NoData.js";

const NoProfilePosts = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    info: true,
    icon: "meh",
    header: "Sorry",
    content: "User has not posted anything yet!"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "long arrow alternate left",
    content: "Go Back",
    as: "a",
    href: "/"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined)]
}, void 0, true);
const NoFollowData = ({
  followersComponent,
  followingComponent
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [followersComponent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "user outline",
    info: true,
    content: `User does not have followers`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }, undefined), followingComponent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "user outline",
    info: true,
    content: `User does not follow any users`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }, undefined)]
}, void 0, true);
const NoMessages = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "telegram plane",
  header: "Sorry",
  content: "You have not messaged anyone yet.Search above to message someone!"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 23,
  columnNumber: 3
}, undefined);
const NoPosts = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Posts. Make sure you have followed someone."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 32,
  columnNumber: 3
}, undefined);
const NoProfile = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Profile Found."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 41,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./components/Notifications/CommentNotification.js":
/*!*********************************************************!*\
  !*** ./components/Notifications/CommentNotification.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");


var _jsxFileName = "C:\\Users\\vsvij\\Desktop\\MERN Projects\\social-media\\components\\Notifications\\CommentNotification.js";




function CommentNotification({
  notification
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Event, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Label, {
        image: notification.user.profilePicUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Content, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Summary, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.User, {
              as: "a",
              href: `/${notification.user.username}`,
              children: notification.user.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, this), " ", "commented on your ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: `/post/${notification.post._id}`,
              children: "post."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Date, {
              children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__.default)(notification.date)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this), notification.post.picUrl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Extra, {
          images: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: `/post/${notification.post._id}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: notification.post.picUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Extra, {
          text: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: notification.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (CommentNotification);

/***/ }),

/***/ "./components/Notifications/FollowerNotification.js":
/*!**********************************************************!*\
  !*** ./components/Notifications/FollowerNotification.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var _utils_profileActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/profileActions */ "./utils/profileActions.js");


var _jsxFileName = "C:\\Users\\vsvij\\Desktop\\MERN Projects\\social-media\\components\\Notifications\\FollowerNotification.js";





function FollowerNotification({
  notification,
  loggedUserFollowStats,
  setUserFollowStats
}) {
  const {
    0: disabled,
    1: setDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const isFollowing = loggedUserFollowStats.following.length > 0 && loggedUserFollowStats.following.filter(following => following.user === notification.user._id).length > 0;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Event, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Label, {
        image: notification.user.profilePicUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Content, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Summary, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.User, {
              as: "a",
              href: `/${notification.user.username}`,
              children: notification.user.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, this), " ", "started following you.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Date, {
              children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__.default)(notification.date)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            position: "absolute",
            right: "5px"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            size: "small",
            compact: true,
            icon: isFollowing ? "check circle" : "add user",
            color: isFollowing ? "instagram" : "twitter",
            disabled: disabled,
            onClick: async () => {
              setDisabled(true);
              isFollowing ? await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_4__.unfollowUser)(notification.user._id, setUserFollowStats) : await (0,_utils_profileActions__WEBPACK_IMPORTED_MODULE_4__.followUser)(notification.user._id, setUserFollowStats);
              setDisabled(false);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (FollowerNotification);

/***/ }),

/***/ "./components/Notifications/LikeNotification.js":
/*!******************************************************!*\
  !*** ./components/Notifications/LikeNotification.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");


var _jsxFileName = "C:\\Users\\vsvij\\Desktop\\MERN Projects\\social-media\\components\\Notifications\\LikeNotification.js";




function LikeNotification({
  notification
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Event, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Label, {
        image: notification.user.profilePicUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Content, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Summary, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.User, {
              as: "a",
              href: `/${notification.user.username}`,
              children: notification.user.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, this), " ", "liked your ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: `/post/${notification.post._id}`,
              children: "post."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 26
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Date, {
              children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__.default)(notification.date)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this), notification.post.picUrl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed.Extra, {
          images: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: `/post/${notification.post._id}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: notification.post.picUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (LikeNotification);

/***/ }),

/***/ "./pages/notifications.js":
/*!********************************!*\
  !*** ./pages/notifications.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Notifications_LikeNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Notifications/LikeNotification */ "./components/Notifications/LikeNotification.js");
/* harmony import */ var _components_Notifications_CommentNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Notifications/CommentNotification */ "./components/Notifications/CommentNotification.js");
/* harmony import */ var _components_Notifications_FollowerNotification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Notifications/FollowerNotification */ "./components/Notifications/FollowerNotification.js");


var _jsxFileName = "C:\\Users\\vsvij\\Desktop\\MERN Projects\\social-media\\pages\\notifications.js";











function Notifications({
  notifications,
  errorLoading,
  user,
  userFollowStats
}) {
  const {
    0: loggedUserFollowStats,
    1: setUserFollowStats
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(userFollowStats);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const notificationRead = async () => {
      try {
        await axios__WEBPACK_IMPORTED_MODULE_3___default().post(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__.default}/api/notifications`, {}, {
          headers: {
            Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_6___default().get("token")
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    notificationRead();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
      style: {
        marginTop: "1.5rem"
      },
      children: [notifications.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
        color: "teal",
        raised: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            maxHeight: "40rem",
            overflow: "auto",
            height: "40rem",
            position: "relative",
            width: "100%"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Feed, {
            size: "small",
            children: notifications.map(notification => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [notification.type === "newLike" && notification.post !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Notifications_LikeNotification__WEBPACK_IMPORTED_MODULE_8__.default, {
                notification: notification
              }, notification._id, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 23
              }, this), notification.type === "newComment" && notification.post !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Notifications_CommentNotification__WEBPACK_IMPORTED_MODULE_9__.default, {
                notification: notification
              }, notification._id, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 23
              }, this), notification.type === "newFollower" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Notifications_FollowerNotification__WEBPACK_IMPORTED_MODULE_10__.default, {
                notification: notification,
                loggedUserFollowStats: loggedUserFollowStats,
                setUserFollowStats: setUserFollowStats
              }, notification._id, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 23
              }, this)]
            }, void 0, true))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__.NoNotifications, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

Notifications.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__.default}/api/notifications`, {
      headers: {
        Authorization: token
      }
    });
    return {
      notifications: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/calculateTime.js":
/*!********************************!*\
  !*** ./utils/calculateTime.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\vsvij\\Desktop\\MERN Projects\\social-media\\utils\\calculateTime.js";



const calculateTime = createdAt => {
  const today = moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now());
  const postDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(createdAt);
  const diffInHours = today.diff(postDate, "hours");

  if (diffInHours < 24) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: ["Today ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
        format: "hh:mm A",
        children: createdAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }, undefined)]
    }, void 0, true);
  } else if (diffInHours > 24 && diffInHours < 36) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: ["Yesterday ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
        format: "hh:mm A",
        children: createdAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 19
      }, undefined)]
    }, void 0, true);
  } else if (diffInHours > 36) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
      format: "DD/MM/YYYY hh:mm A",
      children: createdAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }, undefined);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calculateTime);

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

/***/ "./utils/profileActions.js":
/*!*********************************!*\
  !*** ./utils/profileActions.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "followUser": function() { return /* binding */ followUser; },
/* harmony export */   "unfollowUser": function() { return /* binding */ unfollowUser; },
/* harmony export */   "profileUpdate": function() { return /* binding */ profileUpdate; },
/* harmony export */   "passwordUpdate": function() { return /* binding */ passwordUpdate; },
/* harmony export */   "toggleMessagePopup": function() { return /* binding */ toggleMessagePopup; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: `${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/profile`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("token")
  }
});
const followUser = async (userToFollowId, setUserFollowStats) => {
  try {
    await Axios.post(`/follow/${userToFollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: [...prev.following, {
        user: userToFollowId
      }]
    }));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const unfollowUser = async (userToUnfollowId, setUserFollowStats) => {
  try {
    await Axios.put(`/unfollow/${userToUnfollowId}`);
    setUserFollowStats(prev => _objectSpread(_objectSpread({}, prev), {}, {
      following: prev.following.filter(following => following.user !== userToUnfollowId)
    }));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const profileUpdate = async (profile, setLoading, setError, profilePicUrl) => {
  try {
    const {
      bio,
      facebook,
      youtube,
      twitter,
      instagram
    } = profile;
    await Axios.post(`/update`, {
      bio,
      facebook,
      youtube,
      twitter,
      instagram,
      profilePicUrl
    });
    setLoading(false);
    next_router__WEBPACK_IMPORTED_MODULE_4___default().reload();
  } catch (error) {
    setError((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
    setLoading(false);
  }
};
const passwordUpdate = async (setSuccess, userPasswords) => {
  const {
    currentPassword,
    newPassword
  } = userPasswords;

  try {
    await Axios.post(`/settings/password`, {
      currentPassword,
      newPassword
    });
    setSuccess(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const toggleMessagePopup = async (popupSetting, setPopupSetting, setSuccess) => {
  try {
    await Axios.post(`/settings/messagePopup`);
    setPopupSetting(!popupSetting);
    setSuccess(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-moment");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/notifications.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWpheS1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGEuanMiLCJ3ZWJwYWNrOi8vdmlqYXktc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25zL0NvbW1lbnROb3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vdmlqYXktc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25zL0ZvbGxvd2VyTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovL3ZpamF5LXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9MaWtlTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovL3ZpamF5LXNvY2lhbC1tZWRpYS8uL3BhZ2VzL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdmlqYXktc29jaWFsLW1lZGlhLy4vdXRpbHMvYmFzZVVybC5qcyIsIndlYnBhY2s6Ly92aWpheS1zb2NpYWwtbWVkaWEvLi91dGlscy9jYWxjdWxhdGVUaW1lLmpzIiwid2VicGFjazovL3ZpamF5LXNvY2lhbC1tZWRpYS8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL3ZpamF5LXNvY2lhbC1tZWRpYS8uL3V0aWxzL3Byb2ZpbGVBY3Rpb25zLmpzIiwid2VicGFjazovL3ZpamF5LXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdmlqYXktc29jaWFsLW1lZGlhL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vdmlqYXktc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vdmlqYXktc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly92aWpheS1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vdmlqYXktc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly92aWpheS1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly92aWpheS1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly92aWpheS1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIk5vUHJvZmlsZVBvc3RzIiwiTm9Gb2xsb3dEYXRhIiwiZm9sbG93ZXJzQ29tcG9uZW50IiwiZm9sbG93aW5nQ29tcG9uZW50IiwiTm9NZXNzYWdlcyIsIk5vUG9zdHMiLCJOb1Byb2ZpbGUiLCJDb21tZW50Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uIiwidXNlciIsInByb2ZpbGVQaWNVcmwiLCJ1c2VybmFtZSIsIm5hbWUiLCJwb3N0IiwiX2lkIiwiY2FsY3VsYXRlVGltZSIsImRhdGUiLCJwaWNVcmwiLCJ0ZXh0IiwiRm9sbG93ZXJOb3RpZmljYXRpb24iLCJsb2dnZWRVc2VyRm9sbG93U3RhdHMiLCJzZXRVc2VyRm9sbG93U3RhdHMiLCJkaXNhYmxlZCIsInNldERpc2FibGVkIiwidXNlU3RhdGUiLCJpc0ZvbGxvd2luZyIsImZvbGxvd2luZyIsImxlbmd0aCIsImZpbHRlciIsInBvc2l0aW9uIiwicmlnaHQiLCJ1bmZvbGxvd1VzZXIiLCJmb2xsb3dVc2VyIiwiTGlrZU5vdGlmaWNhdGlvbiIsIk5vdGlmaWNhdGlvbnMiLCJub3RpZmljYXRpb25zIiwiZXJyb3JMb2FkaW5nIiwidXNlckZvbGxvd1N0YXRzIiwidXNlRWZmZWN0Iiwibm90aWZpY2F0aW9uUmVhZCIsImF4aW9zIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29va2llIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luVG9wIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcCIsInR5cGUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ0b2tlbiIsInBhcnNlQ29va2llcyIsInJlcyIsImRhdGEiLCJjcmVhdGVkQXQiLCJ0b2RheSIsIm1vbWVudCIsIkRhdGUiLCJub3ciLCJwb3N0RGF0ZSIsImRpZmZJbkhvdXJzIiwiZGlmZiIsImNhdGNoRXJyb3JzIiwiZXJyb3JNc2ciLCJyZXNwb25zZSIsInJlcXVlc3QiLCJtZXNzYWdlIiwiQXhpb3MiLCJiYXNlVVJMIiwidXNlclRvRm9sbG93SWQiLCJwcmV2IiwiYWxlcnQiLCJ1c2VyVG9VbmZvbGxvd0lkIiwicHV0IiwicHJvZmlsZVVwZGF0ZSIsInByb2ZpbGUiLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJiaW8iLCJmYWNlYm9vayIsInlvdXR1YmUiLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwiUm91dGVyIiwicGFzc3dvcmRVcGRhdGUiLCJzZXRTdWNjZXNzIiwidXNlclBhc3N3b3JkcyIsImN1cnJlbnRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwidG9nZ2xlTWVzc2FnZVBvcHVwIiwicG9wdXBTZXR0aW5nIiwic2V0UG9wdXBTZXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxjQUFjLEdBQUcsbUJBQzVCO0FBQUEsMEJBQ0UsOERBQUMsc0RBQUQ7QUFBUyxRQUFJLE1BQWI7QUFBYyxRQUFJLEVBQUMsS0FBbkI7QUFBeUIsVUFBTSxFQUFDLE9BQWhDO0FBQXdDLFdBQU8sRUFBQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxxREFBRDtBQUFRLFFBQUksRUFBQywyQkFBYjtBQUF5QyxXQUFPLEVBQUMsU0FBakQ7QUFBMkQsTUFBRSxFQUFDLEdBQTlEO0FBQWtFLFFBQUksRUFBQztBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQSxnQkFESztBQU9BLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVDLG9CQUFGO0FBQXNCQztBQUF0QixDQUFE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QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9ub3RpZmljYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlUG9zdHMgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIlNvcnJ5XCIgY29udGVudD1cIlVzZXIgaGFzIG5vdCBwb3N0ZWQgYW55dGhpbmcgeWV0IVwiIC8+XHJcbiAgICA8QnV0dG9uIGljb249XCJsb25nIGFycm93IGFsdGVybmF0ZSBsZWZ0XCIgY29udGVudD1cIkdvIEJhY2tcIiBhcz1cImFcIiBocmVmPVwiL1wiIC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Gb2xsb3dEYXRhID0gKHsgZm9sbG93ZXJzQ29tcG9uZW50LCBmb2xsb3dpbmdDb21wb25lbnQgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICB7Zm9sbG93ZXJzQ29tcG9uZW50ICYmIChcclxuICAgICAgPE1lc3NhZ2UgaWNvbj1cInVzZXIgb3V0bGluZVwiIGluZm8gY29udGVudD17YFVzZXIgZG9lcyBub3QgaGF2ZSBmb2xsb3dlcnNgfSAvPlxyXG4gICAgKX1cclxuXHJcbiAgICB7Zm9sbG93aW5nQ29tcG9uZW50ICYmIChcclxuICAgICAgPE1lc3NhZ2UgaWNvbj1cInVzZXIgb3V0bGluZVwiIGluZm8gY29udGVudD17YFVzZXIgZG9lcyBub3QgZm9sbG93IGFueSB1c2Vyc2B9IC8+XHJcbiAgICApfVxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vTWVzc2FnZXMgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2VcclxuICAgIGluZm9cclxuICAgIGljb249XCJ0ZWxlZ3JhbSBwbGFuZVwiXHJcbiAgICBoZWFkZXI9XCJTb3JyeVwiXHJcbiAgICBjb250ZW50PVwiWW91IGhhdmUgbm90IG1lc3NhZ2VkIGFueW9uZSB5ZXQuU2VhcmNoIGFib3ZlIHRvIG1lc3NhZ2Ugc29tZW9uZSFcIlxyXG4gIC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qb3N0cyA9ICgpID0+IChcclxuICA8TWVzc2FnZVxyXG4gICAgaW5mb1xyXG4gICAgaWNvbj1cIm1laFwiXHJcbiAgICBoZWFkZXI9XCJIZXkhXCJcclxuICAgIGNvbnRlbnQ9XCJObyBQb3N0cy4gTWFrZSBzdXJlIHlvdSBoYXZlIGZvbGxvd2VkIHNvbWVvbmUuXCJcclxuICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUHJvZmlsZSA9ICgpID0+IChcclxuICA8TWVzc2FnZSBpbmZvIGljb249XCJtZWhcIiBoZWFkZXI9XCJIZXkhXCIgY29udGVudD1cIk5vIFByb2ZpbGUgRm91bmQuXCIgLz5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBGZWVkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50Tm90aWZpY2F0aW9uKHsgbm90aWZpY2F0aW9uIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZlZWQuRXZlbnQ+XHJcbiAgICAgICAgPEZlZWQuTGFiZWwgaW1hZ2U9e25vdGlmaWNhdGlvbi51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgPEZlZWQuQ29udGVudD5cclxuICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEZlZWQuVXNlciBhcz1cImFcIiBocmVmPXtgLyR7bm90aWZpY2F0aW9uLnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICA8L0ZlZWQuVXNlcj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgY29tbWVudGVkIG9uIHlvdXIgPGEgaHJlZj17YC9wb3N0LyR7bm90aWZpY2F0aW9uLnBvc3QuX2lkfWB9PnBvc3QuPC9hPlxyXG4gICAgICAgICAgICAgIDxGZWVkLkRhdGU+e2NhbGN1bGF0ZVRpbWUobm90aWZpY2F0aW9uLmRhdGUpfTwvRmVlZC5EYXRlPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvRmVlZC5TdW1tYXJ5PlxyXG5cclxuICAgICAgICAgIHtub3RpZmljYXRpb24ucG9zdC5waWNVcmwgJiYgKFxyXG4gICAgICAgICAgICA8RmVlZC5FeHRyYSBpbWFnZXM+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17YC9wb3N0LyR7bm90aWZpY2F0aW9uLnBvc3QuX2lkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e25vdGlmaWNhdGlvbi5wb3N0LnBpY1VybH0gLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvRmVlZC5FeHRyYT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8RmVlZC5FeHRyYSB0ZXh0PlxyXG4gICAgICAgICAgICA8c3Ryb25nPntub3RpZmljYXRpb24udGV4dH08L3N0cm9uZz5cclxuICAgICAgICAgIDwvRmVlZC5FeHRyYT5cclxuICAgICAgICA8L0ZlZWQuQ29udGVudD5cclxuICAgICAgPC9GZWVkLkV2ZW50PlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudE5vdGlmaWNhdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZlZWQsIEJ1dHRvbiwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xyXG5pbXBvcnQgeyBmb2xsb3dVc2VyLCB1bmZvbGxvd1VzZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZmlsZUFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIEZvbGxvd2VyTm90aWZpY2F0aW9uKHtcclxuICBub3RpZmljYXRpb24sXHJcbiAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLFxyXG4gIHNldFVzZXJGb2xsb3dTdGF0c1xyXG59KSB7XHJcbiAgY29uc3QgW2Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGlzRm9sbG93aW5nID1cclxuICAgIGxvZ2dlZFVzZXJGb2xsb3dTdGF0cy5mb2xsb3dpbmcubGVuZ3RoID4gMCAmJlxyXG4gICAgbG9nZ2VkVXNlckZvbGxvd1N0YXRzLmZvbGxvd2luZy5maWx0ZXIoXHJcbiAgICAgIGZvbGxvd2luZyA9PiBmb2xsb3dpbmcudXNlciA9PT0gbm90aWZpY2F0aW9uLnVzZXIuX2lkXHJcbiAgICApLmxlbmd0aCA+IDA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RmVlZC5FdmVudD5cclxuICAgICAgICA8RmVlZC5MYWJlbCBpbWFnZT17bm90aWZpY2F0aW9uLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICA8RmVlZC5Db250ZW50PlxyXG4gICAgICAgICAgPEZlZWQuU3VtbWFyeT5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8RmVlZC5Vc2VyIGFzPVwiYVwiIGhyZWY9e2AvJHtub3RpZmljYXRpb24udXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb24udXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvRmVlZC5Vc2VyPntcIiBcIn1cclxuICAgICAgICAgICAgICBzdGFydGVkIGZvbGxvd2luZyB5b3UuXHJcbiAgICAgICAgICAgICAgPEZlZWQuRGF0ZT57Y2FsY3VsYXRlVGltZShub3RpZmljYXRpb24uZGF0ZSl9PC9GZWVkLkRhdGU+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgPC9GZWVkLlN1bW1hcnk+XHJcblxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgY29tcGFjdFxyXG4gICAgICAgICAgICAgIGljb249e2lzRm9sbG93aW5nID8gXCJjaGVjayBjaXJjbGVcIiA6IFwiYWRkIHVzZXJcIn1cclxuICAgICAgICAgICAgICBjb2xvcj17aXNGb2xsb3dpbmcgPyBcImluc3RhZ3JhbVwiIDogXCJ0d2l0dGVyXCJ9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldERpc2FibGVkKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlzRm9sbG93aW5nXHJcbiAgICAgICAgICAgICAgICAgID8gYXdhaXQgdW5mb2xsb3dVc2VyKG5vdGlmaWNhdGlvbi51c2VyLl9pZCwgc2V0VXNlckZvbGxvd1N0YXRzKVxyXG4gICAgICAgICAgICAgICAgICA6IGF3YWl0IGZvbGxvd1VzZXIobm90aWZpY2F0aW9uLnVzZXIuX2lkLCBzZXRVc2VyRm9sbG93U3RhdHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GZWVkLkNvbnRlbnQ+XHJcbiAgICAgIDwvRmVlZC5FdmVudD5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd2VyTm90aWZpY2F0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZlZWQsIERpdmlkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuXHJcbmZ1bmN0aW9uIExpa2VOb3RpZmljYXRpb24oeyBub3RpZmljYXRpb24gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RmVlZC5FdmVudD5cclxuICAgICAgICA8RmVlZC5MYWJlbCBpbWFnZT17bm90aWZpY2F0aW9uLnVzZXIucHJvZmlsZVBpY1VybH0gLz5cclxuICAgICAgICA8RmVlZC5Db250ZW50PlxyXG4gICAgICAgICAgPEZlZWQuU3VtbWFyeT5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8RmVlZC5Vc2VyIGFzPVwiYVwiIGhyZWY9e2AvJHtub3RpZmljYXRpb24udXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb24udXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvRmVlZC5Vc2VyPntcIiBcIn1cclxuICAgICAgICAgICAgICBsaWtlZCB5b3VyIDxhIGhyZWY9e2AvcG9zdC8ke25vdGlmaWNhdGlvbi5wb3N0Ll9pZH1gfT5wb3N0LjwvYT5cclxuICAgICAgICAgICAgICA8RmVlZC5EYXRlPntjYWxjdWxhdGVUaW1lKG5vdGlmaWNhdGlvbi5kYXRlKX08L0ZlZWQuRGF0ZT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L0ZlZWQuU3VtbWFyeT5cclxuXHJcbiAgICAgICAgICB7bm90aWZpY2F0aW9uLnBvc3QucGljVXJsICYmIChcclxuICAgICAgICAgICAgPEZlZWQuRXh0cmEgaW1hZ2VzPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2AvcG9zdC8ke25vdGlmaWNhdGlvbi5wb3N0Ll9pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtub3RpZmljYXRpb24ucG9zdC5waWNVcmx9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0ZlZWQuRXh0cmE+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRmVlZC5Db250ZW50PlxyXG4gICAgICA8L0ZlZWQuRXZlbnQ+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWtlTm90aWZpY2F0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGZWVkLCBTZWdtZW50LCBEaXZpZGVyLCBDb250YWluZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgTm9Ob3RpZmljYXRpb25zIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L05vRGF0YVwiO1xyXG5pbXBvcnQgTGlrZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25zL0xpa2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IENvbW1lbnROb3RpZmljYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9Db21tZW50Tm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBGb2xsb3dlck5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25zL0ZvbGxvd2VyTm90aWZpY2F0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBOb3RpZmljYXRpb25zKHsgbm90aWZpY2F0aW9ucywgZXJyb3JMb2FkaW5nLCB1c2VyLCB1c2VyRm9sbG93U3RhdHMgfSkge1xyXG4gIGNvbnN0IFtsb2dnZWRVc2VyRm9sbG93U3RhdHMsIHNldFVzZXJGb2xsb3dTdGF0c10gPSB1c2VTdGF0ZSh1c2VyRm9sbG93U3RhdHMpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uUmVhZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgYCR7YmFzZVVybH0vYXBpL25vdGlmaWNhdGlvbnNgLFxyXG4gICAgICAgICAge30sXHJcbiAgICAgICAgICB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH0gfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG5vdGlmaWNhdGlvblJlYWQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxLjVyZW1cIiB9fT5cclxuICAgICAgICB7bm90aWZpY2F0aW9ucy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgPFNlZ21lbnQgY29sb3I9XCJ0ZWFsXCIgcmFpc2VkPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCI0MHJlbVwiLFxyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcmVtXCIsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGZWVkIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAge25vdGlmaWNhdGlvbnMubWFwKG5vdGlmaWNhdGlvbiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge25vdGlmaWNhdGlvbi50eXBlID09PSBcIm5ld0xpa2VcIiAmJiBub3RpZmljYXRpb24ucG9zdCAhPT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlrZU5vdGlmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e25vdGlmaWNhdGlvbi5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbj17bm90aWZpY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9uLnR5cGUgPT09IFwibmV3Q29tbWVudFwiICYmIG5vdGlmaWNhdGlvbi5wb3N0ICE9PSBudWxsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50Tm90aWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bm90aWZpY2F0aW9uLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uPXtub3RpZmljYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb24udHlwZSA9PT0gXCJuZXdGb2xsb3dlclwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxGb2xsb3dlck5vdGlmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e25vdGlmaWNhdGlvbi5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbj17bm90aWZpY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZWRVc2VyRm9sbG93U3RhdHM9e2xvZ2dlZFVzZXJGb2xsb3dTdGF0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlckZvbGxvd1N0YXRzPXtzZXRVc2VyRm9sbG93U3RhdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9GZWVkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPE5vTm90aWZpY2F0aW9ucyAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuTm90aWZpY2F0aW9ucy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL25vdGlmaWNhdGlvbnNgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgbm90aWZpY2F0aW9uczogcmVzLmRhdGEgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3JMb2FkaW5nOiB0cnVlIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9ucztcclxuIiwiY29uc3QgYmFzZVVybCA9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7XHJcbiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcclxuXHJcbmNvbnN0IGNhbGN1bGF0ZVRpbWUgPSBjcmVhdGVkQXQgPT4ge1xyXG4gIGNvbnN0IHRvZGF5ID0gbW9tZW50KERhdGUubm93KCkpO1xyXG4gIGNvbnN0IHBvc3REYXRlID0gbW9tZW50KGNyZWF0ZWRBdCk7XHJcbiAgY29uc3QgZGlmZkluSG91cnMgPSB0b2RheS5kaWZmKHBvc3REYXRlLCBcImhvdXJzXCIpO1xyXG5cclxuICBpZiAoZGlmZkluSG91cnMgPCAyNCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICBUb2RheSA8TW9tZW50IGZvcm1hdD1cImhoOm1tIEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChkaWZmSW5Ib3VycyA+IDI0ICYmIGRpZmZJbkhvdXJzIDwgMzYpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgWWVzdGVyZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGRpZmZJbkhvdXJzID4gMzYpIHtcclxuICAgIHJldHVybiA8TW9tZW50IGZvcm1hdD1cIkREL01NL1lZWVkgaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0ZVRpbWU7XHJcbiIsImNvbnN0IGNhdGNoRXJyb3JzID0gZXJyb3IgPT4ge1xyXG4gIGxldCBlcnJvck1zZztcclxuXHJcbiAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAvLyBJZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciBub3QgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZSBpbiB0aGUgcmFuZ2Ugb2YgMnh4XHJcblxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgLy8gaWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIG5vIHJlc3BvbnNlIHdhcyByZWNldmllZCBmcm9tIHNlcnZlclxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiBzb21ldGhpbmcgZWxzZSBoYXBwZW5lZCB3aGlsZSBtYWtpbmcgdGhlIHJlcXVlc3RcclxuICAgIGVycm9yTXNnID0gZXJyb3IubWVzc2FnZTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yTXNnO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xyXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSBcIi4vY2F0Y2hFcnJvcnNcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogYCR7YmFzZVVybH0vYXBpL3Byb2ZpbGVgLFxyXG4gIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZm9sbG93VXNlciA9IGFzeW5jICh1c2VyVG9Gb2xsb3dJZCwgc2V0VXNlckZvbGxvd1N0YXRzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoYC9mb2xsb3cvJHt1c2VyVG9Gb2xsb3dJZH1gKTtcclxuXHJcbiAgICBzZXRVc2VyRm9sbG93U3RhdHMocHJldiA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBmb2xsb3dpbmc6IFsuLi5wcmV2LmZvbGxvd2luZywgeyB1c2VyOiB1c2VyVG9Gb2xsb3dJZCB9XVxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1bmZvbGxvd1VzZXIgPSBhc3luYyAodXNlclRvVW5mb2xsb3dJZCwgc2V0VXNlckZvbGxvd1N0YXRzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLnB1dChgL3VuZm9sbG93LyR7dXNlclRvVW5mb2xsb3dJZH1gKTtcclxuXHJcbiAgICBzZXRVc2VyRm9sbG93U3RhdHMocHJldiA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBmb2xsb3dpbmc6IHByZXYuZm9sbG93aW5nLmZpbHRlcihmb2xsb3dpbmcgPT4gZm9sbG93aW5nLnVzZXIgIT09IHVzZXJUb1VuZm9sbG93SWQpXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVVcGRhdGUgPSBhc3luYyAocHJvZmlsZSwgc2V0TG9hZGluZywgc2V0RXJyb3IsIHByb2ZpbGVQaWNVcmwpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBiaW8sIGZhY2Vib29rLCB5b3V0dWJlLCB0d2l0dGVyLCBpbnN0YWdyYW0gfSA9IHByb2ZpbGU7XHJcblxyXG4gICAgYXdhaXQgQXhpb3MucG9zdChgL3VwZGF0ZWAsIHtcclxuICAgICAgYmlvLFxyXG4gICAgICBmYWNlYm9vayxcclxuICAgICAgeW91dHViZSxcclxuICAgICAgdHdpdHRlcixcclxuICAgICAgaW5zdGFncmFtLFxyXG4gICAgICBwcm9maWxlUGljVXJsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIFJvdXRlci5yZWxvYWQoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgc2V0RXJyb3IoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZFVwZGF0ZSA9IGFzeW5jIChzZXRTdWNjZXNzLCB1c2VyUGFzc3dvcmRzKSA9PiB7XHJcbiAgY29uc3QgeyBjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkIH0gPSB1c2VyUGFzc3dvcmRzO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KGAvc2V0dGluZ3MvcGFzc3dvcmRgLCB7IGN1cnJlbnRQYXNzd29yZCwgbmV3UGFzc3dvcmQgfSk7XHJcblxyXG4gICAgc2V0U3VjY2Vzcyh0cnVlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlTWVzc2FnZVBvcHVwID0gYXN5bmMgKHBvcHVwU2V0dGluZywgc2V0UG9wdXBTZXR0aW5nLCBzZXRTdWNjZXNzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IEF4aW9zLnBvc3QoYC9zZXR0aW5ncy9tZXNzYWdlUG9wdXBgKTtcclxuXHJcbiAgICBzZXRQb3B1cFNldHRpbmcoIXBvcHVwU2V0dGluZyk7XHJcbiAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==