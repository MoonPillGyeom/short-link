"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 2459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShortUrlPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1155);
/* harmony import */ var _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6521);


async function getServerSideProps(context) {
    const { shortUrl  } = context.query;
    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    const shortLink = await _db_models_ShortLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
        shortUrl
    });
    if (shortLink) {
        return {
            redirect: {
                destination: shortLink.url,
                permanent: false
            }
        };
    }
    return {
        notFound: true
    };
}
function ShortUrlPage() {
    return null;
}


/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [824], () => (__webpack_exec__(2459)));
module.exports = __webpack_exports__;

})();