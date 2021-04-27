/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/LoginController.js":
/*!************************************!*\
  !*** ./src/api/LoginController.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/index */ \"./src/config/index.js\");\n/* harmony import */ var _common_Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/Util */ \"./src/common/Util.js\");\n/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/model/user */ \"./src/model/user.js\");\n\n\n\n\n\nclass LoginController {\n  constructor() {}\n\n  async login(ctx) {\n    // 接收用户的数据\n    // 验证图片验证码的时效性、正确性\n    // 验证用户账号密码是否正确\n    // 返回 Token\n    const {\n      body\n    } = ctx.request;\n    const sid = body.sid;\n    const code = body.code; // 校验验证码的时效性、正确性\n\n    debugger;\n    const codeValidate = await (0,_common_Util__WEBPACK_IMPORTED_MODULE_2__.checkCode)(sid, code);\n\n    if (codeValidate) {\n      // 校验登录用户名、密码的正确性\n      let userValidate = false;\n      const user = await _model_user__WEBPACK_IMPORTED_MODULE_3__.default.findOne({\n        username: body.username\n      });\n\n      if (user.password === body.password) {\n        userValidate = true;\n      } // MongoDB 查库\n\n\n      if (userValidate) {\n        // 验证通过返回 token\n        // 过期时间设置为1天\n        // Date.now() 获取当前时间戳\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n          _id: 'zh' // exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24\n\n        }, _config_index__WEBPACK_IMPORTED_MODULE_1__.default.JWT_SECRET, {\n          expiresIn: '1d'\n        });\n        ctx.body = {\n          code: 200,\n          token: token\n        };\n      } else {\n        // 用户名、密码验证失败\n        ctx.body = {\n          code: 404,\n          msg: '用户名或密码错误'\n        };\n      }\n    } else {\n      // 图片验证码校验失败\n      ctx.body = {\n        code: 401,\n        msg: '图片验证码不正确，请检查！'\n      };\n    }\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new LoginController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL0xvZ2luQ29udHJvbGxlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2tvYWFwaS8uL3NyYy9hcGkvTG9naW5Db250cm9sbGVyLmpzPzY3YzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpzb253ZWJ0b2tlbiBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdAL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBjaGVja0NvZGUgfSBmcm9tICdAL2NvbW1vbi9VdGlsJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnQC9tb2RlbC91c2VyJztcblxuY2xhc3MgTG9naW5Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFzeW5jIGxvZ2luKGN0eCkge1xuICAgIC8vIOaOpeaUtueUqOaIt+eahOaVsOaNrlxuICAgIC8vIOmqjOivgeWbvueJh+mqjOivgeeggeeahOaXtuaViOaAp+OAgeato+ehruaAp1xuICAgIC8vIOmqjOivgeeUqOaIt+i0puWPt+WvhueggeaYr+WQpuato+ehrlxuICAgIC8vIOi/lOWbniBUb2tlblxuICAgIGNvbnN0IHtcbiAgICAgIGJvZHlcbiAgICB9ID0gY3R4LnJlcXVlc3Q7XG4gICAgY29uc3Qgc2lkID0gYm9keS5zaWQ7XG4gICAgY29uc3QgY29kZSA9IGJvZHkuY29kZTsgLy8g5qCh6aqM6aqM6K+B56CB55qE5pe25pWI5oCn44CB5q2j56Gu5oCnXG5cbiAgICBkZWJ1Z2dlcjtcbiAgICBjb25zdCBjb2RlVmFsaWRhdGUgPSBhd2FpdCBjaGVja0NvZGUoc2lkLCBjb2RlKTtcblxuICAgIGlmIChjb2RlVmFsaWRhdGUpIHtcbiAgICAgIC8vIOagoemqjOeZu+W9leeUqOaIt+WQjeOAgeWvhueggeeahOato+ehruaAp1xuICAgICAgbGV0IHVzZXJWYWxpZGF0ZSA9IGZhbHNlO1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kT25lKHtcbiAgICAgICAgdXNlcm5hbWU6IGJvZHkudXNlcm5hbWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodXNlci5wYXNzd29yZCA9PT0gYm9keS5wYXNzd29yZCkge1xuICAgICAgICB1c2VyVmFsaWRhdGUgPSB0cnVlO1xuICAgICAgfSAvLyBNb25nb0RCIOafpeW6k1xuXG5cbiAgICAgIGlmICh1c2VyVmFsaWRhdGUpIHtcbiAgICAgICAgLy8g6aqM6K+B6YCa6L+H6L+U5ZueIHRva2VuXG4gICAgICAgIC8vIOi/h+acn+aXtumXtOiuvue9ruS4ujHlpKlcbiAgICAgICAgLy8gRGF0ZS5ub3coKSDojrflj5blvZPliY3ml7bpl7TmiLNcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqc29ud2VidG9rZW4uc2lnbih7XG4gICAgICAgICAgX2lkOiAnemgnIC8vIGV4cDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCkgKyA2MCAqIDYwICogMjRcblxuICAgICAgICB9LCBjb25maWcuSldUX1NFQ1JFVCwge1xuICAgICAgICAgIGV4cGlyZXNJbjogJzFkJ1xuICAgICAgICB9KTtcbiAgICAgICAgY3R4LmJvZHkgPSB7XG4gICAgICAgICAgY29kZTogMjAwLFxuICAgICAgICAgIHRva2VuOiB0b2tlblxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g55So5oi35ZCN44CB5a+G56CB6aqM6K+B5aSx6LSlXG4gICAgICAgIGN0eC5ib2R5ID0ge1xuICAgICAgICAgIGNvZGU6IDQwNCxcbiAgICAgICAgICBtc2c6ICfnlKjmiLflkI3miJblr4bnoIHplJnor68nXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWbvueJh+mqjOivgeeggeagoemqjOWksei0pVxuICAgICAgY3R4LmJvZHkgPSB7XG4gICAgICAgIGNvZGU6IDQwMSxcbiAgICAgICAgbXNnOiAn5Zu+54mH6aqM6K+B56CB5LiN5q2j56Gu77yM6K+35qOA5p+l77yBJ1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9naW5Db250cm9sbGVyKCk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/LoginController.js\n");

