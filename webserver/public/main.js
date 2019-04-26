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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _genretrain_genretrain_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./genretrain/genretrain.component */ "./src/app/genretrain/genretrain.component.ts");
/* harmony import */ var _artisttrain_artisttrain_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artisttrain/artisttrain.component */ "./src/app/artisttrain/artisttrain.component.ts");
/* harmony import */ var _concert_concert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./concert/concert.component */ "./src/app/concert/concert.component.ts");
/* harmony import */ var _concertdetail_concertdetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./concertdetail/concertdetail.component */ "./src/app/concertdetail/concertdetail.component.ts");








var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'genretrain', component: _genretrain_genretrain_component__WEBPACK_IMPORTED_MODULE_4__["GenretrainComponent"] },
    { path: 'artisttrain', component: _artisttrain_artisttrain_component__WEBPACK_IMPORTED_MODULE_5__["ArtisttrainComponent"] },
    { path: 'recommendations', component: _concert_concert_component__WEBPACK_IMPORTED_MODULE_6__["ConcertComponent"] },
    { path: 'concertdetail/:concertId', component: _concertdetail_concertdetail_component__WEBPACK_IMPORTED_MODULE_7__["ConcertdetailComponent"] },
    { path: '**', redirectTo: '/login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n\nh1.example-app-name {\n  margin-left: 8px;\n}\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1;\n}\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto;\n}\n\n.main-content {\n  padding: 15px;\n  background-color: #102027;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEVBQThFO0VBQzlFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFOzBGQUN3RjtFQUN4RixPQUFPO0FBQ1Q7O0FBRUE7RUFDRTsrREFDNkQ7RUFDN0QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXG4gIHotaW5kZXg6IDI7XG59XG5cbmgxLmV4YW1wbGUtYXBwLW5hbWUge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcbiAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cbiAgZmxleDogMTtcbn1cblxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cbiAgZmxleDogMSAwIGF1dG87XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAyMDI3O1xuICBjb2xvcjogI0ZGRkZGRjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <h1 class=\"example-app-name\">F# Concert Finder</h1>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\"\n      fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a mat-list-item (click)=\"snav.close()\" routerLink=\"login\">Log in</a>\n        <a mat-list-item (click)=\"snav.close()\" routerLink=\"genretrain\">Genre Train</a>\n        <a mat-list-item (click)=\"snav.close()\" routerLink=\"artisttrain\">Artist Train</a>\n        <a mat-list-item (click)=\"snav.close()\" routerLink=\"recommendations\">Recommendations</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content class=\"main-content\">\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(changeDetectorRef, media) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _artisttrain_artisttrain_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./artisttrain/artisttrain.component */ "./src/app/artisttrain/artisttrain.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _genretrain_genretrain_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./genretrain/genretrain.component */ "./src/app/genretrain/genretrain.component.ts");
/* harmony import */ var _concert_concert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./concert/concert.component */ "./src/app/concert/concert.component.ts");
/* harmony import */ var _concertdetail_concertdetail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./concertdetail/concertdetail.component */ "./src/app/concertdetail/concertdetail.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _artisttrain_artisttrain_component__WEBPACK_IMPORTED_MODULE_6__["ArtisttrainComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _genretrain_genretrain_component__WEBPACK_IMPORTED_MODULE_10__["GenretrainComponent"],
                _concert_concert_component__WEBPACK_IMPORTED_MODULE_11__["ConcertComponent"],
                _concertdetail_concertdetail_component__WEBPACK_IMPORTED_MODULE_12__["ConcertdetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/artisttrain/artisttrain.component.css":
/*!*******************************************************!*\
  !*** ./src/app/artisttrain/artisttrain.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".artist-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-row-gap: 20px;\n  grid-column-gap: 20px;\n}\n\n#next {\n  position: fixed;\n  right: 30px;\n  bottom: 30px;\n}\n\n#back {\n  position: fixed;\n  left: 30px;\n  bottom: 30px;\n}\n\n.artist-card {\n  -webkit-filter: grayscale(80%);\n          filter: grayscale(80%);\n}\n\n.selected {\n  -webkit-filter: grayscale(0%) saturate(150%);\n          filter: grayscale(0%) saturate(150%);\n  border: 5px solid #FFC107;\n}\n\n@media screen and (min-width: 700px) {\n  .artist-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media screen and (min-width: 900px) {\n  .artist-grid {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aXN0dHJhaW4vYXJ0aXN0dHJhaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNENBQW9DO1VBQXBDLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FydGlzdHRyYWluL2FydGlzdHRyYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0aXN0LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xuICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XG59XG5cbiNuZXh0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMzBweDtcbiAgYm90dG9tOiAzMHB4O1xufVxuI2JhY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDMwcHg7XG4gIGJvdHRvbTogMzBweDtcbn1cblxuLmFydGlzdC1jYXJkIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoODAlKTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCUpIHNhdHVyYXRlKDE1MCUpO1xuICBib3JkZXI6IDVweCBzb2xpZCAjRkZDMTA3O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAuYXJ0aXN0LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAuYXJ0aXN0LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/artisttrain/artisttrain.component.html":
/*!********************************************************!*\
  !*** ./src/app/artisttrain/artisttrain.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Artists</h1>\n<ul class=\"artist-grid\">\n  <mat-card *ngFor=\"let artist of artists$ | async\" class=\"artist-card\" [class.selected]=\"artist?.selected==true\" (click)=\"toggleSelected(artist)\" color=\"accent\">\n    <img mat-card-image src=\"{{artist.photoURL}}\" alt=\"Photo of {{artist.name}}\">\n    <mat-card-content>\n      <p class=\"mat-h2\">{{artist.name}}</p>\n      <p class=\"mat-caption\">{{artist.genreName}}</p>\n    </mat-card-content>\n  </mat-card>\n</ul>\n\n<button mat-raised-button color=\"accent\" class=\"mdc-fab mdc-fab--extended\" id=\"back\" routerLink=\"/genretrain\">\n  <span class=\"material-icons mdc-fab__icon\">navigate_before</span>\n</button>\n\n<button mat-raised-button color=\"accent\" class=\"mdc-fab mdc-fab--extended\" id=\"next\" routerLink=\"/recommendations\">\n  <span class=\"material-icons mdc-fab__icon\">navigate_next</span>\n</button>"

/***/ }),

