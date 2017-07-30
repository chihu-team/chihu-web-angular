webpackJsonp([7],{

/***/ "../../../../../src/app/home/login/signup/signup-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_component__ = __webpack_require__("../../../../../src/app/home/login/signup/signup.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__signup_component__["a" /* SignupComponent */]
    }
];
var SignupRoutingModule = (function () {
    function SignupRoutingModule() {
    }
    return SignupRoutingModule;
}());
SignupRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], SignupRoutingModule);

//# sourceMappingURL=signup-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/login/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"group-inputs\">\n\n    <div class=\"input-wrapper\">\n        <input type=\"text\" [(ngModel)]=\"name\" placeholder=\"账号\">\n    </div>\n    <div class=\"input-wrapper\">\n        <input type=\"text\" [(ngModel)]=\"nickname\" placeholder=\"昵称\">\n    </div>\n    <div class=\"input-wrapper\">\n        <input type=\"password\" [(ngModel)]=\"pass\" placeholder=\"密码\">\n    </div>\n\n</div>\n\n<div class=\"btm\" (click)=\"regist();\">\n    注册吃乎\n</div>\n\n<p class=\"agreement-tip\">点击「注册」按钮，即代表你同意<a>《吃乎协议》</a></p>"

/***/ }),

/***/ "../../../../../src/app/home/login/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".group-inputs {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 18px;\n  overflow: hidden; }\n  .group-inputs .input-wrapper {\n    width: 100%;\n    border-bottom: 1px solid #eee; }\n    .group-inputs .input-wrapper input {\n      display: block;\n      width: calc(100% - 1.6rem);\n      border: none;\n      box-shadow: none;\n      border-radius: 0;\n      padding: 1rem 0.8rem;\n      background: #fff;\n      line-height: 19px;\n      color: #555;\n      outline: none; }\n    .group-inputs .input-wrapper input:focus {\n      outline: none; }\n\n.btm {\n  width: 100%;\n  height: 41px;\n  background: #0f88eb;\n  line-height: 41px;\n  color: #fff;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer; }\n\n.agreement-tip {\n  font-size: 13px;\n  color: #999;\n  margin-top: 21px;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/login/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(http, router) {
        this.http = http;
        this.router = router;
        this.name = '';
        this.nickname = '';
        this.pass = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.regist = function () {
        var _this = this;
        if (this.name.length < 1 || this.pass.length < 1 || this.nickname.length < 1) {
            alert("兄弟，你在搞笑吗？认真填...");
            return true;
        }
        var url = "http://www.devonhello.com/chihu2/register";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(url, "name=" + this.name + "&pass=" + this.pass + "&nickname=" + this.nickname, {
            headers: headers
        })
            .subscribe(function (res) {
            //console.log(res.json()[0]['_id']);
            try {
                if (res.json()[0]['_id']) {
                    localStorage.user = JSON.stringify(res.json()[0]);
                    _this.router.navigate(['index']);
                }
            }
            catch (error) {
                alert("注册失败，账号可能已存在");
            }
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/home/login/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/login/signup/signup.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/login/signup/signup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_component__ = __webpack_require__("../../../../../src/app/home/login/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_routing_module__ = __webpack_require__("../../../../../src/app/home/login/signup/signup-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignupModule = (function () {
    function SignupModule() {
    }
    return SignupModule;
}());
SignupModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__signup_routing_module__["a" /* SignupRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__signup_component__["a" /* SignupComponent */]]
    })
], SignupModule);

//# sourceMappingURL=signup.module.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map