/***/ }),

/***/ "./src/api/PublicController.js":
/*!*************************************!*\
  !*** ./src/api/PublicController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var svg_captcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg-captcha */ \"svg-captcha\");\n/* harmony import */ var svg_captcha__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_captcha__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_RedisConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/RedisConfig */ \"./src/config/RedisConfig.js\");\n\n\n\nclass PublicController {\n  constructor() {}\n\n  async getCaptcha(ctx) {\n    const body = ctx.request.query;\n    const newCaptcha = svg_captcha__WEBPACK_IMPORTED_MODULE_0___default().create({\n      size: 4,\n      ignoreChars: '0o1il',\n      color: true,\n      noise: Math.floor(Math.random() * 5),\n      width: 150,\n      height: 38\n    }); // 设置图片验证码有效时间为3分钟\n\n    (0,_config_RedisConfig__WEBPACK_IMPORTED_MODULE_1__.setValue)(body.sid, newCaptcha.text, 200);\n    ctx.body = {\n      code: 200,\n      data: newCaptcha.data\n    };\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PublicController());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL1B1YmxpY0NvbnRyb2xsZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2FhcGkvLi9zcmMvYXBpL1B1YmxpY0NvbnRyb2xsZXIuanM/YTdjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3ZnQ2FwdGNoYSBmcm9tICdzdmctY2FwdGNoYSc7XG5pbXBvcnQgeyBnZXRWYWx1ZSwgc2V0VmFsdWUgfSBmcm9tICdAL2NvbmZpZy9SZWRpc0NvbmZpZyc7XG5cbmNsYXNzIFB1YmxpY0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYXN5bmMgZ2V0Q2FwdGNoYShjdHgpIHtcbiAgICBjb25zdCBib2R5ID0gY3R4LnJlcXVlc3QucXVlcnk7XG4gICAgY29uc3QgbmV3Q2FwdGNoYSA9IHN2Z0NhcHRjaGEuY3JlYXRlKHtcbiAgICAgIHNpemU6IDQsXG4gICAgICBpZ25vcmVDaGFyczogJzBvMWlsJyxcbiAgICAgIGNvbG9yOiB0cnVlLFxuICAgICAgbm9pc2U6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpLFxuICAgICAgd2lkdGg6IDE1MCxcbiAgICAgIGhlaWdodDogMzhcbiAgICB9KTsgLy8g6K6+572u5Zu+54mH6aqM6K+B56CB5pyJ5pWI5pe26Ze05Li6M+WIhumSn1xuXG4gICAgc2V0VmFsdWUoYm9keS5zaWQsIG5ld0NhcHRjaGEudGV4dCwgMjAwKTtcbiAgICBjdHguYm9keSA9IHtcbiAgICAgIGNvZGU6IDIwMCxcbiAgICAgIGRhdGE6IG5ld0NhcHRjaGEuZGF0YVxuICAgIH07XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUHVibGljQ29udHJvbGxlcigpOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/PublicController.js\n");

