(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Common.ts":
/*!***************************!*\
  !*** ./src/app/Common.ts ***!
  \***************************/
/*! exports provided: Common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Common", function() { return Common; });
/* harmony import */ var _Farmer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Farmer */ "./src/app/Farmer.ts");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Video */ "./src/app/Video.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Common = /** @class */ (function () {
    function Common() {
        this.indianRivers = [
            'Ganga',
            'Chambal',
            'Betwa',
            'Yamuna',
            'Gomti',
            'Ghaghr',
            'Son',
            'Gandak',
            'Kosi',
            'Brahmaputra'
        ];
        this.farmers = [
            new _Farmer__WEBPACK_IMPORTED_MODULE_0__["Farmer"]({
                id: 0,
                name: 'Henry Ford',
                videos: [
                    new _Video__WEBPACK_IMPORTED_MODULE_1__["Video"]({
                        url: 'bMHSFt1BhLc',
                        title: 'Farmer Boy Rose to the Power by Rose Wilder Land',
                        cat: 'Audiobook'
                    })
                ]
            }),
            new _Farmer__WEBPACK_IMPORTED_MODULE_0__["Farmer"]({
                id: 1,
                name: 'Nammalvar G',
                videos: [
                    new _Video__WEBPACK_IMPORTED_MODULE_1__["Video"]({
                        url: 'TvLQuSRKvbs',
                        title: 'How to create Natural Fertilizer',
                        cat: 'Video'
                    })
                ]
            }),
            new _Farmer__WEBPACK_IMPORTED_MODULE_0__["Farmer"]({ id: 1,
                name: 'Subhas Palekar',
                videos: [
                    new _Video__WEBPACK_IMPORTED_MODULE_1__["Video"]({
                        url: 'ZihEgF-sBvI',
                        title: 'Zero Budget Natural Farming',
                        cat: 'Video'
                    })
                ]
            }),
            new _Farmer__WEBPACK_IMPORTED_MODULE_0__["Farmer"]({
                id: 2,
                name: 'Eliot Coleman',
                videos: [
                    new _Video__WEBPACK_IMPORTED_MODULE_1__["Video"]({
                        url: '2E1p_gjEDM8',
                        title: 'Nothing is Impossible Keynote Speech Utah Farm Conference 2018',
                        cat: 'Speech'
                    }),
                    new _Video__WEBPACK_IMPORTED_MODULE_1__["Video"]({
                        url: 'ovR-OZlul3w',
                        title: 'Tomato Tips & How to build a greenhouse',
                        cat: 'Greenhouse'
                    }),
                    new _Video__WEBPACK_IMPORTED_MODULE_1__["Video"]({
                        url: 'mSNu1OBKqh0',
                        title: 'How To Make Compost and Add Organic Amendments',
                        cat: 'Compost'
                    }),
                    new _Video__WEBPACK_IMPORTED_MODULE_1__["Video"]({
                        url: 'MACjIdB80Qc',
                        title: 'Winter Harvest',
                        cat: 'Winter Farming'
                    })
                ]
            })
        ];
        this.nutTrees = ['Almond', 'Cashew', 'Chestnut', 'Hazel', 'Macadamia', 'Pecan', 'Hicory', 'Pecan', 'Pine', 'Pistachio', 'Walnut'];
        // tslint:disable-next-line:max-line-length
        this.countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua & Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central Arfrican Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauro', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre & Miquelon', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'St Kitts & Nevis', 'St Lucia', 'St Vincent', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor LEste', 'Togo', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];
    }
    Common = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], Common);
    return Common;
}());



/***/ }),

/***/ "./src/app/Farmer.ts":
/*!***************************!*\
  !*** ./src/app/Farmer.ts ***!
  \***************************/
/*! exports provided: Farmer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Farmer", function() { return Farmer; });
var Farmer = /** @class */ (function () {
    function Farmer(_a) {
        var id = _a.id, name = _a.name, videos = _a.videos;
        this.id = id;
        this.name = name;
        this.videos = videos;
    }
    return Farmer;
}());



