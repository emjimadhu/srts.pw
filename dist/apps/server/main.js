(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_environment__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _lib_server_environments_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);




/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _srts_pw_server_common_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _user_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);




let UserRepository = class UserRepository extends _srts_pw_server_common_typeorm__WEBPACK_IMPORTED_MODULE_2__[/* BaseRepository */ "c"] {
    userRegister(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userDocument = this.create(user);
            return this.save(userDocument);
        });
    }
    userReadByVerificationToken(token) {
        return this.findOne({
            where: {
                'services.verificationToken.token': {
                    $eq: token
                }
            }
        });
    }
    userVerificationTokenUpdate(userDocument) {
        return this.save(Object.assign(Object.assign({}, userDocument), { services: {
                verificationToken: {}
            }, isVerified: true }));
    }
    userReadByEmail(email) {
        return this.findOne({
            email
        });
    }
    userReadById(id) {
        return this.findOne({
            id
        });
    }
};
UserRepository = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["EntityRepository"])(_user_entity__WEBPACK_IMPORTED_MODULE_3__[/* User */ "a"])
], UserRepository);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["f"]; });




/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["c"]; });




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _srts_pw_server_common_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _user_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
var _a, _b, _c;




let UserType = class UserType extends _srts_pw_server_common_typeorm__WEBPACK_IMPORTED_MODULE_2__[/* BaseGQLType */ "b"] {
    constructor(userDocument, token) {
        super();
        this.id = userDocument.id;
        this.firstName = userDocument.profile.firstName;
        this.lastName = userDocument.profile.lastName;
        this.email = userDocument.email;
        this.createdAt = userDocument.createdAt;
        this.updatedAt = userDocument.updatedAt;
        this.isVerified = userDocument.isVerified;
        this.token = token;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(type => _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["ID"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserType.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserType.prototype, "firstName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserType.prototype, "lastName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserType.prototype, "email", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], UserType.prototype, "isVerified", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserType.prototype, "token", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(type => Date),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserType.prototype, "createdAt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(type => Date),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserType.prototype, "updatedAt", void 0);
UserType = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["ObjectType"])('User'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _user_entity__WEBPACK_IMPORTED_MODULE_3__[/* User */ "a"] !== "undefined" && _user_entity__WEBPACK_IMPORTED_MODULE_3__[/* User */ "a"]) === "function" ? _c : Object, String])
], UserType);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _srts_pw_server_common_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _url_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _url_metadata_gql_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
var _a, _b, _c, _d;





let UrlType = class UrlType extends _srts_pw_server_common_typeorm__WEBPACK_IMPORTED_MODULE_2__[/* BaseGQLType */ "b"] {
    constructor(urlDocument) {
        super();
        this.id = urlDocument.id;
        this.shortUrl = urlDocument.shortUrl;
        this.longUrl = urlDocument.longUrl;
        this.createdAt = urlDocument.createdAt;
        this.updatedAt = urlDocument.updatedAt;
        this.user = urlDocument.user;
        this.metadata = urlDocument.metadata;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(type => _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["ID"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UrlType.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UrlType.prototype, "shortUrl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UrlType.prototype, "longUrl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UrlType.prototype, "user", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UrlType.prototype, "createdAt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UrlType.prototype, "updatedAt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(type => _url_metadata_gql_type__WEBPACK_IMPORTED_MODULE_4__[/* UrlMetadataType */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_c = typeof _url_metadata_gql_type__WEBPACK_IMPORTED_MODULE_4__[/* UrlMetadataType */ "a"] !== "undefined" && _url_metadata_gql_type__WEBPACK_IMPORTED_MODULE_4__[/* UrlMetadataType */ "a"]) === "function" ? _c : Object)
], UrlType.prototype, "metadata", void 0);
UrlType = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["ObjectType"])('Url'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _url_entity__WEBPACK_IMPORTED_MODULE_3__[/* Url */ "a"] !== "undefined" && _url_entity__WEBPACK_IMPORTED_MODULE_3__[/* Url */ "a"]) === "function" ? _d : Object])
], UrlType);



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _user_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _user_login__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _user_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _user_register__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _user_verify_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _user_verify_email__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _user_verify_email__WEBPACK_IMPORTED_MODULE_2__["b"]; });






/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlRepository; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _srts_pw_server_common_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _url_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);




let UrlRepository = class UrlRepository extends _srts_pw_server_common_typeorm__WEBPACK_IMPORTED_MODULE_2__[/* BaseRepository */ "c"] {
};
UrlRepository = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["EntityRepository"])(_url_entity__WEBPACK_IMPORTED_MODULE_3__[/* Url */ "a"])
], UrlRepository);



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _user_repository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _user_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
var _a, _b;









