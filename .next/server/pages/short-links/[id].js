(() => {
var exports = {};
exports.id = 484;
exports.ids = [484];
exports.modules = {

/***/ 6703:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "ShortLinkEditPage_page__KO_Cz",
	"title": "ShortLinkEditPage_title__b3nAB"
};


/***/ }),

/***/ 7400:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShortLinkEditPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ShortLinkForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(893);
/* harmony import */ var _styles_ShortLinkEditPage_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6703);
/* harmony import */ var _styles_ShortLinkEditPage_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_ShortLinkEditPage_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1155);
/* harmony import */ var _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6521);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1979);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_axios__WEBPACK_IMPORTED_MODULE_5__]);
_lib_axios__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








async function getServerSideProps(context) {
    const { id  } = context.query;
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const shortLink = await _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"].findById */ .Z.findById(id);
    if (shortLink) {
        return {
            props: {
                shortLink: JSON.parse(JSON.stringify(shortLink))
            }
        };
    }
    return {
        notFound: true
    };
}
function ShortLinkEditPage({ shortLink  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { id  } = router.query;
    async function handleSubmit(values) {
        await _lib_axios__WEBPACK_IMPORTED_MODULE_5__/* ["default"].patch */ .Z.patch(`/short-links/${id}`, values);
        router.push("/short-links");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "주소 수정하기 - Shortit"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_ShortLinkEditPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().page),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_styles_ShortLinkEditPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),
                        children: "수정하기"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ShortLinkForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        type: _components_ShortLinkForm__WEBPACK_IMPORTED_MODULE_2__/* .ShortLinkFormType.Edit */ .M.Edit,
                        onSubmit: handleSubmit,
                        initialValues: shortLink
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [556,555,824,893], () => (__webpack_exec__(7400)));
module.exports = __webpack_exports__;

})();