/***/ }),

/***/ "./src/app/Video.ts":
/*!**************************!*\
  !*** ./src/app/Video.ts ***!
  \**************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
var Video = /** @class */ (function () {
    function Video(_a) {
        var url = _a.url, title = _a.title, cat = _a.cat;
        this.url = url;
        this.title = title;
        this.cat = cat;
    }
    return Video;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n    font-size: 30px;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-topnav></app-topnav>\n<split direction='horizontal'>\n  <split-area size='20'>\n    <app-menu></app-menu>\n\n  </split-area>\n  <split-area size='80' style='padding-left:10px;'>\n    \n    <app-farmers></app-farmers>\n  </split-area>\n</split>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: SafePipe, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'App About Farmers';
        this.ngVersion = '7.x';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _farmers_farmers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./farmers/farmers.component */ "./src/app/farmers/farmers.component.ts");
/* harmony import */ var _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topnav/topnav.component */ "./src/app/topnav/topnav.component.ts");
/* harmony import */ var angular_split_ng6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-split-ng6 */ "./node_modules/angular-split-ng6/esm5/angular-split-ng6.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _filter_name_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter-name.pipe */ "./src/app/filter-name.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // reqd for ngModel
 // reqd for iframe safe pipe






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _farmers_farmers_component__WEBPACK_IMPORTED_MODULE_5__["FarmersComponent"],
                _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_6__["TopnavComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_3__["SafePipe"],
                _filter_name_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterNamePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_split_ng6__WEBPACK_IMPORTED_MODULE_7__["AngularSplitModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/farmers/farmers.component.css":
/*!***********************************************!*\
  !*** ./src/app/farmers/farmers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1lcnMvZmFybWVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/farmers/farmers.component.html":
/*!************************************************!*\
  !*** ./src/app/farmers/farmers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id='Great Farmers'>Great Farmers</h2>\n<ul class='list-group'>\n  <li class='list-group-item' *ngFor=\"let farmer of farmers\">\n    <h3>{{ farmer.name}}</h3>\n    <ul class='list-group'>\n      <li class='list-group-item' *ngFor=\"let video of farmer.videos\">\n        <h4>{{ video.title }}</h4>\n        <iframe height=\"400\" width=\"800\" allowfullscreen [src]=\"youtubeUrl + video.url | safe\">\n        </iframe>\n      </li>\n    </ul>\n</ul>\n\n<hr style='padding:30px;' />\n\n<h3 id='Indian Rivers'>Indian Rivers</h3>\n<div  style=\"width:200px;\">\n<input list=\"rivers\" name=\"river\" class='form-control'>\n<datalist id=\"rivers\" class='form-control'>\n  <option *ngFor=\"let river of indianRivers\" value=\"{{river}}\">\n</datalist>\n</div>\n<hr style='padding:30px;' />\n\n<h3 id='Countries'>Countries</h3>\n\n<div  style=\"width:200px;\">\n  <input [(ngModel)]=\"selCountry\" placeholder=\"Country\" class='form-control'>\n  <select id=\"countries\" class='form-control'>\n    <option *ngFor=\"let country of countries | filterName:selCountry \" value=\"{{country}}\">{{country}}</option>\n  </select>\n</div>\n\n<hr style='padding:30px;' />\n\n<h3 id='Nut Trees'>Nut Trees</h3>\n\n<div  style=\"width:200px;\">\n  <input [(ngModel)]=\"selNutTree\" placeholder=\"Nut Tree\" class='form-control'>\n  <ul id=\"nutTrees\" class='list-group'>\n    <li class='list-group-item' *ngFor=\"let nutTree of nutTrees | filterName:selNutTree\">{{ nutTree }}</li>\n  </ul>\n</div>\n\n<hr style='padding:30px;' />\n\n\n\n"

/***/ }),