/***/ "./src/app/artisttrain/artisttrain.component.ts":
/*!******************************************************!*\
  !*** ./src/app/artisttrain/artisttrain.component.ts ***!
  \******************************************************/
/*! exports provided: ArtisttrainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtisttrainComponent", function() { return ArtisttrainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/music.service */ "./src/app/services/music.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var ArtisttrainComponent = /** @class */ (function () {
    function ArtisttrainComponent(musicService) {
        this.musicService = musicService;
        this.offlineTesting = false;
    }
    ArtisttrainComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].lsLoginKey));
        if (this.offlineTesting) {
            this.artists$ = this.sampleArtistsResponse();
            console.log(this.artists$);
        }
        else {
            this.musicService.artists(user.id).subscribe(function (response) {
                _this.artists$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(response);
                console.log(response);
            });
        }
    };
    ArtisttrainComponent.prototype.toggleSelected = function (artist) {
        artist["selected"] = !artist["selected"];
        console.log(artist);
    };
    ArtisttrainComponent.prototype.sampleArtistsResponse = function () {
        var response = "[\n    {\n        \"artistID\": 1861,\n        \"name\": \"Jawbox\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/1861-jawbox?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 20\n    },\n    {\n        \"artistID\": 4179,\n        \"name\": \"Fucked Up\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/82b/4133e40b-bf1c-434c-ab60-45b410a3582b_951331_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/4179-fucked-up?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 35\n    },\n    {\n        \"artistID\": 18157,\n        \"name\": \"Cosmonauts\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/b42/da5d20d1-92f8-4a72-bf3e-217ab4ecbb42_841541_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/18157-cosmonauts?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 15,\n        \"genreID2\": 15\n    },\n    {\n        \"artistID\": 19877,\n        \"name\": \"Pedro the Lion\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/f4b/27128bd3-8885-4c1e-aa53-d57b2e7a0f4b_939541_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/19877-pedro-the-lion?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 20\n    },\n    {\n        \"artistID\": 24336,\n        \"name\": \"Guster\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/8d8/186faab0-3a2b-4e3d-9e8f-3a795bffb8d8_867921_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/24336-guster?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 20\n    },\n    {\n        \"artistID\": 29647,\n        \"name\": \"Shooter Jennings\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/69d/a0803437-6c8b-4064-b9cf-cd10d742769d_276901_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/29647-shooter-jennings?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 4,\n        \"genreID2\": 4\n    },\n    {\n        \"artistID\": 29793,\n        \"name\": \"Snarky Puppy\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/e96/08a80a52-29da-4164-ba43-c3e3ba604e96_910921_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/29793-snarky-puppy?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 8,\n        \"genreID2\": 8\n    },\n    {\n        \"artistID\": 37055,\n        \"name\": \"Peter Hook\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/37055-peter-hook?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 20\n    },\n    {\n        \"artistID\": 41570,\n        \"name\": \"Xeno & Oaklander\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/41570-xeno-and-oaklander?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 20\n    },\n    {\n        \"artistID\": 42670,\n        \"name\": \"Tokyo Police Club\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/6c4/1a6b0f81-fa41-4993-b65d-add3c8d4d6c4_66621_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/42670-tokyo-police-club?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 20\n    },\n    {\n        \"artistID\": 44546,\n        \"name\": \"Royal Trux\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/593/139f22e9-2317-43b2-bf08-603e146b5593_1018021_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/44546-royal-trux?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 14\n    },\n    {\n        \"artistID\": 44666,\n        \"name\": \"IAMX\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/9ad/981ebcf2-3294-4bab-8f69-561faa94c9ad_975011_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/44666-iamx?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 5,\n        \"genreID2\": 5\n    },\n    {\n        \"artistID\": 46950,\n        \"name\": \"Rosabel\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/46950-rosabel?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 5,\n        \"genreID2\": 22\n    },\n    {\n        \"artistID\": 53745,\n        \"name\": \"The Soul Rebels\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/53745-soul-rebels?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 11\n    },\n    {\n        \"artistID\": 67100,\n        \"name\": \"Built to Spill\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/b07/db0d4ecd-5cc4-4d10-bf39-20ae8efddb07_848571_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/67100-built-to-spill?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 11\n    },\n    {\n        \"artistID\": 68637,\n        \"name\": \"Germ\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/c/80b/f3cd8d24-c3ae-4fa0-b4bc-1ba99f9b380b_106091_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/68637-germ?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 7,\n        \"genreID2\": 7\n    },\n    {\n        \"artistID\": 75681,\n        \"name\": \"God Is an Astronaut\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/975/161dcc7c-67f1-412f-9e57-a2837db90975_959891_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/75681-god-is-an-astronaut?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 11\n    },\n    {\n        \"artistID\": 77997,\n        \"name\": \"Neurosis\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/a7c/34c937e9-1a46-4043-a56e-a68231d27a7c_681901_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/77997-neurosis?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 20\n    },\n    {\n        \"artistID\": 82596,\n        \"name\": \"Intervals\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/4ce/bd333862-6b8f-452d-889e-0db0b5d594ce_582501_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/82596-intervals?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 9,\n        \"genreID2\": 32\n    },\n    {\n        \"artistID\": 85293,\n        \"name\": \"Xiu Xiu\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/14b/580a1357-6e3a-40df-90d3-9d636885c14b_266331_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/85293-xiu-xiu?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 20\n    },\n    {\n        \"artistID\": 96609,\n        \"name\": \"Eels\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/1fe/d65220e3-44e3-4cb9-88e3-d78b8d6cd1fe_1008841_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/96609-eels?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 20\n    },\n    {\n        \"artistID\": 97426,\n        \"name\": \"Electric Wizard\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/3fd/c32f6b64-d9c4-4093-912d-d2c4690e33fd_642691_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/97426-electric-wizard?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 9,\n        \"genreID2\": 32\n    },\n    {\n        \"artistID\": 105911,\n        \"name\": \"Movements\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/162/c3dbc88a-177d-4809-acb9-91159ee44162_1008851_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/105911-movements?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 14\n    },\n    {\n        \"artistID\": 110160,\n        \"name\": \"Tim Hecker\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/841/7d513fbe-db0f-41c3-8a8b-e5806426b841_291201_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/110160-tim-hecker?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 14,\n        \"genreID2\": 20\n    },\n    {\n        \"artistID\": 123676,\n        \"name\": \"Omni\",\n        \"photoURL\": \"https://s1.ticketm.net/dam/a/32f/413cd4d6-6e1f-4354-8dea-c6a8f4a6532f_421701_TABLET_LANDSCAPE_16_9.jpg\",\n        \"websiteURL\": \"http://www.songkick.com/artists/123676-omni?utm_source=56832&utm_medium=partner\",\n        \"audioSample\": null,\n        \"genreID1\": 5,\n        \"genreID2\": 22\n    }\n]";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(JSON.parse(response));
    };
    ArtisttrainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artisttrain',
            template: __webpack_require__(/*! ./artisttrain.component.html */ "./src/app/artisttrain/artisttrain.component.html"),
            styles: [__webpack_require__(/*! ./artisttrain.component.css */ "./src/app/artisttrain/artisttrain.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_music_service__WEBPACK_IMPORTED_MODULE_3__["MusicService"]])
    ], ArtisttrainComponent);
    return ArtisttrainComponent;
}());