/***/ }),

/***/ "./src/common/ErrorHandle.js":
/*!***********************************!*\
  !*** ./src/common/ErrorHandle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((ctx, next) => {\n  return next().catch(err => {\n    if (401 == err.status) {\n      ctx.status = 401;\n      ctx.body = {\n        code: 401,\n        msg: 'Protected resource, use Authorization header to get access\\n'\n      };\n    } else {\n      ctx.status = err.status || 500;\n      ctx.body = Object.assign({\n        code: 501,\n        msg: err.message\n      },  true ? {\n        stack: err.stack\n      } : 0);\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL0Vycm9ySGFuZGxlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29hYXBpLy4vc3JjL2NvbW1vbi9FcnJvckhhbmRsZS5qcz9mOTk1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoY3R4LCBuZXh0KSA9PiB7XG4gIHJldHVybiBuZXh0KCkuY2F0Y2goZXJyID0+IHtcbiAgICBpZiAoNDAxID09IGVyci5zdGF0dXMpIHtcbiAgICAgIGN0eC5zdGF0dXMgPSA0MDE7XG4gICAgICBjdHguYm9keSA9IHtcbiAgICAgICAgY29kZTogNDAxLFxuICAgICAgICBtc2c6ICdQcm90ZWN0ZWQgcmVzb3VyY2UsIHVzZSBBdXRob3JpemF0aW9uIGhlYWRlciB0byBnZXQgYWNjZXNzXFxuJ1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnN0YXR1cyA9IGVyci5zdGF0dXMgfHwgNTAwO1xuICAgICAgY3R4LmJvZHkgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY29kZTogNTAxLFxuICAgICAgICBtc2c6IGVyci5tZXNzYWdlXG4gICAgICB9LCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IHtcbiAgICAgICAgc3RhY2s6IGVyci5zdGFja1xuICAgICAgfSA6IHt9KTtcbiAgICB9XG4gIH0pO1xufSk7Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/ErrorHandle.js\n");

/***/ }),

/***/ "./src/common/Util.js":
/*!****************************!*\
  !*** ./src/common/Util.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkCode\": () => (/* binding */ checkCode)\n/* harmony export */ });\n/* harmony import */ var _config_RedisConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/RedisConfig */ \"./src/config/RedisConfig.js\");\n\n\nconst checkCode = async (key, value) => {\n  const redisData = await (0,_config_RedisConfig__WEBPACK_IMPORTED_MODULE_0__.getValue)(key);\n\n  if (redisData !== null) {\n    if (redisData.toLowerCase() === value.toLowerCase()) {\n      return true;\n    } else {\n      return false;\n    }\n  } else {\n    return false;\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL1V0aWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2FhcGkvLi9zcmMvY29tbW9uL1V0aWwuanM/ZGIxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRWYWx1ZSB9IGZyb20gJ0AvY29uZmlnL1JlZGlzQ29uZmlnJztcblxuY29uc3QgY2hlY2tDb2RlID0gYXN5bmMgKGtleSwgdmFsdWUpID0+IHtcbiAgY29uc3QgcmVkaXNEYXRhID0gYXdhaXQgZ2V0VmFsdWUoa2V5KTtcblxuICBpZiAocmVkaXNEYXRhICE9PSBudWxsKSB7XG4gICAgaWYgKHJlZGlzRGF0YS50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGNoZWNrQ29kZSB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/common/Util.js\n");

/***/ }),

