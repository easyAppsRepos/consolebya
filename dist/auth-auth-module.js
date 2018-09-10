(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/content/pages/auth/auth-notice/auth-notice.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/auth/auth-notice/auth-notice.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!message\" [ngClass]=\"{show: message, 'alert-danger': type === 'error', 'alert-success': type === 'success', 'alert-info': type === 'info'}\" class=\"m-alert m-alert--outline m-alert--outline-2x alert fade\" role=\"alert\" #alertNotice>\r\n\t<span [innerHTML]=\"message\"></span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/pages/auth/auth-notice/auth-notice.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/auth/auth-notice/auth-notice.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/pages/auth/auth-notice/auth-notice.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/content/pages/auth/auth-notice/auth-notice.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuthNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNoticeComponent", function() { return AuthNoticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/auth/auth-notice.service */ "./src/app/core/auth/auth-notice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthNoticeComponent = /** @class */ (function () {
    function AuthNoticeComponent(authNoticeService) {
        this.authNoticeService = authNoticeService;
        this.message = '';
    }
    AuthNoticeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authNoticeService.onNoticeChanged$.subscribe(function (notice) {
            _this.message = notice.message;
            _this.type = notice.type;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AuthNoticeComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AuthNoticeComponent.prototype, "message", void 0);
    AuthNoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-auth-notice',
            template: __webpack_require__(/*! ./auth-notice.component.html */ "./src/app/content/pages/auth/auth-notice/auth-notice.component.html"),
            styles: [__webpack_require__(/*! ./auth-notice.component.scss */ "./src/app/content/pages/auth/auth-notice/auth-notice.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_1__["AuthNoticeService"]])
    ], AuthNoticeComponent);
    return AuthNoticeComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/auth/auth.component.html":
/*!********************************************************!*\
  !*** ./src/app/content/pages/auth/auth.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--desktop m-grid--ver-desktop m-grid--hor-tablet-and-mobile m-login m-login--6\" id=\"m_login\">\r\n\t\r\n<!--\r\n\t<div class=\"m-grid__item   m-grid__item--order-tablet-and-mobile-2 m-grid m-grid--hor m-login__aside\" style=\"background-image: url(assets/app/media/img/bg/bg-4.jpg);\">\r\n\t\t<div class=\"m-grid__item\">\r\n\t\t\t<div class=\"m-login__logo\">\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"./assets/app/media/img/logos/logo-4.png\">\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver\">\r\n\t\t\t<div class=\"m-grid__item m-grid__item--middle\">\r\n\t\t\t\t<span class=\"m-login__title\"></span>\r\n\t\t\t\t<span class=\"m-login__subtitle\"></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n \t\t<div class=\"m-grid__item\">\r\n\t\t\t<div class=\"m-login__info\">\r\n\t\t\t\t<div class=\"m-login__section\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"m-link\">&copy; {{today | date:'yyyy'}} Metronic</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-login__section\">\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"m-link\">Privacy</a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"m-link\">Legal</a>\r\n\t\t\t\t\t<a href=\"javascript:;\" class=\"m-link\">Contact</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div> -->\r\n\r\n\t<div  style='padding: 0px !important' class=\"m-grid__item m-grid__item--fluid  m-grid__item--order-tablet-and-mobile-1 m-login__wrapper\">\r\n\t\t<!--begin::Head-->\r\n<!-- \t\t<div class=\"m-login__head\">\r\n\t\t\t<span >No tienes cuenta aun?</span>\r\n\t\t\t<a href=\"javascript:;\" (click)=\"register()\" class=\"m-link m--font-danger\" >Registrate</a>\r\n\t\t</div> -->\r\n\t\t<!--end::Head-->\r\n\r\n\t\t<!--begin::Body-->\r\n\t\t<div class=\"m-login__body\">\r\n\t\t\t<m-login *ngIf=\"action === 'login'\" [(action)]=\"action\"></m-login>\r\n\r\n\t\t\t<m-register style='width: 100% !important;height: 100% !important;' *ngIf=\"action === 'register'\" [(action)]=\"action\"></m-register>\r\n\r\n\t\t\t<m-forgot-password *ngIf=\"action === 'forgot-password'\" [(action)]=\"action\"></m-forgot-password>\r\n\t\t</div>\r\n\t\t<!--end::Body-->\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/pages/auth/auth.component.scss":
/*!********************************************************!*\
  !*** ./src/app/content/pages/auth/auth.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/pages/auth/auth.component.ts":
/*!******************************************************!*\
  !*** ./src/app/content/pages/auth/auth.component.ts ***!
  \******************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_layout_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/layout-config.service */ "./src/app/core/services/layout-config.service.ts");
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/layout */ "./src/app/config/layout.ts");
/* harmony import */ var _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/auth/auth-notice.service */ "./src/app/core/auth/auth-notice.service.ts");
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthComponent = /** @class */ (function () {
    function AuthComponent(layoutConfigService, authNoticeService, translationService) {
        this.layoutConfigService = layoutConfigService;
        this.authNoticeService = authNoticeService;
        this.translationService = translationService;
        this.id = 'm_login';
        // tslint:disable-next-line:max-line-length
        this.classses = 'm-grid m-grid--hor m-grid--root m-page';
        this.action = 'login';
        this.today = Date.now();
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set login layout to blank
        this.layoutConfigService.setModel(new _config_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfig"]({ content: { skin: '' } }), true);
        this.translationService.getSelectedLanguage().subscribe(function (lang) {
            if (lang) {
                setTimeout(function () { return _this.translationService.setLanguage(lang); });
            }
        });
    };
    AuthComponent.prototype.ngOnDestroy = function () {
        // reset back to fluid
        this.layoutConfigService.reloadSavedConfig();
    };
    AuthComponent.prototype.register = function () {
        this.action = 'register';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('id'),
        __metadata("design:type", Object)
    ], AuthComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class')
        // tslint:disable-next-line:max-line-length
        ,
        __metadata("design:type", Object)
    ], AuthComponent.prototype, "classses", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AuthComponent.prototype, "action", void 0);
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/content/pages/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/content/pages/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_layout_config_service__WEBPACK_IMPORTED_MODULE_1__["LayoutConfigService"],
            _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_3__["AuthNoticeService"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslationService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/auth/auth.module.ts":
/*!***************************************************!*\
  !*** ./src/app/content/pages/auth/auth.module.ts ***!
  \***************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/content/pages/auth/auth.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/content/pages/auth/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/content/pages/auth/register/register.component.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/content/pages/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _partials_content_general_spinner_button_spinner_button_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../partials/content/general/spinner-button/spinner-button.module */ "./src/app/content/partials/content/general/spinner-button/spinner-button.module.ts");
/* harmony import */ var _auth_notice_auth_notice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth-notice/auth-notice.component */ "./src/app/content/pages/auth/auth-notice/auth-notice.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild(),
                _partials_content_general_spinner_button_spinner_button_module__WEBPACK_IMPORTED_MODULE_11__["SpinnerButtonModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAT-tTbOja69paXaiAgAtNi9nGHRh75bzk',
                    libraries: ['geometry', 'places']
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]
                    }
                ])
            ],
            entryComponents: [_register_register_component__WEBPACK_IMPORTED_MODULE_6__["ModalContentComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["Modal3Component"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["Modal4Component"]],
            providers: [],
            declarations: [
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["Modal3Component"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["ModalContentComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["Modal4Component"],
                _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"],
                _auth_notice_auth_notice_component__WEBPACK_IMPORTED_MODULE_12__["AuthNoticeComponent"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/content/pages/auth/forgot-password/forgot-password.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/auth/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Signin-->\r\n<div class=\"m-login__signin\">\r\n\t<div class=\"m-login__title\">\r\n\t\t<h3 class=\"m-login__title\">Olvidó la contraseña ?</h3>\r\n\t\t<div class=\"m-login__desc\">Ingresa tu email para resetear la contraseña:</div>\r\n\t</div>\r\n\r\n\t<m-auth-notice></m-auth-notice>\r\n\r\n\t<!--begin::Form-->\r\n\t<form class=\"m-login__form m-form\" name=\"form\" (ngSubmit)=\"f.form.valid && submit()\" #f=\"ngForm\" novalidate>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<mat-label>Email</mat-label>\r\n\t\t\t\t<input matInput type=\"email\" name=\"email\" placeholder=\"Email address\" autocomplete=\"off\" [(ngModel)]=\"model.email\" #email=\"ngModel\" email=\"true\" required>\r\n\t\t\t</mat-form-field>\r\n\t\t</div>\r\n\t</form>\r\n\t<!--end::Form-->\r\n\r\n\t<!--begin::Action-->\r\n\t<div class=\"m-login__action m-login__action--fit\">\r\n\t\t<button mat-button (click)=\"loginPage($event)\" >Atras</button>\r\n\t\t<m-spinner-button [options]=\"spinner\"  >Restablecer</m-spinner-button>\r\n\t</div>\r\n\t<!--end::Action-->\r\n</div>\r\n<!--end::Signin-->\r\n"

/***/ }),

/***/ "./src/app/content/pages/auth/forgot-password/forgot-password.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/auth/forgot-password/forgot-password.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-form-field {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/content/pages/auth/forgot-password/forgot-password.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/pages/auth/forgot-password/forgot-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/auth/authentication.service */ "./src/app/core/auth/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/auth/auth-notice.service */ "./src/app/core/auth/auth-notice.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService, authNoticeService, translate) {
        this.authService = authService;
        this.authNoticeService = authNoticeService;
        this.translate = translate;
        this.model = { email: '' };
        this.actionChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loading = false;
        this.errors = [];
        this.spinner = {
            active: false,
            spinnerSize: 18,
            raised: true,
            buttonColor: 'primary',
            spinnerColor: 'accent',
            fullWidth: false
        };
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () { };
    ForgotPasswordComponent.prototype.loginPage = function (event) {
        event.preventDefault();
        this.action = 'login';
        this.actionChange.next(this.action);
    };
    ForgotPasswordComponent.prototype.submit = function () {
        var _this = this;
        this.spinner.active = true;
        if (this.validate(this.f)) {
            this.authService.requestPassword(this.model).subscribe(function (response) {
                if (typeof response !== 'undefined') {
                    _this.action = 'login';
                    _this.actionChange.next(_this.action);
                }
                else {
                    // tslint:disable-next-line:max-line-length
                    _this.authNoticeService.setNotice(_this.translate.instant('AUTH.VALIDATION.NOT_FOUND', { name: _this.translate.instant('AUTH.INPUT.EMAIL') }), 'error');
                }
                _this.spinner.active = false;
            });
        }
    };
    ForgotPasswordComponent.prototype.validate = function (f) {
        if (f.form.status === 'VALID') {
            return true;
        }
        this.errors = [];
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](f, 'form.controls.email.errors.email')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](f, 'form.controls.email.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
        }
        if (this.errors.length > 0) {
            this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
            this.spinner.active = false;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ForgotPasswordComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ForgotPasswordComponent.prototype, "actionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], ForgotPasswordComponent.prototype, "f", void 0);
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/content/pages/auth/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/content/pages/auth/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_5__["AuthNoticeService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/auth/login/login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/content/pages/auth/login/login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Signin-->\r\n\r\n<div class=\"m-login__head\" style=\"top: 50px !important\">\r\n\t\t\t<span >No tienes cuenta aun?</span>\r\n\t\t\t<a  (click)=\"register()\" class=\"m-link m--font-danger\" >Registrate</a>\r\n\t\t</div>\r\n\r\n\r\n\r\n\r\n<div class=\"m-login__signin\">\r\n\t<div class=\"m-login__title\">\r\n\t\t<h3 >YourBeauty</h3>\r\n\t</div>\r\n\r\n\r\n\r\n\t<!-- <m-auth-notice></m-auth-notice> -->\r\n<div class=\" alert-info show m-alert m-alert--outline m-alert--outline-2x alert fade\" role=\"alert\" #alertNotice>\r\n\t<span >Quieres ser parte de yourBeauty? \r\n\t\t\t<a (click)=\"register2()\"><strong>Registratre totalmente gratis</strong></a> o \r\n\t\t\t Inicia sesion  si ya tenes cuenta</span>\r\n</div>\r\n\r\n\r\n\r\n\r\n\t<!--begin::Form-->\r\n\t<form class=\"m-login__form m-form\" name=\"form\" (ngSubmit)=\"f.form.valid && submit()\" #f=\"ngForm\" novalidate>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<mat-label>Email</mat-label>\r\n\t\t\t\t<input matInput type=\"email\" name=\"email\" placeholder=\"Email address\" autocomplete=\"off\" [(ngModel)]=\"model.email\" #email=\"ngModel\" email=\"true\" required>\r\n\t\t\t</mat-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<mat-label>Contraseña</mat-label>\r\n\t\t\t\t<input matInput minlength=\"4\" type=\"password\" name=\"password\" placeholder=\"Password\" autocomplete=\"off\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required>\r\n\t\t\t</mat-form-field>\r\n\t\t</div>\r\n\t</form>\r\n\t<!--end::Form-->\r\n\r\n\t<!--begin::Action-->\r\n\t<div class=\"m-login__action m-login__action--fit\">\r\n\t\t<a href=\"javascript:;\" (click)=\"forgotPasswordPage($event)\" class=\"m-link\">\r\n\t\t\t<span >Olvidó la contraseña?</span>\r\n\t\t</a>\r\n<!-- \t\t<m-spinner-button [options]=\"spinner\" (click)=\"submit()\">{{'AUTH.LOGIN.BUTTON' | translate}}</m-spinner-button> -->\r\n\t\t<m-spinner-button [options]=\"spinner\" (click)=\"submit()\">Login</m-spinner-button>\r\n\t</div>\r\n\t<!--end::Action-->\r\n\r\n\t<!--begin::Divider-->\r\n<!-- \t<div class=\"m-login__form-divider\">\r\n\t\t<div class=\"m-divider\">\r\n\t\t\t<span></span>\r\n\t\t\t<span translate=\"AUTH.GENERAL.OR\">OR</span>\r\n\t\t\t<span></span>\r\n\t\t</div>\r\n\t</div> -->\r\n\t<!--end::Divider-->\r\n\r\n\t<!--begin::Options-->\r\n<!-- \t<div class=\"m-login__options\">\r\n\t\t<a href=\"javascript:;\" mat-raised-button color=\"primary\">\r\n\t\t\t<span>\r\n\t\t\t\t<i class=\"fab fa-facebook-f\"></i>&nbsp;\r\n\t\t\t\t<span>Facebook</span>\r\n\t\t\t</span>\r\n\t\t</a>\r\n\r\n\t\t<a href=\"javascript:;\" mat-raised-button color=\"accent\">\r\n\t\t\t<span>\r\n\t\t\t\t<i class=\"fab fa-twitter\"></i>&nbsp;\r\n\t\t\t\t<span>Twitter</span>\r\n\t\t\t</span>\r\n\t\t</a>\r\n\r\n\t\t<a href=\"javascript:;\" mat-raised-button color=\"warn\">\r\n\t\t\t<span>\r\n\t\t\t\t<i class=\"fab fa-google\"></i>&nbsp;\r\n\t\t\t\t<span>Google</span>\r\n\t\t\t</span>\r\n\t\t</a>\r\n\t</div> -->\r\n\t<!--end::Options-->\r\n</div>\r\n<!--end::Signin-->\r\n"

/***/ }),

/***/ "./src/app/content/pages/auth/login/login.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/content/pages/auth/login/login.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-form-field {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/content/pages/auth/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/content/pages/auth/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/auth/authentication.service */ "./src/app/core/auth/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/auth/auth-notice.service */ "./src/app/core/auth/auth-notice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, authNoticeService, translate, cdr) {
        this.authService = authService;
        this.router = router;
        this.authNoticeService = authNoticeService;
        this.translate = translate;
        this.cdr = cdr;
        this.model = { email: 'admin@demo.com', password: 'demo' };
        this.actionChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loading = false;
        this.errors = [];
        this.spinner = {
            active: false,
            spinnerSize: 18,
            raised: true,
            buttonColor: 'primary',
            spinnerColor: 'accent',
            fullWidth: false
        };
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.spinner.active = true;
        if (this.validate(this.f)) {
            this.authService.login(this.model).subscribe(function (response) {
                if (typeof response !== 'undefined') {
                    _this.router.navigate(['/']);
                }
                else {
                    _this.authNoticeService.setNotice(_this.translate.instant('AUTH.VALIDATION.INVALID_LOGIN'), 'error');
                }
                _this.spinner.active = false;
                _this.cdr.detectChanges();
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        // demo message to show
        if (!this.authNoticeService.onNoticeChanged$.getValue()) {
            var initialNotice = "Use account\n\t\t\t<strong>admin@demo.com</strong> and password\n\t\t\t<strong>demo</strong> to continue.";
            this.authNoticeService.setNotice(initialNotice, 'success');
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.authNoticeService.setNotice(null);
    };
    LoginComponent.prototype.validate = function (f) {
        if (f.form.status === 'VALID') {
            return true;
        }
        this.errors = [];
        if (object_path__WEBPACK_IMPORTED_MODULE_6__["get"](f, 'form.controls.email.errors.email')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_6__["get"](f, 'form.controls.email.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_6__["get"](f, 'form.controls.password.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', { name: this.translate.instant('AUTH.INPUT.PASSWORD') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_6__["get"](f, 'form.controls.password.errors.minlength')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.MIN_LENGTH', { name: this.translate.instant('AUTH.INPUT.PASSWORD') }));
        }
        if (this.errors.length > 0) {
            this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
            this.spinner.active = false;
        }
        return false;
    };
    LoginComponent.prototype.forgotPasswordPage = function (event) {
        this.action = 'forgot-password';
        this.actionChange.next(this.action);
    };
    LoginComponent.prototype.register2 = function () {
        this.action = 'register';
        this.actionChange.next(this.action);
    };
    LoginComponent.prototype.register = function (event) {
        this.action = 'register';
        this.actionChange.next(this.action);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "actionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], LoginComponent.prototype, "f", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/content/pages/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/content/pages/auth/login/login.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_4__["AuthNoticeService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/auth/register/register.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/content/pages/auth/register/register.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"m_modal_6\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Modal title</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>  \r\n\r\n\r\n\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\" style='width: 600px !important'>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" style=\"    font-size: 25px;\r\n    line-height: 34px;\r\n    font-weight: 300;\">Agrega Miembro del Staff</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\" style=\"padding: 19px 40px !important;\">\r\n<div class=\"row \">\r\n<div class=\"col-xl-3\" style=\"    margin-bottom: 22px;text-align: center;padding-right: 0px !important;\">\r\n  <img style=\"    width: 64px;\r\n    border-radius: 100%;\r\n    height: 64px;\r\n    margin-top: 14px;\" src=\"assets/app/media/img/userB.png\">\r\n</div>\r\n<div class=\"col-xl-9\" >\r\n    <form [formGroup]=\"addFormGroup\" #f=\"ngForm\">\r\n     \r\n\r\n     <mat-form-field  color=\"primary\" style='width: 100% !important;font-size: 16px !important;'>\r\n        <input style='  padding: 10px !important;' matInput placeholder=\"Nombre del staff\" formControlName=\"nombreStaff\" required>\r\n         <mat-label><mat-icon style='  vertical-align: middle;  font-size: 25px !important;'>person</mat-icon>Cual es el nombre del Staff?</mat-label>\r\n      </mat-form-field>\r\n\r\n\r\n\r\n      <mat-form-field style=' width: 100% !important;     font-size: 16px !important;\r\n    '>\r\n        <input style='  padding: 10px !important;' matInput placeholder=\"Puesto del empleado\" formControlName=\"puestoStaff\" required>\r\n         <mat-label><mat-icon style='  vertical-align: middle;  font-size: 25px !important;'>list_alt</mat-icon>¿Cuál es el puesto del Staff?</mat-label>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field style='  width: 100% !important;    font-size: 16px !important;\r\n    '>\r\n        <input style='  padding: 10px !important;' matInput placeholder=\"Numero de telefono\" formControlName=\"telefonoStaff\" required>\r\n         <mat-label><mat-icon style='  vertical-align: middle;  font-size: 25px !important;'>phone</mat-icon>Telefono</mat-label>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field style=' width: 100% !important;     font-size: 16px !important;\r\n    '>\r\n        <input style='  padding: 10px !important;' matInput placeholder=\"Correo Electronico\" formControlName=\"correoStaff\" type='email' required>\r\n         <mat-label><mat-icon style='  vertical-align: middle;  font-size: 25px !important;'>email</mat-icon>Correo electronico</mat-label>\r\n      </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </form>\r\n\r\n    <div style=\"    padding: 0px 0px 20px 0px;\">\r\n<!--     <mat-slide-toggle [(ngModel)]=\"isHuman2\" (change)=\"onChange2($event)\" name=\"human2\">I am not a robot</mat-slide-toggle> -->\r\n\r\n    <mat-slide-toggle name=\"human2\">Invitar a YourBeauty y crear cuenta</mat-slide-toggle>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"modal-footer\" *ngIf='!editarStaff'>\r\n        <button [disabled]='!f.form.valid'  type=\"button\" class=\"btn\" (click)='addStaff(1)' mat-raised-button color=\"primary\">Guardar</button>\r\n        <button [disabled]='!f.form.valid' type=\"button\" class=\"btn\" mat-raised-button color=\"primary\" (click)='addStaff(2)'>Guardar & Agregar otro</button>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\" *ngIf='editarStaff'>\r\n        <button [disabled]='!f.form.valid'  type=\"button\" class=\"btn\" (click)='editStaffDo()' mat-raised-button color=\"primary\">Editar Staff</button>\r\n      </div>\r\n\r\n\r\n    </ng-template>\r\n\r\n\r\n\r\n\r\n\r\n    <ng-template #content2 let-c=\"close\" let-d=\"dismiss\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" style=\"    font-size: 25px;\r\n    line-height: 34px;\r\n    font-weight: 300;\">Agregando Horario</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\" style=\"padding: 0px !important\">\r\n          <div class=\"col-xl-12\" style=\"    border-right: solid 1px lightgray;\" >\r\n\r\n        <div style='padding: 30px 45px;'>\r\n            <div style=\"margin-bottom:3px;background: white;padding: 0px 0px;\" *ngFor=\"let item of [{nombre:'Domingo'},{nombre:'Lunes'},{nombre:'Martes'}\r\n            ,{nombre:'Miercoles'},{nombre:'Jueves'},{nombre:'Viernes'},{nombre:'Sabado'}];  let i = index\">\r\n            <mat-checkbox >\r\n              <span class='labelBy' style='margin-bottom: 0px !important;'>{{item.nombre}}</span>\r\n                </mat-checkbox>\r\n              <div class=\"conteinInput\" style=\"margin-top: 20px\">\r\n              \r\n              <div style=\"display: flex\">\r\n\r\n              <mat-select class='inputBy w50'>\r\n    \r\n              <mat-option value=\"option1\">12:00 AM</mat-option>\r\n              <mat-option value=\"option1\">12:05 AM</mat-option>\r\n              <mat-option value=\"option1\">12:10 AM</mat-option>\r\n              <mat-option value=\"option1\">12:15 AM</mat-option>\r\n              <mat-option value=\"option1\">12:20 AM</mat-option>\r\n              <mat-option value=\"option1\">12:25 AM</mat-option>\r\n              <mat-option value=\"option1\">12:30 AM</mat-option>\r\n              <mat-option value=\"option1\">12:35 AM</mat-option>\r\n              <mat-option value=\"option1\">12:40 AM</mat-option>\r\n              <mat-option value=\"option1\">12:45 AM</mat-option>\r\n              <mat-option value=\"option1\">12:50 AM</mat-option>\r\n              <mat-option value=\"option1\">12:55 AM</mat-option>\r\n\r\n              <mat-option value=\"option1\">01:00 AM</mat-option>\r\n              <mat-option value=\"option1\">01:05 AM</mat-option>\r\n              <mat-option value=\"option1\">01:10 AM</mat-option>\r\n              <mat-option value=\"option1\">01:15 AM</mat-option>\r\n              <mat-option value=\"option1\">01:20 AM</mat-option>\r\n              <mat-option value=\"option1\">01:25 AM</mat-option>\r\n              <mat-option value=\"option1\">01:30 AM</mat-option>\r\n              <mat-option value=\"option1\">01:35 AM</mat-option>\r\n              <mat-option value=\"option1\">01:40 AM</mat-option>\r\n              <mat-option value=\"option1\">01:45 AM</mat-option>\r\n              <mat-option value=\"option1\">01:50 AM</mat-option>\r\n              <mat-option value=\"option1\">01:55 AM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">02:00 AM</mat-option>\r\n              <mat-option value=\"option1\">02:05 AM</mat-option>\r\n              <mat-option value=\"option1\">02:10 AM</mat-option>\r\n              <mat-option value=\"option1\">02:15 AM</mat-option>\r\n              <mat-option value=\"option1\">02:20 AM</mat-option>\r\n              <mat-option value=\"option1\">02:25 AM</mat-option>\r\n              <mat-option value=\"option1\">02:30 AM</mat-option>\r\n              <mat-option value=\"option1\">02:35 AM</mat-option>\r\n              <mat-option value=\"option1\">02:40 AM</mat-option>\r\n              <mat-option value=\"option1\">02:45 AM</mat-option>\r\n              <mat-option value=\"option1\">02:50 AM</mat-option>\r\n              <mat-option value=\"option1\">02:55 AM</mat-option>\r\n\r\n              <mat-option value=\"option1\">03:00 AM</mat-option>\r\n              <mat-option value=\"option1\">03:05 AM</mat-option>\r\n              <mat-option value=\"option1\">03:10 AM</mat-option>\r\n              <mat-option value=\"option1\">03:15 AM</mat-option>\r\n              <mat-option value=\"option1\">03:20 AM</mat-option>\r\n              <mat-option value=\"option1\">03:25 AM</mat-option>\r\n              <mat-option value=\"option1\">03:30 AM</mat-option>\r\n              <mat-option value=\"option1\">03:35 AM</mat-option>\r\n              <mat-option value=\"option1\">03:40 AM</mat-option>\r\n              <mat-option value=\"option1\">03:45 AM</mat-option>\r\n              <mat-option value=\"option1\">03:50 AM</mat-option>\r\n              <mat-option value=\"option1\">03:55 AM</mat-option>\r\n\r\n              <mat-option value=\"option1\">04:00 AM</mat-option>\r\n              <mat-option value=\"option1\">04:05 AM</mat-option>\r\n              <mat-option value=\"option1\">04:10 AM</mat-option>\r\n              <mat-option value=\"option1\">04:15 AM</mat-option>\r\n              <mat-option value=\"option1\">04:20 AM</mat-option>\r\n              <mat-option value=\"option1\">04:25 AM</mat-option>\r\n              <mat-option value=\"option1\">04:30 AM</mat-option>\r\n              <mat-option value=\"option1\">04:35 AM</mat-option>\r\n              <mat-option value=\"option1\">04:40 AM</mat-option>\r\n              <mat-option value=\"option1\">04:45 AM</mat-option>\r\n              <mat-option value=\"option1\">04:50 AM</mat-option>\r\n              <mat-option value=\"option1\">04:55 AM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">05:00 AM</mat-option>\r\n              <mat-option value=\"option1\">05:05 AM</mat-option>\r\n              <mat-option value=\"option1\">05:10 AM</mat-option>\r\n              <mat-option value=\"option1\">05:15 AM</mat-option>\r\n              <mat-option value=\"option1\">05:20 AM</mat-option>\r\n              <mat-option value=\"option1\">05:25 AM</mat-option>\r\n              <mat-option value=\"option1\">05:30 AM</mat-option>\r\n              <mat-option value=\"option1\">05:35 AM</mat-option>\r\n              <mat-option value=\"option1\">05:40 AM</mat-option>\r\n              <mat-option value=\"option1\">05:45 AM</mat-option>\r\n              <mat-option value=\"option1\">05:50 AM</mat-option>\r\n              <mat-option value=\"option1\">05:55 AM</mat-option>\r\n\r\n              <mat-option value=\"option1\">06:00 AM</mat-option>\r\n              <mat-option value=\"option1\">06:05 AM</mat-option>\r\n              <mat-option value=\"option1\">06:10 AM</mat-option>\r\n              <mat-option value=\"option1\">06:15 AM</mat-option>\r\n              <mat-option value=\"option1\">06:20 AM</mat-option>\r\n              <mat-option value=\"option1\">06:25 AM</mat-option>\r\n              <mat-option value=\"option1\">06:30 AM</mat-option>\r\n              <mat-option value=\"option1\">06:35 AM</mat-option>\r\n              <mat-option value=\"option1\">06:40 AM</mat-option>\r\n              <mat-option value=\"option1\">06:45 AM</mat-option>\r\n              <mat-option value=\"option1\">06:50 AM</mat-option>\r\n              <mat-option value=\"option1\">06:55 AM</mat-option>\r\n\r\n              <mat-option value=\"option1\">07:00 AM</mat-option>\r\n              <mat-option value=\"option1\">07:05 AM</mat-option>\r\n              <mat-option value=\"option1\">07:10 AM</mat-option>\r\n              <mat-option value=\"option1\">07:15 AM</mat-option>\r\n              <mat-option value=\"option1\">07:20 AM</mat-option>\r\n              <mat-option value=\"option1\">07:25 AM</mat-option>\r\n              <mat-option value=\"option1\">07:30 AM</mat-option>\r\n              <mat-option value=\"option1\">07:35 AM</mat-option>\r\n              <mat-option value=\"option1\">07:40 AM</mat-option>\r\n              <mat-option value=\"option1\">07:45 AM</mat-option>\r\n              <mat-option value=\"option1\">07:50 AM</mat-option>\r\n              <mat-option value=\"option1\">07:55 AM</mat-option>\r\n\r\n              <mat-option value=\"option1\">08:00 AM</mat-option>\r\n              <mat-option value=\"option1\">08:05 AM</mat-option>\r\n              <mat-option value=\"option1\">08:10 AM</mat-option>\r\n              <mat-option value=\"option1\">08:15 AM</mat-option>\r\n              <mat-option value=\"option1\">08:20 AM</mat-option>\r\n              <mat-option value=\"option1\">08:25 AM</mat-option>\r\n              <mat-option value=\"option1\">08:30 AM</mat-option>\r\n              <mat-option value=\"option1\">08:35 AM</mat-option>\r\n              <mat-option value=\"option1\">08:40 AM</mat-option>\r\n              <mat-option value=\"option1\">08:45 AM</mat-option>\r\n              <mat-option value=\"option1\">08:50 AM</mat-option>\r\n              <mat-option value=\"option1\">08:55 AM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">09:00 AM</mat-option>\r\n              <mat-option value=\"option1\">09:05 AM</mat-option>\r\n              <mat-option value=\"option1\">09:10 AM</mat-option>\r\n              <mat-option value=\"option1\">09:15 AM</mat-option>\r\n              <mat-option value=\"option1\">09:20 AM</mat-option>\r\n              <mat-option value=\"option1\">09:25 AM</mat-option>\r\n              <mat-option value=\"option1\">09:30 AM</mat-option>\r\n              <mat-option value=\"option1\">09:35 AM</mat-option>\r\n              <mat-option value=\"option1\">09:40 AM</mat-option>\r\n              <mat-option value=\"option1\">09:45 AM</mat-option>\r\n              <mat-option value=\"option1\">09:50 AM</mat-option>\r\n              <mat-option value=\"option1\">09:55 AM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">10:00 AM</mat-option>\r\n              <mat-option value=\"option1\">10:05 AM</mat-option>\r\n              <mat-option value=\"option1\">10:10 AM</mat-option>\r\n              <mat-option value=\"option1\">10:15 AM</mat-option>\r\n              <mat-option value=\"option1\">10:20 AM</mat-option>\r\n              <mat-option value=\"option1\">10:25 AM</mat-option>\r\n              <mat-option value=\"option1\">10:30 AM</mat-option>\r\n              <mat-option value=\"option1\">10:35 AM</mat-option>\r\n              <mat-option value=\"option1\">10:40 AM</mat-option>\r\n              <mat-option value=\"option1\">10:45 AM</mat-option>\r\n              <mat-option value=\"option1\">10:50 AM</mat-option>\r\n              <mat-option value=\"option1\">10:55 AM</mat-option>\r\n\r\n              <mat-option value=\"option1\">11:00 AM</mat-option>\r\n              <mat-option value=\"option1\">11:05 AM</mat-option>\r\n              <mat-option value=\"option1\">11:10 AM</mat-option>\r\n              <mat-option value=\"option1\">11:15 AM</mat-option>\r\n              <mat-option value=\"option1\">11:20 AM</mat-option>\r\n              <mat-option value=\"option1\">11:25 AM</mat-option>\r\n              <mat-option value=\"option1\">11:30 AM</mat-option>\r\n              <mat-option value=\"option1\">11:35 AM</mat-option>\r\n              <mat-option value=\"option1\">11:40 AM</mat-option>\r\n              <mat-option value=\"option1\">11:45 AM</mat-option>\r\n              <mat-option value=\"option1\">11:50 AM</mat-option>\r\n              <mat-option value=\"option1\">11:55 AM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">12:00 PM</mat-option>\r\n              <mat-option value=\"option1\">12:05 PM</mat-option>\r\n              <mat-option value=\"option1\">12:10 PM</mat-option>\r\n              <mat-option value=\"option1\">12:15 PM</mat-option>\r\n              <mat-option value=\"option1\">12:20 PM</mat-option>\r\n              <mat-option value=\"option1\">12:25 PM</mat-option>\r\n              <mat-option value=\"option1\">12:30 PM</mat-option>\r\n              <mat-option value=\"option1\">12:35 PM</mat-option>\r\n              <mat-option value=\"option1\">12:40 PM</mat-option>\r\n              <mat-option value=\"option1\">12:45 PM</mat-option>\r\n              <mat-option value=\"option1\">12:50 PM</mat-option>\r\n              <mat-option value=\"option1\">12:55 PM</mat-option>\r\n\r\n              <mat-option value=\"option1\">01:00 PM</mat-option>\r\n              <mat-option value=\"option1\">01:05 PM</mat-option>\r\n              <mat-option value=\"option1\">01:10 PM</mat-option>\r\n              <mat-option value=\"option1\">01:15 PM</mat-option>\r\n              <mat-option value=\"option1\">01:20 PM</mat-option>\r\n              <mat-option value=\"option1\">01:25 PM</mat-option>\r\n              <mat-option value=\"option1\">01:30 PM</mat-option>\r\n              <mat-option value=\"option1\">01:35 PM</mat-option>\r\n              <mat-option value=\"option1\">01:40 PM</mat-option>\r\n              <mat-option value=\"option1\">01:45 PM</mat-option>\r\n              <mat-option value=\"option1\">01:50 PM</mat-option>\r\n              <mat-option value=\"option1\">01:55 PM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">02:00 PM</mat-option>\r\n              <mat-option value=\"option1\">02:05 PM</mat-option>\r\n              <mat-option value=\"option1\">02:10 PM</mat-option>\r\n              <mat-option value=\"option1\">02:15 PM</mat-option>\r\n              <mat-option value=\"option1\">02:20 PM</mat-option>\r\n              <mat-option value=\"option1\">02:25 PM</mat-option>\r\n              <mat-option value=\"option1\">02:30 PM</mat-option>\r\n              <mat-option value=\"option1\">02:35 PM</mat-option>\r\n              <mat-option value=\"option1\">02:40 PM</mat-option>\r\n              <mat-option value=\"option1\">02:45 PM</mat-option>\r\n              <mat-option value=\"option1\">02:50 PM</mat-option>\r\n              <mat-option value=\"option1\">02:55 PM</mat-option>\r\n\r\n              <mat-option value=\"option1\">03:00 PM</mat-option>\r\n              <mat-option value=\"option1\">03:05 PM</mat-option>\r\n              <mat-option value=\"option1\">03:10 PM</mat-option>\r\n              <mat-option value=\"option1\">03:15 PM</mat-option>\r\n              <mat-option value=\"option1\">03:20 PM</mat-option>\r\n              <mat-option value=\"option1\">03:25 PM</mat-option>\r\n              <mat-option value=\"option1\">03:30 PM</mat-option>\r\n              <mat-option value=\"option1\">03:35 PM</mat-option>\r\n              <mat-option value=\"option1\">03:40 PM</mat-option>\r\n              <mat-option value=\"option1\">03:45 PM</mat-option>\r\n              <mat-option value=\"option1\">03:50 PM</mat-option>\r\n              <mat-option value=\"option1\">03:55 PM</mat-option>\r\n\r\n              <mat-option value=\"option1\">04:00 PM</mat-option>\r\n              <mat-option value=\"option1\">04:05 PM</mat-option>\r\n              <mat-option value=\"option1\">04:10 PM</mat-option>\r\n              <mat-option value=\"option1\">04:15 PM</mat-option>\r\n              <mat-option value=\"option1\">04:20 PM</mat-option>\r\n              <mat-option value=\"option1\">04:25 PM</mat-option>\r\n              <mat-option value=\"option1\">04:30 PM</mat-option>\r\n              <mat-option value=\"option1\">04:35 PM</mat-option>\r\n              <mat-option value=\"option1\">04:40 PM</mat-option>\r\n              <mat-option value=\"option1\">04:45 PM</mat-option>\r\n              <mat-option value=\"option1\">04:50 PM</mat-option>\r\n              <mat-option value=\"option1\">04:55 PM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">05:00 PM</mat-option>\r\n              <mat-option value=\"option1\">05:05 PM</mat-option>\r\n              <mat-option value=\"option1\">05:10 PM</mat-option>\r\n              <mat-option value=\"option1\">05:15 PM</mat-option>\r\n              <mat-option value=\"option1\">05:20 PM</mat-option>\r\n              <mat-option value=\"option1\">05:25 PM</mat-option>\r\n              <mat-option value=\"option1\">05:30 PM</mat-option>\r\n              <mat-option value=\"option1\">05:35 PM</mat-option>\r\n              <mat-option value=\"option1\">05:40 PM</mat-option>\r\n              <mat-option value=\"option1\">05:45 PM</mat-option>\r\n              <mat-option value=\"option1\">05:50 PM</mat-option>\r\n              <mat-option value=\"option1\">05:55 PM</mat-option>\r\n\r\n              <mat-option value=\"option1\">06:00 PM</mat-option>\r\n              <mat-option value=\"option1\">06:05 PM</mat-option>\r\n              <mat-option value=\"option1\">06:10 PM</mat-option>\r\n              <mat-option value=\"option1\">06:15 PM</mat-option>\r\n              <mat-option value=\"option1\">06:20 PM</mat-option>\r\n              <mat-option value=\"option1\">06:25 PM</mat-option>\r\n              <mat-option value=\"option1\">06:30 PM</mat-option>\r\n              <mat-option value=\"option1\">06:35 PM</mat-option>\r\n              <mat-option value=\"option1\">06:40 PM</mat-option>\r\n              <mat-option value=\"option1\">06:45 PM</mat-option>\r\n              <mat-option value=\"option1\">06:50 PM</mat-option>\r\n              <mat-option value=\"option1\">06:55 PM</mat-option>\r\n\r\n              <mat-option value=\"option1\">07:00 PM</mat-option>\r\n              <mat-option value=\"option1\">07:05 PM</mat-option>\r\n              <mat-option value=\"option1\">07:10 PM</mat-option>\r\n              <mat-option value=\"option1\">07:15 PM</mat-option>\r\n              <mat-option value=\"option1\">07:20 PM</mat-option>\r\n              <mat-option value=\"option1\">07:25 PM</mat-option>\r\n              <mat-option value=\"option1\">07:30 PM</mat-option>\r\n              <mat-option value=\"option1\">07:35 PM</mat-option>\r\n              <mat-option value=\"option1\">07:40 PM</mat-option>\r\n              <mat-option value=\"option1\">07:45 PM</mat-option>\r\n              <mat-option value=\"option1\">07:50 PM</mat-option>\r\n              <mat-option value=\"option1\">07:55 PM</mat-option>\r\n\r\n              <mat-option value=\"option1\">08:00 PM</mat-option>\r\n              <mat-option value=\"option1\">08:05 PM</mat-option>\r\n              <mat-option value=\"option1\">08:10 PM</mat-option>\r\n              <mat-option value=\"option1\">08:15 PM</mat-option>\r\n              <mat-option value=\"option1\">08:20 PM</mat-option>\r\n              <mat-option value=\"option1\">08:25 PM</mat-option>\r\n              <mat-option value=\"option1\">08:30 PM</mat-option>\r\n              <mat-option value=\"option1\">08:35 PM</mat-option>\r\n              <mat-option value=\"option1\">08:40 PM</mat-option>\r\n              <mat-option value=\"option1\">08:45 PM</mat-option>\r\n              <mat-option value=\"option1\">08:50 PM</mat-option>\r\n              <mat-option value=\"option1\">08:55 PM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">09:00 PM</mat-option>\r\n              <mat-option value=\"option1\">09:05 PM</mat-option>\r\n              <mat-option value=\"option1\">09:10 PM</mat-option>\r\n              <mat-option value=\"option1\">09:15 PM</mat-option>\r\n              <mat-option value=\"option1\">09:20 PM</mat-option>\r\n              <mat-option value=\"option1\">09:25 PM</mat-option>\r\n              <mat-option value=\"option1\">09:30 PM</mat-option>\r\n              <mat-option value=\"option1\">09:35 PM</mat-option>\r\n              <mat-option value=\"option1\">09:40 PM</mat-option>\r\n              <mat-option value=\"option1\">09:45 PM</mat-option>\r\n              <mat-option value=\"option1\">09:50 PM</mat-option>\r\n              <mat-option value=\"option1\">09:55 PM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">10:00 PM</mat-option>\r\n              <mat-option value=\"option1\">10:05 PM</mat-option>\r\n              <mat-option value=\"option1\">10:10 PM</mat-option>\r\n              <mat-option value=\"option1\">10:15 PM</mat-option>\r\n              <mat-option value=\"option1\">10:20 PM</mat-option>\r\n              <mat-option value=\"option1\">10:25 PM</mat-option>\r\n              <mat-option value=\"option1\">10:30 PM</mat-option>\r\n              <mat-option value=\"option1\">10:35 PM</mat-option>\r\n              <mat-option value=\"option1\">10:40 PM</mat-option>\r\n              <mat-option value=\"option1\">10:45 PM</mat-option>\r\n              <mat-option value=\"option1\">10:50 PM</mat-option>\r\n              <mat-option value=\"option1\">10:55 PM</mat-option>\r\n\r\n              <mat-option value=\"option1\">11:00 PM</mat-option>\r\n              <mat-option value=\"option1\">11:05 PM</mat-option>\r\n              <mat-option value=\"option1\">11:10 PM</mat-option>\r\n              <mat-option value=\"option1\">11:15 PM</mat-option>\r\n              <mat-option value=\"option1\">11:20 PM</mat-option>\r\n              <mat-option value=\"option1\">11:25 PM</mat-option>\r\n              <mat-option value=\"option1\">11:30 PM</mat-option>\r\n              <mat-option value=\"option1\">11:35 PM</mat-option>\r\n              <mat-option value=\"option1\">11:40 PM</mat-option>\r\n              <mat-option value=\"option1\">11:45 PM</mat-option>\r\n              <mat-option value=\"option1\">11:50 PM</mat-option>\r\n              <mat-option value=\"option1\">11:55 PM</mat-option>\r\n\r\n\r\n\r\n              </mat-select>\r\n\r\n              <mat-select class='inputBy w50'>\r\n              \r\n              <mat-option value=\"option1\">12:00 AM</mat-option>\r\n              <mat-option value=\"option1\">12:05 AM</mat-option>\r\n              <mat-option value=\"option1\">12:10 AM</mat-option>\r\n              <mat-option value=\"option1\">12:15 AM</mat-option>\r\n              <mat-option value=\"option1\">12:20 AM</mat-option>\r\n              <mat-option value=\"option1\">12:25 AM</mat-option>\r\n              <mat-option value=\"option1\">12:30 AM</mat-option>\r\n              <mat-option value=\"option1\">12:35 AM</mat-option>\r\n              <mat-option value=\"option1\">12:40 AM</mat-option>\r\n              <mat-option value=\"option1\">12:45 AM</mat-option>\r\n              <mat-option value=\"option1\">12:50 AM</mat-option>\r\n              <mat-option value=\"option1\">12:55 AM</mat-option>\r\n\r\n              <mat-option value=\"option1\">01:00 AM</mat-option>\r\n              <mat-option value=\"option1\">01:05 AM</mat-option>\r\n              <mat-option value=\"option1\">01:10 AM</mat-option>\r\n              <mat-option value=\"option1\">01:15 AM</mat-option>\r\n              <mat-option value=\"option1\">01:20 AM</mat-option>\r\n              <mat-option value=\"option1\">01:25 AM</mat-option>\r\n              <mat-option value=\"option1\">01:30 AM</mat-option>\r\n              <mat-option value=\"option1\">01:35 AM</mat-option>\r\n              <mat-option value=\"option1\">01:40 AM</mat-option>\r\n              <mat-option value=\"option1\">01:45 AM</mat-option>\r\n              <mat-option value=\"option1\">01:50 AM</mat-option>\r\n              <mat-option value=\"option1\">01:55 AM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">02:00 AM</mat-option>\r\n              <mat-option value=\"option1\">02:05 AM</mat-option>\r\n              <mat-option value=\"option1\">02:10 AM</mat-option>\r\n              <mat-option value=\"option1\">02:15 AM</mat-option>\r\n              <mat-option value=\"option1\">02:20 AM</mat-option>\r\n              <mat-option value=\"option1\">02:25 AM</mat-option>\r\n              <mat-option value=\"option1\">02:30 AM</mat-option>\r\n              <mat-option value=\"option1\">02:35 AM</mat-option>\r\n              <mat-option value=\"option1\">02:40 AM</mat-option>\r\n              <mat-option value=\"option1\">02:45 AM</mat-option>\r\n              <mat-option value=\"option1\">02:50 AM</mat-option>\r\n              <mat-option value=\"option1\">02:55 AM</mat-option>\r\n\r\n              <mat-option value=\"option1\">03:00 AM</mat-option>\r\n              <mat-option value=\"option1\">03:05 AM</mat-option>\r\n              <mat-option value=\"option1\">03:10 AM</mat-option>\r\n              <mat-option value=\"option1\">03:15 AM</mat-option>\r\n              <mat-option value=\"option1\">03:20 AM</mat-option>\r\n              <mat-option value=\"option1\">03:25 AM</mat-option>\r\n              <mat-option value=\"option1\">03:30 AM</mat-option>\r\n              <mat-option value=\"option1\">03:35 AM</mat-option>\r\n              <mat-option value=\"option1\">03:40 AM</mat-option>\r\n              <mat-option value=\"option1\">03:45 AM</mat-option>\r\n              <mat-option value=\"option1\">03:50 AM</mat-option>\r\n              <mat-option value=\"option1\">03:55 AM</mat-option>\r\n\r\n              <mat-option value=\"option1\">04:00 AM</mat-option>\r\n              <mat-option value=\"option1\">04:05 AM</mat-option>\r\n              <mat-option value=\"option1\">04:10 AM</mat-option>\r\n              <mat-option value=\"option1\">04:15 AM</mat-option>\r\n              <mat-option value=\"option1\">04:20 AM</mat-option>\r\n              <mat-option value=\"option1\">04:25 AM</mat-option>\r\n              <mat-option value=\"option1\">04:30 AM</mat-option>\r\n              <mat-option value=\"option1\">04:35 AM</mat-option>\r\n              <mat-option value=\"option1\">04:40 AM</mat-option>\r\n              <mat-option value=\"option1\">04:45 AM</mat-option>\r\n              <mat-option value=\"option1\">04:50 AM</mat-option>\r\n              <mat-option value=\"option1\">04:55 AM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">05:00 AM</mat-option>\r\n              <mat-option value=\"option1\">05:05 AM</mat-option>\r\n              <mat-option value=\"option1\">05:10 AM</mat-option>\r\n              <mat-option value=\"option1\">05:15 AM</mat-option>\r\n              <mat-option value=\"option1\">05:20 AM</mat-option>\r\n              <mat-option value=\"option1\">05:25 AM</mat-option>\r\n              <mat-option value=\"option1\">05:30 AM</mat-option>\r\n              <mat-option value=\"option1\">05:35 AM</mat-option>\r\n              <mat-option value=\"option1\">05:40 AM</mat-option>\r\n              <mat-option value=\"option1\">05:45 AM</mat-option>\r\n              <mat-option value=\"option1\">05:50 AM</mat-option>\r\n              <mat-option value=\"option1\">05:55 AM</mat-option>\r\n\r\n              <mat-option value=\"option1\">06:00 AM</mat-option>\r\n              <mat-option value=\"option1\">06:05 AM</mat-option>\r\n              <mat-option value=\"option1\">06:10 AM</mat-option>\r\n              <mat-option value=\"option1\">06:15 AM</mat-option>\r\n              <mat-option value=\"option1\">06:20 AM</mat-option>\r\n              <mat-option value=\"option1\">06:25 AM</mat-option>\r\n              <mat-option value=\"option1\">06:30 AM</mat-option>\r\n              <mat-option value=\"option1\">06:35 AM</mat-option>\r\n              <mat-option value=\"option1\">06:40 AM</mat-option>\r\n              <mat-option value=\"option1\">06:45 AM</mat-option>\r\n              <mat-option value=\"option1\">06:50 AM</mat-option>\r\n              <mat-option value=\"option1\">06:55 AM</mat-option>\r\n\r\n              <mat-option value=\"option1\">07:00 AM</mat-option>\r\n              <mat-option value=\"option1\">07:05 AM</mat-option>\r\n              <mat-option value=\"option1\">07:10 AM</mat-option>\r\n              <mat-option value=\"option1\">07:15 AM</mat-option>\r\n              <mat-option value=\"option1\">07:20 AM</mat-option>\r\n              <mat-option value=\"option1\">07:25 AM</mat-option>\r\n              <mat-option value=\"option1\">07:30 AM</mat-option>\r\n              <mat-option value=\"option1\">07:35 AM</mat-option>\r\n              <mat-option value=\"option1\">07:40 AM</mat-option>\r\n              <mat-option value=\"option1\">07:45 AM</mat-option>\r\n              <mat-option value=\"option1\">07:50 AM</mat-option>\r\n              <mat-option value=\"option1\">07:55 AM</mat-option>\r\n\r\n              <mat-option value=\"option1\">08:00 AM</mat-option>\r\n              <mat-option value=\"option1\">08:05 AM</mat-option>\r\n              <mat-option value=\"option1\">08:10 AM</mat-option>\r\n              <mat-option value=\"option1\">08:15 AM</mat-option>\r\n              <mat-option value=\"option1\">08:20 AM</mat-option>\r\n              <mat-option value=\"option1\">08:25 AM</mat-option>\r\n              <mat-option value=\"option1\">08:30 AM</mat-option>\r\n              <mat-option value=\"option1\">08:35 AM</mat-option>\r\n              <mat-option value=\"option1\">08:40 AM</mat-option>\r\n              <mat-option value=\"option1\">08:45 AM</mat-option>\r\n              <mat-option value=\"option1\">08:50 AM</mat-option>\r\n              <mat-option value=\"option1\">08:55 AM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">09:00 AM</mat-option>\r\n              <mat-option value=\"option1\">09:05 AM</mat-option>\r\n              <mat-option value=\"option1\">09:10 AM</mat-option>\r\n              <mat-option value=\"option1\">09:15 AM</mat-option>\r\n              <mat-option value=\"option1\">09:20 AM</mat-option>\r\n              <mat-option value=\"option1\">09:25 AM</mat-option>\r\n              <mat-option value=\"option1\">09:30 AM</mat-option>\r\n              <mat-option value=\"option1\">09:35 AM</mat-option>\r\n              <mat-option value=\"option1\">09:40 AM</mat-option>\r\n              <mat-option value=\"option1\">09:45 AM</mat-option>\r\n              <mat-option value=\"option1\">09:50 AM</mat-option>\r\n              <mat-option value=\"option1\">09:55 AM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">10:00 AM</mat-option>\r\n              <mat-option value=\"option1\">10:05 AM</mat-option>\r\n              <mat-option value=\"option1\">10:10 AM</mat-option>\r\n              <mat-option value=\"option1\">10:15 AM</mat-option>\r\n              <mat-option value=\"option1\">10:20 AM</mat-option>\r\n              <mat-option value=\"option1\">10:25 AM</mat-option>\r\n              <mat-option value=\"option1\">10:30 AM</mat-option>\r\n              <mat-option value=\"option1\">10:35 AM</mat-option>\r\n              <mat-option value=\"option1\">10:40 AM</mat-option>\r\n              <mat-option value=\"option1\">10:45 AM</mat-option>\r\n              <mat-option value=\"option1\">10:50 AM</mat-option>\r\n              <mat-option value=\"option1\">10:55 AM</mat-option>\r\n\r\n              <mat-option value=\"option1\">11:00 AM</mat-option>\r\n              <mat-option value=\"option1\">11:05 AM</mat-option>\r\n              <mat-option value=\"option1\">11:10 AM</mat-option>\r\n              <mat-option value=\"option1\">11:15 AM</mat-option>\r\n              <mat-option value=\"option1\">11:20 AM</mat-option>\r\n              <mat-option value=\"option1\">11:25 AM</mat-option>\r\n              <mat-option value=\"option1\">11:30 AM</mat-option>\r\n              <mat-option value=\"option1\">11:35 AM</mat-option>\r\n              <mat-option value=\"option1\">11:40 AM</mat-option>\r\n              <mat-option value=\"option1\">11:45 AM</mat-option>\r\n              <mat-option value=\"option1\">11:50 AM</mat-option>\r\n              <mat-option value=\"option1\">11:55 AM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">12:00 PM</mat-option>\r\n              <mat-option value=\"option1\">12:05 PM</mat-option>\r\n              <mat-option value=\"option1\">12:10 PM</mat-option>\r\n              <mat-option value=\"option1\">12:15 PM</mat-option>\r\n              <mat-option value=\"option1\">12:20 PM</mat-option>\r\n              <mat-option value=\"option1\">12:25 PM</mat-option>\r\n              <mat-option value=\"option1\">12:30 PM</mat-option>\r\n              <mat-option value=\"option1\">12:35 PM</mat-option>\r\n              <mat-option value=\"option1\">12:40 PM</mat-option>\r\n              <mat-option value=\"option1\">12:45 PM</mat-option>\r\n              <mat-option value=\"option1\">12:50 PM</mat-option>\r\n              <mat-option value=\"option1\">12:55 PM</mat-option>\r\n\r\n              <mat-option value=\"option1\">01:00 PM</mat-option>\r\n              <mat-option value=\"option1\">01:05 PM</mat-option>\r\n              <mat-option value=\"option1\">01:10 PM</mat-option>\r\n              <mat-option value=\"option1\">01:15 PM</mat-option>\r\n              <mat-option value=\"option1\">01:20 PM</mat-option>\r\n              <mat-option value=\"option1\">01:25 PM</mat-option>\r\n              <mat-option value=\"option1\">01:30 PM</mat-option>\r\n              <mat-option value=\"option1\">01:35 PM</mat-option>\r\n              <mat-option value=\"option1\">01:40 PM</mat-option>\r\n              <mat-option value=\"option1\">01:45 PM</mat-option>\r\n              <mat-option value=\"option1\">01:50 PM</mat-option>\r\n              <mat-option value=\"option1\">01:55 PM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">02:00 PM</mat-option>\r\n              <mat-option value=\"option1\">02:05 PM</mat-option>\r\n              <mat-option value=\"option1\">02:10 PM</mat-option>\r\n              <mat-option value=\"option1\">02:15 PM</mat-option>\r\n              <mat-option value=\"option1\">02:20 PM</mat-option>\r\n              <mat-option value=\"option1\">02:25 PM</mat-option>\r\n              <mat-option value=\"option1\">02:30 PM</mat-option>\r\n              <mat-option value=\"option1\">02:35 PM</mat-option>\r\n              <mat-option value=\"option1\">02:40 PM</mat-option>\r\n              <mat-option value=\"option1\">02:45 PM</mat-option>\r\n              <mat-option value=\"option1\">02:50 PM</mat-option>\r\n              <mat-option value=\"option1\">02:55 PM</mat-option>\r\n\r\n              <mat-option value=\"option1\">03:00 PM</mat-option>\r\n              <mat-option value=\"option1\">03:05 PM</mat-option>\r\n              <mat-option value=\"option1\">03:10 PM</mat-option>\r\n              <mat-option value=\"option1\">03:15 PM</mat-option>\r\n              <mat-option value=\"option1\">03:20 PM</mat-option>\r\n              <mat-option value=\"option1\">03:25 PM</mat-option>\r\n              <mat-option value=\"option1\">03:30 PM</mat-option>\r\n              <mat-option value=\"option1\">03:35 PM</mat-option>\r\n              <mat-option value=\"option1\">03:40 PM</mat-option>\r\n              <mat-option value=\"option1\">03:45 PM</mat-option>\r\n              <mat-option value=\"option1\">03:50 PM</mat-option>\r\n              <mat-option value=\"option1\">03:55 PM</mat-option>\r\n\r\n              <mat-option value=\"option1\">04:00 PM</mat-option>\r\n              <mat-option value=\"option1\">04:05 PM</mat-option>\r\n              <mat-option value=\"option1\">04:10 PM</mat-option>\r\n              <mat-option value=\"option1\">04:15 PM</mat-option>\r\n              <mat-option value=\"option1\">04:20 PM</mat-option>\r\n              <mat-option value=\"option1\">04:25 PM</mat-option>\r\n              <mat-option value=\"option1\">04:30 PM</mat-option>\r\n              <mat-option value=\"option1\">04:35 PM</mat-option>\r\n              <mat-option value=\"option1\">04:40 PM</mat-option>\r\n              <mat-option value=\"option1\">04:45 PM</mat-option>\r\n              <mat-option value=\"option1\">04:50 PM</mat-option>\r\n              <mat-option value=\"option1\">04:55 PM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">05:00 PM</mat-option>\r\n              <mat-option value=\"option1\">05:05 PM</mat-option>\r\n              <mat-option value=\"option1\">05:10 PM</mat-option>\r\n              <mat-option value=\"option1\">05:15 PM</mat-option>\r\n              <mat-option value=\"option1\">05:20 PM</mat-option>\r\n              <mat-option value=\"option1\">05:25 PM</mat-option>\r\n              <mat-option value=\"option1\">05:30 PM</mat-option>\r\n              <mat-option value=\"option1\">05:35 PM</mat-option>\r\n              <mat-option value=\"option1\">05:40 PM</mat-option>\r\n              <mat-option value=\"option1\">05:45 PM</mat-option>\r\n              <mat-option value=\"option1\">05:50 PM</mat-option>\r\n              <mat-option value=\"option1\">05:55 PM</mat-option>\r\n\r\n              <mat-option value=\"option1\">06:00 PM</mat-option>\r\n              <mat-option value=\"option1\">06:05 PM</mat-option>\r\n              <mat-option value=\"option1\">06:10 PM</mat-option>\r\n              <mat-option value=\"option1\">06:15 PM</mat-option>\r\n              <mat-option value=\"option1\">06:20 PM</mat-option>\r\n              <mat-option value=\"option1\">06:25 PM</mat-option>\r\n              <mat-option value=\"option1\">06:30 PM</mat-option>\r\n              <mat-option value=\"option1\">06:35 PM</mat-option>\r\n              <mat-option value=\"option1\">06:40 PM</mat-option>\r\n              <mat-option value=\"option1\">06:45 PM</mat-option>\r\n              <mat-option value=\"option1\">06:50 PM</mat-option>\r\n              <mat-option value=\"option1\">06:55 PM</mat-option>\r\n\r\n              <mat-option value=\"option1\">07:00 PM</mat-option>\r\n              <mat-option value=\"option1\">07:05 PM</mat-option>\r\n              <mat-option value=\"option1\">07:10 PM</mat-option>\r\n              <mat-option value=\"option1\">07:15 PM</mat-option>\r\n              <mat-option value=\"option1\">07:20 PM</mat-option>\r\n              <mat-option value=\"option1\">07:25 PM</mat-option>\r\n              <mat-option value=\"option1\">07:30 PM</mat-option>\r\n              <mat-option value=\"option1\">07:35 PM</mat-option>\r\n              <mat-option value=\"option1\">07:40 PM</mat-option>\r\n              <mat-option value=\"option1\">07:45 PM</mat-option>\r\n              <mat-option value=\"option1\">07:50 PM</mat-option>\r\n              <mat-option value=\"option1\">07:55 PM</mat-option>\r\n\r\n              <mat-option value=\"option1\">08:00 PM</mat-option>\r\n              <mat-option value=\"option1\">08:05 PM</mat-option>\r\n              <mat-option value=\"option1\">08:10 PM</mat-option>\r\n              <mat-option value=\"option1\">08:15 PM</mat-option>\r\n              <mat-option value=\"option1\">08:20 PM</mat-option>\r\n              <mat-option value=\"option1\">08:25 PM</mat-option>\r\n              <mat-option value=\"option1\">08:30 PM</mat-option>\r\n              <mat-option value=\"option1\">08:35 PM</mat-option>\r\n              <mat-option value=\"option1\">08:40 PM</mat-option>\r\n              <mat-option value=\"option1\">08:45 PM</mat-option>\r\n              <mat-option value=\"option1\">08:50 PM</mat-option>\r\n              <mat-option value=\"option1\">08:55 PM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">09:00 PM</mat-option>\r\n              <mat-option value=\"option1\">09:05 PM</mat-option>\r\n              <mat-option value=\"option1\">09:10 PM</mat-option>\r\n              <mat-option value=\"option1\">09:15 PM</mat-option>\r\n              <mat-option value=\"option1\">09:20 PM</mat-option>\r\n              <mat-option value=\"option1\">09:25 PM</mat-option>\r\n              <mat-option value=\"option1\">09:30 PM</mat-option>\r\n              <mat-option value=\"option1\">09:35 PM</mat-option>\r\n              <mat-option value=\"option1\">09:40 PM</mat-option>\r\n              <mat-option value=\"option1\">09:45 PM</mat-option>\r\n              <mat-option value=\"option1\">09:50 PM</mat-option>\r\n              <mat-option value=\"option1\">09:55 PM</mat-option>\r\n\r\n\r\n              <mat-option value=\"option1\">10:00 PM</mat-option>\r\n              <mat-option value=\"option1\">10:05 PM</mat-option>\r\n              <mat-option value=\"option1\">10:10 PM</mat-option>\r\n              <mat-option value=\"option1\">10:15 PM</mat-option>\r\n              <mat-option value=\"option1\">10:20 PM</mat-option>\r\n              <mat-option value=\"option1\">10:25 PM</mat-option>\r\n              <mat-option value=\"option1\">10:30 PM</mat-option>\r\n              <mat-option value=\"option1\">10:35 PM</mat-option>\r\n              <mat-option value=\"option1\">10:40 PM</mat-option>\r\n              <mat-option value=\"option1\">10:45 PM</mat-option>\r\n              <mat-option value=\"option1\">10:50 PM</mat-option>\r\n              <mat-option value=\"option1\">10:55 PM</mat-option>\r\n\r\n              <mat-option value=\"option1\">11:00 PM</mat-option>\r\n              <mat-option value=\"option1\">11:05 PM</mat-option>\r\n              <mat-option value=\"option1\">11:10 PM</mat-option>\r\n              <mat-option value=\"option1\">11:15 PM</mat-option>\r\n              <mat-option value=\"option1\">11:20 PM</mat-option>\r\n              <mat-option value=\"option1\">11:25 PM</mat-option>\r\n              <mat-option value=\"option1\">11:30 PM</mat-option>\r\n              <mat-option value=\"option1\">11:35 PM</mat-option>\r\n              <mat-option value=\"option1\">11:40 PM</mat-option>\r\n              <mat-option value=\"option1\">11:45 PM</mat-option>\r\n              <mat-option value=\"option1\">11:50 PM</mat-option>\r\n              <mat-option value=\"option1\">11:55 PM</mat-option>\r\n              </mat-select>\r\n              </div>\r\n</div>\r\n              </div>  \r\n          \r\n            </div>\r\n          </div>\r\n  \r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\">Guardar</button>\r\n\r\n      </div>\r\n    </ng-template>\r\n\r\n\r\n<!--\r\n<div class=\"m-login__signin\">\r\n\t<div class=\"m-login__title\">\r\n\t\t<h3 class=\"m-login__title\">Sign Up</h3>\r\n\t\t<div class=\"m-login__desc\">Enter your details to create your account:</div>\r\n\t</div>\r\n\r\n\t<m-auth-notice></m-auth-notice>\r\n\r\n\r\n\t<form class=\"m-login__form m-form\" name=\"form\" (ngSubmit)=\"f.form.valid && submit()\" #f=\"ngForm\" novalidate>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<mat-label>Fullname</mat-label>\r\n\t\t\t\t<input matInput type=\"text\" name=\"fullname\" placeholder=\"Fullname\" autocomplete=\"off\" [(ngModel)]=\"model.fullname\" #fullname=\"ngModel\" required>\r\n\t\t\t</mat-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<mat-label>Email</mat-label>\r\n\t\t\t\t<input matInput type=\"email\" name=\"email\" placeholder=\"Email address\" autocomplete=\"off\" [(ngModel)]=\"model.email\" #email=\"ngModel\" email=\"true\" required>\r\n\t\t\t</mat-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<mat-label>Password</mat-label>\r\n\t\t\t\t<input matInput minlength=\"4\" type=\"password\" name=\"password\" placeholder=\"Password\" autocomplete=\"off\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required>\r\n\t\t\t</mat-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<mat-label>Confirm Password</mat-label>\r\n\t\t\t\t<input matInput minlength=\"4\" type=\"password\" name=\"rpassword\" placeholder=\"Confirm password\" autocomplete=\"off\" [(ngModel)]=\"model.rpassword\" #rpassword=\"ngModel\" required>\r\n\t\t\t</mat-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<mat-checkbox name=\"agree\" required=\"true\" [(ngModel)]=\"model.agree\" #agree=\"ngModel\">I agree the\r\n\t\t\t\t<a href=\"javascript:;\">terms & conditions</a>\r\n\t\t\t</mat-checkbox>\r\n\t\t</div>\r\n\t</form>\r\n\r\n\t<div class=\"m-login__action m-login__action--fit\">\r\n\t\t<button mat-button (click)=\"loginPage($event)\" [disabled]=\"loading\" translate=\"AUTH.GENERAL.BACK_BUTTON\">Back</button>\r\n\t\t<m-spinner-button [options]=\"spinner\" (click)=\"submit()\">{{'AUTH.GENERAL.SIGNUP_BUTTON' | translate}}</m-spinner-button>\r\n\t</div>\r\n\r\n</div>\r\n-->\r\n\r\n<div >\r\n\t\r\n\r\n\t<div class=\"row  m-subheader\" style=\"background: rgb(250,249,247) !important;\r\n    padding: 20px !important;\r\ntext-align: left !important;\r\nborder-bottom: solid 1px lightgray;    display: block;\">\r\n\t\r\n\r\n\t<i (click)='goBack()' style=\"font-size: 25px;\r\n    color: lightgray;\r\n    padding-left: 10px;\" class=\"la la-angle-left\"></i>\r\n<!-- \t<div class=\"\" style=\"display: inline-block;font-size: 30px;font-weight: 300;padding-left: 15px;\">Editar Staff</div> -->\r\n\r\n\r\n\t\t\t<div style=\"width: 20%;\r\n    text-align: center;display: table!important;float: none!important;margin-right: auto!important;margin-left: auto!important;\">\r\n\t\t\t\t\t<span style=\"    color: #8c8b88;\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    margin-bottom: 9px;\r\n    display: inline-block;\">Cuenta YourBeauty</span>\r\n<!-- \r\n\r\n\t\t\t\t\t<div style=\"    background: #e1e1e1;\r\n    height: 4px;\r\n    width: 100%;\"></div> -->\r\n\r\n      <ngb-progressbar type=\"success\" [value]=\"avanceSteper\">\r\n\r\n    </ngb-progressbar>\r\n\r\n    <div style=\"    color: #8c8b88;\r\n    font-size: 14px;\r\n    margin-top: 2px;\">{{avanceSteper}}%</div>\r\n\r\n\t\t\t</div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t\r\n     <ngx-loading [show]=\"loadingScreen\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\r\n<!-- <button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\r\n  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\r\n</button> -->\r\n<mat-horizontal-stepper  color=\"warn\" [linear]=\"true\" #stepper style='width: 80%;\r\n    margin-left: 10%; margin-top: 40px'>\r\n\r\n\r\n\r\n\r\n  <mat-step [stepControl]=\"firstFormGroup\" >\r\n\r\n\r\n  \t<div style='max-width: 600px;\r\n    margin: auto;'>\r\n\r\n\r\n    <div style=\"text-align: center;  padding: 40px;padding-top: 50px !important\">\r\n    \t<span style=\"color: #383734;    font-size: 24px;\r\n    font-weight: 300;\r\n    line-height: 34px;\r\n    margin-bottom: 10px;\">Empieza tu prueba gratuita ahora\r\n\r\n</span><br>\r\n<span style=\"color: #605f5d;font-size: 16px\">\r\nSin tarjeta de crédito o compromisos. Solo toma 2 minutos\r\n</span>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <form [formGroup]=\"firstFormGroup\" >\r\n     \r\n\r\n\r\n     <mat-form-field  color=\"primary\" style='font-size: 16px !important;'>\r\n        <input style='  padding: 10px !important;' matInput placeholder=\"Nombre del negocio\" formControlName=\"nombreNegocio\" required>\r\n         <mat-label><mat-icon style='  vertical-align: middle;  font-size: 25px !important;'>store</mat-icon>Cual es el nombre de tu negocio?</mat-label>\r\n      </mat-form-field>\r\n\r\n\r\n\r\n      <mat-form-field style='      font-size: 16px !important;\r\n    '>\r\n        <input style='  padding: 10px !important;' matInput placeholder=\"Nombre y Apellidos\" formControlName=\"nombreUsuario\" required>\r\n         <mat-label><mat-icon style='  vertical-align: middle;  font-size: 25px !important;'>person</mat-icon>¿Cuál es tu nombre?</mat-label>\r\n      </mat-form-field>\r\n\r\n\r\n\r\n      <mat-form-field style='      font-size: 16px !important;\r\n    '>\r\n        <input style='  padding: 10px !important;' matInput placeholder=\"Correo Electronico\" formControlName=\"correoElectronico\" type='email' required>\r\n         <mat-label><mat-icon style='  vertical-align: middle;  font-size: 25px !important;'>email</mat-icon>¿Cúal es tu correo electrónico?</mat-label>\r\n      </mat-form-field>\r\n\r\n\r\n\r\n      <mat-form-field style='      font-size: 16px !important;\r\n    '>\r\n        <input style='  padding: 10px !important;' matInput placeholder=\"Contraseña\" formControlName=\"password\" required>\r\n         <mat-label><mat-icon style='  vertical-align: middle;  font-size: 25px !important;'>vpn_key</mat-icon>Indica la contraseña de tu cuenta</mat-label>\r\n      </mat-form-field>\r\n\r\n\r\n\r\n      <div style=\"  margin-top: 40px;  text-align: center;\">\r\n\r\n        <button style='    width: 80%;    height: 40px;' class='btn btn-success'  mat-raised-button color=\"primary\"(click)=\"goForward(stepper)\" >Crear cuenta YourBeauty</button>\r\n\r\n\r\n      </div>\r\n    </form>\r\n</div>\r\n  </mat-step>\r\n\r\n\r\n\r\n\r\n\r\n  <mat-step >\r\n  \t\r\n\r\n  \t<div style='max-width: 600px;\r\n    margin: auto;'>\r\n\r\n\r\n    <div style=\"text-align: center;  padding: 40px;padding-top: 50px !important\">\r\n    \t<span style=\"color: #383734;    font-size: 24px;\r\n    font-weight: 300;\r\n    line-height: 34px;\r\n    margin-bottom: 10px;\">Bien Hecho!\r\n\r\n</span><br>\r\n<span style=\"color: #605f5d; font-size: 16px\">\r\nAgrega unos detalles más para que empieces a agendar citas.\r\n</span>\r\n\r\n    </div>\r\n\r\n<div class=\"containerStaff\"> \r\n\t\r\n\t<span>Agrega Staff a tu cuenta</span>\r\n\t<hr style=\"    margin-bottom: 20px;\">\r\n\r\n  <div style=\"    margin-bottom: 20px;\" *ngFor=\"let s of empleadosAgregados; let i = index\">\r\n    \r\n    <mat-card style='    padding: 0px !important;box-shadow: none !important;border-bottom: solid 1px #e1e1e1;' class=\"example-card\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar style=\"    background-size: cover;background-image: url('assets/app/media/img/userB.png');\"></div>\r\n    <mat-card-title style='    margin-bottom: 8px !important;'>{{s.nombre}}</mat-card-title>\r\n    <mat-card-subtitle>{{s.tipo == 1 ? 'Administrador' : 'Miembro del Staff'}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n     <a  style='position: absolute;right: 0;top: 9px;' (click)='editStaff(s,i,content)' class=\"botonTxt\">Editar</a>\r\n</mat-card>\r\n\r\n\r\n  </div>\r\n\r\n\r\n<!--     <div style=\"    margin-bottom: 20px;\">\r\n    \r\n    <mat-card style='    padding: 0px !important;box-shadow: none !important;border-bottom: solid 1px #e1e1e1;' class=\"example-card\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar style=\"background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\"></div>\r\n    <mat-card-title style='    margin-bottom: 8px !important;'>Shiba Inu</mat-card-title>\r\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n  </mat-card-header>\r\n     <a  style='position: absolute;right: 0;top: 9px;' class=\"botonTxt\">Editar</a>\r\n</mat-card>\r\n\r\n\r\n  </div> -->\r\n\r\n <a (click)=\"open3(content)\" class=\"botonTxt\" style=\"font-size: 16px !important\"> + Agregar miembro del Staff</a>\r\n\r\n\r\n      <div style=\"  margin-top: 40px;  text-align: center;\">\r\n\r\n        <button style='    width: 80%;    height: 40px;' class='btn '  mat-raised-button color=\"primary\"  (click)=\"goForward2(stepper)\">Continuar</button>\r\n\r\n\r\n      </div>\r\n\r\n</div>\r\n\r\n\r\n</div>\r\n  </mat-step>\r\n\r\n\r\n  <mat-step [stepControl]=\"infoFormGroup\" >\r\n    <div style='max-width: 600px;\r\n    margin: auto;'>\r\n\r\n\r\n    <div style=\"text-align: center;  padding: 40px;padding-top: 50px !important\">\r\n      <span style=\"color: #383734;    font-size: 24px;\r\n    font-weight: 300;\r\n    line-height: 34px;\r\n    margin-bottom: 10px;\">Ayuda a tus clientes a encontrarte\r\n\r\n</span><br>\r\n<span style=\"color: #605f5d;font-size: 16px\">\r\nIngresa los detalles de contacto de tu negocio\r\n</span>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <form [formGroup]=\"infoFormGroup\"  #f2=\"ngForm\" >\r\n      <ng-template matStepLabel>Informacion del Negocio</ng-template>\r\n\r\n\r\n     <mat-form-field  color=\"primary\" style='font-size: 16px !important;'>\r\n        <input style='  padding: 10px !important;' matInput placeholder=\"Telefono del Negocio\" formControlName=\"telefonoNegocio\" required>\r\n         <mat-label><mat-icon style='  vertical-align: middle;  font-size: 25px !important;'>phone</mat-icon>¿Cuál es el teléfono de tu negocio?</mat-label>\r\n      </mat-form-field>\r\n\r\n\r\n\r\n      <mat-form-field style='      font-size: 16px !important;\r\n    '>\r\n        <input style='  padding: 10px !important;' matInput placeholder=\"www.mysite.com\" formControlName=\"webUsuario\" required>\r\n         <mat-label><mat-icon style='  vertical-align: middle;  font-size: 25px !important;'>public</mat-icon>¿Cuál es tu sitio web?</mat-label>\r\n      </mat-form-field>\r\n\r\n      <div (click)=\"openDialog4()\" class='itemHover'  style=\"  \r\n    border-bottom: solid 1px #e1e1e1;\r\n    \">\r\n\r\n        <mat-icon style='    float: right;\r\n    font-size: 30px !important;'>navigate_next</mat-icon>\r\n\r\n        <mat-icon style='  vertical-align: middle;  font-size: 25px !important;'>location_on</mat-icon>\r\n        <span *ngIf='!direccionText'>Ingresa la ubicación de tu negocio</span>\r\n        <span *ngIf='direccionText'>{{direccionText}}</span>\r\n      </div>\r\n\r\n      <div class='itemHover'  (click)=\"openDialog3()\" style=\"padding-top: 23px;\">\r\n         <mat-icon style='    float: right;\r\n    font-size: 30px !important;'>navigate_next</mat-icon>\r\n        <mat-icon style='  vertical-align: middle;  font-size: 25px !important;'>access_time</mat-icon>\r\n        <span>Selecciona tu Horario</span>\r\n      </div>\r\n\r\n\r\n      <div style=\"  margin-top: 40px;  text-align: center;\">\r\n\r\n        <button style='    width: 80%;    height: 40px;' class='btn btn-success'  mat-raised-button color=\"primary\"  [disabled]='!f2.form.valid' (click)=\"goForward3(stepper)\">Continuar</button>\r\n\r\n\r\n      </div>\r\n    </form>\r\n</div>\r\n  </mat-step>\r\n\r\n\r\n\r\n  <mat-step  >\r\n  \r\n    <div style='max-width: 600px;\r\n    margin: auto;'>\r\n\r\n\r\n    <div style=\"text-align: center;  padding: 40px;padding-top: 50px !important\">\r\n      <span style=\"color: #383734;    font-size: 24px;\r\n    font-weight: 300;\r\n    line-height: 34px;\r\n    margin-bottom: 10px;\">Agrega una foto de tu establecimiento\r\n\r\n</span><br>\r\n<span style=\"color: #605f5d;font-size: 16px\">\r\nConsigue clientes reservando con confianza\r\n</span>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div style=\"font-size: 15px; color:#777\">\r\n      <mat-icon style='vertical-align: text-bottom;font-size: 25px !important;'>photo</mat-icon>\r\n      <p style=\"margin-bottom: 4px;\r\n    display: inline-block;\">Foto de Portada</p>\r\n      <p>Es opcional, pero muy recomendado</p>\r\n      <p style=\"font-weight: 600\">Dimensiones recomendadas: 375×230</p>\r\n      \r\n\r\n      <div style=\"text-align: center;\">\r\n      <img style=\"border-style: dashed;height: 230px; width: 375px\"  [src]=\"urlImg\">\r\n      <input style='margin-top: 20px;' type=\"file\" (change)=\"onFileChanged($event)\">\r\n      </div>\r\n    </div>\r\n\r\n\r\n      <div style=\"  margin-top: 40px;  text-align: center;\">\r\n\r\n        <button style='    width: 80%;    height: 40px;' class='btn btn-success'  mat-raised-button color=\"primary\"  (click)=\"goForward4(stepper)\">Continuar</button>\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n</div>\r\n  </mat-step>\r\n\r\n\r\n\r\n\r\n\r\n  <mat-step >\r\n\r\n\r\n    <div style='max-width: 600px;\r\n    margin: auto;'>\r\n\r\n\r\n    <div style=\"text-align: center;  padding: 40px;padding-top: 50px !important\">\r\n      <span style=\"color: #383734;    font-size: 24px;\r\n    font-weight: 300;\r\n    line-height: 34px;\r\n    margin-bottom: 10px;\">Agrega tus servicios y precios.\r\n\r\n</span><br>\r\n<span style=\"color: #605f5d;font-size: 16px\">\r\nNecesitas al menos un servicio activo para que los clientes pueda realizar una cita con tu establecimiento.\r\n</span>\r\n\r\n    </div>\r\n\r\n\r\n<!-- \r\n    <div style=\"font-size: 16px\">\r\n\r\n          <div style=\"text-align: center;color: darkgray;margin-bottom: 12px;\"> Servicio ejemplo</div>\r\n          <div class=\"itemServicios\" style=\"opacity: 0.5;\">\r\n          <div class=\"boxItem\">\r\n            <i class=\"la  la-angle-right iconR\"></i>\r\n            <div class=\"txtItemServ\">\r\n              <h3 style=\"     margin-bottom: 0px;font-size: 16px !important;   color: #5f5d5b;\">Corte y Estilo</h3>\r\n              <p style=\"    margin-bottom: 0px;color: #989794;font-size: 12px;\">\r\n                Peluqueria / Cortes de Mujer\r\n              </p>\r\n            </div>\r\n            <div class=\"txtItemServP\">30min</div>\r\n            <div class=\"txtItemServP\">$45.00</div>\r\n          </div>\r\n        </div>\r\n\r\n    </div> -->\r\n    <div style=\"text-align: center;\r\n    padding: 18px;\">\r\n       <a (click)='openDialogService()'  class=\"botonTxt\" style=\"font-size: 16px !important\"> + Agregar Servicio</a>\r\n    </div>\r\n\r\n\r\n          <div  class=\"itemServicios\"  *ngFor=\"let s of serviciosAgregados; let i = index\" >\r\n\r\n          <div class=\"boxItem\">\r\n            <i (click)='eliminarS(i)' style='height: 30px;\r\n    width: 19px;' class=\"la  la-close iconR\"></i>\r\n            <div class=\"txtItemServ\">\r\n              <h3 style=\"     margin-bottom: 0px;font-size: 16px !important;   color: #5f5d5b;\">\r\n              {{s.nombreServicio}}\r\n              </h3>\r\n              <p style=\"    margin-bottom: 0px;color: #989794;font-size: 12px;\">\r\n                {{s.categoriaName}} / {{s.subcategoriaName}} \r\n              </p>\r\n            </div>\r\n            <div class=\"txtItemServP\">\r\n              <span [hidden]='!s.horaServicio' >{{s.horaServicio/60}}h</span>\r\n              <span style=\"margin-left: 10px;\" [hidden]='!s.minutoServicio'>{{s.minutoServicio}}min</span></div>\r\n            <div class=\"txtItemServP\">${{s.precioServicio}}</div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      <div style=\"  margin-top: 40px;  text-align: center;\">\r\n\r\n        <button style='    width: 80%;    height: 40px;' class='btn '  mat-raised-button color=\"primary\" (click)=\"goForward5(stepper)\" [disabled]='!serviciosAgregados || serviciosAgregados.length<1'>Continuar</button>\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n</div>\r\n  </mat-step>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <mat-step  >\r\n        \r\n\r\n    <div style='max-width: 600px;\r\n    margin: auto;'>\r\n\r\n\r\n    <div style=\"text-align: center;  padding: 40px;padding-top: 50px !important\">\r\n      <span style=\"color: #383734;    font-size: 24px;\r\n    font-weight: 300;\r\n    line-height: 34px;\r\n    margin-bottom: 10px;\">Configuracion de Citas\r\n\r\n</span><br>\r\n<span style=\"color: #605f5d;font-size: 16px\">\r\nAjusta los valores para la configuracion de tus citas\r\n</span>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <form  >\r\n \r\n    <div style=\"    padding: 0px 0px 20px 0px;\">\r\n<!--     <mat-slide-toggle [(ngModel)]=\"isHuman2\" (change)=\"onChange2($event)\" name=\"human2\">I am not a robot</mat-slide-toggle> -->\r\n\r\n    <mat-slide-toggle name=\"human2\">\r\n      <span style=\"font-size: 16px !important;\">\r\n        Las citas serán confirmadas automaticamente\r\n      </span>\r\n      </mat-slide-toggle>\r\n\r\n\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <div style=\"color: #383734;font-size: 19px;font-weight: 400; line-height: 34px;margin-bottom: 30px;\">Configuraciones de cita</div>\r\n\r\n      <p style=\"display: inline-block;font-size: 16px;\">Los clientes podrán realizar citas</p>\r\n      <mat-select placeholder=\"\" class='inputBy selectD' style='border: solid 1px #e1e1e1;padding: 5px;' >\r\n                <mat-option value=\"1\">Hasta 1 hora antes de la hora de inicio</mat-option>\r\n                 <mat-option value=\"2\">Hasta 2 horas antes de la hora de inicio</mat-option>\r\n           <mat-option value=\"3\">Hasta 3 horas antes de la hora de inicio</mat-option>\r\n            <mat-option value=\"6\">Hasta 6 horas antes de la hora de inicio</mat-option>\r\n             <mat-option value=\"12\">Hasta 12 horas antes de la hora de inicio</mat-option>\r\n\r\n      </mat-select>\r\n\r\n\r\n\r\n      <p style=\"display: inline-block;font-size: 16px;\">Los clientes podrán realizar citas</p>\r\n      <mat-select placeholder=\"\" class='inputBy selectD'>\r\n                  <mat-option value=\"1\">Hasta 1 mes en el futuro</mat-option>\r\n                 <mat-option value=\"3\">Hasta 3 meses en el futuro</mat-option>\r\n                 <mat-option value=\"6\">Hasta 6 meses en el futuro</mat-option>\r\n                 <mat-option value=\"12\">Hasta 12 meses en el futuro</mat-option>\r\n      </mat-select>\r\n\r\n\r\n\r\n            <p style=\"display: inline-block;font-size: 16px;\">Permitir Reprogramaciones</p>\r\n      <mat-select placeholder=\"\" class='inputBy selectD'>\r\n                <mat-option value=\"12\">Hasta 12 horas antes de la cita</mat-option>\r\n                  <mat-option value=\"24\">Hasta 24 horas antes de la cita</mat-option>\r\n          \r\n\r\n      </mat-select>\r\n\r\n\r\n\r\n\r\n      <div style=\"  margin-top: 40px;  text-align: center;\">\r\n\r\n        <button style='    width: 80%;    height: 40px;' class='btn'  mat-raised-button color=\"primary\"  (click)=\"goForward6(stepper)\">Empezar a usar YourBeauty</button>\r\n\r\n\r\n      </div>\r\n    </form>\r\n</div>\r\n  </mat-step>\r\n\r\n\r\n\r\n\r\n</mat-horizontal-stepper>\r\n\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/content/pages/auth/register/register.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/content/pages/auth/register/register.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horarioContainer {\n  margin-bottom: 17px;\n  background: white;\n  padding: 0px;\n  font-size: 16px; }\n\n.horarioSpan {\n  margin-bottom: 0px !important;\n  width: 100px !important;\n  display: block; }\n\n.conteinInput {\n  margin-top: 5px;\n  display: inline-block;\n  width: 300px;\n  margin-left: 28px; }\n\n.ssdd {\n  border: solid 1px #e1e1e1;\n  padding: 5px; }\n\n.separatorHours {\n  display: inline-block;\n  margin: 7px 10px 0px 10px; }\n\n.itemServicios {\n  border: 1px solid #e1e1e1;\n  border-radius: 4px;\n  display: block;\n  margin-bottom: 10px; }\n\n.itemServicios:hover {\n  opacity: 0.8; }\n\n.iconR {\n  font-size: 16px;\n  position: absolute;\n  right: 5px;\n  top: 20px;\n  color: darkgray; }\n\n.boxItem {\n  position: relative;\n  background: #faf9f7 !important;\n  padding: 10px 50px 10px 40px; }\n\n.txtItemServ {\n  width: 60% !important;\n  display: inline-block;\n  min-height: 1px;\n  vertical-align: top;\n  margin: 0;\n  padding: 0; }\n\n.txtItemServP {\n  width: 20% !important;\n  text-align: right !important;\n  display: inline-block;\n  min-height: 1px;\n  vertical-align: top;\n  margin: 0;\n  padding-left: 20px;\n  font-size: 16px;\n  margin-top: 8px !important;\n  font-weight: 400; }\n\n:host .mat-form-field {\n  width: 100%; }\n\n/* Font color */\n\ninput.mat-input-element {\n  color: #383734; }\n\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: #e1e1e1 !important; }\n\n::ng-deep .mat-form-field-underline, ::ng-deep .mat-form-field-ripple {\n  background-color: #e1e1e1 !important; }\n\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 12px !important; }\n\n.pac-container {\n  z-index: 1051 !important; }\n\nmat-icon {\n  margin-right: 9px;\n  color: #e1e1e1 !important; }\n\n.mat-card-title {\n  font-size: 16px !important; }\n\n.mat-card-subtitle {\n  font-size: 16px !important; }\n\n.botonTxt {\n  font-size: 14px !important; }\n\n.botonTxt:hover {\n  color: red !important; }\n\n.itemHover {\n  padding-bottom: 23px;\n  font-size: 16px; }\n\n.itemHover:hover {\n  color: red; }\n\n.selectD {\n  border: solid 1px #e1e1e1;\n  padding: 5px;\n  display: block !important;\n  margin-left: 25px !important;\n  width: 50% !important;\n  max-width: 200px;\n  margin-bottom: 20px; }\n\n.imgCheckBox {\n  height: 34px;\n  width: 34px;\n  border-radius: 20px;\n  margin: 5px 11px; }\n\n.cdk-global-overlay-wrapper, .cdk-overlay-container {\n  z-index: 99999 !important; }\n\n.mauto {\n  margin: auto !important; }\n\n.txtF {\n  color: #383734;\n  font-size: 16px; }\n\n.tituloCateg {\n  font-size: 16px;\n  margin-bottom: 10px;\n  margin-top: 15px;\n  font-weight: 400; }\n\n.md-dialog-container {\n  width: 600px !important; }\n\n.w50b {\n  display: flex;\n  width: 50% !important;\n  max-width: 200px; }\n\n.w50 {\n  display: flex;\n  width: 50%; }\n\n.w100 {\n  display: block;\n  width: 100%; }\n\n::ng-deep .mat-horizontal-stepper-header-container {\n  display: none !important; }\n"

/***/ }),

/***/ "./src/app/content/pages/auth/register/register.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/content/pages/auth/register/register.component.ts ***!
  \*******************************************************************/
/*! exports provided: Modal3Component, Modal4Component, RegisterComponent, ModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal3Component", function() { return Modal3Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal4Component", function() { return Modal4Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContentComponent", function() { return ModalContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/auth/authentication.service */ "./src/app/core/auth/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/auth/auth-notice.service */ "./src/app/core/auth/auth-notice.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













var Modal3Component = /** @class */ (function () {
    function Modal3Component(data, authNoticeService, dialogRef, dialog, _formBuilder, cdr) {
        this.data = data;
        this.authNoticeService = authNoticeService;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this.cdr = cdr;
        this.onAdd2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.diasSemana = [{ nombre: 'Domingo', dia: 0 },
            { nombre: 'Lunes', dia: 1 },
            { nombre: 'Martes', dia: 2 },
            { nombre: 'Miercoles', dia: 3 },
            { nombre: 'Jueves', dia: 4 },
            { nombre: 'Viernes', dia: 5 },
            { nombre: 'Sabado', dia: 6 }];
        this.horarioHoras = [
            { 'text': '12:00 AM', 'valor': '00:00:00' },
            { 'text': '12:05 AM', 'valor': '00:05:00' },
            { 'text': '12:10 AM', 'valor': '00:10:00' },
            { 'text': '12:15 AM', 'valor': '00:15:00' },
            { 'text': '12:20 AM', 'valor': '00:20:00' },
            { 'text': '12:25 AM', 'valor': '00:25:00' },
            { 'text': '12:30 AM', 'valor': '00:30:00' },
            { 'text': '12:35 AM', 'valor': '00:35:00' },
            { 'text': '12:40 AM', 'valor': '00:40:00' },
            { 'text': '12:45 AM', 'valor': '00:45:00' },
            { 'text': '12:55 AM', 'valor': '00:55:00' },
            { 'text': '01:00 AM', 'valor': '01:00:00' },
            { 'text': '01:05 AM', 'valor': '01:05:00' },
            { 'text': '01:10 AM', 'valor': '01:10:00' },
            { 'text': '01:15 AM', 'valor': '01:15:00' },
            { 'text': '01:20 AM', 'valor': '01:20:00' },
            { 'text': '01:25 AM', 'valor': '01:25:00' },
            { 'text': '01:30 AM', 'valor': '01:30:00' },
            { 'text': '01:35 AM', 'valor': '01:35:00' },
            { 'text': '01:40 AM', 'valor': '01:40:00' },
            { 'text': '01:45 AM', 'valor': '01:45:00' },
            { 'text': '01:55 AM', 'valor': '01:55:00' },
            { 'text': '02:00 AM', 'valor': '02:00:00' },
            { 'text': '02:05 AM', 'valor': '02:05:00' },
            { 'text': '02:10 AM', 'valor': '02:10:00' },
            { 'text': '02:15 AM', 'valor': '02:15:00' },
            { 'text': '02:20 AM', 'valor': '02:20:00' },
            { 'text': '02:25 AM', 'valor': '02:25:00' },
            { 'text': '02:30 AM', 'valor': '02:30:00' },
            { 'text': '02:35 AM', 'valor': '02:35:00' },
            { 'text': '02:40 AM', 'valor': '02:40:00' },
            { 'text': '02:45 AM', 'valor': '02:45:00' },
            { 'text': '02:55 AM', 'valor': '02:55:00' },
            { 'text': '03:00 AM', 'valor': '03:00:00' },
            { 'text': '03:05 AM', 'valor': '03:05:00' },
            { 'text': '03:10 AM', 'valor': '03:10:00' },
            { 'text': '03:15 AM', 'valor': '03:15:00' },
            { 'text': '03:20 AM', 'valor': '03:20:00' },
            { 'text': '03:25 AM', 'valor': '03:25:00' },
            { 'text': '03:30 AM', 'valor': '03:30:00' },
            { 'text': '03:35 AM', 'valor': '03:35:00' },
            { 'text': '03:40 AM', 'valor': '03:40:00' },
            { 'text': '03:45 AM', 'valor': '03:45:00' },
            { 'text': '03:55 AM', 'valor': '03:55:00' },
            { 'text': '04:00 AM', 'valor': '04:00:00' },
            { 'text': '04:05 AM', 'valor': '04:05:00' },
            { 'text': '04:10 AM', 'valor': '04:10:00' },
            { 'text': '04:15 AM', 'valor': '04:15:00' },
            { 'text': '04:20 AM', 'valor': '04:20:00' },
            { 'text': '04:25 AM', 'valor': '04:25:00' },
            { 'text': '04:30 AM', 'valor': '04:30:00' },
            { 'text': '04:35 AM', 'valor': '04:35:00' },
            { 'text': '04:40 AM', 'valor': '04:40:00' },
            { 'text': '04:45 AM', 'valor': '04:45:00' },
            { 'text': '04:55 AM', 'valor': '04:55:00' },
            { 'text': '05:00 AM', 'valor': '05:00:00' },
            { 'text': '05:05 AM', 'valor': '05:05:00' },
            { 'text': '05:10 AM', 'valor': '05:10:00' },
            { 'text': '05:15 AM', 'valor': '05:15:00' },
            { 'text': '05:20 AM', 'valor': '05:20:00' },
            { 'text': '05:25 AM', 'valor': '05:25:00' },
            { 'text': '05:30 AM', 'valor': '05:30:00' },
            { 'text': '05:35 AM', 'valor': '05:35:00' },
            { 'text': '05:40 AM', 'valor': '05:40:00' },
            { 'text': '05:45 AM', 'valor': '05:45:00' },
            { 'text': '05:55 AM', 'valor': '05:55:00' },
            { 'text': '06:00 AM', 'valor': '06:00:00' },
            { 'text': '06:05 AM', 'valor': '06:05:00' },
            { 'text': '06:10 AM', 'valor': '06:10:00' },
            { 'text': '06:15 AM', 'valor': '06:15:00' },
            { 'text': '06:20 AM', 'valor': '06:20:00' },
            { 'text': '06:25 AM', 'valor': '06:25:00' },
            { 'text': '06:30 AM', 'valor': '06:30:00' },
            { 'text': '06:35 AM', 'valor': '06:35:00' },
            { 'text': '06:40 AM', 'valor': '06:40:00' },
            { 'text': '06:45 AM', 'valor': '06:45:00' },
            { 'text': '06:55 AM', 'valor': '06:55:00' },
            { 'text': '07:00 AM', 'valor': '07:00:00' },
            { 'text': '07:05 AM', 'valor': '07:05:00' },
            { 'text': '07:10 AM', 'valor': '07:10:00' },
            { 'text': '07:15 AM', 'valor': '07:15:00' },
            { 'text': '07:20 AM', 'valor': '07:20:00' },
            { 'text': '07:25 AM', 'valor': '07:25:00' },
            { 'text': '07:30 AM', 'valor': '07:30:00' },
            { 'text': '07:35 AM', 'valor': '07:35:00' },
            { 'text': '07:40 AM', 'valor': '07:40:00' },
            { 'text': '07:45 AM', 'valor': '07:45:00' },
            { 'text': '07:55 AM', 'valor': '07:55:00' },
            { 'text': '08:00 AM', 'valor': '08:00:00' },
            { 'text': '08:05 AM', 'valor': '08:05:00' },
            { 'text': '08:10 AM', 'valor': '08:10:00' },
            { 'text': '08:15 AM', 'valor': '08:15:00' },
            { 'text': '08:20 AM', 'valor': '08:20:00' },
            { 'text': '08:25 AM', 'valor': '08:25:00' },
            { 'text': '08:30 AM', 'valor': '08:30:00' },
            { 'text': '08:35 AM', 'valor': '08:35:00' },
            { 'text': '08:40 AM', 'valor': '08:40:00' },
            { 'text': '08:45 AM', 'valor': '08:45:00' },
            { 'text': '08:55 AM', 'valor': '08:55:00' },
            { 'text': '09:00 AM', 'valor': '09:00:00' },
            { 'text': '09:05 AM', 'valor': '09:05:00' },
            { 'text': '09:10 AM', 'valor': '09:10:00' },
            { 'text': '09:15 AM', 'valor': '09:15:00' },
            { 'text': '09:20 AM', 'valor': '09:20:00' },
            { 'text': '09:25 AM', 'valor': '09:25:00' },
            { 'text': '09:30 AM', 'valor': '09:30:00' },
            { 'text': '09:35 AM', 'valor': '09:35:00' },
            { 'text': '09:40 AM', 'valor': '09:40:00' },
            { 'text': '09:45 AM', 'valor': '09:45:00' },
            { 'text': '09:55 AM', 'valor': '09:55:00' },
            { 'text': '10:00 AM', 'valor': '10:00:00' },
            { 'text': '10:05 AM', 'valor': '10:05:00' },
            { 'text': '10:10 AM', 'valor': '10:10:00' },
            { 'text': '10:15 AM', 'valor': '10:15:00' },
            { 'text': '10:20 AM', 'valor': '10:20:00' },
            { 'text': '10:25 AM', 'valor': '10:25:00' },
            { 'text': '10:30 AM', 'valor': '10:30:00' },
            { 'text': '10:35 AM', 'valor': '10:35:00' },
            { 'text': '10:40 AM', 'valor': '10:40:00' },
            { 'text': '10:45 AM', 'valor': '10:45:00' },
            { 'text': '10:55 AM', 'valor': '10:55:00' },
            { 'text': '11:00 AM', 'valor': '11:00:00' },
            { 'text': '11:05 AM', 'valor': '11:05:00' },
            { 'text': '11:10 AM', 'valor': '11:10:00' },
            { 'text': '11:15 AM', 'valor': '11:15:00' },
            { 'text': '11:20 AM', 'valor': '11:20:00' },
            { 'text': '11:25 AM', 'valor': '11:25:00' },
            { 'text': '11:30 AM', 'valor': '11:30:00' },
            { 'text': '11:35 AM', 'valor': '11:35:00' },
            { 'text': '11:40 AM', 'valor': '11:40:00' },
            { 'text': '11:45 AM', 'valor': '11:45:00' },
            { 'text': '11:55 AM', 'valor': '11:55:00' },
            { 'text': '12:00 PM', 'valor': '12:00:00' },
            { 'text': '12:05 PM', 'valor': '12:05:00' },
            { 'text': '12:12 PM', 'valor': '12:12:00' },
            { 'text': '12:15 PM', 'valor': '12:15:00' },
            { 'text': '12:20 PM', 'valor': '12:20:00' },
            { 'text': '12:25 PM', 'valor': '12:25:00' },
            { 'text': '12:30 PM', 'valor': '12:30:00' },
            { 'text': '12:35 PM', 'valor': '12:35:00' },
            { 'text': '12:40 PM', 'valor': '12:40:00' },
            { 'text': '12:45 PM', 'valor': '12:45:00' },
            { 'text': '12:55 PM', 'valor': '12:55:00' },
            { 'text': '01:00 PM', 'valor': '13:00:00' },
            { 'text': '01:05 PM', 'valor': '13:05:00' },
            { 'text': '01:01 PM', 'valor': '13:01:00' },
            { 'text': '01:15 PM', 'valor': '13:15:00' },
            { 'text': '01:20 PM', 'valor': '13:20:00' },
            { 'text': '01:25 PM', 'valor': '13:25:00' },
            { 'text': '01:30 PM', 'valor': '13:30:00' },
            { 'text': '01:35 PM', 'valor': '13:35:00' },
            { 'text': '01:40 PM', 'valor': '13:40:00' },
            { 'text': '01:45 PM', 'valor': '13:45:00' },
            { 'text': '01:55 PM', 'valor': '13:55:00' },
            { 'text': '02:00 PM', 'valor': '14:00:00' },
            { 'text': '02:05 PM', 'valor': '14:05:00' },
            { 'text': '02:02 PM', 'valor': '14:02:00' },
            { 'text': '02:15 PM', 'valor': '14:15:00' },
            { 'text': '02:20 PM', 'valor': '14:20:00' },
            { 'text': '02:25 PM', 'valor': '14:25:00' },
            { 'text': '02:30 PM', 'valor': '14:30:00' },
            { 'text': '02:35 PM', 'valor': '14:35:00' },
            { 'text': '02:40 PM', 'valor': '14:40:00' },
            { 'text': '02:45 PM', 'valor': '14:45:00' },
            { 'text': '02:55 PM', 'valor': '14:55:00' },
            { 'text': '03:00 PM', 'valor': '15:00:00' },
            { 'text': '03:05 PM', 'valor': '15:05:00' },
            { 'text': '03:03 PM', 'valor': '15:03:00' },
            { 'text': '03:15 PM', 'valor': '15:15:00' },
            { 'text': '03:20 PM', 'valor': '15:20:00' },
            { 'text': '03:25 PM', 'valor': '15:25:00' },
            { 'text': '03:30 PM', 'valor': '15:30:00' },
            { 'text': '03:35 PM', 'valor': '15:35:00' },
            { 'text': '03:40 PM', 'valor': '15:40:00' },
            { 'text': '03:45 PM', 'valor': '15:45:00' },
            { 'text': '03:55 PM', 'valor': '15:55:00' },
            { 'text': '04:00 PM', 'valor': '16:00:00' },
            { 'text': '04:05 PM', 'valor': '16:05:00' },
            { 'text': '04:10 PM', 'valor': '16:10:00' },
            { 'text': '04:15 PM', 'valor': '16:15:00' },
            { 'text': '04:20 PM', 'valor': '16:20:00' },
            { 'text': '04:25 PM', 'valor': '16:25:00' },
            { 'text': '04:30 PM', 'valor': '16:30:00' },
            { 'text': '04:35 PM', 'valor': '16:35:00' },
            { 'text': '04:40 PM', 'valor': '16:40:00' },
            { 'text': '04:45 PM', 'valor': '16:45:00' },
            { 'text': '04:55 PM', 'valor': '16:55:00' },
            { 'text': '05:00 PM', 'valor': '17:00:00' },
            { 'text': '05:05 PM', 'valor': '17:05:00' },
            { 'text': '05:10 PM', 'valor': '17:15:00' },
            { 'text': '05:15 PM', 'valor': '17:15:00' },
            { 'text': '05:20 PM', 'valor': '17:20:00' },
            { 'text': '05:25 PM', 'valor': '17:25:00' },
            { 'text': '05:30 PM', 'valor': '17:30:00' },
            { 'text': '05:35 PM', 'valor': '17:35:00' },
            { 'text': '05:40 PM', 'valor': '17:40:00' },
            { 'text': '05:45 PM', 'valor': '17:45:00' },
            { 'text': '05:55 PM', 'valor': '17:55:00' },
            { 'text': '06:00 PM', 'valor': '18:00:00' },
            { 'text': '06:05 PM', 'valor': '18:05:00' },
            { 'text': '06:10 PM', 'valor': '18:10:00' },
            { 'text': '06:15 PM', 'valor': '18:15:00' },
            { 'text': '06:20 PM', 'valor': '18:20:00' },
            { 'text': '06:25 PM', 'valor': '18:25:00' },
            { 'text': '06:30 PM', 'valor': '18:30:00' },
            { 'text': '06:35 PM', 'valor': '18:35:00' },
            { 'text': '06:40 PM', 'valor': '18:40:00' },
            { 'text': '06:45 PM', 'valor': '18:45:00' },
            { 'text': '06:55 PM', 'valor': '18:55:00' },
            { 'text': '07:00 PM', 'valor': '19:00:00' },
            { 'text': '07:05 PM', 'valor': '19:05:00' },
            { 'text': '07:10 PM', 'valor': '19:10:00' },
            { 'text': '07:15 PM', 'valor': '19:15:00' },
            { 'text': '07:20 PM', 'valor': '19:20:00' },
            { 'text': '07:25 PM', 'valor': '19:25:00' },
            { 'text': '07:30 PM', 'valor': '19:30:00' },
            { 'text': '07:35 PM', 'valor': '19:35:00' },
            { 'text': '07:40 PM', 'valor': '19:40:00' },
            { 'text': '07:45 PM', 'valor': '19:45:00' },
            { 'text': '07:55 PM', 'valor': '19:55:00' },
            { 'text': '08:00 PM', 'valor': '20:00:00' },
            { 'text': '08:05 PM', 'valor': '20:05:00' },
            { 'text': '08:10 PM', 'valor': '20:10:00' },
            { 'text': '08:15 PM', 'valor': '20:15:00' },
            { 'text': '08:20 PM', 'valor': '20:20:00' },
            { 'text': '08:25 PM', 'valor': '20:25:00' },
            { 'text': '08:30 PM', 'valor': '20:30:00' },
            { 'text': '08:35 PM', 'valor': '20:35:00' },
            { 'text': '08:40 PM', 'valor': '20:40:00' },
            { 'text': '08:45 PM', 'valor': '20:45:00' },
            { 'text': '08:55 PM', 'valor': '20:55:00' },
            { 'text': '09:00 PM', 'valor': '21:00:00' },
            { 'text': '09:05 PM', 'valor': '21:05:00' },
            { 'text': '09:10 PM', 'valor': '21:10:00' },
            { 'text': '09:15 PM', 'valor': '21:15:00' },
            { 'text': '09:20 PM', 'valor': '21:20:00' },
            { 'text': '09:25 PM', 'valor': '21:25:00' },
            { 'text': '09:30 PM', 'valor': '21:30:00' },
            { 'text': '09:35 PM', 'valor': '21:35:00' },
            { 'text': '09:40 PM', 'valor': '21:40:00' },
            { 'text': '09:45 PM', 'valor': '21:45:00' },
            { 'text': '09:55 PM', 'valor': '21:55:00' },
            { 'text': '10:00 PM', 'valor': '22:00:00' },
            { 'text': '10:05 PM', 'valor': '22:05:00' },
            { 'text': '10:10 PM', 'valor': '22:10:00' },
            { 'text': '10:15 PM', 'valor': '22:15:00' },
            { 'text': '10:20 PM', 'valor': '22:20:00' },
            { 'text': '10:25 PM', 'valor': '22:25:00' },
            { 'text': '10:30 PM', 'valor': '22:30:00' },
            { 'text': '10:35 PM', 'valor': '22:35:00' },
            { 'text': '10:40 PM', 'valor': '22:40:00' },
            { 'text': '10:45 PM', 'valor': '22:45:00' },
            { 'text': '10:55 PM', 'valor': '22:55:00' },
            { 'text': '11:00 PM', 'valor': '23:00:00' },
            { 'text': '11:05 PM', 'valor': '23:05:00' },
            { 'text': '11:10 PM', 'valor': '23:10:00' },
            { 'text': '11:15 PM', 'valor': '23:15:00' },
            { 'text': '11:20 PM', 'valor': '23:20:00' },
            { 'text': '11:25 PM', 'valor': '23:25:00' },
            { 'text': '11:30 PM', 'valor': '23:30:00' },
            { 'text': '11:35 PM', 'valor': '23:35:00' },
            { 'text': '11:40 PM', 'valor': '23:40:00' },
            { 'text': '11:45 PM', 'valor': '23:45:00' },
            { 'text': '11:55 PM', 'valor': '23:55:00' },
        ];
        console.log(this.data);
        if (this.data) {
            this.horarioSeleccionado = this.data;
        }
        else {
            this.horarioSeleccionado = {
                domingo: { diaSemana: 0, open: false },
                lunes: { diaSemana: 1, open: false },
                martes: { diaSemana: 2, open: false },
                miercoles: { diaSemana: 3, open: false },
                jueves: { diaSemana: 4, open: false },
                viernes: { diaSemana: 5, open: false },
                sabado: { diaSemana: 6, open: false },
            };
        }
    }
    Modal3Component.prototype.guardarHorario = function () {
        this.onAdd2.emit(this.horarioSeleccionado);
        this.dialogRef.close();
    };
    Modal3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-modal3',
            template: "\n<mat-dialog-content>\n  <div class=\"modal-header\">\n        <h4 class=\"modal-title\" style=\"    font-size: 25px;\n    line-height: 34px;\n    font-weight: 300;\">Agregando Horario</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\"  mat-dialog-close>\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" style=\"padding: 0px !important\">\n        <div class=\"col-xl-12\" style=\"\" >\n          <div style='padding: 30px 0px;'>\n\n          \n\n\n        <div class=\"horarioContainer\">\n            <mat-checkbox [(ngModel)]=\"horarioSeleccionado.domingo.open\" >\n              <span class='labelBy horarioSpan'>Domingo</span>\n            </mat-checkbox>\n\n                              <div class=\"conteinInput\" *ngIf='!horarioSeleccionado.domingo.open' > \n      CERRADO\n      </div>\n\n      <div class=\"conteinInput\"  *ngIf='horarioSeleccionado.domingo.open'> \n            <div style=\"display: flex\">\n                <mat-select [(ngModel)]=\"horarioSeleccionado.domingo.abrir\" class='inputBy w50b ssdd'>\n                <mat-option  *ngFor=\"let h of horarioHoras; let ii = index\" value=\"{{h.valor}}\">\n                {{h.text}}\n                </mat-option>\n          </mat-select>\n          <div class=\"separatorHours\"> - </div>\n                <mat-select [(ngModel)]=\"horarioSeleccionado.domingo.cerrar\" class='inputBy w50b ssdd'>\n                  <mat-option  *ngFor=\"let h of horarioHoras; let i = index\" value=\"{{h.valor}}\">\n                    {{h.text}}\n                  </mat-option>\n                </mat-select>\n            </div>\n      </div>\n        </div>  \n          \n          <hr>\n\n\n        <div class=\"horarioContainer\">\n            <mat-checkbox [(ngModel)]=\"horarioSeleccionado.lunes.open\" >\n              <span class='labelBy horarioSpan'>Lunes</span>\n            </mat-checkbox>\n                  <div class=\"conteinInput\" *ngIf='!horarioSeleccionado.lunes.open' > \n      CERRADO\n      </div>\n\n      <div class=\"conteinInput\"  *ngIf='horarioSeleccionado.lunes.open'> \n            <div style=\"display: flex\">\n                <mat-select [(ngModel)]=\"horarioSeleccionado.lunes.abrir\" class='inputBy w50b ssdd'>\n                <mat-option  *ngFor=\"let h of horarioHoras; let ii = index\" value=\"{{h.valor}}\">\n                {{h.text}}\n                </mat-option>\n          </mat-select>\n          <div class=\"separatorHours\"> - </div>\n                <mat-select [(ngModel)]=\"horarioSeleccionado.lunes.cerrar\" class='inputBy w50b ssdd'>\n                  <mat-option  *ngFor=\"let h of horarioHoras; let i = index\" value=\"{{h.valor}}\">\n                    {{h.text}}\n                  </mat-option>\n                </mat-select>\n            </div>\n      </div>\n        </div>  \n \n      <hr>\n\n                <div class=\"horarioContainer\">\n            <mat-checkbox [(ngModel)]=\"horarioSeleccionado.martes.open\" >\n              <span class='labelBy horarioSpan'>Martes</span>\n            </mat-checkbox>\n\n      <div class=\"conteinInput\" *ngIf='!horarioSeleccionado.martes.open' > \n      CERRADO\n      </div>\n\n      <div class=\"conteinInput\"  *ngIf='horarioSeleccionado.martes.open'> \n            <div style=\"display: flex\">\n                <mat-select [(ngModel)]=\"horarioSeleccionado.martes.abrir\" class='inputBy w50b ssdd'>\n                <mat-option  *ngFor=\"let h of horarioHoras; let ii = index\" value=\"{{h.valor}}\">\n                {{h.text}}\n                </mat-option>\n          </mat-select>\n          <div class=\"separatorHours\"> - </div>\n                <mat-select [(ngModel)]=\"horarioSeleccionado.martes.cerrar\" class='inputBy w50b ssdd'>\n                  <mat-option  *ngFor=\"let h of horarioHoras; let i = index\" value=\"{{h.valor}}\">\n                    {{h.text}}\n                  </mat-option>\n                </mat-select>\n            </div>\n      </div>\n        </div>  \n \n\n      <hr>\n\n        <div class=\"horarioContainer\">\n            <mat-checkbox [(ngModel)]=\"horarioSeleccionado.miercoles.open\" >\n              <span class='labelBy horarioSpan'>Miercoles</span>\n            </mat-checkbox>\n\n                    <div class=\"conteinInput\" *ngIf='!horarioSeleccionado.miercoles.open' > \n      CERRADO\n      </div>\n\n      <div class=\"conteinInput\"  *ngIf='horarioSeleccionado.miercoles.open'> \n            <div style=\"display: flex\">\n                <mat-select [(ngModel)]=\"horarioSeleccionado.miercoles.abrir\" class='inputBy w50b ssdd'>\n                <mat-option  *ngFor=\"let h of horarioHoras; let ii = index\" value=\"{{h.valor}}\">\n                {{h.text}}\n                </mat-option>\n          </mat-select>\n          <div class=\"separatorHours\"> - </div>\n                <mat-select [(ngModel)]=\"horarioSeleccionado.miercoles.cerrar\" class='inputBy w50b ssdd'>\n                  <mat-option  *ngFor=\"let h of horarioHoras; let i = index\" value=\"{{h.valor}}\">\n                    {{h.text}}\n                  </mat-option>\n                </mat-select>\n            </div>\n      </div>\n        </div>  \n \n      <hr>\n\n\n         <div class=\"horarioContainer\">\n            <mat-checkbox [(ngModel)]=\"horarioSeleccionado.jueves.open\" >\n              <span class='labelBy horarioSpan'>Jueves</span>\n            </mat-checkbox>\n                  <div class=\"conteinInput\" *ngIf='!horarioSeleccionado.jueves.open' > \n      CERRADO\n      </div>\n      <div class=\"conteinInput\"  *ngIf='horarioSeleccionado.jueves.open'> \n            <div style=\"display: flex\">\n                <mat-select [(ngModel)]=\"horarioSeleccionado.jueves.abrir\" class='inputBy w50b ssdd'>\n                <mat-option  *ngFor=\"let h of horarioHoras; let ii = index\" value=\"{{h.valor}}\">\n                {{h.text}}\n                </mat-option>\n          </mat-select>\n          <div class=\"separatorHours\"> - </div>\n                <mat-select [(ngModel)]=\"horarioSeleccionado.jueves.cerrar\" class='inputBy w50b ssdd'>\n                  <mat-option  *ngFor=\"let h of horarioHoras; let i = index\" value=\"{{h.valor}}\">\n                    {{h.text}}\n                  </mat-option>\n                </mat-select>\n            </div>\n      </div>\n        </div>  \n \n      <hr>\n\n\n         <div class=\"horarioContainer\">\n            <mat-checkbox [(ngModel)]=\"horarioSeleccionado.viernes.open\" >\n              <span class='labelBy horarioSpan'>Viernes</span>\n            </mat-checkbox>\n      <div class=\"conteinInput\" *ngIf='!horarioSeleccionado.viernes.open' > \n      CERRADO\n      </div>\n      <div class=\"conteinInput\"  *ngIf='horarioSeleccionado.viernes.open'> \n            <div style=\"display: flex\">\n                <mat-select [(ngModel)]=\"horarioSeleccionado.viernes.abrir\" class='inputBy w50b ssdd'>\n                <mat-option  *ngFor=\"let h of horarioHoras; let ii = index\" value=\"{{h.valor}}\">\n                {{h.text}}\n                </mat-option>\n          </mat-select>\n          <div class=\"separatorHours\"> - </div>\n                <mat-select [(ngModel)]=\"horarioSeleccionado.viernes.cerrar\" class='inputBy w50b ssdd'>\n                  <mat-option  *ngFor=\"let h of horarioHoras; let i = index\" value=\"{{h.valor}}\">\n                    {{h.text}}\n                  </mat-option>\n                </mat-select>\n            </div>\n      </div>\n        </div>  \n \n\n      <hr>\n\n\n         <div class=\"horarioContainer\">\n            <mat-checkbox [(ngModel)]=\"horarioSeleccionado.sabado.open\" >\n              <span class='labelBy horarioSpan'>Sabado</span>\n            </mat-checkbox>\n      <div class=\"conteinInput\" *ngIf='!horarioSeleccionado.sabado.open' > \n      CERRADO\n      </div>\n      <div class=\"conteinInput\" *ngIf='horarioSeleccionado.sabado.open' > \n            <div style=\"display: flex\">\n                <mat-select [(ngModel)]=\"horarioSeleccionado.sabado.abrir\" class='inputBy w50b ssdd'>\n                <mat-option  *ngFor=\"let h of horarioHoras; let ii = index\" value=\"{{h.valor}}\">\n                {{h.text}}\n                </mat-option>\n          </mat-select>\n          <div class=\"separatorHours\"> - </div>\n                <mat-select [(ngModel)]=\"horarioSeleccionado.sabado.cerrar\" class='inputBy w50b ssdd'>\n                  <mat-option  *ngFor=\"let h of horarioHoras; let i = index\" value=\"{{h.valor}}\">\n                    {{h.text}}\n                  </mat-option>\n                </mat-select>\n            </div>\n      </div>\n        </div>  \n \n\n\n\n\n          \n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n\n        <button type=\"button\" class=\"btn\"  mat-raised-button color=\"primary\" (click)='guardarHorario()'>Guardar\n        </button>\n\n      </div>\n</mat-dialog-content>\n",
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/content/pages/auth/register/register.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_6__["AuthNoticeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], Modal3Component);
    return Modal3Component;
}());

var Modal4Component = /** @class */ (function () {
    function Modal4Component(data, dialog, translate, _formBuilder, cdr, authService, dialogRef) {
        var _this = this;
        this.data = data;
        this.dialog = dialog;
        this.translate = translate;
        this._formBuilder = _formBuilder;
        this.cdr = cdr;
        this.authService = authService;
        this.dialogRef = dialogRef;
        this.onAdd3 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.categorias = [];
        this.subcategorias = [];
        this.categoriaName = '';
        this.subcategoriaName = '';
        this.empleados = this.data;
        //this.searchControl = new FormControl();
        this.firstFormGroupService = this._formBuilder.group({
            nombreServicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            precioServicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            categoriaServicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            subcategoriaServicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            horaServicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            minutoServicio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.authService.getCategorias()
            .subscribe(function (data) {
            _this.categorias = data;
            console.log(data);
        }, function (err) {
            console.log('someError');
            alert('Ups! Algo ha salido mal');
        });
    }
    Modal4Component.prototype.guardarServicio = function () {
        var dataServicio = this.firstFormGroupService.value;
        dataServicio.empleados = this.empleados.filter(function (ep) { return ep.checked == true; });
        dataServicio.subcategoriaName = this.subcategoriaName;
        dataServicio.categoriaName = this.categoriaName;
        //console.log(dataServicio);
        //  console.log(this.empleados);
        this.onAdd3.emit(dataServicio);
        this.dialogRef.close();
    };
    Modal4Component.prototype.subName = function (eve) {
        this.subcategoriaName = (eve.source.selected._element.nativeElement.innerText.trim());
    };
    Modal4Component.prototype.getSubs = function (eve) {
        var _this = this;
        console.log(eve);
        this.categoriaName = (eve.source.selected._element.nativeElement.innerText.trim());
        this.authService.getSubcategorias({ idCategoria: eve.value })
            .subscribe(function (data) {
            _this.subcategorias = data;
            console.log(data);
        }, function (err) {
            console.log('someError');
            alert('Ups! Algo ha salido mal');
        });
    };
    Modal4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-modal4',
            template: "\n<mat-dialog-content>\n  <div class=\"modal-header\">\n        <h4 class=\"modal-title\" style=\"    font-size: 25px;\n    line-height: 34px;\n    font-weight: 300;\">Agregar Servicio</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" mat-dialog-close>\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" style=\"    width: 500px;padding: 0px !important\">\n          <div  style=\"\" >\n\n        <div style='padding: 30px 0px;'>\n            <div style=\"margin-bottom: 17px;\n    background: white;\n    padding: 0px;\n    font-size: 16px;\">\n           \n  \n              \n      <form [formGroup]=\"firstFormGroupService\"  #f4=\"ngForm\">\n     \n\n     <mat-form-field  color=\"primary\" style='    padding: 0px 25px;width: 50% !important;font-size: 16px !important;'>\n        <input style='    padding-top: 10px !important;' matInput placeholder=\"Nombre del servicio\" formControlName=\"nombreServicio\" required>\n         <mat-label><mat-icon style='  vertical-align: middle;  font-size: 25px !important;'>spa</mat-icon>Nombre Servicio</mat-label>\n      </mat-form-field>\n\n\n\n           <mat-form-field  color=\"primary\" style='    padding: 0px 25px;width: 50% !important;font-size: 16px !important;'>\n            <span matPrefix>$ &nbsp;</span>\n        <input type='number' style='    padding-top: 10px !important;' matInput placeholder=\"Precio del servicio\" formControlName=\"precioServicio\" required>\n         <mat-label><mat-icon style='  vertical-align: middle;  font-size: 25px !important;'>attach_money</mat-icon>Precio</mat-label>\n      </mat-form-field>\n\n\n\n\n<div style='    display: flex;'>\n    <mat-select (selectionChange)=\"getSubs($event)\" formControlName=\"categoriaServicio\" required placeholder=\"Categoria\" class='inputBy w50b mauto' style='border: solid 1px #e1e1e1;padding: 5px;' >\n\n              <mat-option  *ngFor=\"let c of categorias\" value=\"{{c.idCategoria}}\">\n              {{c.nombre}}\n              </mat-option>\n\n    </mat-select>\n\n\n    <mat-select  (selectionChange)=\"subName($event)\" formControlName=\"subcategoriaServicio\" placeholder=\"SubCategoria\" class='inputBy w50b mauto' style='border: solid 1px #e1e1e1;padding: 5px;' >\n\n              <mat-option  *ngFor=\"let sc of subcategorias\" value=\"{{sc.idSubcategoria}}\">\n              {{sc.nombre}}\n              </mat-option>\n    </mat-select>\n\n</div>\n\n\n\n\n\n<p style='margin-top: 20px; margin-left: 25px;'>Duracion</p>\n<div style='    display: flex;'>\n\n    <mat-select formControlName=\"horaServicio\" placeholder=\"hora\" class='inputBy w50b mauto' style='border: solid 1px #e1e1e1;padding: 5px;' >\n\n              <mat-option value=\"0\">0 horas</mat-option>\n              <mat-option value=\"60\">1 hora</mat-option>\n              <mat-option value=\"120\">2 horas</mat-option>\n              <mat-option value=\"180\">3 horas</mat-option>\n              <mat-option value=\"240\">4 horas</mat-option>\n              <mat-option value=\"300\">5 horas</mat-option>\n\n\n\n\n    </mat-select>\n\n\n    <mat-select formControlName=\"minutoServicio\" placeholder=\"minutos\" class='inputBy w50b mauto' style='border: solid 1px #e1e1e1;padding: 5px;' >\n              <mat-option value=\"0\">0 minutos</mat-option>\n              <mat-option value=\"5\">5 minutos</mat-option>\n              <mat-option value=\"10\">10 minutos</mat-option>\n              <mat-option value=\"15\">15 minutos</mat-option>\n              <mat-option value=\"20\">20 minutos</mat-option>\n              <mat-option value=\"25\">25 minutos</mat-option>\n              <mat-option value=\"30\">30 minutos</mat-option>\n              <mat-option value=\"35\">35 minutos</mat-option>\n              <mat-option value=\"40\">40 minutos</mat-option>\n              <mat-option value=\"45\">45 minutos</mat-option>\n              <mat-option value=\"50\">50 minutos</mat-option>\n              <mat-option value=\"55\">55 minutos</mat-option>\n\n\n    </mat-select>\n\n</div>\n\n\n\n\n    </form>\n\n\n\n  <div  >\n    <div style=\"padding: 40px 60px; \">\n      <div style=\"color:darkgray;font-size: 16px;font-weight: 500 !important;margin-bottom: 20px;\">\n      Empleados que dan este servicio</div>\n          <div style=\"border: solid 1px lightgray;padding: 20px;\">\n\n\n\n            \n\n            <p *ngFor=\"let e of empleados; let i = index\">\n            <mat-checkbox [(ngModel)]=\"e.checked\" name=\"{{i}}-name\">\n            <img  class='imgCheckBox' src=\"assets/app/media/img/userB.png\">\n            <span class=\"txtF\">{{e.nombre}}</span>\n            </mat-checkbox>\n            </p>\n\n            \n          </div>\n\n    </div>\n  </div>\n\n\n          \n             </div>\n          \n            </div>\n          </div>\n  \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn\"  mat-raised-button color=\"primary\" (click)='guardarServicio()' [disabled]='!f4.form.valid' >Guardar</button>\n\n      </div>\n</mat-dialog-content>\n",
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/content/pages/auth/register/register.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]])
    ], Modal4Component);
    return Modal4Component;
}());

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, modalService, authNoticeService, dialog, _ngZone, router, translate, _formBuilder, mapsAPILoader, cdr) {
        this.authService = authService;
        this.modalService = modalService;
        this.authNoticeService = authNoticeService;
        this.dialog = dialog;
        this._ngZone = _ngZone;
        this.router = router;
        this.translate = translate;
        this._formBuilder = _formBuilder;
        this.mapsAPILoader = mapsAPILoader;
        this.cdr = cdr;
        this.indexStaff = 0;
        this.tipoStaff = 0;
        this.editarStaff = false;
        this.isLinear = true;
        this.horarioGuardado = {
            domingo: { diaSemana: 0, open: false },
            lunes: { diaSemana: 1, open: false },
            martes: { diaSemana: 2, open: false },
            miercoles: { diaSemana: 3, open: false },
            jueves: { diaSemana: 4, open: false },
            viernes: { diaSemana: 5, open: false },
            sabado: { diaSemana: 6, open: false },
        };
        this.direccionText = '';
        this.avanceSteper = 0;
        this.empleadosAgregados = [];
        this.centroId = 0;
        this.nombreCentroGlobal = '';
        this.model = { email: '' };
        this.actionChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loading = false;
        this.serviciosAgregados = [];
        this.loadingScreen = false;
        this.errors = [];
        this.spinner = {
            active: false,
            spinnerSize: 18,
            raised: true,
            buttonColor: 'primary',
            spinnerColor: 'accent',
            fullWidth: false
        };
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            nombreNegocio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            nombreUsuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            correoElectronico: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.addFormGroup = this._formBuilder.group({
            nombreStaff: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            puestoStaff: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            telefonoStaff: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            correoStaff: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.infoFormGroup = this._formBuilder.group({
            telefonoNegocio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            webUsuario: [''],
            latitud: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            longitud: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            direccion: [''],
        });
    };
    RegisterComponent.prototype.editStaff = function (staff, ind, content) {
        this.indexStaff = ind;
        this.tipoStaff = staff.tipo;
        this.editarStaff = true;
        this.modalReference = this.modalService.open(content, { centered: true });
        this.addFormGroup.setValue({
            nombreStaff: staff.nombre,
            puestoStaff: staff.descripcion,
            telefonoStaff: staff.telefono,
            correoStaff: staff.email
        });
    };
    RegisterComponent.prototype.eliminarS = function (index) {
        this.serviciosAgregados.splice(index, 1);
    };
    RegisterComponent.prototype.editStaffDo = function () {
        this.empleadosAgregados[this.indexStaff] = {
            "nombre": this.addFormGroup.value.nombreStaff,
            "tipo": this.tipoStaff,
            "descripcion": this.addFormGroup.value.puestoStaff,
            "telefono": this.addFormGroup.value.telefonoStaff,
            "email": this.addFormGroup.value.correoStaff,
            "idCentro": this.centroId
        };
        this.modalReference.close();
    };
    RegisterComponent.prototype.addStaff = function (tipo) {
        this.empleadosAgregados.push({
            "nombre": this.addFormGroup.value.nombreStaff,
            "tipo": 2,
            "descripcion": this.addFormGroup.value.puestoStaff,
            "telefono": this.addFormGroup.value.telefonoStaff,
            "email": this.addFormGroup.value.correoStaff,
            "idCentro": this.centroId
        });
        if (tipo == 1) {
            this.addFormGroup.reset();
            this.modalReference.close();
        }
        else {
            this.addFormGroup.reset();
        }
    };
    RegisterComponent.prototype.goForward2 = function (stepper) {
        var _this = this;
        this.loadingScreen = true;
        this.authService.addStaffNC(this.empleadosAgregados)
            .subscribe(function (data) {
            _this.loadingScreen = false;
            _this.cdr.detectChanges();
            if (data.affectedRows > 0) {
                console.log(data);
                _this.avanceSteper += 17;
                stepper.next();
                _this.cdr.detectChanges();
            }
            else {
                alert('Ups! Algo ha salido mal');
            }
        }, function (err) {
            _this.loadingScreen = false;
            _this.cdr.detectChanges();
            console.log('someError');
            alert('Ups! Algo ha salido mal');
        });
    };
    RegisterComponent.prototype.goForward4 = function (stepper) {
        var _this = this;
        this.loadingScreen = true;
        if (this.urlImg) {
            var uploadData = new FormData();
            uploadData.append('idCentro', this.centroId.toString());
            uploadData.append('imageU', this.selectedFile, this.selectedFile.name);
            this.authService.actualizarBannerNC(uploadData)
                .subscribe(function (data) {
                _this.loadingScreen = false;
                _this.cdr.detectChanges();
                if (data.affectedRows > 0) {
                    console.log(data);
                    _this.avanceSteper += 17;
                    stepper.next();
                    _this.cdr.detectChanges();
                }
                else {
                    alert('Ups! Algo ha salido mal');
                }
            }, function (err) {
                _this.loadingScreen = false;
                _this.cdr.detectChanges();
                console.log('someError');
                alert('Ups! Algo ha salido mal');
            });
        }
        else {
            this.loadingScreen = false;
            this.avanceSteper += 17;
            stepper.next();
            this.cdr.detectChanges();
        }
    };
    RegisterComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        this.selectedFile = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var src = e.target.result;
            _this.urlImg = src;
            _this.cdr.detectChanges();
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    RegisterComponent.prototype.goForward5 = function (stepper) {
        var _this = this;
        this.loadingScreen = true;
        var dataEnviar = {};
        dataEnviar.servicios = this.serviciosAgregados;
        dataEnviar.idCentro = this.centroId;
        console.log(dataEnviar);
        this.authService.addServiciosNC(dataEnviar)
            .subscribe(function (data) {
            _this.loadingScreen = false;
            _this.cdr.detectChanges();
            if (data.affectedRows > 0) {
                console.log(data);
                _this.avanceSteper += 17;
                stepper.next();
                _this.cdr.detectChanges();
            }
            else {
                alert('Ups! Algo ha salido mal');
            }
        }, function (err) {
            _this.loadingScreen = false;
            _this.cdr.detectChanges();
            console.log('someError');
            alert('Ups! Algo ha salido mal');
        });
    };
    RegisterComponent.prototype.goForward6 = function (stepper) {
        var _this = this;
        this.loadingScreen = true;
        console.log(this.cred);
        //
        this.authService.login(this.cred).subscribe(function (response) {
            _this.loadingScreen = false;
            if (typeof response !== 'undefined') {
                _this.router.navigate(['/']);
            }
            else {
                alert('Uuupss... ha ocurrido un error');
            }
            //this.spinner.active = false;
            _this.cdr.detectChanges();
        });
    };
    RegisterComponent.prototype.goForward3 = function (stepper) {
        var _this = this;
        this.loadingScreen = true;
        var dataEnviar = this.infoFormGroup.value;
        dataEnviar.horario = [];
        dataEnviar.nombreCentro = this.nombreCentroGlobal;
        dataEnviar.idCentro = this.centroId;
        Object.keys(this.horarioGuardado).forEach(function (key) {
            if (_this.horarioGuardado[key].open) {
                dataEnviar.horario.push(_this.horarioGuardado[key]);
            }
        });
        console.log(dataEnviar);
        this.authService.addInfoCentroNC(dataEnviar)
            .subscribe(function (data) {
            _this.loadingScreen = false;
            _this.cdr.detectChanges();
            if (data.affectedRows > 0) {
                console.log(data);
                _this.avanceSteper += 17;
                stepper.next();
                _this.cdr.detectChanges();
            }
            else {
                alert('Ups! Algo ha salido mal');
            }
        }, function (err) {
            _this.loadingScreen = false;
            _this.cdr.detectChanges();
            console.log('someError');
            alert('Ups! Algo ha salido mal');
        });
    };
    RegisterComponent.prototype.goForward = function (stepper) {
        var _this = this;
        console.log(stepper);
        if (this.firstFormGroup.valid) {
            this.loadingScreen = true;
            this.authService.nuevoUsuarioNC(this.firstFormGroup.value)
                .subscribe(function (data) {
                _this.loadingScreen = false;
                _this.cdr.detectChanges();
                console.log(data);
                if (data.affectedRows > 0) {
                    _this.avanceSteper += 17;
                    _this.centroId = data['insertId'];
                    _this.nombreCentroGlobal = _this.firstFormGroup.value.nombreNegocio;
                    _this.cred = { email: _this.firstFormGroup.value.correoElectronico,
                        password: _this.firstFormGroup.value.password };
                    _this.empleadosAgregados.push({
                        "nombre": _this.firstFormGroup.value.nombreUsuario,
                        "tipo": 1,
                        "descripcion": 'Administrador del Negocio',
                        "telefono": '',
                        "email": _this.firstFormGroup.value.correoElectronico,
                        idCentro: _this.centroId
                    });
                    stepper.next();
                }
                else {
                    alert('Ups! Algo ha salido mal');
                }
            }, function (err) {
                _this.loadingScreen = false;
                _this.cdr.detectChanges();
                console.log('someError');
                alert('Ups! Algo ha salido mal');
            });
            //this.avanceSteper+=17;
            //stepper.next();
        }
    };
    RegisterComponent.prototype.loginPage = function (event) {
        event.preventDefault();
        this.action = 'login';
        this.actionChange.next(this.action);
    };
    RegisterComponent.prototype.editServicio = function (servicio, index) {
        console.log(servicio, index);
    };
    RegisterComponent.prototype.openDialogService = function () {
        /*
        var dataServicio:{nombre:'',
                          precio:'',
                          categoria:'',
                          subcategoria:'',
                          duracionH:'',
                          duracionM:'',
                          empleados:[]
                          };
        */
        var _this = this;
        var dialogRefS = this.dialog.open(Modal4Component, { data: this.empleadosAgregados });
        var sub = dialogRefS.componentInstance.onAdd3.subscribe(function (data) {
            console.log(data);
            _this.serviciosAgregados.push(data);
            _this.cdr.detectChanges();
        });
    };
    RegisterComponent.prototype.openDialog3 = function () {
        var dialogRef = this.dialog.open(Modal3Component, { data: this.horarioGuardado });
    };
    RegisterComponent.prototype.goBack = function () {
        this.action = 'login';
        this.actionChange.next(this.action);
    };
    RegisterComponent.prototype.open3 = function (content) {
        this.editarStaff = false;
        this.addFormGroup.reset();
        this.modalReference = this.modalService.open(content, { centered: true });
    };
    RegisterComponent.prototype.openDialog4 = function () {
        var _this = this;
        var dialogRef2 = this.dialog.open(ModalContentComponent);
        var sub = dialogRef2.componentInstance.onAdd.subscribe(function (data) {
            console.log(data);
            if (!!data.latitud && !!data.longitud) {
                console.log('ok');
                _this.direccionText = (data.direccion || '');
                _this.infoFormGroup.controls['latitud'].setValue(data.latitud);
                _this.infoFormGroup.controls['longitud'].setValue(data.longitud);
                _this.infoFormGroup.controls['direccion'].setValue((data.direccion || ''));
                _this.cdr.detectChanges();
            }
        });
        /*
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
        */
    };
    RegisterComponent.prototype.open4 = function () {
        var mRf = this.modalService.open(ModalContentComponent);
        mRf.result.then(function (data) {
            var cols = document.getElementsByClassName('pac-container');
            cols[0].parentNode.removeChild(cols[0]);
        }, function (reason) {
            var cols = document.getElementsByClassName('pac-container');
            cols[0].parentNode.removeChild(cols[0]);
        });
    };
    RegisterComponent.prototype.validate = function (f) {
        if (f.form.status === 'VALID') {
            return true;
        }
        this.errors = [];
        if (object_path__WEBPACK_IMPORTED_MODULE_5__["get"](f, 'form.controls.fullname.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.FULLNAME') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_5__["get"](f, 'form.controls.email.errors.email')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.INVALID', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_5__["get"](f, 'form.controls.email.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.EMAIL') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_5__["get"](f, 'form.controls.password.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.PASSWORD') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_5__["get"](f, 'form.controls.password.errors.minlength')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.MIN_LENGTH', { name: this.translate.instant('AUTH.INPUT.PASSWORD'), min: 4 }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_5__["get"](f, 'form.controls.rpassword.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.REQUIRED', { name: this.translate.instant('AUTH.INPUT.CONFIRM_PASSWORD') }));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_5__["get"](f, 'form.controls.agree.errors.required')) {
            this.errors.push(this.translate.instant('AUTH.VALIDATION.AGREEMENT_REQUIRED'));
        }
        if (this.errors.length > 0) {
            this.authNoticeService.setNotice(this.errors.join('<br/>'), 'error');
            this.spinner.active = false;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RegisterComponent.prototype, "action", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "actionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], RegisterComponent.prototype, "f", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/content/pages/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/content/pages/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"],
            _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_6__["AuthNoticeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _agm_core__WEBPACK_IMPORTED_MODULE_9__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], RegisterComponent);
    return RegisterComponent;
}());

var ModalContentComponent = /** @class */ (function () {
    function ModalContentComponent(authService, modalService, authNoticeService, dialogRef, dialog, translate, _formBuilder, mapsAPILoader, cdr) {
        var _this = this;
        this.authService = authService;
        this.modalService = modalService;
        this.authNoticeService = authNoticeService;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.translate = translate;
        this._formBuilder = _formBuilder;
        this.mapsAPILoader = mapsAPILoader;
        this.cdr = cdr;
        this.dataCentro = [];
        this.editarOn = false;
        this.markers = [];
        this.zoom = 16;
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        if (navigator) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                console.log(pos);
                _this.dataCentro['longitud'] = pos.coords.longitude;
                _this.dataCentro['latitud'] = pos.coords.latitude;
                _this.cdr.detectChanges();
                //this.lng = +pos.coords.longitude;
                //this.lat = +pos.coords.latitude;
            });
        }
        this.mapsAPILoader.load().then(function () {
            console.log('dd');
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                componentRestrictions: { country: "pa" }
            });
            autocomplete.addListener("place_changed", function () {
                //get the place result
                var place = autocomplete.getPlace();
                console.log(place.formatted_address);
                //verify result
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                //set latitude, longitude and zoom
                _this.dataCentro['latitud'] = place.geometry.location.lat();
                _this.dataCentro['longitud'] = place.geometry.location.lng();
                _this.dataCentro['direccion'] = place.formatted_address;
                _this.zoom = 16;
                _this.cdr.detectChanges();
            });
        });
    }
    ModalContentComponent.prototype.ngOnInit = function () {
        /*
        setTimeout(()=>{
             this.fixPac();
         }, 500);
        
        */
    };
    /*
    cerrarM(){
    this.activeModal.close();
        //var cols =     document.getElementsByClassName('pac-container');
            
         // cols[0].parentNode.removeChild(cols[0]);
    }
    
    */
    ModalContentComponent.prototype.mapClicked = function ($event) {
        if (true) {
            this.dataCentro['longitud'] = $event.coords.lng;
            this.dataCentro['latitud'] = $event.coords.lat;
            this.markers[0] = {
                lat: $event.coords.lat,
                lng: $event.coords.lng,
                label: 'Ubicacion',
                draggable: true
            };
        }
    };
    ModalContentComponent.prototype.addCoords = function () {
        this.onAdd.emit(this.dataCentro);
        this.dialogRef.close();
    };
    ModalContentComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    ModalContentComponent.prototype.markerDragEnd = function (marker, $event) {
        console.log('dragEnd');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("search"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModalContentComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('div'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModalContentComponent.prototype, "div", void 0);
    ModalContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-content',
            template: "\n<mat-dialog-content style='width: 600px !important;'>\n   <div class=\"modal-header\">\n        <h4 class=\"modal-title\" style=\"    font-size: 25px;\n    line-height: 34px;\n    font-weight: 300;\">Agregando la Ubicaci\u00F3n</h4>\n        <button style='padding-top: 14px;'  type=\"button\" class=\"close\" aria-label=\"Close\" \n        mat-dialog-close>\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" style=\"padding: 0px !important\">\n        <div class=\"row\">\n\n        <div class=\"col-xl-12\" style=\"padding: 15px 40px;\">\n\n            <div style=\"    padding-left: 15px;\"> <label class='labelBy'>Ubicacion del Negocio</label></div>\n            <div >\n\n            <div class=\"form-group\">\n            <input  placeholder=\"busca por lugar\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\" >\n            </div>\n\n            <agm-map style='height: 400px; width: 100%' \n            [latitude]=\"dataCentro.latitud\"\n            [longitude]=\"dataCentro.longitud\"\n            [zoom]=\"zoom\"\n            [disableDefaultUI]=\"false\"\n            [zoomControl]=\"true\"\n            [mapDraggable]=\"true\"\n            (mapClick)=\"mapClicked($event)\">\n\n\n                       <agm-marker \n            *ngFor=\"let m of markers; let i = index\"\n            (markerClick)=\"clickedMarker(m.label, i)\"\n            [latitude]=\"m.lat\"\n            [longitude]=\"m.lng\"\n            [label]=\"m.label\"\n            [markerDraggable]=\"m.draggable\"\n            (dragEnd)=\"markerDragEnd(m, $event)\">\n\n            <agm-info-window>\n            <strong>InfoWindow content</strong>\n            </agm-info-window>\n\n            </agm-marker> \n\n\n            </agm-map>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn\" mat-raised-button color=\"primary\" (click)='addCoords()'>Guardar</button>\n\n      </div>\n      </mat-dialog-content>\n  ",
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/content/pages/auth/register/register.component.scss")]
        })
        //@Injectable()
        ,
        __metadata("design:paramtypes", [_core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"],
            _core_auth_auth_notice_service__WEBPACK_IMPORTED_MODULE_6__["AuthNoticeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _agm_core__WEBPACK_IMPORTED_MODULE_9__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ModalContentComponent);
    return ModalContentComponent;
}());



/***/ }),

/***/ "./src/app/core/auth/auth-notice.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/auth/auth-notice.service.ts ***!
  \**************************************************/
/*! exports provided: AuthNoticeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNoticeService", function() { return AuthNoticeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthNoticeService = /** @class */ (function () {
    function AuthNoticeService() {
        this.onNoticeChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    AuthNoticeService.prototype.setNotice = function (message, type) {
        var notice = {
            message: message,
            type: type
        };
        this.onNoticeChanged$.next(notice);
    };
    AuthNoticeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthNoticeService);
    return AuthNoticeService;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map