/***/ }),

/***/ "./src/app/concert/concert.component.css":
/*!***********************************************!*\
  !*** ./src/app/concert/concert.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".concert-card {\n  margin-bottom: 10px;\n}\n#back {\n  position: fixed;\n  left: 30px;\n  bottom: 30px;\n}\n.artistname {\n  font-weight: bold;\n}\n.concert-list {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-row-gap: 20px;\n  grid-column-gap: 20px;\n}\n@media screen and (min-width: 700px) {\n  .concert-list {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media screen and (min-width: 900px) {\n  .concert-list {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uY2VydC9jb25jZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7QUFDRjtBQUVBO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbmNlcnQvY29uY2VydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmNlcnQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4jYmFjayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMzBweDtcbiAgYm90dG9tOiAzMHB4O1xufVxuLmFydGlzdG5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb25jZXJ0LWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xuICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC5jb25jZXJ0LWxpc3Qge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAuY29uY2VydC1saXN0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/concert/concert.component.html":
/*!************************************************!*\
  !*** ./src/app/concert/concert.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Recommendations</h1>\n<ul class=\"concert-list\">\n  <mat-card *ngFor=\"let concert of concerts$ | async\" class=\"concert-card\" routerLink=\"/concertdetail/{{concert.concertID}}\">\n    <img mat-card-image src=\"{{concert.artistPhotoURL}}\" alt=\"Photo of {{concert.artistPhotoURL}}\">\n    <mat-card-content class=\"mat-body-2\">\n      <p>{{concert.concertName}}</p>\n    </mat-card-content>\n  </mat-card>\n</ul>\n<button mat-raised-button color=\"accent\" class=\"mdc-fab mdc-fab--extended\" id=\"back\" routerLink=\"/genretrain\">\n  <span class=\"material-icons mdc-fab__icon\">navigate_before</span><span>Restart</span>\n</button>"

/***/ }),