let UserLoginService = class UserLoginService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    login(requestVariables) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { email, password } = requestVariables;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["scheduled"])(this.userRepository.userReadByEmail(email), rxjs__WEBPACK_IMPORTED_MODULE_5__["asapScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])((userDocument) => {
                if (userDocument) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["scheduled"])(this.validatePassword(userDocument, password), rxjs__WEBPACK_IMPORTED_MODULE_5__["asapScheduler"]), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(userDocument)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([isValidPassword, user]) => {
                        if (!isValidPassword) {
                            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UnauthorizedException"]('Email or Password is Invalid');
                        }
                        return user;
                    }));
                }
                else {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["NotFoundException"]('User does not Exsists');
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((userDocument) => {
                const payload = {
                    id: userDocument.id
                };
                const accessToken = this.jwtService.sign(payload);
                return new _user_type__WEBPACK_IMPORTED_MODULE_8__[/* UserType */ "a"](userDocument, accessToken);
            }));
        });
    }
    validateJwtPayload(payload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userDocument = yield this.userRepository.userReadById(payload.id);
            if (!userDocument) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["NotFoundException"]('User could not be found.');
            }
            return new _user_type__WEBPACK_IMPORTED_MODULE_8__[/* UserType */ "a"](userDocument);
        });
    }
    validatePassword(userDocument, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return ((yield Object(bcrypt__WEBPACK_IMPORTED_MODULE_4__["hash"])(password, userDocument.services.password.salt)) === userDocument.services.password.password);
        });
    }
};
UserLoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["InjectRepository"])(_user_repository__WEBPACK_IMPORTED_MODULE_7__[/* UserRepository */ "a"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _user_repository__WEBPACK_IMPORTED_MODULE_7__[/* UserRepository */ "a"] !== "undefined" && _user_repository__WEBPACK_IMPORTED_MODULE_7__[/* UserRepository */ "a"]) === "function" ? _a : Object, typeof (_b = typeof _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtService"] !== "undefined" && _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtService"]) === "function" ? _b : Object])
], UserLoginService);



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_server_core_mailer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_server_core_mailer_module__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _lib_server_core_mailer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_server_core_mailer_service__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Url; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _srts_pw_server_common_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _url_metadata_entity_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
var _a;




let Url = class Url extends _srts_pw_server_common_typeorm__WEBPACK_IMPORTED_MODULE_2__[/* BaseDBEntity */ "a"] {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({
        unique: true
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Url.prototype, "slug", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Url.prototype, "longUrl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Url.prototype, "shortUrl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], Url.prototype, "user", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(type => _url_metadata_entity_column__WEBPACK_IMPORTED_MODULE_3__[/* MetaData */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _url_metadata_entity_column__WEBPACK_IMPORTED_MODULE_3__[/* MetaData */ "a"] !== "undefined" && _url_metadata_entity_column__WEBPACK_IMPORTED_MODULE_3__[/* MetaData */ "a"]) === "function" ? _a : Object)
], Url.prototype, "metadata", void 0);
Url = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])('url')
], Url);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var metascraper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92);
/* harmony import */ var metascraper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(metascraper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var metascraper_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93);
/* harmony import */ var metascraper_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(metascraper_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var metascraper_description__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94);
/* harmony import */ var metascraper_description__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(metascraper_description__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var metascraper_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95);
/* harmony import */ var metascraper_title__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(metascraper_title__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4);
/* harmony import */ var _url_repository__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15);
/* harmony import */ var _url_gql_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12);
var _a, _b;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unicorn/no-fn-reference-in-iterator */











let UrlService = class UrlService {
    constructor(urlRepository, httpService) {
        this.urlRepository = urlRepository;
        this.httpService = httpService;
    }
    listRead(requestVariables) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { user } = requestVariables || {};
            let filter = {};
            if (user) {
                filter = {
                    user
                };
            }
            return (yield this.urlRepository.find(filter)).map((urlDocument) => new _url_gql_type__WEBPACK_IMPORTED_MODULE_11__[/* UrlType */ "a"](urlDocument));
        });
    }
    createShortUrl(requestVariables) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const metascraper = metascraper__WEBPACK_IMPORTED_MODULE_5___default()([
                metascraper_image__WEBPACK_IMPORTED_MODULE_6___default()(),
                metascraper_description__WEBPACK_IMPORTED_MODULE_7___default()(),
                metascraper_title__WEBPACK_IMPORTED_MODULE_8___default()()
            ]);
            let { slug, url, user } = requestVariables;
            if (!slug) {
                slug = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])().slice(0, 8);
            }
            let htmlDocument;
            let metadata = {};
            try {
                htmlDocument = yield this.httpService.get(url).toPromise();
                metadata = yield metascraper({
                    html: htmlDocument.data,
                    url: url
                });
            }
            catch (_a) {
                metadata = {
                    title: (new url__WEBPACK_IMPORTED_MODULE_1__["URL"](url)).hostname,
                    description: (new url__WEBPACK_IMPORTED_MODULE_1__["URL"](url)).pathname,
                    image: 'https://via.placeholder.com/1500?text=srts.pw'
                };
            }
            const urlEntity = this.urlRepository.create({
                id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
                longUrl: url,
                shortUrl: `${_srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_9__[/* environment */ "a"].clientUrl}/r/${slug}`,
                slug,
                user,
                metadata
            });
            const urlDocument = yield this.urlRepository.save(urlEntity);
            return new _url_gql_type__WEBPACK_IMPORTED_MODULE_11__[/* UrlType */ "a"](urlDocument);
        });
    }
    getUrlByShortUrl(requestVariables) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { shortUrl } = requestVariables;
            const urlDocument = yield this.urlRepository.findOne({
                shortUrl
            });
            if (!urlDocument) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["NotFoundException"]('URL doesn\'t exsists!');
            }
            return new _url_gql_type__WEBPACK_IMPORTED_MODULE_11__[/* UrlType */ "a"](urlDocument);
        });
    }
};
UrlService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_3__["InjectRepository"])(_url_repository__WEBPACK_IMPORTED_MODULE_10__[/* UrlRepository */ "a"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _url_repository__WEBPACK_IMPORTED_MODULE_10__[/* UrlRepository */ "a"] !== "undefined" && _url_repository__WEBPACK_IMPORTED_MODULE_10__[/* UrlRepository */ "a"]) === "function" ? _a : Object, typeof (_b = typeof _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["HttpService"] !== "undefined" && _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["HttpService"]) === "function" ? _b : Object])
], UrlService);



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _srts_pw_server_common_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _srts_pw_server_common_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _models_user_profile_embeded_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _models_user_services_embeded_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
var _a, _b, _c;