/***/ "./src/app/farmers/farmers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/farmers/farmers.component.ts ***!
  \**********************************************/
/*! exports provided: FarmersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmersComponent", function() { return FarmersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common */ "./src/app/Common.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FarmersComponent = /** @class */ (function () {
    // injecting Common...
    function FarmersComponent(common) {
        this.youtubeUrl = 'https://www.youtube.com/embed/';
        this.farmers = common.farmers;
        this.indianRivers = common.indianRivers;
        this.countries = common.countries;
        this.selCountry = 'United States of America';
        this.selNutTree = 'Almond';
        this.nutTrees = common.nutTrees;
    }
    FarmersComponent.prototype.ngOnInit = function () {
    };
    FarmersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-farmers',
            template: __webpack_require__(/*! ./farmers.component.html */ "./src/app/farmers/farmers.component.html"),
            styles: [__webpack_require__(/*! ./farmers.component.css */ "./src/app/farmers/farmers.component.css")]
        }),
        __metadata("design:paramtypes", [_Common__WEBPACK_IMPORTED_MODULE_1__["Common"]])
    ], FarmersComponent);
    return FarmersComponent;
}());



/***/ }),

/***/ "./src/app/filter-name.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/filter-name.pipe.ts ***!
  \*************************************/
/*! exports provided: FilterNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterNamePipe", function() { return FilterNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterNamePipe = /** @class */ (function () {
    function FilterNamePipe() {
    }
    FilterNamePipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        // given item contains filter?
        return items.filter(function (item) { return item.toUpperCase().indexOf(filter.toUpperCase()) !== -1; });
    };
    FilterNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterName',
            pure: false
        })
    ], FilterNamePipe);
    return FilterNamePipe;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    .menu-button {\n      width: 100%;\n      opacity: .7;\n      margin-bottom: 10px;\n      text-align: left;\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IklBQUk7TUFDRSxZQUFZO01BQ1osWUFBWTtNQUNaLG9CQUFvQjtNQUNwQixpQkFBaUI7S0FDbEIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAubWVudS1idXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvcGFjaXR5OiAuNztcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class='btn btn-primary menu-button' data-toggle=\"collapse\" href=\"#chapter1\" role=\"button\" aria-expanded=\"false\"\n  aria-controls=\"chapter-1\"> Farmers, Rivers and Countries </a>\n<ul class=\"list-group collapse\" id='chapter1'>\n  <li class=\"list-group-item\" *ngFor=\"let topic of topics\">\n    <a href='#{{topic}}'>{{topic}}</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.topics = [
            'Great Farmers',
            'Indian Rivers',
            'Countries',
            'Nut Trees'
        ];
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/topnav/topnav.component.css":
/*!*********************************************!*\
  !*** ./src/app/topnav/topnav.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcG5hdi90b3BuYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/topnav/topnav.component.html":
/*!**********************************************!*\
  !*** ./src/app/topnav/topnav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" role=\"navigation\" style=\"margin-bottom:2px;\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{ title }}</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"javascript:void(0)\">Home</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav\">\n        <li ><a href=\"{{ mainUrl }}\">Main</a></li>\n      </ul>\n\n    </div>\n    <!-- /.navbar-collapse -->\n  </nav>"

/***/ }),

/***/ "./src/app/topnav/topnav.component.ts":
/*!********************************************!*\
  !*** ./src/app/topnav/topnav.component.ts ***!
  \********************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopnavComponent = /** @class */ (function () {
    function TopnavComponent() {
        this.title = 'Farmers.yeah!';
        this.mainUrl = '../index.html';
    }
    TopnavComponent.prototype.ngOnInit = function () {
    };
    TopnavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topnav',
            template: __webpack_require__(/*! ./topnav.component.html */ "./src/app/topnav/topnav.component.html"),
            styles: [__webpack_require__(/*! ./topnav.component.css */ "./src/app/topnav/topnav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopnavComponent);
    return TopnavComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mchinnappan/angular-dev/app001/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map