/***/ "./src/app/concert/concert.component.ts":
/*!**********************************************!*\
  !*** ./src/app/concert/concert.component.ts ***!
  \**********************************************/
/*! exports provided: ConcertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcertComponent", function() { return ConcertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ConcertComponent = /** @class */ (function () {
    function ConcertComponent(userService) {
        this.userService = userService;
    }
    ConcertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.recommendations().subscribe(function (res) {
            _this.concerts$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(res);
        });
    };
    ConcertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-concert',
            template: __webpack_require__(/*! ./concert.component.html */ "./src/app/concert/concert.component.html"),
            styles: [__webpack_require__(/*! ./concert.component.css */ "./src/app/concert/concert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ConcertComponent);
    return ConcertComponent;
}());



/***/ }),

/***/ "./src/app/concertdetail/concertdetail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/concertdetail/concertdetail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".concert-title{\n    font-size: 1.8rem;\n}\n\n.concert-venue a{\n    color: beige;\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none;\n}\n\n.concert-details{\n    background: rgba(255,255,255,0.25);\n    padding: 1rem;\n\n}\n\n.concert-details div {\n    padding-top: 0.7rem;\n}\n\n.concert-details div section{\n    padding-top: 0.4rem;\n    padding-bottom: 0.4rem;\n}\n\nh3{\n    font-size: 1.2rem;\n    padding-top: 0.4rem;\n    padding-bottom: 0.4rem;\n}\n\n.headliner{\n    float:right;\n}\n\nmat-card{\n    margin-bottom: 20px;\n}\n\n#back {\n    position: fixed;\n    left: 30px;\n    bottom: 30px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uY2VydGRldGFpbC9jb25jZXJ0ZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxhQUFhOztBQUVqQjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29uY2VydGRldGFpbC9jb25jZXJ0ZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uY2VydC10aXRsZXtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmNvbmNlcnQtdmVudWUgYXtcbiAgICBjb2xvcjogYmVpZ2U7XG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG59XG5cbi5jb25jZXJ0LWRldGFpbHN7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjI1KTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuXG59IFxuLmNvbmNlcnQtZGV0YWlscyBkaXYge1xuICAgIHBhZGRpbmctdG9wOiAwLjdyZW07XG59XG5cbi5jb25jZXJ0LWRldGFpbHMgZGl2IHNlY3Rpb257XG4gICAgcGFkZGluZy10b3A6IDAuNHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xufVxuaDN7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xufVxuXG4uaGVhZGxpbmVye1xuICAgIGZsb2F0OnJpZ2h0O1xufVxuXG5tYXQtY2FyZHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jYmFjayB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgYm90dG9tOiAzMHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/concertdetail/concertdetail.component.html":
/*!************************************************************!*\
  !*** ./src/app/concertdetail/concertdetail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Concert Details</h1>\n<div class=\"concert-details\">\n  <div>\n    <h2 class=\"concert-title\">{{concertDetails$.value[0].concertName}}</h2>\n    <ul>\n      <div>\n        <h3 class=\"concert-venue\">Venue:\n            <a target=\"_blank\" href=\"{{concertDetails$.value[0].websiteURL}}\"> {{concertDetails$.value[0].name}} </a>\n        </h3>\n        <!-- <section *ngIf=\"concertDetails$.value[0].phone==''\"> ( {{concertDetails$.value[0].phone}} )</section> -->\n        <section><span>{{concertDetails$.value[0].address}} <br/> {{concertDetails$.value[0].city+ ' ' +concertDetails$.value[0].state+' '+concertDetails$.value[0].zip }}</span></section>\n      </div>\n    </ul>\n  </div>\n  <div>\n    <section>Date: {{getDate(concertDetails$.value[0].eventDateTime)}}</section>\n    <section>Age Restriction: {{(concertDetails$.value[0].ageRestriction == 'null')? ' - ':concertDetails$.value[0].ageRestriction}}</section>\n    <section>Capacity: {{ (concertDetails$.value[0].capacity == 'null')? ' - ':' $ '+concertDetails$.value[0].capacity}}</section>\n    <section>Cost: {{ (concertDetails$.value[0].cost == 'null')? ' - ':concertDetails$.value[0].cost}}</section>\n  </div>\n  <div class=\"container\">\n    <div class=\"row justify-content-around\">\n      <div><button class=\"btn btn-warning\" disabled>The Wall</button></div><div><button class=\"btn btn-warning\" disabled>The Item Exchange</button></div>\n    </div>\n  </div>\n  <div>\n    <h3>Artists: </h3>\n    <!-- <span *ngFor=\"let artist of concertDetails$ | async\">| {{artist.artistName}} |</span> -->\n  </div>\n  <!-- <span>concertID: {{concertDetails$.value[0].concertID}}</span> -->\n  <!-- <span>concertPhotoURL: {{concertDetails$.value[0].concertPhotoURL}}</span> -->\n  <!-- <span>venueID: {{artist.venueID}}</span> -->\n  <div>\n    <mat-card *ngFor=\"let artist of concertDetails$ | async\" class=\"artist-card\">\n        <img mat-card-image src=\"{{artist.artistPhotoURL}}\" alt=\"Photo of {{artist.artistName}}\">\n        <mat-card-content>\n          <section>\n            <span class=\"mat-h2\">{{artist.artistName}}</span>\n            <span class=\"headliner\" *ngIf=\"artist.performerOrder == 1\">\n              <button mat-flat-button color=\"warn\"> Headliner</button>\n            </span>\n          </section>\n          <section><span class=\"mat-caption\">{{artist.genreName}}</span></section>\n        </mat-card-content>\n      </mat-card>\n  </div>\n  \n  </div>\n\n<button mat-raised-button color=\"accent\" class=\"mdc-fab mdc-fab--extended\" id=\"back\" routerLink=\"/recommendations\">\n  <span class=\"material-icons mdc-fab__icon\">navigate_before</span>\n</button>\n"

/***/ }),