let User = class User extends _srts_pw_server_common_typeorm__WEBPACK_IMPORTED_MODULE_2__[/* BaseDBEntity */ "a"] {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(type => _models_user_profile_embeded_entity__WEBPACK_IMPORTED_MODULE_4__[/* UserProfile */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_user_profile_embeded_entity__WEBPACK_IMPORTED_MODULE_4__[/* UserProfile */ "a"] !== "undefined" && _models_user_profile_embeded_entity__WEBPACK_IMPORTED_MODULE_4__[/* UserProfile */ "a"]) === "function" ? _a : Object)
], User.prototype, "profile", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({
        unique: true
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "userName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({
        unique: true
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "email", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], User.prototype, "password", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({
        default: false
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], User.prototype, "isVerified", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(type => _models_user_services_embeded_entity__WEBPACK_IMPORTED_MODULE_5__[/* UserServices */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof _models_user_services_embeded_entity__WEBPACK_IMPORTED_MODULE_5__[/* UserServices */ "a"] !== "undefined" && _models_user_services_embeded_entity__WEBPACK_IMPORTED_MODULE_5__[/* UserServices */ "a"]) === "function" ? _b : Object)
], User.prototype, "services", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('enum', {
        enum: _srts_pw_server_common_types__WEBPACK_IMPORTED_MODULE_3__[/* UserRoles */ "c"],
        default: _srts_pw_server_common_types__WEBPACK_IMPORTED_MODULE_3__[/* UserRoles */ "c"].USER
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_c = typeof _srts_pw_server_common_types__WEBPACK_IMPORTED_MODULE_3__[/* UserRoles */ "c"] !== "undefined" && _srts_pw_server_common_types__WEBPACK_IMPORTED_MODULE_3__[/* UserRoles */ "c"]) === "function" ? _c : Object)
], User.prototype, "role", void 0);
User = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])()
], User);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _srts_pw_server_common_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _srts_pw_server_core_mailer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony import */ var _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
/* harmony import */ var _user_repository__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6);
/* harmony import */ var _user_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
var _a, _b;











let UserRegisterService = class UserRegisterService {
    constructor(userRepository, mailerService) {
        this.userRepository = userRepository;
        this.mailerService = mailerService;
    }
    register(requestVariables) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { firstName, lastName, email, password } = requestVariables;
            const verificationToken = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
            const salt = yield Object(_srts_pw_server_common_types__WEBPACK_IMPORTED_MODULE_6__[/* generateSalt */ "e"])();
            const hashedPassord = yield Object(_srts_pw_server_common_types__WEBPACK_IMPORTED_MODULE_6__[/* hashPassword */ "f"])(password, salt);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["scheduled"])(this.userRepository.userRegister({
                profile: {
                    firstName,
                    lastName
                },
                userName: email,
                email,
                isVerified: false,
                services: {
                    password: {
                        password: hashedPassord,
                        salt,
                        generatedAt: new Date(),
                        updatedAt: new Date()
                    },
                    verificationToken: {
                        token: verificationToken,
                        generatedAt: new Date()
                    }
                },
                id: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(),
                role: _srts_pw_server_common_types__WEBPACK_IMPORTED_MODULE_6__[/* UserRoles */ "c"].USER
            }), rxjs__WEBPACK_IMPORTED_MODULE_3__["asyncScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((userDocument) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.mailerService.sendVerificationTokenEmail({
                    email: userDocument.email,
                    firstName: userDocument.profile.firstName,
                    lastName: userDocument.profile.lastName,
                    token: `${_srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_8__[/* environment */ "a"].clientUrl}/verify-email/${verificationToken}`
                });
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((userDocument) => new _user_type__WEBPACK_IMPORTED_MODULE_10__[/* UserType */ "a"](userDocument)));
        });
    }
};
UserRegisterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_user_repository__WEBPACK_IMPORTED_MODULE_9__[/* UserRepository */ "a"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _user_repository__WEBPACK_IMPORTED_MODULE_9__[/* UserRepository */ "a"] !== "undefined" && _user_repository__WEBPACK_IMPORTED_MODULE_9__[/* UserRepository */ "a"]) === "function" ? _a : Object, typeof (_b = typeof _srts_pw_server_core_mailer__WEBPACK_IMPORTED_MODULE_7__[/* ServerCoreMailerService */ "b"] !== "undefined" && _srts_pw_server_core_mailer__WEBPACK_IMPORTED_MODULE_7__[/* ServerCoreMailerService */ "b"]) === "function" ? _b : Object])
], UserRegisterService);



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _create_short_url_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _create_short_url_input__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _get_url_by_short_url_and_user_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _get_urls_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _get_urls_input__WEBPACK_IMPORTED_MODULE_2__["a"]; });






/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["b"]; });




/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _user_base_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _user_base_input__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetaData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


class MetaData {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({
        nullable: true
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], MetaData.prototype, "description", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({
        nullable: true
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], MetaData.prototype, "image", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])({
        nullable: true
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], MetaData.prototype, "title", void 0);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlMetadataType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);


let UrlMetadataType = class UrlMetadataType {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])({
        nullable: true
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UrlMetadataType.prototype, "description", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])({
        nullable: true
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UrlMetadataType.prototype, "image", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])({
        nullable: true
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UrlMetadataType.prototype, "title", void 0);
UrlMetadataType = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["ObjectType"])()
], UrlMetadataType);



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPassword; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
var _a, _b;