/***/ "./src/config/DBHelper.js":
/*!********************************!*\
  !*** ./src/config/DBHelper.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/config/index.js\");\n\n // 连接过程：\n// 创建连接\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(_index__WEBPACK_IMPORTED_MODULE_1__.default.DB_URL, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n}); // 连接成功\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on('connected', () => {\n  console.log('Mongoose connection open to' + _index__WEBPACK_IMPORTED_MODULE_1__.default.DB_URL);\n}); // 连接异常\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on('error', error => {\n  console.log('Mongoose connection error: ' + error);\n}); // 断开连接\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on('disconnected', () => {\n  console.log('Mongoose connection disconnected');\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default()));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL0RCSGVscGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29hYXBpLy4vc3JjL2NvbmZpZy9EQkhlbHBlci5qcz9kMWZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vaW5kZXgnOyAvLyDov57mjqXov4fnqIvvvJpcbi8vIOWIm+W7uui/nuaOpVxuXG5tb25nb29zZS5jb25uZWN0KGNvbmZpZy5EQl9VUkwsIHtcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcbn0pOyAvLyDov57mjqXmiJDlip9cblxubW9uZ29vc2UuY29ubmVjdGlvbi5vbignY29ubmVjdGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnTW9uZ29vc2UgY29ubmVjdGlvbiBvcGVuIHRvJyArIGNvbmZpZy5EQl9VUkwpO1xufSk7IC8vIOi/nuaOpeW8guW4uFxuXG5tb25nb29zZS5jb25uZWN0aW9uLm9uKCdlcnJvcicsIGVycm9yID0+IHtcbiAgY29uc29sZS5sb2coJ01vbmdvb3NlIGNvbm5lY3Rpb24gZXJyb3I6ICcgKyBlcnJvcik7XG59KTsgLy8g5pat5byA6L+e5o6lXG5cbm1vbmdvb3NlLmNvbm5lY3Rpb24ub24oJ2Rpc2Nvbm5lY3RlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ01vbmdvb3NlIGNvbm5lY3Rpb24gZGlzY29ubmVjdGVkJyk7XG59KTtcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/DBHelper.js\n");

/***/ }),