/***/ "./src/app/concertdetail/concertdetail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/concertdetail/concertdetail.component.ts ***!
  \**********************************************************/
/*! exports provided: ConcertdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcertdetailComponent", function() { return ConcertdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/music.service */ "./src/app/services/music.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ConcertdetailComponent = /** @class */ (function () {
    function ConcertdetailComponent(activatedRoute, musicService) {
        this.activatedRoute = activatedRoute;
        this.musicService = musicService;
    }
    ConcertdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.concertId = +params.concertId;
            console.log(_this.concertId);
            _this.musicService.concert(_this.concertId).subscribe(function (res) {
                _this.concertDetails$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(res);
            });
        });
    };
    ConcertdetailComponent.prototype.getDate = function (eventDateTime) {
        // console.log(eventDateTime);
        return eventDateTime.substr(0, 10);
    };
    ConcertdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-concertdetail',
            template: __webpack_require__(/*! ./concertdetail.component.html */ "./src/app/concertdetail/concertdetail.component.html"),
            styles: [__webpack_require__(/*! ./concertdetail.component.css */ "./src/app/concertdetail/concertdetail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_music_service__WEBPACK_IMPORTED_MODULE_3__["MusicService"]])
    ], ConcertdetailComponent);
    return ConcertdetailComponent;
}());



/***/ }),