class UserPassword {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserPassword.prototype, "password", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserPassword.prototype, "salt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserPassword.prototype, "generatedAt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserPassword.prototype, "updatedAt", void 0);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);


class UserProfile {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserProfile.prototype, "firstName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserProfile.prototype, "lastName", void 0);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _verification_token_embeded_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _password_embeded_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
var _a, _b;




class UserServices {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(() => _verification_token_embeded_entity__WEBPACK_IMPORTED_MODULE_2__[/* UserVerificationToken */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _verification_token_embeded_entity__WEBPACK_IMPORTED_MODULE_2__[/* UserVerificationToken */ "a"] !== "undefined" && _verification_token_embeded_entity__WEBPACK_IMPORTED_MODULE_2__[/* UserVerificationToken */ "a"]) === "function" ? _a : Object)
], UserServices.prototype, "verificationToken", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(() => _password_embeded_entity__WEBPACK_IMPORTED_MODULE_3__[/* UserPassword */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof _password_embeded_entity__WEBPACK_IMPORTED_MODULE_3__[/* UserPassword */ "a"] !== "undefined" && _password_embeded_entity__WEBPACK_IMPORTED_MODULE_3__[/* UserPassword */ "a"]) === "function" ? _b : Object)
], UserServices.prototype, "password", void 0);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserVerificationToken; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
var _a;


class UserVerificationToken {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserVerificationToken.prototype, "token", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserVerificationToken.prototype, "generatedAt", void 0);


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetURLByShortURLAndUserInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_2__);



let GetURLByShortURLAndUserInput = class GetURLByShortURLAndUserInput {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsString"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"])(6),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], GetURLByShortURLAndUserInput.prototype, "shortUrl", void 0);
GetURLByShortURLAndUserInput = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["InputType"])()
], GetURLByShortURLAndUserInput);



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _user_login_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _user_login_input__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _user_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _user_login_service__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerCoreMailerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
var _a;




let ServerCoreMailerService = class ServerCoreMailerService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    sendVerificationTokenEmail(requestVariables) {
        const { email, token, firstName, lastName } = requestVariables;
        return this.mailerService
            .sendMail({
            to: email,
            from: _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_3__[/* environment */ "a"].mailer.from,
            subject: 'Verify srts.pw Account',
            template: 'verification-email',
            context: {
                verificationToken: token,
                fullName: `${firstName} ${lastName}`
            }
        });
    }
    sendWelcomeEmail(requestVariables) {
        const { firstName, lastName, email } = requestVariables;
        return this.mailerService
            .sendMail({
            to: email,
            from: _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_3__[/* environment */ "a"].mailer.from,
            subject: 'Welcome to srts.pw',
            template: 'welcome',
            context: {
                fullName: `${firstName} ${lastName}`
            }
        });
    }
};
ServerCoreMailerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_2__["MailerService"] !== "undefined" && _nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_2__["MailerService"]) === "function" ? _a : Object])
], ServerCoreMailerService);



/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@nestjs-modules/mailer");

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getData() {
        return ({
            message: 'Welcome to server!'
        });
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _url_gql_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _models_get_url_by_short_url_and_user_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
var _a, _b, _c, _d, _e, _f, _g;






let UrlResolver = class UrlResolver {
    constructor(urlService) {
        this.urlService = urlService;
    }
    urls(requestVariables) {
        return this.urlService.listRead(requestVariables);
    }
    createShortUrl(requestVariables) {
        return this.urlService.createShortUrl(requestVariables);
    }
    getUrlByShortUrl(requestVariables) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.urlService.getUrlByShortUrl(requestVariables);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Query"])(() => [_url_gql_type__WEBPACK_IMPORTED_MODULE_3__[/* UrlType */ "a"]]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Args"])('requestVariables', {
        nullable: true
    })),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _models__WEBPACK_IMPORTED_MODULE_4__[/* GetUrlsInput */ "b"] !== "undefined" && _models__WEBPACK_IMPORTED_MODULE_4__[/* GetUrlsInput */ "b"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UrlResolver.prototype, "urls", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Mutation"])(() => _url_gql_type__WEBPACK_IMPORTED_MODULE_3__[/* UrlType */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Args"])('requestVariables')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _models__WEBPACK_IMPORTED_MODULE_4__[/* CreateShortUrlInput */ "a"] !== "undefined" && _models__WEBPACK_IMPORTED_MODULE_4__[/* CreateShortUrlInput */ "a"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UrlResolver.prototype, "createShortUrl", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Query"])(() => _url_gql_type__WEBPACK_IMPORTED_MODULE_3__[/* UrlType */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Args"])('requestVariables')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof _models_get_url_by_short_url_and_user_input__WEBPACK_IMPORTED_MODULE_5__[/* GetURLByShortURLAndUserInput */ "a"] !== "undefined" && _models_get_url_by_short_url_and_user_input__WEBPACK_IMPORTED_MODULE_5__[/* GetURLByShortURLAndUserInput */ "a"]) === "function" ? _e : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UrlResolver.prototype, "getUrlByShortUrl", null);
UrlResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Resolver"])(of => _url_gql_type__WEBPACK_IMPORTED_MODULE_3__[/* UrlType */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_g = typeof _url_service__WEBPACK_IMPORTED_MODULE_2__[/* UrlService */ "a"] !== "undefined" && _url_service__WEBPACK_IMPORTED_MODULE_2__[/* UrlService */ "a"]) === "function" ? _g : Object])
], UrlResolver);



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _srts_pw_server_common_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _services_user_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35);
/* harmony import */ var _services_user_login_user_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _services_user_register_user_register_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);
/* harmony import */ var _user_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;