/***/ "./src/config/RedisConfig.js":
/*!***********************************!*\
  !*** ./src/config/RedisConfig.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"setValue\": () => (/* binding */ setValue),\n/* harmony export */   \"getValue\": () => (/* binding */ getValue),\n/* harmony export */   \"getHValue\": () => (/* binding */ getHValue),\n/* harmony export */   \"delValue\": () => (/* binding */ delValue)\n/* harmony export */ });\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis */ \"redis\");\n/* harmony import */ var redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/config/index.js\");\n\n\nconst options = {\n  host: _index__WEBPACK_IMPORTED_MODULE_1__.default.REDIS.host,\n  port: _index__WEBPACK_IMPORTED_MODULE_1__.default.REDIS.port,\n  password: _index__WEBPACK_IMPORTED_MODULE_1__.default.REDIS.password,\n  detect_buffers: true,\n  retry_strategy: function (options) {\n    if (options.error && options.error.code === \"ECONNREFUSED\") {\n      // End reconnecting on a specific error and flush all commands with\n      // a individual error\n      return new Error(\"The server refused the connection\");\n    }\n\n    if (options.total_retry_time > 1000 * 60 * 60) {\n      // End reconnecting after a specific timeout and flush all commands\n      // with a individual error\n      return new Error(\"Retry time exhausted\");\n    }\n\n    if (options.attempt > 10) {\n      // End reconnecting with built in error\n      return undefined;\n    } // reconnect after\n\n\n    return Math.min(options.attempt * 100, 3000);\n  }\n};\nconst client = redis__WEBPACK_IMPORTED_MODULE_0___default().createClient(options);\nclient.on('error', err => {\n  console.log('Redis Client Error', err);\n});\n\nconst setValue = (key, value, time) => {\n  if (typeof value === 'undefined' || value === null || value === '') {\n    return;\n  }\n\n  if (typeof value === 'string') {\n    if (typeof time !== 'undefined') {\n      client.set(key, value, 'EX', time);\n    } else {\n      client.set(key, value);\n    }\n  } else {\n    Object.keys(value).forEach(item => {\n      client.hset(key, item, value[item], (redis__WEBPACK_IMPORTED_MODULE_0___default().print));\n    });\n  }\n};\n\nconst {\n  promisify\n} = __webpack_require__(/*! util */ \"util\");\n\nconst getAsync = promisify(client.get).bind(client);\n\nconst getValue = key => {\n  return getAsync(key);\n};\n\nconst getHValue = key => {\n  return promisify(client.hgetall).bind(client)(key);\n};\n\nconst delValue = key => {\n  client.del(key, (err, res) => {\n    if (res === 1) {\n      console.log('delete successful');\n    } else {\n      console.log('delete failed：', err);\n    }\n  });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL1JlZGlzQ29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29hYXBpLy4vc3JjL2NvbmZpZy9SZWRpc0NvbmZpZy5qcz80ZDU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWRpcyBmcm9tICdyZWRpcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vaW5kZXgnO1xuY29uc3Qgb3B0aW9ucyA9IHtcbiAgaG9zdDogY29uZmlnLlJFRElTLmhvc3QsXG4gIHBvcnQ6IGNvbmZpZy5SRURJUy5wb3J0LFxuICBwYXNzd29yZDogY29uZmlnLlJFRElTLnBhc3N3b3JkLFxuICBkZXRlY3RfYnVmZmVyczogdHJ1ZSxcbiAgcmV0cnlfc3RyYXRlZ3k6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuZXJyb3IgJiYgb3B0aW9ucy5lcnJvci5jb2RlID09PSBcIkVDT05OUkVGVVNFRFwiKSB7XG4gICAgICAvLyBFbmQgcmVjb25uZWN0aW5nIG9uIGEgc3BlY2lmaWMgZXJyb3IgYW5kIGZsdXNoIGFsbCBjb21tYW5kcyB3aXRoXG4gICAgICAvLyBhIGluZGl2aWR1YWwgZXJyb3JcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJUaGUgc2VydmVyIHJlZnVzZWQgdGhlIGNvbm5lY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMudG90YWxfcmV0cnlfdGltZSA+IDEwMDAgKiA2MCAqIDYwKSB7XG4gICAgICAvLyBFbmQgcmVjb25uZWN0aW5nIGFmdGVyIGEgc3BlY2lmaWMgdGltZW91dCBhbmQgZmx1c2ggYWxsIGNvbW1hbmRzXG4gICAgICAvLyB3aXRoIGEgaW5kaXZpZHVhbCBlcnJvclxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIlJldHJ5IHRpbWUgZXhoYXVzdGVkXCIpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmF0dGVtcHQgPiAxMCkge1xuICAgICAgLy8gRW5kIHJlY29ubmVjdGluZyB3aXRoIGJ1aWx0IGluIGVycm9yXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gLy8gcmVjb25uZWN0IGFmdGVyXG5cblxuICAgIHJldHVybiBNYXRoLm1pbihvcHRpb25zLmF0dGVtcHQgKiAxMDAsIDMwMDApO1xuICB9XG59O1xuY29uc3QgY2xpZW50ID0gcmVkaXMuY3JlYXRlQ2xpZW50KG9wdGlvbnMpO1xuY2xpZW50Lm9uKCdlcnJvcicsIGVyciA9PiB7XG4gIGNvbnNvbGUubG9nKCdSZWRpcyBDbGllbnQgRXJyb3InLCBlcnIpO1xufSk7XG5cbmNvbnN0IHNldFZhbHVlID0gKGtleSwgdmFsdWUsIHRpbWUpID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHRpbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjbGllbnQuc2V0KGtleSwgdmFsdWUsICdFWCcsIHRpbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGllbnQuc2V0KGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNsaWVudC5oc2V0KGtleSwgaXRlbSwgdmFsdWVbaXRlbV0sIHJlZGlzLnByaW50KTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3Qge1xuICBwcm9taXNpZnlcbn0gPSByZXF1aXJlKFwidXRpbFwiKTtcblxuY29uc3QgZ2V0QXN5bmMgPSBwcm9taXNpZnkoY2xpZW50LmdldCkuYmluZChjbGllbnQpO1xuXG5jb25zdCBnZXRWYWx1ZSA9IGtleSA9PiB7XG4gIHJldHVybiBnZXRBc3luYyhrZXkpO1xufTtcblxuY29uc3QgZ2V0SFZhbHVlID0ga2V5ID0+IHtcbiAgcmV0dXJuIHByb21pc2lmeShjbGllbnQuaGdldGFsbCkuYmluZChjbGllbnQpKGtleSk7XG59O1xuXG5jb25zdCBkZWxWYWx1ZSA9IGtleSA9PiB7XG4gIGNsaWVudC5kZWwoa2V5LCAoZXJyLCByZXMpID0+IHtcbiAgICBpZiAocmVzID09PSAxKSB7XG4gICAgICBjb25zb2xlLmxvZygnZGVsZXRlIHN1Y2Nlc3NmdWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBmYWlsZWTvvJonLCBlcnIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjbGllbnQsIHNldFZhbHVlLCBnZXRWYWx1ZSwgZ2V0SFZhbHVlLCBkZWxWYWx1ZSB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/RedisConfig.js\n");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 定义数据库连接地址：mongodb://用户名:密码@服务IP:Port/数据库名\nconst DB_URL = 'mongodb://test:123456@127.0.0.1:27017/testdb';\nconst REDIS = {\n  host: '127.0.0.1',\n  port: '15001',\n  password: '123456'\n};\nconst JWT_SECRET = '*15DSds124&lijsaSJjdsIAS0ssSD**1!$DAS12KMmjksdl';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  DB_URL,\n  REDIS,\n  JWT_SECRET\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29hYXBpLy4vc3JjL2NvbmZpZy9pbmRleC5qcz8zOTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIOWumuS5ieaVsOaNruW6k+i/nuaOpeWcsOWdgO+8mm1vbmdvZGI6Ly/nlKjmiLflkI065a+G56CBQOacjeWKoUlQOlBvcnQv5pWw5o2u5bqT5ZCNXG5jb25zdCBEQl9VUkwgPSAnbW9uZ29kYjovL3Rlc3Q6MTIzNDU2QDEyNy4wLjAuMToyNzAxNy90ZXN0ZGInO1xuY29uc3QgUkVESVMgPSB7XG4gIGhvc3Q6ICcxMjcuMC4wLjEnLFxuICBwb3J0OiAnMTUwMDEnLFxuICBwYXNzd29yZDogJzEyMzQ1Nidcbn07XG5jb25zdCBKV1RfU0VDUkVUID0gJyoxNURTZHMxMjQmbGlqc2FTSmpkc0lBUzBzc1NEKioxISREQVMxMktNbWprc2RsJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgREJfVVJMLFxuICBSRURJUyxcbiAgSldUX1NFQ1JFVFxufTsiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/index.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-jwt */ \"koa-jwt\");\n/* harmony import */ var koa_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_jwt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koa-body */ \"koa-body\");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koa_body__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! koa-json */ \"koa-json\");\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(koa_json__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! koa-compose */ \"koa-compose\");\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(koa_compose__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! koa-compress */ \"koa-compress\");\n/* harmony import */ var koa_compress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(koa_compress__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config/index */ \"./src/config/index.js\");\n/* harmony import */ var _common_ErrorHandle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/ErrorHandle */ \"./src/common/ErrorHandle.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst app = new (koa__WEBPACK_IMPORTED_MODULE_0___default())();\nconst isDevMode =  false ? 0 : true; // 定义公共路径，不需要 jwt 鉴权\n\nconst jwt = koa_jwt__WEBPACK_IMPORTED_MODULE_1___default()({\n  secret: _config_index__WEBPACK_IMPORTED_MODULE_11__.default.JWT_SECRET\n}).unless({\n  path: [/^\\/public/, /\\login/]\n}); // 使用 koa-componse 集成中间件\n\nconst middleware = koa_compose__WEBPACK_IMPORTED_MODULE_9___default()([koa_body__WEBPACK_IMPORTED_MODULE_6___default()(), koa_static__WEBPACK_IMPORTED_MODULE_5___default()(path__WEBPACK_IMPORTED_MODULE_2___default().join(__dirname, '../public')), _koa_cors__WEBPACK_IMPORTED_MODULE_8___default()(), koa_json__WEBPACK_IMPORTED_MODULE_7___default()({\n  pretty: false,\n  param: 'pretty'\n}), koa_helmet__WEBPACK_IMPORTED_MODULE_4___default()(), _common_ErrorHandle__WEBPACK_IMPORTED_MODULE_12__.default, jwt]);\n\nif (!isDevMode) {\n  app.use(koa_compress__WEBPACK_IMPORTED_MODULE_10___default()());\n}\n\napp.use(middleware);\napp.use((0,_routes_routes__WEBPACK_IMPORTED_MODULE_3__.default)());\napp.listen(3000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2FhcGkvLi9zcmMvaW5kZXguanM/MWY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS29hIGZyb20gJ2tvYSc7XG5pbXBvcnQgSldUIGZyb20gJ2tvYS1qd3QnO1xuaW1wb3J0IFBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVzL3JvdXRlcyc7XG5pbXBvcnQgS29hSGVsbWV0IGZyb20gJ2tvYS1oZWxtZXQnO1xuaW1wb3J0IEtvYVN0YXRpYyBmcm9tICdrb2Etc3RhdGljJztcbmltcG9ydCBLb2FCb2R5IGZyb20gJ2tvYS1ib2R5JztcbmltcG9ydCBKc29uVXRpbCBmcm9tICdrb2EtanNvbic7XG5pbXBvcnQgQ29ycyBmcm9tICdAa29hL2NvcnMnO1xuaW1wb3J0IENvbXBvc2UgZnJvbSAna29hLWNvbXBvc2UnO1xuaW1wb3J0IENvbXByZXNzIGZyb20gJ2tvYS1jb21wcmVzcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnL2luZGV4JztcbmltcG9ydCBlcnJvckhhbmRsZSBmcm9tICcuL2NvbW1vbi9FcnJvckhhbmRsZSc7XG5jb25zdCBhcHAgPSBuZXcgS29hKCk7XG5jb25zdCBpc0Rldk1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZCcgPyBmYWxzZSA6IHRydWU7IC8vIOWumuS5ieWFrOWFsei3r+W+hO+8jOS4jemcgOimgSBqd3Qg6Ym05p2DXG5cbmNvbnN0IGp3dCA9IEpXVCh7XG4gIHNlY3JldDogY29uZmlnLkpXVF9TRUNSRVRcbn0pLnVubGVzcyh7XG4gIHBhdGg6IFsvXlxcL3B1YmxpYy8sIC9cXGxvZ2luL11cbn0pOyAvLyDkvb/nlKgga29hLWNvbXBvbnNlIOmbhuaIkOS4remXtOS7tlxuXG5jb25zdCBtaWRkbGV3YXJlID0gQ29tcG9zZShbS29hQm9keSgpLCBLb2FTdGF0aWMoUGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYycpKSwgQ29ycygpLCBKc29uVXRpbCh7XG4gIHByZXR0eTogZmFsc2UsXG4gIHBhcmFtOiAncHJldHR5J1xufSksIEtvYUhlbG1ldCgpLCBlcnJvckhhbmRsZSwgand0XSk7XG5cbmlmICghaXNEZXZNb2RlKSB7XG4gIGFwcC51c2UoQ29tcHJlc3MoKSk7XG59XG5cbmFwcC51c2UobWlkZGxld2FyZSk7XG5hcHAudXNlKFJvdXRlcigpKTtcbmFwcC5saXN0ZW4oMzAwMCk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/model/user.js":