/***/ "./src/app/genretrain/genretrain.component.css":
/*!*****************************************************!*\
  !*** ./src/app/genretrain/genretrain.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".genres-list {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-row-gap: 10px;\n  justify-items: center;\n}\n\n@media screen and (min-width: 700px) {\n  .genres-list {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .genres-list {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n  }\n}\n\n.genre-circle {\n  width: 170px;\n  height: 170px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-filter: grayscale(80%);\n          filter: grayscale(80%);\n}\n\n.selected {\n  -webkit-filter: grayscale(0%) saturate(150%);\n          filter: grayscale(0%) saturate(150%);\n  border: 5px solid #FFC107;\n}\n\n#next {\n  position: fixed;\n  right: 30px;\n  bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VucmV0cmFpbi9nZW5yZXRyYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0NBQXNDO0VBQ3hDO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNENBQW9DO1VBQXBDLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFDM0I7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2dlbnJldHJhaW4vZ2VucmV0cmFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdlbnJlcy1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC5nZW5yZXMtbGlzdCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLmdlbnJlcy1saXN0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgfVxufVxuXG4uZ2VucmUtY2lyY2xlIHtcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDE3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSg4MCUpO1xufVxuXG4uc2VsZWN0ZWQge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSkgc2F0dXJhdGUoMTUwJSk7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNGRkMxMDc7XG59XG5cblxuI25leHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3R0b206IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/genretrain/genretrain.component.html":
/*!******************************************************!*\
  !*** ./src/app/genretrain/genretrain.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Genres</h1>\n\n<ul class=\"genres-list\">\n  <li *ngFor=\"let genre of genres$ | async; index as i;\"  class=\"genre-circle\" [style.background]=\"'linear-gradient(45deg,'+colors[i]+')'\"\n    [class.selected]=\"genre?.selected==true\" (click)=\"toggleSelected(genre)\">\n    {{genre.name}}\n  </li>\n</ul>\n\n<button mat-raised-button color=\"accent\" class=\"mdc-fab mdc-fab--extended\" id=\"next\" routerLink=\"/artisttrain\">\n  <span class=\"material-icons mdc-fab__icon\">navigate_next</span>\n</button>"

/***/ }),