let UserResolver = class UserResolver {
    constructor(userRegisterService, userLoginService, userVerifyEmailService) {
        this.userRegisterService = userRegisterService;
        this.userLoginService = userLoginService;
        this.userVerifyEmailService = userVerifyEmailService;
    }
    users() {
        return 'Users';
    }
    register(requestVariables) {
        return this.userRegisterService.register(requestVariables);
    }
    login(requestVariables, response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield (yield this.userLoginService.login(requestVariables)).toPromise();
            const seconds = Object(_srts_pw_server_common_types__WEBPACK_IMPORTED_MODULE_4__[/* convertDaysToSeconds */ "d"])(7);
            const date = new Date();
            date.setSeconds(seconds);
            response.cookie('token', user.token, {
                httpOnly: true,
                expires: date,
                secure: _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_5__[/* environment */ "a"].production
            });
            return user;
        });
    }
    verifyEmail(requestVariables) {
        return this.userVerifyEmailService.verifyEmail(requestVariables);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__["Query"])(() => String),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(_srts_pw_server_common_types__WEBPACK_IMPORTED_MODULE_4__[/* GqlAuthGuard */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", String)
], UserResolver.prototype, "users", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__["Mutation"])(() => _user_type__WEBPACK_IMPORTED_MODULE_10__[/* UserType */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__["Args"])('requestVariables')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _services__WEBPACK_IMPORTED_MODULE_6__[/* UserRegisterInput */ "b"] !== "undefined" && _services__WEBPACK_IMPORTED_MODULE_6__[/* UserRegisterInput */ "b"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UserResolver.prototype, "register", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__["Mutation"])(() => _user_type__WEBPACK_IMPORTED_MODULE_10__[/* UserType */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__["Args"])('requestVariables')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_srts_pw_server_common_types__WEBPACK_IMPORTED_MODULE_4__[/* ResponseGql */ "b"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _services_user_login__WEBPACK_IMPORTED_MODULE_7__[/* UserLoginInput */ "a"] !== "undefined" && _services_user_login__WEBPACK_IMPORTED_MODULE_7__[/* UserLoginInput */ "a"]) === "function" ? _c : Object, typeof (_d = typeof express__WEBPACK_IMPORTED_MODULE_3__["Response"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_3__["Response"]) === "function" ? _d : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UserResolver.prototype, "login", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__["Mutation"])(() => Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__["Args"])('requestVariables')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_f = typeof _services__WEBPACK_IMPORTED_MODULE_6__[/* UserVerifyEmailInput */ "c"] !== "undefined" && _services__WEBPACK_IMPORTED_MODULE_6__[/* UserVerifyEmailInput */ "c"]) === "function" ? _f : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], UserResolver.prototype, "verifyEmail", null);
UserResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__["Resolver"])(of => _user_type__WEBPACK_IMPORTED_MODULE_10__[/* UserType */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_h = typeof _services_user_register_user_register_service__WEBPACK_IMPORTED_MODULE_9__[/* UserRegisterService */ "a"] !== "undefined" && _services_user_register_user_register_service__WEBPACK_IMPORTED_MODULE_9__[/* UserRegisterService */ "a"]) === "function" ? _h : Object, typeof (_j = typeof _services_user_login_user_login_service__WEBPACK_IMPORTED_MODULE_8__[/* UserLoginService */ "a"] !== "undefined" && _services_user_login_user_login_service__WEBPACK_IMPORTED_MODULE_8__[/* UserLoginService */ "a"]) === "function" ? _j : Object, typeof (_k = typeof _services__WEBPACK_IMPORTED_MODULE_6__[/* UserVerifyEmailService */ "d"] !== "undefined" && _services__WEBPACK_IMPORTED_MODULE_6__[/* UserVerifyEmailService */ "d"]) === "function" ? _k : Object])
], UserResolver);



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98);
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _srts_pw_server_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
var _a;






const cookieExtractor = (request) => {
    let token;
    if (request && request.cookies) {
        token = request.cookies.token;
    }
    return token;
};
let JwtStrategy = class JwtStrategy extends Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_2__["PassportStrategy"])(passport_jwt__WEBPACK_IMPORTED_MODULE_3__["Strategy"]) {
    constructor(userLoginService) {
        super({
            jwtFromRequest: cookieExtractor,
            secretOrKey: _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].jwtSecret
        });
        this.userLoginService = userLoginService;
    }
    validate(payload) {
        return this.userLoginService.validateJwtPayload(payload);
    }
};
JwtStrategy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _srts_pw_server_user__WEBPACK_IMPORTED_MODULE_5__[/* UserLoginService */ "b"] !== "undefined" && _srts_pw_server_user__WEBPACK_IMPORTED_MODULE_5__[/* UserLoginService */ "b"]) === "function" ? _a : Object])
], JwtStrategy);



/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* eslint-disable @typescript-eslint/quotes, @typescript-eslint/indent, unicorn/prevent-abbreviations, quotes */
const environment = {
    "production": true,
    "port": 3001,
    "mongoUri": "mongodb+srv://batman:QoJysqBS9N3QsVd4@srts-8wg08.mongodb.net/srtspw?retryWrites=true&w=majority",
    "clientUrl": "https://srts.pw",
    "mailer": {
        "service": "gmail",
        "host": "smtp.ethereal.email",
        "port": 587,
        "username": "srtspw@gmail.com",
        "password": "ibnuvkgzlnyuewyc",
        "from": "srtspw@gmail.com"
    },
    "jwtSecret": "gkxwlLZVXnVfLIvznrcx"
};


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ServerEnvironmentsModule */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let ServerEnvironmentsModule = class ServerEnvironmentsModule {
};
ServerEnvironmentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        controllers: [],
        providers: [],
        exports: []
    })
], ServerEnvironmentsModule);



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerCoreGraphqlModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);




