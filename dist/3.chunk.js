webpackJsonp([3],{

/***/ "../../../../../src/app/home/people/people-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__people_component__ = __webpack_require__("../../../../../src/app/home/people/people.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__people_component__["a" /* PeopleComponent */]
    }
];
var PeopleRoutingModule = (function () {
    function PeopleRoutingModule() {
    }
    return PeopleRoutingModule;
}());
PeopleRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], PeopleRoutingModule);

//# sourceMappingURL=people-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"people-page\">\n    <app-iheader></app-iheader>\n    <section class=\"main\">\n        <div class=\"card\">\n            <div class=\"colorBlock\"></div>\n            <div class=\"ProfileHeader-wrapper\">\n                <div class=\"ProfileHeader-main\">\n                    <div class=\"ProfileHeader-avatar\">\n                        <img class=\"Avatar\" width=\"160\" height=\"160\" [src]=\"user.userimg\" />\n                    </div>\n                    <div class=\"ProfileHeader-content\">\n                        <h3>{{user.nickname}}</h3>\n                        <h3><svg width=\"14\" height=\"16\" viewBox=\"0 0 14 14\" class=\"Icon Icon--male\" aria-hidden=\"true\" style=\"height: 16px; width: 14px;\"><title></title><g><path d=\"M3.025 10.64c-1.367-1.366-1.367-3.582 0-4.95 1.367-1.366 3.583-1.366 4.95 0 1.367 1.368 1.367 3.584 0 4.95-1.367 1.368-3.583 1.368-4.95 0zm10.122-9.368c-.002-.414-.34-.75-.753-.753L8.322 0c-.413-.002-.746.33-.744.744.002.413.338.75.75.752l2.128.313c-.95.953-1.832 1.828-1.832 1.828-2.14-1.482-5.104-1.27-7.013.64-2.147 2.147-2.147 5.63 0 7.777 2.15 2.148 5.63 2.148 7.78 0 1.908-1.91 2.12-4.873.636-7.016l1.842-1.82.303 2.116c.003.414.34.75.753.753.413.002.746-.332.744-.745l-.52-4.073z\" fill-rule=\"evenodd\"></path></g></svg></h3>\n                        <div class=\"basic\">\n                            <p>关注的人：0</p>\n                            <p>关注的问题：0</p>\n                            <p>粉丝：0</p>\n                        </div>\n                        <div class=\"ButtonGroup\">\n                            <div class=\"buttons\">\n                                <svg viewBox=\"0 0 12 12\" class=\"Icon FollowButton-icon Icon--plus\" width=\"12\" height=\"16\" aria-hidden=\"true\" style=\"height: 16px; width: 12px;\"><title></title><g><path d=\"M6.994 4.994s-.008-3.593 0-4C6.97-.33 4.97-.33 4.996.994c-.025 1.275 0 4 0 4H1C-.334 5-.334 7 1 7c1.332 0 3.996-.006 3.996-.006v4c0 1.346 2.004 1.346 1.998 0-.006-1.347 0-4 0-4S9.658 7 10.997 7c1.338 0 1.338-2-.007-2.006H6.994z\"></path></g></svg>                                关注他\n                            </div>\n                            <div class=\"buttons chat\">\n                                <svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\" class=\"Icon Button-icon Icon--comments\" width=\"15\" height=\"16\" aria-hidden=\"true\" style=\"height: 16px; width: 15px;\"><title></title><g><g>     <path d=\"M9 0C3.394 0 0 4.13 0 8c0 1.654.522 3.763 2.014 5.566.314.292.518.82.454 1.17-.165 1.488-.842 1.905-.842 1.905-.328.332.105.67.588.582 1.112-.2 2.07-.58 3.526-1.122.4-.202.464-.147.78-.078C11.524 17.764 18 14 18 8c0-3.665-3.43-8-9-8z\"></path>     <path d=\"M19.14 9.628c.758.988.86 2.01.86 3.15 0 1.195-.62 3.11-1.368 3.938-.21.23-.354.467-.308.722.12 1.073.614 1.5.614 1.5.237.24-.188.563-.537.5-.802-.145-1.494-.42-2.545-.81-.29-.146-.336-.106-.563-.057-2.043.712-4.398.476-6.083-.926 5.964-.524 8.726-3.03 9.93-8.016z\"></path>   </g></g></svg>                                私信他\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n\n    </section>\n    <section class=\"main\">\n        <div class=\"Profile-content-left\">\n            <router-outlet></router-outlet>\n        </div>\n        <div class=\"Profile-content-right\">\n            <h3>「吃乎下载」</h3>\n            <img src=\"assets/img/download.png\" alt=\"\">\n            <span class=\"copy\">©2017吃乎</span>\n            <span class=\"copy\"><svg t=\"1501226796898\" class=\"icon\" style=\"\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2359\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"20\" height=\"20\"><defs><style type=\"text/css\"></style></defs><path d=\"M530.01791-7.557299C672.947218-4.362634 790.76646 44.643525 885.072968 139.46118 979.315583 234.342728 1028.002276 354.462128 1031.133048 496.752503 1029.599609 610.546467 996.566773 708.558787 933.759661 795.453672 870.888656 882.412451 789.233021 940.874819 687.13153 977.230106 674.544551 978.827438 665.088342 977.230106 660.424132 972.502002 655.696028 966.176565 652.565256 959.851129 652.565256 953.525692L654.098695 814.429982C654.098695 790.725568 650.967924 771.749259 643.109048 755.967614 636.847505 740.122076 628.988629 729.068536 619.532421 721.20966 677.675322 718.014995 729.55668 699.038685 776.646041 664.280731 822.201963 631.056216 847.375922 566.268412 850.506694 471.450757 850.506694 444.551679 845.77859 419.249933 836.322382 397.142851 826.930067 374.971877 814.343087 354.462128 798.625336 337.083151 801.820001 330.757715 806.484211 314.97607 808.081544 291.207763 811.212315 267.503349 806.484211 237.473499 793.897232 202.715545 793.897232 201.118213 782.907584 201.118213 760.92829 204.248984 738.948995 207.443649 704.382721 224.822626 655.696028 254.852476 614.86821 243.798936 573.976499 237.473499 530.01791 237.473499 486.059321 237.473499 445.16761 243.798936 404.339793 254.852476 357.186538 223.225294 321.086825 207.443649 299.10753 204.248984 277.064343 201.118213 266.074695 201.118213 266.074695 202.715545 253.551609 237.473499 248.823505 267.503349 251.954276 291.207763 255.085048 314.97607 258.21582 330.757715 261.410484 337.083151 245.692733 354.462128 231.508421 373.438438 223.649545 397.142851 214.25723 419.249933 209.529126 444.551679 209.529126 472.984196 212.659898 567.865744 236.236525 631.056216 281.792447 665.878064 327.348368 700.636018 379.229726 719.612327 437.308734 722.743099 429.449859 729.068536 423.188316 736.991305 418.460211 748.044845 412.198668 759.098386 409.067897 773.346591 405.937125 789.128236 388.622041 798.648337 366.642747 801.779109 336.804576 800.24567 306.966406 798.648337 281.792447 781.26936 259.813152 746.447513 248.823505 729.068536 237.833857 716.417663 223.649545 708.558787 209.529126 700.636018 197.00604 695.907914 181.288289 694.310581 168.701309 692.713249 160.842433 694.310581 157.711662 700.636018 154.58089 705.364122 160.842433 713.286891 176.560184 724.340431 192.277936 735.393972 204.801022 746.447513 212.659898 759.098386 220.518774 771.749259 226.84421 785.997464 233.105753 798.648337 240.964629 819.158086 258.21582 836.600956 286.520551 850.785269 313.227949 865.033474 352.522328 866.630807 402.74246 857.110705L404.339793 950.39492C404.339793 958.317689 401.209021 964.643126 396.480917 969.37123 391.752813 975.696667 382.360498 977.230106 369.773518 974.099334 267.672028 939.34138 185.952499 877.684347 123.145387 792.322901 60.274382 706.961454 28.902772 607.351802 27.30544 495.155171 30.436212 351.267463 79.122905 232.745395 173.429413 137.927741 267.672028 43.046193 387.024709-5.959967 528.420578-9.090738L530.01791-7.557299Z\" p-id=\"2360\"></path></svg><a href=\"https://github.com/chihu2\" target=\"_blank\">https://github.com/chihu2</a></span>\n        </div>\n    </section>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/people/people.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".people-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #f7fafc; }\n  .people-page .main {\n    width: 1000px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0 16px;\n    margin: 10px auto; }\n    .people-page .main .card {\n      width: 100%;\n      overflow: hidden;\n      position: relative;\n      height: 297px;\n      background: #fff;\n      border: 1px solid #e7eaf1;\n      border-radius: 2px;\n      box-shadow: 0 1px 3px rgba(0, 37, 55, 0.05);\n      box-sizing: border-box; }\n      .people-page .main .card .colorBlock {\n        width: 100%;\n        height: 132px;\n        background: #96a1a9; }\n      .people-page .main .card .ProfileHeader-wrapper {\n        width: 100%;\n        position: relative;\n        background: #fff;\n        box-sizing: border-box; }\n        .people-page .main .card .ProfileHeader-wrapper .ProfileHeader-main {\n          position: relative;\n          margin: 0 20px 24px; }\n          .people-page .main .card .ProfileHeader-wrapper .ProfileHeader-main .ProfileHeader-avatar {\n            border: 5px solid #fff;\n            border-radius: 8px;\n            position: absolute;\n            top: -50px;\n            left: 0;\n            box-sizing: border-box;\n            overflow: hidden; }\n          .people-page .main .card .ProfileHeader-wrapper .ProfileHeader-main .ProfileHeader-content {\n            margin-left: 200px;\n            color: #9fadc7;\n            position: relative; }\n            .people-page .main .card .ProfileHeader-wrapper .ProfileHeader-main .ProfileHeader-content .ButtonGroup {\n              position: absolute;\n              bottom: 10px;\n              right: 0; }\n              .people-page .main .card .ProfileHeader-wrapper .ProfileHeader-main .ProfileHeader-content .ButtonGroup .buttons {\n                background: #0F88E6;\n                color: #fff;\n                display: inline-block;\n                padding: 0 16px;\n                font-size: 14px;\n                line-height: 32px;\n                text-align: center;\n                border-radius: 3px;\n                cursor: pointer; }\n                .people-page .main .card .ProfileHeader-wrapper .ProfileHeader-main .ProfileHeader-content .ButtonGroup .buttons svg {\n                  vertical-align: text-bottom;\n                  fill: #fff; }\n              .people-page .main .card .ProfileHeader-wrapper .ProfileHeader-main .ProfileHeader-content .ButtonGroup .chat {\n                margin-left: 15px;\n                background: none;\n                color: #8590a6;\n                border: 1px solid #ccd8e1;\n                box-sizing: border-box; }\n                .people-page .main .card .ProfileHeader-wrapper .ProfileHeader-main .ProfileHeader-content .ButtonGroup .chat svg {\n                  fill: #8590a6; }\n            .people-page .main .card .ProfileHeader-wrapper .ProfileHeader-main .ProfileHeader-content svg {\n              fill: #9fadc7; }\n            .people-page .main .card .ProfileHeader-wrapper .ProfileHeader-main .ProfileHeader-content .basic {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              display: -webkit-flex; }\n              .people-page .main .card .ProfileHeader-wrapper .ProfileHeader-main .ProfileHeader-content .basic p {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                margin-right: 32px;\n                font-size: 15px; }\n  .people-page .Profile-content-left {\n    width: 694px;\n    display: block;\n    height: 400px;\n    background: #fff;\n    border: 1px solid #e7eaf1;\n    border-radius: 2px;\n    box-shadow: 0 1px 3px rgba(0, 37, 55, 0.05);\n    box-sizing: border-box; }\n  .people-page .Profile-content-right {\n    width: 296px;\n    display: block;\n    background: #fff;\n    border: 1px solid #e7eaf1;\n    border-radius: 2px;\n    box-shadow: 0 1px 3px rgba(0, 37, 55, 0.05);\n    box-sizing: border-box;\n    margin-left: 10px;\n    text-align: center;\n    height: 300px;\n    color: #ababab; }\n    .people-page .Profile-content-right img {\n      display: block;\n      width: 50%;\n      margin: 0 auto; }\n    .people-page .Profile-content-right .copy {\n      font-size: 14px;\n      display: block;\n      width: 100%;\n      padding-top: 6px;\n      color: #ababab;\n      text-align: center; }\n      .people-page .Profile-content-right .copy a {\n        color: #ababab; }\n      .people-page .Profile-content-right .copy svg {\n        width: 14px;\n        height: 14px;\n        fill: #ababab;\n        margin-right: 10px;\n        vertical-align: text-bottom; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleComponent = (function () {
    function PeopleComponent(userService) {
        this.userService = userService;
        this.user = {};
        this.user = this.userService._user;
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-people',
        template: __webpack_require__("../../../../../src/app/home/people/people.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/people/people.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */]) === "function" && _a || Object])
], PeopleComponent);

var _a;
//# sourceMappingURL=people.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/people/people.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__people_component__ = __webpack_require__("../../../../../src/app/home/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__people_routing_module__ = __webpack_require__("../../../../../src/app/home/people/people-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_iheader_iheader_module__ = __webpack_require__("../../../../../src/app/components/home/iheader/iheader.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleModule", function() { return PeopleModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PeopleModule = (function () {
    function PeopleModule() {
    }
    return PeopleModule;
}());
PeopleModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__people_routing_module__["a" /* PeopleRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_home_iheader_iheader_module__["a" /* IheaderModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__people_component__["a" /* PeopleComponent */]]
    })
], PeopleModule);

//# sourceMappingURL=people.module.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map