/***/ "./src/app/genretrain/genretrain.component.ts":
/*!****************************************************!*\
  !*** ./src/app/genretrain/genretrain.component.ts ***!
  \****************************************************/
/*! exports provided: GenretrainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenretrainComponent", function() { return GenretrainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/music.service */ "./src/app/services/music.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");






var GenretrainComponent = /** @class */ (function () {
    function GenretrainComponent(musicService, userService) {
        this.musicService = musicService;
        this.userService = userService;
        this.offlineTesting = false;
        this.hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];
        this.colors = ["#159957, #155799",
            "#f2994a, #f2c94c",
            "#eb5757, #000000",
            "#e44d26, #f16529",
            "#92ceca, #0ea2c7",
            "#d66d75, #e29587",
            "#20002c, #cbb4d4",
            "#34e89e, #0f3443",
            "#de6161, #2657eb"];
    }
    GenretrainComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.offlineTesting) {
            this.genres$ = this.sampleGenresResponse();
            console.log(this.genres$);
        }
        else {
            this.musicService.genres().subscribe(function (response) {
                // for (let genre of response) {
                //   genre["color"] = this.getRandomGradient();
                // }
                _this.genres$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(response);
                console.log(response);
            });
        }
    };
    GenretrainComponent.prototype.toggleSelected = function (genre) {
        genre["selected"] = !genre["selected"];
        console.log(genre);
        this.postGenrePreference(genre.genreID, genre.selected);
    };
    GenretrainComponent.prototype.postGenrePreference = function (genreId, like) {
        var user = JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lsLoginKey));
        this.userService.saveGenre(user.id, genreId, like).subscribe(function (res) {
            console.log(res);
        });
    };
    GenretrainComponent.prototype.getRandomGradient = function () {
        var newColor1 = this.getRandomColor('#');
        var newColor2 = this.getRandomColor('#');
        var angle = 45;
        return "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
    };
    GenretrainComponent.prototype.getRandomColor = function (a) {
        for (var i = 0; i < 6; i++) {
            var x = Math.round(Math.random() * 14);
            var y = this.hexValues[x];
            a += y;
        }
        return a;
    };
    GenretrainComponent.prototype.sampleGenresResponse = function () {
        var response = "[\n      {\n        \"gcount\": 100,\n        \"genreID\": 1,\n        \"name\": \"Rock\"\n      },\n      {\n        \"gcount\": 54,\n        \"genreID\": 2,\n        \"name\": \"Alternative\"\n      },\n      {\n        \"gcount\": 20,\n        \"genreID\": 3,\n        \"name\": \"Electronic\"\n      }\n    ]";
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(JSON.parse(response));
    };
    GenretrainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-genretrain',
            template: __webpack_require__(/*! ./genretrain.component.html */ "./src/app/genretrain/genretrain.component.html"),
            styles: [__webpack_require__(/*! ./genretrain.component.css */ "./src/app/genretrain/genretrain.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_music_service__WEBPACK_IMPORTED_MODULE_4__["MusicService"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], GenretrainComponent);
    return GenretrainComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome, {{selected.name}}</h1>\n<section>\n  <mat-form-field>\n    <mat-label>Login With User</mat-label>\n    <mat-select [(value)]=\"selected\">\n      <mat-option *ngFor=\"let user of users | async\" [value]=\"user\">\n        {{user.username}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</section>\n\n<button mat-raised-button color=\"accent\" (click)=\"setLoggedInUser(selected)\" routerLink=\"/genretrain\">Login with {{selected.username}}</button>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService) {
        this.userService = userService;
        this.aVariable = "This is a random string";
        this.lsLoginKey = 'loggedInUser';
        this.backupUsers = [
            { name: 'Beth', id: 1 },
            { name: 'Marianela', id: 2 },
            { name: 'Daniel', id: 3 },
            { name: 'Marcelo', id: 4 }
        ];
        this.users = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.backupUsers);
        this.selected = { name: 'Beth', id: 1 };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        var loggedInUser = JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].lsLoginKey));
        if (loggedInUser) {
            this.selected = loggedInUser;
        }
        this.userService.users().subscribe(function (res) {
            console.log(res);
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var user = res_1[_i];
                console.log(user);
                user["name"] = user["username"];
                user["id"] = user["listenerID"];
            }
            _this.users = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(res);
        });
    };
    LoginComponent.prototype.setLoggedInUser = function (selected) {
        localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].lsLoginKey, JSON.stringify(selected));
        console.log(selected);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/music.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/music.service.ts ***!
  \*******************************************/