let ServerCoreGraphqlModule = class ServerCoreGraphqlModule {
};
ServerCoreGraphqlModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__["GraphQLModule"].forRoot({
                autoSchemaFile: 'schema.gql',
                debug: !_srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_3__[/* environment */ "a"].production,
                playground: !_srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_3__[/* environment */ "a"].production,
                introspection: !_srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_3__[/* environment */ "a"].production,
                context: ({ // eslint-disable-line @typescript-eslint/typedef
                req, res }) => ({
                    req,
                    res
                }),
                cors: false
            })
        ]
    })
], ServerCoreGraphqlModule);



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _gql_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _server_urls_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _server_urls_module__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _url_metadata_entity_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _url_metadata_gql_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var _url_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _url_gql_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _url_repository__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _url_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40);
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19);












/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ResponseGql */
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);


const ResponseGql = Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["createParamDecorator"])((data, context) => {
    const gqlExecutionContext = _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["GqlExecutionContext"].create(context);
    return gqlExecutionContext.getContext().req.res;
});


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateShortUrlInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_2__);



let CreateShortUrlInput = class CreateShortUrlInput {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])({
        nullable: true
    }),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["Matches"])(/[\w-]+/g, {
        message: 'Invalid slug format. Should be Alphanumeric and Dash'
    }),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsOptional"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateShortUrlInput.prototype, "slug", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsUrl"])({}, {
        message: 'Invalid URL format'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateShortUrlInput.prototype, "url", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsUUID"])('4', {
        message: 'Invalid User'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateShortUrlInput.prototype, "user", void 0);
CreateShortUrlInput = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["InputType"])()
], CreateShortUrlInput);



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetUrlsInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_2__);



let GetUrlsInput = class GetUrlsInput {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])({
        nullable: true
    }),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsUUID"])('4', {
        message: 'Invalid User'
    }),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsOptional"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], GetUrlsInput.prototype, "user", void 0);
GetUrlsInput = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["InputType"])()
], GetUrlsInput);



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerUrlsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _url_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _url_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);






let ServerUrlsModule = class ServerUrlsModule {
};
ServerUrlsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([_url_repository__WEBPACK_IMPORTED_MODULE_3__[/* UrlRepository */ "a"]]),
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpModule"]
        ],
        providers: [
            _url_resolver__WEBPACK_IMPORTED_MODULE_4__[/* UrlResolver */ "a"],
            _url_service__WEBPACK_IMPORTED_MODULE_5__[/* UrlService */ "a"]
        ]
    })
], ServerUrlsModule);



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _server_common_typeorm_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeorm__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _typeorm__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _typeorm__WEBPACK_IMPORTED_MODULE_1__["c"]; });





/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ServerCommonTypeormModule */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let ServerCommonTypeormModule = class ServerCommonTypeormModule {
};
ServerCommonTypeormModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        controllers: [],
        providers: [],
        exports: []
    })
], ServerCommonTypeormModule);



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _base_entity__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _base_gql_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _base_gql_type__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _base_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _base_repository__WEBPACK_IMPORTED_MODULE_2__["a"]; });






/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseDBEntity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_1__);
var _a, _b;


class BaseDBEntity extends typeorm__WEBPACK_IMPORTED_MODULE_1__["BaseEntity"] {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["ObjectIdColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], BaseDBEntity.prototype, "_id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], BaseDBEntity.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["CreateDateColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BaseDBEntity.prototype, "createdAt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["UpdateDateColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BaseDBEntity.prototype, "updatedAt", void 0);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseGQLType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
var _a, _b;


let BaseGQLType = class BaseGQLType {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(type => _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["ID"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], BaseGQLType.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BaseGQLType.prototype, "createdAt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BaseGQLType.prototype, "updatedAt", void 0);
BaseGQLType = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["ObjectType"])()
], BaseGQLType);



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseRepository; });
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);

class BaseRepository extends typeorm__WEBPACK_IMPORTED_MODULE_0__["Repository"] {
}


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _server_user_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _server_user_module__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _user_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _user_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _user_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _user_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);










/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBaseInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_2__);



let UserBaseInput = class UserBaseInput {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsEmail"])(),
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserBaseInput.prototype, "email", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"])(4),
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserBaseInput.prototype, "password", void 0);
UserBaseInput = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["InputType"])()
], UserBaseInput);



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* unused harmony reexport * */



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _password_embeded_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* unused harmony reexport * */
/* harmony import */ var _profile_embeded_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* unused harmony reexport * */
/* harmony import */ var _services_embeded_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* unused harmony reexport * */
/* harmony import */ var _verification_token_embeded_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* unused harmony reexport * */






/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _user_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
/* harmony import */ var _services_user_register_user_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _services_user_login_user_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);








let ServerUserModule = class ServerUserModule {
};
ServerUserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forFeature([_user_repository__WEBPACK_IMPORTED_MODULE_3__[/* UserRepository */ "a"]])],
        providers: [
            _user_resolver__WEBPACK_IMPORTED_MODULE_4__[/* UserResolver */ "a"],
            _services_user_register_user_register_service__WEBPACK_IMPORTED_MODULE_5__[/* UserRegisterService */ "a"],
            _services_user_login_user_login_service__WEBPACK_IMPORTED_MODULE_7__[/* UserLoginService */ "a"],
            _services__WEBPACK_IMPORTED_MODULE_6__[/* UserVerifyEmailService */ "d"]
        ],
        exports: [_services_user_login_user_login_service__WEBPACK_IMPORTED_MODULE_7__[/* UserLoginService */ "a"]]
    })
], ServerUserModule);



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _decorators__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _enums__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _gaurd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _gaurd__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _methods__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _methods__WEBPACK_IMPORTED_MODULE_3__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _methods__WEBPACK_IMPORTED_MODULE_3__["c"]; });