/*!***************************!*\
  !*** ./src/model/user.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_DBHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/DBHelper */ \"./src/config/DBHelper.js\");\n // 连接 collections: model + schema\n\nconst Schema = _config_DBHelper__WEBPACK_IMPORTED_MODULE_0__.default.Schema;\nconst UserScheam = new Schema({\n  'username': {\n    type: String\n  },\n  'password': {\n    type: String\n  }\n});\nconst UserModel = _config_DBHelper__WEBPACK_IMPORTED_MODULE_0__.default.model('users', UserScheam);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWwvdXNlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2tvYWFwaS8uL3NyYy9tb2RlbC91c2VyLmpzP2E5MmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJy4uL2NvbmZpZy9EQkhlbHBlcic7IC8vIOi/nuaOpSBjb2xsZWN0aW9uczogbW9kZWwgKyBzY2hlbWFcblxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xuY29uc3QgVXNlclNjaGVhbSA9IG5ldyBTY2hlbWEoe1xuICAndXNlcm5hbWUnOiB7XG4gICAgdHlwZTogU3RyaW5nXG4gIH0sXG4gICdwYXNzd29yZCc6IHtcbiAgICB0eXBlOiBTdHJpbmdcbiAgfVxufSk7XG5jb25zdCBVc2VyTW9kZWwgPSBtb25nb29zZS5tb2RlbCgndXNlcnMnLCBVc2VyU2NoZWFtKTtcbmV4cG9ydCBkZWZhdWx0IFVzZXJNb2RlbDsiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/model/user.js\n");