/*! exports provided: MusicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicService", function() { return MusicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var MusicService = /** @class */ (function () {
    function MusicService(http) {
        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL + "/api/music";
        this.artistsURL = this.baseURL + "/artists";
        this.genresURL = this.baseURL + "/genres";
        this.concertDetailsURL = this.baseURL + "/concerts";
    }
    MusicService.prototype.artists = function (userId) {
        return this.http.get(this.artistsURL + '?userId=' + userId);
    };
    MusicService.prototype.genres = function () {
        return this.http.get(this.genresURL);
    };
    MusicService.prototype.concert = function (concertId) {
        return this.http.get(this.concertDetailsURL + '?concertId=' + concertId);
    };
    MusicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MusicService);
    return MusicService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL + "/api/user";
        this.saveGenreURL = this.baseURL + "/genres";
        this.recommendationsURL = this.baseURL + "/recommendations";
        this.usersURL = this.baseURL + "/users";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    UserService.prototype.users = function () {
        return this.http.get(this.usersURL);
    };
    UserService.prototype.saveGenre = function (userId, genreID, like) {
        var reqBody = {
            userId: userId,
            genreId: genreID,
            like: like
        };
        return this.http.post(this.saveGenreURL, reqBody, this.httpOptions);
    };
    UserService.prototype.recommendations = function () {
        var user = JSON.parse(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].lsLoginKey));
        return this.http.get(this.recommendationsURL + '?userId=' + user.id);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
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
    production: false,
    baseURL: '',
    lsLoginKey: 'loggedInUser'
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

module.exports = __webpack_require__(/*! /Users/daniel/code/neiucs401/FSharp/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map