/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _gql_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _gql_decorator__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseGql; });
/* unused harmony export GqlUser */
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);


const ResponseGql = Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["createParamDecorator"])((data, context) => {
    const gqlExecutionContext = _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["GqlExecutionContext"].create(context);
    return gqlExecutionContext.getContext().req.res;
});
const GqlUser = Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__["createParamDecorator"])((data, context) => {
    const gqlExecutionContext = _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["GqlExecutionContext"].create(context);
    return gqlExecutionContext.getContext().req.user;
});


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _user_roles_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _user_roles_enum__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoles; });
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["USER"] = "user";
})(UserRoles || (UserRoles = {}));


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _gql_gaurd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _gql_gaurd__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GqlAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_3__);

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */



let GqlAuthGuard = class GqlAuthGuard extends Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"])('jwt') {
    getRequest(context) {
        const gqlExecutionContext = _nestjs_graphql__WEBPACK_IMPORTED_MODULE_2__["GqlExecutionContext"].create(context);
        return gqlExecutionContext.getContext().req;
    }
    handleRequest(error, user, info) {
        if (error || !user) {
            throw error || new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UnauthorizedException"]('Token is Invalid.');
        }
        return user;
    }
};
GqlAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GqlAuthGuard);



/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _user__WEBPACK_IMPORTED_MODULE_1__["b"]; });





/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _helpers_method__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _helpers_method__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertDaysToSeconds; });
const convertDaysToSeconds = (numberOfDays) => numberOfDays * 24 * 60 * 60;


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _bcrypt_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _bcrypt_helpers__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _bcrypt_helpers__WEBPACK_IMPORTED_MODULE_0__["b"]; });




/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateSalt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hashPassword; });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);

const generateSalt = () => Object(bcrypt__WEBPACK_IMPORTED_MODULE_0__["genSalt"])();
const hashPassword = (password, salt) => Object(bcrypt__WEBPACK_IMPORTED_MODULE_0__["hash"])(password, salt);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);



let UserLoginInput = class UserLoginInput extends _common__WEBPACK_IMPORTED_MODULE_2__[/* UserBaseInput */ "a"] {
};
UserLoginInput = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["InputType"])()
], UserLoginInput);



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _user_register_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _user_register_input__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _user_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);




/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);




let UserRegisterInput = class UserRegisterInput extends _common__WEBPACK_IMPORTED_MODULE_3__[/* UserBaseInput */ "a"] {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserRegisterInput.prototype, "firstName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserRegisterInput.prototype, "lastName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsUUID"])('4'),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsOptional"])(),
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])({
        nullable: true
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserRegisterInput.prototype, "id", void 0);
UserRegisterInput = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["InputType"])()
], UserRegisterInput);



/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerCoreMailerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_modules_mailer_dist_adapters_handlebars_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96);
/* harmony import */ var _nestjs_modules_mailer_dist_adapters_handlebars_adapter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_modules_mailer_dist_adapters_handlebars_adapter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _server_core_mailer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);






let transportOptions = {};
if (_srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].production) {
    transportOptions = {
        service: 'gmail',
        auth: {
            user: _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].mailer.username,
            pass: _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].mailer.password
        }
    };
}
else {
    transportOptions = {
        host: _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].mailer.host,
        port: _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].mailer.port,
        secure: false,
        auth: {
            user: _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].mailer.username,
            pass: _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].mailer.password
        }
    };
}
let ServerCoreMailerModule = class ServerCoreMailerModule {
};
ServerCoreMailerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Global"])(),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_2__["MailerModule"].forRoot({
                transport: transportOptions,
                defaults: {
                    from: `"srts.pw" <${_srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].mailer.from}>`
                },
                template: {
                    dir: __dirname + '/mail-templates',
                    adapter: new _nestjs_modules_mailer_dist_adapters_handlebars_adapter__WEBPACK_IMPORTED_MODULE_3__["HandlebarsAdapter"](),
                    options: {
                        strict: true
                    }
                }
            })
        ],
        providers: [_server_core_mailer_service__WEBPACK_IMPORTED_MODULE_5__[/* ServerCoreMailerService */ "a"]],
        exports: [_server_core_mailer_service__WEBPACK_IMPORTED_MODULE_5__[/* ServerCoreMailerService */ "a"]]
    })
], ServerCoreMailerModule);



/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _user_verify_email_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _user_verify_email_input__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _user_verify_email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _user_verify_email_service__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserVerifyEmailInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_2__);



let UserVerifyEmailInput = class UserVerifyEmailInput {
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsUUID"])('4', {
        message: 'Invalid Token Format'
    }),
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["Field"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserVerifyEmailInput.prototype, "verificationToken", void 0);
UserVerifyEmailInput = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__["InputType"])()
], UserVerifyEmailInput);



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserVerifyEmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _srts_pw_server_core_mailer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _user_repository__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
var _a, _b;







