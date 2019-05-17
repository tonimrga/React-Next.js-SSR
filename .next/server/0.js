exports.ids = [0];
exports.modules = {

/***/ "./pages/header.js":
/*!*************************!*\
  !*** ./pages/header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/toni/Desktop/my-app/pages/header.js";



class Header extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  static async getInitialProps({
    req
  }) {
    const title = req ? req.headers['title'] : navigator.title;
    return {
      title
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, this.props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      key: "viewport",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      property: "og:title",
      content: this.props.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

};;
//# sourceMappingURL=0.js.map