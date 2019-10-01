(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/estoque/estoque.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estoque/estoque.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"grey\" >\n  <div style=\"margin-left: 15%; block-size: 50px\">\n      <button mat-menu-item [matMenuTriggerFor]=\"menuRef\" >\n          Categorias\n      </button>\n      <mat-menu #menuRef=\"matMenu\">\n          <button mat-menu-item (click)=\"trocaCategoria('Tudo')\"  >\n              Tudo\n          </button>\n          <button mat-menu-item (click)=\"trocaCategoria('Celular')\"  >\n              Celular\n          </button>\n          <button mat-menu-item (click)=\"trocaCategoria('Eletrodoméstico')\">\n              Eletrodoméstico\n          </button>\n          <button mat-menu-item (click)=\"trocaCategoria('Tv')\">\n              Tv\n          </button>\n          <button mat-menu-item (click)=\"trocaCategoria('Videogame')\">\n              Videogame\n          </button>\n\n      </mat-menu>\n  </div>\n  <div style=\"block-size: 50px; margin-left: 660px\">\n  <button mat-menu-item data-target=\"#myModal\" data-toggle=\"modal\" (click)=\"blankItem()\" >\n      Adicionar Item\n  </button>\n  </div>\n  <img src=\"{{user.photoUrl}}\" alt=\"\" style=\"height: 30px; border-radius: 15px; margin-left: 40px\" (click)=\"signOut()\">\n  <div style=\"block-size: 50px; margin-left: 5px\">\n\n      <button mat-menu-item (click)=\"signOut()\" >\n          Sair\n      </button>\n      </div>\n  <!-- Modal -->\n  <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog col-sm-8\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\" >\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Inserindo Item</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n        </div>\n\n        <div class=\"modal-body\" style=\"padding-block: 20px\">\n          <form>\n            <input style=\"margin-block: 5px\" id=\"nomeItem\" name=\"nomeItem\" [(ngModel)]=\"itemAtual.nomeItem\"  type=\"text\" placeholder=\"Nome\"><br/>\n            <select id=\"categoriaItem\" name=\"categoria\" style=\"width: 256px\">\n                <option value=\"Celular\">Celular</option>\n                <option value=\"Eletrodoméstico\">Eletrodoméstico</option>\n                <option value=\"Tv\">Tv</option>\n                <option value=\"Videogame\">videogame</option>\n              </select><br/>\n      \n            <input style=\"margin-block: 5px\"name=\"valorItem\" [(ngModel)]=\"itemAtual.valorItem\" type=\"text\" placeholder=\"Preço\"><br/>\n            <input style=\"margin-block: 5px\"name=\"qntItem\" [(ngModel)]=\"itemAtual.qntItem\" type=\"text\" placeholder=\"Quantidade estoque\"><br/>\n            <input style=\"margin-block: 5px\"name=\"imagemItem\" [(ngModel)]=\"itemAtual.imagemItem\"  type=\"text\" placeholder=\"Link imagem\"><br/>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancelar</button>\n          <button type=\"button\" class=\"btn btn-success\" *ngIf=\"itemAtual.nomeItem !== '' && itemAtual.valorItem !== '' && itemAtual.qntItem !== '' && itemAtual.imagemItem !== ''\"  data-dismiss=\"modal\" (click)=\"addItem(itemAtual)\" >Inserir</button>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</mat-toolbar>\n\n\n<div class=\"row\">\n<h1> </h1>\n<h1> </h1>\n<h1> </h1>\n<div class=\"col-sm-2\"></div>\n\n<div class=\"col-sm-8\" >\n  <br/>\n  <h3>{{categoria}}</h3>\n\n  <div class=\"row\" *ngFor=\"let item of itensEstoque\" style=\"margin-block: 10px\" >\n\n      <div [ngStyle]=\"{'background-color':getColor(item.qntItem)}\" *ngIf=\"item.nomeCategoria === categoria || categoria === 'Tudo'\" id=\"itemView\" data-toggle=\"modal\" data-target=\"#itemModal\">\n\n        <div class=\"row\">\n          <img class=\"col-sm-3 imgDiv\"  src=\"{{item.imagemItem}}\" alt=\"{{item.nomeItem}}\"  (click)=\"setItemAtual(item)\" >\n          <div class=\"col-sm-5 infoItem\" >\n            <h4  (click)=\"setItemAtual(item)\" >{{item.nomeItem}}</h4><br/>\n            <div *ngIf=\"item.click\" style=\"padding: 10px\" >\n\n                <span>R$ {{item.valorItem}}</span><br/>\n                <span>Qnt. Itens:\n                  <input type=\"number\" [(ngModel)]=\"item.qntItem\">\n                  <button class=\"btn btn-primary\" (click)=\"sortEstoque()\">Atualizar Item</button>\n                </span><br/>\n\n                <button class=\"btn btn-danger\" data-target=\"#removerModal\" data-toggle=\"modal\">\n                  <span>Remover item</span>\n                </button><!-- Modal -->\n                <div id=\"removerModal\" class=\"modal fade\" role=\"dialog\">\n                  <div class=\"modal-dialog col-sm-8\">\n\n                    <!-- Modal content-->\n                    <div class=\"modal-content\" >\n                      <div class=\"modal-header\">\n                          <h4 class=\"modal-title\">Você realmente deseja remover este item?</h4>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n                      </div>\n\n                      <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Cancelar</button>\n                        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"removeItem(item)\" >Sim</button>\n                      </div>\n\n                    </div>\n\n                  </div>\n                </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n  </div>\n\n</div>\n<div class=\"col-sm-2\"></div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"imageonly\">\n<span>.</span>\n\n\n<div id=\"myDisplay\" >\n\n\n<!-- In the callback, you would hide the gSignInWrapper element on a\nsuccessful sign in -->\n  <div id=\"gSignInWrapper\" class=\"loginContainer\" >\n      <br/>\n      <h4 class=\"label row\" id=\"center\" style=\"margin-left: 45%\">Naja</h4>\n    <span class=\"label row\" id=\"center\">Sign in with:</span>\n    <br/>\n    <button (click)=\"signInWithGoogle()\" id=\"customBtn\" class=\"customGPlusSignIn row\">\n      <span class=\"buttonText\">Google</span>\n    </button>\n    <br/>\n    <br/>\n  <div *ngIf=\"loggedIn === true\">\n      <button class='bt' type='submit' (click)=\"entrar()\"  >Logar com: {{ user.email }}</button>\n  </div>\n\n  </div>\n\n\n\n</div>\n<br/><br/>\n<br/>\n<br/>\n.\n<h3>.</h3>\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _estoque_estoque_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estoque/estoque.component */ "./src/app/estoque/estoque.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");





const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'estoque/:id',
        component: _estoque_estoque_component__WEBPACK_IMPORTED_MODULE_1__["EstoqueComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'sistemaEstoque';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _estoque_estoque_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./estoque/estoque.component */ "./src/app/estoque/estoque.component.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");














let config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLoginProvider"]('187359045491-p7m77ne3kkdconf0ns9j7acp2oo3vqnn.apps.googleusercontent.com')
    }
]);
function provideConfig() {
    return config;
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _estoque_estoque_component__WEBPACK_IMPORTED_MODULE_10__["EstoqueComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["SocialLoginModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
        ],
        providers: [
            {
                provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"],
                useFactory: provideConfig
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/estoque/estoque.component.css":
/*!***********************************************!*\
  !*** ./src/app/estoque/estoque.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#itemView {\n   min-width: 100%;\n   background-color: rgba(236, 236, 236, 0.425);\n   border-radius: 10px;\n}\n\n.infoItem {\n  margin-left: auto;\n}\n\n.imgDiv{\n  margin-left: 20px;\n  max-height: 100px;\n}\n\n.row{\n  max-width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXN0b3F1ZS9lc3RvcXVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxlQUFlO0dBQ2YsNENBQTRDO0dBQzVDLG1CQUFtQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZXN0b3F1ZS9lc3RvcXVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaXRlbVZpZXcge1xuICAgbWluLXdpZHRoOiAxMDAlO1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDIzNiwgMjM2LCAwLjQyNSk7XG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW5mb0l0ZW0ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmltZ0RpdntcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xufVxuXG4ucm93e1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/estoque/estoque.component.ts":
/*!**********************************************!*\
  !*** ./src/app/estoque/estoque.component.ts ***!
  \**********************************************/
/*! exports provided: EstoqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstoqueComponent", function() { return EstoqueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");




let EstoqueComponent = class EstoqueComponent {
    constructor(authService, rota) {
        this.authService = authService;
        this.itemAtual = { nomeCategoria: '', nomeItem: '', valorItem: '',
            qntItem: 0, imagemItem: '', click: false };
        this.itensEstoque = [
            { nomeCategoria: 'Celular', nomeItem: 'primeiro', valorItem: '200', qntItem: 137, imagemItem: '', click: false },
            { nomeCategoria: 'Eletrodoméstico', nomeItem: 'segundo', valorItem: '34g34g', qntItem: 20, imagemItem: '', click: false },
            { nomeCategoria: 'Tv', nomeItem: 'r34r', valorItem: 'quarto', qntItem: 0, imagemItem: '', click: false },
            { nomeCategoria: 'Videogame', nomeItem: 'terceiro', valorItem: 'terceiro', qntItem: 5, imagemItem: '', click: false }
        ];
        this.router = rota;
        this.ngOnInit;
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
        });
    }
    ngOnInit() {
        this.categoria = 'Tudo';
        this.sortEstoque();
    }
    trocaCategoria(categoriaItem) {
        this.categoria = categoriaItem;
        console.log(this.categoria);
        for (let i = 0; i < this.itensEstoque.length; i++) {
            this.itensEstoque[i].click = false;
        }
    }
    addItem(item) {
        var categoriaSelecionada = document.getElementById("categoriaItem").value;
        this.itemAtual.nomeCategoria = categoriaSelecionada;
        console.log(item);
        this.itensEstoque.push(item);
        this.sortEstoque();
    }
    removeItem(item) {
        for (let i = 0; i < this.itensEstoque.length; i++) {
            if (item === this.itensEstoque[i]) {
                this.itensEstoque[i] = this.itensEstoque[this.itensEstoque.length - 1];
                break;
            }
        }
        this.itensEstoque.pop();
        this.sortEstoque();
    }
    sortEstoque() {
        this.itensEstoque.sort((a, b) => {
            if (a.qntItem > b.qntItem) {
                return -1;
            }
            if (a.qntItem < b.qntItem) {
                return 1;
            }
            return 0;
        });
    }
    setItemAtual(item) {
        this.itemAtual = item;
        if (this.itemAtual.click) {
            this.itemAtual.click = false;
        }
        else {
            this.itemAtual.click = true;
        }
        console.log(this.itemAtual);
    }
    blankItem() {
        this.itemAtual = {
            nomeCategoria: '',
            nomeItem: '',
            valorItem: '',
            qntItem: 0,
            imagemItem: '',
            click: false
        };
    }
    getColor(qntItem) {
        if (qntItem > 10) {
            return 'rgba(154, 255, 145, 0.350)';
            console.log(qntItem + " verde");
        }
        if (qntItem == 0) {
            return 'rgba(255, 145, 145, 0.350)';
            console.log(qntItem + " vermelho");
        }
        if (qntItem > 0 && qntItem <= 10) {
            return 'rgba(250, 235, 99, 0.350)';
            console.log(qntItem + " amarelo");
        }
    }
    signOut() {
        this.authService.signOut();
        this.router.navigate(['']);
    }
};
EstoqueComponent.ctorParameters = () => [
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
EstoqueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-estoque',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./estoque.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/estoque/estoque.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./estoque.component.css */ "./src/app/estoque/estoque.component.css")).default]
    })
], EstoqueComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n.imageonly {\n\n\n  background-image: url(http://blog.aartgraf.com.br/wp-content/uploads/2018/05/2222.jpg);\n}\n\n#myDisplay{\n  margin-top: 5%;\n  margin-left: 30%;\n  margin-right: 30%;\n  align-content: center;\n  background-color: rgba(248, 248, 248, 0.877);\n  border-radius: 10px;\n  box-shadow: 4px 4px rgba(0, 0, 0, 0.205);\n  height: 350px;\n}\n\n#center {\n  margin-top: 5%;\n  margin-left: 40%;\n  margin-right: 30%;\n}\n\n#customBtn {\n  display: inline-block;\n  background: rgb(226, 226, 226);\n  color: #444;\n  width: 190px;\n  border-radius: 5px;\n  border: thin solid #888;\n  box-shadow: 1px 1px 1px grey;\n  white-space: nowrap;\n  margin-left: 33%;\n\n}\n\n#customBtn:hover {\n  cursor: pointer;\n}\n\nspan.label {\n  font-family: serif;\n  font-weight: normal;\n}\n\nspan.icon {\n  background-image: url(https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwig0-H0j_LkAhX1CrkGHYBQAFsQjRx6BAgBEAQ&url=https%3A%2F%2Ficons8.com%2Ficons%2Fset%2Fgoogle&psig=AOvVaw0DWmzAW0pXitskgB9BDee7&ust=1569712202273438) transparent 5px 50% no-repeat;\n  display: inline-block;\n  vertical-align: middle;\n  width: 42px;\n  height: 42px;\n}\n\nspan.buttonText {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 42px;\n  padding-right: 42px;\n  font-size: 14px;\n  font-weight: bold;\n  /* Use the Roboto font that is loaded in the <head> */\n  font-family: 'Roboto', sans-serif;\n}\n\n.bt {\n  border: 0;\n  padding: 10px;\n  width: auto;\n  height: 50px;\n  display: inline-block;\n  margin-left:  30%;\n  margin-right: 30%;\n  cursor: pointer;\n  border-radius: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7RUFHRSxzRkFBc0Y7QUFDeEY7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsNENBQTRDO0VBQzVDLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsYUFBYTtBQUNmOztBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGdCQUFnQjs7QUFFbEI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGtSQUFrUjtFQUNsUixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxREFBcUQ7RUFDckQsaUNBQWlDO0FBQ25DOztBQUlBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5pbWFnZW9ubHkge1xuXG5cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly9ibG9nLmFhcnRncmFmLmNvbS5ici93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNS8yMjIyLmpwZyk7XG59XG5cbiNteURpc3BsYXl7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBtYXJnaW4tcmlnaHQ6IDMwJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OCwgMjQ4LCAyNDgsIDAuODc3KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjA1KTtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cbiNjZW50ZXIge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG59XG4jY3VzdG9tQnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjI2LCAyMjYsIDIyNik7XG4gIGNvbG9yOiAjNDQ0O1xuICB3aWR0aDogMTkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiB0aGluIHNvbGlkICM4ODg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IGdyZXk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1sZWZ0OiAzMyU7XG5cbn1cbiNjdXN0b21CdG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5zcGFuLmxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuc3Bhbi5pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vdXJsP3NhPWkmcmN0PWomcT0mZXNyYz1zJnNvdXJjZT1pbWFnZXMmY2Q9JnZlZD0yYWhVS0V3aWcwLUgwal9Ma0FoWDFDcmtHSFlCUUFGc1FqUng2QkFnQkVBUSZ1cmw9aHR0cHMlM0ElMkYlMkZpY29uczguY29tJTJGaWNvbnMlMkZzZXQlMkZnb29nbGUmcHNpZz1BT3ZWYXcwRFdtekFXMHBYaXRza2dCOUJEZWU3JnVzdD0xNTY5NzEyMjAyMjczNDM4KSB0cmFuc3BhcmVudCA1cHggNTAlIG5vLXJlcGVhdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xufVxuc3Bhbi5idXR0b25UZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDQycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC8qIFVzZSB0aGUgUm9ib3RvIGZvbnQgdGhhdCBpcyBsb2FkZWQgaW4gdGhlIDxoZWFkPiAqL1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cblxuXG4uYnQge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6ICAzMCU7XG4gIG1hcmdpbi1yaWdodDogMzAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");





let LoginComponent = class LoginComponent {
    constructor(authService, rota) {
        this.authService = authService;
        this.router = rota;
        this.loggedIn = false;
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID);
    }
    signOut() {
        this.authService.signOut();
    }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
        });
    }
    entrar() {
        if (this.loggedIn === true) {
            this.router.navigate(['/estoque', this.user.authToken]);
        }
        console.log(this.user);
    }
};
LoginComponent.ctorParameters = () => [
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/igordl/Área de Trabalho/sistemaweb/sistemaEstoque/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map