let UserVerifyEmailService = class UserVerifyEmailService {
    constructor(userRepository, mailerService) {
        this.userRepository = userRepository;
        this.mailerService = mailerService;
    }
    verifyEmail(requestVariables) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { verificationToken } = requestVariables;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["scheduled"])(this.userRepository.userReadByVerificationToken(verificationToken), rxjs__WEBPACK_IMPORTED_MODULE_3__["asapScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((userDocument) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.mailerService.sendWelcomeEmail({
                    email: userDocument.email,
                    firstName: userDocument.profile.firstName,
                    lastName: userDocument.profile.lastName
                });
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((userDocument) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["scheduled"])(this.userRepository.userVerificationTokenUpdate(userDocument), rxjs__WEBPACK_IMPORTED_MODULE_3__["asapScheduler"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => !!user))));
            // const userDocument = await this.userRepository.userReadByVerificationToken(verificationToken);
            // if (!userDocument) {
            //   throw new NotFoundException('Verification Token is invalid');
            // } else {
            //   const updatedDocument = await this.userRepository.userVerificationTokenUpdate(userDocument);
            //   await this.mailerService.sendWelcomeEmail({
            //     email: updatedDocument.email,
            //     firstName: updatedDocument.profile.firstName,
            //     lastName: updatedDocument.profile.lastName
            //   });
            //   return !!updatedDocument;
            // }
        });
    }
};
UserVerifyEmailService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["InjectRepository"])(_user_repository__WEBPACK_IMPORTED_MODULE_6__[/* UserRepository */ "a"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _user_repository__WEBPACK_IMPORTED_MODULE_6__[/* UserRepository */ "a"] !== "undefined" && _user_repository__WEBPACK_IMPORTED_MODULE_6__[/* UserRepository */ "a"]) === "function" ? _a : Object, typeof (_b = typeof _srts_pw_server_core_mailer__WEBPACK_IMPORTED_MODULE_5__[/* ServerCoreMailerService */ "b"] !== "undefined" && _srts_pw_server_core_mailer__WEBPACK_IMPORTED_MODULE_5__[/* ServerCoreMailerService */ "b"]) === "function" ? _b : Object])
], UserVerifyEmailService);



/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _server_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _server_auth_module__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _stratergies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86);




/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerAuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _srts_pw_server_common_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _srts_pw_server_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/* harmony import */ var _stratergies_jwt_stratergy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);








let ServerAuthModule = class ServerAuthModule {
};
ServerAuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Global"])(),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_passport__WEBPACK_IMPORTED_MODULE_3__["PassportModule"].register({
                defaultStrategy: 'jwt'
            }),
            _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtModule"].register({
                secret: _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_5__[/* environment */ "a"].jwtSecret,
                signOptions: {
                    expiresIn: Object(_srts_pw_server_common_types__WEBPACK_IMPORTED_MODULE_4__[/* convertDaysToSeconds */ "d"])(7)
                }
            }),
            _srts_pw_server_user__WEBPACK_IMPORTED_MODULE_6__[/* ServerUserModule */ "a"]
        ],
        providers: [_stratergies_jwt_stratergy__WEBPACK_IMPORTED_MODULE_7__[/* JwtStrategy */ "a"]],
        exports: [
            _nestjs_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtModule"],
            _nestjs_passport__WEBPACK_IMPORTED_MODULE_3__["PassportModule"]
        ]
    })
], ServerAuthModule);



/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _jwt_stratergy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* unused harmony reexport * */



/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _srts_pw_server_core_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90);
/* harmony import */ var _srts_pw_server_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91);
/* harmony import */ var _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _srts_pw_server_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);
/* harmony import */ var _srts_pw_server_core_mailer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var _srts_pw_server_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39);












let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _srts_pw_server_core_graphql__WEBPACK_IMPORTED_MODULE_4__[/* ServerCoreGraphqlModule */ "a"],
            _nestjs_typeorm__WEBPACK_IMPORTED_MODULE_2__["TypeOrmModule"].forRoot({
                type: 'mongodb',
                url: _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_6__[/* environment */ "a"].mongoUri,
                useUnifiedTopology: true,
                appname: 'srtspw',
                logging: 'all',
                synchronize: true,
                /*
                  Fix for "NoEntityMetadata Found"
                  link: https://github.com/nrwl/nx/issues/1393#issuecomment-526135967
                */
                entities: Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["getMetadataArgsStorage"])().tables.map((table) => table.target)
            }),
            _srts_pw_server_core_mailer__WEBPACK_IMPORTED_MODULE_8__[/* ServerCoreMailerModule */ "a"],
            _srts_pw_server_auth__WEBPACK_IMPORTED_MODULE_9__[/* ServerAuthModule */ "a"],
            _srts_pw_server_urls__WEBPACK_IMPORTED_MODULE_5__[/* ServerUrlsModule */ "a"],
            _srts_pw_server_user__WEBPACK_IMPORTED_MODULE_7__[/* ServerUserModule */ "a"]
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_10__[/* AppController */ "a"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_11__[/* AppService */ "a"]]
    })
], AppModule);



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_server_core_graphql_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_server_core_graphql_module__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("metascraper");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("metascraper-image");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("metascraper-description");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("metascraper-title");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
var _a;



let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Object)
], AppController.prototype, "getData", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__[/* AppService */ "a"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__[/* AppService */ "a"]) === "function" ? _a : Object])
], AppController);



/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(101);


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89);






function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_5__[/* AppModule */ "a"]);
        app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3__());
        app.useGlobalPipes(new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["ValidationPipe"]());
        app.enableCors({
            origin: [
                'http://localhost:4200',
                'https://srts.pw',
                'https://admin.srts.pw'
            ],
            credentials: true
        });
        const logger = new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"]('Bootstrap');
        yield app.listen(_srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].port, () => {
            logger.log(`Server running on http://localhost:${_srts_pw_server_environments__WEBPACK_IMPORTED_MODULE_4__[/* environment */ "a"].port}`);
        });
    });
}
bootstrap();


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map