/***/ }),

/***/ "./src/routes/loginRouter.js":
/*!***********************************!*\
  !*** ./src/routes/loginRouter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_LoginController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/LoginController */ \"./src/api/LoginController.js\");\n\n\nconst router = new (koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nrouter.prefix('/login');\nrouter.post('/login', _api_LoginController__WEBPACK_IMPORTED_MODULE_1__.default.login);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL2xvZ2luUm91dGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29hYXBpLy4vc3JjL3JvdXRlcy9sb2dpblJvdXRlci5qcz82YTgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcic7XG5pbXBvcnQgbG9naW5Db250cm9sbGVyIGZyb20gJy4uL2FwaS9Mb2dpbkNvbnRyb2xsZXInO1xuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xucm91dGVyLnByZWZpeCgnL2xvZ2luJyk7XG5yb3V0ZXIucG9zdCgnL2xvZ2luJywgbG9naW5Db250cm9sbGVyLmxvZ2luKTtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/loginRouter.js\n");

/***/ }),

/***/ "./src/routes/publicRouter.js":
/*!************************************!*\
  !*** ./src/routes/publicRouter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_PublicController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/PublicController */ \"./src/api/PublicController.js\");\n\n\nconst router = new (koa_router__WEBPACK_IMPORTED_MODULE_0___default())();\nrouter.prefix('/public');\nrouter.get('/getCaptcha', _api_PublicController__WEBPACK_IMPORTED_MODULE_1__.default.getCaptcha);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL3B1YmxpY1JvdXRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2tvYWFwaS8uL3NyYy9yb3V0ZXMvcHVibGljUm91dGVyLmpzP2FiNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCBwdWJsaWNDb250cm9sbGVyIGZyb20gJy4uL2FwaS9QdWJsaWNDb250cm9sbGVyJztcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbnJvdXRlci5wcmVmaXgoJy9wdWJsaWMnKTtcbnJvdXRlci5nZXQoJy9nZXRDYXB0Y2hhJywgcHVibGljQ29udHJvbGxlci5nZXRDYXB0Y2hhKTtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/publicRouter.js\n");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loginRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginRouter */ \"./src/routes/loginRouter.js\");\n/* harmony import */ var _routes_publicRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/publicRouter */ \"./src/routes/publicRouter.js\");\n\n\n\nconst Router = koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default()(_loginRouter__WEBPACK_IMPORTED_MODULE_1__.default, _routes_publicRouter__WEBPACK_IMPORTED_MODULE_2__.default);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL3JvdXRlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2tvYWFwaS8uL3NyYy9yb3V0ZXMvcm91dGVzLmpzP2ZlY2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbWJpbmVSb3V0ZXMgZnJvbSAna29hLWNvbWJpbmUtcm91dGVycyc7XG5pbXBvcnQgbG9naW5Sb3V0ZXIgZnJvbSAnLi9sb2dpblJvdXRlcic7XG5pbXBvcnQgcHVibGljUm91dGVyIGZyb20gJy4uL3JvdXRlcy9wdWJsaWNSb3V0ZXInO1xuY29uc3QgUm91dGVyID0gY29tYmluZVJvdXRlcyhsb2dpblJvdXRlciwgcHVibGljUm91dGVyKTtcbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("@koa/cors");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("koa");;

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("koa-body");;

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("koa-combine-routers");;

/***/ }),

/***/ "koa-compose":
/*!******************************!*\
  !*** external "koa-compose" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("koa-compose");;

/***/ }),

/***/ "koa-compress":
/*!*******************************!*\
  !*** external "koa-compress" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("koa-compress");;

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-helmet");;

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("koa-json");;

/***/ }),

/***/ "koa-jwt":
/*!**************************!*\
  !*** external "koa-jwt" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("koa-jwt");;

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-router");;

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-static");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redis");;

/***/ }),

/***/ "svg-captcha":
/*!******************************!*\
  !*** external "svg-captcha" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("svg-captcha");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;