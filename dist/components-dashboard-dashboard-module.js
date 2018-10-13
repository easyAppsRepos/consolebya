(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dashboard-dashboard-module"],{

/***/ "./src/app/content/pages/components/dashboard/dashboard.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/content/pages/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Begin::Section-->\r\n<div class=\"row\">\r\n\t<div style=\"    width: 100%;\r\n    text-align: center;\r\n    padding: 67px;\r\n    font-weight: 600;\r\n    font-size: 16px;\">\r\nBienvenido al Panel de administracion de Yourbeauty \r\n</div>\r\n</div>\r\n<!--End::Section-->\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/dashboard/dashboard.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/components/dashboard/dashboard.component.ts ***!
  \***************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_layout_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/layout-config.service */ "./src/app/core/services/layout-config.service.ts");
/* harmony import */ var _core_services_layout_subheader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/layout/subheader.service */ "./src/app/core/services/layout/subheader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, layoutConfigService, subheaderService) {
        this.router = router;
        this.layoutConfigService = layoutConfigService;
        this.subheaderService = subheaderService;
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/content/pages/components/dashboard/dashboard.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_services_layout_config_service__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"],
            _core_services_layout_subheader_service__WEBPACK_IMPORTED_MODULE_3__["SubheaderService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/dashboard/dashboard.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/content/pages/components/dashboard/dashboard.module.ts ***!
  \************************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/content/pages/components/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layout/layout.module */ "./src/app/content/layout/layout.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/content/partials/partials.module.ts");
/* harmony import */ var _partials_layout_quick_sidebar_list_timeline_list_timeline_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../partials/layout/quick-sidebar/list-timeline/list-timeline.module */ "./src/app/content/partials/layout/quick-sidebar/list-timeline/list-timeline.module.ts");
/* harmony import */ var _partials_content_widgets_charts_widget_charts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../partials/content/widgets/charts/widget-charts.module */ "./src/app/content/partials/content/widgets/charts/widget-charts.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _partials_layout_quick_sidebar_list_timeline_list_timeline_module__WEBPACK_IMPORTED_MODULE_6__["ListTimelineModule"],
                _partials_content_widgets_charts_widget_charts_module__WEBPACK_IMPORTED_MODULE_7__["WidgetChartsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
                    }
                ])
            ],
            providers: [],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-dashboard-dashboard-module.js.map