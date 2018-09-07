(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-content-pages-pages-module"],{

/***/ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js ***!
  \****************************************************************************/
/*! exports provided: AngularEditorService, AngularEditorComponent, AngularEditorToolbarComponent, AngularEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorService", function() { return AngularEditorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorComponent", function() { return AngularEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorToolbarComponent", function() { return AngularEditorToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorModule", function() { return AngularEditorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularEditorService = /** @class */ (function () {
    function AngularEditorService(http, _document) {
        this.http = http;
        this._document = _document;
    }
    /**
     * Executed command from editor header buttons exclude toggleEditorMode
     * @param command string from triggerCommand
     */
    /**
     * Executed command from editor header buttons exclude toggleEditorMode
     * @param {?} command string from triggerCommand
     * @return {?}
     */
    AngularEditorService.prototype.executeCommand = /**
     * Executed command from editor header buttons exclude toggleEditorMode
     * @param {?} command string from triggerCommand
     * @return {?}
     */
    function (command) {
        if (command === 'h1' || command === 'h2' || command === 'h3' || command === 'h4' || command === 'h5' || command === 'h6' || command === 'p' || command === 'pre') {
            this._document.execCommand('formatBlock', false, command);
        }
        this._document.execCommand(command, false, null);
        return;
    };
    /**
     * Create URL link
     * @param url string from UI prompt
     */
    /**
     * Create URL link
     * @param {?} url string from UI prompt
     * @return {?}
     */
    AngularEditorService.prototype.createLink = /**
     * Create URL link
     * @param {?} url string from UI prompt
     * @return {?}
     */
    function (url) {
        if (!url.includes("http")) {
            this._document.execCommand('createlink', false, url);
        }
        else {
            /** @type {?} */
            var newUrl = '<a href="' + url + '" target="_blank">' + this.selectedText + '</a>';
            this.insertHtml(newUrl);
        }
    };
    /**
     * insert color either font or background
     *
     * @param color color to be inserted
     * @param where where the color has to be inserted either text/background
     */
    /**
     * insert color either font or background
     *
     * @param {?} color color to be inserted
     * @param {?} where where the color has to be inserted either text/background
     * @return {?}
     */
    AngularEditorService.prototype.insertColor = /**
     * insert color either font or background
     *
     * @param {?} color color to be inserted
     * @param {?} where where the color has to be inserted either text/background
     * @return {?}
     */
    function (color, where) {
        /** @type {?} */
        var restored = this.restoreSelection();
        if (restored) {
            if (where === 'textColor') {
                this._document.execCommand('foreColor', false, color);
            }
            else {
                this._document.execCommand('hiliteColor', false, color);
            }
        }
        return;
    };
    /**
     * Set font name
     * @param fontName string
     */
    /**
     * Set font name
     * @param {?} fontName string
     * @return {?}
     */
    AngularEditorService.prototype.setFontName = /**
     * Set font name
     * @param {?} fontName string
     * @return {?}
     */
    function (fontName) {
        this._document.execCommand("fontName", false, fontName);
    };
    /**
     * Set font size
     * @param fontSize string
     */
    /**
     * Set font size
     * @param {?} fontSize string
     * @return {?}
     */
    AngularEditorService.prototype.setFontSize = /**
     * Set font size
     * @param {?} fontSize string
     * @return {?}
     */
    function (fontSize) {
        this._document.execCommand("fontSize", false, fontSize);
    };
    /**
     * Create raw HTML
     * @param {?} html HTML string
     * @return {?}
     */
    AngularEditorService.prototype.insertHtml = /**
     * Create raw HTML
     * @param {?} html HTML string
     * @return {?}
     */
    function (html) {
        /** @type {?} */
        var isHTMLInserted = this._document.execCommand('insertHTML', false, html);
        if (!isHTMLInserted) {
            throw new Error('Unable to perform the operation');
        }
        return;
    };
    /**
     * save selection when the editor is focussed out
     */
    /**
     * save selection when the editor is focussed out
     * @return {?}
     */
    AngularEditorService.prototype.saveSelection = /**
     * save selection when the editor is focussed out
     * @return {?}
     */
    function () {
        if (window.getSelection) {
            /** @type {?} */
            var sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                this.savedSelection = sel.getRangeAt(0);
                this.selectedText = sel.toString();
            }
        }
        else if (this._document.getSelection && this._document.createRange) {
            this.savedSelection = document.createRange();
        }
        else {
            this.savedSelection = null;
        }
    };
    /**
     * restore selection when the editor is focussed in
     *
     * saved selection when the editor is focussed out
     */
    /**
     * restore selection when the editor is focussed in
     *
     * saved selection when the editor is focussed out
     * @return {?}
     */
    AngularEditorService.prototype.restoreSelection = /**
     * restore selection when the editor is focussed in
     *
     * saved selection when the editor is focussed out
     * @return {?}
     */
    function () {
        if (this.savedSelection) {
            if (window.getSelection) {
                /** @type {?} */
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(this.savedSelection);
                return true;
            }
            else if (this._document.getSelection /*&& this.savedSelection.select*/) {
                // this.savedSelection.select();
                return true;
            }
        }
        else {
            return false;
        }
    };
    /**
     * check any slection is made or not
     * @return {?}
     */
    AngularEditorService.prototype.checkSelection = /**
     * check any slection is made or not
     * @return {?}
     */
    function () {
        /** @type {?} */
        var slectedText = this.savedSelection.toString();
        if (slectedText.length === 0) {
            throw new Error('No Selection Made');
        }
        return true;
    };
    /**
     * Upload file to uploadUrl
     * @param file
     */
    /**
     * Upload file to uploadUrl
     * @param {?} file
     * @return {?}
     */
    AngularEditorService.prototype.uploadImage = /**
     * Upload file to uploadUrl
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var uploadData = new FormData();
        uploadData.append('file', file, file.name);
        return this.http.post(this.uploadUrl, uploadData, {
            reportProgress: true,
            observe: 'events',
        });
    };
    /**
     * Insert image with Url
     * @param imageUrl
     */
    /**
     * Insert image with Url
     * @param {?} imageUrl
     * @return {?}
     */
    AngularEditorService.prototype.insertImage = /**
     * Insert image with Url
     * @param {?} imageUrl
     * @return {?}
     */
    function (imageUrl) {
        this._document.execCommand('insertImage', false, imageUrl);
    };
    /**
     * @param {?} separator
     * @return {?}
     */
    AngularEditorService.prototype.setDefaultParagraphSeparator = /**
     * @param {?} separator
     * @return {?}
     */
    function (separator) {
        this._document.execCommand("defaultParagraphSeparator", false, separator);
    };
    /**
     * @param {?} customClass
     * @return {?}
     */
    AngularEditorService.prototype.createCustomClass = /**
     * @param {?} customClass
     * @return {?}
     */
    function (customClass) {
        /** @type {?} */
        var tagName = customClass.tag ? customClass.tag : 'span';
        /** @type {?} */
        var newTag = '<' + tagName + ' class="' + customClass.class + '">' + this.selectedText + '</' + tagName + '>';
        this.insertHtml(newTag);
    };
    AngularEditorService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    AngularEditorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ AngularEditorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function AngularEditorService_Factory() { return new AngularEditorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); }, token: AngularEditorService, providedIn: "root" });
    return AngularEditorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var angularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    uploadUrl: 'v1/image',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularEditorToolbarComponent = /** @class */ (function () {
    function AngularEditorToolbarComponent(_renderer, editorService, _document) {
        this._renderer = _renderer;
        this.editorService = editorService;
        this._document = _document;
        this.id = '';
        this.htmlMode = false;
        this.showToolbar = true;
        this.block = 'default';
        this.fontName = 'Arial';
        this.fontSize = '5';
        this.customClassId = -1;
        this.tagMap = {
            BLOCKQUOTE: "indent",
            A: "link"
        };
        this.select = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "PRE", "DIV"];
        this.buttons = ["bold", "italic", "underline", "strikeThrough", "subscript", "superscript", "justifyLeft", "justifyCenter",
            "justifyRight", "justifyFull", "indent", "outdent", "insertUnorderedList", "insertOrderedList", "link"];
        this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Trigger command from editor header buttons
     * @param command string from toolbar buttons
     */
    /**
     * Trigger command from editor header buttons
     * @param {?} command string from toolbar buttons
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.triggerCommand = /**
     * Trigger command from editor header buttons
     * @param {?} command string from toolbar buttons
     * @return {?}
     */
    function (command) {
        this.execute.emit(command);
        return;
    };
    /**
     * highlight editor buttons when cursor moved or positioning
     */
    /**
     * highlight editor buttons when cursor moved or positioning
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.triggerButtons = /**
     * highlight editor buttons when cursor moved or positioning
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.showToolbar) {
            return;
        }
        this.buttons.forEach(function (e) {
            /** @type {?} */
            var result = _this._document.queryCommandState(e);
            /** @type {?} */
            var elementById = _this._document.getElementById(e + '-' + _this.id);
            if (result) {
                _this._renderer.addClass(elementById, "active");
            }
            else {
                _this._renderer.removeClass(elementById, "active");
            }
        });
    };
    /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     */
    /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     * @param {?} nodes
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.triggerBlocks = /**
     * trigger highlight editor buttons when cursor moved or positioning in block
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        var _this = this;
        if (!this.showToolbar) {
            return;
        }
        /** @type {?} */
        var found = false;
        this.select.forEach(function (y) {
            /** @type {?} */
            var node = nodes.find(function (x) { return x.nodeName === y; });
            if (node !== undefined && y === node.nodeName) {
                if (found === false) {
                    _this.block = node.nodeName.toLowerCase();
                    found = true;
                }
            }
            else if (found === false) {
                _this.block = 'default';
            }
        });
        found = false;
        if (this.customClasses) {
            this.customClasses.forEach(function (y, index) {
                /** @type {?} */
                var node = nodes.find(function (x) {
                    if (x instanceof Element) {
                        return x.className === y.class;
                    }
                });
                if (node !== undefined) {
                    if (found === false) {
                        _this.customClassId = index;
                        found = true;
                    }
                }
                else if (found === false) {
                    _this.customClassId = -1;
                }
            });
        }
        Object.keys(this.tagMap).map(function (e) {
            /** @type {?} */
            var elementById = _this._document.getElementById(_this.tagMap[e] + '-' + _this.id);
            /** @type {?} */
            var node = nodes.find(function (x) { return x.nodeName === e; });
            if (node !== undefined && e === node.nodeName) {
                _this._renderer.addClass(elementById, "active");
            }
            else {
                _this._renderer.removeClass(elementById, "active");
            }
        });
    };
    /**
     * insert URL link
     */
    /**
     * insert URL link
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.insertUrl = /**
     * insert URL link
     * @return {?}
     */
    function () {
        /** @type {?} */
        var url = prompt("Insert URL link", 'http:\/\/');
        if (url && url !== '' && url !== 'http://') {
            this.editorService.createLink(url);
        }
    };
    /** insert color */
    /**
     * insert color
     * @param {?} color
     * @param {?} where
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.insertColor = /**
     * insert color
     * @param {?} color
     * @param {?} where
     * @return {?}
     */
    function (color, where) {
        this.editorService.insertColor(color, where);
        this.execute.emit("");
    };
    /**
     * set font Name/family
     * @param fontName string
     */
    /**
     * set font Name/family
     * @param {?} fontName string
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setFontName = /**
     * set font Name/family
     * @param {?} fontName string
     * @return {?}
     */
    function (fontName) {
        this.editorService.setFontName(fontName);
        this.execute.emit("");
    };
    /**
     * set font Size
     * @param fontSize string
     *  */
    /**
     * set font Size
     * @param {?} fontSize string
     *
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setFontSize = /**
     * set font Size
     * @param {?} fontSize string
     *
     * @return {?}
     */
    function (fontSize) {
        this.editorService.setFontSize(fontSize);
        this.execute.emit("");
    };
    /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param m boolean
     */
    /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param {?} m boolean
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setEditorMode = /**
     * toggle editor mode (WYSIWYG or SOURCE)
     * @param {?} m boolean
     * @return {?}
     */
    function (m) {
        /** @type {?} */
        var toggleEditorModeButton = this._document.getElementById("toggleEditorMode" + '-' + this.id);
        if (m) {
            this._renderer.addClass(toggleEditorModeButton, "active");
        }
        else {
            this._renderer.removeClass(toggleEditorModeButton, "active");
        }
        this.htmlMode = m;
    };
    /**
     * Upload image when file is selected
     */
    /**
     * Upload image when file is selected
     * @param {?} event
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.onFileChanged = /**
     * Upload image when file is selected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var file = event.target.files[0];
        this.editorService.uploadImage(file).subscribe(function (e) {
            if (e instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.editorService.insertImage(e.body.imageUrl);
            }
        });
    };
    /**
     * @param {?} classId
     * @return {?}
     */
    AngularEditorToolbarComponent.prototype.setCustomClass = /**
     * @param {?} classId
     * @return {?}
     */
    function (classId) {
        this.editorService.createCustomClass(this.customClasses[classId]);
    };
    AngularEditorToolbarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'angular-editor-toolbar',
                    template: "<div class=\"angular-editor-toolbar\" *ngIf=\"showToolbar\">\n  <div class=\"angular-editor-toolbar-set\">\n    <button type=\"button\" title=\"Undo\" class=\"angular-editor-button\" (click)=\"triggerCommand('undo')\"><i\n      class='fa fa-undo'></i></button>\n    <button type=\"button\" title=\"Redo\" class=\"angular-editor-button\" (click)=\"triggerCommand('redo')\"><i\n      class='fa fa-repeat'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'bold-'+id\" type=\"button\" title=\"Bold\" class=\"angular-editor-button\" (click)=\"triggerCommand('bold')\"\n            [disabled]=\"htmlMode\"><i class='fa fa-bold'></i></button>\n    <button [id]=\"'italic-'+id\" type=\"button\" title=\"Italic\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('italic')\"\n            [disabled]=\"htmlMode\"><i class='fa fa-italic'></i></button>\n    <button [id]=\"'underline-'+id\" type=\"button\" title=\"Underline\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('underline')\" [disabled]=\"htmlMode\"><i class='fa fa-underline'></i></button>\n    <button [id]=\"'strikeThrough-'+id\" type=\"button\" title=\"Strikethrough\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('strikeThrough')\" [disabled]=\"htmlMode\"><i class='fa fa-strikethrough'></i></button>\n    <button [id]=\"'subscript-'+id\" type=\"button\" title=\"Subscript\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('subscript')\" [disabled]=\"htmlMode\"><i class='fa fa-subscript'></i></button>\n    <button [id]=\"'superscript-'+id\" type=\"button\" title=\"Superscript\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('superscript')\" [disabled]=\"htmlMode\"><i class='fa fa-superscript'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'justifyLeft-'+id\" type=\"button\" title=\"Justify Left\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyLeft')\" [disabled]=\"htmlMode\"><i\n      class='fa fa-align-left'></i></button>\n    <button [id]=\"'justifyCenter-'+id\" type=\"button\" title=\"Justify Center\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyCenter')\" [disabled]=\"htmlMode\"><i class='fa fa-align-center'></i></button>\n    <button [id]=\"'justifyRight-'+id\" type=\"button\" title=\"Justify Right\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyRight')\" [disabled]=\"htmlMode\">\n      <i class='fa fa-align-right'></i></button>\n    <button [id]=\"'justifyFull-'+id\" type=\"button\" title=\"Justify Full\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyFull')\" [disabled]=\"htmlMode\"><i\n      class='fa fa-align-justify'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'indent-'+id\" type=\"button\" title=\"Indent\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('indent')\"\n            [disabled]=\"htmlMode\"><i\n      class='fa fa-indent'></i></button>\n    <button [id]=\"'outdent-'+id\" type=\"button\" title=\"Outdent\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('outdent')\"\n            [disabled]=\"htmlMode\"><i\n      class='fa fa-outdent'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'insertUnorderedList-'+id\" type=\"button\" title=\"Unordered List\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertUnorderedList')\" [disabled]=\"htmlMode\"><i class='fa fa-list-ul'></i></button>\n    <button [id]=\"'insertOrderedList-'+id\" type=\"button\" title=\"Ordered List\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertOrderedList')\" [disabled]=\"htmlMode\"><i class='fa fa-list-ol'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <label [for]=\"'heading-'+id\" class=\"block-label\"></label>\n    <select title=\"Formatting\" [id]=\"'heading-'+id\" class=\"select-heading\" [(ngModel)]=\"block\"\n            (change)=\"triggerCommand(block)\"\n            [disabled]=\"htmlMode\">\n      <optgroup label=\"Formatting\"></optgroup>\n      <option class=\"h1\" value=\"h1\">Heading 1</option>\n      <option class=\"h2\" value=\"h2\">Heading 2</option>\n      <option class=\"h3\" value=\"h3\">Heading 3</option>\n      <option class=\"h4\" value=\"h4\">Heading 4</option>\n      <option class=\"h5\" value=\"h5\">Heading 5</option>\n      <option class=\"h6\" value=\"h6\">Heading 6</option>\n      <option class=\"p\" value=\"p\">Paragraph</option>\n      <option class=\"pre\" value=\"pre\">Predefined</option>\n      <option class=\"div\" value=\"div\">Standard</option>\n      <option class=\"default\" value=\"default\">Default</option>\n    </select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <label [for]=\"'fontSelector-'+id\" class=\"block-label\"></label>\n    <select title=\"Font Name\" [id]=\"'fontSelector-'+id\" class=\"select-font\" [(ngModel)]=\"fontName\"\n            (change)=\"setFontName(fontName)\"\n            [disabled]=\"htmlMode\">\n      <optgroup label=\"Font Name\"></optgroup>\n      <option class=\"arial\" value=\"Arial\">Arial</option>\n      <option class=\"calibri\" value=\"Calibri\">Calibri</option>\n      <option class=\"comic-sans-ms\" value=\"Comic Sans MS\">Comic Sans MS</option>\n      <option class=\"times-new-roman\" value=\"Times New Roman\">Times New Roman</option>\n    </select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <label [for]=\"'fontSizeSelector-'+id\" class=\"block-label\"></label>\n    <select title=\"Font Size\" [id]=\"'fontSizeSelector-'+id\" class=\"select-font-size\" [(ngModel)]=\"fontSize\"\n            (change)=\"setFontSize(fontSize)\"\n            [disabled]=\"htmlMode\">\n      <optgroup label=\"Font Sizing\"></optgroup>\n      <option class=\"size1\" value=\"1\">1</option>\n      <option class=\"size2\" value=\"2\">2</option>\n      <option class=\"size3\" value=\"3\">3</option>\n      <option class=\"size4\" value=\"4\">4</option>\n      <option class=\"size5\" value=\"5\">5</option>\n      <option class=\"size6\" value=\"6\">6</option>\n      <option class=\"size7\" value=\"7\">7</option>\n    </select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <input\n      style=\"display: none\"\n      type=\"color\" (change)=\"insertColor(fgInput.value, 'textColor')\"\n      #fgInput>\n    <button [id]=\"'foregroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"fgInput.click()\" title=\"Text Color\"\n            [disabled]=\"htmlMode\"><span class=\"color-label foreground\"><i class=\"fa fa-font\"></i></span></button>\n    <input\n      style=\"display: none\"\n      type=\"color\" (change)=\"insertColor(bgInput.value, 'backgroundColor')\"\n      #bgInput>\n    <button [id]=\"'backgroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"bgInput.click()\" title=\"Background Color\"\n            [disabled]=\"htmlMode\"><span class=\"color-label background\"><i class=\"fa fa-font\"></i></span></button>\n  </div>\n  <div *ngIf=\"customClasses\" class=\"angular-editor-toolbar-set\">\n    <label [for]=\"'customClassSelector-'+id\" class=\"block-label\"></label>\n    <select title=\"Custom Style\" [id]=\"'customClassSelector-'+id\" class=\"select-custom-style\" [(ngModel)]=\"customClassId\"\n            (change)=\"setCustomClass(customClassId)\"\n            [disabled]=\"htmlMode\">\n      <optgroup label=\"Custom Class\"></optgroup>\n      <option class=\"\" value=-1>Clear Class</option>\n      <option *ngFor=\"let item of customClasses; let i = index\" [class]=\"item.class\" [value]=\"i\">{{item.name}}</option>\n    </select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'link-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"insertUrl()\"\n            title=\"Insert Link\" [disabled]=\"htmlMode\">\n      <i class=\"fa fa-link\"></i>\n    </button>\n    <button type=\"button\" class=\"angular-editor-button\" (click)=\"triggerCommand('unlink')\"\n            title=\"Unlink\" [disabled]=\"htmlMode\">\n      <i class=\"fa fa-chain-broken\"></i>\n    </button>\n    <input\n      style=\"display: none\"\n      type=\"file\" (change)=\"onFileChanged($event)\"\n      #fileInput>\n    <button type=\"button\" class=\"angular-editor-button\" (click)=\"fileInput.click()\" title=\"Insert Image\"\n            [disabled]=\"htmlMode\"><i class=\"fa fa-image\"></i></button>\n    <button type=\"button\" title=\"Horizontal Line\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertHorizontalRule')\" [disabled]=\"htmlMode\"><i class=\"fa fa-minus\"></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button type=\"button\" title=\"Clear Formatting\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('removeFormat')\" [disabled]=\"htmlMode\"><i class='fa fa-remove'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'toggleEditorMode-'+id\" type=\"button\" title=\"HTML Code\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('toggleEditorMode')\"><i class='fa fa-code'></i></button>\n  </div>\n</div>\n",
                    styles: ["@charset \"UTF-8\";/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(//netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(//netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format(\"embedded-opentype\"),url(//netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(//netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(//netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(//netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14286em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14286em;width:2.14286em;top:.14286em;text-align:center}.fa-li.fa-lg{left:-1.85714em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:2s linear infinite fa-spin;animation:2s linear infinite fa-spin}.fa-pulse{-webkit-animation:1s steps(8) infinite fa-spin;animation:1s steps(8) infinite fa-spin}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\uF000\"}.fa-music:before{content:\"\uF001\"}.fa-search:before{content:\"\uF002\"}.fa-envelope-o:before{content:\"\uF003\"}.fa-heart:before{content:\"\uF004\"}.fa-star:before{content:\"\uF005\"}.fa-star-o:before{content:\"\uF006\"}.fa-user:before{content:\"\uF007\"}.fa-film:before{content:\"\uF008\"}.fa-th-large:before{content:\"\uF009\"}.fa-th:before{content:\"\uF00A\"}.fa-th-list:before{content:\"\uF00B\"}.fa-check:before{content:\"\uF00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\uF00D\"}.fa-search-plus:before{content:\"\uF00E\"}.fa-search-minus:before{content:\"\uF010\"}.fa-power-off:before{content:\"\uF011\"}.fa-signal:before{content:\"\uF012\"}.fa-cog:before,.fa-gear:before{content:\"\uF013\"}.fa-trash-o:before{content:\"\uF014\"}.fa-home:before{content:\"\uF015\"}.fa-file-o:before{content:\"\uF016\"}.fa-clock-o:before{content:\"\uF017\"}.fa-road:before{content:\"\uF018\"}.fa-download:before{content:\"\uF019\"}.fa-arrow-circle-o-down:before{content:\"\uF01A\"}.fa-arrow-circle-o-up:before{content:\"\uF01B\"}.fa-inbox:before{content:\"\uF01C\"}.fa-play-circle-o:before{content:\"\uF01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\uF01E\"}.fa-refresh:before{content:\"\uF021\"}.fa-list-alt:before{content:\"\uF022\"}.fa-lock:before{content:\"\uF023\"}.fa-flag:before{content:\"\uF024\"}.fa-headphones:before{content:\"\uF025\"}.fa-volume-off:before{content:\"\uF026\"}.fa-volume-down:before{content:\"\uF027\"}.fa-volume-up:before{content:\"\uF028\"}.fa-qrcode:before{content:\"\uF029\"}.fa-barcode:before{content:\"\uF02A\"}.fa-tag:before{content:\"\uF02B\"}.fa-tags:before{content:\"\uF02C\"}.fa-book:before{content:\"\uF02D\"}.fa-bookmark:before{content:\"\uF02E\"}.fa-print:before{content:\"\uF02F\"}.fa-camera:before{content:\"\uF030\"}.fa-font:before{content:\"\uF031\"}.fa-bold:before{content:\"\uF032\"}.fa-italic:before{content:\"\uF033\"}.fa-text-height:before{content:\"\uF034\"}.fa-text-width:before{content:\"\uF035\"}.fa-align-left:before{content:\"\uF036\"}.fa-align-center:before{content:\"\uF037\"}.fa-align-right:before{content:\"\uF038\"}.fa-align-justify:before{content:\"\uF039\"}.fa-list:before{content:\"\uF03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\uF03B\"}.fa-indent:before{content:\"\uF03C\"}.fa-video-camera:before{content:\"\uF03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\uF03E\"}.fa-pencil:before{content:\"\uF040\"}.fa-map-marker:before{content:\"\uF041\"}.fa-adjust:before{content:\"\uF042\"}.fa-tint:before{content:\"\uF043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\uF044\"}.fa-share-square-o:before{content:\"\uF045\"}.fa-check-square-o:before{content:\"\uF046\"}.fa-arrows:before{content:\"\uF047\"}.fa-step-backward:before{content:\"\uF048\"}.fa-fast-backward:before{content:\"\uF049\"}.fa-backward:before{content:\"\uF04A\"}.fa-play:before{content:\"\uF04B\"}.fa-pause:before{content:\"\uF04C\"}.fa-stop:before{content:\"\uF04D\"}.fa-forward:before{content:\"\uF04E\"}.fa-fast-forward:before{content:\"\uF050\"}.fa-step-forward:before{content:\"\uF051\"}.fa-eject:before{content:\"\uF052\"}.fa-chevron-left:before{content:\"\uF053\"}.fa-chevron-right:before{content:\"\uF054\"}.fa-plus-circle:before{content:\"\uF055\"}.fa-minus-circle:before{content:\"\uF056\"}.fa-times-circle:before{content:\"\uF057\"}.fa-check-circle:before{content:\"\uF058\"}.fa-question-circle:before{content:\"\uF059\"}.fa-info-circle:before{content:\"\uF05A\"}.fa-crosshairs:before{content:\"\uF05B\"}.fa-times-circle-o:before{content:\"\uF05C\"}.fa-check-circle-o:before{content:\"\uF05D\"}.fa-ban:before{content:\"\uF05E\"}.fa-arrow-left:before{content:\"\uF060\"}.fa-arrow-right:before{content:\"\uF061\"}.fa-arrow-up:before{content:\"\uF062\"}.fa-arrow-down:before{content:\"\uF063\"}.fa-mail-forward:before,.fa-share:before{content:\"\uF064\"}.fa-expand:before{content:\"\uF065\"}.fa-compress:before{content:\"\uF066\"}.fa-plus:before{content:\"\uF067\"}.fa-minus:before{content:\"\uF068\"}.fa-asterisk:before{content:\"\uF069\"}.fa-exclamation-circle:before{content:\"\uF06A\"}.fa-gift:before{content:\"\uF06B\"}.fa-leaf:before{content:\"\uF06C\"}.fa-fire:before{content:\"\uF06D\"}.fa-eye:before{content:\"\uF06E\"}.fa-eye-slash:before{content:\"\uF070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\uF071\"}.fa-plane:before{content:\"\uF072\"}.fa-calendar:before{content:\"\uF073\"}.fa-random:before{content:\"\uF074\"}.fa-comment:before{content:\"\uF075\"}.fa-magnet:before{content:\"\uF076\"}.fa-chevron-up:before{content:\"\uF077\"}.fa-chevron-down:before{content:\"\uF078\"}.fa-retweet:before{content:\"\uF079\"}.fa-shopping-cart:before{content:\"\uF07A\"}.fa-folder:before{content:\"\uF07B\"}.fa-folder-open:before{content:\"\uF07C\"}.fa-arrows-v:before{content:\"\uF07D\"}.fa-arrows-h:before{content:\"\uF07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\uF080\"}.fa-twitter-square:before{content:\"\uF081\"}.fa-facebook-square:before{content:\"\uF082\"}.fa-camera-retro:before{content:\"\uF083\"}.fa-key:before{content:\"\uF084\"}.fa-cogs:before,.fa-gears:before{content:\"\uF085\"}.fa-comments:before{content:\"\uF086\"}.fa-thumbs-o-up:before{content:\"\uF087\"}.fa-thumbs-o-down:before{content:\"\uF088\"}.fa-star-half:before{content:\"\uF089\"}.fa-heart-o:before{content:\"\uF08A\"}.fa-sign-out:before{content:\"\uF08B\"}.fa-linkedin-square:before{content:\"\uF08C\"}.fa-thumb-tack:before{content:\"\uF08D\"}.fa-external-link:before{content:\"\uF08E\"}.fa-sign-in:before{content:\"\uF090\"}.fa-trophy:before{content:\"\uF091\"}.fa-github-square:before{content:\"\uF092\"}.fa-upload:before{content:\"\uF093\"}.fa-lemon-o:before{content:\"\uF094\"}.fa-phone:before{content:\"\uF095\"}.fa-square-o:before{content:\"\uF096\"}.fa-bookmark-o:before{content:\"\uF097\"}.fa-phone-square:before{content:\"\uF098\"}.fa-twitter:before{content:\"\uF099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\uF09A\"}.fa-github:before{content:\"\uF09B\"}.fa-unlock:before{content:\"\uF09C\"}.fa-credit-card:before{content:\"\uF09D\"}.fa-feed:before,.fa-rss:before{content:\"\uF09E\"}.fa-hdd-o:before{content:\"\uF0A0\"}.fa-bullhorn:before{content:\"\uF0A1\"}.fa-bell:before{content:\"\uF0F3\"}.fa-certificate:before{content:\"\uF0A3\"}.fa-hand-o-right:before{content:\"\uF0A4\"}.fa-hand-o-left:before{content:\"\uF0A5\"}.fa-hand-o-up:before{content:\"\uF0A6\"}.fa-hand-o-down:before{content:\"\uF0A7\"}.fa-arrow-circle-left:before{content:\"\uF0A8\"}.fa-arrow-circle-right:before{content:\"\uF0A9\"}.fa-arrow-circle-up:before{content:\"\uF0AA\"}.fa-arrow-circle-down:before{content:\"\uF0AB\"}.fa-globe:before{content:\"\uF0AC\"}.fa-wrench:before{content:\"\uF0AD\"}.fa-tasks:before{content:\"\uF0AE\"}.fa-filter:before{content:\"\uF0B0\"}.fa-briefcase:before{content:\"\uF0B1\"}.fa-arrows-alt:before{content:\"\uF0B2\"}.fa-group:before,.fa-users:before{content:\"\uF0C0\"}.fa-chain:before,.fa-link:before{content:\"\uF0C1\"}.fa-cloud:before{content:\"\uF0C2\"}.fa-flask:before{content:\"\uF0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\uF0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\uF0C5\"}.fa-paperclip:before{content:\"\uF0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\uF0C7\"}.fa-square:before{content:\"\uF0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\uF0C9\"}.fa-list-ul:before{content:\"\uF0CA\"}.fa-list-ol:before{content:\"\uF0CB\"}.fa-strikethrough:before{content:\"\uF0CC\"}.fa-underline:before{content:\"\uF0CD\"}.fa-table:before{content:\"\uF0CE\"}.fa-magic:before{content:\"\uF0D0\"}.fa-truck:before{content:\"\uF0D1\"}.fa-pinterest:before{content:\"\uF0D2\"}.fa-pinterest-square:before{content:\"\uF0D3\"}.fa-google-plus-square:before{content:\"\uF0D4\"}.fa-google-plus:before{content:\"\uF0D5\"}.fa-money:before{content:\"\uF0D6\"}.fa-caret-down:before{content:\"\uF0D7\"}.fa-caret-up:before{content:\"\uF0D8\"}.fa-caret-left:before{content:\"\uF0D9\"}.fa-caret-right:before{content:\"\uF0DA\"}.fa-columns:before{content:\"\uF0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\uF0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\uF0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\uF0DE\"}.fa-envelope:before{content:\"\uF0E0\"}.fa-linkedin:before{content:\"\uF0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\uF0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\uF0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\uF0E4\"}.fa-comment-o:before{content:\"\uF0E5\"}.fa-comments-o:before{content:\"\uF0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\uF0E7\"}.fa-sitemap:before{content:\"\uF0E8\"}.fa-umbrella:before{content:\"\uF0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\uF0EA\"}.fa-lightbulb-o:before{content:\"\uF0EB\"}.fa-exchange:before{content:\"\uF0EC\"}.fa-cloud-download:before{content:\"\uF0ED\"}.fa-cloud-upload:before{content:\"\uF0EE\"}.fa-user-md:before{content:\"\uF0F0\"}.fa-stethoscope:before{content:\"\uF0F1\"}.fa-suitcase:before{content:\"\uF0F2\"}.fa-bell-o:before{content:\"\uF0A2\"}.fa-coffee:before{content:\"\uF0F4\"}.fa-cutlery:before{content:\"\uF0F5\"}.fa-file-text-o:before{content:\"\uF0F6\"}.fa-building-o:before{content:\"\uF0F7\"}.fa-hospital-o:before{content:\"\uF0F8\"}.fa-ambulance:before{content:\"\uF0F9\"}.fa-medkit:before{content:\"\uF0FA\"}.fa-fighter-jet:before{content:\"\uF0FB\"}.fa-beer:before{content:\"\uF0FC\"}.fa-h-square:before{content:\"\uF0FD\"}.fa-plus-square:before{content:\"\uF0FE\"}.fa-angle-double-left:before{content:\"\uF100\"}.fa-angle-double-right:before{content:\"\uF101\"}.fa-angle-double-up:before{content:\"\uF102\"}.fa-angle-double-down:before{content:\"\uF103\"}.fa-angle-left:before{content:\"\uF104\"}.fa-angle-right:before{content:\"\uF105\"}.fa-angle-up:before{content:\"\uF106\"}.fa-angle-down:before{content:\"\uF107\"}.fa-desktop:before{content:\"\uF108\"}.fa-laptop:before{content:\"\uF109\"}.fa-tablet:before{content:\"\uF10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\uF10B\"}.fa-circle-o:before{content:\"\uF10C\"}.fa-quote-left:before{content:\"\uF10D\"}.fa-quote-right:before{content:\"\uF10E\"}.fa-spinner:before{content:\"\uF110\"}.fa-circle:before{content:\"\uF111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\uF112\"}.fa-github-alt:before{content:\"\uF113\"}.fa-folder-o:before{content:\"\uF114\"}.fa-folder-open-o:before{content:\"\uF115\"}.fa-smile-o:before{content:\"\uF118\"}.fa-frown-o:before{content:\"\uF119\"}.fa-meh-o:before{content:\"\uF11A\"}.fa-gamepad:before{content:\"\uF11B\"}.fa-keyboard-o:before{content:\"\uF11C\"}.fa-flag-o:before{content:\"\uF11D\"}.fa-flag-checkered:before{content:\"\uF11E\"}.fa-terminal:before{content:\"\uF120\"}.fa-code:before{content:\"\uF121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\uF122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\uF123\"}.fa-location-arrow:before{content:\"\uF124\"}.fa-crop:before{content:\"\uF125\"}.fa-code-fork:before{content:\"\uF126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\uF127\"}.fa-question:before{content:\"\uF128\"}.fa-info:before{content:\"\uF129\"}.fa-exclamation:before{content:\"\uF12A\"}.fa-superscript:before{content:\"\uF12B\"}.fa-subscript:before{content:\"\uF12C\"}.fa-eraser:before{content:\"\uF12D\"}.fa-puzzle-piece:before{content:\"\uF12E\"}.fa-microphone:before{content:\"\uF130\"}.fa-microphone-slash:before{content:\"\uF131\"}.fa-shield:before{content:\"\uF132\"}.fa-calendar-o:before{content:\"\uF133\"}.fa-fire-extinguisher:before{content:\"\uF134\"}.fa-rocket:before{content:\"\uF135\"}.fa-maxcdn:before{content:\"\uF136\"}.fa-chevron-circle-left:before{content:\"\uF137\"}.fa-chevron-circle-right:before{content:\"\uF138\"}.fa-chevron-circle-up:before{content:\"\uF139\"}.fa-chevron-circle-down:before{content:\"\uF13A\"}.fa-html5:before{content:\"\uF13B\"}.fa-css3:before{content:\"\uF13C\"}.fa-anchor:before{content:\"\uF13D\"}.fa-unlock-alt:before{content:\"\uF13E\"}.fa-bullseye:before{content:\"\uF140\"}.fa-ellipsis-h:before{content:\"\uF141\"}.fa-ellipsis-v:before{content:\"\uF142\"}.fa-rss-square:before{content:\"\uF143\"}.fa-play-circle:before{content:\"\uF144\"}.fa-ticket:before{content:\"\uF145\"}.fa-minus-square:before{content:\"\uF146\"}.fa-minus-square-o:before{content:\"\uF147\"}.fa-level-up:before{content:\"\uF148\"}.fa-level-down:before{content:\"\uF149\"}.fa-check-square:before{content:\"\uF14A\"}.fa-pencil-square:before{content:\"\uF14B\"}.fa-external-link-square:before{content:\"\uF14C\"}.fa-share-square:before{content:\"\uF14D\"}.fa-compass:before{content:\"\uF14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\uF150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\uF151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\uF152\"}.fa-eur:before,.fa-euro:before{content:\"\uF153\"}.fa-gbp:before{content:\"\uF154\"}.fa-dollar:before,.fa-usd:before{content:\"\uF155\"}.fa-inr:before,.fa-rupee:before{content:\"\uF156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\uF157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\uF158\"}.fa-krw:before,.fa-won:before{content:\"\uF159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\uF15A\"}.fa-file:before{content:\"\uF15B\"}.fa-file-text:before{content:\"\uF15C\"}.fa-sort-alpha-asc:before{content:\"\uF15D\"}.fa-sort-alpha-desc:before{content:\"\uF15E\"}.fa-sort-amount-asc:before{content:\"\uF160\"}.fa-sort-amount-desc:before{content:\"\uF161\"}.fa-sort-numeric-asc:before{content:\"\uF162\"}.fa-sort-numeric-desc:before{content:\"\uF163\"}.fa-thumbs-up:before{content:\"\uF164\"}.fa-thumbs-down:before{content:\"\uF165\"}.fa-youtube-square:before{content:\"\uF166\"}.fa-youtube:before{content:\"\uF167\"}.fa-xing:before{content:\"\uF168\"}.fa-xing-square:before{content:\"\uF169\"}.fa-youtube-play:before{content:\"\uF16A\"}.fa-dropbox:before{content:\"\uF16B\"}.fa-stack-overflow:before{content:\"\uF16C\"}.fa-instagram:before{content:\"\uF16D\"}.fa-flickr:before{content:\"\uF16E\"}.fa-adn:before{content:\"\uF170\"}.fa-bitbucket:before{content:\"\uF171\"}.fa-bitbucket-square:before{content:\"\uF172\"}.fa-tumblr:before{content:\"\uF173\"}.fa-tumblr-square:before{content:\"\uF174\"}.fa-long-arrow-down:before{content:\"\uF175\"}.fa-long-arrow-up:before{content:\"\uF176\"}.fa-long-arrow-left:before{content:\"\uF177\"}.fa-long-arrow-right:before{content:\"\uF178\"}.fa-apple:before{content:\"\uF179\"}.fa-windows:before{content:\"\uF17A\"}.fa-android:before{content:\"\uF17B\"}.fa-linux:before{content:\"\uF17C\"}.fa-dribbble:before{content:\"\uF17D\"}.fa-skype:before{content:\"\uF17E\"}.fa-foursquare:before{content:\"\uF180\"}.fa-trello:before{content:\"\uF181\"}.fa-female:before{content:\"\uF182\"}.fa-male:before{content:\"\uF183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\uF184\"}.fa-sun-o:before{content:\"\uF185\"}.fa-moon-o:before{content:\"\uF186\"}.fa-archive:before{content:\"\uF187\"}.fa-bug:before{content:\"\uF188\"}.fa-vk:before{content:\"\uF189\"}.fa-weibo:before{content:\"\uF18A\"}.fa-renren:before{content:\"\uF18B\"}.fa-pagelines:before{content:\"\uF18C\"}.fa-stack-exchange:before{content:\"\uF18D\"}.fa-arrow-circle-o-right:before{content:\"\uF18E\"}.fa-arrow-circle-o-left:before{content:\"\uF190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\uF191\"}.fa-dot-circle-o:before{content:\"\uF192\"}.fa-wheelchair:before{content:\"\uF193\"}.fa-vimeo-square:before{content:\"\uF194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\uF195\"}.fa-plus-square-o:before{content:\"\uF196\"}.fa-space-shuttle:before{content:\"\uF197\"}.fa-slack:before{content:\"\uF198\"}.fa-envelope-square:before{content:\"\uF199\"}.fa-wordpress:before{content:\"\uF19A\"}.fa-openid:before{content:\"\uF19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\uF19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\uF19D\"}.fa-yahoo:before{content:\"\uF19E\"}.fa-google:before{content:\"\uF1A0\"}.fa-reddit:before{content:\"\uF1A1\"}.fa-reddit-square:before{content:\"\uF1A2\"}.fa-stumbleupon-circle:before{content:\"\uF1A3\"}.fa-stumbleupon:before{content:\"\uF1A4\"}.fa-delicious:before{content:\"\uF1A5\"}.fa-digg:before{content:\"\uF1A6\"}.fa-pied-piper-pp:before{content:\"\uF1A7\"}.fa-pied-piper-alt:before{content:\"\uF1A8\"}.fa-drupal:before{content:\"\uF1A9\"}.fa-joomla:before{content:\"\uF1AA\"}.fa-language:before{content:\"\uF1AB\"}.fa-fax:before{content:\"\uF1AC\"}.fa-building:before{content:\"\uF1AD\"}.fa-child:before{content:\"\uF1AE\"}.fa-paw:before{content:\"\uF1B0\"}.fa-spoon:before{content:\"\uF1B1\"}.fa-cube:before{content:\"\uF1B2\"}.fa-cubes:before{content:\"\uF1B3\"}.fa-behance:before{content:\"\uF1B4\"}.fa-behance-square:before{content:\"\uF1B5\"}.fa-steam:before{content:\"\uF1B6\"}.fa-steam-square:before{content:\"\uF1B7\"}.fa-recycle:before{content:\"\uF1B8\"}.fa-automobile:before,.fa-car:before{content:\"\uF1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\uF1BA\"}.fa-tree:before{content:\"\uF1BB\"}.fa-spotify:before{content:\"\uF1BC\"}.fa-deviantart:before{content:\"\uF1BD\"}.fa-soundcloud:before{content:\"\uF1BE\"}.fa-database:before{content:\"\uF1C0\"}.fa-file-pdf-o:before{content:\"\uF1C1\"}.fa-file-word-o:before{content:\"\uF1C2\"}.fa-file-excel-o:before{content:\"\uF1C3\"}.fa-file-powerpoint-o:before{content:\"\uF1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\uF1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\uF1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\uF1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\uF1C8\"}.fa-file-code-o:before{content:\"\uF1C9\"}.fa-vine:before{content:\"\uF1CA\"}.fa-codepen:before{content:\"\uF1CB\"}.fa-jsfiddle:before{content:\"\uF1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\uF1CD\"}.fa-circle-o-notch:before{content:\"\uF1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\uF1D0\"}.fa-empire:before,.fa-ge:before{content:\"\uF1D1\"}.fa-git-square:before{content:\"\uF1D2\"}.fa-git:before{content:\"\uF1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\uF1D4\"}.fa-tencent-weibo:before{content:\"\uF1D5\"}.fa-qq:before{content:\"\uF1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\uF1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\uF1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\uF1D9\"}.fa-history:before{content:\"\uF1DA\"}.fa-circle-thin:before{content:\"\uF1DB\"}.fa-header:before{content:\"\uF1DC\"}.fa-paragraph:before{content:\"\uF1DD\"}.fa-sliders:before{content:\"\uF1DE\"}.fa-share-alt:before{content:\"\uF1E0\"}.fa-share-alt-square:before{content:\"\uF1E1\"}.fa-bomb:before{content:\"\uF1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\uF1E3\"}.fa-tty:before{content:\"\uF1E4\"}.fa-binoculars:before{content:\"\uF1E5\"}.fa-plug:before{content:\"\uF1E6\"}.fa-slideshare:before{content:\"\uF1E7\"}.fa-twitch:before{content:\"\uF1E8\"}.fa-yelp:before{content:\"\uF1E9\"}.fa-newspaper-o:before{content:\"\uF1EA\"}.fa-wifi:before{content:\"\uF1EB\"}.fa-calculator:before{content:\"\uF1EC\"}.fa-paypal:before{content:\"\uF1ED\"}.fa-google-wallet:before{content:\"\uF1EE\"}.fa-cc-visa:before{content:\"\uF1F0\"}.fa-cc-mastercard:before{content:\"\uF1F1\"}.fa-cc-discover:before{content:\"\uF1F2\"}.fa-cc-amex:before{content:\"\uF1F3\"}.fa-cc-paypal:before{content:\"\uF1F4\"}.fa-cc-stripe:before{content:\"\uF1F5\"}.fa-bell-slash:before{content:\"\uF1F6\"}.fa-bell-slash-o:before{content:\"\uF1F7\"}.fa-trash:before{content:\"\uF1F8\"}.fa-copyright:before{content:\"\uF1F9\"}.fa-at:before{content:\"\uF1FA\"}.fa-eyedropper:before{content:\"\uF1FB\"}.fa-paint-brush:before{content:\"\uF1FC\"}.fa-birthday-cake:before{content:\"\uF1FD\"}.fa-area-chart:before{content:\"\uF1FE\"}.fa-pie-chart:before{content:\"\uF200\"}.fa-line-chart:before{content:\"\uF201\"}.fa-lastfm:before{content:\"\uF202\"}.fa-lastfm-square:before{content:\"\uF203\"}.fa-toggle-off:before{content:\"\uF204\"}.fa-toggle-on:before{content:\"\uF205\"}.fa-bicycle:before{content:\"\uF206\"}.fa-bus:before{content:\"\uF207\"}.fa-ioxhost:before{content:\"\uF208\"}.fa-angellist:before{content:\"\uF209\"}.fa-cc:before{content:\"\uF20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\uF20B\"}.fa-meanpath:before{content:\"\uF20C\"}.fa-buysellads:before{content:\"\uF20D\"}.fa-connectdevelop:before{content:\"\uF20E\"}.fa-dashcube:before{content:\"\uF210\"}.fa-forumbee:before{content:\"\uF211\"}.fa-leanpub:before{content:\"\uF212\"}.fa-sellsy:before{content:\"\uF213\"}.fa-shirtsinbulk:before{content:\"\uF214\"}.fa-simplybuilt:before{content:\"\uF215\"}.fa-skyatlas:before{content:\"\uF216\"}.fa-cart-plus:before{content:\"\uF217\"}.fa-cart-arrow-down:before{content:\"\uF218\"}.fa-diamond:before{content:\"\uF219\"}.fa-ship:before{content:\"\uF21A\"}.fa-user-secret:before{content:\"\uF21B\"}.fa-motorcycle:before{content:\"\uF21C\"}.fa-street-view:before{content:\"\uF21D\"}.fa-heartbeat:before{content:\"\uF21E\"}.fa-venus:before{content:\"\uF221\"}.fa-mars:before{content:\"\uF222\"}.fa-mercury:before{content:\"\uF223\"}.fa-intersex:before,.fa-transgender:before{content:\"\uF224\"}.fa-transgender-alt:before{content:\"\uF225\"}.fa-venus-double:before{content:\"\uF226\"}.fa-mars-double:before{content:\"\uF227\"}.fa-venus-mars:before{content:\"\uF228\"}.fa-mars-stroke:before{content:\"\uF229\"}.fa-mars-stroke-v:before{content:\"\uF22A\"}.fa-mars-stroke-h:before{content:\"\uF22B\"}.fa-neuter:before{content:\"\uF22C\"}.fa-genderless:before{content:\"\uF22D\"}.fa-facebook-official:before{content:\"\uF230\"}.fa-pinterest-p:before{content:\"\uF231\"}.fa-whatsapp:before{content:\"\uF232\"}.fa-server:before{content:\"\uF233\"}.fa-user-plus:before{content:\"\uF234\"}.fa-user-times:before{content:\"\uF235\"}.fa-bed:before,.fa-hotel:before{content:\"\uF236\"}.fa-viacoin:before{content:\"\uF237\"}.fa-train:before{content:\"\uF238\"}.fa-subway:before{content:\"\uF239\"}.fa-medium:before{content:\"\uF23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\uF23B\"}.fa-optin-monster:before{content:\"\uF23C\"}.fa-opencart:before{content:\"\uF23D\"}.fa-expeditedssl:before{content:\"\uF23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\uF240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\uF241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\uF242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\uF243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\uF244\"}.fa-mouse-pointer:before{content:\"\uF245\"}.fa-i-cursor:before{content:\"\uF246\"}.fa-object-group:before{content:\"\uF247\"}.fa-object-ungroup:before{content:\"\uF248\"}.fa-sticky-note:before{content:\"\uF249\"}.fa-sticky-note-o:before{content:\"\uF24A\"}.fa-cc-jcb:before{content:\"\uF24B\"}.fa-cc-diners-club:before{content:\"\uF24C\"}.fa-clone:before{content:\"\uF24D\"}.fa-balance-scale:before{content:\"\uF24E\"}.fa-hourglass-o:before{content:\"\uF250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\uF251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\uF252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\uF253\"}.fa-hourglass:before{content:\"\uF254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\uF255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\uF256\"}.fa-hand-scissors-o:before{content:\"\uF257\"}.fa-hand-lizard-o:before{content:\"\uF258\"}.fa-hand-spock-o:before{content:\"\uF259\"}.fa-hand-pointer-o:before{content:\"\uF25A\"}.fa-hand-peace-o:before{content:\"\uF25B\"}.fa-trademark:before{content:\"\uF25C\"}.fa-registered:before{content:\"\uF25D\"}.fa-creative-commons:before{content:\"\uF25E\"}.fa-gg:before{content:\"\uF260\"}.fa-gg-circle:before{content:\"\uF261\"}.fa-tripadvisor:before{content:\"\uF262\"}.fa-odnoklassniki:before{content:\"\uF263\"}.fa-odnoklassniki-square:before{content:\"\uF264\"}.fa-get-pocket:before{content:\"\uF265\"}.fa-wikipedia-w:before{content:\"\uF266\"}.fa-safari:before{content:\"\uF267\"}.fa-chrome:before{content:\"\uF268\"}.fa-firefox:before{content:\"\uF269\"}.fa-opera:before{content:\"\uF26A\"}.fa-internet-explorer:before{content:\"\uF26B\"}.fa-television:before,.fa-tv:before{content:\"\uF26C\"}.fa-contao:before{content:\"\uF26D\"}.fa-500px:before{content:\"\uF26E\"}.fa-amazon:before{content:\"\uF270\"}.fa-calendar-plus-o:before{content:\"\uF271\"}.fa-calendar-minus-o:before{content:\"\uF272\"}.fa-calendar-times-o:before{content:\"\uF273\"}.fa-calendar-check-o:before{content:\"\uF274\"}.fa-industry:before{content:\"\uF275\"}.fa-map-pin:before{content:\"\uF276\"}.fa-map-signs:before{content:\"\uF277\"}.fa-map-o:before{content:\"\uF278\"}.fa-map:before{content:\"\uF279\"}.fa-commenting:before{content:\"\uF27A\"}.fa-commenting-o:before{content:\"\uF27B\"}.fa-houzz:before{content:\"\uF27C\"}.fa-vimeo:before{content:\"\uF27D\"}.fa-black-tie:before{content:\"\uF27E\"}.fa-fonticons:before{content:\"\uF280\"}.fa-reddit-alien:before{content:\"\uF281\"}.fa-edge:before{content:\"\uF282\"}.fa-credit-card-alt:before{content:\"\uF283\"}.fa-codiepie:before{content:\"\uF284\"}.fa-modx:before{content:\"\uF285\"}.fa-fort-awesome:before{content:\"\uF286\"}.fa-usb:before{content:\"\uF287\"}.fa-product-hunt:before{content:\"\uF288\"}.fa-mixcloud:before{content:\"\uF289\"}.fa-scribd:before{content:\"\uF28A\"}.fa-pause-circle:before{content:\"\uF28B\"}.fa-pause-circle-o:before{content:\"\uF28C\"}.fa-stop-circle:before{content:\"\uF28D\"}.fa-stop-circle-o:before{content:\"\uF28E\"}.fa-shopping-bag:before{content:\"\uF290\"}.fa-shopping-basket:before{content:\"\uF291\"}.fa-hashtag:before{content:\"\uF292\"}.fa-bluetooth:before{content:\"\uF293\"}.fa-bluetooth-b:before{content:\"\uF294\"}.fa-percent:before{content:\"\uF295\"}.fa-gitlab:before{content:\"\uF296\"}.fa-wpbeginner:before{content:\"\uF297\"}.fa-wpforms:before{content:\"\uF298\"}.fa-envira:before{content:\"\uF299\"}.fa-universal-access:before{content:\"\uF29A\"}.fa-wheelchair-alt:before{content:\"\uF29B\"}.fa-question-circle-o:before{content:\"\uF29C\"}.fa-blind:before{content:\"\uF29D\"}.fa-audio-description:before{content:\"\uF29E\"}.fa-volume-control-phone:before{content:\"\uF2A0\"}.fa-braille:before{content:\"\uF2A1\"}.fa-assistive-listening-systems:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\uF2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\uF2A4\"}.fa-glide:before{content:\"\uF2A5\"}.fa-glide-g:before{content:\"\uF2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\uF2A7\"}.fa-low-vision:before{content:\"\uF2A8\"}.fa-viadeo:before{content:\"\uF2A9\"}.fa-viadeo-square:before{content:\"\uF2AA\"}.fa-snapchat:before{content:\"\uF2AB\"}.fa-snapchat-ghost:before{content:\"\uF2AC\"}.fa-snapchat-square:before{content:\"\uF2AD\"}.fa-pied-piper:before{content:\"\uF2AE\"}.fa-first-order:before{content:\"\uF2B0\"}.fa-yoast:before{content:\"\uF2B1\"}.fa-themeisle:before{content:\"\uF2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\uF2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\uF2B4\"}.fa-handshake-o:before{content:\"\uF2B5\"}.fa-envelope-open:before{content:\"\uF2B6\"}.fa-envelope-open-o:before{content:\"\uF2B7\"}.fa-linode:before{content:\"\uF2B8\"}.fa-address-book:before{content:\"\uF2B9\"}.fa-address-book-o:before{content:\"\uF2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\uF2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\uF2BC\"}.fa-user-circle:before{content:\"\uF2BD\"}.fa-user-circle-o:before{content:\"\uF2BE\"}.fa-user-o:before{content:\"\uF2C0\"}.fa-id-badge:before{content:\"\uF2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\uF2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\uF2C3\"}.fa-quora:before{content:\"\uF2C4\"}.fa-free-code-camp:before{content:\"\uF2C5\"}.fa-telegram:before{content:\"\uF2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\uF2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\uF2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\uF2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\uF2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\uF2CB\"}.fa-shower:before{content:\"\uF2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\uF2CD\"}.fa-podcast:before{content:\"\uF2CE\"}.fa-window-maximize:before{content:\"\uF2D0\"}.fa-window-minimize:before{content:\"\uF2D1\"}.fa-window-restore:before{content:\"\uF2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\uF2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\uF2D4\"}.fa-bandcamp:before{content:\"\uF2D5\"}.fa-grav:before{content:\"\uF2D6\"}.fa-etsy:before{content:\"\uF2D7\"}.fa-imdb:before{content:\"\uF2D8\"}.fa-ravelry:before{content:\"\uF2D9\"}.fa-eercast:before{content:\"\uF2DA\"}.fa-microchip:before{content:\"\uF2DB\"}.fa-snowflake-o:before{content:\"\uF2DC\"}.fa-superpowers:before{content:\"\uF2DD\"}.fa-wpexplorer:before{content:\"\uF2DE\"}.fa-meetup:before{content:\"\uF2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}#editor{min-height:150px;overflow:auto;margin-top:5px;resize:vertical;outline:0}.angular-editor-toolbar{font:100 .8rem/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:inline-block;border-radius:5px;background-color:#fff;margin-right:5px;vertical-align:middle;border:1px solid #ddd;margin-bottom:3px}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:transparent;padding:.4rem;min-width:2rem;float:left;border:0 solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:first-child{border-radius:5px 0 0 5px}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:last-child{border-radius:0 5px 5px 0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:first-child:last-child{border-radius:5px}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:0;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:24px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}"]
                },] },
    ];
    /** @nocollapse */
    AngularEditorToolbarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: AngularEditorService },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    AngularEditorToolbarComponent.propDecorators = {
        execute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return AngularEditorToolbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularEditorComponent = /** @class */ (function () {
    function AngularEditorComponent(_renderer, editorService, _document) {
        this._renderer = _renderer;
        this.editorService = editorService;
        this._document = _document;
        this.modeVisual = true;
        this.showPlaceholder = false;
        this.id = '';
        this.config = angularEditorConfig;
        this.viewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    AngularEditorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.editorToolbar.id = this.id;
        this.editorToolbar.customClasses = this.config.customClasses;
        this.editorService.uploadUrl = this.config.uploadUrl;
        if (this.config.showToolbar !== undefined) {
            this.editorToolbar.showToolbar = this.config.showToolbar;
        }
        if (this.config.defaultParagraphSeparator) {
            this.editorService.setDefaultParagraphSeparator(this.config.defaultParagraphSeparator);
        }
    };
    /**
     * @return {?}
     */
    AngularEditorComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.config.defaultFontName) {
            this.editorToolbar.fontName = this.config.defaultFontName;
            this.onEditorFocus();
            this.editorService.setFontName(this.config.defaultFontName);
        }
        if (this.config.defaultFontSize) {
            this.editorToolbar.fontSize = this.config.defaultFontSize;
            this.onEditorFocus();
            this.editorService.setFontSize(this.config.defaultFontSize);
        }
    };
    /**
     * Executed command from editor header buttons
     * @param command string from triggerCommand
     */
    /**
     * Executed command from editor header buttons
     * @param {?} command string from triggerCommand
     * @return {?}
     */
    AngularEditorComponent.prototype.executeCommand = /**
     * Executed command from editor header buttons
     * @param {?} command string from triggerCommand
     * @return {?}
     */
    function (command) {
        if (command === 'toggleEditorMode') {
            this.toggleEditorMode(this.modeVisual);
        }
        else if (command !== '') {
            this.editorService.executeCommand(command);
            this.exec();
        }
        this.onEditorFocus();
        return;
    };
    /**
     * @return {?}
     */
    AngularEditorComponent.prototype.onTextAreaBlur = /**
     * @return {?}
     */
    function () {
        /**
             * save selection if focussed out
             */
        this.editorService.saveSelection();
        if (typeof this.onTouched === 'function') {
            this.onTouched();
        }
        return;
    };
    /**
     *  focus the text area when the editor is focussed
     */
    /**
     *  focus the text area when the editor is focussed
     * @return {?}
     */
    AngularEditorComponent.prototype.onEditorFocus = /**
     *  focus the text area when the editor is focussed
     * @return {?}
     */
    function () {
        this.textArea.nativeElement.focus();
    };
    /**
     * Executed from the contenteditable section while the input property changes
     * @param html html string from contenteditable
     */
    /**
     * Executed from the contenteditable section while the input property changes
     * @param {?} html html string from contenteditable
     * @return {?}
     */
    AngularEditorComponent.prototype.onContentChange = /**
     * Executed from the contenteditable section while the input property changes
     * @param {?} html html string from contenteditable
     * @return {?}
     */
    function (html) {
        if (typeof this.onChange === 'function') {
            this.onChange(html);
            if ((!html || html === '<br>' || html === '') !== this.showPlaceholder) {
                this.togglePlaceholder(this.showPlaceholder);
            }
        }
        return;
    };
    /**
     * Set the function to be called
     * when the control receives a change event.
     *
     * @param fn a function
     */
    /**
     * Set the function to be called
     * when the control receives a change event.
     *
     * @param {?} fn a function
     * @return {?}
     */
    AngularEditorComponent.prototype.registerOnChange = /**
     * Set the function to be called
     * when the control receives a change event.
     *
     * @param {?} fn a function
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * Set the function to be called
     * when the control receives a touch event.
     *
     * @param fn a function
     */
    /**
     * Set the function to be called
     * when the control receives a touch event.
     *
     * @param {?} fn a function
     * @return {?}
     */
    AngularEditorComponent.prototype.registerOnTouched = /**
     * Set the function to be called
     * when the control receives a touch event.
     *
     * @param {?} fn a function
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * Write a new value to the element.
     *
     * @param value value to be executed when there is a change in contenteditable
     */
    /**
     * Write a new value to the element.
     *
     * @param {?} value value to be executed when there is a change in contenteditable
     * @return {?}
     */
    AngularEditorComponent.prototype.writeValue = /**
     * Write a new value to the element.
     *
     * @param {?} value value to be executed when there is a change in contenteditable
     * @return {?}
     */
    function (value) {
        if ((!value || value === '<br>' || value === '') !== this.showPlaceholder) {
            this.togglePlaceholder(this.showPlaceholder);
        }
        if (value === null || value === undefined || value === '' || value === '<br>') {
            value = null;
        }
        this.refreshView(value);
    };
    /**
     * refresh view/HTML of the editor
     *
     * @param value html string from the editor
     */
    /**
     * refresh view/HTML of the editor
     *
     * @param {?} value html string from the editor
     * @return {?}
     */
    AngularEditorComponent.prototype.refreshView = /**
     * refresh view/HTML of the editor
     *
     * @param {?} value html string from the editor
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var normalizedValue = value === null ? '' : value;
        this._renderer.setProperty(this.textArea.nativeElement, 'innerHTML', normalizedValue);
        return;
    };
    /**
     * toggles placeholder based on input string
     *
     * @param value A HTML string from the editor
     */
    /**
     * toggles placeholder based on input string
     *
     * @param {?} value A HTML string from the editor
     * @return {?}
     */
    AngularEditorComponent.prototype.togglePlaceholder = /**
     * toggles placeholder based on input string
     *
     * @param {?} value A HTML string from the editor
     * @return {?}
     */
    function (value) {
        if (!value) {
            this._renderer.addClass(this.editorWrapper.nativeElement, 'show-placeholder');
            this.showPlaceholder = true;
        }
        else {
            this._renderer.removeClass(this.editorWrapper.nativeElement, 'show-placeholder');
            this.showPlaceholder = false;
        }
        return;
    };
    /**
     * Implements disabled state for this element
     *
     * @param isDisabled
     */
    /**
     * Implements disabled state for this element
     *
     * @param {?} isDisabled
     * @return {?}
     */
    AngularEditorComponent.prototype.setDisabledState = /**
     * Implements disabled state for this element
     *
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        /** @type {?} */
        var div = this.textArea.nativeElement;
        /** @type {?} */
        var action = isDisabled ? 'addClass' : 'removeClass';
        this._renderer[action](div, 'disabled');
    };
    /**
     * toggles editor mode based on bToSource bool
     *
     * @param bToSource A boolean value from the editor
     */
    /**
     * toggles editor mode based on bToSource bool
     *
     * @param {?} bToSource A boolean value from the editor
     * @return {?}
     */
    AngularEditorComponent.prototype.toggleEditorMode = /**
     * toggles editor mode based on bToSource bool
     *
     * @param {?} bToSource A boolean value from the editor
     * @return {?}
     */
    function (bToSource) {
        /** @type {?} */
        var oContent;
        /** @type {?} */
        var editableElement = this.textArea.nativeElement;
        if (bToSource) {
            oContent = this._document.createTextNode(editableElement.innerHTML);
            editableElement.innerHTML = '';
            /** @type {?} */
            var oPre = this._document.createElement('pre');
            oPre.setAttribute("style", "margin: 0; outline: none;");
            /** @type {?} */
            var oCode = this._document.createElement('code');
            editableElement.contentEditable = false;
            oCode.id = "sourceText";
            oCode.setAttribute("style", "white-space: pre-wrap; word-break: keep-all; margin: 0; outline: none; background-color: #fff5b9;");
            oCode.contentEditable = 'true';
            oCode.appendChild(oContent);
            oPre.appendChild(oCode);
            editableElement.appendChild(oPre);
            this._document.execCommand("defaultParagraphSeparator", false, "div");
            this.modeVisual = false;
            this.viewMode.emit(false);
            oCode.focus();
        }
        else {
            if (this._document.all) {
                editableElement.innerHTML = editableElement.innerText;
            }
            else {
                oContent = this._document.createRange();
                oContent.selectNodeContents(editableElement.firstChild);
                editableElement.innerHTML = oContent.toString();
            }
            editableElement.contentEditable = true;
            this.modeVisual = true;
            this.viewMode.emit(true);
            this.onContentChange(editableElement.innerHTML);
            editableElement.focus();
        }
        this.editorToolbar.setEditorMode(!this.modeVisual);
    };
    /**
     * toggles editor buttons when cursor moved or positioning
     *
     * Send a node array from the contentEditable of the editor
     */
    /**
     * toggles editor buttons when cursor moved or positioning
     *
     * Send a node array from the contentEditable of the editor
     * @return {?}
     */
    AngularEditorComponent.prototype.exec = /**
     * toggles editor buttons when cursor moved or positioning
     *
     * Send a node array from the contentEditable of the editor
     * @return {?}
     */
    function () {
        this.editorToolbar.triggerButtons();
        /** @type {?} */
        var userSelection;
        if (window.getSelection) {
            userSelection = window.getSelection();
        }
        /** @type {?} */
        var a = userSelection.focusNode;
        /** @type {?} */
        var els = [];
        while (a && a.id !== 'editor') {
            els.unshift(a);
            a = a.parentNode;
        }
        this.editorToolbar.triggerBlocks(els);
    };
    AngularEditorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'angular-editor',
                    template: "<div (focus)=\"onEditorFocus()\" class=\"angular-editor\" id=\"angularEditor\" [style.width]=\"config.width\"\n     [style.minWidth]=\"config.minWidth\">\n  <angular-editor-toolbar #editorToolbar (execute)=\"executeCommand($event)\"></angular-editor-toolbar>\n\n  <div class=\"angular-editor-wrapper\" #editorWrapper>\n    <div #editor id=\"editor\" class=\"angular-editor-textarea\" [attr.contenteditable]=\"config.editable\"\n         [attr.translate]=\"config.translate\"\n         [attr.spellcheck]=\"config.spellcheck\" [style.height]=\"config.height\" [style.minHeight]=\"config.minHeight\"\n         (input)=\"onContentChange($event.target.innerHTML)\" (blur)=\"onTextAreaBlur()\" (click)=\"exec()\" (keyup)=\"exec()\">\n    </div>\n    <span class=\"angular-editor-placeholder\">{{ placeholder || config['placeholder'] }}</span>\n  </div>\n</div>\n",
                    styles: ["@charset \"UTF-8\";/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(//netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(//netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format(\"embedded-opentype\"),url(//netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(//netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(//netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(//netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14286em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14286em;width:2.14286em;top:.14286em;text-align:center}.fa-li.fa-lg{left:-1.85714em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:2s linear infinite fa-spin;animation:2s linear infinite fa-spin}.fa-pulse{-webkit-animation:1s steps(8) infinite fa-spin;animation:1s steps(8) infinite fa-spin}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\uF000\"}.fa-music:before{content:\"\uF001\"}.fa-search:before{content:\"\uF002\"}.fa-envelope-o:before{content:\"\uF003\"}.fa-heart:before{content:\"\uF004\"}.fa-star:before{content:\"\uF005\"}.fa-star-o:before{content:\"\uF006\"}.fa-user:before{content:\"\uF007\"}.fa-film:before{content:\"\uF008\"}.fa-th-large:before{content:\"\uF009\"}.fa-th:before{content:\"\uF00A\"}.fa-th-list:before{content:\"\uF00B\"}.fa-check:before{content:\"\uF00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\uF00D\"}.fa-search-plus:before{content:\"\uF00E\"}.fa-search-minus:before{content:\"\uF010\"}.fa-power-off:before{content:\"\uF011\"}.fa-signal:before{content:\"\uF012\"}.fa-cog:before,.fa-gear:before{content:\"\uF013\"}.fa-trash-o:before{content:\"\uF014\"}.fa-home:before{content:\"\uF015\"}.fa-file-o:before{content:\"\uF016\"}.fa-clock-o:before{content:\"\uF017\"}.fa-road:before{content:\"\uF018\"}.fa-download:before{content:\"\uF019\"}.fa-arrow-circle-o-down:before{content:\"\uF01A\"}.fa-arrow-circle-o-up:before{content:\"\uF01B\"}.fa-inbox:before{content:\"\uF01C\"}.fa-play-circle-o:before{content:\"\uF01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\uF01E\"}.fa-refresh:before{content:\"\uF021\"}.fa-list-alt:before{content:\"\uF022\"}.fa-lock:before{content:\"\uF023\"}.fa-flag:before{content:\"\uF024\"}.fa-headphones:before{content:\"\uF025\"}.fa-volume-off:before{content:\"\uF026\"}.fa-volume-down:before{content:\"\uF027\"}.fa-volume-up:before{content:\"\uF028\"}.fa-qrcode:before{content:\"\uF029\"}.fa-barcode:before{content:\"\uF02A\"}.fa-tag:before{content:\"\uF02B\"}.fa-tags:before{content:\"\uF02C\"}.fa-book:before{content:\"\uF02D\"}.fa-bookmark:before{content:\"\uF02E\"}.fa-print:before{content:\"\uF02F\"}.fa-camera:before{content:\"\uF030\"}.fa-font:before{content:\"\uF031\"}.fa-bold:before{content:\"\uF032\"}.fa-italic:before{content:\"\uF033\"}.fa-text-height:before{content:\"\uF034\"}.fa-text-width:before{content:\"\uF035\"}.fa-align-left:before{content:\"\uF036\"}.fa-align-center:before{content:\"\uF037\"}.fa-align-right:before{content:\"\uF038\"}.fa-align-justify:before{content:\"\uF039\"}.fa-list:before{content:\"\uF03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\uF03B\"}.fa-indent:before{content:\"\uF03C\"}.fa-video-camera:before{content:\"\uF03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\uF03E\"}.fa-pencil:before{content:\"\uF040\"}.fa-map-marker:before{content:\"\uF041\"}.fa-adjust:before{content:\"\uF042\"}.fa-tint:before{content:\"\uF043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\uF044\"}.fa-share-square-o:before{content:\"\uF045\"}.fa-check-square-o:before{content:\"\uF046\"}.fa-arrows:before{content:\"\uF047\"}.fa-step-backward:before{content:\"\uF048\"}.fa-fast-backward:before{content:\"\uF049\"}.fa-backward:before{content:\"\uF04A\"}.fa-play:before{content:\"\uF04B\"}.fa-pause:before{content:\"\uF04C\"}.fa-stop:before{content:\"\uF04D\"}.fa-forward:before{content:\"\uF04E\"}.fa-fast-forward:before{content:\"\uF050\"}.fa-step-forward:before{content:\"\uF051\"}.fa-eject:before{content:\"\uF052\"}.fa-chevron-left:before{content:\"\uF053\"}.fa-chevron-right:before{content:\"\uF054\"}.fa-plus-circle:before{content:\"\uF055\"}.fa-minus-circle:before{content:\"\uF056\"}.fa-times-circle:before{content:\"\uF057\"}.fa-check-circle:before{content:\"\uF058\"}.fa-question-circle:before{content:\"\uF059\"}.fa-info-circle:before{content:\"\uF05A\"}.fa-crosshairs:before{content:\"\uF05B\"}.fa-times-circle-o:before{content:\"\uF05C\"}.fa-check-circle-o:before{content:\"\uF05D\"}.fa-ban:before{content:\"\uF05E\"}.fa-arrow-left:before{content:\"\uF060\"}.fa-arrow-right:before{content:\"\uF061\"}.fa-arrow-up:before{content:\"\uF062\"}.fa-arrow-down:before{content:\"\uF063\"}.fa-mail-forward:before,.fa-share:before{content:\"\uF064\"}.fa-expand:before{content:\"\uF065\"}.fa-compress:before{content:\"\uF066\"}.fa-plus:before{content:\"\uF067\"}.fa-minus:before{content:\"\uF068\"}.fa-asterisk:before{content:\"\uF069\"}.fa-exclamation-circle:before{content:\"\uF06A\"}.fa-gift:before{content:\"\uF06B\"}.fa-leaf:before{content:\"\uF06C\"}.fa-fire:before{content:\"\uF06D\"}.fa-eye:before{content:\"\uF06E\"}.fa-eye-slash:before{content:\"\uF070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\uF071\"}.fa-plane:before{content:\"\uF072\"}.fa-calendar:before{content:\"\uF073\"}.fa-random:before{content:\"\uF074\"}.fa-comment:before{content:\"\uF075\"}.fa-magnet:before{content:\"\uF076\"}.fa-chevron-up:before{content:\"\uF077\"}.fa-chevron-down:before{content:\"\uF078\"}.fa-retweet:before{content:\"\uF079\"}.fa-shopping-cart:before{content:\"\uF07A\"}.fa-folder:before{content:\"\uF07B\"}.fa-folder-open:before{content:\"\uF07C\"}.fa-arrows-v:before{content:\"\uF07D\"}.fa-arrows-h:before{content:\"\uF07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\uF080\"}.fa-twitter-square:before{content:\"\uF081\"}.fa-facebook-square:before{content:\"\uF082\"}.fa-camera-retro:before{content:\"\uF083\"}.fa-key:before{content:\"\uF084\"}.fa-cogs:before,.fa-gears:before{content:\"\uF085\"}.fa-comments:before{content:\"\uF086\"}.fa-thumbs-o-up:before{content:\"\uF087\"}.fa-thumbs-o-down:before{content:\"\uF088\"}.fa-star-half:before{content:\"\uF089\"}.fa-heart-o:before{content:\"\uF08A\"}.fa-sign-out:before{content:\"\uF08B\"}.fa-linkedin-square:before{content:\"\uF08C\"}.fa-thumb-tack:before{content:\"\uF08D\"}.fa-external-link:before{content:\"\uF08E\"}.fa-sign-in:before{content:\"\uF090\"}.fa-trophy:before{content:\"\uF091\"}.fa-github-square:before{content:\"\uF092\"}.fa-upload:before{content:\"\uF093\"}.fa-lemon-o:before{content:\"\uF094\"}.fa-phone:before{content:\"\uF095\"}.fa-square-o:before{content:\"\uF096\"}.fa-bookmark-o:before{content:\"\uF097\"}.fa-phone-square:before{content:\"\uF098\"}.fa-twitter:before{content:\"\uF099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\uF09A\"}.fa-github:before{content:\"\uF09B\"}.fa-unlock:before{content:\"\uF09C\"}.fa-credit-card:before{content:\"\uF09D\"}.fa-feed:before,.fa-rss:before{content:\"\uF09E\"}.fa-hdd-o:before{content:\"\uF0A0\"}.fa-bullhorn:before{content:\"\uF0A1\"}.fa-bell:before{content:\"\uF0F3\"}.fa-certificate:before{content:\"\uF0A3\"}.fa-hand-o-right:before{content:\"\uF0A4\"}.fa-hand-o-left:before{content:\"\uF0A5\"}.fa-hand-o-up:before{content:\"\uF0A6\"}.fa-hand-o-down:before{content:\"\uF0A7\"}.fa-arrow-circle-left:before{content:\"\uF0A8\"}.fa-arrow-circle-right:before{content:\"\uF0A9\"}.fa-arrow-circle-up:before{content:\"\uF0AA\"}.fa-arrow-circle-down:before{content:\"\uF0AB\"}.fa-globe:before{content:\"\uF0AC\"}.fa-wrench:before{content:\"\uF0AD\"}.fa-tasks:before{content:\"\uF0AE\"}.fa-filter:before{content:\"\uF0B0\"}.fa-briefcase:before{content:\"\uF0B1\"}.fa-arrows-alt:before{content:\"\uF0B2\"}.fa-group:before,.fa-users:before{content:\"\uF0C0\"}.fa-chain:before,.fa-link:before{content:\"\uF0C1\"}.fa-cloud:before{content:\"\uF0C2\"}.fa-flask:before{content:\"\uF0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\uF0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\uF0C5\"}.fa-paperclip:before{content:\"\uF0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\uF0C7\"}.fa-square:before{content:\"\uF0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\uF0C9\"}.fa-list-ul:before{content:\"\uF0CA\"}.fa-list-ol:before{content:\"\uF0CB\"}.fa-strikethrough:before{content:\"\uF0CC\"}.fa-underline:before{content:\"\uF0CD\"}.fa-table:before{content:\"\uF0CE\"}.fa-magic:before{content:\"\uF0D0\"}.fa-truck:before{content:\"\uF0D1\"}.fa-pinterest:before{content:\"\uF0D2\"}.fa-pinterest-square:before{content:\"\uF0D3\"}.fa-google-plus-square:before{content:\"\uF0D4\"}.fa-google-plus:before{content:\"\uF0D5\"}.fa-money:before{content:\"\uF0D6\"}.fa-caret-down:before{content:\"\uF0D7\"}.fa-caret-up:before{content:\"\uF0D8\"}.fa-caret-left:before{content:\"\uF0D9\"}.fa-caret-right:before{content:\"\uF0DA\"}.fa-columns:before{content:\"\uF0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\uF0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\uF0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\uF0DE\"}.fa-envelope:before{content:\"\uF0E0\"}.fa-linkedin:before{content:\"\uF0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\uF0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\uF0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\uF0E4\"}.fa-comment-o:before{content:\"\uF0E5\"}.fa-comments-o:before{content:\"\uF0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\uF0E7\"}.fa-sitemap:before{content:\"\uF0E8\"}.fa-umbrella:before{content:\"\uF0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\uF0EA\"}.fa-lightbulb-o:before{content:\"\uF0EB\"}.fa-exchange:before{content:\"\uF0EC\"}.fa-cloud-download:before{content:\"\uF0ED\"}.fa-cloud-upload:before{content:\"\uF0EE\"}.fa-user-md:before{content:\"\uF0F0\"}.fa-stethoscope:before{content:\"\uF0F1\"}.fa-suitcase:before{content:\"\uF0F2\"}.fa-bell-o:before{content:\"\uF0A2\"}.fa-coffee:before{content:\"\uF0F4\"}.fa-cutlery:before{content:\"\uF0F5\"}.fa-file-text-o:before{content:\"\uF0F6\"}.fa-building-o:before{content:\"\uF0F7\"}.fa-hospital-o:before{content:\"\uF0F8\"}.fa-ambulance:before{content:\"\uF0F9\"}.fa-medkit:before{content:\"\uF0FA\"}.fa-fighter-jet:before{content:\"\uF0FB\"}.fa-beer:before{content:\"\uF0FC\"}.fa-h-square:before{content:\"\uF0FD\"}.fa-plus-square:before{content:\"\uF0FE\"}.fa-angle-double-left:before{content:\"\uF100\"}.fa-angle-double-right:before{content:\"\uF101\"}.fa-angle-double-up:before{content:\"\uF102\"}.fa-angle-double-down:before{content:\"\uF103\"}.fa-angle-left:before{content:\"\uF104\"}.fa-angle-right:before{content:\"\uF105\"}.fa-angle-up:before{content:\"\uF106\"}.fa-angle-down:before{content:\"\uF107\"}.fa-desktop:before{content:\"\uF108\"}.fa-laptop:before{content:\"\uF109\"}.fa-tablet:before{content:\"\uF10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\uF10B\"}.fa-circle-o:before{content:\"\uF10C\"}.fa-quote-left:before{content:\"\uF10D\"}.fa-quote-right:before{content:\"\uF10E\"}.fa-spinner:before{content:\"\uF110\"}.fa-circle:before{content:\"\uF111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\uF112\"}.fa-github-alt:before{content:\"\uF113\"}.fa-folder-o:before{content:\"\uF114\"}.fa-folder-open-o:before{content:\"\uF115\"}.fa-smile-o:before{content:\"\uF118\"}.fa-frown-o:before{content:\"\uF119\"}.fa-meh-o:before{content:\"\uF11A\"}.fa-gamepad:before{content:\"\uF11B\"}.fa-keyboard-o:before{content:\"\uF11C\"}.fa-flag-o:before{content:\"\uF11D\"}.fa-flag-checkered:before{content:\"\uF11E\"}.fa-terminal:before{content:\"\uF120\"}.fa-code:before{content:\"\uF121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\uF122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\uF123\"}.fa-location-arrow:before{content:\"\uF124\"}.fa-crop:before{content:\"\uF125\"}.fa-code-fork:before{content:\"\uF126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\uF127\"}.fa-question:before{content:\"\uF128\"}.fa-info:before{content:\"\uF129\"}.fa-exclamation:before{content:\"\uF12A\"}.fa-superscript:before{content:\"\uF12B\"}.fa-subscript:before{content:\"\uF12C\"}.fa-eraser:before{content:\"\uF12D\"}.fa-puzzle-piece:before{content:\"\uF12E\"}.fa-microphone:before{content:\"\uF130\"}.fa-microphone-slash:before{content:\"\uF131\"}.fa-shield:before{content:\"\uF132\"}.fa-calendar-o:before{content:\"\uF133\"}.fa-fire-extinguisher:before{content:\"\uF134\"}.fa-rocket:before{content:\"\uF135\"}.fa-maxcdn:before{content:\"\uF136\"}.fa-chevron-circle-left:before{content:\"\uF137\"}.fa-chevron-circle-right:before{content:\"\uF138\"}.fa-chevron-circle-up:before{content:\"\uF139\"}.fa-chevron-circle-down:before{content:\"\uF13A\"}.fa-html5:before{content:\"\uF13B\"}.fa-css3:before{content:\"\uF13C\"}.fa-anchor:before{content:\"\uF13D\"}.fa-unlock-alt:before{content:\"\uF13E\"}.fa-bullseye:before{content:\"\uF140\"}.fa-ellipsis-h:before{content:\"\uF141\"}.fa-ellipsis-v:before{content:\"\uF142\"}.fa-rss-square:before{content:\"\uF143\"}.fa-play-circle:before{content:\"\uF144\"}.fa-ticket:before{content:\"\uF145\"}.fa-minus-square:before{content:\"\uF146\"}.fa-minus-square-o:before{content:\"\uF147\"}.fa-level-up:before{content:\"\uF148\"}.fa-level-down:before{content:\"\uF149\"}.fa-check-square:before{content:\"\uF14A\"}.fa-pencil-square:before{content:\"\uF14B\"}.fa-external-link-square:before{content:\"\uF14C\"}.fa-share-square:before{content:\"\uF14D\"}.fa-compass:before{content:\"\uF14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\uF150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\uF151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\uF152\"}.fa-eur:before,.fa-euro:before{content:\"\uF153\"}.fa-gbp:before{content:\"\uF154\"}.fa-dollar:before,.fa-usd:before{content:\"\uF155\"}.fa-inr:before,.fa-rupee:before{content:\"\uF156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\uF157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\uF158\"}.fa-krw:before,.fa-won:before{content:\"\uF159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\uF15A\"}.fa-file:before{content:\"\uF15B\"}.fa-file-text:before{content:\"\uF15C\"}.fa-sort-alpha-asc:before{content:\"\uF15D\"}.fa-sort-alpha-desc:before{content:\"\uF15E\"}.fa-sort-amount-asc:before{content:\"\uF160\"}.fa-sort-amount-desc:before{content:\"\uF161\"}.fa-sort-numeric-asc:before{content:\"\uF162\"}.fa-sort-numeric-desc:before{content:\"\uF163\"}.fa-thumbs-up:before{content:\"\uF164\"}.fa-thumbs-down:before{content:\"\uF165\"}.fa-youtube-square:before{content:\"\uF166\"}.fa-youtube:before{content:\"\uF167\"}.fa-xing:before{content:\"\uF168\"}.fa-xing-square:before{content:\"\uF169\"}.fa-youtube-play:before{content:\"\uF16A\"}.fa-dropbox:before{content:\"\uF16B\"}.fa-stack-overflow:before{content:\"\uF16C\"}.fa-instagram:before{content:\"\uF16D\"}.fa-flickr:before{content:\"\uF16E\"}.fa-adn:before{content:\"\uF170\"}.fa-bitbucket:before{content:\"\uF171\"}.fa-bitbucket-square:before{content:\"\uF172\"}.fa-tumblr:before{content:\"\uF173\"}.fa-tumblr-square:before{content:\"\uF174\"}.fa-long-arrow-down:before{content:\"\uF175\"}.fa-long-arrow-up:before{content:\"\uF176\"}.fa-long-arrow-left:before{content:\"\uF177\"}.fa-long-arrow-right:before{content:\"\uF178\"}.fa-apple:before{content:\"\uF179\"}.fa-windows:before{content:\"\uF17A\"}.fa-android:before{content:\"\uF17B\"}.fa-linux:before{content:\"\uF17C\"}.fa-dribbble:before{content:\"\uF17D\"}.fa-skype:before{content:\"\uF17E\"}.fa-foursquare:before{content:\"\uF180\"}.fa-trello:before{content:\"\uF181\"}.fa-female:before{content:\"\uF182\"}.fa-male:before{content:\"\uF183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\uF184\"}.fa-sun-o:before{content:\"\uF185\"}.fa-moon-o:before{content:\"\uF186\"}.fa-archive:before{content:\"\uF187\"}.fa-bug:before{content:\"\uF188\"}.fa-vk:before{content:\"\uF189\"}.fa-weibo:before{content:\"\uF18A\"}.fa-renren:before{content:\"\uF18B\"}.fa-pagelines:before{content:\"\uF18C\"}.fa-stack-exchange:before{content:\"\uF18D\"}.fa-arrow-circle-o-right:before{content:\"\uF18E\"}.fa-arrow-circle-o-left:before{content:\"\uF190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\uF191\"}.fa-dot-circle-o:before{content:\"\uF192\"}.fa-wheelchair:before{content:\"\uF193\"}.fa-vimeo-square:before{content:\"\uF194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\uF195\"}.fa-plus-square-o:before{content:\"\uF196\"}.fa-space-shuttle:before{content:\"\uF197\"}.fa-slack:before{content:\"\uF198\"}.fa-envelope-square:before{content:\"\uF199\"}.fa-wordpress:before{content:\"\uF19A\"}.fa-openid:before{content:\"\uF19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\uF19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\uF19D\"}.fa-yahoo:before{content:\"\uF19E\"}.fa-google:before{content:\"\uF1A0\"}.fa-reddit:before{content:\"\uF1A1\"}.fa-reddit-square:before{content:\"\uF1A2\"}.fa-stumbleupon-circle:before{content:\"\uF1A3\"}.fa-stumbleupon:before{content:\"\uF1A4\"}.fa-delicious:before{content:\"\uF1A5\"}.fa-digg:before{content:\"\uF1A6\"}.fa-pied-piper-pp:before{content:\"\uF1A7\"}.fa-pied-piper-alt:before{content:\"\uF1A8\"}.fa-drupal:before{content:\"\uF1A9\"}.fa-joomla:before{content:\"\uF1AA\"}.fa-language:before{content:\"\uF1AB\"}.fa-fax:before{content:\"\uF1AC\"}.fa-building:before{content:\"\uF1AD\"}.fa-child:before{content:\"\uF1AE\"}.fa-paw:before{content:\"\uF1B0\"}.fa-spoon:before{content:\"\uF1B1\"}.fa-cube:before{content:\"\uF1B2\"}.fa-cubes:before{content:\"\uF1B3\"}.fa-behance:before{content:\"\uF1B4\"}.fa-behance-square:before{content:\"\uF1B5\"}.fa-steam:before{content:\"\uF1B6\"}.fa-steam-square:before{content:\"\uF1B7\"}.fa-recycle:before{content:\"\uF1B8\"}.fa-automobile:before,.fa-car:before{content:\"\uF1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\uF1BA\"}.fa-tree:before{content:\"\uF1BB\"}.fa-spotify:before{content:\"\uF1BC\"}.fa-deviantart:before{content:\"\uF1BD\"}.fa-soundcloud:before{content:\"\uF1BE\"}.fa-database:before{content:\"\uF1C0\"}.fa-file-pdf-o:before{content:\"\uF1C1\"}.fa-file-word-o:before{content:\"\uF1C2\"}.fa-file-excel-o:before{content:\"\uF1C3\"}.fa-file-powerpoint-o:before{content:\"\uF1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\uF1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\uF1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\uF1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\uF1C8\"}.fa-file-code-o:before{content:\"\uF1C9\"}.fa-vine:before{content:\"\uF1CA\"}.fa-codepen:before{content:\"\uF1CB\"}.fa-jsfiddle:before{content:\"\uF1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\uF1CD\"}.fa-circle-o-notch:before{content:\"\uF1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\uF1D0\"}.fa-empire:before,.fa-ge:before{content:\"\uF1D1\"}.fa-git-square:before{content:\"\uF1D2\"}.fa-git:before{content:\"\uF1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\uF1D4\"}.fa-tencent-weibo:before{content:\"\uF1D5\"}.fa-qq:before{content:\"\uF1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\uF1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\uF1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\uF1D9\"}.fa-history:before{content:\"\uF1DA\"}.fa-circle-thin:before{content:\"\uF1DB\"}.fa-header:before{content:\"\uF1DC\"}.fa-paragraph:before{content:\"\uF1DD\"}.fa-sliders:before{content:\"\uF1DE\"}.fa-share-alt:before{content:\"\uF1E0\"}.fa-share-alt-square:before{content:\"\uF1E1\"}.fa-bomb:before{content:\"\uF1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\uF1E3\"}.fa-tty:before{content:\"\uF1E4\"}.fa-binoculars:before{content:\"\uF1E5\"}.fa-plug:before{content:\"\uF1E6\"}.fa-slideshare:before{content:\"\uF1E7\"}.fa-twitch:before{content:\"\uF1E8\"}.fa-yelp:before{content:\"\uF1E9\"}.fa-newspaper-o:before{content:\"\uF1EA\"}.fa-wifi:before{content:\"\uF1EB\"}.fa-calculator:before{content:\"\uF1EC\"}.fa-paypal:before{content:\"\uF1ED\"}.fa-google-wallet:before{content:\"\uF1EE\"}.fa-cc-visa:before{content:\"\uF1F0\"}.fa-cc-mastercard:before{content:\"\uF1F1\"}.fa-cc-discover:before{content:\"\uF1F2\"}.fa-cc-amex:before{content:\"\uF1F3\"}.fa-cc-paypal:before{content:\"\uF1F4\"}.fa-cc-stripe:before{content:\"\uF1F5\"}.fa-bell-slash:before{content:\"\uF1F6\"}.fa-bell-slash-o:before{content:\"\uF1F7\"}.fa-trash:before{content:\"\uF1F8\"}.fa-copyright:before{content:\"\uF1F9\"}.fa-at:before{content:\"\uF1FA\"}.fa-eyedropper:before{content:\"\uF1FB\"}.fa-paint-brush:before{content:\"\uF1FC\"}.fa-birthday-cake:before{content:\"\uF1FD\"}.fa-area-chart:before{content:\"\uF1FE\"}.fa-pie-chart:before{content:\"\uF200\"}.fa-line-chart:before{content:\"\uF201\"}.fa-lastfm:before{content:\"\uF202\"}.fa-lastfm-square:before{content:\"\uF203\"}.fa-toggle-off:before{content:\"\uF204\"}.fa-toggle-on:before{content:\"\uF205\"}.fa-bicycle:before{content:\"\uF206\"}.fa-bus:before{content:\"\uF207\"}.fa-ioxhost:before{content:\"\uF208\"}.fa-angellist:before{content:\"\uF209\"}.fa-cc:before{content:\"\uF20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\uF20B\"}.fa-meanpath:before{content:\"\uF20C\"}.fa-buysellads:before{content:\"\uF20D\"}.fa-connectdevelop:before{content:\"\uF20E\"}.fa-dashcube:before{content:\"\uF210\"}.fa-forumbee:before{content:\"\uF211\"}.fa-leanpub:before{content:\"\uF212\"}.fa-sellsy:before{content:\"\uF213\"}.fa-shirtsinbulk:before{content:\"\uF214\"}.fa-simplybuilt:before{content:\"\uF215\"}.fa-skyatlas:before{content:\"\uF216\"}.fa-cart-plus:before{content:\"\uF217\"}.fa-cart-arrow-down:before{content:\"\uF218\"}.fa-diamond:before{content:\"\uF219\"}.fa-ship:before{content:\"\uF21A\"}.fa-user-secret:before{content:\"\uF21B\"}.fa-motorcycle:before{content:\"\uF21C\"}.fa-street-view:before{content:\"\uF21D\"}.fa-heartbeat:before{content:\"\uF21E\"}.fa-venus:before{content:\"\uF221\"}.fa-mars:before{content:\"\uF222\"}.fa-mercury:before{content:\"\uF223\"}.fa-intersex:before,.fa-transgender:before{content:\"\uF224\"}.fa-transgender-alt:before{content:\"\uF225\"}.fa-venus-double:before{content:\"\uF226\"}.fa-mars-double:before{content:\"\uF227\"}.fa-venus-mars:before{content:\"\uF228\"}.fa-mars-stroke:before{content:\"\uF229\"}.fa-mars-stroke-v:before{content:\"\uF22A\"}.fa-mars-stroke-h:before{content:\"\uF22B\"}.fa-neuter:before{content:\"\uF22C\"}.fa-genderless:before{content:\"\uF22D\"}.fa-facebook-official:before{content:\"\uF230\"}.fa-pinterest-p:before{content:\"\uF231\"}.fa-whatsapp:before{content:\"\uF232\"}.fa-server:before{content:\"\uF233\"}.fa-user-plus:before{content:\"\uF234\"}.fa-user-times:before{content:\"\uF235\"}.fa-bed:before,.fa-hotel:before{content:\"\uF236\"}.fa-viacoin:before{content:\"\uF237\"}.fa-train:before{content:\"\uF238\"}.fa-subway:before{content:\"\uF239\"}.fa-medium:before{content:\"\uF23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\uF23B\"}.fa-optin-monster:before{content:\"\uF23C\"}.fa-opencart:before{content:\"\uF23D\"}.fa-expeditedssl:before{content:\"\uF23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\uF240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\uF241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\uF242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\uF243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\uF244\"}.fa-mouse-pointer:before{content:\"\uF245\"}.fa-i-cursor:before{content:\"\uF246\"}.fa-object-group:before{content:\"\uF247\"}.fa-object-ungroup:before{content:\"\uF248\"}.fa-sticky-note:before{content:\"\uF249\"}.fa-sticky-note-o:before{content:\"\uF24A\"}.fa-cc-jcb:before{content:\"\uF24B\"}.fa-cc-diners-club:before{content:\"\uF24C\"}.fa-clone:before{content:\"\uF24D\"}.fa-balance-scale:before{content:\"\uF24E\"}.fa-hourglass-o:before{content:\"\uF250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\uF251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\uF252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\uF253\"}.fa-hourglass:before{content:\"\uF254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\uF255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\uF256\"}.fa-hand-scissors-o:before{content:\"\uF257\"}.fa-hand-lizard-o:before{content:\"\uF258\"}.fa-hand-spock-o:before{content:\"\uF259\"}.fa-hand-pointer-o:before{content:\"\uF25A\"}.fa-hand-peace-o:before{content:\"\uF25B\"}.fa-trademark:before{content:\"\uF25C\"}.fa-registered:before{content:\"\uF25D\"}.fa-creative-commons:before{content:\"\uF25E\"}.fa-gg:before{content:\"\uF260\"}.fa-gg-circle:before{content:\"\uF261\"}.fa-tripadvisor:before{content:\"\uF262\"}.fa-odnoklassniki:before{content:\"\uF263\"}.fa-odnoklassniki-square:before{content:\"\uF264\"}.fa-get-pocket:before{content:\"\uF265\"}.fa-wikipedia-w:before{content:\"\uF266\"}.fa-safari:before{content:\"\uF267\"}.fa-chrome:before{content:\"\uF268\"}.fa-firefox:before{content:\"\uF269\"}.fa-opera:before{content:\"\uF26A\"}.fa-internet-explorer:before{content:\"\uF26B\"}.fa-television:before,.fa-tv:before{content:\"\uF26C\"}.fa-contao:before{content:\"\uF26D\"}.fa-500px:before{content:\"\uF26E\"}.fa-amazon:before{content:\"\uF270\"}.fa-calendar-plus-o:before{content:\"\uF271\"}.fa-calendar-minus-o:before{content:\"\uF272\"}.fa-calendar-times-o:before{content:\"\uF273\"}.fa-calendar-check-o:before{content:\"\uF274\"}.fa-industry:before{content:\"\uF275\"}.fa-map-pin:before{content:\"\uF276\"}.fa-map-signs:before{content:\"\uF277\"}.fa-map-o:before{content:\"\uF278\"}.fa-map:before{content:\"\uF279\"}.fa-commenting:before{content:\"\uF27A\"}.fa-commenting-o:before{content:\"\uF27B\"}.fa-houzz:before{content:\"\uF27C\"}.fa-vimeo:before{content:\"\uF27D\"}.fa-black-tie:before{content:\"\uF27E\"}.fa-fonticons:before{content:\"\uF280\"}.fa-reddit-alien:before{content:\"\uF281\"}.fa-edge:before{content:\"\uF282\"}.fa-credit-card-alt:before{content:\"\uF283\"}.fa-codiepie:before{content:\"\uF284\"}.fa-modx:before{content:\"\uF285\"}.fa-fort-awesome:before{content:\"\uF286\"}.fa-usb:before{content:\"\uF287\"}.fa-product-hunt:before{content:\"\uF288\"}.fa-mixcloud:before{content:\"\uF289\"}.fa-scribd:before{content:\"\uF28A\"}.fa-pause-circle:before{content:\"\uF28B\"}.fa-pause-circle-o:before{content:\"\uF28C\"}.fa-stop-circle:before{content:\"\uF28D\"}.fa-stop-circle-o:before{content:\"\uF28E\"}.fa-shopping-bag:before{content:\"\uF290\"}.fa-shopping-basket:before{content:\"\uF291\"}.fa-hashtag:before{content:\"\uF292\"}.fa-bluetooth:before{content:\"\uF293\"}.fa-bluetooth-b:before{content:\"\uF294\"}.fa-percent:before{content:\"\uF295\"}.fa-gitlab:before{content:\"\uF296\"}.fa-wpbeginner:before{content:\"\uF297\"}.fa-wpforms:before{content:\"\uF298\"}.fa-envira:before{content:\"\uF299\"}.fa-universal-access:before{content:\"\uF29A\"}.fa-wheelchair-alt:before{content:\"\uF29B\"}.fa-question-circle-o:before{content:\"\uF29C\"}.fa-blind:before{content:\"\uF29D\"}.fa-audio-description:before{content:\"\uF29E\"}.fa-volume-control-phone:before{content:\"\uF2A0\"}.fa-braille:before{content:\"\uF2A1\"}.fa-assistive-listening-systems:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\uF2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\uF2A4\"}.fa-glide:before{content:\"\uF2A5\"}.fa-glide-g:before{content:\"\uF2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\uF2A7\"}.fa-low-vision:before{content:\"\uF2A8\"}.fa-viadeo:before{content:\"\uF2A9\"}.fa-viadeo-square:before{content:\"\uF2AA\"}.fa-snapchat:before{content:\"\uF2AB\"}.fa-snapchat-ghost:before{content:\"\uF2AC\"}.fa-snapchat-square:before{content:\"\uF2AD\"}.fa-pied-piper:before{content:\"\uF2AE\"}.fa-first-order:before{content:\"\uF2B0\"}.fa-yoast:before{content:\"\uF2B1\"}.fa-themeisle:before{content:\"\uF2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\uF2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\uF2B4\"}.fa-handshake-o:before{content:\"\uF2B5\"}.fa-envelope-open:before{content:\"\uF2B6\"}.fa-envelope-open-o:before{content:\"\uF2B7\"}.fa-linode:before{content:\"\uF2B8\"}.fa-address-book:before{content:\"\uF2B9\"}.fa-address-book-o:before{content:\"\uF2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\uF2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\uF2BC\"}.fa-user-circle:before{content:\"\uF2BD\"}.fa-user-circle-o:before{content:\"\uF2BE\"}.fa-user-o:before{content:\"\uF2C0\"}.fa-id-badge:before{content:\"\uF2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\uF2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\uF2C3\"}.fa-quora:before{content:\"\uF2C4\"}.fa-free-code-camp:before{content:\"\uF2C5\"}.fa-telegram:before{content:\"\uF2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\uF2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\uF2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\uF2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\uF2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\uF2CB\"}.fa-shower:before{content:\"\uF2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\uF2CD\"}.fa-podcast:before{content:\"\uF2CE\"}.fa-window-maximize:before{content:\"\uF2D0\"}.fa-window-minimize:before{content:\"\uF2D1\"}.fa-window-restore:before{content:\"\uF2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\uF2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\uF2D4\"}.fa-bandcamp:before{content:\"\uF2D5\"}.fa-grav:before{content:\"\uF2D6\"}.fa-etsy:before{content:\"\uF2D7\"}.fa-imdb:before{content:\"\uF2D8\"}.fa-ravelry:before{content:\"\uF2D9\"}.fa-eercast:before{content:\"\uF2DA\"}.fa-microchip:before{content:\"\uF2DB\"}.fa-snowflake-o:before{content:\"\uF2DC\"}.fa-superpowers:before{content:\"\uF2DD\"}.fa-wpexplorer:before{content:\"\uF2DE\"}.fa-meetup:before{content:\"\uF2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}#editor{min-height:150px;overflow:auto;margin-top:5px;resize:vertical;outline:0}.angular-editor-toolbar{font:100 .8rem/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:inline-block;border-radius:5px;background-color:#fff;margin-right:5px;vertical-align:middle;border:1px solid #ddd;margin-bottom:3px}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:transparent;padding:.4rem;min-width:2rem;float:left;border:0 solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:first-child{border-radius:5px 0 0 5px}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:last-child{border-radius:0 5px 5px 0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:first-child:last-child{border-radius:5px}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:0;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{width:50px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:24px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor{position:relative}.angular-editor ::ng-deep [contenteditable=true]:empty:before{content:attr(placeholder);display:block;color:#868e96;opacity:1}.angular-editor .angular-editor-wrapper{position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;z-index:2;position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea.focus,.angular-editor .angular-editor-wrapper .angular-editor-textarea:focus{outline:0}.angular-editor .angular-editor-wrapper .angular-editor-textarea ::ng-deep blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor .angular-editor-wrapper ::ng-deep p{margin-bottom:0}.angular-editor .angular-editor-wrapper .angular-editor-placeholder{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;z-index:1;color:#6c757d;opacity:.75}.angular-editor .angular-editor-wrapper.show-placeholder .angular-editor-placeholder{display:block}.angular-editor .angular-editor-wrapper.disabled{cursor:not-allowed;opacity:.5;pointer-events:none}"],
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return AngularEditorComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    AngularEditorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: AngularEditorService },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    AngularEditorComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        html: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        textArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['editor',] }],
        editorWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['editorWrapper',] }],
        editorToolbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['editorToolbar',] }],
        viewMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return AngularEditorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AngularEditorModule = /** @class */ (function () {
    function AngularEditorModule() {
    }
    AngularEditorModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                    ],
                    declarations: [AngularEditorComponent, AngularEditorToolbarComponent],
                    exports: [AngularEditorComponent, AngularEditorToolbarComponent]
                },] },
    ];
    return AngularEditorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29sa292LWFuZ3VsYXItZWRpdG9yLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Aa29sa292L2FuZ3VsYXItZWRpdG9yL2xpYi9hbmd1bGFyLWVkaXRvci5zZXJ2aWNlLnRzIiwibmc6Ly9Aa29sa292L2FuZ3VsYXItZWRpdG9yL2xpYi9jb25maWcudHMiLCJuZzovL0Brb2xrb3YvYW5ndWxhci1lZGl0b3IvbGliL2FuZ3VsYXItZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50LnRzIiwibmc6Ly9Aa29sa292L2FuZ3VsYXItZWRpdG9yL2xpYi9hbmd1bGFyLWVkaXRvci5jb21wb25lbnQudHMiLCJuZzovL0Brb2xrb3YvYW5ndWxhci1lZGl0b3IvbGliL2FuZ3VsYXItZWRpdG9yLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEV2ZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7Q3VzdG9tQ2xhc3N9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRSZXNwb25zZSB7XHJcbiAgaW1hZ2VVcmw6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhckVkaXRvclNlcnZpY2Uge1xyXG5cclxuICBzYXZlZFNlbGVjdGlvbjogUmFuZ2UgfCBudWxsO1xyXG4gIHNlbGVjdGVkVGV4dDogc3RyaW5nO1xyXG4gIHVwbG9hZFVybDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4ZWN1dGVkIGNvbW1hbmQgZnJvbSBlZGl0b3IgaGVhZGVyIGJ1dHRvbnMgZXhjbHVkZSB0b2dnbGVFZGl0b3JNb2RlXHJcbiAgICogQHBhcmFtIGNvbW1hbmQgc3RyaW5nIGZyb20gdHJpZ2dlckNvbW1hbmRcclxuICAgKi9cclxuICBleGVjdXRlQ29tbWFuZChjb21tYW5kOiBzdHJpbmcpIHtcclxuICAgIGlmIChjb21tYW5kID09PSAnaDEnIHx8IGNvbW1hbmQgPT09ICdoMicgfHwgY29tbWFuZCA9PT0gJ2gzJyB8fCBjb21tYW5kID09PSAnaDQnIHx8IGNvbW1hbmQgPT09ICdoNScgfHwgY29tbWFuZCA9PT0gJ2g2JyB8fCBjb21tYW5kID09PSAncCcgfHwgY29tbWFuZCA9PT0gJ3ByZScpIHtcclxuICAgICAgdGhpcy5fZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2Zvcm1hdEJsb2NrJywgZmFsc2UsIGNvbW1hbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2RvY3VtZW50LmV4ZWNDb21tYW5kKGNvbW1hbmQsIGZhbHNlLCBudWxsKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBVUkwgbGlua1xyXG4gICAqIEBwYXJhbSB1cmwgc3RyaW5nIGZyb20gVUkgcHJvbXB0XHJcbiAgICovXHJcbiAgY3JlYXRlTGluayh1cmw6IHN0cmluZykge1xyXG4gICAgaWYgKCF1cmwuaW5jbHVkZXMoXCJodHRwXCIpKSB7XHJcbiAgICAgIHRoaXMuX2RvY3VtZW50LmV4ZWNDb21tYW5kKCdjcmVhdGVsaW5rJywgZmFsc2UsIHVybCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBuZXdVcmwgPSAnPGEgaHJlZj1cIicgKyB1cmwgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JyArIHRoaXMuc2VsZWN0ZWRUZXh0ICsgJzwvYT4nO1xyXG4gICAgICB0aGlzLmluc2VydEh0bWwobmV3VXJsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGluc2VydCBjb2xvciBlaXRoZXIgZm9udCBvciBiYWNrZ3JvdW5kXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29sb3IgY29sb3IgdG8gYmUgaW5zZXJ0ZWRcclxuICAgKiBAcGFyYW0gd2hlcmUgd2hlcmUgdGhlIGNvbG9yIGhhcyB0byBiZSBpbnNlcnRlZCBlaXRoZXIgdGV4dC9iYWNrZ3JvdW5kXHJcbiAgICovXHJcbiAgaW5zZXJ0Q29sb3IoY29sb3I6IHN0cmluZywgd2hlcmU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdG9yZWQgPSB0aGlzLnJlc3RvcmVTZWxlY3Rpb24oKTtcclxuICAgIGlmIChyZXN0b3JlZCkge1xyXG4gICAgICBpZiAod2hlcmUgPT09ICd0ZXh0Q29sb3InKSB7XHJcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2ZvcmVDb2xvcicsIGZhbHNlLCBjb2xvcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2hpbGl0ZUNvbG9yJywgZmFsc2UsIGNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBmb250IG5hbWVcclxuICAgKiBAcGFyYW0gZm9udE5hbWUgc3RyaW5nXHJcbiAgICovXHJcbiAgc2V0Rm9udE5hbWUoZm9udE5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJmb250TmFtZVwiLCBmYWxzZSwgZm9udE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGZvbnQgc2l6ZVxyXG4gICAqIEBwYXJhbSBmb250U2l6ZSBzdHJpbmdcclxuICAgKi9cclxuICBzZXRGb250U2l6ZShmb250U2l6ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9kb2N1bWVudC5leGVjQ29tbWFuZChcImZvbnRTaXplXCIsIGZhbHNlLCBmb250U2l6ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgcmF3IEhUTUxcclxuICAgKiBAcGFyYW0gaHRtbCBIVE1MIHN0cmluZ1xyXG4gICAqL1xyXG4gIHByaXZhdGUgaW5zZXJ0SHRtbChodG1sOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICBjb25zdCBpc0hUTUxJbnNlcnRlZCA9IHRoaXMuX2RvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsIGh0bWwpO1xyXG5cclxuICAgIGlmICghaXNIVE1MSW5zZXJ0ZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGVyZm9ybSB0aGUgb3BlcmF0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2F2ZSBzZWxlY3Rpb24gd2hlbiB0aGUgZWRpdG9yIGlzIGZvY3Vzc2VkIG91dFxyXG4gICAqL1xyXG4gIHNhdmVTZWxlY3Rpb24oKTogYW55IHtcclxuICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgaWYgKHNlbC5nZXRSYW5nZUF0ICYmIHNlbC5yYW5nZUNvdW50KSB7XHJcbiAgICAgICAgdGhpcy5zYXZlZFNlbGVjdGlvbiA9IHNlbC5nZXRSYW5nZUF0KDApO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUZXh0ID0gc2VsLnRvU3RyaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5fZG9jdW1lbnQuZ2V0U2VsZWN0aW9uICYmIHRoaXMuX2RvY3VtZW50LmNyZWF0ZVJhbmdlKSB7XHJcbiAgICAgIHRoaXMuc2F2ZWRTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zYXZlZFNlbGVjdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXN0b3JlIHNlbGVjdGlvbiB3aGVuIHRoZSBlZGl0b3IgaXMgZm9jdXNzZWQgaW5cclxuICAgKlxyXG4gICAqIHNhdmVkIHNlbGVjdGlvbiB3aGVuIHRoZSBlZGl0b3IgaXMgZm9jdXNzZWQgb3V0XHJcbiAgICovXHJcbiAgcmVzdG9yZVNlbGVjdGlvbigpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLnNhdmVkU2VsZWN0aW9uKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICBzZWwuYWRkUmFuZ2UodGhpcy5zYXZlZFNlbGVjdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fZG9jdW1lbnQuZ2V0U2VsZWN0aW9uIC8qJiYgdGhpcy5zYXZlZFNlbGVjdGlvbi5zZWxlY3QqLykge1xyXG4gICAgICAgIC8vIHRoaXMuc2F2ZWRTZWxlY3Rpb24uc2VsZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBjaGVjayBhbnkgc2xlY3Rpb24gaXMgbWFkZSBvciBub3QgKi9cclxuICBwcml2YXRlIGNoZWNrU2VsZWN0aW9uKCk6IGFueSB7XHJcblxyXG4gICAgY29uc3Qgc2xlY3RlZFRleHQgPSB0aGlzLnNhdmVkU2VsZWN0aW9uLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgaWYgKHNsZWN0ZWRUZXh0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFNlbGVjdGlvbiBNYWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGxvYWQgZmlsZSB0byB1cGxvYWRVcmxcclxuICAgKiBAcGFyYW0gZmlsZVxyXG4gICAqL1xyXG4gIHVwbG9hZEltYWdlKGZpbGU6IEZpbGUpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxVcGxvYWRSZXNwb25zZT4+IHtcclxuXHJcbiAgICBjb25zdCB1cGxvYWREYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIHVwbG9hZERhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZS5uYW1lKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXBsb2FkUmVzcG9uc2U+KHRoaXMudXBsb2FkVXJsLCB1cGxvYWREYXRhLCB7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlOiAnZXZlbnRzJyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5zZXJ0IGltYWdlIHdpdGggVXJsXHJcbiAgICogQHBhcmFtIGltYWdlVXJsXHJcbiAgICovXHJcbiAgaW5zZXJ0SW1hZ2UoaW1hZ2VVcmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5fZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydEltYWdlJywgZmFsc2UsIGltYWdlVXJsKTtcclxuICB9XHJcblxyXG4gIHNldERlZmF1bHRQYXJhZ3JhcGhTZXBhcmF0b3Ioc2VwYXJhdG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2RvY3VtZW50LmV4ZWNDb21tYW5kKFwiZGVmYXVsdFBhcmFncmFwaFNlcGFyYXRvclwiLCBmYWxzZSwgc2VwYXJhdG9yKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUN1c3RvbUNsYXNzKGN1c3RvbUNsYXNzOiBDdXN0b21DbGFzcykge1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IGN1c3RvbUNsYXNzLnRhZyA/IGN1c3RvbUNsYXNzLnRhZyA6ICdzcGFuJztcclxuICAgIGNvbnN0IG5ld1RhZyA9ICc8JyArIHRhZ05hbWUgKyAnIGNsYXNzPVwiJyArIGN1c3RvbUNsYXNzLmNsYXNzICsgJ1wiPicgKyB0aGlzLnNlbGVjdGVkVGV4dCArICc8LycgKyB0YWdOYW1lICsgJz4nO1xyXG4gICAgdGhpcy5pbnNlcnRIdG1sKG5ld1RhZyk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tQ2xhc3Mge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBjbGFzczogc3RyaW5nO1xyXG4gIHRhZz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbmd1bGFyRWRpdG9yQ29uZmlnIHtcclxuICBlZGl0YWJsZT86IGJvb2xlYW47XHJcbiAgc3BlbGxjaGVjaz86IGJvb2xlYW47XHJcbiAgaGVpZ2h0PzogJ2F1dG8nIHwgc3RyaW5nO1xyXG4gIG1pbkhlaWdodD86ICcwJyB8IHN0cmluZztcclxuICB3aWR0aD86ICdhdXRvJyB8IHN0cmluZztcclxuICBtaW5XaWR0aD86ICcwJyB8IHN0cmluZztcclxuICB0cmFuc2xhdGU/OiAneWVzJyB8ICdub3cnIHwgc3RyaW5nO1xyXG4gIGVuYWJsZVRvb2xiYXI/OiBib29sZWFuO1xyXG4gIHNob3dUb29sYmFyPzogYm9vbGVhbjtcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICBkZWZhdWx0UGFyYWdyYXBoU2VwYXJhdG9yPzogc3RyaW5nO1xyXG4gIGRlZmF1bHRGb250TmFtZT86IHN0cmluZztcclxuICBkZWZhdWx0Rm9udFNpemU/OiAnMScgfCAnMicgfCAnMycgfCAnNCcgfCAnNScgfCAnNicgfCAnNycgfHN0cmluZztcclxuICB1cGxvYWRVcmw/OiBzdHJpbmc7XHJcbiAgY3VzdG9tQ2xhc3Nlcz86IEN1c3RvbUNsYXNzW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhbmd1bGFyRWRpdG9yQ29uZmlnOiBBbmd1bGFyRWRpdG9yQ29uZmlnID0ge1xyXG4gIGVkaXRhYmxlOiB0cnVlLFxyXG4gIHNwZWxsY2hlY2s6IHRydWUsXHJcbiAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgbWluSGVpZ2h0OiAnMCcsXHJcbiAgd2lkdGg6ICdhdXRvJyxcclxuICBtaW5XaWR0aDogJzAnLFxyXG4gIHRyYW5zbGF0ZTogJ3llcycsXHJcbiAgZW5hYmxlVG9vbGJhcjogdHJ1ZSxcclxuICBzaG93VG9vbGJhcjogdHJ1ZSxcclxuICBwbGFjZWhvbGRlcjogJ0VudGVyIHRleHQgaGVyZS4uLicsXHJcbiAgZGVmYXVsdFBhcmFncmFwaFNlcGFyYXRvcjogJycsXHJcbiAgZGVmYXVsdEZvbnROYW1lOiAnJyxcclxuICBkZWZhdWx0Rm9udFNpemU6ICcnLFxyXG4gIHVwbG9hZFVybDogJ3YxL2ltYWdlJyxcclxufTtcclxuIiwiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPdXRwdXQsIFJlbmRlcmVyMn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtBbmd1bGFyRWRpdG9yU2VydmljZX0gZnJvbSBcIi4vYW5ndWxhci1lZGl0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge0h0dHBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtDdXN0b21DbGFzc30gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FuZ3VsYXItZWRpdG9yLXRvb2xiYXInLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLXRvb2xiYXJcIiAqbmdJZj1cInNob3dUb29sYmFyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0XCI+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIlVuZG9cIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiIChjbGljayk9XCJ0cmlnZ2VyQ29tbWFuZCgndW5kbycpXCI+PGlcclxuICAgICAgY2xhc3M9J2ZhIGZhLXVuZG8nPjwvaT48L2J1dHRvbj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiUmVkb1wiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCIgKGNsaWNrKT1cInRyaWdnZXJDb21tYW5kKCdyZWRvJylcIj48aVxyXG4gICAgICBjbGFzcz0nZmEgZmEtcmVwZWF0Jz48L2k+PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0XCI+XHJcbiAgICA8YnV0dG9uIFtpZF09XCInYm9sZC0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQm9sZFwiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCIgKGNsaWNrKT1cInRyaWdnZXJDb21tYW5kKCdib2xkJylcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiaHRtbE1vZGVcIj48aSBjbGFzcz0nZmEgZmEtYm9sZCc+PC9pPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ2l0YWxpYy0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiSXRhbGljXCIgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci1idXR0b25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidHJpZ2dlckNvbW1hbmQoJ2l0YWxpYycpXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCI+PGkgY2xhc3M9J2ZhIGZhLWl0YWxpYyc+PC9pPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ3VuZGVybGluZS0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiVW5kZXJsaW5lXCIgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci1idXR0b25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidHJpZ2dlckNvbW1hbmQoJ3VuZGVybGluZScpXCIgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCI+PGkgY2xhc3M9J2ZhIGZhLXVuZGVybGluZSc+PC9pPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ3N0cmlrZVRocm91Z2gtJytpZFwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIlN0cmlrZXRocm91Z2hcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0cmlnZ2VyQ29tbWFuZCgnc3RyaWtlVGhyb3VnaCcpXCIgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCI+PGkgY2xhc3M9J2ZhIGZhLXN0cmlrZXRocm91Z2gnPjwvaT48L2J1dHRvbj5cclxuICAgIDxidXR0b24gW2lkXT1cIidzdWJzY3JpcHQtJytpZFwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIlN1YnNjcmlwdFwiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJDb21tYW5kKCdzdWJzY3JpcHQnKVwiIFtkaXNhYmxlZF09XCJodG1sTW9kZVwiPjxpIGNsYXNzPSdmYSBmYS1zdWJzY3JpcHQnPjwvaT48L2J1dHRvbj5cclxuICAgIDxidXR0b24gW2lkXT1cIidzdXBlcnNjcmlwdC0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiU3VwZXJzY3JpcHRcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0cmlnZ2VyQ29tbWFuZCgnc3VwZXJzY3JpcHQnKVwiIFtkaXNhYmxlZF09XCJodG1sTW9kZVwiPjxpIGNsYXNzPSdmYSBmYS1zdXBlcnNjcmlwdCc+PC9pPjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci10b29sYmFyLXNldFwiPlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ2p1c3RpZnlMZWZ0LScraWRcIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJKdXN0aWZ5IExlZnRcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0cmlnZ2VyQ29tbWFuZCgnanVzdGlmeUxlZnQnKVwiIFtkaXNhYmxlZF09XCJodG1sTW9kZVwiPjxpXHJcbiAgICAgIGNsYXNzPSdmYSBmYS1hbGlnbi1sZWZ0Jz48L2k+PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIFtpZF09XCInanVzdGlmeUNlbnRlci0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiSnVzdGlmeSBDZW50ZXJcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0cmlnZ2VyQ29tbWFuZCgnanVzdGlmeUNlbnRlcicpXCIgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCI+PGkgY2xhc3M9J2ZhIGZhLWFsaWduLWNlbnRlcic+PC9pPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ2p1c3RpZnlSaWdodC0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiSnVzdGlmeSBSaWdodFwiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJDb21tYW5kKCdqdXN0aWZ5UmlnaHQnKVwiIFtkaXNhYmxlZF09XCJodG1sTW9kZVwiPlxyXG4gICAgICA8aSBjbGFzcz0nZmEgZmEtYWxpZ24tcmlnaHQnPjwvaT48L2J1dHRvbj5cclxuICAgIDxidXR0b24gW2lkXT1cIidqdXN0aWZ5RnVsbC0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiSnVzdGlmeSBGdWxsXCIgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci1idXR0b25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidHJpZ2dlckNvbW1hbmQoJ2p1c3RpZnlGdWxsJylcIiBbZGlzYWJsZWRdPVwiaHRtbE1vZGVcIj48aVxyXG4gICAgICBjbGFzcz0nZmEgZmEtYWxpZ24tanVzdGlmeSc+PC9pPjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci10b29sYmFyLXNldFwiPlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ2luZGVudC0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiSW5kZW50XCIgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci1idXR0b25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidHJpZ2dlckNvbW1hbmQoJ2luZGVudCcpXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCI+PGlcclxuICAgICAgY2xhc3M9J2ZhIGZhLWluZGVudCc+PC9pPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ291dGRlbnQtJytpZFwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIk91dGRlbnRcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0cmlnZ2VyQ29tbWFuZCgnb3V0ZGVudCcpXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCI+PGlcclxuICAgICAgY2xhc3M9J2ZhIGZhLW91dGRlbnQnPjwvaT48L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXRcIj5cclxuICAgIDxidXR0b24gW2lkXT1cIidpbnNlcnRVbm9yZGVyZWRMaXN0LScraWRcIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJVbm9yZGVyZWQgTGlzdFwiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJDb21tYW5kKCdpbnNlcnRVbm9yZGVyZWRMaXN0JylcIiBbZGlzYWJsZWRdPVwiaHRtbE1vZGVcIj48aSBjbGFzcz0nZmEgZmEtbGlzdC11bCc+PC9pPjwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ2luc2VydE9yZGVyZWRMaXN0LScraWRcIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJPcmRlcmVkIExpc3RcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0cmlnZ2VyQ29tbWFuZCgnaW5zZXJ0T3JkZXJlZExpc3QnKVwiIFtkaXNhYmxlZF09XCJodG1sTW9kZVwiPjxpIGNsYXNzPSdmYSBmYS1saXN0LW9sJz48L2k+PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0XCI+XHJcbiAgICA8bGFiZWwgW2Zvcl09XCInaGVhZGluZy0nK2lkXCIgY2xhc3M9XCJibG9jay1sYWJlbFwiPjwvbGFiZWw+XHJcbiAgICA8c2VsZWN0IHRpdGxlPVwiRm9ybWF0dGluZ1wiIFtpZF09XCInaGVhZGluZy0nK2lkXCIgY2xhc3M9XCJzZWxlY3QtaGVhZGluZ1wiIFsobmdNb2RlbCldPVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAoY2hhbmdlKT1cInRyaWdnZXJDb21tYW5kKGJsb2NrKVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJodG1sTW9kZVwiPlxyXG4gICAgICA8b3B0Z3JvdXAgbGFiZWw9XCJGb3JtYXR0aW5nXCI+PC9vcHRncm91cD5cclxuICAgICAgPG9wdGlvbiBjbGFzcz1cImgxXCIgdmFsdWU9XCJoMVwiPkhlYWRpbmcgMTwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIGNsYXNzPVwiaDJcIiB2YWx1ZT1cImgyXCI+SGVhZGluZyAyPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gY2xhc3M9XCJoM1wiIHZhbHVlPVwiaDNcIj5IZWFkaW5nIDM8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiBjbGFzcz1cImg0XCIgdmFsdWU9XCJoNFwiPkhlYWRpbmcgNDwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIGNsYXNzPVwiaDVcIiB2YWx1ZT1cImg1XCI+SGVhZGluZyA1PC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gY2xhc3M9XCJoNlwiIHZhbHVlPVwiaDZcIj5IZWFkaW5nIDY8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiBjbGFzcz1cInBcIiB2YWx1ZT1cInBcIj5QYXJhZ3JhcGg8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiBjbGFzcz1cInByZVwiIHZhbHVlPVwicHJlXCI+UHJlZGVmaW5lZDwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIGNsYXNzPVwiZGl2XCIgdmFsdWU9XCJkaXZcIj5TdGFuZGFyZDwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIGNsYXNzPVwiZGVmYXVsdFwiIHZhbHVlPVwiZGVmYXVsdFwiPkRlZmF1bHQ8L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci10b29sYmFyLXNldFwiPlxyXG4gICAgPGxhYmVsIFtmb3JdPVwiJ2ZvbnRTZWxlY3Rvci0nK2lkXCIgY2xhc3M9XCJibG9jay1sYWJlbFwiPjwvbGFiZWw+XHJcbiAgICA8c2VsZWN0IHRpdGxlPVwiRm9udCBOYW1lXCIgW2lkXT1cIidmb250U2VsZWN0b3ItJytpZFwiIGNsYXNzPVwic2VsZWN0LWZvbnRcIiBbKG5nTW9kZWwpXT1cImZvbnROYW1lXCJcclxuICAgICAgICAgICAgKGNoYW5nZSk9XCJzZXRGb250TmFtZShmb250TmFtZSlcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiaHRtbE1vZGVcIj5cclxuICAgICAgPG9wdGdyb3VwIGxhYmVsPVwiRm9udCBOYW1lXCI+PC9vcHRncm91cD5cclxuICAgICAgPG9wdGlvbiBjbGFzcz1cImFyaWFsXCIgdmFsdWU9XCJBcmlhbFwiPkFyaWFsPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gY2xhc3M9XCJjYWxpYnJpXCIgdmFsdWU9XCJDYWxpYnJpXCI+Q2FsaWJyaTwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIGNsYXNzPVwiY29taWMtc2Fucy1tc1wiIHZhbHVlPVwiQ29taWMgU2FucyBNU1wiPkNvbWljIFNhbnMgTVM8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiBjbGFzcz1cInRpbWVzLW5ldy1yb21hblwiIHZhbHVlPVwiVGltZXMgTmV3IFJvbWFuXCI+VGltZXMgTmV3IFJvbWFuPC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXRcIj5cclxuICAgIDxsYWJlbCBbZm9yXT1cIidmb250U2l6ZVNlbGVjdG9yLScraWRcIiBjbGFzcz1cImJsb2NrLWxhYmVsXCI+PC9sYWJlbD5cclxuICAgIDxzZWxlY3QgdGl0bGU9XCJGb250IFNpemVcIiBbaWRdPVwiJ2ZvbnRTaXplU2VsZWN0b3ItJytpZFwiIGNsYXNzPVwic2VsZWN0LWZvbnQtc2l6ZVwiIFsobmdNb2RlbCldPVwiZm9udFNpemVcIlxyXG4gICAgICAgICAgICAoY2hhbmdlKT1cInNldEZvbnRTaXplKGZvbnRTaXplKVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJodG1sTW9kZVwiPlxyXG4gICAgICA8b3B0Z3JvdXAgbGFiZWw9XCJGb250IFNpemluZ1wiPjwvb3B0Z3JvdXA+XHJcbiAgICAgIDxvcHRpb24gY2xhc3M9XCJzaXplMVwiIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiBjbGFzcz1cInNpemUyXCIgdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIGNsYXNzPVwic2l6ZTNcIiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gY2xhc3M9XCJzaXplNFwiIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiBjbGFzcz1cInNpemU1XCIgdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIGNsYXNzPVwic2l6ZTZcIiB2YWx1ZT1cIjZcIj42PC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gY2xhc3M9XCJzaXplN1wiIHZhbHVlPVwiN1wiPjc8L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci10b29sYmFyLXNldFwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiXHJcbiAgICAgIHR5cGU9XCJjb2xvclwiIChjaGFuZ2UpPVwiaW5zZXJ0Q29sb3IoZmdJbnB1dC52YWx1ZSwgJ3RleHRDb2xvcicpXCJcclxuICAgICAgI2ZnSW5wdXQ+XHJcbiAgICA8YnV0dG9uIFtpZF09XCInZm9yZWdyb3VuZENvbG9yUGlja2VyLScraWRcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci1idXR0b25cIiAoY2xpY2spPVwiZmdJbnB1dC5jbGljaygpXCIgdGl0bGU9XCJUZXh0IENvbG9yXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCI+PHNwYW4gY2xhc3M9XCJjb2xvci1sYWJlbCBmb3JlZ3JvdW5kXCI+PGkgY2xhc3M9XCJmYSBmYS1mb250XCI+PC9pPjwvc3Bhbj48L2J1dHRvbj5cclxuICAgIDxpbnB1dFxyXG4gICAgICBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIlxyXG4gICAgICB0eXBlPVwiY29sb3JcIiAoY2hhbmdlKT1cImluc2VydENvbG9yKGJnSW5wdXQudmFsdWUsICdiYWNrZ3JvdW5kQ29sb3InKVwiXHJcbiAgICAgICNiZ0lucHV0PlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ2JhY2tncm91bmRDb2xvclBpY2tlci0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCIgKGNsaWNrKT1cImJnSW5wdXQuY2xpY2soKVwiIHRpdGxlPVwiQmFja2dyb3VuZCBDb2xvclwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJodG1sTW9kZVwiPjxzcGFuIGNsYXNzPVwiY29sb3ItbGFiZWwgYmFja2dyb3VuZFwiPjxpIGNsYXNzPVwiZmEgZmEtZm9udFwiPjwvaT48L3NwYW4+PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cImN1c3RvbUNsYXNzZXNcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0XCI+XHJcbiAgICA8bGFiZWwgW2Zvcl09XCInY3VzdG9tQ2xhc3NTZWxlY3Rvci0nK2lkXCIgY2xhc3M9XCJibG9jay1sYWJlbFwiPjwvbGFiZWw+XHJcbiAgICA8c2VsZWN0IHRpdGxlPVwiQ3VzdG9tIFN0eWxlXCIgW2lkXT1cIidjdXN0b21DbGFzc1NlbGVjdG9yLScraWRcIiBjbGFzcz1cInNlbGVjdC1jdXN0b20tc3R5bGVcIiBbKG5nTW9kZWwpXT1cImN1c3RvbUNsYXNzSWRcIlxyXG4gICAgICAgICAgICAoY2hhbmdlKT1cInNldEN1c3RvbUNsYXNzKGN1c3RvbUNsYXNzSWQpXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCI+XHJcbiAgICAgIDxvcHRncm91cCBsYWJlbD1cIkN1c3RvbSBDbGFzc1wiPjwvb3B0Z3JvdXA+XHJcbiAgICAgIDxvcHRpb24gY2xhc3M9XCJcIiB2YWx1ZT0tMT5DbGVhciBDbGFzczwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGN1c3RvbUNsYXNzZXM7IGxldCBpID0gaW5kZXhcIiBbY2xhc3NdPVwiaXRlbS5jbGFzc1wiIFt2YWx1ZV09XCJpXCI+e3tpdGVtLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0XCI+XHJcbiAgICA8YnV0dG9uIFtpZF09XCInbGluay0nK2lkXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCIgKGNsaWNrKT1cImluc2VydFVybCgpXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJJbnNlcnQgTGlua1wiIFtkaXNhYmxlZF09XCJodG1sTW9kZVwiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWxpbmtcIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCIgKGNsaWNrKT1cInRyaWdnZXJDb21tYW5kKCd1bmxpbmsnKVwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiVW5saW5rXCIgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hhaW4tYnJva2VuXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8aW5wdXRcclxuICAgICAgc3R5bGU9XCJkaXNwbGF5OiBub25lXCJcclxuICAgICAgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cIm9uRmlsZUNoYW5nZWQoJGV2ZW50KVwiXHJcbiAgICAgICNmaWxlSW5wdXQ+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLWJ1dHRvblwiIChjbGljayk9XCJmaWxlSW5wdXQuY2xpY2soKVwiIHRpdGxlPVwiSW5zZXJ0IEltYWdlXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCI+PGkgY2xhc3M9XCJmYSBmYS1pbWFnZVwiPjwvaT48L2J1dHRvbj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiSG9yaXpvbnRhbCBMaW5lXCIgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci1idXR0b25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidHJpZ2dlckNvbW1hbmQoJ2luc2VydEhvcml6b250YWxSdWxlJylcIiBbZGlzYWJsZWRdPVwiaHRtbE1vZGVcIj48aSBjbGFzcz1cImZhIGZhLW1pbnVzXCI+PC9pPjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci10b29sYmFyLXNldFwiPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJDbGVhciBGb3JtYXR0aW5nXCIgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci1idXR0b25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidHJpZ2dlckNvbW1hbmQoJ3JlbW92ZUZvcm1hdCcpXCIgW2Rpc2FibGVkXT1cImh0bWxNb2RlXCI+PGkgY2xhc3M9J2ZhIGZhLXJlbW92ZSc+PC9pPjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci10b29sYmFyLXNldFwiPlxyXG4gICAgPGJ1dHRvbiBbaWRdPVwiJ3RvZ2dsZUVkaXRvck1vZGUtJytpZFwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIkhUTUwgQ29kZVwiIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItYnV0dG9uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJDb21tYW5kKCd0b2dnbGVFZGl0b3JNb2RlJylcIj48aSBjbGFzcz0nZmEgZmEtY29kZSc+PC9pPjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgQGNoYXJzZXQgXCJVVEYtOFwiOy8qIVxuICogIEZvbnQgQXdlc29tZSA0LjcuMCBieSBAZGF2ZWdhbmR5IC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvIC0gQGZvbnRhd2Vzb21lXG4gKiAgTGljZW5zZSAtIGh0dHA6Ly9mb250YXdlc29tZS5pby9saWNlbnNlIChGb250OiBTSUwgT0ZMIDEuMSwgQ1NTOiBNSVQgTGljZW5zZSlcbiAqL0Bmb250LWZhY2V7Zm9udC1mYW1pbHk6Rm9udEF3ZXNvbWU7c3JjOnVybCgvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9mb250cy9mb250YXdlc29tZS13ZWJmb250LmVvdD92PTQuNy4wKTtzcmM6dXJsKC8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90PyNpZWZpeCZ2PTQuNy4wKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSx1cmwoLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmMj92PTQuNy4wKSBmb3JtYXQoXCJ3b2ZmMlwiKSx1cmwoLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC53b2ZmP3Y9NC43LjApIGZvcm1hdChcIndvZmZcIiksdXJsKC8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQudHRmP3Y9NC43LjApIGZvcm1hdChcInRydWV0eXBlXCIpLHVybCgvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9mb250cy9mb250YXdlc29tZS13ZWJmb250LnN2Zz92PTQuNy4wI2ZvbnRhd2Vzb21lcmVndWxhcikgZm9ybWF0KFwic3ZnXCIpO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbH0uZmF7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udDoxNHB4LzEgRm9udEF3ZXNvbWU7Zm9udC1zaXplOmluaGVyaXQ7dGV4dC1yZW5kZXJpbmc6YXV0bzstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZX0uZmEtbGd7Zm9udC1zaXplOjEuMzMzMzNlbTtsaW5lLWhlaWdodDouNzVlbTt2ZXJ0aWNhbC1hbGlnbjotMTUlfS5mYS0yeHtmb250LXNpemU6MmVtfS5mYS0zeHtmb250LXNpemU6M2VtfS5mYS00eHtmb250LXNpemU6NGVtfS5mYS01eHtmb250LXNpemU6NWVtfS5mYS1md3t3aWR0aDoxLjI4NTcxZW07dGV4dC1hbGlnbjpjZW50ZXJ9LmZhLXVse3BhZGRpbmctbGVmdDowO21hcmdpbi1sZWZ0OjIuMTQyODZlbTtsaXN0LXN0eWxlLXR5cGU6bm9uZX0uZmEtdWw+bGl7cG9zaXRpb246cmVsYXRpdmV9LmZhLWxpe3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTIuMTQyODZlbTt3aWR0aDoyLjE0Mjg2ZW07dG9wOi4xNDI4NmVtO3RleHQtYWxpZ246Y2VudGVyfS5mYS1saS5mYS1sZ3tsZWZ0Oi0xLjg1NzE0ZW19LmZhLWJvcmRlcntwYWRkaW5nOi4yZW0gLjI1ZW0gLjE1ZW07Ym9yZGVyOi4wOGVtIHNvbGlkICNlZWU7Ym9yZGVyLXJhZGl1czouMWVtfS5mYS1wdWxsLWxlZnR7ZmxvYXQ6bGVmdH0uZmEtcHVsbC1yaWdodHtmbG9hdDpyaWdodH0uZmEuZmEtcHVsbC1sZWZ0e21hcmdpbi1yaWdodDouM2VtfS5mYS5mYS1wdWxsLXJpZ2h0e21hcmdpbi1sZWZ0Oi4zZW19LnB1bGwtcmlnaHR7ZmxvYXQ6cmlnaHR9LnB1bGwtbGVmdHtmbG9hdDpsZWZ0fS5mYS5wdWxsLWxlZnR7bWFyZ2luLXJpZ2h0Oi4zZW19LmZhLnB1bGwtcmlnaHR7bWFyZ2luLWxlZnQ6LjNlbX0uZmEtc3Bpbnstd2Via2l0LWFuaW1hdGlvbjoycyBsaW5lYXIgaW5maW5pdGUgZmEtc3BpbjthbmltYXRpb246MnMgbGluZWFyIGluZmluaXRlIGZhLXNwaW59LmZhLXB1bHNley13ZWJraXQtYW5pbWF0aW9uOjFzIHN0ZXBzKDgpIGluZmluaXRlIGZhLXNwaW47YW5pbWF0aW9uOjFzIHN0ZXBzKDgpIGluZmluaXRlIGZhLXNwaW59QC13ZWJraXQta2V5ZnJhbWVzIGZhLXNwaW57MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM1OWRlZyl9fUBrZXlmcmFtZXMgZmEtc3BpbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKX19LmZhLXJvdGF0ZS05MHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpfS5mYS1yb3RhdGUtMTgwey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0uZmEtcm90YXRlLTI3MHstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDI3MGRlZyl9LmZhLWZsaXAtaG9yaXpvbnRhbHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgtMSwxKTt0cmFuc2Zvcm06c2NhbGUoLTEsMSl9LmZhLWZsaXAtdmVydGljYWx7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwtMSk7dHJhbnNmb3JtOnNjYWxlKDEsLTEpfTpyb290IC5mYS1mbGlwLWhvcml6b250YWwsOnJvb3QgLmZhLWZsaXAtdmVydGljYWwsOnJvb3QgLmZhLXJvdGF0ZS0xODAsOnJvb3QgLmZhLXJvdGF0ZS0yNzAsOnJvb3QgLmZhLXJvdGF0ZS05MHstd2Via2l0LWZpbHRlcjpub25lO2ZpbHRlcjpub25lfS5mYS1zdGFja3twb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyZW07aGVpZ2h0OjJlbTtsaW5lLWhlaWdodDoyZW07dmVydGljYWwtYWxpZ246bWlkZGxlfS5mYS1zdGFjay0xeCwuZmEtc3RhY2stMnh7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXJ9LmZhLXN0YWNrLTF4e2xpbmUtaGVpZ2h0OmluaGVyaXR9LmZhLXN0YWNrLTJ4e2ZvbnQtc2l6ZToyZW19LmZhLWludmVyc2V7Y29sb3I6I2ZmZn0uZmEtZ2xhc3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwoBcIn0uZmEtbXVzaWM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwoFcIn0uZmEtc2VhcmNoOmJlZm9yZXtjb250ZW50Olwiw6/CgMKCXCJ9LmZhLWVudmVsb3BlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwoNcIn0uZmEtaGVhcnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwoRcIn0uZmEtc3RhcjpiZWZvcmV7Y29udGVudDpcIsOvwoDChVwifS5mYS1zdGFyLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwoZcIn0uZmEtdXNlcjpiZWZvcmV7Y29udGVudDpcIsOvwoDCh1wifS5mYS1maWxtOmJlZm9yZXtjb250ZW50Olwiw6/CgMKIXCJ9LmZhLXRoLWxhcmdlOmJlZm9yZXtjb250ZW50Olwiw6/CgMKJXCJ9LmZhLXRoOmJlZm9yZXtjb250ZW50Olwiw6/CgMKKXCJ9LmZhLXRoLWxpc3Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwotcIn0uZmEtY2hlY2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwoxcIn0uZmEtY2xvc2U6YmVmb3JlLC5mYS1yZW1vdmU6YmVmb3JlLC5mYS10aW1lczpiZWZvcmV7Y29udGVudDpcIsOvwoDCjVwifS5mYS1zZWFyY2gtcGx1czpiZWZvcmV7Y29udGVudDpcIsOvwoDCjlwifS5mYS1zZWFyY2gtbWludXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwpBcIn0uZmEtcG93ZXItb2ZmOmJlZm9yZXtjb250ZW50Olwiw6/CgMKRXCJ9LmZhLXNpZ25hbDpiZWZvcmV7Y29udGVudDpcIsOvwoDCklwifS5mYS1jb2c6YmVmb3JlLC5mYS1nZWFyOmJlZm9yZXtjb250ZW50Olwiw6/CgMKTXCJ9LmZhLXRyYXNoLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwpRcIn0uZmEtaG9tZTpiZWZvcmV7Y29udGVudDpcIsOvwoDClVwifS5mYS1maWxlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwpZcIn0uZmEtY2xvY2stbzpiZWZvcmV7Y29udGVudDpcIsOvwoDCl1wifS5mYS1yb2FkOmJlZm9yZXtjb250ZW50Olwiw6/CgMKYXCJ9LmZhLWRvd25sb2FkOmJlZm9yZXtjb250ZW50Olwiw6/CgMKZXCJ9LmZhLWFycm93LWNpcmNsZS1vLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwppcIn0uZmEtYXJyb3ctY2lyY2xlLW8tdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwptcIn0uZmEtaW5ib3g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwpxcIn0uZmEtcGxheS1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoDCnVwifS5mYS1yZXBlYXQ6YmVmb3JlLC5mYS1yb3RhdGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwp5cIn0uZmEtcmVmcmVzaDpiZWZvcmV7Y29udGVudDpcIsOvwoDCoVwifS5mYS1saXN0LWFsdDpiZWZvcmV7Y29udGVudDpcIsOvwoDColwifS5mYS1sb2NrOmJlZm9yZXtjb250ZW50Olwiw6/CgMKjXCJ9LmZhLWZsYWc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwqRcIn0uZmEtaGVhZHBob25lczpiZWZvcmV7Y29udGVudDpcIsOvwoDCpVwifS5mYS12b2x1bWUtb2ZmOmJlZm9yZXtjb250ZW50Olwiw6/CgMKmXCJ9LmZhLXZvbHVtZS1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/CgMKnXCJ9LmZhLXZvbHVtZS11cDpiZWZvcmV7Y29udGVudDpcIsOvwoDCqFwifS5mYS1xcmNvZGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwqlcIn0uZmEtYmFyY29kZTpiZWZvcmV7Y29udGVudDpcIsOvwoDCqlwifS5mYS10YWc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwqtcIn0uZmEtdGFnczpiZWZvcmV7Y29udGVudDpcIsOvwoDCrFwifS5mYS1ib29rOmJlZm9yZXtjb250ZW50Olwiw6/CgMKtXCJ9LmZhLWJvb2ttYXJrOmJlZm9yZXtjb250ZW50Olwiw6/CgMKuXCJ9LmZhLXByaW50OmJlZm9yZXtjb250ZW50Olwiw6/CgMKvXCJ9LmZhLWNhbWVyYTpiZWZvcmV7Y29udGVudDpcIsOvwoDCsFwifS5mYS1mb250OmJlZm9yZXtjb250ZW50Olwiw6/CgMKxXCJ9LmZhLWJvbGQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrJcIn0uZmEtaXRhbGljOmJlZm9yZXtjb250ZW50Olwiw6/CgMKzXCJ9LmZhLXRleHQtaGVpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/CgMK0XCJ9LmZhLXRleHQtd2lkdGg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrVcIn0uZmEtYWxpZ24tbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwoDCtlwifS5mYS1hbGlnbi1jZW50ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrdcIn0uZmEtYWxpZ24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrhcIn0uZmEtYWxpZ24tanVzdGlmeTpiZWZvcmV7Y29udGVudDpcIsOvwoDCuVwifS5mYS1saXN0OmJlZm9yZXtjb250ZW50Olwiw6/CgMK6XCJ9LmZhLWRlZGVudDpiZWZvcmUsLmZhLW91dGRlbnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrtcIn0uZmEtaW5kZW50OmJlZm9yZXtjb250ZW50Olwiw6/CgMK8XCJ9LmZhLXZpZGVvLWNhbWVyYTpiZWZvcmV7Y29udGVudDpcIsOvwoDCvVwifS5mYS1pbWFnZTpiZWZvcmUsLmZhLXBob3RvOmJlZm9yZSwuZmEtcGljdHVyZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CgMK+XCJ9LmZhLXBlbmNpbDpiZWZvcmV7Y29udGVudDpcIsOvwoHCgFwifS5mYS1tYXAtbWFya2VyOmJlZm9yZXtjb250ZW50Olwiw6/CgcKBXCJ9LmZhLWFkanVzdDpiZWZvcmV7Y29udGVudDpcIsOvwoHCglwifS5mYS10aW50OmJlZm9yZXtjb250ZW50Olwiw6/CgcKDXCJ9LmZhLWVkaXQ6YmVmb3JlLC5mYS1wZW5jaWwtc3F1YXJlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwoRcIn0uZmEtc2hhcmUtc3F1YXJlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwoVcIn0uZmEtY2hlY2stc3F1YXJlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwoZcIn0uZmEtYXJyb3dzOmJlZm9yZXtjb250ZW50Olwiw6/CgcKHXCJ9LmZhLXN0ZXAtYmFja3dhcmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwohcIn0uZmEtZmFzdC1iYWNrd2FyZDpiZWZvcmV7Y29udGVudDpcIsOvwoHCiVwifS5mYS1iYWNrd2FyZDpiZWZvcmV7Y29udGVudDpcIsOvwoHCilwifS5mYS1wbGF5OmJlZm9yZXtjb250ZW50Olwiw6/CgcKLXCJ9LmZhLXBhdXNlOmJlZm9yZXtjb250ZW50Olwiw6/CgcKMXCJ9LmZhLXN0b3A6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwo1cIn0uZmEtZm9yd2FyZDpiZWZvcmV7Y29udGVudDpcIsOvwoHCjlwifS5mYS1mYXN0LWZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwpBcIn0uZmEtc3RlcC1mb3J3YXJkOmJlZm9yZXtjb250ZW50Olwiw6/CgcKRXCJ9LmZhLWVqZWN0OmJlZm9yZXtjb250ZW50Olwiw6/CgcKSXCJ9LmZhLWNoZXZyb24tbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwoHCk1wifS5mYS1jaGV2cm9uLXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/CgcKUXCJ9LmZhLXBsdXMtY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/CgcKVXCJ9LmZhLW1pbnVzLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIsOvwoHCllwifS5mYS10aW1lcy1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwpdcIn0uZmEtY2hlY2stY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/CgcKYXCJ9LmZhLXF1ZXN0aW9uLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIsOvwoHCmVwifS5mYS1pbmZvLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIsOvwoHCmlwifS5mYS1jcm9zc2hhaXJzOmJlZm9yZXtjb250ZW50Olwiw6/CgcKbXCJ9LmZhLXRpbWVzLWNpcmNsZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CgcKcXCJ9LmZhLWNoZWNrLWNpcmNsZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CgcKdXCJ9LmZhLWJhbjpiZWZvcmV7Y29udGVudDpcIsOvwoHCnlwifS5mYS1hcnJvdy1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/CgcKgXCJ9LmZhLWFycm93LXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/CgcKhXCJ9LmZhLWFycm93LXVwOmJlZm9yZXtjb250ZW50Olwiw6/CgcKiXCJ9LmZhLWFycm93LWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqNcIn0uZmEtbWFpbC1mb3J3YXJkOmJlZm9yZSwuZmEtc2hhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqRcIn0uZmEtZXhwYW5kOmJlZm9yZXtjb250ZW50Olwiw6/CgcKlXCJ9LmZhLWNvbXByZXNzOmJlZm9yZXtjb250ZW50Olwiw6/CgcKmXCJ9LmZhLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqdcIn0uZmEtbWludXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqhcIn0uZmEtYXN0ZXJpc2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqlcIn0uZmEtZXhjbGFtYXRpb24tY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/CgcKqXCJ9LmZhLWdpZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqtcIn0uZmEtbGVhZjpiZWZvcmV7Y29udGVudDpcIsOvwoHCrFwifS5mYS1maXJlOmJlZm9yZXtjb250ZW50Olwiw6/CgcKtXCJ9LmZhLWV5ZTpiZWZvcmV7Y29udGVudDpcIsOvwoHCrlwifS5mYS1leWUtc2xhc2g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrBcIn0uZmEtZXhjbGFtYXRpb24tdHJpYW5nbGU6YmVmb3JlLC5mYS13YXJuaW5nOmJlZm9yZXtjb250ZW50Olwiw6/CgcKxXCJ9LmZhLXBsYW5lOmJlZm9yZXtjb250ZW50Olwiw6/CgcKyXCJ9LmZhLWNhbGVuZGFyOmJlZm9yZXtjb250ZW50Olwiw6/CgcKzXCJ9LmZhLXJhbmRvbTpiZWZvcmV7Y29udGVudDpcIsOvwoHCtFwifS5mYS1jb21tZW50OmJlZm9yZXtjb250ZW50Olwiw6/CgcK1XCJ9LmZhLW1hZ25ldDpiZWZvcmV7Y29udGVudDpcIsOvwoHCtlwifS5mYS1jaGV2cm9uLXVwOmJlZm9yZXtjb250ZW50Olwiw6/CgcK3XCJ9LmZhLWNoZXZyb24tZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoHCuFwifS5mYS1yZXR3ZWV0OmJlZm9yZXtjb250ZW50Olwiw6/CgcK5XCJ9LmZhLXNob3BwaW5nLWNhcnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrpcIn0uZmEtZm9sZGVyOmJlZm9yZXtjb250ZW50Olwiw6/CgcK7XCJ9LmZhLWZvbGRlci1vcGVuOmJlZm9yZXtjb250ZW50Olwiw6/CgcK8XCJ9LmZhLWFycm93cy12OmJlZm9yZXtjb250ZW50Olwiw6/CgcK9XCJ9LmZhLWFycm93cy1oOmJlZm9yZXtjb250ZW50Olwiw6/CgcK+XCJ9LmZhLWJhci1jaGFydC1vOmJlZm9yZSwuZmEtYmFyLWNoYXJ0OmJlZm9yZXtjb250ZW50Olwiw6/CgsKAXCJ9LmZhLXR3aXR0ZXItc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/CgsKBXCJ9LmZhLWZhY2Vib29rLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoLCglwifS5mYS1jYW1lcmEtcmV0cm86YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwoNcIn0uZmEta2V5OmJlZm9yZXtjb250ZW50Olwiw6/CgsKEXCJ9LmZhLWNvZ3M6YmVmb3JlLC5mYS1nZWFyczpiZWZvcmV7Y29udGVudDpcIsOvwoLChVwifS5mYS1jb21tZW50czpiZWZvcmV7Y29udGVudDpcIsOvwoLChlwifS5mYS10aHVtYnMtby11cDpiZWZvcmV7Y29udGVudDpcIsOvwoLCh1wifS5mYS10aHVtYnMtby1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/CgsKIXCJ9LmZhLXN0YXItaGFsZjpiZWZvcmV7Y29udGVudDpcIsOvwoLCiVwifS5mYS1oZWFydC1vOmJlZm9yZXtjb250ZW50Olwiw6/CgsKKXCJ9LmZhLXNpZ24tb3V0OmJlZm9yZXtjb250ZW50Olwiw6/CgsKLXCJ9LmZhLWxpbmtlZGluLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoLCjFwifS5mYS10aHVtYi10YWNrOmJlZm9yZXtjb250ZW50Olwiw6/CgsKNXCJ9LmZhLWV4dGVybmFsLWxpbms6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwo5cIn0uZmEtc2lnbi1pbjpiZWZvcmV7Y29udGVudDpcIsOvwoLCkFwifS5mYS10cm9waHk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwpFcIn0uZmEtZ2l0aHViLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoLCklwifS5mYS11cGxvYWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwpNcIn0uZmEtbGVtb24tbzpiZWZvcmV7Y29udGVudDpcIsOvwoLClFwifS5mYS1waG9uZTpiZWZvcmV7Y29udGVudDpcIsOvwoLClVwifS5mYS1zcXVhcmUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoLCllwifS5mYS1ib29rbWFyay1vOmJlZm9yZXtjb250ZW50Olwiw6/CgsKXXCJ9LmZhLXBob25lLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoLCmFwifS5mYS10d2l0dGVyOmJlZm9yZXtjb250ZW50Olwiw6/CgsKZXCJ9LmZhLWZhY2Vib29rLWY6YmVmb3JlLC5mYS1mYWNlYm9vazpiZWZvcmV7Y29udGVudDpcIsOvwoLCmlwifS5mYS1naXRodWI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwptcIn0uZmEtdW5sb2NrOmJlZm9yZXtjb250ZW50Olwiw6/CgsKcXCJ9LmZhLWNyZWRpdC1jYXJkOmJlZm9yZXtjb250ZW50Olwiw6/CgsKdXCJ9LmZhLWZlZWQ6YmVmb3JlLC5mYS1yc3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwp5cIn0uZmEtaGRkLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqBcIn0uZmEtYnVsbGhvcm46YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqFcIn0uZmEtYmVsbDpiZWZvcmV7Y29udGVudDpcIsOvwoPCs1wifS5mYS1jZXJ0aWZpY2F0ZTpiZWZvcmV7Y29udGVudDpcIsOvwoLCo1wifS5mYS1oYW5kLW8tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqRcIn0uZmEtaGFuZC1vLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqVcIn0uZmEtaGFuZC1vLXVwOmJlZm9yZXtjb250ZW50Olwiw6/CgsKmXCJ9LmZhLWhhbmQtby1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/CgsKnXCJ9LmZhLWFycm93LWNpcmNsZS1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/CgsKoXCJ9LmZhLWFycm93LWNpcmNsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoLCqVwifS5mYS1hcnJvdy1jaXJjbGUtdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqpcIn0uZmEtYXJyb3ctY2lyY2xlLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqtcIn0uZmEtZ2xvYmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqxcIn0uZmEtd3JlbmNoOmJlZm9yZXtjb250ZW50Olwiw6/CgsKtXCJ9LmZhLXRhc2tzOmJlZm9yZXtjb250ZW50Olwiw6/CgsKuXCJ9LmZhLWZpbHRlcjpiZWZvcmV7Y29udGVudDpcIsOvwoLCsFwifS5mYS1icmllZmNhc2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwrFcIn0uZmEtYXJyb3dzLWFsdDpiZWZvcmV7Y29udGVudDpcIsOvwoLCslwifS5mYS1ncm91cDpiZWZvcmUsLmZhLXVzZXJzOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KAXCJ9LmZhLWNoYWluOmJlZm9yZSwuZmEtbGluazpiZWZvcmV7Y29udGVudDpcIsOvwoPCgVwifS5mYS1jbG91ZDpiZWZvcmV7Y29udGVudDpcIsOvwoPCglwifS5mYS1mbGFzazpiZWZvcmV7Y29udGVudDpcIsOvwoPCg1wifS5mYS1jdXQ6YmVmb3JlLC5mYS1zY2lzc29yczpiZWZvcmV7Y29udGVudDpcIsOvwoPChFwifS5mYS1jb3B5OmJlZm9yZSwuZmEtZmlsZXMtbzpiZWZvcmV7Y29udGVudDpcIsOvwoPChVwifS5mYS1wYXBlcmNsaXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwoZcIn0uZmEtZmxvcHB5LW86YmVmb3JlLC5mYS1zYXZlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KHXCJ9LmZhLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoPCiFwifS5mYS1iYXJzOmJlZm9yZSwuZmEtbmF2aWNvbjpiZWZvcmUsLmZhLXJlb3JkZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwolcIn0uZmEtbGlzdC11bDpiZWZvcmV7Y29udGVudDpcIsOvwoPCilwifS5mYS1saXN0LW9sOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KLXCJ9LmZhLXN0cmlrZXRocm91Z2g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwoxcIn0uZmEtdW5kZXJsaW5lOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KNXCJ9LmZhLXRhYmxlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KOXCJ9LmZhLW1hZ2ljOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KQXCJ9LmZhLXRydWNrOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KRXCJ9LmZhLXBpbnRlcmVzdDpiZWZvcmV7Y29udGVudDpcIsOvwoPCklwifS5mYS1waW50ZXJlc3Qtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KTXCJ9LmZhLWdvb2dsZS1wbHVzLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoPClFwifS5mYS1nb29nbGUtcGx1czpiZWZvcmV7Y29udGVudDpcIsOvwoPClVwifS5mYS1tb25leTpiZWZvcmV7Y29udGVudDpcIsOvwoPCllwifS5mYS1jYXJldC1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KXXCJ9LmZhLWNhcmV0LXVwOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KYXCJ9LmZhLWNhcmV0LWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwplcIn0uZmEtY2FyZXQtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwppcIn0uZmEtY29sdW1uczpiZWZvcmV7Y29udGVudDpcIsOvwoPCm1wifS5mYS1zb3J0OmJlZm9yZSwuZmEtdW5zb3J0ZWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwpxcIn0uZmEtc29ydC1kZXNjOmJlZm9yZSwuZmEtc29ydC1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KdXCJ9LmZhLXNvcnQtYXNjOmJlZm9yZSwuZmEtc29ydC11cDpiZWZvcmV7Y29udGVudDpcIsOvwoPCnlwifS5mYS1lbnZlbG9wZTpiZWZvcmV7Y29udGVudDpcIsOvwoPCoFwifS5mYS1saW5rZWRpbjpiZWZvcmV7Y29udGVudDpcIsOvwoPCoVwifS5mYS1yb3RhdGUtbGVmdDpiZWZvcmUsLmZhLXVuZG86YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqJcIn0uZmEtZ2F2ZWw6YmVmb3JlLC5mYS1sZWdhbDpiZWZvcmV7Y29udGVudDpcIsOvwoPCo1wifS5mYS1kYXNoYm9hcmQ6YmVmb3JlLC5mYS10YWNob21ldGVyOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KkXCJ9LmZhLWNvbW1lbnQtbzpiZWZvcmV7Y29udGVudDpcIsOvwoPCpVwifS5mYS1jb21tZW50cy1vOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KmXCJ9LmZhLWJvbHQ6YmVmb3JlLC5mYS1mbGFzaDpiZWZvcmV7Y29udGVudDpcIsOvwoPCp1wifS5mYS1zaXRlbWFwOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KoXCJ9LmZhLXVtYnJlbGxhOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KpXCJ9LmZhLWNsaXBib2FyZDpiZWZvcmUsLmZhLXBhc3RlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KqXCJ9LmZhLWxpZ2h0YnVsYi1vOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KrXCJ9LmZhLWV4Y2hhbmdlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KsXCJ9LmZhLWNsb3VkLWRvd25sb2FkOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KtXCJ9LmZhLWNsb3VkLXVwbG9hZDpiZWZvcmV7Y29udGVudDpcIsOvwoPCrlwifS5mYS11c2VyLW1kOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KwXCJ9LmZhLXN0ZXRob3Njb3BlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KxXCJ9LmZhLXN1aXRjYXNlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KyXCJ9LmZhLWJlbGwtbzpiZWZvcmV7Y29udGVudDpcIsOvwoLColwifS5mYS1jb2ZmZWU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrRcIn0uZmEtY3V0bGVyeTpiZWZvcmV7Y29udGVudDpcIsOvwoPCtVwifS5mYS1maWxlLXRleHQtbzpiZWZvcmV7Y29udGVudDpcIsOvwoPCtlwifS5mYS1idWlsZGluZy1vOmJlZm9yZXtjb250ZW50Olwiw6/Cg8K3XCJ9LmZhLWhvc3BpdGFsLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrhcIn0uZmEtYW1idWxhbmNlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8K5XCJ9LmZhLW1lZGtpdDpiZWZvcmV7Y29udGVudDpcIsOvwoPCulwifS5mYS1maWdodGVyLWpldDpiZWZvcmV7Y29udGVudDpcIsOvwoPCu1wifS5mYS1iZWVyOmJlZm9yZXtjb250ZW50Olwiw6/Cg8K8XCJ9LmZhLWgtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8K9XCJ9LmZhLXBsdXMtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8K+XCJ9LmZhLWFuZ2xlLWRvdWJsZS1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKAXCJ9LmZhLWFuZ2xlLWRvdWJsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoTCgVwifS5mYS1hbmdsZS1kb3VibGUtdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwoJcIn0uZmEtYW5nbGUtZG91YmxlLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwoNcIn0uZmEtYW5nbGUtbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwoTChFwifS5mYS1hbmdsZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoTChVwifS5mYS1hbmdsZS11cDpiZWZvcmV7Y29udGVudDpcIsOvwoTChlwifS5mYS1hbmdsZS1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/ChMKHXCJ9LmZhLWRlc2t0b3A6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwohcIn0uZmEtbGFwdG9wOmJlZm9yZXtjb250ZW50Olwiw6/ChMKJXCJ9LmZhLXRhYmxldDpiZWZvcmV7Y29udGVudDpcIsOvwoTCilwifS5mYS1tb2JpbGUtcGhvbmU6YmVmb3JlLC5mYS1tb2JpbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwotcIn0uZmEtY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwoxcIn0uZmEtcXVvdGUtbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwoTCjVwifS5mYS1xdW90ZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoTCjlwifS5mYS1zcGlubmVyOmJlZm9yZXtjb250ZW50Olwiw6/ChMKQXCJ9LmZhLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIsOvwoTCkVwifS5mYS1tYWlsLXJlcGx5OmJlZm9yZSwuZmEtcmVwbHk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwpJcIn0uZmEtZ2l0aHViLWFsdDpiZWZvcmV7Y29udGVudDpcIsOvwoTCk1wifS5mYS1mb2xkZXItbzpiZWZvcmV7Y29udGVudDpcIsOvwoTClFwifS5mYS1mb2xkZXItb3Blbi1vOmJlZm9yZXtjb250ZW50Olwiw6/ChMKVXCJ9LmZhLXNtaWxlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwphcIn0uZmEtZnJvd24tbzpiZWZvcmV7Y29udGVudDpcIsOvwoTCmVwifS5mYS1tZWgtbzpiZWZvcmV7Y29udGVudDpcIsOvwoTCmlwifS5mYS1nYW1lcGFkOmJlZm9yZXtjb250ZW50Olwiw6/ChMKbXCJ9LmZhLWtleWJvYXJkLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwpxcIn0uZmEtZmxhZy1vOmJlZm9yZXtjb250ZW50Olwiw6/ChMKdXCJ9LmZhLWZsYWctY2hlY2tlcmVkOmJlZm9yZXtjb250ZW50Olwiw6/ChMKeXCJ9LmZhLXRlcm1pbmFsOmJlZm9yZXtjb250ZW50Olwiw6/ChMKgXCJ9LmZhLWNvZGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwqFcIn0uZmEtbWFpbC1yZXBseS1hbGw6YmVmb3JlLC5mYS1yZXBseS1hbGw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwqJcIn0uZmEtc3Rhci1oYWxmLWVtcHR5OmJlZm9yZSwuZmEtc3Rhci1oYWxmLWZ1bGw6YmVmb3JlLC5mYS1zdGFyLWhhbGYtbzpiZWZvcmV7Y29udGVudDpcIsOvwoTCo1wifS5mYS1sb2NhdGlvbi1hcnJvdzpiZWZvcmV7Y29udGVudDpcIsOvwoTCpFwifS5mYS1jcm9wOmJlZm9yZXtjb250ZW50Olwiw6/ChMKlXCJ9LmZhLWNvZGUtZm9yazpiZWZvcmV7Y29udGVudDpcIsOvwoTCplwifS5mYS1jaGFpbi1icm9rZW46YmVmb3JlLC5mYS11bmxpbms6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwqdcIn0uZmEtcXVlc3Rpb246YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwqhcIn0uZmEtaW5mbzpiZWZvcmV7Y29udGVudDpcIsOvwoTCqVwifS5mYS1leGNsYW1hdGlvbjpiZWZvcmV7Y29udGVudDpcIsOvwoTCqlwifS5mYS1zdXBlcnNjcmlwdDpiZWZvcmV7Y29udGVudDpcIsOvwoTCq1wifS5mYS1zdWJzY3JpcHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwqxcIn0uZmEtZXJhc2VyOmJlZm9yZXtjb250ZW50Olwiw6/ChMKtXCJ9LmZhLXB1enpsZS1waWVjZTpiZWZvcmV7Y29udGVudDpcIsOvwoTCrlwifS5mYS1taWNyb3Bob25lOmJlZm9yZXtjb250ZW50Olwiw6/ChMKwXCJ9LmZhLW1pY3JvcGhvbmUtc2xhc2g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrFcIn0uZmEtc2hpZWxkOmJlZm9yZXtjb250ZW50Olwiw6/ChMKyXCJ9LmZhLWNhbGVuZGFyLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrNcIn0uZmEtZmlyZS1leHRpbmd1aXNoZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrRcIn0uZmEtcm9ja2V0OmJlZm9yZXtjb250ZW50Olwiw6/ChMK1XCJ9LmZhLW1heGNkbjpiZWZvcmV7Y29udGVudDpcIsOvwoTCtlwifS5mYS1jaGV2cm9uLWNpcmNsZS1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/ChMK3XCJ9LmZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/ChMK4XCJ9LmZhLWNoZXZyb24tY2lyY2xlLXVwOmJlZm9yZXtjb250ZW50Olwiw6/ChMK5XCJ9LmZhLWNoZXZyb24tY2lyY2xlLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrpcIn0uZmEtaHRtbDU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrtcIn0uZmEtY3NzMzpiZWZvcmV7Y29udGVudDpcIsOvwoTCvFwifS5mYS1hbmNob3I6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwr1cIn0uZmEtdW5sb2NrLWFsdDpiZWZvcmV7Y29udGVudDpcIsOvwoTCvlwifS5mYS1idWxsc2V5ZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCgFwifS5mYS1lbGxpcHNpcy1oOmJlZm9yZXtjb250ZW50Olwiw6/ChcKBXCJ9LmZhLWVsbGlwc2lzLXY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwoJcIn0uZmEtcnNzLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCg1wifS5mYS1wbGF5LWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIsOvwoXChFwifS5mYS10aWNrZXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwoVcIn0uZmEtbWludXMtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKGXCJ9LmZhLW1pbnVzLXNxdWFyZS1vOmJlZm9yZXtjb250ZW50Olwiw6/ChcKHXCJ9LmZhLWxldmVsLXVwOmJlZm9yZXtjb250ZW50Olwiw6/ChcKIXCJ9LmZhLWxldmVsLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwolcIn0uZmEtY2hlY2stc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKKXCJ9LmZhLXBlbmNpbC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwotcIn0uZmEtZXh0ZXJuYWwtbGluay1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwoxcIn0uZmEtc2hhcmUtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKNXCJ9LmZhLWNvbXBhc3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwo5cIn0uZmEtY2FyZXQtc3F1YXJlLW8tZG93bjpiZWZvcmUsLmZhLXRvZ2dsZS1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/ChcKQXCJ9LmZhLWNhcmV0LXNxdWFyZS1vLXVwOmJlZm9yZSwuZmEtdG9nZ2xlLXVwOmJlZm9yZXtjb250ZW50Olwiw6/ChcKRXCJ9LmZhLWNhcmV0LXNxdWFyZS1vLXJpZ2h0OmJlZm9yZSwuZmEtdG9nZ2xlLXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/ChcKSXCJ9LmZhLWV1cjpiZWZvcmUsLmZhLWV1cm86YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwpNcIn0uZmEtZ2JwOmJlZm9yZXtjb250ZW50Olwiw6/ChcKUXCJ9LmZhLWRvbGxhcjpiZWZvcmUsLmZhLXVzZDpiZWZvcmV7Y29udGVudDpcIsOvwoXClVwifS5mYS1pbnI6YmVmb3JlLC5mYS1ydXBlZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCllwifS5mYS1jbnk6YmVmb3JlLC5mYS1qcHk6YmVmb3JlLC5mYS1ybWI6YmVmb3JlLC5mYS15ZW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwpdcIn0uZmEtcm91YmxlOmJlZm9yZSwuZmEtcnViOmJlZm9yZSwuZmEtcnVibGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwphcIn0uZmEta3J3OmJlZm9yZSwuZmEtd29uOmJlZm9yZXtjb250ZW50Olwiw6/ChcKZXCJ9LmZhLWJpdGNvaW46YmVmb3JlLC5mYS1idGM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwppcIn0uZmEtZmlsZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCm1wifS5mYS1maWxlLXRleHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwpxcIn0uZmEtc29ydC1hbHBoYS1hc2M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwp1cIn0uZmEtc29ydC1hbHBoYS1kZXNjOmJlZm9yZXtjb250ZW50Olwiw6/ChcKeXCJ9LmZhLXNvcnQtYW1vdW50LWFzYzpiZWZvcmV7Y29udGVudDpcIsOvwoXCoFwifS5mYS1zb3J0LWFtb3VudC1kZXNjOmJlZm9yZXtjb250ZW50Olwiw6/ChcKhXCJ9LmZhLXNvcnQtbnVtZXJpYy1hc2M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqJcIn0uZmEtc29ydC1udW1lcmljLWRlc2M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqNcIn0uZmEtdGh1bWJzLXVwOmJlZm9yZXtjb250ZW50Olwiw6/ChcKkXCJ9LmZhLXRodW1icy1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/ChcKlXCJ9LmZhLXlvdXR1YmUtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKmXCJ9LmZhLXlvdXR1YmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqdcIn0uZmEteGluZzpiZWZvcmV7Y29udGVudDpcIsOvwoXCqFwifS5mYS14aW5nLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCqVwifS5mYS15b3V0dWJlLXBsYXk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqpcIn0uZmEtZHJvcGJveDpiZWZvcmV7Y29udGVudDpcIsOvwoXCq1wifS5mYS1zdGFjay1vdmVyZmxvdzpiZWZvcmV7Y29udGVudDpcIsOvwoXCrFwifS5mYS1pbnN0YWdyYW06YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwq1cIn0uZmEtZmxpY2tyOmJlZm9yZXtjb250ZW50Olwiw6/ChcKuXCJ9LmZhLWFkbjpiZWZvcmV7Y29udGVudDpcIsOvwoXCsFwifS5mYS1iaXRidWNrZXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwrFcIn0uZmEtYml0YnVja2V0LXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCslwifS5mYS10dW1ibHI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwrNcIn0uZmEtdHVtYmxyLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCtFwifS5mYS1sb25nLWFycm93LWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwrVcIn0uZmEtbG9uZy1hcnJvdy11cDpiZWZvcmV7Y29udGVudDpcIsOvwoXCtlwifS5mYS1sb25nLWFycm93LWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwrdcIn0uZmEtbG9uZy1hcnJvdy1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoXCuFwifS5mYS1hcHBsZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCuVwifS5mYS13aW5kb3dzOmJlZm9yZXtjb250ZW50Olwiw6/ChcK6XCJ9LmZhLWFuZHJvaWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwrtcIn0uZmEtbGludXg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwrxcIn0uZmEtZHJpYmJibGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwr1cIn0uZmEtc2t5cGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwr5cIn0uZmEtZm91cnNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwobCgFwifS5mYS10cmVsbG86YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwoFcIn0uZmEtZmVtYWxlOmJlZm9yZXtjb250ZW50Olwiw6/ChsKCXCJ9LmZhLW1hbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwoNcIn0uZmEtZ2l0dGlwOmJlZm9yZSwuZmEtZ3JhdGlwYXk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwoRcIn0uZmEtc3VuLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwoVcIn0uZmEtbW9vbi1vOmJlZm9yZXtjb250ZW50Olwiw6/ChsKGXCJ9LmZhLWFyY2hpdmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwodcIn0uZmEtYnVnOmJlZm9yZXtjb250ZW50Olwiw6/ChsKIXCJ9LmZhLXZrOmJlZm9yZXtjb250ZW50Olwiw6/ChsKJXCJ9LmZhLXdlaWJvOmJlZm9yZXtjb250ZW50Olwiw6/ChsKKXCJ9LmZhLXJlbnJlbjpiZWZvcmV7Y29udGVudDpcIsOvwobCi1wifS5mYS1wYWdlbGluZXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwoxcIn0uZmEtc3RhY2stZXhjaGFuZ2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwo1cIn0uZmEtYXJyb3ctY2lyY2xlLW8tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwo5cIn0uZmEtYXJyb3ctY2lyY2xlLW8tbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwobCkFwifS5mYS1jYXJldC1zcXVhcmUtby1sZWZ0OmJlZm9yZSwuZmEtdG9nZ2xlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwpFcIn0uZmEtZG90LWNpcmNsZS1vOmJlZm9yZXtjb250ZW50Olwiw6/ChsKSXCJ9LmZhLXdoZWVsY2hhaXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwpNcIn0uZmEtdmltZW8tc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChsKUXCJ9LmZhLXRyeTpiZWZvcmUsLmZhLXR1cmtpc2gtbGlyYTpiZWZvcmV7Y29udGVudDpcIsOvwobClVwifS5mYS1wbHVzLXNxdWFyZS1vOmJlZm9yZXtjb250ZW50Olwiw6/ChsKWXCJ9LmZhLXNwYWNlLXNodXR0bGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwpdcIn0uZmEtc2xhY2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwphcIn0uZmEtZW52ZWxvcGUtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChsKZXCJ9LmZhLXdvcmRwcmVzczpiZWZvcmV7Y29udGVudDpcIsOvwobCmlwifS5mYS1vcGVuaWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwptcIn0uZmEtYmFuazpiZWZvcmUsLmZhLWluc3RpdHV0aW9uOmJlZm9yZSwuZmEtdW5pdmVyc2l0eTpiZWZvcmV7Y29udGVudDpcIsOvwobCnFwifS5mYS1ncmFkdWF0aW9uLWNhcDpiZWZvcmUsLmZhLW1vcnRhci1ib2FyZDpiZWZvcmV7Y29udGVudDpcIsOvwobCnVwifS5mYS15YWhvbzpiZWZvcmV7Y29udGVudDpcIsOvwobCnlwifS5mYS1nb29nbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqBcIn0uZmEtcmVkZGl0OmJlZm9yZXtjb250ZW50Olwiw6/ChsKhXCJ9LmZhLXJlZGRpdC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqJcIn0uZmEtc3R1bWJsZXVwb24tY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/ChsKjXCJ9LmZhLXN0dW1ibGV1cG9uOmJlZm9yZXtjb250ZW50Olwiw6/ChsKkXCJ9LmZhLWRlbGljaW91czpiZWZvcmV7Y29udGVudDpcIsOvwobCpVwifS5mYS1kaWdnOmJlZm9yZXtjb250ZW50Olwiw6/ChsKmXCJ9LmZhLXBpZWQtcGlwZXItcHA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqdcIn0uZmEtcGllZC1waXBlci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqhcIn0uZmEtZHJ1cGFsOmJlZm9yZXtjb250ZW50Olwiw6/ChsKpXCJ9LmZhLWpvb21sYTpiZWZvcmV7Y29udGVudDpcIsOvwobCqlwifS5mYS1sYW5ndWFnZTpiZWZvcmV7Y29udGVudDpcIsOvwobCq1wifS5mYS1mYXg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqxcIn0uZmEtYnVpbGRpbmc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwq1cIn0uZmEtY2hpbGQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwq5cIn0uZmEtcGF3OmJlZm9yZXtjb250ZW50Olwiw6/ChsKwXCJ9LmZhLXNwb29uOmJlZm9yZXtjb250ZW50Olwiw6/ChsKxXCJ9LmZhLWN1YmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrJcIn0uZmEtY3ViZXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrNcIn0uZmEtYmVoYW5jZTpiZWZvcmV7Y29udGVudDpcIsOvwobCtFwifS5mYS1iZWhhbmNlLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwobCtVwifS5mYS1zdGVhbTpiZWZvcmV7Y29udGVudDpcIsOvwobCtlwifS5mYS1zdGVhbS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrdcIn0uZmEtcmVjeWNsZTpiZWZvcmV7Y29udGVudDpcIsOvwobCuFwifS5mYS1hdXRvbW9iaWxlOmJlZm9yZSwuZmEtY2FyOmJlZm9yZXtjb250ZW50Olwiw6/ChsK5XCJ9LmZhLWNhYjpiZWZvcmUsLmZhLXRheGk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrpcIn0uZmEtdHJlZTpiZWZvcmV7Y29udGVudDpcIsOvwobCu1wifS5mYS1zcG90aWZ5OmJlZm9yZXtjb250ZW50Olwiw6/ChsK8XCJ9LmZhLWRldmlhbnRhcnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwr1cIn0uZmEtc291bmRjbG91ZDpiZWZvcmV7Y29udGVudDpcIsOvwobCvlwifS5mYS1kYXRhYmFzZTpiZWZvcmV7Y29udGVudDpcIsOvwofCgFwifS5mYS1maWxlLXBkZi1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KBXCJ9LmZhLWZpbGUtd29yZC1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KCXCJ9LmZhLWZpbGUtZXhjZWwtbzpiZWZvcmV7Y29udGVudDpcIsOvwofCg1wifS5mYS1maWxlLXBvd2VycG9pbnQtbzpiZWZvcmV7Y29udGVudDpcIsOvwofChFwifS5mYS1maWxlLWltYWdlLW86YmVmb3JlLC5mYS1maWxlLXBob3RvLW86YmVmb3JlLC5mYS1maWxlLXBpY3R1cmUtbzpiZWZvcmV7Y29udGVudDpcIsOvwofChVwifS5mYS1maWxlLWFyY2hpdmUtbzpiZWZvcmUsLmZhLWZpbGUtemlwLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwoZcIn0uZmEtZmlsZS1hdWRpby1vOmJlZm9yZSwuZmEtZmlsZS1zb3VuZC1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KHXCJ9LmZhLWZpbGUtbW92aWUtbzpiZWZvcmUsLmZhLWZpbGUtdmlkZW8tbzpiZWZvcmV7Y29udGVudDpcIsOvwofCiFwifS5mYS1maWxlLWNvZGUtbzpiZWZvcmV7Y29udGVudDpcIsOvwofCiVwifS5mYS12aW5lOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KKXCJ9LmZhLWNvZGVwZW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwotcIn0uZmEtanNmaWRkbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwoxcIn0uZmEtbGlmZS1ib3V5OmJlZm9yZSwuZmEtbGlmZS1idW95OmJlZm9yZSwuZmEtbGlmZS1yaW5nOmJlZm9yZSwuZmEtbGlmZS1zYXZlcjpiZWZvcmUsLmZhLXN1cHBvcnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwo1cIn0uZmEtY2lyY2xlLW8tbm90Y2g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwo5cIn0uZmEtcmE6YmVmb3JlLC5mYS1yZWJlbDpiZWZvcmUsLmZhLXJlc2lzdGFuY2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwpBcIn0uZmEtZW1waXJlOmJlZm9yZSwuZmEtZ2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwpFcIn0uZmEtZ2l0LXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwofCklwifS5mYS1naXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwpNcIn0uZmEtaGFja2VyLW5ld3M6YmVmb3JlLC5mYS15LWNvbWJpbmF0b3Itc3F1YXJlOmJlZm9yZSwuZmEteWMtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KUXCJ9LmZhLXRlbmNlbnQtd2VpYm86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwpVcIn0uZmEtcXE6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwpZcIn0uZmEtd2VjaGF0OmJlZm9yZSwuZmEtd2VpeGluOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KXXCJ9LmZhLXBhcGVyLXBsYW5lOmJlZm9yZSwuZmEtc2VuZDpiZWZvcmV7Y29udGVudDpcIsOvwofCmFwifS5mYS1wYXBlci1wbGFuZS1vOmJlZm9yZSwuZmEtc2VuZC1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KZXCJ9LmZhLWhpc3Rvcnk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwppcIn0uZmEtY2lyY2xlLXRoaW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwptcIn0uZmEtaGVhZGVyOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KcXCJ9LmZhLXBhcmFncmFwaDpiZWZvcmV7Y29udGVudDpcIsOvwofCnVwifS5mYS1zbGlkZXJzOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KeXCJ9LmZhLXNoYXJlLWFsdDpiZWZvcmV7Y29udGVudDpcIsOvwofCoFwifS5mYS1zaGFyZS1hbHQtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KhXCJ9LmZhLWJvbWI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqJcIn0uZmEtZnV0Ym9sLW86YmVmb3JlLC5mYS1zb2NjZXItYmFsbC1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KjXCJ9LmZhLXR0eTpiZWZvcmV7Y29udGVudDpcIsOvwofCpFwifS5mYS1iaW5vY3VsYXJzOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KlXCJ9LmZhLXBsdWc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqZcIn0uZmEtc2xpZGVzaGFyZTpiZWZvcmV7Y29udGVudDpcIsOvwofCp1wifS5mYS10d2l0Y2g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqhcIn0uZmEteWVscDpiZWZvcmV7Y29udGVudDpcIsOvwofCqVwifS5mYS1uZXdzcGFwZXItbzpiZWZvcmV7Y29udGVudDpcIsOvwofCqlwifS5mYS13aWZpOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KrXCJ9LmZhLWNhbGN1bGF0b3I6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqxcIn0uZmEtcGF5cGFsOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KtXCJ9LmZhLWdvb2dsZS13YWxsZXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwq5cIn0uZmEtY2MtdmlzYTpiZWZvcmV7Y29udGVudDpcIsOvwofCsFwifS5mYS1jYy1tYXN0ZXJjYXJkOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KxXCJ9LmZhLWNjLWRpc2NvdmVyOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KyXCJ9LmZhLWNjLWFtZXg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrNcIn0uZmEtY2MtcGF5cGFsOmJlZm9yZXtjb250ZW50Olwiw6/Ch8K0XCJ9LmZhLWNjLXN0cmlwZTpiZWZvcmV7Y29udGVudDpcIsOvwofCtVwifS5mYS1iZWxsLXNsYXNoOmJlZm9yZXtjb250ZW50Olwiw6/Ch8K2XCJ9LmZhLWJlbGwtc2xhc2gtbzpiZWZvcmV7Y29udGVudDpcIsOvwofCt1wifS5mYS10cmFzaDpiZWZvcmV7Y29udGVudDpcIsOvwofCuFwifS5mYS1jb3B5cmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrlcIn0uZmEtYXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrpcIn0uZmEtZXllZHJvcHBlcjpiZWZvcmV7Y29udGVudDpcIsOvwofCu1wifS5mYS1wYWludC1icnVzaDpiZWZvcmV7Y29udGVudDpcIsOvwofCvFwifS5mYS1iaXJ0aGRheS1jYWtlOmJlZm9yZXtjb250ZW50Olwiw6/Ch8K9XCJ9LmZhLWFyZWEtY2hhcnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwr5cIn0uZmEtcGllLWNoYXJ0OmJlZm9yZXtjb250ZW50Olwiw6/CiMKAXCJ9LmZhLWxpbmUtY2hhcnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwoFcIn0uZmEtbGFzdGZtOmJlZm9yZXtjb250ZW50Olwiw6/CiMKCXCJ9LmZhLWxhc3RmbS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwoNcIn0uZmEtdG9nZ2xlLW9mZjpiZWZvcmV7Y29udGVudDpcIsOvwojChFwifS5mYS10b2dnbGUtb246YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwoVcIn0uZmEtYmljeWNsZTpiZWZvcmV7Y29udGVudDpcIsOvwojChlwifS5mYS1idXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwodcIn0uZmEtaW94aG9zdDpiZWZvcmV7Y29udGVudDpcIsOvwojCiFwifS5mYS1hbmdlbGxpc3Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwolcIn0uZmEtY2M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwopcIn0uZmEtaWxzOmJlZm9yZSwuZmEtc2hla2VsOmJlZm9yZSwuZmEtc2hlcWVsOmJlZm9yZXtjb250ZW50Olwiw6/CiMKLXCJ9LmZhLW1lYW5wYXRoOmJlZm9yZXtjb250ZW50Olwiw6/CiMKMXCJ9LmZhLWJ1eXNlbGxhZHM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwo1cIn0uZmEtY29ubmVjdGRldmVsb3A6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwo5cIn0uZmEtZGFzaGN1YmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwpBcIn0uZmEtZm9ydW1iZWU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwpFcIn0uZmEtbGVhbnB1YjpiZWZvcmV7Y29udGVudDpcIsOvwojCklwifS5mYS1zZWxsc3k6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwpNcIn0uZmEtc2hpcnRzaW5idWxrOmJlZm9yZXtjb250ZW50Olwiw6/CiMKUXCJ9LmZhLXNpbXBseWJ1aWx0OmJlZm9yZXtjb250ZW50Olwiw6/CiMKVXCJ9LmZhLXNreWF0bGFzOmJlZm9yZXtjb250ZW50Olwiw6/CiMKWXCJ9LmZhLWNhcnQtcGx1czpiZWZvcmV7Y29udGVudDpcIsOvwojCl1wifS5mYS1jYXJ0LWFycm93LWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwphcIn0uZmEtZGlhbW9uZDpiZWZvcmV7Y29udGVudDpcIsOvwojCmVwifS5mYS1zaGlwOmJlZm9yZXtjb250ZW50Olwiw6/CiMKaXCJ9LmZhLXVzZXItc2VjcmV0OmJlZm9yZXtjb250ZW50Olwiw6/CiMKbXCJ9LmZhLW1vdG9yY3ljbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwpxcIn0uZmEtc3RyZWV0LXZpZXc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwp1cIn0uZmEtaGVhcnRiZWF0OmJlZm9yZXtjb250ZW50Olwiw6/CiMKeXCJ9LmZhLXZlbnVzOmJlZm9yZXtjb250ZW50Olwiw6/CiMKhXCJ9LmZhLW1hcnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqJcIn0uZmEtbWVyY3VyeTpiZWZvcmV7Y29udGVudDpcIsOvwojCo1wifS5mYS1pbnRlcnNleDpiZWZvcmUsLmZhLXRyYW5zZ2VuZGVyOmJlZm9yZXtjb250ZW50Olwiw6/CiMKkXCJ9LmZhLXRyYW5zZ2VuZGVyLWFsdDpiZWZvcmV7Y29udGVudDpcIsOvwojCpVwifS5mYS12ZW51cy1kb3VibGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqZcIn0uZmEtbWFycy1kb3VibGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqdcIn0uZmEtdmVudXMtbWFyczpiZWZvcmV7Y29udGVudDpcIsOvwojCqFwifS5mYS1tYXJzLXN0cm9rZTpiZWZvcmV7Y29udGVudDpcIsOvwojCqVwifS5mYS1tYXJzLXN0cm9rZS12OmJlZm9yZXtjb250ZW50Olwiw6/CiMKqXCJ9LmZhLW1hcnMtc3Ryb2tlLWg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqtcIn0uZmEtbmV1dGVyOmJlZm9yZXtjb250ZW50Olwiw6/CiMKsXCJ9LmZhLWdlbmRlcmxlc3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwq1cIn0uZmEtZmFjZWJvb2stb2ZmaWNpYWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrBcIn0uZmEtcGludGVyZXN0LXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrFcIn0uZmEtd2hhdHNhcHA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrJcIn0uZmEtc2VydmVyOmJlZm9yZXtjb250ZW50Olwiw6/CiMKzXCJ9LmZhLXVzZXItcGx1czpiZWZvcmV7Y29udGVudDpcIsOvwojCtFwifS5mYS11c2VyLXRpbWVzOmJlZm9yZXtjb250ZW50Olwiw6/CiMK1XCJ9LmZhLWJlZDpiZWZvcmUsLmZhLWhvdGVsOmJlZm9yZXtjb250ZW50Olwiw6/CiMK2XCJ9LmZhLXZpYWNvaW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrdcIn0uZmEtdHJhaW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrhcIn0uZmEtc3Vid2F5OmJlZm9yZXtjb250ZW50Olwiw6/CiMK5XCJ9LmZhLW1lZGl1bTpiZWZvcmV7Y29udGVudDpcIsOvwojCulwifS5mYS15LWNvbWJpbmF0b3I6YmVmb3JlLC5mYS15YzpiZWZvcmV7Y29udGVudDpcIsOvwojCu1wifS5mYS1vcHRpbi1tb25zdGVyOmJlZm9yZXtjb250ZW50Olwiw6/CiMK8XCJ9LmZhLW9wZW5jYXJ0OmJlZm9yZXtjb250ZW50Olwiw6/CiMK9XCJ9LmZhLWV4cGVkaXRlZHNzbDpiZWZvcmV7Y29udGVudDpcIsOvwojCvlwifS5mYS1iYXR0ZXJ5LTQ6YmVmb3JlLC5mYS1iYXR0ZXJ5LWZ1bGw6YmVmb3JlLC5mYS1iYXR0ZXJ5OmJlZm9yZXtjb250ZW50Olwiw6/CicKAXCJ9LmZhLWJhdHRlcnktMzpiZWZvcmUsLmZhLWJhdHRlcnktdGhyZWUtcXVhcnRlcnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwoFcIn0uZmEtYmF0dGVyeS0yOmJlZm9yZSwuZmEtYmF0dGVyeS1oYWxmOmJlZm9yZXtjb250ZW50Olwiw6/CicKCXCJ9LmZhLWJhdHRlcnktMTpiZWZvcmUsLmZhLWJhdHRlcnktcXVhcnRlcjpiZWZvcmV7Y29udGVudDpcIsOvwonCg1wifS5mYS1iYXR0ZXJ5LTA6YmVmb3JlLC5mYS1iYXR0ZXJ5LWVtcHR5OmJlZm9yZXtjb250ZW50Olwiw6/CicKEXCJ9LmZhLW1vdXNlLXBvaW50ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwoVcIn0uZmEtaS1jdXJzb3I6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwoZcIn0uZmEtb2JqZWN0LWdyb3VwOmJlZm9yZXtjb250ZW50Olwiw6/CicKHXCJ9LmZhLW9iamVjdC11bmdyb3VwOmJlZm9yZXtjb250ZW50Olwiw6/CicKIXCJ9LmZhLXN0aWNreS1ub3RlOmJlZm9yZXtjb250ZW50Olwiw6/CicKJXCJ9LmZhLXN0aWNreS1ub3RlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwopcIn0uZmEtY2MtamNiOmJlZm9yZXtjb250ZW50Olwiw6/CicKLXCJ9LmZhLWNjLWRpbmVycy1jbHViOmJlZm9yZXtjb250ZW50Olwiw6/CicKMXCJ9LmZhLWNsb25lOmJlZm9yZXtjb250ZW50Olwiw6/CicKNXCJ9LmZhLWJhbGFuY2Utc2NhbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwo5cIn0uZmEtaG91cmdsYXNzLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwpBcIn0uZmEtaG91cmdsYXNzLTE6YmVmb3JlLC5mYS1ob3VyZ2xhc3Mtc3RhcnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwpFcIn0uZmEtaG91cmdsYXNzLTI6YmVmb3JlLC5mYS1ob3VyZ2xhc3MtaGFsZjpiZWZvcmV7Y29udGVudDpcIsOvwonCklwifS5mYS1ob3VyZ2xhc3MtMzpiZWZvcmUsLmZhLWhvdXJnbGFzcy1lbmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwpNcIn0uZmEtaG91cmdsYXNzOmJlZm9yZXtjb250ZW50Olwiw6/CicKUXCJ9LmZhLWhhbmQtZ3JhYi1vOmJlZm9yZSwuZmEtaGFuZC1yb2NrLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwpVcIn0uZmEtaGFuZC1wYXBlci1vOmJlZm9yZSwuZmEtaGFuZC1zdG9wLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwpZcIn0uZmEtaGFuZC1zY2lzc29ycy1vOmJlZm9yZXtjb250ZW50Olwiw6/CicKXXCJ9LmZhLWhhbmQtbGl6YXJkLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwphcIn0uZmEtaGFuZC1zcG9jay1vOmJlZm9yZXtjb250ZW50Olwiw6/CicKZXCJ9LmZhLWhhbmQtcG9pbnRlci1vOmJlZm9yZXtjb250ZW50Olwiw6/CicKaXCJ9LmZhLWhhbmQtcGVhY2UtbzpiZWZvcmV7Y29udGVudDpcIsOvwonCm1wifS5mYS10cmFkZW1hcms6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwpxcIn0uZmEtcmVnaXN0ZXJlZDpiZWZvcmV7Y29udGVudDpcIsOvwonCnVwifS5mYS1jcmVhdGl2ZS1jb21tb25zOmJlZm9yZXtjb250ZW50Olwiw6/CicKeXCJ9LmZhLWdnOmJlZm9yZXtjb250ZW50Olwiw6/CicKgXCJ9LmZhLWdnLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIsOvwonCoVwifS5mYS10cmlwYWR2aXNvcjpiZWZvcmV7Y29udGVudDpcIsOvwonColwifS5mYS1vZG5va2xhc3NuaWtpOmJlZm9yZXtjb250ZW50Olwiw6/CicKjXCJ9LmZhLW9kbm9rbGFzc25pa2ktc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/CicKkXCJ9LmZhLWdldC1wb2NrZXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqVcIn0uZmEtd2lraXBlZGlhLXc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqZcIn0uZmEtc2FmYXJpOmJlZm9yZXtjb250ZW50Olwiw6/CicKnXCJ9LmZhLWNocm9tZTpiZWZvcmV7Y29udGVudDpcIsOvwonCqFwifS5mYS1maXJlZm94OmJlZm9yZXtjb250ZW50Olwiw6/CicKpXCJ9LmZhLW9wZXJhOmJlZm9yZXtjb250ZW50Olwiw6/CicKqXCJ9LmZhLWludGVybmV0LWV4cGxvcmVyOmJlZm9yZXtjb250ZW50Olwiw6/CicKrXCJ9LmZhLXRlbGV2aXNpb246YmVmb3JlLC5mYS10djpiZWZvcmV7Y29udGVudDpcIsOvwonCrFwifS5mYS1jb250YW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwq1cIn0uZmEtNTAwcHg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwq5cIn0uZmEtYW1hem9uOmJlZm9yZXtjb250ZW50Olwiw6/CicKwXCJ9LmZhLWNhbGVuZGFyLXBsdXMtbzpiZWZvcmV7Y29udGVudDpcIsOvwonCsVwifS5mYS1jYWxlbmRhci1taW51cy1vOmJlZm9yZXtjb250ZW50Olwiw6/CicKyXCJ9LmZhLWNhbGVuZGFyLXRpbWVzLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrNcIn0uZmEtY2FsZW5kYXItY2hlY2stbzpiZWZvcmV7Y29udGVudDpcIsOvwonCtFwifS5mYS1pbmR1c3RyeTpiZWZvcmV7Y29udGVudDpcIsOvwonCtVwifS5mYS1tYXAtcGluOmJlZm9yZXtjb250ZW50Olwiw6/CicK2XCJ9LmZhLW1hcC1zaWduczpiZWZvcmV7Y29udGVudDpcIsOvwonCt1wifS5mYS1tYXAtbzpiZWZvcmV7Y29udGVudDpcIsOvwonCuFwifS5mYS1tYXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrlcIn0uZmEtY29tbWVudGluZzpiZWZvcmV7Y29udGVudDpcIsOvwonCulwifS5mYS1jb21tZW50aW5nLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrtcIn0uZmEtaG91eno6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrxcIn0uZmEtdmltZW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwr1cIn0uZmEtYmxhY2stdGllOmJlZm9yZXtjb250ZW50Olwiw6/CicK+XCJ9LmZhLWZvbnRpY29uczpiZWZvcmV7Y29udGVudDpcIsOvworCgFwifS5mYS1yZWRkaXQtYWxpZW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwoFcIn0uZmEtZWRnZTpiZWZvcmV7Y29udGVudDpcIsOvworCglwifS5mYS1jcmVkaXQtY2FyZC1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwoNcIn0uZmEtY29kaWVwaWU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwoRcIn0uZmEtbW9keDpiZWZvcmV7Y29udGVudDpcIsOvworChVwifS5mYS1mb3J0LWF3ZXNvbWU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwoZcIn0uZmEtdXNiOmJlZm9yZXtjb250ZW50Olwiw6/CisKHXCJ9LmZhLXByb2R1Y3QtaHVudDpiZWZvcmV7Y29udGVudDpcIsOvworCiFwifS5mYS1taXhjbG91ZDpiZWZvcmV7Y29udGVudDpcIsOvworCiVwifS5mYS1zY3JpYmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwopcIn0uZmEtcGF1c2UtY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/CisKLXCJ9LmZhLXBhdXNlLWNpcmNsZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CisKMXCJ9LmZhLXN0b3AtY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/CisKNXCJ9LmZhLXN0b3AtY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwo5cIn0uZmEtc2hvcHBpbmctYmFnOmJlZm9yZXtjb250ZW50Olwiw6/CisKQXCJ9LmZhLXNob3BwaW5nLWJhc2tldDpiZWZvcmV7Y29udGVudDpcIsOvworCkVwifS5mYS1oYXNodGFnOmJlZm9yZXtjb250ZW50Olwiw6/CisKSXCJ9LmZhLWJsdWV0b290aDpiZWZvcmV7Y29udGVudDpcIsOvworCk1wifS5mYS1ibHVldG9vdGgtYjpiZWZvcmV7Y29udGVudDpcIsOvworClFwifS5mYS1wZXJjZW50OmJlZm9yZXtjb250ZW50Olwiw6/CisKVXCJ9LmZhLWdpdGxhYjpiZWZvcmV7Y29udGVudDpcIsOvworCllwifS5mYS13cGJlZ2lubmVyOmJlZm9yZXtjb250ZW50Olwiw6/CisKXXCJ9LmZhLXdwZm9ybXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwphcIn0uZmEtZW52aXJhOmJlZm9yZXtjb250ZW50Olwiw6/CisKZXCJ9LmZhLXVuaXZlcnNhbC1hY2Nlc3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwppcIn0uZmEtd2hlZWxjaGFpci1hbHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwptcIn0uZmEtcXVlc3Rpb24tY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwpxcIn0uZmEtYmxpbmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwp1cIn0uZmEtYXVkaW8tZGVzY3JpcHRpb246YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwp5cIn0uZmEtdm9sdW1lLWNvbnRyb2wtcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqBcIn0uZmEtYnJhaWxsZTpiZWZvcmV7Y29udGVudDpcIsOvworCoVwifS5mYS1hc3Npc3RpdmUtbGlzdGVuaW5nLXN5c3RlbXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqJcIn0uZmEtYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmc6YmVmb3JlLC5mYS1hc2wtaW50ZXJwcmV0aW5nOmJlZm9yZXtjb250ZW50Olwiw6/CisKjXCJ9LmZhLWRlYWY6YmVmb3JlLC5mYS1kZWFmbmVzczpiZWZvcmUsLmZhLWhhcmQtb2YtaGVhcmluZzpiZWZvcmV7Y29udGVudDpcIsOvworCpFwifS5mYS1nbGlkZTpiZWZvcmV7Y29udGVudDpcIsOvworCpVwifS5mYS1nbGlkZS1nOmJlZm9yZXtjb250ZW50Olwiw6/CisKmXCJ9LmZhLXNpZ24tbGFuZ3VhZ2U6YmVmb3JlLC5mYS1zaWduaW5nOmJlZm9yZXtjb250ZW50Olwiw6/CisKnXCJ9LmZhLWxvdy12aXNpb246YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqhcIn0uZmEtdmlhZGVvOmJlZm9yZXtjb250ZW50Olwiw6/CisKpXCJ9LmZhLXZpYWRlby1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqpcIn0uZmEtc25hcGNoYXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqtcIn0uZmEtc25hcGNoYXQtZ2hvc3Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqxcIn0uZmEtc25hcGNoYXQtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/CisKtXCJ9LmZhLXBpZWQtcGlwZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwq5cIn0uZmEtZmlyc3Qtb3JkZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrBcIn0uZmEteW9hc3Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrFcIn0uZmEtdGhlbWVpc2xlOmJlZm9yZXtjb250ZW50Olwiw6/CisKyXCJ9LmZhLWdvb2dsZS1wbHVzLWNpcmNsZTpiZWZvcmUsLmZhLWdvb2dsZS1wbHVzLW9mZmljaWFsOmJlZm9yZXtjb250ZW50Olwiw6/CisKzXCJ9LmZhLWZhOmJlZm9yZSwuZmEtZm9udC1hd2Vzb21lOmJlZm9yZXtjb250ZW50Olwiw6/CisK0XCJ9LmZhLWhhbmRzaGFrZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CisK1XCJ9LmZhLWVudmVsb3BlLW9wZW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrZcIn0uZmEtZW52ZWxvcGUtb3Blbi1vOmJlZm9yZXtjb250ZW50Olwiw6/CisK3XCJ9LmZhLWxpbm9kZTpiZWZvcmV7Y29udGVudDpcIsOvworCuFwifS5mYS1hZGRyZXNzLWJvb2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrlcIn0uZmEtYWRkcmVzcy1ib29rLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrpcIn0uZmEtYWRkcmVzcy1jYXJkOmJlZm9yZSwuZmEtdmNhcmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrtcIn0uZmEtYWRkcmVzcy1jYXJkLW86YmVmb3JlLC5mYS12Y2FyZC1vOmJlZm9yZXtjb250ZW50Olwiw6/CisK8XCJ9LmZhLXVzZXItY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/CisK9XCJ9LmZhLXVzZXItY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwr5cIn0uZmEtdXNlci1vOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KAXCJ9LmZhLWlkLWJhZGdlOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KBXCJ9LmZhLWRyaXZlcnMtbGljZW5zZTpiZWZvcmUsLmZhLWlkLWNhcmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwoJcIn0uZmEtZHJpdmVycy1saWNlbnNlLW86YmVmb3JlLC5mYS1pZC1jYXJkLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwoNcIn0uZmEtcXVvcmE6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwoRcIn0uZmEtZnJlZS1jb2RlLWNhbXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwoVcIn0uZmEtdGVsZWdyYW06YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwoZcIn0uZmEtdGhlcm1vbWV0ZXItNDpiZWZvcmUsLmZhLXRoZXJtb21ldGVyLWZ1bGw6YmVmb3JlLC5mYS10aGVybW9tZXRlcjpiZWZvcmV7Y29udGVudDpcIsOvwovCh1wifS5mYS10aGVybW9tZXRlci0zOmJlZm9yZSwuZmEtdGhlcm1vbWV0ZXItdGhyZWUtcXVhcnRlcnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwohcIn0uZmEtdGhlcm1vbWV0ZXItMjpiZWZvcmUsLmZhLXRoZXJtb21ldGVyLWhhbGY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwolcIn0uZmEtdGhlcm1vbWV0ZXItMTpiZWZvcmUsLmZhLXRoZXJtb21ldGVyLXF1YXJ0ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwopcIn0uZmEtdGhlcm1vbWV0ZXItMDpiZWZvcmUsLmZhLXRoZXJtb21ldGVyLWVtcHR5OmJlZm9yZXtjb250ZW50Olwiw6/Ci8KLXCJ9LmZhLXNob3dlcjpiZWZvcmV7Y29udGVudDpcIsOvwovCjFwifS5mYS1iYXRoOmJlZm9yZSwuZmEtYmF0aHR1YjpiZWZvcmUsLmZhLXMxNTpiZWZvcmV7Y29udGVudDpcIsOvwovCjVwifS5mYS1wb2RjYXN0OmJlZm9yZXtjb250ZW50Olwiw6/Ci8KOXCJ9LmZhLXdpbmRvdy1tYXhpbWl6ZTpiZWZvcmV7Y29udGVudDpcIsOvwovCkFwifS5mYS13aW5kb3ctbWluaW1pemU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwpFcIn0uZmEtd2luZG93LXJlc3RvcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwpJcIn0uZmEtdGltZXMtcmVjdGFuZ2xlOmJlZm9yZSwuZmEtd2luZG93LWNsb3NlOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KTXCJ9LmZhLXRpbWVzLXJlY3RhbmdsZS1vOmJlZm9yZSwuZmEtd2luZG93LWNsb3NlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwpRcIn0uZmEtYmFuZGNhbXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwpVcIn0uZmEtZ3JhdjpiZWZvcmV7Y29udGVudDpcIsOvwovCllwifS5mYS1ldHN5OmJlZm9yZXtjb250ZW50Olwiw6/Ci8KXXCJ9LmZhLWltZGI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwphcIn0uZmEtcmF2ZWxyeTpiZWZvcmV7Y29udGVudDpcIsOvwovCmVwifS5mYS1lZXJjYXN0OmJlZm9yZXtjb250ZW50Olwiw6/Ci8KaXCJ9LmZhLW1pY3JvY2hpcDpiZWZvcmV7Y29udGVudDpcIsOvwovCm1wifS5mYS1zbm93Zmxha2UtbzpiZWZvcmV7Y29udGVudDpcIsOvwovCnFwifS5mYS1zdXBlcnBvd2VyczpiZWZvcmV7Y29udGVudDpcIsOvwovCnVwifS5mYS13cGV4cGxvcmVyOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KeXCJ9LmZhLW1lZXR1cDpiZWZvcmV7Y29udGVudDpcIsOvwovCoFwifS5zci1vbmx5e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtoZWlnaHQ6MXB4O3BhZGRpbmc6MDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDAsMCwwLDApO2JvcmRlcjowfS5zci1vbmx5LWZvY3VzYWJsZTphY3RpdmUsLnNyLW9ubHktZm9jdXNhYmxlOmZvY3Vze3Bvc2l0aW9uOnN0YXRpYzt3aWR0aDphdXRvO2hlaWdodDphdXRvO21hcmdpbjowO292ZXJmbG93OnZpc2libGU7Y2xpcDphdXRvfWF7Y3Vyc29yOnBvaW50ZXJ9I2VkaXRvcnttaW4taGVpZ2h0OjE1MHB4O292ZXJmbG93OmF1dG87bWFyZ2luLXRvcDo1cHg7cmVzaXplOnZlcnRpY2FsO291dGxpbmU6MH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhcntmb250OjEwMCAuOHJlbS8xNXB4IFJvYm90byxBcmlhbCxzYW5zLXNlcmlmO2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtwYWRkaW5nOi4ycmVtO2JvcmRlcjoxcHggc29saWQgI2RkZH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXR7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czo1cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO21hcmdpbi1yaWdodDo1cHg7dmVydGljYWwtYWxpZ246bWlkZGxlO2JvcmRlcjoxcHggc29saWQgI2RkZDttYXJnaW4tYm90dG9tOjNweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3BhZGRpbmc6LjRyZW07bWluLXdpZHRoOjJyZW07ZmxvYXQ6bGVmdDtib3JkZXI6MCBzb2xpZCAjZGRkfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9uOmZpcnN0LWNoaWxke2JvcmRlci1yYWRpdXM6NXB4IDAgMCA1cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b246bGFzdC1jaGlsZHtib3JkZXItcmFkaXVzOjAgNXB4IDVweCAwfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9uOmZpcnN0LWNoaWxkOmxhc3QtY2hpbGR7Ym9yZGVyLXJhZGl1czo1cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b246aG92ZXJ7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO3RyYW5zaXRpb246LjJzIGVhc2V9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b24uZm9jdXMsLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b246Zm9jdXN7b3V0bGluZTowfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9uOmRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtwb2ludGVyLWV2ZW50czpub25lO2N1cnNvcjpub3QtYWxsb3dlZH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbjpkaXNhYmxlZD4uY29sb3ItbGFiZWx7cG9pbnRlci1ldmVudHM6bm9uZTtjdXJzb3I6bm90LWFsbG93ZWR9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b246ZGlzYWJsZWQ+LmNvbG9yLWxhYmVsLmJhY2tncm91bmQsLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b246ZGlzYWJsZWQ+LmNvbG9yLWxhYmVsLmZvcmVncm91bmQgOmFmdGVye2JhY2tncm91bmQ6IzU1NX0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbi5hY3RpdmV7YmFja2dyb3VuZDojZmZmNWI5fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9uLmFjdGl2ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZhOTh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IHNlbGVjdHtmb250LXNpemU6MTFweDt3aWR0aDo5MHB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjouNXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMCk7Ym9yZGVyLXJhZGl1czo1cHg7b3V0bGluZTowO3BhZGRpbmc6LjRyZW07Y3Vyc29yOnBvaW50ZXJ9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZ3t3aWR0aDo5MHB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWhlYWRpbmc6ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O3BvaW50ZXItZXZlbnRzOm5vbmU7Y3Vyc29yOm5vdC1hbGxvd2VkfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWhlYWRpbmc6aG92ZXJ7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO3RyYW5zaXRpb246LjJzIGVhc2V9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udHt3aWR0aDo5MHB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQ6ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O3BvaW50ZXItZXZlbnRzOm5vbmU7Y3Vyc29yOm5vdC1hbGxvd2VkfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQ6aG92ZXJ7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO3RyYW5zaXRpb246LjJzIGVhc2V9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udC1zaXple3dpZHRoOjUwcHh9QHN1cHBvcnRzIG5vdCAoLW1vei1hcHBlYXJhbmNlOm5vbmUpey5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWhlYWRpbmcgb3B0Z3JvdXB7Zm9udC1zaXplOjEycHg7YmFja2dyb3VuZC1jb2xvcjojZjRmNGY0O3BhZGRpbmc6NXB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWhlYWRpbmcgb3B0aW9ue2JvcmRlcjoxcHggc29saWQ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWhlYWRpbmcgLmRlZmF1bHR7Zm9udC1zaXplOjE2cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZyAuaDF7Zm9udC1zaXplOjI0cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZyAuaDJ7Zm9udC1zaXplOjIwcHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZyAuaDN7Zm9udC1zaXplOjE2cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZyAuaDR7Zm9udC1zaXplOjE1cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZyAuaDV7Zm9udC1zaXplOjE0cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZyAuaDZ7Zm9udC1zaXplOjEzcHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZyAuZGl2LC5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWhlYWRpbmcgLnByZXtmb250LXNpemU6MTJweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250IG9wdGdyb3Vwe2ZvbnQtc2l6ZToxMnB4O2JhY2tncm91bmQtY29sb3I6I2Y0ZjRmNDtwYWRkaW5nOjVweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250IG9wdGlvbntib3JkZXI6MXB4IHNvbGlkO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemUgb3B0Z3JvdXB7Zm9udC1zaXplOjEycHg7YmFja2dyb3VuZC1jb2xvcjojZjRmNGY0O3BhZGRpbmc6NXB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZSBvcHRpb257Ym9yZGVyOjFweCBzb2xpZDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udC1zaXplIC5zaXplMXtmb250LXNpemU6MTBweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemUgLnNpemUye2ZvbnQtc2l6ZToxMnB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZSAuc2l6ZTN7Zm9udC1zaXplOjE0cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udC1zaXplIC5zaXplNHtmb250LXNpemU6MTZweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemUgLnNpemU1e2ZvbnQtc2l6ZToxOHB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZSAuc2l6ZTZ7Zm9udC1zaXplOjIwcHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udC1zaXplIC5zaXplN3tmb250LXNpemU6MjRweH19LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udC1zaXplOmRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtwb2ludGVyLWV2ZW50czpub25lO2N1cnNvcjpub3QtYWxsb3dlZH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemU6aG92ZXJ7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO3RyYW5zaXRpb246LjJzIGVhc2V9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5jb2xvci1sYWJlbHtwb3NpdGlvbjpyZWxhdGl2ZTtjdXJzb3I6cG9pbnRlcn0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmJhY2tncm91bmR7Zm9udC1zaXplOnNtYWxsZXI7YmFja2dyb3VuZDojMWIxYjFiO2NvbG9yOiNmZmY7cGFkZGluZzozcHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5mb3JlZ3JvdW5kIDphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OlwiXCI7bGVmdDotMXB4O3RvcDphdXRvO2JvdHRvbTotM3B4O3JpZ2h0OmF1dG87d2lkdGg6MTVweDtoZWlnaHQ6MnB4O3otaW5kZXg6MDtiYWNrZ3JvdW5kOiMxYjFiMWJ9YF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRWRpdG9yVG9vbGJhckNvbXBvbmVudCB7XHJcbiAgaWQgPSAnJztcclxuICBodG1sTW9kZSA9IGZhbHNlO1xyXG4gIHNob3dUb29sYmFyID0gdHJ1ZTtcclxuXHJcbiAgYmxvY2sgPSAnZGVmYXVsdCc7XHJcbiAgZm9udE5hbWUgPSAnQXJpYWwnO1xyXG4gIGZvbnRTaXplID0gJzUnO1xyXG5cclxuICBjdXN0b21DbGFzc0lkID0gLTE7XHJcbiAgY3VzdG9tQ2xhc3NlczogQ3VzdG9tQ2xhc3NbXTtcclxuXHJcbiAgdGFnTWFwID0ge1xyXG4gICAgQkxPQ0tRVU9URTogXCJpbmRlbnRcIixcclxuICAgIEE6IFwibGlua1wiXHJcbiAgfTtcclxuXHJcbiAgc2VsZWN0ID0gW1wiSDFcIiwgXCJIMlwiLCBcIkgzXCIsIFwiSDRcIiwgXCJINVwiLCBcIkg2XCIsIFwiUFwiLCBcIlBSRVwiLCBcIkRJVlwiXTtcclxuXHJcbiAgYnV0dG9ucyA9IFtcImJvbGRcIiwgXCJpdGFsaWNcIiwgXCJ1bmRlcmxpbmVcIiwgXCJzdHJpa2VUaHJvdWdoXCIsIFwic3Vic2NyaXB0XCIsIFwic3VwZXJzY3JpcHRcIiwgXCJqdXN0aWZ5TGVmdFwiLCBcImp1c3RpZnlDZW50ZXJcIixcclxuICAgIFwianVzdGlmeVJpZ2h0XCIsIFwianVzdGlmeUZ1bGxcIiwgXCJpbmRlbnRcIiwgXCJvdXRkZW50XCIsIFwiaW5zZXJ0VW5vcmRlcmVkTGlzdFwiLCBcImluc2VydE9yZGVyZWRMaXN0XCIsIFwibGlua1wiXTtcclxuXHJcbiAgQE91dHB1dCgpIGV4ZWN1dGU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlZGl0b3JTZXJ2aWNlOiBBbmd1bGFyRWRpdG9yU2VydmljZSwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSkge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciBjb21tYW5kIGZyb20gZWRpdG9yIGhlYWRlciBidXR0b25zXHJcbiAgICogQHBhcmFtIGNvbW1hbmQgc3RyaW5nIGZyb20gdG9vbGJhciBidXR0b25zXHJcbiAgICovXHJcbiAgdHJpZ2dlckNvbW1hbmQoY29tbWFuZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmV4ZWN1dGUuZW1pdChjb21tYW5kKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGhpZ2hsaWdodCBlZGl0b3IgYnV0dG9ucyB3aGVuIGN1cnNvciBtb3ZlZCBvciBwb3NpdGlvbmluZ1xyXG4gICAqL1xyXG4gIHRyaWdnZXJCdXR0b25zKCkge1xyXG4gICAgaWYgKCF0aGlzLnNob3dUb29sYmFyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9kb2N1bWVudC5xdWVyeUNvbW1hbmRTdGF0ZShlKTtcclxuICAgICAgY29uc3QgZWxlbWVudEJ5SWQgPSB0aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChlICsgJy0nICsgdGhpcy5pZCk7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50QnlJZCwgXCJhY3RpdmVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudEJ5SWQsIFwiYWN0aXZlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHRyaWdnZXIgaGlnaGxpZ2h0IGVkaXRvciBidXR0b25zIHdoZW4gY3Vyc29yIG1vdmVkIG9yIHBvc2l0aW9uaW5nIGluIGJsb2NrXHJcbiAgICovXHJcbiAgdHJpZ2dlckJsb2Nrcyhub2RlczogTm9kZVtdKSB7XHJcbiAgICBpZiAoIXRoaXMuc2hvd1Rvb2xiYXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlbGVjdC5mb3JFYWNoKHkgPT4ge1xyXG4gICAgICBjb25zdCBub2RlID0gbm9kZXMuZmluZCh4ID0+IHgubm9kZU5hbWUgPT09IHkpO1xyXG4gICAgICBpZiAobm9kZSAhPT0gdW5kZWZpbmVkICYmIHkgPT09IG5vZGUubm9kZU5hbWUpIHtcclxuICAgICAgICBpZiAoZm91bmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICB0aGlzLmJsb2NrID0gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChmb3VuZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmJsb2NrID0gJ2RlZmF1bHQnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3VuZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuY3VzdG9tQ2xhc3Nlcykge1xyXG4gICAgICB0aGlzLmN1c3RvbUNsYXNzZXMuZm9yRWFjaCgoeSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBub2RlID0gbm9kZXMuZmluZCh4ID0+IHtcclxuICAgICAgICAgIGlmICh4IGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4geC5jbGFzc05hbWUgPT09IHkuY2xhc3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG5vZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgaWYgKGZvdW5kID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1c3RvbUNsYXNzSWQgPSBpbmRleDtcclxuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZm91bmQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICB0aGlzLmN1c3RvbUNsYXNzSWQgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5rZXlzKHRoaXMudGFnTWFwKS5tYXAoZSA9PiB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRCeUlkID0gdGhpcy5fZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50YWdNYXBbZV0gKyAnLScgKyB0aGlzLmlkKTtcclxuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzLmZpbmQoeCA9PiB4Lm5vZGVOYW1lID09PSBlKTtcclxuICAgICAgaWYgKG5vZGUgIT09IHVuZGVmaW5lZCAmJiBlID09PSBub2RlLm5vZGVOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudEJ5SWQsIFwiYWN0aXZlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnRCeUlkLCBcImFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBpbnNlcnQgVVJMIGxpbmtcclxuICAgKi9cclxuICBpbnNlcnRVcmwoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBwcm9tcHQoXCJJbnNlcnQgVVJMIGxpbmtcIiwgJ2h0dHA6XFwvXFwvJyk7XHJcbiAgICBpZiAodXJsICYmIHVybCAhPT0gJycgJiYgdXJsICE9PSAnaHR0cDovLycpIHtcclxuICAgICAgdGhpcy5lZGl0b3JTZXJ2aWNlLmNyZWF0ZUxpbmsodXJsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBpbnNlcnQgY29sb3IgKi9cclxuICBpbnNlcnRDb2xvcihjb2xvcjogc3RyaW5nLCB3aGVyZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmVkaXRvclNlcnZpY2UuaW5zZXJ0Q29sb3IoY29sb3IsIHdoZXJlKTtcclxuICAgIHRoaXMuZXhlY3V0ZS5lbWl0KFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0IGZvbnQgTmFtZS9mYW1pbHlcclxuICAgKiBAcGFyYW0gZm9udE5hbWUgc3RyaW5nXHJcbiAgICovXHJcbiAgc2V0Rm9udE5hbWUoZm9udE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5lZGl0b3JTZXJ2aWNlLnNldEZvbnROYW1lKGZvbnROYW1lKTtcclxuICAgIHRoaXMuZXhlY3V0ZS5lbWl0KFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0IGZvbnQgU2l6ZVxyXG4gICAqIEBwYXJhbSBmb250U2l6ZSBzdHJpbmdcclxuICAgKiAgKi9cclxuICBzZXRGb250U2l6ZShmb250U2l6ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmVkaXRvclNlcnZpY2Uuc2V0Rm9udFNpemUoZm9udFNpemUpO1xyXG4gICAgdGhpcy5leGVjdXRlLmVtaXQoXCJcIik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB0b2dnbGUgZWRpdG9yIG1vZGUgKFdZU0lXWUcgb3IgU09VUkNFKVxyXG4gICAqIEBwYXJhbSBtIGJvb2xlYW5cclxuICAgKi9cclxuICBzZXRFZGl0b3JNb2RlKG06IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IHRvZ2dsZUVkaXRvck1vZGVCdXR0b24gPSB0aGlzLl9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZUVkaXRvck1vZGVcIiArICctJyArIHRoaXMuaWQpO1xyXG4gICAgaWYgKG0pIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModG9nZ2xlRWRpdG9yTW9kZUJ1dHRvbiwgXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0b2dnbGVFZGl0b3JNb2RlQnV0dG9uLCBcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICAgIHRoaXMuaHRtbE1vZGUgPSBtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBsb2FkIGltYWdlIHdoZW4gZmlsZSBpcyBzZWxlY3RlZFxyXG4gICAqL1xyXG4gIG9uRmlsZUNoYW5nZWQoZXZlbnQpIHtcclxuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICB0aGlzLmVkaXRvclNlcnZpY2UudXBsb2FkSW1hZ2UoZmlsZSkuc3Vic2NyaWJlKGUgPT4ge1xyXG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yU2VydmljZS5pbnNlcnRJbWFnZShlLmJvZHkuaW1hZ2VVcmwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEN1c3RvbUNsYXNzKGNsYXNzSWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5lZGl0b3JTZXJ2aWNlLmNyZWF0ZUN1c3RvbUNsYXNzKHRoaXMuY3VzdG9tQ2xhc3Nlc1tjbGFzc0lkXSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7QW5ndWxhckVkaXRvckNvbmZpZywgYW5ndWxhckVkaXRvckNvbmZpZ30gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7QW5ndWxhckVkaXRvclRvb2xiYXJDb21wb25lbnR9IGZyb20gXCIuL2FuZ3VsYXItZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QW5ndWxhckVkaXRvclNlcnZpY2V9IGZyb20gXCIuL2FuZ3VsYXItZWRpdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhbmd1bGFyLWVkaXRvcicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IChmb2N1cyk9XCJvbkVkaXRvckZvY3VzKClcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yXCIgaWQ9XCJhbmd1bGFyRWRpdG9yXCIgW3N0eWxlLndpZHRoXT1cImNvbmZpZy53aWR0aFwiXHJcbiAgICAgW3N0eWxlLm1pbldpZHRoXT1cImNvbmZpZy5taW5XaWR0aFwiPlxyXG4gIDxhbmd1bGFyLWVkaXRvci10b29sYmFyICNlZGl0b3JUb29sYmFyIChleGVjdXRlKT1cImV4ZWN1dGVDb21tYW5kKCRldmVudClcIj48L2FuZ3VsYXItZWRpdG9yLXRvb2xiYXI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJhbmd1bGFyLWVkaXRvci13cmFwcGVyXCIgI2VkaXRvcldyYXBwZXI+XHJcbiAgICA8ZGl2ICNlZGl0b3IgaWQ9XCJlZGl0b3JcIiBjbGFzcz1cImFuZ3VsYXItZWRpdG9yLXRleHRhcmVhXCIgW2F0dHIuY29udGVudGVkaXRhYmxlXT1cImNvbmZpZy5lZGl0YWJsZVwiXHJcbiAgICAgICAgIFthdHRyLnRyYW5zbGF0ZV09XCJjb25maWcudHJhbnNsYXRlXCJcclxuICAgICAgICAgW2F0dHIuc3BlbGxjaGVja109XCJjb25maWcuc3BlbGxjaGVja1wiIFtzdHlsZS5oZWlnaHRdPVwiY29uZmlnLmhlaWdodFwiIFtzdHlsZS5taW5IZWlnaHRdPVwiY29uZmlnLm1pbkhlaWdodFwiXHJcbiAgICAgICAgIChpbnB1dCk9XCJvbkNvbnRlbnRDaGFuZ2UoJGV2ZW50LnRhcmdldC5pbm5lckhUTUwpXCIgKGJsdXIpPVwib25UZXh0QXJlYUJsdXIoKVwiIChjbGljayk9XCJleGVjKClcIiAoa2V5dXApPVwiZXhlYygpXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW5ndWxhci1lZGl0b3ItcGxhY2Vob2xkZXJcIj57eyBwbGFjZWhvbGRlciB8fCBjb25maWdbJ3BsYWNlaG9sZGVyJ10gfX08L3NwYW4+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BAY2hhcnNldCBcIlVURi04XCI7LyohXG4gKiAgRm9udCBBd2Vzb21lIDQuNy4wIGJ5IEBkYXZlZ2FuZHkgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW8gLSBAZm9udGF3ZXNvbWVcbiAqICBMaWNlbnNlIC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvL2xpY2Vuc2UgKEZvbnQ6IFNJTCBPRkwgMS4xLCBDU1M6IE1JVCBMaWNlbnNlKVxuICovQGZvbnQtZmFjZXtmb250LWZhbWlseTpGb250QXdlc29tZTtzcmM6dXJsKC8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90P3Y9NC43LjApO3NyYzp1cmwoLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5lb3Q/I2llZml4JnY9NC43LjApIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLHVybCgvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmYyP3Y9NC43LjApIGZvcm1hdChcIndvZmYyXCIpLHVybCgvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmY/dj00LjcuMCkgZm9ybWF0KFwid29mZlwiKSx1cmwoLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC50dGY/dj00LjcuMCkgZm9ybWF0KFwidHJ1ZXR5cGVcIiksdXJsKC8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuc3ZnP3Y9NC43LjAjZm9udGF3ZXNvbWVyZWd1bGFyKSBmb3JtYXQoXCJzdmdcIik7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsfS5mYXtkaXNwbGF5OmlubGluZS1ibG9jaztmb250OjE0cHgvMSBGb250QXdlc29tZTtmb250LXNpemU6aW5oZXJpdDt0ZXh0LXJlbmRlcmluZzphdXRvOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlfS5mYS1sZ3tmb250LXNpemU6MS4zMzMzM2VtO2xpbmUtaGVpZ2h0Oi43NWVtO3ZlcnRpY2FsLWFsaWduOi0xNSV9LmZhLTJ4e2ZvbnQtc2l6ZToyZW19LmZhLTN4e2ZvbnQtc2l6ZTozZW19LmZhLTR4e2ZvbnQtc2l6ZTo0ZW19LmZhLTV4e2ZvbnQtc2l6ZTo1ZW19LmZhLWZ3e3dpZHRoOjEuMjg1NzFlbTt0ZXh0LWFsaWduOmNlbnRlcn0uZmEtdWx7cGFkZGluZy1sZWZ0OjA7bWFyZ2luLWxlZnQ6Mi4xNDI4NmVtO2xpc3Qtc3R5bGUtdHlwZTpub25lfS5mYS11bD5saXtwb3NpdGlvbjpyZWxhdGl2ZX0uZmEtbGl7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotMi4xNDI4NmVtO3dpZHRoOjIuMTQyODZlbTt0b3A6LjE0Mjg2ZW07dGV4dC1hbGlnbjpjZW50ZXJ9LmZhLWxpLmZhLWxne2xlZnQ6LTEuODU3MTRlbX0uZmEtYm9yZGVye3BhZGRpbmc6LjJlbSAuMjVlbSAuMTVlbTtib3JkZXI6LjA4ZW0gc29saWQgI2VlZTtib3JkZXItcmFkaXVzOi4xZW19LmZhLXB1bGwtbGVmdHtmbG9hdDpsZWZ0fS5mYS1wdWxsLXJpZ2h0e2Zsb2F0OnJpZ2h0fS5mYS5mYS1wdWxsLWxlZnR7bWFyZ2luLXJpZ2h0Oi4zZW19LmZhLmZhLXB1bGwtcmlnaHR7bWFyZ2luLWxlZnQ6LjNlbX0ucHVsbC1yaWdodHtmbG9hdDpyaWdodH0ucHVsbC1sZWZ0e2Zsb2F0OmxlZnR9LmZhLnB1bGwtbGVmdHttYXJnaW4tcmlnaHQ6LjNlbX0uZmEucHVsbC1yaWdodHttYXJnaW4tbGVmdDouM2VtfS5mYS1zcGluey13ZWJraXQtYW5pbWF0aW9uOjJzIGxpbmVhciBpbmZpbml0ZSBmYS1zcGluO2FuaW1hdGlvbjoycyBsaW5lYXIgaW5maW5pdGUgZmEtc3Bpbn0uZmEtcHVsc2V7LXdlYmtpdC1hbmltYXRpb246MXMgc3RlcHMoOCkgaW5maW5pdGUgZmEtc3BpbjthbmltYXRpb246MXMgc3RlcHMoOCkgaW5maW5pdGUgZmEtc3Bpbn1ALXdlYmtpdC1rZXlmcmFtZXMgZmEtc3BpbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKX19QGtleWZyYW1lcyBmYS1zcGluezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM1OWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpfX0uZmEtcm90YXRlLTkwey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9LmZhLXJvdGF0ZS0xODB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5mYS1yb3RhdGUtMjcwey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMjcwZGVnKX0uZmEtZmxpcC1ob3Jpem9udGFsey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC0xLDEpO3RyYW5zZm9ybTpzY2FsZSgtMSwxKX0uZmEtZmxpcC12ZXJ0aWNhbHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLC0xKTt0cmFuc2Zvcm06c2NhbGUoMSwtMSl9OnJvb3QgLmZhLWZsaXAtaG9yaXpvbnRhbCw6cm9vdCAuZmEtZmxpcC12ZXJ0aWNhbCw6cm9vdCAuZmEtcm90YXRlLTE4MCw6cm9vdCAuZmEtcm90YXRlLTI3MCw6cm9vdCAuZmEtcm90YXRlLTkwey13ZWJraXQtZmlsdGVyOm5vbmU7ZmlsdGVyOm5vbmV9LmZhLXN0YWNre3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjJlbTtoZWlnaHQ6MmVtO2xpbmUtaGVpZ2h0OjJlbTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmZhLXN0YWNrLTF4LC5mYS1zdGFjay0yeHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcn0uZmEtc3RhY2stMXh7bGluZS1oZWlnaHQ6aW5oZXJpdH0uZmEtc3RhY2stMnh7Zm9udC1zaXplOjJlbX0uZmEtaW52ZXJzZXtjb2xvcjojZmZmfS5mYS1nbGFzczpiZWZvcmV7Y29udGVudDpcIsOvwoDCgFwifS5mYS1tdXNpYzpiZWZvcmV7Y29udGVudDpcIsOvwoDCgVwifS5mYS1zZWFyY2g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwoJcIn0uZmEtZW52ZWxvcGUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoDCg1wifS5mYS1oZWFydDpiZWZvcmV7Y29udGVudDpcIsOvwoDChFwifS5mYS1zdGFyOmJlZm9yZXtjb250ZW50Olwiw6/CgMKFXCJ9LmZhLXN0YXItbzpiZWZvcmV7Y29udGVudDpcIsOvwoDChlwifS5mYS11c2VyOmJlZm9yZXtjb250ZW50Olwiw6/CgMKHXCJ9LmZhLWZpbG06YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwohcIn0uZmEtdGgtbGFyZ2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwolcIn0uZmEtdGg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwopcIn0uZmEtdGgtbGlzdDpiZWZvcmV7Y29udGVudDpcIsOvwoDCi1wifS5mYS1jaGVjazpiZWZvcmV7Y29udGVudDpcIsOvwoDCjFwifS5mYS1jbG9zZTpiZWZvcmUsLmZhLXJlbW92ZTpiZWZvcmUsLmZhLXRpbWVzOmJlZm9yZXtjb250ZW50Olwiw6/CgMKNXCJ9LmZhLXNlYXJjaC1wbHVzOmJlZm9yZXtjb250ZW50Olwiw6/CgMKOXCJ9LmZhLXNlYXJjaC1taW51czpiZWZvcmV7Y29udGVudDpcIsOvwoDCkFwifS5mYS1wb3dlci1vZmY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwpFcIn0uZmEtc2lnbmFsOmJlZm9yZXtjb250ZW50Olwiw6/CgMKSXCJ9LmZhLWNvZzpiZWZvcmUsLmZhLWdlYXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwpNcIn0uZmEtdHJhc2gtbzpiZWZvcmV7Y29udGVudDpcIsOvwoDClFwifS5mYS1ob21lOmJlZm9yZXtjb250ZW50Olwiw6/CgMKVXCJ9LmZhLWZpbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoDCllwifS5mYS1jbG9jay1vOmJlZm9yZXtjb250ZW50Olwiw6/CgMKXXCJ9LmZhLXJvYWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwphcIn0uZmEtZG93bmxvYWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwplcIn0uZmEtYXJyb3ctY2lyY2xlLW8tZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoDCmlwifS5mYS1hcnJvdy1jaXJjbGUtby11cDpiZWZvcmV7Y29udGVudDpcIsOvwoDCm1wifS5mYS1pbmJveDpiZWZvcmV7Y29udGVudDpcIsOvwoDCnFwifS5mYS1wbGF5LWNpcmNsZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CgMKdXCJ9LmZhLXJlcGVhdDpiZWZvcmUsLmZhLXJvdGF0ZS1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoDCnlwifS5mYS1yZWZyZXNoOmJlZm9yZXtjb250ZW50Olwiw6/CgMKhXCJ9LmZhLWxpc3QtYWx0OmJlZm9yZXtjb250ZW50Olwiw6/CgMKiXCJ9LmZhLWxvY2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwqNcIn0uZmEtZmxhZzpiZWZvcmV7Y29udGVudDpcIsOvwoDCpFwifS5mYS1oZWFkcGhvbmVzOmJlZm9yZXtjb250ZW50Olwiw6/CgMKlXCJ9LmZhLXZvbHVtZS1vZmY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwqZcIn0uZmEtdm9sdW1lLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwqdcIn0uZmEtdm9sdW1lLXVwOmJlZm9yZXtjb250ZW50Olwiw6/CgMKoXCJ9LmZhLXFyY29kZTpiZWZvcmV7Y29udGVudDpcIsOvwoDCqVwifS5mYS1iYXJjb2RlOmJlZm9yZXtjb250ZW50Olwiw6/CgMKqXCJ9LmZhLXRhZzpiZWZvcmV7Y29udGVudDpcIsOvwoDCq1wifS5mYS10YWdzOmJlZm9yZXtjb250ZW50Olwiw6/CgMKsXCJ9LmZhLWJvb2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwq1cIn0uZmEtYm9va21hcms6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwq5cIn0uZmEtcHJpbnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwq9cIn0uZmEtY2FtZXJhOmJlZm9yZXtjb250ZW50Olwiw6/CgMKwXCJ9LmZhLWZvbnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrFcIn0uZmEtYm9sZDpiZWZvcmV7Y29udGVudDpcIsOvwoDCslwifS5mYS1pdGFsaWM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrNcIn0uZmEtdGV4dC1oZWlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrRcIn0uZmEtdGV4dC13aWR0aDpiZWZvcmV7Y29udGVudDpcIsOvwoDCtVwifS5mYS1hbGlnbi1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/CgMK2XCJ9LmZhLWFsaWduLWNlbnRlcjpiZWZvcmV7Y29udGVudDpcIsOvwoDCt1wifS5mYS1hbGlnbi1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoDCuFwifS5mYS1hbGlnbi1qdXN0aWZ5OmJlZm9yZXtjb250ZW50Olwiw6/CgMK5XCJ9LmZhLWxpc3Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrpcIn0uZmEtZGVkZW50OmJlZm9yZSwuZmEtb3V0ZGVudDpiZWZvcmV7Y29udGVudDpcIsOvwoDCu1wifS5mYS1pbmRlbnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwrxcIn0uZmEtdmlkZW8tY2FtZXJhOmJlZm9yZXtjb250ZW50Olwiw6/CgMK9XCJ9LmZhLWltYWdlOmJlZm9yZSwuZmEtcGhvdG86YmVmb3JlLC5mYS1waWN0dXJlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KAwr5cIn0uZmEtcGVuY2lsOmJlZm9yZXtjb250ZW50Olwiw6/CgcKAXCJ9LmZhLW1hcC1tYXJrZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwoFcIn0uZmEtYWRqdXN0OmJlZm9yZXtjb250ZW50Olwiw6/CgcKCXCJ9LmZhLXRpbnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwoNcIn0uZmEtZWRpdDpiZWZvcmUsLmZhLXBlbmNpbC1zcXVhcmUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoHChFwifS5mYS1zaGFyZS1zcXVhcmUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoHChVwifS5mYS1jaGVjay1zcXVhcmUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoHChlwifS5mYS1hcnJvd3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwodcIn0uZmEtc3RlcC1iYWNrd2FyZDpiZWZvcmV7Y29udGVudDpcIsOvwoHCiFwifS5mYS1mYXN0LWJhY2t3YXJkOmJlZm9yZXtjb250ZW50Olwiw6/CgcKJXCJ9LmZhLWJhY2t3YXJkOmJlZm9yZXtjb250ZW50Olwiw6/CgcKKXCJ9LmZhLXBsYXk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwotcIn0uZmEtcGF1c2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwoxcIn0uZmEtc3RvcDpiZWZvcmV7Y29udGVudDpcIsOvwoHCjVwifS5mYS1mb3J3YXJkOmJlZm9yZXtjb250ZW50Olwiw6/CgcKOXCJ9LmZhLWZhc3QtZm9yd2FyZDpiZWZvcmV7Y29udGVudDpcIsOvwoHCkFwifS5mYS1zdGVwLWZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwpFcIn0uZmEtZWplY3Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwpJcIn0uZmEtY2hldnJvbi1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/CgcKTXCJ9LmZhLWNoZXZyb24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwpRcIn0uZmEtcGx1cy1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwpVcIn0uZmEtbWludXMtY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/CgcKWXCJ9LmZhLXRpbWVzLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcIsOvwoHCl1wifS5mYS1jaGVjay1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwphcIn0uZmEtcXVlc3Rpb24tY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/CgcKZXCJ9LmZhLWluZm8tY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/CgcKaXCJ9LmZhLWNyb3NzaGFpcnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwptcIn0uZmEtdGltZXMtY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwpxcIn0uZmEtY2hlY2stY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwp1cIn0uZmEtYmFuOmJlZm9yZXtjb250ZW50Olwiw6/CgcKeXCJ9LmZhLWFycm93LWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqBcIn0uZmEtYXJyb3ctcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqFcIn0uZmEtYXJyb3ctdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqJcIn0uZmEtYXJyb3ctZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoHCo1wifS5mYS1tYWlsLWZvcndhcmQ6YmVmb3JlLC5mYS1zaGFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoHCpFwifS5mYS1leHBhbmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqVcIn0uZmEtY29tcHJlc3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqZcIn0uZmEtcGx1czpiZWZvcmV7Y29udGVudDpcIsOvwoHCp1wifS5mYS1taW51czpiZWZvcmV7Y29udGVudDpcIsOvwoHCqFwifS5mYS1hc3RlcmlzazpiZWZvcmV7Y29udGVudDpcIsOvwoHCqVwifS5mYS1leGNsYW1hdGlvbi1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwqpcIn0uZmEtZ2lmdDpiZWZvcmV7Y29udGVudDpcIsOvwoHCq1wifS5mYS1sZWFmOmJlZm9yZXtjb250ZW50Olwiw6/CgcKsXCJ9LmZhLWZpcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwq1cIn0uZmEtZXllOmJlZm9yZXtjb250ZW50Olwiw6/CgcKuXCJ9LmZhLWV5ZS1zbGFzaDpiZWZvcmV7Y29udGVudDpcIsOvwoHCsFwifS5mYS1leGNsYW1hdGlvbi10cmlhbmdsZTpiZWZvcmUsLmZhLXdhcm5pbmc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrFcIn0uZmEtcGxhbmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrJcIn0uZmEtY2FsZW5kYXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrNcIn0uZmEtcmFuZG9tOmJlZm9yZXtjb250ZW50Olwiw6/CgcK0XCJ9LmZhLWNvbW1lbnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrVcIn0uZmEtbWFnbmV0OmJlZm9yZXtjb250ZW50Olwiw6/CgcK2XCJ9LmZhLWNoZXZyb24tdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrdcIn0uZmEtY2hldnJvbi1kb3duOmJlZm9yZXtjb250ZW50Olwiw6/CgcK4XCJ9LmZhLXJldHdlZXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrlcIn0uZmEtc2hvcHBpbmctY2FydDpiZWZvcmV7Y29udGVudDpcIsOvwoHCulwifS5mYS1mb2xkZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrtcIn0uZmEtZm9sZGVyLW9wZW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwrxcIn0uZmEtYXJyb3dzLXY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwr1cIn0uZmEtYXJyb3dzLWg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KBwr5cIn0uZmEtYmFyLWNoYXJ0LW86YmVmb3JlLC5mYS1iYXItY2hhcnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwoBcIn0uZmEtdHdpdHRlci1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwoFcIn0uZmEtZmFjZWJvb2stc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/CgsKCXCJ9LmZhLWNhbWVyYS1yZXRybzpiZWZvcmV7Y29udGVudDpcIsOvwoLCg1wifS5mYS1rZXk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwoRcIn0uZmEtY29nczpiZWZvcmUsLmZhLWdlYXJzOmJlZm9yZXtjb250ZW50Olwiw6/CgsKFXCJ9LmZhLWNvbW1lbnRzOmJlZm9yZXtjb250ZW50Olwiw6/CgsKGXCJ9LmZhLXRodW1icy1vLXVwOmJlZm9yZXtjb250ZW50Olwiw6/CgsKHXCJ9LmZhLXRodW1icy1vLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwohcIn0uZmEtc3Rhci1oYWxmOmJlZm9yZXtjb250ZW50Olwiw6/CgsKJXCJ9LmZhLWhlYXJ0LW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwopcIn0uZmEtc2lnbi1vdXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwotcIn0uZmEtbGlua2VkaW4tc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/CgsKMXCJ9LmZhLXRodW1iLXRhY2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwo1cIn0uZmEtZXh0ZXJuYWwtbGluazpiZWZvcmV7Y29udGVudDpcIsOvwoLCjlwifS5mYS1zaWduLWluOmJlZm9yZXtjb250ZW50Olwiw6/CgsKQXCJ9LmZhLXRyb3BoeTpiZWZvcmV7Y29udGVudDpcIsOvwoLCkVwifS5mYS1naXRodWItc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/CgsKSXCJ9LmZhLXVwbG9hZDpiZWZvcmV7Y29udGVudDpcIsOvwoLCk1wifS5mYS1sZW1vbi1vOmJlZm9yZXtjb250ZW50Olwiw6/CgsKUXCJ9LmZhLXBob25lOmJlZm9yZXtjb250ZW50Olwiw6/CgsKVXCJ9LmZhLXNxdWFyZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CgsKWXCJ9LmZhLWJvb2ttYXJrLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwpdcIn0uZmEtcGhvbmUtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/CgsKYXCJ9LmZhLXR3aXR0ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwplcIn0uZmEtZmFjZWJvb2stZjpiZWZvcmUsLmZhLWZhY2Vib29rOmJlZm9yZXtjb250ZW50Olwiw6/CgsKaXCJ9LmZhLWdpdGh1YjpiZWZvcmV7Y29udGVudDpcIsOvwoLCm1wifS5mYS11bmxvY2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwpxcIn0uZmEtY3JlZGl0LWNhcmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwp1cIn0uZmEtZmVlZDpiZWZvcmUsLmZhLXJzczpiZWZvcmV7Y29udGVudDpcIsOvwoLCnlwifS5mYS1oZGQtbzpiZWZvcmV7Y29udGVudDpcIsOvwoLCoFwifS5mYS1idWxsaG9ybjpiZWZvcmV7Y29udGVudDpcIsOvwoLCoVwifS5mYS1iZWxsOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KzXCJ9LmZhLWNlcnRpZmljYXRlOmJlZm9yZXtjb250ZW50Olwiw6/CgsKjXCJ9LmZhLWhhbmQtby1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoLCpFwifS5mYS1oYW5kLW8tbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwoLCpVwifS5mYS1oYW5kLW8tdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqZcIn0uZmEtaGFuZC1vLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqdcIn0uZmEtYXJyb3ctY2lyY2xlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwqhcIn0uZmEtYXJyb3ctY2lyY2xlLXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/CgsKpXCJ9LmZhLWFycm93LWNpcmNsZS11cDpiZWZvcmV7Y29udGVudDpcIsOvwoLCqlwifS5mYS1hcnJvdy1jaXJjbGUtZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoLCq1wifS5mYS1nbG9iZTpiZWZvcmV7Y29udGVudDpcIsOvwoLCrFwifS5mYS13cmVuY2g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwq1cIn0uZmEtdGFza3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KCwq5cIn0uZmEtZmlsdGVyOmJlZm9yZXtjb250ZW50Olwiw6/CgsKwXCJ9LmZhLWJyaWVmY2FzZTpiZWZvcmV7Y29udGVudDpcIsOvwoLCsVwifS5mYS1hcnJvd3MtYWx0OmJlZm9yZXtjb250ZW50Olwiw6/CgsKyXCJ9LmZhLWdyb3VwOmJlZm9yZSwuZmEtdXNlcnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwoBcIn0uZmEtY2hhaW46YmVmb3JlLC5mYS1saW5rOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KBXCJ9LmZhLWNsb3VkOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KCXCJ9LmZhLWZsYXNrOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KDXCJ9LmZhLWN1dDpiZWZvcmUsLmZhLXNjaXNzb3JzOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KEXCJ9LmZhLWNvcHk6YmVmb3JlLC5mYS1maWxlcy1vOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KFXCJ9LmZhLXBhcGVyY2xpcDpiZWZvcmV7Y29udGVudDpcIsOvwoPChlwifS5mYS1mbG9wcHktbzpiZWZvcmUsLmZhLXNhdmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwodcIn0uZmEtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KIXCJ9LmZhLWJhcnM6YmVmb3JlLC5mYS1uYXZpY29uOmJlZm9yZSwuZmEtcmVvcmRlcjpiZWZvcmV7Y29udGVudDpcIsOvwoPCiVwifS5mYS1saXN0LXVsOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KKXCJ9LmZhLWxpc3Qtb2w6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwotcIn0uZmEtc3RyaWtldGhyb3VnaDpiZWZvcmV7Y29udGVudDpcIsOvwoPCjFwifS5mYS11bmRlcmxpbmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwo1cIn0uZmEtdGFibGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwo5cIn0uZmEtbWFnaWM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwpBcIn0uZmEtdHJ1Y2s6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwpFcIn0uZmEtcGludGVyZXN0OmJlZm9yZXtjb250ZW50Olwiw6/Cg8KSXCJ9LmZhLXBpbnRlcmVzdC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwpNcIn0uZmEtZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KUXCJ9LmZhLWdvb2dsZS1wbHVzOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KVXCJ9LmZhLW1vbmV5OmJlZm9yZXtjb250ZW50Olwiw6/Cg8KWXCJ9LmZhLWNhcmV0LWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwpdcIn0uZmEtY2FyZXQtdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwphcIn0uZmEtY2FyZXQtbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwoPCmVwifS5mYS1jYXJldC1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwoPCmlwifS5mYS1jb2x1bW5zOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KbXCJ9LmZhLXNvcnQ6YmVmb3JlLC5mYS11bnNvcnRlZDpiZWZvcmV7Y29udGVudDpcIsOvwoPCnFwifS5mYS1zb3J0LWRlc2M6YmVmb3JlLC5mYS1zb3J0LWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwp1cIn0uZmEtc29ydC1hc2M6YmVmb3JlLC5mYS1zb3J0LXVwOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KeXCJ9LmZhLWVudmVsb3BlOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KgXCJ9LmZhLWxpbmtlZGluOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KhXCJ9LmZhLXJvdGF0ZS1sZWZ0OmJlZm9yZSwuZmEtdW5kbzpiZWZvcmV7Y29udGVudDpcIsOvwoPColwifS5mYS1nYXZlbDpiZWZvcmUsLmZhLWxlZ2FsOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KjXCJ9LmZhLWRhc2hib2FyZDpiZWZvcmUsLmZhLXRhY2hvbWV0ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqRcIn0uZmEtY29tbWVudC1vOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KlXCJ9LmZhLWNvbW1lbnRzLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqZcIn0uZmEtYm9sdDpiZWZvcmUsLmZhLWZsYXNoOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KnXCJ9LmZhLXNpdGVtYXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqhcIn0uZmEtdW1icmVsbGE6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqlcIn0uZmEtY2xpcGJvYXJkOmJlZm9yZSwuZmEtcGFzdGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqpcIn0uZmEtbGlnaHRidWxiLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqtcIn0uZmEtZXhjaGFuZ2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwqxcIn0uZmEtY2xvdWQtZG93bmxvYWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwq1cIn0uZmEtY2xvdWQtdXBsb2FkOmJlZm9yZXtjb250ZW50Olwiw6/Cg8KuXCJ9LmZhLXVzZXItbWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrBcIn0uZmEtc3RldGhvc2NvcGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrFcIn0uZmEtc3VpdGNhc2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrJcIn0uZmEtYmVsbC1vOmJlZm9yZXtjb250ZW50Olwiw6/CgsKiXCJ9LmZhLWNvZmZlZTpiZWZvcmV7Y29udGVudDpcIsOvwoPCtFwifS5mYS1jdXRsZXJ5OmJlZm9yZXtjb250ZW50Olwiw6/Cg8K1XCJ9LmZhLWZpbGUtdGV4dC1vOmJlZm9yZXtjb250ZW50Olwiw6/Cg8K2XCJ9LmZhLWJ1aWxkaW5nLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrdcIn0uZmEtaG9zcGl0YWwtbzpiZWZvcmV7Y29udGVudDpcIsOvwoPCuFwifS5mYS1hbWJ1bGFuY2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrlcIn0uZmEtbWVka2l0OmJlZm9yZXtjb250ZW50Olwiw6/Cg8K6XCJ9LmZhLWZpZ2h0ZXItamV0OmJlZm9yZXtjb250ZW50Olwiw6/Cg8K7XCJ9LmZhLWJlZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwrxcIn0uZmEtaC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwr1cIn0uZmEtcGx1cy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KDwr5cIn0uZmEtYW5nbGUtZG91YmxlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwoBcIn0uZmEtYW5nbGUtZG91YmxlLXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKBXCJ9LmZhLWFuZ2xlLWRvdWJsZS11cDpiZWZvcmV7Y29udGVudDpcIsOvwoTCglwifS5mYS1hbmdsZS1kb3VibGUtZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoTCg1wifS5mYS1hbmdsZS1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKEXCJ9LmZhLWFuZ2xlLXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKFXCJ9LmZhLWFuZ2xlLXVwOmJlZm9yZXtjb250ZW50Olwiw6/ChMKGXCJ9LmZhLWFuZ2xlLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwodcIn0uZmEtZGVza3RvcDpiZWZvcmV7Y29udGVudDpcIsOvwoTCiFwifS5mYS1sYXB0b3A6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwolcIn0uZmEtdGFibGV0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKKXCJ9LmZhLW1vYmlsZS1waG9uZTpiZWZvcmUsLmZhLW1vYmlsZTpiZWZvcmV7Y29udGVudDpcIsOvwoTCi1wifS5mYS1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoTCjFwifS5mYS1xdW90ZS1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKNXCJ9LmZhLXF1b3RlLXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKOXCJ9LmZhLXNwaW5uZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwpBcIn0uZmEtY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/ChMKRXCJ9LmZhLW1haWwtcmVwbHk6YmVmb3JlLC5mYS1yZXBseTpiZWZvcmV7Y29udGVudDpcIsOvwoTCklwifS5mYS1naXRodWItYWx0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKTXCJ9LmZhLWZvbGRlci1vOmJlZm9yZXtjb250ZW50Olwiw6/ChMKUXCJ9LmZhLWZvbGRlci1vcGVuLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwpVcIn0uZmEtc21pbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvwoTCmFwifS5mYS1mcm93bi1vOmJlZm9yZXtjb250ZW50Olwiw6/ChMKZXCJ9LmZhLW1laC1vOmJlZm9yZXtjb250ZW50Olwiw6/ChMKaXCJ9LmZhLWdhbWVwYWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwptcIn0uZmEta2V5Ym9hcmQtbzpiZWZvcmV7Y29udGVudDpcIsOvwoTCnFwifS5mYS1mbGFnLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwp1cIn0uZmEtZmxhZy1jaGVja2VyZWQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwp5cIn0uZmEtdGVybWluYWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwqBcIn0uZmEtY29kZTpiZWZvcmV7Y29udGVudDpcIsOvwoTCoVwifS5mYS1tYWlsLXJlcGx5LWFsbDpiZWZvcmUsLmZhLXJlcGx5LWFsbDpiZWZvcmV7Y29udGVudDpcIsOvwoTColwifS5mYS1zdGFyLWhhbGYtZW1wdHk6YmVmb3JlLC5mYS1zdGFyLWhhbGYtZnVsbDpiZWZvcmUsLmZhLXN0YXItaGFsZi1vOmJlZm9yZXtjb250ZW50Olwiw6/ChMKjXCJ9LmZhLWxvY2F0aW9uLWFycm93OmJlZm9yZXtjb250ZW50Olwiw6/ChMKkXCJ9LmZhLWNyb3A6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwqVcIn0uZmEtY29kZS1mb3JrOmJlZm9yZXtjb250ZW50Olwiw6/ChMKmXCJ9LmZhLWNoYWluLWJyb2tlbjpiZWZvcmUsLmZhLXVubGluazpiZWZvcmV7Y29udGVudDpcIsOvwoTCp1wifS5mYS1xdWVzdGlvbjpiZWZvcmV7Y29udGVudDpcIsOvwoTCqFwifS5mYS1pbmZvOmJlZm9yZXtjb250ZW50Olwiw6/ChMKpXCJ9LmZhLWV4Y2xhbWF0aW9uOmJlZm9yZXtjb250ZW50Olwiw6/ChMKqXCJ9LmZhLXN1cGVyc2NyaXB0OmJlZm9yZXtjb250ZW50Olwiw6/ChMKrXCJ9LmZhLXN1YnNjcmlwdDpiZWZvcmV7Y29udGVudDpcIsOvwoTCrFwifS5mYS1lcmFzZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwq1cIn0uZmEtcHV6emxlLXBpZWNlOmJlZm9yZXtjb250ZW50Olwiw6/ChMKuXCJ9LmZhLW1pY3JvcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrBcIn0uZmEtbWljcm9waG9uZS1zbGFzaDpiZWZvcmV7Y29udGVudDpcIsOvwoTCsVwifS5mYS1zaGllbGQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrJcIn0uZmEtY2FsZW5kYXItbzpiZWZvcmV7Y29udGVudDpcIsOvwoTCs1wifS5mYS1maXJlLWV4dGluZ3Vpc2hlcjpiZWZvcmV7Y29udGVudDpcIsOvwoTCtFwifS5mYS1yb2NrZXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrVcIn0uZmEtbWF4Y2RuOmJlZm9yZXtjb250ZW50Olwiw6/ChMK2XCJ9LmZhLWNoZXZyb24tY2lyY2xlLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrdcIn0uZmEtY2hldnJvbi1jaXJjbGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrhcIn0uZmEtY2hldnJvbi1jaXJjbGUtdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KEwrlcIn0uZmEtY2hldnJvbi1jaXJjbGUtZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoTCulwifS5mYS1odG1sNTpiZWZvcmV7Y29udGVudDpcIsOvwoTCu1wifS5mYS1jc3MzOmJlZm9yZXtjb250ZW50Olwiw6/ChMK8XCJ9LmZhLWFuY2hvcjpiZWZvcmV7Y29udGVudDpcIsOvwoTCvVwifS5mYS11bmxvY2stYWx0OmJlZm9yZXtjb250ZW50Olwiw6/ChMK+XCJ9LmZhLWJ1bGxzZXllOmJlZm9yZXtjb250ZW50Olwiw6/ChcKAXCJ9LmZhLWVsbGlwc2lzLWg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwoFcIn0uZmEtZWxsaXBzaXMtdjpiZWZvcmV7Y29udGVudDpcIsOvwoXCglwifS5mYS1yc3Mtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKDXCJ9LmZhLXBsYXktY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKEXCJ9LmZhLXRpY2tldDpiZWZvcmV7Y29udGVudDpcIsOvwoXChVwifS5mYS1taW51cy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwoZcIn0uZmEtbWludXMtc3F1YXJlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwodcIn0uZmEtbGV2ZWwtdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwohcIn0uZmEtbGV2ZWwtZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoXCiVwifS5mYS1jaGVjay1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwopcIn0uZmEtcGVuY2lsLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCi1wifS5mYS1leHRlcm5hbC1saW5rLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCjFwifS5mYS1zaGFyZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwo1cIn0uZmEtY29tcGFzczpiZWZvcmV7Y29udGVudDpcIsOvwoXCjlwifS5mYS1jYXJldC1zcXVhcmUtby1kb3duOmJlZm9yZSwuZmEtdG9nZ2xlLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwpBcIn0uZmEtY2FyZXQtc3F1YXJlLW8tdXA6YmVmb3JlLC5mYS10b2dnbGUtdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwpFcIn0uZmEtY2FyZXQtc3F1YXJlLW8tcmlnaHQ6YmVmb3JlLC5mYS10b2dnbGUtcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwpJcIn0uZmEtZXVyOmJlZm9yZSwuZmEtZXVybzpiZWZvcmV7Y29udGVudDpcIsOvwoXCk1wifS5mYS1nYnA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwpRcIn0uZmEtZG9sbGFyOmJlZm9yZSwuZmEtdXNkOmJlZm9yZXtjb250ZW50Olwiw6/ChcKVXCJ9LmZhLWlucjpiZWZvcmUsLmZhLXJ1cGVlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKWXCJ9LmZhLWNueTpiZWZvcmUsLmZhLWpweTpiZWZvcmUsLmZhLXJtYjpiZWZvcmUsLmZhLXllbjpiZWZvcmV7Y29udGVudDpcIsOvwoXCl1wifS5mYS1yb3VibGU6YmVmb3JlLC5mYS1ydWI6YmVmb3JlLC5mYS1ydWJsZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCmFwifS5mYS1rcnc6YmVmb3JlLC5mYS13b246YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwplcIn0uZmEtYml0Y29pbjpiZWZvcmUsLmZhLWJ0YzpiZWZvcmV7Y29udGVudDpcIsOvwoXCmlwifS5mYS1maWxlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKbXCJ9LmZhLWZpbGUtdGV4dDpiZWZvcmV7Y29udGVudDpcIsOvwoXCnFwifS5mYS1zb3J0LWFscGhhLWFzYzpiZWZvcmV7Y29udGVudDpcIsOvwoXCnVwifS5mYS1zb3J0LWFscGhhLWRlc2M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwp5cIn0uZmEtc29ydC1hbW91bnQtYXNjOmJlZm9yZXtjb250ZW50Olwiw6/ChcKgXCJ9LmZhLXNvcnQtYW1vdW50LWRlc2M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqFcIn0uZmEtc29ydC1udW1lcmljLWFzYzpiZWZvcmV7Y29udGVudDpcIsOvwoXColwifS5mYS1zb3J0LW51bWVyaWMtZGVzYzpiZWZvcmV7Y29udGVudDpcIsOvwoXCo1wifS5mYS10aHVtYnMtdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqRcIn0uZmEtdGh1bWJzLWRvd246YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqVcIn0uZmEteW91dHViZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwqZcIn0uZmEteW91dHViZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCp1wifS5mYS14aW5nOmJlZm9yZXtjb250ZW50Olwiw6/ChcKoXCJ9LmZhLXhpbmctc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKpXCJ9LmZhLXlvdXR1YmUtcGxheTpiZWZvcmV7Y29udGVudDpcIsOvwoXCqlwifS5mYS1kcm9wYm94OmJlZm9yZXtjb250ZW50Olwiw6/ChcKrXCJ9LmZhLXN0YWNrLW92ZXJmbG93OmJlZm9yZXtjb250ZW50Olwiw6/ChcKsXCJ9LmZhLWluc3RhZ3JhbTpiZWZvcmV7Y29udGVudDpcIsOvwoXCrVwifS5mYS1mbGlja3I6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwq5cIn0uZmEtYWRuOmJlZm9yZXtjb250ZW50Olwiw6/ChcKwXCJ9LmZhLWJpdGJ1Y2tldDpiZWZvcmV7Y29udGVudDpcIsOvwoXCsVwifS5mYS1iaXRidWNrZXQtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChcKyXCJ9LmZhLXR1bWJscjpiZWZvcmV7Y29udGVudDpcIsOvwoXCs1wifS5mYS10dW1ibHItc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChcK0XCJ9LmZhLWxvbmctYXJyb3ctZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwoXCtVwifS5mYS1sb25nLWFycm93LXVwOmJlZm9yZXtjb250ZW50Olwiw6/ChcK2XCJ9LmZhLWxvbmctYXJyb3ctbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwoXCt1wifS5mYS1sb25nLWFycm93LXJpZ2h0OmJlZm9yZXtjb250ZW50Olwiw6/ChcK4XCJ9LmZhLWFwcGxlOmJlZm9yZXtjb250ZW50Olwiw6/ChcK5XCJ9LmZhLXdpbmRvd3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KFwrpcIn0uZmEtYW5kcm9pZDpiZWZvcmV7Y29udGVudDpcIsOvwoXCu1wifS5mYS1saW51eDpiZWZvcmV7Y29udGVudDpcIsOvwoXCvFwifS5mYS1kcmliYmJsZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCvVwifS5mYS1za3lwZTpiZWZvcmV7Y29udGVudDpcIsOvwoXCvlwifS5mYS1mb3Vyc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChsKAXCJ9LmZhLXRyZWxsbzpiZWZvcmV7Y29udGVudDpcIsOvwobCgVwifS5mYS1mZW1hbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwoJcIn0uZmEtbWFsZTpiZWZvcmV7Y29udGVudDpcIsOvwobCg1wifS5mYS1naXR0aXA6YmVmb3JlLC5mYS1ncmF0aXBheTpiZWZvcmV7Y29udGVudDpcIsOvwobChFwifS5mYS1zdW4tbzpiZWZvcmV7Y29udGVudDpcIsOvwobChVwifS5mYS1tb29uLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwoZcIn0uZmEtYXJjaGl2ZTpiZWZvcmV7Y29udGVudDpcIsOvwobCh1wifS5mYS1idWc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwohcIn0uZmEtdms6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwolcIn0uZmEtd2VpYm86YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwopcIn0uZmEtcmVucmVuOmJlZm9yZXtjb250ZW50Olwiw6/ChsKLXCJ9LmZhLXBhZ2VsaW5lczpiZWZvcmV7Y29udGVudDpcIsOvwobCjFwifS5mYS1zdGFjay1leGNoYW5nZTpiZWZvcmV7Y29udGVudDpcIsOvwobCjVwifS5mYS1hcnJvdy1jaXJjbGUtby1yaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwobCjlwifS5mYS1hcnJvdy1jaXJjbGUtby1sZWZ0OmJlZm9yZXtjb250ZW50Olwiw6/ChsKQXCJ9LmZhLWNhcmV0LXNxdWFyZS1vLWxlZnQ6YmVmb3JlLC5mYS10b2dnbGUtbGVmdDpiZWZvcmV7Y29udGVudDpcIsOvwobCkVwifS5mYS1kb3QtY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwpJcIn0uZmEtd2hlZWxjaGFpcjpiZWZvcmV7Y29udGVudDpcIsOvwobCk1wifS5mYS12aW1lby1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwpRcIn0uZmEtdHJ5OmJlZm9yZSwuZmEtdHVya2lzaC1saXJhOmJlZm9yZXtjb250ZW50Olwiw6/ChsKVXCJ9LmZhLXBsdXMtc3F1YXJlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwpZcIn0uZmEtc3BhY2Utc2h1dHRsZTpiZWZvcmV7Y29udGVudDpcIsOvwobCl1wifS5mYS1zbGFjazpiZWZvcmV7Y29udGVudDpcIsOvwobCmFwifS5mYS1lbnZlbG9wZS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwplcIn0uZmEtd29yZHByZXNzOmJlZm9yZXtjb250ZW50Olwiw6/ChsKaXCJ9LmZhLW9wZW5pZDpiZWZvcmV7Y29udGVudDpcIsOvwobCm1wifS5mYS1iYW5rOmJlZm9yZSwuZmEtaW5zdGl0dXRpb246YmVmb3JlLC5mYS11bml2ZXJzaXR5OmJlZm9yZXtjb250ZW50Olwiw6/ChsKcXCJ9LmZhLWdyYWR1YXRpb24tY2FwOmJlZm9yZSwuZmEtbW9ydGFyLWJvYXJkOmJlZm9yZXtjb250ZW50Olwiw6/ChsKdXCJ9LmZhLXlhaG9vOmJlZm9yZXtjb250ZW50Olwiw6/ChsKeXCJ9LmZhLWdvb2dsZTpiZWZvcmV7Y29udGVudDpcIsOvwobCoFwifS5mYS1yZWRkaXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqFcIn0uZmEtcmVkZGl0LXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwobColwifS5mYS1zdHVtYmxldXBvbi1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqNcIn0uZmEtc3R1bWJsZXVwb246YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqRcIn0uZmEtZGVsaWNpb3VzOmJlZm9yZXtjb250ZW50Olwiw6/ChsKlXCJ9LmZhLWRpZ2c6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqZcIn0uZmEtcGllZC1waXBlci1wcDpiZWZvcmV7Y29udGVudDpcIsOvwobCp1wifS5mYS1waWVkLXBpcGVyLWFsdDpiZWZvcmV7Y29udGVudDpcIsOvwobCqFwifS5mYS1kcnVwYWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwqlcIn0uZmEtam9vbWxhOmJlZm9yZXtjb250ZW50Olwiw6/ChsKqXCJ9LmZhLWxhbmd1YWdlOmJlZm9yZXtjb250ZW50Olwiw6/ChsKrXCJ9LmZhLWZheDpiZWZvcmV7Y29udGVudDpcIsOvwobCrFwifS5mYS1idWlsZGluZzpiZWZvcmV7Y29udGVudDpcIsOvwobCrVwifS5mYS1jaGlsZDpiZWZvcmV7Y29udGVudDpcIsOvwobCrlwifS5mYS1wYXc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrBcIn0uZmEtc3Bvb246YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrFcIn0uZmEtY3ViZTpiZWZvcmV7Y29udGVudDpcIsOvwobCslwifS5mYS1jdWJlczpiZWZvcmV7Y29udGVudDpcIsOvwobCs1wifS5mYS1iZWhhbmNlOmJlZm9yZXtjb250ZW50Olwiw6/ChsK0XCJ9LmZhLWJlaGFuY2Utc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/ChsK1XCJ9LmZhLXN0ZWFtOmJlZm9yZXtjb250ZW50Olwiw6/ChsK2XCJ9LmZhLXN0ZWFtLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwobCt1wifS5mYS1yZWN5Y2xlOmJlZm9yZXtjb250ZW50Olwiw6/ChsK4XCJ9LmZhLWF1dG9tb2JpbGU6YmVmb3JlLC5mYS1jYXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrlcIn0uZmEtY2FiOmJlZm9yZSwuZmEtdGF4aTpiZWZvcmV7Y29udGVudDpcIsOvwobCulwifS5mYS10cmVlOmJlZm9yZXtjb250ZW50Olwiw6/ChsK7XCJ9LmZhLXNwb3RpZnk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KGwrxcIn0uZmEtZGV2aWFudGFydDpiZWZvcmV7Y29udGVudDpcIsOvwobCvVwifS5mYS1zb3VuZGNsb3VkOmJlZm9yZXtjb250ZW50Olwiw6/ChsK+XCJ9LmZhLWRhdGFiYXNlOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KAXCJ9LmZhLWZpbGUtcGRmLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwoFcIn0uZmEtZmlsZS13b3JkLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwoJcIn0uZmEtZmlsZS1leGNlbC1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KDXCJ9LmZhLWZpbGUtcG93ZXJwb2ludC1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KEXCJ9LmZhLWZpbGUtaW1hZ2UtbzpiZWZvcmUsLmZhLWZpbGUtcGhvdG8tbzpiZWZvcmUsLmZhLWZpbGUtcGljdHVyZS1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KFXCJ9LmZhLWZpbGUtYXJjaGl2ZS1vOmJlZm9yZSwuZmEtZmlsZS16aXAtbzpiZWZvcmV7Y29udGVudDpcIsOvwofChlwifS5mYS1maWxlLWF1ZGlvLW86YmVmb3JlLC5mYS1maWxlLXNvdW5kLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwodcIn0uZmEtZmlsZS1tb3ZpZS1vOmJlZm9yZSwuZmEtZmlsZS12aWRlby1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KIXCJ9LmZhLWZpbGUtY29kZS1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KJXCJ9LmZhLXZpbmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwopcIn0uZmEtY29kZXBlbjpiZWZvcmV7Y29udGVudDpcIsOvwofCi1wifS5mYS1qc2ZpZGRsZTpiZWZvcmV7Y29udGVudDpcIsOvwofCjFwifS5mYS1saWZlLWJvdXk6YmVmb3JlLC5mYS1saWZlLWJ1b3k6YmVmb3JlLC5mYS1saWZlLXJpbmc6YmVmb3JlLC5mYS1saWZlLXNhdmVyOmJlZm9yZSwuZmEtc3VwcG9ydDpiZWZvcmV7Y29udGVudDpcIsOvwofCjVwifS5mYS1jaXJjbGUtby1ub3RjaDpiZWZvcmV7Y29udGVudDpcIsOvwofCjlwifS5mYS1yYTpiZWZvcmUsLmZhLXJlYmVsOmJlZm9yZSwuZmEtcmVzaXN0YW5jZTpiZWZvcmV7Y29udGVudDpcIsOvwofCkFwifS5mYS1lbXBpcmU6YmVmb3JlLC5mYS1nZTpiZWZvcmV7Y29udGVudDpcIsOvwofCkVwifS5mYS1naXQtc3F1YXJlOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KSXCJ9LmZhLWdpdDpiZWZvcmV7Y29udGVudDpcIsOvwofCk1wifS5mYS1oYWNrZXItbmV3czpiZWZvcmUsLmZhLXktY29tYmluYXRvci1zcXVhcmU6YmVmb3JlLC5mYS15Yy1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwpRcIn0uZmEtdGVuY2VudC13ZWlibzpiZWZvcmV7Y29udGVudDpcIsOvwofClVwifS5mYS1xcTpiZWZvcmV7Y29udGVudDpcIsOvwofCllwifS5mYS13ZWNoYXQ6YmVmb3JlLC5mYS13ZWl4aW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwpdcIn0uZmEtcGFwZXItcGxhbmU6YmVmb3JlLC5mYS1zZW5kOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KYXCJ9LmZhLXBhcGVyLXBsYW5lLW86YmVmb3JlLC5mYS1zZW5kLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwplcIn0uZmEtaGlzdG9yeTpiZWZvcmV7Y29udGVudDpcIsOvwofCmlwifS5mYS1jaXJjbGUtdGhpbjpiZWZvcmV7Y29udGVudDpcIsOvwofCm1wifS5mYS1oZWFkZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwpxcIn0uZmEtcGFyYWdyYXBoOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KdXCJ9LmZhLXNsaWRlcnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwp5cIn0uZmEtc2hhcmUtYWx0OmJlZm9yZXtjb250ZW50Olwiw6/Ch8KgXCJ9LmZhLXNoYXJlLWFsdC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqFcIn0uZmEtYm9tYjpiZWZvcmV7Y29udGVudDpcIsOvwofColwifS5mYS1mdXRib2wtbzpiZWZvcmUsLmZhLXNvY2Nlci1iYWxsLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqNcIn0uZmEtdHR5OmJlZm9yZXtjb250ZW50Olwiw6/Ch8KkXCJ9LmZhLWJpbm9jdWxhcnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqVcIn0uZmEtcGx1ZzpiZWZvcmV7Y29udGVudDpcIsOvwofCplwifS5mYS1zbGlkZXNoYXJlOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KnXCJ9LmZhLXR3aXRjaDpiZWZvcmV7Y29udGVudDpcIsOvwofCqFwifS5mYS15ZWxwOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KpXCJ9LmZhLW5ld3NwYXBlci1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KqXCJ9LmZhLXdpZmk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwqtcIn0uZmEtY2FsY3VsYXRvcjpiZWZvcmV7Y29udGVudDpcIsOvwofCrFwifS5mYS1wYXlwYWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwq1cIn0uZmEtZ29vZ2xlLXdhbGxldDpiZWZvcmV7Y29udGVudDpcIsOvwofCrlwifS5mYS1jYy12aXNhOmJlZm9yZXtjb250ZW50Olwiw6/Ch8KwXCJ9LmZhLWNjLW1hc3RlcmNhcmQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrFcIn0uZmEtY2MtZGlzY292ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrJcIn0uZmEtY2MtYW1leDpiZWZvcmV7Y29udGVudDpcIsOvwofCs1wifS5mYS1jYy1wYXlwYWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrRcIn0uZmEtY2Mtc3RyaXBlOmJlZm9yZXtjb250ZW50Olwiw6/Ch8K1XCJ9LmZhLWJlbGwtc2xhc2g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwrZcIn0uZmEtYmVsbC1zbGFzaC1vOmJlZm9yZXtjb250ZW50Olwiw6/Ch8K3XCJ9LmZhLXRyYXNoOmJlZm9yZXtjb250ZW50Olwiw6/Ch8K4XCJ9LmZhLWNvcHlyaWdodDpiZWZvcmV7Y29udGVudDpcIsOvwofCuVwifS5mYS1hdDpiZWZvcmV7Y29udGVudDpcIsOvwofCulwifS5mYS1leWVkcm9wcGVyOmJlZm9yZXtjb250ZW50Olwiw6/Ch8K7XCJ9LmZhLXBhaW50LWJydXNoOmJlZm9yZXtjb250ZW50Olwiw6/Ch8K8XCJ9LmZhLWJpcnRoZGF5LWNha2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KHwr1cIn0uZmEtYXJlYS1jaGFydDpiZWZvcmV7Y29udGVudDpcIsOvwofCvlwifS5mYS1waWUtY2hhcnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwoBcIn0uZmEtbGluZS1jaGFydDpiZWZvcmV7Y29udGVudDpcIsOvwojCgVwifS5mYS1sYXN0Zm06YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwoJcIn0uZmEtbGFzdGZtLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvwojCg1wifS5mYS10b2dnbGUtb2ZmOmJlZm9yZXtjb250ZW50Olwiw6/CiMKEXCJ9LmZhLXRvZ2dsZS1vbjpiZWZvcmV7Y29udGVudDpcIsOvwojChVwifS5mYS1iaWN5Y2xlOmJlZm9yZXtjb250ZW50Olwiw6/CiMKGXCJ9LmZhLWJ1czpiZWZvcmV7Y29udGVudDpcIsOvwojCh1wifS5mYS1pb3hob3N0OmJlZm9yZXtjb250ZW50Olwiw6/CiMKIXCJ9LmZhLWFuZ2VsbGlzdDpiZWZvcmV7Y29udGVudDpcIsOvwojCiVwifS5mYS1jYzpiZWZvcmV7Y29udGVudDpcIsOvwojCilwifS5mYS1pbHM6YmVmb3JlLC5mYS1zaGVrZWw6YmVmb3JlLC5mYS1zaGVxZWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwotcIn0uZmEtbWVhbnBhdGg6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwoxcIn0uZmEtYnV5c2VsbGFkczpiZWZvcmV7Y29udGVudDpcIsOvwojCjVwifS5mYS1jb25uZWN0ZGV2ZWxvcDpiZWZvcmV7Y29udGVudDpcIsOvwojCjlwifS5mYS1kYXNoY3ViZTpiZWZvcmV7Y29udGVudDpcIsOvwojCkFwifS5mYS1mb3J1bWJlZTpiZWZvcmV7Y29udGVudDpcIsOvwojCkVwifS5mYS1sZWFucHViOmJlZm9yZXtjb250ZW50Olwiw6/CiMKSXCJ9LmZhLXNlbGxzeTpiZWZvcmV7Y29udGVudDpcIsOvwojCk1wifS5mYS1zaGlydHNpbmJ1bGs6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwpRcIn0uZmEtc2ltcGx5YnVpbHQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwpVcIn0uZmEtc2t5YXRsYXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwpZcIn0uZmEtY2FydC1wbHVzOmJlZm9yZXtjb250ZW50Olwiw6/CiMKXXCJ9LmZhLWNhcnQtYXJyb3ctZG93bjpiZWZvcmV7Y29udGVudDpcIsOvwojCmFwifS5mYS1kaWFtb25kOmJlZm9yZXtjb250ZW50Olwiw6/CiMKZXCJ9LmZhLXNoaXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwppcIn0uZmEtdXNlci1zZWNyZXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwptcIn0uZmEtbW90b3JjeWNsZTpiZWZvcmV7Y29udGVudDpcIsOvwojCnFwifS5mYS1zdHJlZXQtdmlldzpiZWZvcmV7Y29udGVudDpcIsOvwojCnVwifS5mYS1oZWFydGJlYXQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwp5cIn0uZmEtdmVudXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqFcIn0uZmEtbWFyczpiZWZvcmV7Y29udGVudDpcIsOvwojColwifS5mYS1tZXJjdXJ5OmJlZm9yZXtjb250ZW50Olwiw6/CiMKjXCJ9LmZhLWludGVyc2V4OmJlZm9yZSwuZmEtdHJhbnNnZW5kZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqRcIn0uZmEtdHJhbnNnZW5kZXItYWx0OmJlZm9yZXtjb250ZW50Olwiw6/CiMKlXCJ9LmZhLXZlbnVzLWRvdWJsZTpiZWZvcmV7Y29udGVudDpcIsOvwojCplwifS5mYS1tYXJzLWRvdWJsZTpiZWZvcmV7Y29udGVudDpcIsOvwojCp1wifS5mYS12ZW51cy1tYXJzOmJlZm9yZXtjb250ZW50Olwiw6/CiMKoXCJ9LmZhLW1hcnMtc3Ryb2tlOmJlZm9yZXtjb250ZW50Olwiw6/CiMKpXCJ9LmZhLW1hcnMtc3Ryb2tlLXY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqpcIn0uZmEtbWFycy1zdHJva2UtaDpiZWZvcmV7Y29udGVudDpcIsOvwojCq1wifS5mYS1uZXV0ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwqxcIn0uZmEtZ2VuZGVybGVzczpiZWZvcmV7Y29udGVudDpcIsOvwojCrVwifS5mYS1mYWNlYm9vay1vZmZpY2lhbDpiZWZvcmV7Y29udGVudDpcIsOvwojCsFwifS5mYS1waW50ZXJlc3QtcDpiZWZvcmV7Y29udGVudDpcIsOvwojCsVwifS5mYS13aGF0c2FwcDpiZWZvcmV7Y29udGVudDpcIsOvwojCslwifS5mYS1zZXJ2ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrNcIn0uZmEtdXNlci1wbHVzOmJlZm9yZXtjb250ZW50Olwiw6/CiMK0XCJ9LmZhLXVzZXItdGltZXM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrVcIn0uZmEtYmVkOmJlZm9yZSwuZmEtaG90ZWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrZcIn0uZmEtdmlhY29pbjpiZWZvcmV7Y29udGVudDpcIsOvwojCt1wifS5mYS10cmFpbjpiZWZvcmV7Y29udGVudDpcIsOvwojCuFwifS5mYS1zdWJ3YXk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrlcIn0uZmEtbWVkaXVtOmJlZm9yZXtjb250ZW50Olwiw6/CiMK6XCJ9LmZhLXktY29tYmluYXRvcjpiZWZvcmUsLmZhLXljOmJlZm9yZXtjb250ZW50Olwiw6/CiMK7XCJ9LmZhLW9wdGluLW1vbnN0ZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwrxcIn0uZmEtb3BlbmNhcnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KIwr1cIn0uZmEtZXhwZWRpdGVkc3NsOmJlZm9yZXtjb250ZW50Olwiw6/CiMK+XCJ9LmZhLWJhdHRlcnktNDpiZWZvcmUsLmZhLWJhdHRlcnktZnVsbDpiZWZvcmUsLmZhLWJhdHRlcnk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwoBcIn0uZmEtYmF0dGVyeS0zOmJlZm9yZSwuZmEtYmF0dGVyeS10aHJlZS1xdWFydGVyczpiZWZvcmV7Y29udGVudDpcIsOvwonCgVwifS5mYS1iYXR0ZXJ5LTI6YmVmb3JlLC5mYS1iYXR0ZXJ5LWhhbGY6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwoJcIn0uZmEtYmF0dGVyeS0xOmJlZm9yZSwuZmEtYmF0dGVyeS1xdWFydGVyOmJlZm9yZXtjb250ZW50Olwiw6/CicKDXCJ9LmZhLWJhdHRlcnktMDpiZWZvcmUsLmZhLWJhdHRlcnktZW1wdHk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwoRcIn0uZmEtbW91c2UtcG9pbnRlcjpiZWZvcmV7Y29udGVudDpcIsOvwonChVwifS5mYS1pLWN1cnNvcjpiZWZvcmV7Y29udGVudDpcIsOvwonChlwifS5mYS1vYmplY3QtZ3JvdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwodcIn0uZmEtb2JqZWN0LXVuZ3JvdXA6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwohcIn0uZmEtc3RpY2t5LW5vdGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwolcIn0uZmEtc3RpY2t5LW5vdGUtbzpiZWZvcmV7Y29udGVudDpcIsOvwonCilwifS5mYS1jYy1qY2I6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwotcIn0uZmEtY2MtZGluZXJzLWNsdWI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwoxcIn0uZmEtY2xvbmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwo1cIn0uZmEtYmFsYW5jZS1zY2FsZTpiZWZvcmV7Y29udGVudDpcIsOvwonCjlwifS5mYS1ob3VyZ2xhc3MtbzpiZWZvcmV7Y29udGVudDpcIsOvwonCkFwifS5mYS1ob3VyZ2xhc3MtMTpiZWZvcmUsLmZhLWhvdXJnbGFzcy1zdGFydDpiZWZvcmV7Y29udGVudDpcIsOvwonCkVwifS5mYS1ob3VyZ2xhc3MtMjpiZWZvcmUsLmZhLWhvdXJnbGFzcy1oYWxmOmJlZm9yZXtjb250ZW50Olwiw6/CicKSXCJ9LmZhLWhvdXJnbGFzcy0zOmJlZm9yZSwuZmEtaG91cmdsYXNzLWVuZDpiZWZvcmV7Y29udGVudDpcIsOvwonCk1wifS5mYS1ob3VyZ2xhc3M6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwpRcIn0uZmEtaGFuZC1ncmFiLW86YmVmb3JlLC5mYS1oYW5kLXJvY2stbzpiZWZvcmV7Y29udGVudDpcIsOvwonClVwifS5mYS1oYW5kLXBhcGVyLW86YmVmb3JlLC5mYS1oYW5kLXN0b3AtbzpiZWZvcmV7Y29udGVudDpcIsOvwonCllwifS5mYS1oYW5kLXNjaXNzb3JzLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwpdcIn0uZmEtaGFuZC1saXphcmQtbzpiZWZvcmV7Y29udGVudDpcIsOvwonCmFwifS5mYS1oYW5kLXNwb2NrLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwplcIn0uZmEtaGFuZC1wb2ludGVyLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwppcIn0uZmEtaGFuZC1wZWFjZS1vOmJlZm9yZXtjb250ZW50Olwiw6/CicKbXCJ9LmZhLXRyYWRlbWFyazpiZWZvcmV7Y29udGVudDpcIsOvwonCnFwifS5mYS1yZWdpc3RlcmVkOmJlZm9yZXtjb250ZW50Olwiw6/CicKdXCJ9LmZhLWNyZWF0aXZlLWNvbW1vbnM6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwp5cIn0uZmEtZ2c6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqBcIn0uZmEtZ2ctY2lyY2xlOmJlZm9yZXtjb250ZW50Olwiw6/CicKhXCJ9LmZhLXRyaXBhZHZpc29yOmJlZm9yZXtjb250ZW50Olwiw6/CicKiXCJ9LmZhLW9kbm9rbGFzc25pa2k6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqNcIn0uZmEtb2Rub2tsYXNzbmlraS1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqRcIn0uZmEtZ2V0LXBvY2tldDpiZWZvcmV7Y29udGVudDpcIsOvwonCpVwifS5mYS13aWtpcGVkaWEtdzpiZWZvcmV7Y29udGVudDpcIsOvwonCplwifS5mYS1zYWZhcmk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqdcIn0uZmEtY2hyb21lOmJlZm9yZXtjb250ZW50Olwiw6/CicKoXCJ9LmZhLWZpcmVmb3g6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqlcIn0uZmEtb3BlcmE6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqpcIn0uZmEtaW50ZXJuZXQtZXhwbG9yZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwqtcIn0uZmEtdGVsZXZpc2lvbjpiZWZvcmUsLmZhLXR2OmJlZm9yZXtjb250ZW50Olwiw6/CicKsXCJ9LmZhLWNvbnRhbzpiZWZvcmV7Y29udGVudDpcIsOvwonCrVwifS5mYS01MDBweDpiZWZvcmV7Y29udGVudDpcIsOvwonCrlwifS5mYS1hbWF6b246YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrBcIn0uZmEtY2FsZW5kYXItcGx1cy1vOmJlZm9yZXtjb250ZW50Olwiw6/CicKxXCJ9LmZhLWNhbGVuZGFyLW1pbnVzLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrJcIn0uZmEtY2FsZW5kYXItdGltZXMtbzpiZWZvcmV7Y29udGVudDpcIsOvwonCs1wifS5mYS1jYWxlbmRhci1jaGVjay1vOmJlZm9yZXtjb250ZW50Olwiw6/CicK0XCJ9LmZhLWluZHVzdHJ5OmJlZm9yZXtjb250ZW50Olwiw6/CicK1XCJ9LmZhLW1hcC1waW46YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwrZcIn0uZmEtbWFwLXNpZ25zOmJlZm9yZXtjb250ZW50Olwiw6/CicK3XCJ9LmZhLW1hcC1vOmJlZm9yZXtjb250ZW50Olwiw6/CicK4XCJ9LmZhLW1hcDpiZWZvcmV7Y29udGVudDpcIsOvwonCuVwifS5mYS1jb21tZW50aW5nOmJlZm9yZXtjb250ZW50Olwiw6/CicK6XCJ9LmZhLWNvbW1lbnRpbmctbzpiZWZvcmV7Y29udGVudDpcIsOvwonCu1wifS5mYS1ob3V6ejpiZWZvcmV7Y29udGVudDpcIsOvwonCvFwifS5mYS12aW1lbzpiZWZvcmV7Y29udGVudDpcIsOvwonCvVwifS5mYS1ibGFjay10aWU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KJwr5cIn0uZmEtZm9udGljb25zOmJlZm9yZXtjb250ZW50Olwiw6/CisKAXCJ9LmZhLXJlZGRpdC1hbGllbjpiZWZvcmV7Y29udGVudDpcIsOvworCgVwifS5mYS1lZGdlOmJlZm9yZXtjb250ZW50Olwiw6/CisKCXCJ9LmZhLWNyZWRpdC1jYXJkLWFsdDpiZWZvcmV7Y29udGVudDpcIsOvworCg1wifS5mYS1jb2RpZXBpZTpiZWZvcmV7Y29udGVudDpcIsOvworChFwifS5mYS1tb2R4OmJlZm9yZXtjb250ZW50Olwiw6/CisKFXCJ9LmZhLWZvcnQtYXdlc29tZTpiZWZvcmV7Y29udGVudDpcIsOvworChlwifS5mYS11c2I6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwodcIn0uZmEtcHJvZHVjdC1odW50OmJlZm9yZXtjb250ZW50Olwiw6/CisKIXCJ9LmZhLW1peGNsb3VkOmJlZm9yZXtjb250ZW50Olwiw6/CisKJXCJ9LmZhLXNjcmliZDpiZWZvcmV7Y29udGVudDpcIsOvworCilwifS5mYS1wYXVzZS1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwotcIn0uZmEtcGF1c2UtY2lyY2xlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwoxcIn0uZmEtc3RvcC1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwo1cIn0uZmEtc3RvcC1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvworCjlwifS5mYS1zaG9wcGluZy1iYWc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwpBcIn0uZmEtc2hvcHBpbmctYmFza2V0OmJlZm9yZXtjb250ZW50Olwiw6/CisKRXCJ9LmZhLWhhc2h0YWc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwpJcIn0uZmEtYmx1ZXRvb3RoOmJlZm9yZXtjb250ZW50Olwiw6/CisKTXCJ9LmZhLWJsdWV0b290aC1iOmJlZm9yZXtjb250ZW50Olwiw6/CisKUXCJ9LmZhLXBlcmNlbnQ6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwpVcIn0uZmEtZ2l0bGFiOmJlZm9yZXtjb250ZW50Olwiw6/CisKWXCJ9LmZhLXdwYmVnaW5uZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwpdcIn0uZmEtd3Bmb3JtczpiZWZvcmV7Y29udGVudDpcIsOvworCmFwifS5mYS1lbnZpcmE6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwplcIn0uZmEtdW5pdmVyc2FsLWFjY2VzczpiZWZvcmV7Y29udGVudDpcIsOvworCmlwifS5mYS13aGVlbGNoYWlyLWFsdDpiZWZvcmV7Y29udGVudDpcIsOvworCm1wifS5mYS1xdWVzdGlvbi1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvworCnFwifS5mYS1ibGluZDpiZWZvcmV7Y29udGVudDpcIsOvworCnVwifS5mYS1hdWRpby1kZXNjcmlwdGlvbjpiZWZvcmV7Y29udGVudDpcIsOvworCnlwifS5mYS12b2x1bWUtY29udHJvbC1waG9uZTpiZWZvcmV7Y29udGVudDpcIsOvworCoFwifS5mYS1icmFpbGxlOmJlZm9yZXtjb250ZW50Olwiw6/CisKhXCJ9LmZhLWFzc2lzdGl2ZS1saXN0ZW5pbmctc3lzdGVtczpiZWZvcmV7Y29udGVudDpcIsOvworColwifS5mYS1hbWVyaWNhbi1zaWduLWxhbmd1YWdlLWludGVycHJldGluZzpiZWZvcmUsLmZhLWFzbC1pbnRlcnByZXRpbmc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqNcIn0uZmEtZGVhZjpiZWZvcmUsLmZhLWRlYWZuZXNzOmJlZm9yZSwuZmEtaGFyZC1vZi1oZWFyaW5nOmJlZm9yZXtjb250ZW50Olwiw6/CisKkXCJ9LmZhLWdsaWRlOmJlZm9yZXtjb250ZW50Olwiw6/CisKlXCJ9LmZhLWdsaWRlLWc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqZcIn0uZmEtc2lnbi1sYW5ndWFnZTpiZWZvcmUsLmZhLXNpZ25pbmc6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqdcIn0uZmEtbG93LXZpc2lvbjpiZWZvcmV7Y29udGVudDpcIsOvworCqFwifS5mYS12aWFkZW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwqlcIn0uZmEtdmlhZGVvLXNxdWFyZTpiZWZvcmV7Y29udGVudDpcIsOvworCqlwifS5mYS1zbmFwY2hhdDpiZWZvcmV7Y29udGVudDpcIsOvworCq1wifS5mYS1zbmFwY2hhdC1naG9zdDpiZWZvcmV7Y29udGVudDpcIsOvworCrFwifS5mYS1zbmFwY2hhdC1zcXVhcmU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwq1cIn0uZmEtcGllZC1waXBlcjpiZWZvcmV7Y29udGVudDpcIsOvworCrlwifS5mYS1maXJzdC1vcmRlcjpiZWZvcmV7Y29udGVudDpcIsOvworCsFwifS5mYS15b2FzdDpiZWZvcmV7Y29udGVudDpcIsOvworCsVwifS5mYS10aGVtZWlzbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrJcIn0uZmEtZ29vZ2xlLXBsdXMtY2lyY2xlOmJlZm9yZSwuZmEtZ29vZ2xlLXBsdXMtb2ZmaWNpYWw6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrNcIn0uZmEtZmE6YmVmb3JlLC5mYS1mb250LWF3ZXNvbWU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrRcIn0uZmEtaGFuZHNoYWtlLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrVcIn0uZmEtZW52ZWxvcGUtb3BlbjpiZWZvcmV7Y29udGVudDpcIsOvworCtlwifS5mYS1lbnZlbG9wZS1vcGVuLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrdcIn0uZmEtbGlub2RlOmJlZm9yZXtjb250ZW50Olwiw6/CisK4XCJ9LmZhLWFkZHJlc3MtYm9vazpiZWZvcmV7Y29udGVudDpcIsOvworCuVwifS5mYS1hZGRyZXNzLWJvb2stbzpiZWZvcmV7Y29udGVudDpcIsOvworCulwifS5mYS1hZGRyZXNzLWNhcmQ6YmVmb3JlLC5mYS12Y2FyZDpiZWZvcmV7Y29udGVudDpcIsOvworCu1wifS5mYS1hZGRyZXNzLWNhcmQtbzpiZWZvcmUsLmZhLXZjYXJkLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwrxcIn0uZmEtdXNlci1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XCLDr8KKwr1cIn0uZmEtdXNlci1jaXJjbGUtbzpiZWZvcmV7Y29udGVudDpcIsOvworCvlwifS5mYS11c2VyLW86YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwoBcIn0uZmEtaWQtYmFkZ2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwoFcIn0uZmEtZHJpdmVycy1saWNlbnNlOmJlZm9yZSwuZmEtaWQtY2FyZDpiZWZvcmV7Y29udGVudDpcIsOvwovCglwifS5mYS1kcml2ZXJzLWxpY2Vuc2UtbzpiZWZvcmUsLmZhLWlkLWNhcmQtbzpiZWZvcmV7Y29udGVudDpcIsOvwovCg1wifS5mYS1xdW9yYTpiZWZvcmV7Y29udGVudDpcIsOvwovChFwifS5mYS1mcmVlLWNvZGUtY2FtcDpiZWZvcmV7Y29udGVudDpcIsOvwovChVwifS5mYS10ZWxlZ3JhbTpiZWZvcmV7Y29udGVudDpcIsOvwovChlwifS5mYS10aGVybW9tZXRlci00OmJlZm9yZSwuZmEtdGhlcm1vbWV0ZXItZnVsbDpiZWZvcmUsLmZhLXRoZXJtb21ldGVyOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KHXCJ9LmZhLXRoZXJtb21ldGVyLTM6YmVmb3JlLC5mYS10aGVybW9tZXRlci10aHJlZS1xdWFydGVyczpiZWZvcmV7Y29udGVudDpcIsOvwovCiFwifS5mYS10aGVybW9tZXRlci0yOmJlZm9yZSwuZmEtdGhlcm1vbWV0ZXItaGFsZjpiZWZvcmV7Y29udGVudDpcIsOvwovCiVwifS5mYS10aGVybW9tZXRlci0xOmJlZm9yZSwuZmEtdGhlcm1vbWV0ZXItcXVhcnRlcjpiZWZvcmV7Y29udGVudDpcIsOvwovCilwifS5mYS10aGVybW9tZXRlci0wOmJlZm9yZSwuZmEtdGhlcm1vbWV0ZXItZW1wdHk6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwotcIn0uZmEtc2hvd2VyOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KMXCJ9LmZhLWJhdGg6YmVmb3JlLC5mYS1iYXRodHViOmJlZm9yZSwuZmEtczE1OmJlZm9yZXtjb250ZW50Olwiw6/Ci8KNXCJ9LmZhLXBvZGNhc3Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwo5cIn0uZmEtd2luZG93LW1heGltaXplOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KQXCJ9LmZhLXdpbmRvdy1taW5pbWl6ZTpiZWZvcmV7Y29udGVudDpcIsOvwovCkVwifS5mYS13aW5kb3ctcmVzdG9yZTpiZWZvcmV7Y29udGVudDpcIsOvwovCklwifS5mYS10aW1lcy1yZWN0YW5nbGU6YmVmb3JlLC5mYS13aW5kb3ctY2xvc2U6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwpNcIn0uZmEtdGltZXMtcmVjdGFuZ2xlLW86YmVmb3JlLC5mYS13aW5kb3ctY2xvc2UtbzpiZWZvcmV7Y29udGVudDpcIsOvwovClFwifS5mYS1iYW5kY2FtcDpiZWZvcmV7Y29udGVudDpcIsOvwovClVwifS5mYS1ncmF2OmJlZm9yZXtjb250ZW50Olwiw6/Ci8KWXCJ9LmZhLWV0c3k6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwpdcIn0uZmEtaW1kYjpiZWZvcmV7Y29udGVudDpcIsOvwovCmFwifS5mYS1yYXZlbHJ5OmJlZm9yZXtjb250ZW50Olwiw6/Ci8KZXCJ9LmZhLWVlcmNhc3Q6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwppcIn0uZmEtbWljcm9jaGlwOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KbXCJ9LmZhLXNub3dmbGFrZS1vOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KcXCJ9LmZhLXN1cGVycG93ZXJzOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KdXCJ9LmZhLXdwZXhwbG9yZXI6YmVmb3Jle2NvbnRlbnQ6XCLDr8KLwp5cIn0uZmEtbWVldHVwOmJlZm9yZXtjb250ZW50Olwiw6/Ci8KgXCJ9LnNyLW9ubHl7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O2hlaWdodDoxcHg7cGFkZGluZzowO21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMCwwLDAsMCk7Ym9yZGVyOjB9LnNyLW9ubHktZm9jdXNhYmxlOmFjdGl2ZSwuc3Itb25seS1mb2N1c2FibGU6Zm9jdXN7cG9zaXRpb246c3RhdGljO3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87bWFyZ2luOjA7b3ZlcmZsb3c6dmlzaWJsZTtjbGlwOmF1dG99YXtjdXJzb3I6cG9pbnRlcn0jZWRpdG9ye21pbi1oZWlnaHQ6MTUwcHg7b3ZlcmZsb3c6YXV0bzttYXJnaW4tdG9wOjVweDtyZXNpemU6dmVydGljYWw7b3V0bGluZTowfS5hbmd1bGFyLWVkaXRvci10b29sYmFye2ZvbnQ6MTAwIC44cmVtLzE1cHggUm9ib3RvLEFyaWFsLHNhbnMtc2VyaWY7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O3BhZGRpbmc6LjJyZW07Ym9yZGVyOjFweCBzb2xpZCAjZGRkfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldHtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bWFyZ2luLXJpZ2h0OjVweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO21hcmdpbi1ib3R0b206M3B4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9ue2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7cGFkZGluZzouNHJlbTttaW4td2lkdGg6MnJlbTtmbG9hdDpsZWZ0O2JvcmRlcjowIHNvbGlkICNkZGR9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b246Zmlyc3QtY2hpbGR7Ym9yZGVyLXJhZGl1czo1cHggMCAwIDVweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbjpsYXN0LWNoaWxke2JvcmRlci1yYWRpdXM6MCA1cHggNXB4IDB9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b246Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZHtib3JkZXItcmFkaXVzOjVweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbjpob3ZlcntjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7dHJhbnNpdGlvbjouMnMgZWFzZX0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbi5mb2N1cywuYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbjpmb2N1c3tvdXRsaW5lOjB9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b246ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O3BvaW50ZXItZXZlbnRzOm5vbmU7Y3Vyc29yOm5vdC1hbGxvd2VkfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9uOmRpc2FibGVkPi5jb2xvci1sYWJlbHtwb2ludGVyLWV2ZW50czpub25lO2N1cnNvcjpub3QtYWxsb3dlZH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbjpkaXNhYmxlZD4uY29sb3ItbGFiZWwuYmFja2dyb3VuZCwuYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvbjpkaXNhYmxlZD4uY29sb3ItbGFiZWwuZm9yZWdyb3VuZCA6YWZ0ZXJ7YmFja2dyb3VuZDojNTU1fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYW5ndWxhci1lZGl0b3ItYnV0dG9uLmFjdGl2ZXtiYWNrZ3JvdW5kOiNmZmY1Yjl9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5hbmd1bGFyLWVkaXRvci1idXR0b24uYWN0aXZlOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZmE5OH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgc2VsZWN0e2ZvbnQtc2l6ZToxMXB4O3dpZHRoOjkwcHg7dmVydGljYWwtYWxpZ246bWlkZGxlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOi41cHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwKTtib3JkZXItcmFkaXVzOjVweDtvdXRsaW5lOjA7cGFkZGluZzouNHJlbTtjdXJzb3I6cG9pbnRlcn0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5ne3dpZHRoOjkwcHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZzpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7cG9pbnRlci1ldmVudHM6bm9uZTtjdXJzb3I6bm90LWFsbG93ZWR9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZzpob3ZlcntjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7dHJhbnNpdGlvbjouMnMgZWFzZX0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250e3dpZHRoOjkwcHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udDpkaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7cG9pbnRlci1ldmVudHM6bm9uZTtjdXJzb3I6bm90LWFsbG93ZWR9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udDpob3ZlcntjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7dHJhbnNpdGlvbjouMnMgZWFzZX0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemV7d2lkdGg6NTBweH1Ac3VwcG9ydHMgbm90ICgtbW96LWFwcGVhcmFuY2U6bm9uZSl7LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZyBvcHRncm91cHtmb250LXNpemU6MTJweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNGY0ZjQ7cGFkZGluZzo1cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZyBvcHRpb257Ym9yZGVyOjFweCBzb2xpZDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZyAuZGVmYXVsdHtmb250LXNpemU6MTZweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5oMXtmb250LXNpemU6MjRweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5oMntmb250LXNpemU6MjBweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5oM3tmb250LXNpemU6MTZweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5oNHtmb250LXNpemU6MTVweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5oNXtmb250LXNpemU6MTRweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5oNntmb250LXNpemU6MTNweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1oZWFkaW5nIC5kaXYsLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtaGVhZGluZyAucHJle2ZvbnQtc2l6ZToxMnB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQgb3B0Z3JvdXB7Zm9udC1zaXplOjEycHg7YmFja2dyb3VuZC1jb2xvcjojZjRmNGY0O3BhZGRpbmc6NXB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQgb3B0aW9ue2JvcmRlcjoxcHggc29saWQ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZSBvcHRncm91cHtmb250LXNpemU6MTJweDtiYWNrZ3JvdW5kLWNvbG9yOiNmNGY0ZjQ7cGFkZGluZzo1cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udC1zaXplIG9wdGlvbntib3JkZXI6MXB4IHNvbGlkO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemUgLnNpemUxe2ZvbnQtc2l6ZToxMHB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZSAuc2l6ZTJ7Zm9udC1zaXplOjEycHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udC1zaXplIC5zaXplM3tmb250LXNpemU6MTRweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemUgLnNpemU0e2ZvbnQtc2l6ZToxNnB4fS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZSAuc2l6ZTV7Zm9udC1zaXplOjE4cHh9LmFuZ3VsYXItZWRpdG9yLXRvb2xiYXIgLmFuZ3VsYXItZWRpdG9yLXRvb2xiYXItc2V0IC5zZWxlY3QtZm9udC1zaXplIC5zaXplNntmb250LXNpemU6MjBweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemUgLnNpemU3e2ZvbnQtc2l6ZToyNHB4fX0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLnNlbGVjdC1mb250LXNpemU6ZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O3BvaW50ZXItZXZlbnRzOm5vbmU7Y3Vyc29yOm5vdC1hbGxvd2VkfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuc2VsZWN0LWZvbnQtc2l6ZTpob3ZlcntjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7dHJhbnNpdGlvbjouMnMgZWFzZX0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmNvbG9yLWxhYmVse3Bvc2l0aW9uOnJlbGF0aXZlO2N1cnNvcjpwb2ludGVyfS5hbmd1bGFyLWVkaXRvci10b29sYmFyIC5hbmd1bGFyLWVkaXRvci10b29sYmFyLXNldCAuYmFja2dyb3VuZHtmb250LXNpemU6c21hbGxlcjtiYWNrZ3JvdW5kOiMxYjFiMWI7Y29sb3I6I2ZmZjtwYWRkaW5nOjNweH0uYW5ndWxhci1lZGl0b3ItdG9vbGJhciAuYW5ndWxhci1lZGl0b3ItdG9vbGJhci1zZXQgLmZvcmVncm91bmQgOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6XCJcIjtsZWZ0Oi0xcHg7dG9wOmF1dG87Ym90dG9tOi0zcHg7cmlnaHQ6YXV0bzt3aWR0aDoxNXB4O2hlaWdodDoycHg7ei1pbmRleDowO2JhY2tncm91bmQ6IzFiMWIxYn0uYW5ndWxhci1lZGl0b3J7cG9zaXRpb246cmVsYXRpdmV9LmFuZ3VsYXItZWRpdG9yIDo6bmctZGVlcCBbY29udGVudGVkaXRhYmxlPXRydWVdOmVtcHR5OmJlZm9yZXtjb250ZW50OmF0dHIocGxhY2Vob2xkZXIpO2Rpc3BsYXk6YmxvY2s7Y29sb3I6Izg2OGU5NjtvcGFjaXR5OjF9LmFuZ3VsYXItZWRpdG9yIC5hbmd1bGFyLWVkaXRvci13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlfS5hbmd1bGFyLWVkaXRvciAuYW5ndWxhci1lZGl0b3Itd3JhcHBlciAuYW5ndWxhci1lZGl0b3ItdGV4dGFyZWF7bWluLWhlaWdodDo1cmVtO3BhZGRpbmc6LjVyZW0gLjhyZW0gMXJlbTtib3JkZXI6MXB4IHNvbGlkICNkZGQ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmF1dG87ei1pbmRleDoyO3Bvc2l0aW9uOnJlbGF0aXZlfS5hbmd1bGFyLWVkaXRvciAuYW5ndWxhci1lZGl0b3Itd3JhcHBlciAuYW5ndWxhci1lZGl0b3ItdGV4dGFyZWEuZm9jdXMsLmFuZ3VsYXItZWRpdG9yIC5hbmd1bGFyLWVkaXRvci13cmFwcGVyIC5hbmd1bGFyLWVkaXRvci10ZXh0YXJlYTpmb2N1c3tvdXRsaW5lOjB9LmFuZ3VsYXItZWRpdG9yIC5hbmd1bGFyLWVkaXRvci13cmFwcGVyIC5hbmd1bGFyLWVkaXRvci10ZXh0YXJlYSA6Om5nLWRlZXAgYmxvY2txdW90ZXttYXJnaW4tbGVmdDoxcmVtO2JvcmRlci1sZWZ0Oi4yZW0gc29saWQgI2RmZTJlNTtwYWRkaW5nLWxlZnQ6LjVyZW19LmFuZ3VsYXItZWRpdG9yIC5hbmd1bGFyLWVkaXRvci13cmFwcGVyIDo6bmctZGVlcCBwe21hcmdpbi1ib3R0b206MH0uYW5ndWxhci1lZGl0b3IgLmFuZ3VsYXItZWRpdG9yLXdyYXBwZXIgLmFuZ3VsYXItZWRpdG9yLXBsYWNlaG9sZGVye2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtwYWRkaW5nOi41cmVtIC44cmVtIDFyZW0gLjlyZW07ei1pbmRleDoxO2NvbG9yOiM2Yzc1N2Q7b3BhY2l0eTouNzV9LmFuZ3VsYXItZWRpdG9yIC5hbmd1bGFyLWVkaXRvci13cmFwcGVyLnNob3ctcGxhY2Vob2xkZXIgLmFuZ3VsYXItZWRpdG9yLXBsYWNlaG9sZGVye2Rpc3BsYXk6YmxvY2t9LmFuZ3VsYXItZWRpdG9yIC5hbmd1bGFyLWVkaXRvci13cmFwcGVyLmRpc2FibGVke2N1cnNvcjpub3QtYWxsb3dlZDtvcGFjaXR5Oi41O3BvaW50ZXItZXZlbnRzOm5vbmV9YF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBBbmd1bGFyRWRpdG9yQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblxyXG4gIHByaXZhdGUgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xyXG5cclxuICBwbGFjZWhvbGRlcjogYm9vbGVhbjtcclxuXHJcbiAgbW9kZVZpc3VhbCA9IHRydWU7XHJcbiAgc2hvd1BsYWNlaG9sZGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWQgPSAnJztcclxuICBASW5wdXQoKSBjb25maWc6IEFuZ3VsYXJFZGl0b3JDb25maWcgPSBhbmd1bGFyRWRpdG9yQ29uZmlnO1xyXG5cclxuICBAT3V0cHV0KCkgaHRtbDtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZWRpdG9yJykgdGV4dEFyZWE6IGFueTtcclxuICBAVmlld0NoaWxkKCdlZGl0b3JXcmFwcGVyJykgZWRpdG9yV3JhcHBlcjogYW55O1xyXG4gIEBWaWV3Q2hpbGQoJ2VkaXRvclRvb2xiYXInKSBlZGl0b3JUb29sYmFyOiBBbmd1bGFyRWRpdG9yVG9vbGJhckNvbXBvbmVudDtcclxuXHJcbiAgQE91dHB1dCgpIHZpZXdNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVkaXRvclNlcnZpY2U6IEFuZ3VsYXJFZGl0b3JTZXJ2aWNlLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55KSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZWRpdG9yVG9vbGJhci5pZCA9IHRoaXMuaWQ7XHJcbiAgICB0aGlzLmVkaXRvclRvb2xiYXIuY3VzdG9tQ2xhc3NlcyA9IHRoaXMuY29uZmlnLmN1c3RvbUNsYXNzZXM7XHJcbiAgICB0aGlzLmVkaXRvclNlcnZpY2UudXBsb2FkVXJsID0gdGhpcy5jb25maWcudXBsb2FkVXJsO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLnNob3dUb29sYmFyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5lZGl0b3JUb29sYmFyLnNob3dUb29sYmFyID0gdGhpcy5jb25maWcuc2hvd1Rvb2xiYXI7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb25maWcuZGVmYXVsdFBhcmFncmFwaFNlcGFyYXRvcikge1xyXG4gICAgICB0aGlzLmVkaXRvclNlcnZpY2Uuc2V0RGVmYXVsdFBhcmFncmFwaFNlcGFyYXRvcih0aGlzLmNvbmZpZy5kZWZhdWx0UGFyYWdyYXBoU2VwYXJhdG9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5kZWZhdWx0Rm9udE5hbWUpIHtcclxuICAgICAgdGhpcy5lZGl0b3JUb29sYmFyLmZvbnROYW1lID0gdGhpcy5jb25maWcuZGVmYXVsdEZvbnROYW1lO1xyXG4gICAgICB0aGlzLm9uRWRpdG9yRm9jdXMoKTtcclxuICAgICAgdGhpcy5lZGl0b3JTZXJ2aWNlLnNldEZvbnROYW1lKHRoaXMuY29uZmlnLmRlZmF1bHRGb250TmFtZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb25maWcuZGVmYXVsdEZvbnRTaXplKSB7XHJcbiAgICAgIHRoaXMuZWRpdG9yVG9vbGJhci5mb250U2l6ZSA9IHRoaXMuY29uZmlnLmRlZmF1bHRGb250U2l6ZTtcclxuICAgICAgdGhpcy5vbkVkaXRvckZvY3VzKCk7XHJcbiAgICAgIHRoaXMuZWRpdG9yU2VydmljZS5zZXRGb250U2l6ZSh0aGlzLmNvbmZpZy5kZWZhdWx0Rm9udFNpemUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXhlY3V0ZWQgY29tbWFuZCBmcm9tIGVkaXRvciBoZWFkZXIgYnV0dG9uc1xyXG4gICAqIEBwYXJhbSBjb21tYW5kIHN0cmluZyBmcm9tIHRyaWdnZXJDb21tYW5kXHJcbiAgICovXHJcbiAgZXhlY3V0ZUNvbW1hbmQoY29tbWFuZDogc3RyaW5nKSB7XHJcbiAgICBpZiAoY29tbWFuZCA9PT0gJ3RvZ2dsZUVkaXRvck1vZGUnKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlRWRpdG9yTW9kZSh0aGlzLm1vZGVWaXN1YWwpO1xyXG4gICAgfSBlbHNlIGlmIChjb21tYW5kICE9PSAnJykge1xyXG4gICAgICB0aGlzLmVkaXRvclNlcnZpY2UuZXhlY3V0ZUNvbW1hbmQoY29tbWFuZCk7XHJcbiAgICAgIHRoaXMuZXhlYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub25FZGl0b3JGb2N1cygpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgb25UZXh0QXJlYUJsdXIoKSB7XHJcbiAgICAvKipcclxuICAgICAqIHNhdmUgc2VsZWN0aW9uIGlmIGZvY3Vzc2VkIG91dFxyXG4gICAgICovXHJcbiAgICB0aGlzLmVkaXRvclNlcnZpY2Uuc2F2ZVNlbGVjdGlvbigpO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5vblRvdWNoZWQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICBmb2N1cyB0aGUgdGV4dCBhcmVhIHdoZW4gdGhlIGVkaXRvciBpcyBmb2N1c3NlZFxyXG4gICAqL1xyXG4gIG9uRWRpdG9yRm9jdXMoKSB7XHJcbiAgICB0aGlzLnRleHRBcmVhLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4ZWN1dGVkIGZyb20gdGhlIGNvbnRlbnRlZGl0YWJsZSBzZWN0aW9uIHdoaWxlIHRoZSBpbnB1dCBwcm9wZXJ0eSBjaGFuZ2VzXHJcbiAgICogQHBhcmFtIGh0bWwgaHRtbCBzdHJpbmcgZnJvbSBjb250ZW50ZWRpdGFibGVcclxuICAgKi9cclxuICBvbkNvbnRlbnRDaGFuZ2UoaHRtbDogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UoaHRtbCk7XHJcbiAgICAgIGlmICgoIWh0bWwgfHwgaHRtbCA9PT0gJzxicj4nIHx8IGh0bWwgPT09ICcnKSAhPT0gdGhpcy5zaG93UGxhY2Vob2xkZXIpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZVBsYWNlaG9sZGVyKHRoaXMuc2hvd1BsYWNlaG9sZGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWRcclxuICAgKiB3aGVuIHRoZSBjb250cm9sIHJlY2VpdmVzIGEgY2hhbmdlIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZuIGEgZnVuY3Rpb25cclxuICAgKi9cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkXHJcbiAgICogd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIHRvdWNoIGV2ZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZuIGEgZnVuY3Rpb25cclxuICAgKi9cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV3JpdGUgYSBuZXcgdmFsdWUgdG8gdGhlIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdmFsdWUgdmFsdWUgdG8gYmUgZXhlY3V0ZWQgd2hlbiB0aGVyZSBpcyBhIGNoYW5nZSBpbiBjb250ZW50ZWRpdGFibGVcclxuICAgKi9cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gJzxicj4nIHx8IHZhbHVlID09PSAnJykgIT09IHRoaXMuc2hvd1BsYWNlaG9sZGVyKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlUGxhY2Vob2xkZXIodGhpcy5zaG93UGxhY2Vob2xkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gJzxicj4nKSB7XHJcbiAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlZnJlc2hWaWV3KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlZnJlc2ggdmlldy9IVE1MIG9mIHRoZSBlZGl0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSB2YWx1ZSBodG1sIHN0cmluZyBmcm9tIHRoZSBlZGl0b3JcclxuICAgKi9cclxuICByZWZyZXNoVmlldyh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBub3JtYWxpemVkVmFsdWUgPSB2YWx1ZSA9PT0gbnVsbCA/ICcnIDogdmFsdWU7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLnRleHRBcmVhLm5hdGl2ZUVsZW1lbnQsICdpbm5lckhUTUwnLCBub3JtYWxpemVkVmFsdWUpO1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHRvZ2dsZXMgcGxhY2Vob2xkZXIgYmFzZWQgb24gaW5wdXQgc3RyaW5nXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdmFsdWUgQSBIVE1MIHN0cmluZyBmcm9tIHRoZSBlZGl0b3JcclxuICAgKi9cclxuICB0b2dnbGVQbGFjZWhvbGRlcih2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVkaXRvcldyYXBwZXIubmF0aXZlRWxlbWVudCwgJ3Nob3ctcGxhY2Vob2xkZXInKTtcclxuICAgICAgdGhpcy5zaG93UGxhY2Vob2xkZXIgPSB0cnVlO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWRpdG9yV3JhcHBlci5uYXRpdmVFbGVtZW50LCAnc2hvdy1wbGFjZWhvbGRlcicpO1xyXG4gICAgICB0aGlzLnNob3dQbGFjZWhvbGRlciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW1wbGVtZW50cyBkaXNhYmxlZCBzdGF0ZSBmb3IgdGhpcyBlbGVtZW50XHJcbiAgICpcclxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZFxyXG4gICAqL1xyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgZGl2ID0gdGhpcy50ZXh0QXJlYS5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgYWN0aW9uID0gaXNEaXNhYmxlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnO1xyXG4gICAgdGhpcy5fcmVuZGVyZXJbYWN0aW9uXShkaXYsICdkaXNhYmxlZCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdG9nZ2xlcyBlZGl0b3IgbW9kZSBiYXNlZCBvbiBiVG9Tb3VyY2UgYm9vbFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGJUb1NvdXJjZSBBIGJvb2xlYW4gdmFsdWUgZnJvbSB0aGUgZWRpdG9yXHJcbiAgICovXHJcbiAgdG9nZ2xlRWRpdG9yTW9kZShiVG9Tb3VyY2U6IGJvb2xlYW4pIHtcclxuICAgIGxldCBvQ29udGVudDogYW55O1xyXG4gICAgY29uc3QgZWRpdGFibGVFbGVtZW50ID0gdGhpcy50ZXh0QXJlYS5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIGlmIChiVG9Tb3VyY2UpIHtcclxuICAgICAgb0NvbnRlbnQgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlZGl0YWJsZUVsZW1lbnQuaW5uZXJIVE1MKTtcclxuICAgICAgZWRpdGFibGVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgY29uc3Qgb1ByZSA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xyXG4gICAgICBvUHJlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwibWFyZ2luOiAwOyBvdXRsaW5lOiBub25lO1wiKTtcclxuICAgICAgY29uc3Qgb0NvZGUgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb2RlJyk7XHJcbiAgICAgIGVkaXRhYmxlRWxlbWVudC5jb250ZW50RWRpdGFibGUgPSBmYWxzZTtcclxuICAgICAgb0NvZGUuaWQgPSBcInNvdXJjZVRleHRcIjtcclxuICAgICAgb0NvZGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IHdvcmQtYnJlYWs6IGtlZXAtYWxsOyBtYXJnaW46IDA7IG91dGxpbmU6IG5vbmU7IGJhY2tncm91bmQtY29sb3I6ICNmZmY1Yjk7XCIpO1xyXG4gICAgICBvQ29kZS5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XHJcbiAgICAgIG9Db2RlLmFwcGVuZENoaWxkKG9Db250ZW50KTtcclxuICAgICAgb1ByZS5hcHBlbmRDaGlsZChvQ29kZSk7XHJcbiAgICAgIGVkaXRhYmxlRWxlbWVudC5hcHBlbmRDaGlsZChvUHJlKTtcclxuXHJcbiAgICAgIHRoaXMuX2RvY3VtZW50LmV4ZWNDb21tYW5kKFwiZGVmYXVsdFBhcmFncmFwaFNlcGFyYXRvclwiLCBmYWxzZSwgXCJkaXZcIik7XHJcblxyXG4gICAgICB0aGlzLm1vZGVWaXN1YWwgPSBmYWxzZTtcclxuICAgICAgdGhpcy52aWV3TW9kZS5lbWl0KGZhbHNlKTtcclxuICAgICAgb0NvZGUuZm9jdXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLl9kb2N1bWVudC5hbGwpIHtcclxuICAgICAgICBlZGl0YWJsZUVsZW1lbnQuaW5uZXJIVE1MID0gZWRpdGFibGVFbGVtZW50LmlubmVyVGV4dDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvQ29udGVudCA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgb0NvbnRlbnQuc2VsZWN0Tm9kZUNvbnRlbnRzKGVkaXRhYmxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgICAgICBlZGl0YWJsZUVsZW1lbnQuaW5uZXJIVE1MID0gb0NvbnRlbnQudG9TdHJpbmcoKTtcclxuICAgICAgfVxyXG4gICAgICBlZGl0YWJsZUVsZW1lbnQuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5tb2RlVmlzdWFsID0gdHJ1ZTtcclxuICAgICAgdGhpcy52aWV3TW9kZS5lbWl0KHRydWUpO1xyXG4gICAgICB0aGlzLm9uQ29udGVudENoYW5nZShlZGl0YWJsZUVsZW1lbnQuaW5uZXJIVE1MKTtcclxuICAgICAgZWRpdGFibGVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVkaXRvclRvb2xiYXIuc2V0RWRpdG9yTW9kZSghdGhpcy5tb2RlVmlzdWFsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHRvZ2dsZXMgZWRpdG9yIGJ1dHRvbnMgd2hlbiBjdXJzb3IgbW92ZWQgb3IgcG9zaXRpb25pbmdcclxuICAgKlxyXG4gICAqIFNlbmQgYSBub2RlIGFycmF5IGZyb20gdGhlIGNvbnRlbnRFZGl0YWJsZSBvZiB0aGUgZWRpdG9yXHJcbiAgICovXHJcbiAgZXhlYygpIHtcclxuICAgIHRoaXMuZWRpdG9yVG9vbGJhci50cmlnZ2VyQnV0dG9ucygpO1xyXG5cclxuICAgIGxldCB1c2VyU2VsZWN0aW9uO1xyXG4gICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgICAgdXNlclNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYSA9IHVzZXJTZWxlY3Rpb24uZm9jdXNOb2RlO1xyXG4gICAgY29uc3QgZWxzID0gW107XHJcbiAgICB3aGlsZSAoYSAmJiBhLmlkICE9PSAnZWRpdG9yJykge1xyXG4gICAgICBlbHMudW5zaGlmdChhKTtcclxuICAgICAgYSA9IGEucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHRoaXMuZWRpdG9yVG9vbGJhci50cmlnZ2VyQmxvY2tzKGVscyk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBbmd1bGFyRWRpdG9yQ29tcG9uZW50fSBmcm9tICcuL2FuZ3VsYXItZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QW5ndWxhckVkaXRvclRvb2xiYXJDb21wb25lbnR9IGZyb20gXCIuL2FuZ3VsYXItZWRpdG9yLXRvb2xiYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtBbmd1bGFyRWRpdG9yQ29tcG9uZW50LCBBbmd1bGFyRWRpdG9yVG9vbGJhckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0FuZ3VsYXJFZGl0b3JDb21wb25lbnQsIEFuZ3VsYXJFZGl0b3JUb29sYmFyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhckVkaXRvck1vZHVsZSB7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0lBbUJFLDhCQUFvQixJQUFnQixFQUE0QixTQUFjO1FBQTFELFNBQUksR0FBSixJQUFJLENBQVk7UUFBNEIsY0FBUyxHQUFULFNBQVMsQ0FBSztLQUM3RTs7Ozs7Ozs7OztJQU1ELDZDQUFjOzs7OztJQUFkLFVBQWUsT0FBZTtRQUM1QixJQUFJLE9BQU8sS0FBSyxJQUFJLElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBSyxJQUFJLElBQUksT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBSyxHQUFHLElBQUksT0FBTyxLQUFLLEtBQUssRUFBRTtZQUNoSyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzNEO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxPQUFPO0tBQ1I7Ozs7Ozs7Ozs7SUFNRCx5Q0FBVTs7Ozs7SUFBVixVQUFXLEdBQVc7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0RDthQUFNOztZQUNMLElBQU0sTUFBTSxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7WUFDckYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QjtLQUNGOzs7Ozs7Ozs7Ozs7OztJQVFELDBDQUFXOzs7Ozs7O0lBQVgsVUFBWSxLQUFhLEVBQUUsS0FBYTs7UUFDdEMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDekMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLEtBQUssS0FBSyxXQUFXLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdkQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN6RDtTQUNGO1FBRUQsT0FBTztLQUNSOzs7Ozs7Ozs7O0lBTUQsMENBQVc7Ozs7O0lBQVgsVUFBWSxRQUFnQjtRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ3pEOzs7Ozs7Ozs7O0lBTUQsMENBQVc7Ozs7O0lBQVgsVUFBWSxRQUFnQjtRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ3pEOzs7Ozs7SUFNTyx5Q0FBVTs7Ozs7Y0FBQyxJQUFZOztRQUU3QixJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsT0FBTzs7Ozs7Ozs7O0lBTVQsNENBQWE7Ozs7SUFBYjtRQUNFLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTs7WUFDdkIsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2xDLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3BDO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQ3BFLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzlDO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM1QjtLQUNGOzs7Ozs7Ozs7Ozs7SUFPRCwrQ0FBZ0I7Ozs7OztJQUFoQjtRQUNFLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7O2dCQUN2QixJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ2xDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksb0NBQW9DOztnQkFFeEUsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7Ozs7O0lBR08sNkNBQWM7Ozs7OztRQUVwQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRW5ELElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxJQUFJLENBQUM7Ozs7Ozs7Ozs7O0lBT2QsMENBQVc7Ozs7O0lBQVgsVUFBWSxJQUFVOztRQUVwQixJQUFNLFVBQVUsR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBRTVDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBaUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUU7WUFDaEUsY0FBYyxFQUFFLElBQUk7WUFDcEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7Ozs7SUFNRCwwQ0FBVzs7Ozs7SUFBWCxVQUFZLFFBQWdCO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDNUQ7Ozs7O0lBRUQsMkRBQTRCOzs7O0lBQTVCLFVBQTZCLFNBQWlCO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLDJCQUEyQixFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztLQUMzRTs7Ozs7SUFFRCxnREFBaUI7Ozs7SUFBakIsVUFBa0IsV0FBd0I7O1FBQ3hDLElBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7O1FBQzNELElBQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsVUFBVSxHQUFHLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDaEgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6Qjs7Z0JBMUtGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWE8sVUFBVTtnREFrQnVCLE1BQU0sU0FBQyxRQUFROzs7K0JBbkJ4RDs7Ozs7Ozs7QUN3QkEsSUFBYSxtQkFBbUIsR0FBd0I7SUFDdEQsUUFBUSxFQUFFLElBQUk7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixNQUFNLEVBQUUsTUFBTTtJQUNkLFNBQVMsRUFBRSxHQUFHO0lBQ2QsS0FBSyxFQUFFLE1BQU07SUFDYixRQUFRLEVBQUUsR0FBRztJQUNiLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLFdBQVcsRUFBRSxvQkFBb0I7SUFDakMseUJBQXlCLEVBQUUsRUFBRTtJQUM3QixlQUFlLEVBQUUsRUFBRTtJQUNuQixlQUFlLEVBQUUsRUFBRTtJQUNuQixTQUFTLEVBQUUsVUFBVTtDQUN0QixDQUFDOzs7Ozs7QUN2Q0Y7SUEwTEUsdUNBQW9CLFNBQW9CLEVBQ3BCLGVBQStELFNBQWM7UUFEN0UsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixrQkFBYSxHQUFiLGFBQWE7UUFBa0QsY0FBUyxHQUFULFNBQVMsQ0FBSztrQkF4QjVGLEVBQUU7d0JBQ0ksS0FBSzsyQkFDRixJQUFJO3FCQUVWLFNBQVM7d0JBQ04sT0FBTzt3QkFDUCxHQUFHOzZCQUVFLENBQUMsQ0FBQztzQkFHVDtZQUNQLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLENBQUMsRUFBRSxNQUFNO1NBQ1Y7c0JBRVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQzt1QkFFdEQsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZTtZQUNuSCxjQUFjLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxDQUFDO3VCQUUvRCxJQUFJLFlBQVksRUFBVTtLQUluRTs7Ozs7Ozs7OztJQU1ELHNEQUFjOzs7OztJQUFkLFVBQWUsT0FBZTtRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixPQUFPO0tBQ1I7Ozs7Ozs7O0lBS0Qsc0RBQWM7Ozs7SUFBZDtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDOztZQUNwQixJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUNuRCxJQUFNLFdBQVcsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyRSxJQUFJLE1BQU0sRUFBRTtnQkFDVixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDaEQ7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ25EO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7OztJQUtELHFEQUFhOzs7OztJQUFiLFVBQWMsS0FBYTtRQUEzQixpQkE2Q0M7UUE1Q0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTztTQUNSOztRQUNELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7O1lBQ25CLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsR0FBQSxDQUFDLENBQUM7WUFDL0MsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUM3QyxJQUFJLEtBQUssS0FBSyxLQUFLLEVBQUU7b0JBQ25CLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDekMsS0FBSyxHQUFHLElBQUksQ0FBQztpQkFDZDthQUNGO2lCQUFNLElBQUksS0FBSyxLQUFLLEtBQUssRUFBRTtnQkFDMUIsS0FBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7YUFDeEI7U0FDRixDQUFDLENBQUM7UUFFSCxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLEtBQUs7O2dCQUNsQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLFlBQVksT0FBTyxFQUFFO3dCQUN4QixPQUFPLENBQUMsQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztxQkFDaEM7aUJBQ0YsQ0FBQyxDQUFDO2dCQUNILElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtvQkFDdEIsSUFBSSxLQUFLLEtBQUssS0FBSyxFQUFFO3dCQUNuQixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzt3QkFDM0IsS0FBSyxHQUFHLElBQUksQ0FBQztxQkFDZDtpQkFDRjtxQkFBTSxJQUFJLEtBQUssS0FBSyxLQUFLLEVBQUU7b0JBQzFCLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3pCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDOztZQUM1QixJQUFNLFdBQVcsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBQ2xGLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsR0FBQSxDQUFDLENBQUM7WUFDL0MsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUM3QyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDaEQ7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ25EO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7O0lBS0QsaURBQVM7Ozs7SUFBVDs7UUFDRSxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbkQsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLEVBQUUsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO0tBQ0Y7Ozs7Ozs7O0lBR0QsbURBQVc7Ozs7OztJQUFYLFVBQVksS0FBYSxFQUFFLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZCOzs7Ozs7Ozs7O0lBTUQsbURBQVc7Ozs7O0lBQVgsVUFBWSxRQUFnQjtRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN2Qjs7Ozs7Ozs7Ozs7SUFNRCxtREFBVzs7Ozs7O0lBQVgsVUFBWSxRQUFnQjtRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN2Qjs7Ozs7Ozs7OztJQU1ELHFEQUFhOzs7OztJQUFiLFVBQWMsQ0FBVTs7UUFDdEIsSUFBTSxzQkFBc0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDM0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLHNCQUFzQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7S0FDbkI7Ozs7Ozs7OztJQUtELHFEQUFhOzs7OztJQUFiLFVBQWMsS0FBSztRQUFuQixpQkFPQzs7UUFOQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQzlDLElBQUksQ0FBQyxZQUFZLFlBQVksRUFBRTtnQkFDN0IsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqRDtTQUNGLENBQUMsQ0FBQztLQUNKOzs7OztJQUVELHNEQUFjOzs7O0lBQWQsVUFBZSxPQUFlO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ25FOztnQkFuVUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSwwdFNBbUpYO29CQUNDLE1BQU0sRUFBRSxDQUFDLDhzckNBR3k0aEMsQ0FBQztpQkFDcDVoQzs7OztnQkFoS2dELFNBQVM7Z0JBQ2xELG9CQUFvQjtnREEwTGdDLE1BQU0sU0FBQyxRQUFROzs7MEJBSHhFLE1BQU07O3dDQXhMVDs7Ozs7OztBQ0FBO0lBa0VFLGdDQUFvQixTQUFvQixFQUFVLGFBQW1DLEVBQTRCLFNBQWM7UUFBM0csY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUE0QixjQUFTLEdBQVQsU0FBUyxDQUFLOzBCQWJsSCxJQUFJOytCQUNDLEtBQUs7a0JBQ1QsRUFBRTtzQkFDdUIsbUJBQW1CO3dCQVFyQyxJQUFJLFlBQVksRUFBVztLQUcvQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDN0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDckQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7U0FDMUQ7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUU7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDeEY7S0FDRjs7OztJQUVELG1EQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUMxRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUM3RDtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDMUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDN0Q7S0FDRjs7Ozs7Ozs7OztJQU1ELCtDQUFjOzs7OztJQUFkLFVBQWUsT0FBZTtRQUM1QixJQUFJLE9BQU8sS0FBSyxrQkFBa0IsRUFBRTtZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hDO2FBQU0sSUFBSSxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO1FBRUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLE9BQU87S0FDUjs7OztJQUVELCtDQUFjOzs7SUFBZDs7OztRQUlFLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFbkMsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtRQUNELE9BQU87S0FDUjs7Ozs7Ozs7SUFLRCw4Q0FBYTs7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDckM7Ozs7Ozs7Ozs7SUFNRCxnREFBZTs7Ozs7SUFBZixVQUFnQixJQUFZO1FBRTFCLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFVBQVUsRUFBRTtZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDdEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUM5QztTQUNGO1FBQ0QsT0FBTztLQUNSOzs7Ozs7Ozs7Ozs7OztJQVFELGlEQUFnQjs7Ozs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3BCOzs7Ozs7Ozs7Ozs7OztJQVFELGtEQUFpQjs7Ozs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCOzs7Ozs7Ozs7Ozs7SUFPRCwyQ0FBVTs7Ozs7O0lBQVYsVUFBVyxLQUFVO1FBRW5CLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO1lBQzdFLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7Ozs7Ozs7Ozs7OztJQU9ELDRDQUFXOzs7Ozs7SUFBWCxVQUFZLEtBQWE7O1FBQ3ZCLElBQU0sZUFBZSxHQUFHLEtBQUssS0FBSyxJQUFJLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFdEYsT0FBTztLQUNSOzs7Ozs7Ozs7Ozs7SUFPRCxrREFBaUI7Ozs7OztJQUFqQixVQUFrQixLQUFjO1FBQzlCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBRTdCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2pGLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQzlCO1FBQ0QsT0FBTztLQUNSOzs7Ozs7Ozs7Ozs7SUFPRCxpREFBZ0I7Ozs7OztJQUFoQixVQUFpQixVQUFtQjs7UUFDbEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7O1FBQ3hDLElBQU0sTUFBTSxHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsYUFBYSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ3pDOzs7Ozs7Ozs7Ozs7SUFPRCxpREFBZ0I7Ozs7OztJQUFoQixVQUFpQixTQUFrQjs7UUFDakMsSUFBSSxRQUFRLENBQU07O1FBQ2xCLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBRXBELElBQUksU0FBUyxFQUFFO1lBQ2IsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwRSxlQUFlLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7WUFFL0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsMkJBQTJCLENBQUMsQ0FBQzs7WUFDeEQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsZUFBZSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDeEMsS0FBSyxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUM7WUFDeEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsbUdBQW1HLENBQUMsQ0FBQztZQUNqSSxLQUFLLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztZQUMvQixLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQywyQkFBMkIsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFdEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RCLGVBQWUsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQzthQUN2RDtpQkFBTTtnQkFDTCxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDeEMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEQsZUFBZSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakQ7WUFDRCxlQUFlLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNwRDs7Ozs7Ozs7Ozs7O0lBT0QscUNBQUk7Ozs7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7UUFFcEMsSUFBSSxhQUFhLENBQUM7UUFDbEIsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7O1FBRUQsSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQzs7UUFDaEMsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQUU7WUFDN0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdkM7O2dCQTlRRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDAxQkFhWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQywwMnRDQUdxaWtDLENBQUM7b0JBQy9pa0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHNCQUFzQixHQUFBLENBQUM7NEJBQ3JELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzs7O2dCQXBDQyxTQUFTO2dCQU1ILG9CQUFvQjtnREFtRDhELE1BQU0sU0FBQyxRQUFROzs7cUJBWHRHLEtBQUs7eUJBQ0wsS0FBSzt1QkFFTCxNQUFNOzJCQUVOLFNBQVMsU0FBQyxRQUFRO2dDQUNsQixTQUFTLFNBQUMsZUFBZTtnQ0FDekIsU0FBUyxTQUFDLGVBQWU7MkJBRXpCLE1BQU07O2lDQWhFVDs7Ozs7OztBQ0FBOzs7O2dCQU1DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUI7cUJBQy9DO29CQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLDZCQUE2QixDQUFDO29CQUNyRSxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSw2QkFBNkIsQ0FBQztpQkFDakU7OzhCQVpEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./src/app/content/pages/components/agregaroferta/agregaroferta.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/content/pages/components/agregaroferta/agregaroferta.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row  m-subheader\" style=\"background: rgb(250,249,247) !important;\r\n    padding: 20px !important;\r\ntext-align: left !important;\r\nborder-bottom: solid 1px lightgray;    display: block;\">\r\n\t\r\n\r\n\t<i (click)='goBack()' style=\"font-size: 25px;\r\n    color: lightgray;\r\n    padding-left: 10px;\" class=\"la la-angle-left\"></i>\r\n\t<div class=\"\" style=\"display: inline-block;font-size: 30px;font-weight: 300;padding-left: 15px;\">Agregar Oferta</div>\r\n\r\n\r\n\r\n\t<button  class=\"btn btn-success\" style=\"    margin-top: 3px;\r\n    float: right;\r\n    margin-right: 10px;\" >Guardar</button>\r\n\r\n\t<button  class=\"btn btn-outline-success\" style=\"    margin-top: 3px;\r\n    float: right;\r\n    margin-right: 10px;\" (click)='goBack()' >Cancelar</button>\r\n\r\n\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n\r\n\t<div class=\"col-xl-6\" style=\"    border-right: solid 1px lightgray;\" >\r\n\r\n\t\t<div style=\"padding: 40px 60px; \">\r\n\t\t\t<div class=\"conteinInput\">\r\n\t\t\t\t<label class='labelBy'>Contrato de Oferta</label>\r\n\r\n\t\t\t\t<p class=' w100'>\r\n\t\t\t\t\tLas ofertas tienen una vigencia de 7 dias y un costo de $1 por cada servicio en oferta. Se pueden obtener hasta 10 a la vez. \r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<label class='labelBy'>Las ofertas tienen una posicion especial en el app</label>\r\n\t\t\t<img src=\"assets/app/media/img/demo1.png\">\r\n\t\t\t<hr>\r\n\r\n\r\n\t\t\t<div class=\"conteinInput\" style=\"margin-top: 20px\">\r\n\t\t\t\t<label class='labelBy'>Fecha de expiracion</label>\r\n\t\t\t\t<div style=\"display: flex\">\r\n\r\n\t\t\t\t<span class='inputBy w50' > 01/01/2018</span>\r\n\t\t\t    </div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n\t<div class=\"col-xl-6\" >\r\n\t\t<div style=\"padding: 40px 60px; \">\r\n\t\t<div style=\"color:darkgray;font-size: 16px;font-weight: 500 !important;margin-bottom: 20px;\">\r\n\t\t\tElige un servico para marcar en oferta</div>\r\n\t\t\t\t\t<div style=\"border: solid 1px lightgray;padding: 20px;\">\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<div class='tituloCateg'>Peluqueria</div>\r\n\t\t\t\t\t\t<div style=\"margin-bottom:3px;background: rgb(250,249,247);padding: 10px 10px;\" *ngFor=\"let item of [{nombre:'Corte y Estilo',precio:30},{nombre:'Lavado y tinte',precio:40}];  let i = index\">\r\n\t\t\t\t\t\t<mat-checkbox [checked]=\"selected === i\" (change)=\"selected = i\">\r\n\t\t\t\t\t\t\t<span class=\"txtF\">{{item.nombre}} / ${{item.precio}}.00</span></mat-checkbox>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class='tituloCateg'>Rostro y Cuerpo</div>\r\n\t\t\t\t\t\t<div style=\"margin-bottom:3px;background: rgb(250,249,247);padding: 10px 10px;\" *ngFor=\"let item of [{nombre:'Masaje espalda',precio:20}];  let i = index\">\r\n\t\t\t\t\t\t<mat-checkbox  [checked]=\"selected2 === i\" (change)=\"OnChange($event,i)\">\r\n\t\t\t\t\t\t\t<span class=\"txtF\">{{item.nombre}} / ${{item.precio}}.00</span></mat-checkbox>\r\n\r\n\t\t\t\t\t\t\t<div *ngIf='selected2 === i' style=\"margin-top: 20px;font-size: 14px;\">\r\n\t\t\t\t\t\t\t\t<span style=\"font-weight: 400\">Precio en Oferta: </span> \r\n\t\t\t\t\t\t\t\t<input   class='inputBy w50' placeholder=\"precio de Oferta\"  autocomplete=\"off\"  style='    margin-top: 15px;margin-bottom: 20px;' type=\"number\" name=\"precio\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/agregaroferta/agregaroferta.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/content/pages/components/agregaroferta/agregaroferta.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txtF {\n  color: #383734;\n  font-size: 16px; }\n\n.tituloCateg {\n  font-size: 16px;\n  margin-bottom: 10px;\n  margin-top: 15px;\n  font-weight: 400; }\n\n.w50 {\n  display: flex;\n  width: 50%; }\n\ninput:focus {\n  outline: none !important;\n  border: 1px solid #34bfa3; }\n\n.inputBy {\n  color: #383734;\n  background: #fff;\n  border: 1px solid #e1e1e1;\n  border-radius: 4px;\n  min-height: 40px;\n  padding: 7px 10px;\n  resize: vertical;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\n.w100 {\n  display: block;\n  width: 100%; }\n\n.imgCheckBox {\n  height: 34px;\n  width: 34px;\n  border-radius: 20px;\n  margin: 5px 11px; }\n\n.conteinInput {\n  margin-bottom: 30px; }\n\n.labelBy {\n  display: inline-block;\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: 500 !important;\n  line-height: 1.5;\n  color: #383734; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/agregaroferta/agregaroferta.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/components/agregaroferta/agregaroferta.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AgregarofertaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarofertaComponent", function() { return AgregarofertaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgregarofertaComponent = /** @class */ (function () {
    function AgregarofertaComponent(_location) {
        this._location = _location;
        this.selected2 = false;
    }
    AgregarofertaComponent.prototype.ngOnInit = function () {
    };
    AgregarofertaComponent.prototype.goBack = function () {
        this._location.back();
        //	let _backUrl = 'servicios';
        //this.router.navigateByUrl(_backUrl);
    };
    AgregarofertaComponent.prototype.OnChange = function ($event, i) {
        $event.checked ? (this.selected2 = i) : (this.selected2 = undefined);
        //MatCheckboxChange {checked,MatCheckbox}
    };
    AgregarofertaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-agregaroferta',
            template: __webpack_require__(/*! ./agregaroferta.component.html */ "./src/app/content/pages/components/agregaroferta/agregaroferta.component.html"),
            styles: [__webpack_require__(/*! ./agregaroferta.component.scss */ "./src/app/content/pages/components/agregaroferta/agregaroferta.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], AgregarofertaComponent);
    return AgregarofertaComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/editservicio/editservicio.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/components/editservicio/editservicio.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row  m-subheader\" style=\"background: rgb(250,249,247) !important;\r\n    padding: 20px !important;\r\ntext-align: left !important;\r\nborder-bottom: solid 1px lightgray;    display: block;\">\r\n\t\r\n\r\n\t<i (click)='goBack()' style=\"font-size: 25px;\r\n    color: lightgray;\r\n    padding-left: 10px;\" class=\"la la-angle-left\"></i>\r\n\t<div class=\"\" style=\"display: inline-block;font-size: 30px;font-weight: 300;padding-left: 15px;\">Agregar Servicio</div>\r\n\r\n\r\n\r\n\t<button  class=\"btn btn-success\" style=\"    margin-top: 3px;\r\n    float: right;\r\n    margin-right: 10px;\" >Guardar</button>\r\n\r\n\t<button  class=\"btn btn-outline-success\" style=\"    margin-top: 3px;\r\n    float: right;\r\n    margin-right: 10px;\" (click)='goBack()' >Cancelar</button>\r\n\r\n\r\n</div>\r\n<div class=\"row\">\r\n\r\n\t<div class=\"col-xl-6\" style=\"    border-right: solid 1px lightgray;\" >\r\n\r\n\t\t<div style=\"padding: 40px 60px; \">\r\n\t\t\t<div class=\"conteinInput\">\r\n\t\t\t\t<label class='labelBy'>Nombre del Servicio</label>\r\n\t\t\t\t<input class='inputBy w100' placeholder=\"Cual es el nombre del servicio\"  autocomplete=\"off\"  type=\"text\" name=\"nombre\">\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<div class=\"conteinInput\" style=\"margin-top: 20px\">\r\n\t\t\t\t<label class='labelBy'>Categoria y Subcategoria</label>\r\n\t\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t\r\n\t\t\t\t<mat-select class='inputBy w50'>\r\n\t\t\t\t<mat-option>None</mat-option>\r\n\t\t\t\t<mat-option value=\"option1\">Option 1</mat-option>\r\n\t\t\t\t<mat-option value=\"option2\">Option 2</mat-option>\r\n\t\t\t\t<mat-option value=\"option3\">Option 3</mat-option>\r\n\t\t\t\t</mat-select>\r\n\r\n\t\t\t\t<mat-select class='inputBy w50'>\r\n\t\t\t\t<mat-option>None</mat-option>\r\n\t\t\t\t<mat-option value=\"option1\">Option 1</mat-option>\r\n\t\t\t\t<mat-option value=\"option2\">Option 2</mat-option>\r\n\t\t\t\t<mat-option value=\"option3\">Option 3</mat-option>\r\n\t\t\t\t</mat-select>\r\n\t\t\t    </div>\r\n\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<hr>\r\n\r\n\t\t\t<div class=\"conteinInput\" style=\"margin-top: 20px\">\r\n\t\t\t\t<label class='labelBy'>Duracion</label>\r\n\t\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t\r\n\t\t\t\t<mat-select class='inputBy w50'>\r\n\t\t\t\t<mat-option>None</mat-option>\r\n\t\t\t\t<mat-option value=\"option1\">Option 1</mat-option>\r\n\t\t\t\t<mat-option value=\"option2\">Option 2</mat-option>\r\n\t\t\t\t<mat-option value=\"option3\">Option 3</mat-option>\r\n\t\t\t\t</mat-select>\r\n\r\n\t\t\t\t<mat-select class='inputBy w50'>\r\n\t\t\t\t<mat-option>None</mat-option>\r\n\t\t\t\t<mat-option value=\"option1\">Option 1</mat-option>\r\n\t\t\t\t<mat-option value=\"option2\">Option 2</mat-option>\r\n\t\t\t\t<mat-option value=\"option3\">Option 3</mat-option>\r\n\t\t\t\t</mat-select>\r\n\t\t\t    </div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"conteinInput\" style=\"margin-top: 20px\">\r\n\t\t\t\t<label class='labelBy'>Precio</label>\r\n\t\t\t\t<div style=\"display: flex\">\r\n\t\t\t\t\r\n\t\t\t\t<mat-select class='inputBy w50'>\r\n\t\t\t\t<mat-option value=\"option1\" selected>Fijo</mat-option>\r\n\t\t\t\t</mat-select>\r\n\r\n\t\t\t\t<input class='inputBy w50' placeholder=\"precio del servicio\"  autocomplete=\"off\"  type=\"number\" name=\"precio\">\r\n\t\t\t    </div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n\t<div class=\"col-xl-6\" >\r\n\t\t<div style=\"padding: 40px 60px; \">\r\n\t\t\t<div style=\"color:darkgray;font-size: 16px;font-weight: 500 !important;margin-bottom: 20px;\">\r\n\t\t\tEmpleados que dan este servicio</div>\r\n\t\t\t\t\t<div style=\"border: solid 1px lightgray;padding: 20px;\">\r\n\t\t\t\t\t\t<p><mat-checkbox>\r\n\t\t\t\t\t\t<span class=\"txtF\">Seleccionar todos</span>\r\n\t\t\t\t\t\t</mat-checkbox></p>\r\n\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t<p><mat-checkbox>\r\n\t\t\t\t\t\t<img  class='imgCheckBox' src=\"https://booksy.com/media/us/2015/11/23/21f309ce4859db0374e7fdb085bc776d_50x50.png\">\r\n\t\t\t\t\t\t<span class=\"txtF\">Juan de Arco</span>\r\n\t\t\t\t\t\t</mat-checkbox></p>\r\n\t\t\t\t\t\t<p><mat-checkbox>\r\n\t\t\t\t\t\t<img class='imgCheckBox' src=\"https://booksy.com/media/us/2015/11/23/21f309ce4859db0374e7fdb085bc776d_50x50.png\">\r\n\t\t\t\t\t\t<span class=\"txtF\">Juan de Arco</span>\r\n\t\t\t\t\t\t</mat-checkbox></p>\r\n\t\t\t\t\t\t<p><mat-checkbox>\r\n\t\t\t\t\t\t<img class='imgCheckBox' src=\"https://booksy.com/media/us/2015/11/23/21f309ce4859db0374e7fdb085bc776d_50x50.png\">\r\n\t\t\t\t\t\t<span class=\"txtF\">Juan de Arco</span>\r\n\t\t\t\t\t\t</mat-checkbox></p>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/editservicio/editservicio.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/components/editservicio/editservicio.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputBy {\n  color: #383734;\n  background: #fff;\n  border: 1px solid #e1e1e1;\n  border-radius: 4px;\n  min-height: 40px;\n  padding: 7px 10px;\n  resize: vertical;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\n.w100 {\n  display: block;\n  width: 100%; }\n\n.imgCheckBox {\n  height: 34px;\n  width: 34px;\n  border-radius: 20px;\n  margin: 5px 11px; }\n\n.txtF {\n  color: #383734;\n  font-size: 16px; }\n\n.w50 {\n  display: flex;\n  width: 50%; }\n\n.conteinInput {\n  margin-bottom: 30px; }\n\n.labelBy {\n  display: inline-block;\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: 500 !important;\n  line-height: 1.5;\n  color: #383734; }\n\ninput:focus {\n  outline: none !important;\n  border: 1px solid #34bfa3; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/editservicio/editservicio.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/pages/components/editservicio/editservicio.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditservicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditservicioComponent", function() { return EditservicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_layout_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/layout/subheader.service */ "./src/app/core/services/layout/subheader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditservicioComponent = /** @class */ (function () {
    function EditservicioComponent(router, _location, activatedRoute, subheaderService) {
        this.router = router;
        this._location = _location;
        this.activatedRoute = activatedRoute;
        this.subheaderService = subheaderService;
    }
    EditservicioComponent.prototype.ngOnInit = function () {
        this.subheaderService.setTitle('Nuevo Servicio');
        //this.loadingSubject.next(true);
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(params);
            /*
            const id = +params.id;
            if (id && id > 0) {
                this.productsService.getProductById(id).subscribe(res => {
                    this.product = res;
                    this.oldProduct = Object.assign({}, res);
                    this.initProduct();
                });
            } else {
                const newProduct = new ProductModel();
                newProduct.clear();
                this.product = newProduct;
                this.oldProduct = Object.assign({}, newProduct);
                this.initProduct();
            }
            */
        });
        /*
        for (let i = 2018; i > 1945; i--) {
            this.availableYears.push(i);
        }
        */
    };
    EditservicioComponent.prototype.goBack = function () {
        this._location.back();
        //	let _backUrl = 'servicios';
        //this.router.navigateByUrl(_backUrl);
    };
    EditservicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-editservicio',
            template: __webpack_require__(/*! ./editservicio.component.html */ "./src/app/content/pages/components/editservicio/editservicio.component.html"),
            styles: [__webpack_require__(/*! ./editservicio.component.scss */ "./src/app/content/pages/components/editservicio/editservicio.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core_services_layout_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"]])
    ], EditservicioComponent);
    return EditservicioComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/editstaff/editstaff.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/content/pages/components/editstaff/editstaff.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row  m-subheader\" style=\"background: rgb(250,249,247) !important;\r\n    padding: 20px !important;\r\ntext-align: left !important;\r\nborder-bottom: solid 1px lightgray;    display: block;\">\r\n\t\r\n\r\n\t<i (click)='goBack()' style=\"font-size: 25px;\r\n    color: lightgray;\r\n    padding-left: 10px;\" class=\"la la-angle-left\"></i>\r\n\t<div class=\"\" style=\"display: inline-block;font-size: 30px;font-weight: 300;padding-left: 15px;\">Editar Staff</div>\r\n\r\n\r\n\r\n\t<button  class=\"btn btn-success\" style=\"    margin-top: 3px;\r\n    float: right;\r\n    margin-right: 10px;\" >Guardar</button>\r\n\r\n\t<button  class=\"btn btn-outline-success\" style=\"    margin-top: 3px;\r\n    float: right;\r\n    margin-right: 10px;\" (click)='goBack()' >Cancelar</button>\r\n\r\n\r\n</div>\r\n<div class=\"row\">\r\n\r\n\t<div class=\"col-xl-6\" style=\"    border-right: solid 1px lightgray;\" >\r\n\r\n\t\t<div style=\"padding: 40px 60px; \">\r\n\t\t\t<div style=\"text-align: center\">\r\n\t\t\t<img   style='    height: 70px;\r\n    width: 70px;\r\n    border-radius: 100px;\r\n    margin: 5px 11px;' src=\"https://booksy.com/media/us/2015/11/23/21f309ce4859db0374e7fdb085bc776d_50x50.png\">\r\n</div>\r\n\t\t\t<div class=\"conteinInput\">\r\n\t\t\t\t\r\n\r\n\t\t\t\t<label class='labelBy'>Nombre</label>\r\n\t\t\t\t<input class='inputBy w100' placeholder=\"nombre del staff\"  autocomplete=\"off\"  type=\"text\" name=\"nombre\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"conteinInput\">\r\n\t\t\t\t<label class='labelBy'>Telefono</label>\r\n\t\t\t\t<input class='inputBy w100' placeholder=\"telefono del staff\"  autocomplete=\"off\"  type=\"tel\" name=\"telefono\">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"conteinInput\">\r\n\t\t\t\t<label class='labelBy'>Email</label>\r\n\t\t\t\t<input class='inputBy w100' placeholder=\"email del staff\"  autocomplete=\"off\"  type=\"email\" name=\"enail\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"conteinInput\">\r\n\t\t\t\t<label class='labelBy'>Descripcion</label>\r\n\t\t\t\t<input class='inputBy w100' placeholder=\"descripcion del staff\"  autocomplete=\"off\"  type=\"text\" name=\"desc\">\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n\t<div class=\"col-xl-6\" >\r\n\t\t<div style=\"padding: 40px 60px; \">\r\n\t\t\t<div style=\"color:darkgray;font-size: 16px;font-weight: 500 !important;margin-bottom: 20px;\">Permisos</div>\r\n\t\t\t\t\t<div style=\"border: solid 1px lightgray;padding: 20px;\">\r\n\t\t\t\t\t\t\r\n<label class='labelBy'>Permisos de usuario</label>\r\n\t\t\t\t\t\t\t\t\t\t<mat-select class='inputBy w100'>\r\n\t\t\t\t<mat-option>None</mat-option>\r\n\t\t\t\t<mat-option value=\"option1\">Option 1</mat-option>\r\n\t\t\t\t<mat-option value=\"option2\">Option 2</mat-option>\r\n\t\t\t\t<mat-option value=\"option3\">Option 3</mat-option>\r\n\t\t\t\t</mat-select>\r\n\r\n\t\t\t\t<button  \t \r\n\t\t class=\"btn btn-outline-danger\" style=\"margin-top: 50px;\"  mat-raised-button color=\"primary\" >Eliminar miembro del Staff</button>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/editstaff/editstaff.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/content/pages/components/editstaff/editstaff.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputBy {\n  color: #383734;\n  background: #fff;\n  border: 1px solid #e1e1e1;\n  border-radius: 4px;\n  min-height: 40px;\n  padding: 7px 10px;\n  resize: vertical;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\n.w100 {\n  display: block;\n  width: 100%; }\n\n.imgCheckBox {\n  height: 34px;\n  width: 34px;\n  border-radius: 20px;\n  margin: 5px 11px; }\n\n.txtF {\n  color: #383734;\n  font-size: 16px; }\n\n.w50 {\n  display: flex;\n  width: 50%; }\n\n.conteinInput {\n  margin-bottom: 30px; }\n\n.labelBy {\n  display: inline-block;\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: 500 !important;\n  line-height: 1.5;\n  color: #383734; }\n\ninput:focus {\n  outline: none !important;\n  border: 1px solid #34bfa3; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/editstaff/editstaff.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/components/editstaff/editstaff.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditstaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditstaffComponent", function() { return EditstaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_layout_subheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/layout/subheader.service */ "./src/app/core/services/layout/subheader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditstaffComponent = /** @class */ (function () {
    function EditstaffComponent(router, _location, activatedRoute, subheaderService) {
        this.router = router;
        this._location = _location;
        this.activatedRoute = activatedRoute;
        this.subheaderService = subheaderService;
    }
    EditstaffComponent.prototype.ngOnInit = function () {
        this.subheaderService.setTitle('Nuevo Empleado');
        //this.loadingSubject.next(true);
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(params);
            /*
            const id = +params.id;
            if (id && id > 0) {
                this.productsService.getProductById(id).subscribe(res => {
                    this.product = res;
                    this.oldProduct = Object.assign({}, res);
                    this.initProduct();
                });
            } else {
                const newProduct = new ProductModel();
                newProduct.clear();
                this.product = newProduct;
                this.oldProduct = Object.assign({}, newProduct);
                this.initProduct();
            }
            */
        });
        /*
        for (let i = 2018; i > 1945; i--) {
            this.availableYears.push(i);
        }
        */
    };
    EditstaffComponent.prototype.goBack = function () {
        this._location.back();
        //	let _backUrl = 'servicios';
        //this.router.navigateByUrl(_backUrl);
    };
    EditstaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-editstaff',
            template: __webpack_require__(/*! ./editstaff.component.html */ "./src/app/content/pages/components/editstaff/editstaff.component.html"),
            styles: [__webpack_require__(/*! ./editstaff.component.scss */ "./src/app/content/pages/components/editstaff/editstaff.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core_services_layout_subheader_service__WEBPACK_IMPORTED_MODULE_2__["SubheaderService"]])
    ], EditstaffComponent);
    return EditstaffComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/estadistica/estadistica.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/content/pages/components/estadistica/estadistica.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row  m-subheader\" style=\"background: rgb(250,249,247) !important;\r\n    padding: 20px !important;\r\ntext-align: left !important;\r\nborder-bottom: solid 1px lightgray;    display: block;\">\r\n\t\r\n\t<div class=\"\" style=\"display: inline-block;font-size: 30px;font-weight: 300;padding-left: 30px;\">Estadistica</div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n<div class=\"row\" style=\"    padding: 40px;\">\r\n<div class=\"col-sm-12\">\r\n<div class=\"user-card-block card\" style=\" border: none !important;padding: 40px 60px; border-radius: 0px !important;\">\r\n<div class=\"card-block\">\r\n<div class=\"top-card text-center\">\r\n<img src=\"https://booksy.com/media/us/2015/11/23/21f309ce4859db0374e7fdb085bc776d_50x50.png\"\r\n     class=\"img-responsive\" alt=\"\">\r\n</div>\r\n<div class=\"card-contain text-center p-t-40\"  style=\"    padding-top: 40px;\">\r\n<h5 class=\"text-capitalize p-b-10\" style=\"    padding-bottom: 10px;\">asdsad</h5>\r\n<p class=\"text-muted\">adsasd</p>\r\n</div>\r\n<div class=\"card-data m-t-40\" style=\"    margin-top: 40px;\">\r\n<div class=\"row\">\r\n<div class=\"col-3 b-r-default text-center\">\r\n<p class=\"text-muted\">Total</p>\r\n<span>3123</span>\r\n</div>\r\n\r\n<div class=\"col-3 b-r-default text-center\">\r\n<p class=\"text-muted\">Completadas</p>\r\n<span>123</span>\r\n</div>\r\n\r\n<div class=\" col-3 b-r-default text-center\">\r\n<p class=\"text-muted\">Canceladas</p>\r\n<span>123</span>\r\n</div>\r\n\r\n<div class=\"col-3 text-center \">\r\n<p class=\"text-muted\">Puntuacion</p>\r\n<span>123</span>\r\n</div>\r\n\r\n</div>\r\n</div>\r\n\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"col-md-12 col-xl-4\">\r\n\r\n<div class=\"row\">\r\n<div class=\"col-xl-12 col-md-6\" style=\"    margin-bottom: 20px;\">\r\n<div class=\"card\">\r\n<div class=\"card-block-big card-status\">\r\n<h5>Ingresos Totales</h5>\r\n<div class=\"card-block text-center\">\r\n<h2 class=\"text-primary\">$100</h2>\r\n</div>\r\n\r\n</div>\r\n</div>\r\n</div>\r\n<div class=\"col-xl-12 col-md-6\"  style=\"    margin-bottom: 20px;\">\r\n<div class=\"card\">\r\n<div class=\"card-block-big card-status\">\r\n<h5>Reserva promedio</h5>\r\n<div class=\"card-block text-center\">\r\n<h2 class=\"text-warning\">$100</h2>\r\n</div>\r\n\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"col-md-12 col-xl-8\">\r\n<div class=\"card\">\r\n<div class=\"card-block\">\r\n<h5>Servicios mas consumidos</h5>\r\n</div>\r\n\r\n\r\n<div class=\"card-block client-card table-1-card p-t-0\">\r\n<div class=\"table-responsive\">\r\n<table class=\"table\">\r\n<thead>\r\n<tr class=\"text-capitalize\">\r\n<th>Servicio</th>\r\n<th>Categoria</th>\r\n<th>Cantidad</th>\r\n\r\n\r\n</tr>\r\n</thead>\r\n<tbody>\r\n\r\n<tr  >\r\n<td class=\"photo-table img\">\r\n<!-- <a href=\"#!\">\r\n\r\n\t<img style=\"border-radius: 0px;\r\nwidth: 27px;\" class=\"img-circle\" src=\"{{globalImage}}{{e.idFoto}}\" onError=\"this.src='assets/categoria.png';\"  alt=\"chat-user\">\r\n\r\n</a> -->\r\n<p>Corte de Cabello</p>\r\n</td>\r\n<td>Peluqueria</td>\r\n<td>1</td>\r\n\r\n<!-- <td class=\"text-success\">${{e.total?.toFixed(2)}}</td> -->\r\n</tr>\r\n\r\n\r\n<tr  >\r\n<td class=\"photo-table img\">\r\n<!-- <a href=\"#!\">\r\n\r\n\t<img style=\"border-radius: 0px;\r\nwidth: 27px;\" class=\"img-circle\" src=\"{{globalImage}}{{e.idFoto}}\" onError=\"this.src='assets/categoria.png';\"  alt=\"chat-user\">\r\n\r\n</a> -->\r\n<p>Corte de Cabello2</p>\r\n</td>\r\n<td>Peluqueria</td>\r\n<td>12</td>\r\n\r\n<!-- <td class=\"text-success\">${{e.total?.toFixed(2)}}</td> -->\r\n</tr>\r\n\r\n\r\n\r\n</tbody>\r\n</table>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/estadistica/estadistica.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/content/pages/components/estadistica/estadistica.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".b-r-default {\n  border-right: 1px solid #bdc3c7; }\n\nh5 {\n  margin-bottom: 0;\n  color: #757575;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin-right: 10px; }\n\nh2 {\n  font-weight: 600; }\n\n.card-block-big {\n  padding: 25px; }\n\n.card-block {\n  padding: 20px; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/estadistica/estadistica.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/content/pages/components/estadistica/estadistica.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EstadisticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticaComponent", function() { return EstadisticaComponent; });
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

var EstadisticaComponent = /** @class */ (function () {
    function EstadisticaComponent() {
    }
    EstadisticaComponent.prototype.ngOnInit = function () {
    };
    EstadisticaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-estadistica',
            template: __webpack_require__(/*! ./estadistica.component.html */ "./src/app/content/pages/components/estadistica/estadistica.component.html"),
            styles: [__webpack_require__(/*! ./estadistica.component.scss */ "./src/app/content/pages/components/estadistica/estadistica.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EstadisticaComponent);
    return EstadisticaComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/horario/horario.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/content/pages/components/horario/horario.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row  m-subheader\" style=\"background: rgb(250,249,247) !important;\r\n    padding: 20px !important;\r\ntext-align: left !important;\r\nborder-bottom: solid 1px lightgray;    display: block;\">\r\n\t\r\n<!-- \r\n\t<i (click)='goBack()' style=\"font-size: 25px;\r\n    color: lightgray;\r\n    padding-left: 10px;\" class=\"la la-angle-left\"></i>\r\n -->\t<div class=\"\" style=\"display: inline-block;font-size: 30px;font-weight: 300;padding-left: 15px;\">Horario de Atención</div>\r\n\r\n\r\n\r\n\t<button  class=\"btn btn-success\" style=\"    margin-top: 3px;\r\n    float: right;\r\n    margin-right: 10px;\" >Guardar</button>\r\n\r\n<!-- \t<button  class=\"btn btn-outline-success\" style=\"    margin-top: 3px;\r\n    float: right;\r\n    margin-right: 10px;\" (click)='goBack()' >Cancelar</button> -->\r\n\r\n\r\n</div>\r\n<div class=\"row\">\r\n\r\n\t<div class=\"col-xl-6\" style=\"    border-right: solid 1px lightgray;\" >\r\n\r\n\t\t\t\t<div style='padding: 30px 45px;'>\r\n\t\t\t\t\t\t<div style=\"margin-bottom:3px;background: white;padding: 0px 0px;\" *ngFor=\"let item of [{nombre:'Domingo'},{nombre:'Lunes'},{nombre:'Martes'}\r\n\t\t\t\t\t\t,{nombre:'Miercoles'},{nombre:'Jueves'},{nombre:'Viernes'},{nombre:'Sabado'}];  let i = index\">\r\n\t\t\t\t\t\t<mat-checkbox >\r\n\t\t\t\t\t\t\t<span class='labelBy' style='margin-bottom: 0px !important;'>{{item.nombre}}</span>\r\n\t\t\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t\t\t<div class=\"conteinInput\" style=\"margin-top: 20px\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div style=\"display: flex\">\r\n\r\n\t\t\t\t\t\t\t<mat-select class='inputBy w50'>\r\n\t\t\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:55 AM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:55 AM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:55 AM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:55 AM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:55 AM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:55 PM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:55 PM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:55 PM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:55 PM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:55 PM</mat-option>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t</mat-select>\r\n\r\n\t\t\t\t\t\t\t<mat-select class='inputBy w50'>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:55 AM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:55 AM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:55 AM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:55 AM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:55 AM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:55 PM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:55 PM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:55 PM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:55 PM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:55 PM</mat-option>\r\n\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\r\n\t</div>\r\n\t<div class=\"col-xl-6\" >\r\n\r\n\t\t\t<label class='labelBy'>Horario Especial</label>\r\n\t</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/horario/horario.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/content/pages/components/horario/horario.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txtF {\n  color: #383734;\n  font-size: 16px; }\n\n.tituloCateg {\n  font-size: 16px;\n  margin-bottom: 10px;\n  margin-top: 15px;\n  font-weight: 400; }\n\n.w50 {\n  display: flex;\n  width: 50%; }\n\ninput:focus {\n  outline: none !important;\n  border: 1px solid #34bfa3; }\n\n.inputBy {\n  color: #383734;\n  background: #fff;\n  border: 1px solid #e1e1e1;\n  border-radius: 4px;\n  min-height: 40px;\n  padding: 7px 10px;\n  resize: vertical;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\n.w100 {\n  display: block;\n  width: 100%; }\n\n.imgCheckBox {\n  height: 34px;\n  width: 34px;\n  border-radius: 20px;\n  margin: 5px 11px; }\n\n.conteinInput {\n  margin-bottom: 30px; }\n\n.labelBy {\n  display: inline-block;\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: 500 !important;\n  line-height: 1.5;\n  color: #383734; }\n\n.selectedItem {\n  background: dimgrey;\n  color: white; }\n\nmat-list-item:hover {\n  background: dimgrey !important;\n  color: white; }\n\nmat-list-item {\n  border-bottom: solid 1px lightgray; }\n\n.tagStaff {\n  color: #00beb7;\n  background: #e5f8f7;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 12px;\n  text-align: center;\n  text-transform: uppercase;\n  border-radius: 2px;\n  display: inline-block;\n  padding: 2px 10px;\n  min-width: 100px;\n  vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/horario/horario.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/content/pages/components/horario/horario.component.ts ***!
  \***********************************************************************/
/*! exports provided: HorarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorarioComponent", function() { return HorarioComponent; });
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

var HorarioComponent = /** @class */ (function () {
    function HorarioComponent() {
    }
    HorarioComponent.prototype.ngOnInit = function () {
    };
    HorarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-horario',
            template: __webpack_require__(/*! ./horario.component.html */ "./src/app/content/pages/components/horario/horario.component.html"),
            styles: [__webpack_require__(/*! ./horario.component.scss */ "./src/app/content/pages/components/horario/horario.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HorarioComponent);
    return HorarioComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/inner/inner.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/content/pages/components/inner/inner.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Inner page content goes here</p>\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/inner/inner.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/content/pages/components/inner/inner.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/pages/components/inner/inner.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/content/pages/components/inner/inner.component.ts ***!
  \*******************************************************************/
/*! exports provided: InnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerComponent", function() { return InnerComponent; });
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

var InnerComponent = /** @class */ (function () {
    function InnerComponent() {
    }
    InnerComponent.prototype.ngOnInit = function () {
    };
    InnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-inner',
            template: __webpack_require__(/*! ./inner.component.html */ "./src/app/content/pages/components/inner/inner.component.html"),
            styles: [__webpack_require__(/*! ./inner.component.scss */ "./src/app/content/pages/components/inner/inner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InnerComponent);
    return InnerComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/perfilnegocio/perfilnegocio.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/content/pages/components/perfilnegocio/perfilnegocio.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row  m-subheader\" style=\"background: rgb(250,249,247) !important;\r\n    padding: 20px !important;\r\ntext-align: left !important;\r\nborder-bottom: solid 1px lightgray;    display: block;\">\r\n\t\r\n<!-- \r\n\t<i (click)='goBack()' style=\"font-size: 25px;\r\n    color: lightgray;\r\n    padding-left: 10px;\" class=\"la la-angle-left\"></i>\r\n -->\t<div class=\"\" style=\"display: inline-block;font-size: 30px;font-weight: 300;padding-left: 15px;\">Perfil de Negocio</div>\r\n\r\n\r\n\r\n\t<button  class=\"btn btn-success\" style=\"    margin-top: 3px;\r\n    float: right;\r\n    margin-right: 10px;\" >Guardar</button>\r\n\r\n<!-- \t<button  class=\"btn btn-outline-success\" style=\"    margin-top: 3px;\r\n    float: right;\r\n    margin-right: 10px;\" (click)='goBack()' >Cancelar</button> -->\r\n\r\n\r\n</div>\r\n<div class=\"row\">\r\n\r\n\t<div class=\"col-xl-6\" style=\"    border-right: solid 1px lightgray;\" >\r\n\r\n\t\t<div style=\"padding: 40px 60px; \">\r\n\t\t\t<div style=\"text-align: center\">\r\n\t\t\t<img   style='    height: 70px;\r\n    width: 70px;\r\n    margin-bottom: 40px;\r\n    border-radius: 100px;\r\n    margin: 5px 11px;' src=\"https://booksy.com/media/us/2015/11/23/21f309ce4859db0374e7fdb085bc776d_50x50.png\">\r\n</div>\r\n\t\t\t<div class=\"conteinInput\">\r\n\t\t\t\t\r\n\r\n\t\t\t\t<label class='labelBy'>Nombre del Negocio</label>\r\n\t\t\t\t<input class='inputBy w100' placeholder=\"cual es el nombre del negocio\"  autocomplete=\"off\"  type=\"text\" name=\"nombre\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"conteinInput\">\r\n\t\t\t\t<label class='labelBy'>Telefono</label>\r\n\t\t\t\t<input class='inputBy w100' placeholder=\"cual es el telefono del negocio\"  autocomplete=\"off\"  type=\"tel\" name=\"telefono\">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"conteinInput\">\r\n\t\t\t\t<label class='labelBy'>Descripcion de Negocio</label>\r\n\t\t\t\t<textarea  style='height: 175px;resize: none;' class='inputBy w100' placeholder=\"email del staff\"  autocomplete=\"off\"  type=\"text\" name=\"descripcion\"></textarea>\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n\t<div class=\"col-xl-6\" >\r\n\r\n\t\t<div style=\"padding: 40px 60px; \">\r\n\r\n<div class=\"conteinInput\">\r\n\t\t\t<div>\t<label class='labelBy'>Banner App</label></div>\r\n\t\t\t\t<img   style='       height: 230px;\r\n    width: 375px;' src=\"http://50.116.17.150:3000/uploads/imageB-1527357998442.png\">\r\n\t\t\t</div>\r\n\r\n\r\n<!-- \r\n\t\t\t<div class=\"conteinInput\">\r\n\t\t\t\t<label class='labelBy'>Telefono</label>\r\n\t\t\t\t<input class='inputBy w100' placeholder=\"cual es el telefono del negocio\"  autocomplete=\"off\"  type=\"tel\" name=\"telefono\">\r\n\t\t\t</div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div  class=\"form-group row\">\r\n\r\n  \t<div style=\"    padding-left: 15px;\">\t<label class='labelBy'>Ubicacion del Negocio</label></div>\r\n\r\n    <div  class=\"col-sm-10\">\r\n\r\n    <div class=\"form-group\">\r\n        <input  placeholder=\"busca por lugar\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\" >\r\n      </div>\r\n\r\n<agm-map style='height: 400px; width: 100%' \r\n  [latitude]=\"dataCentro.latitud\"\r\n  [longitude]=\"dataCentro.longitud\"\r\n  [zoom]=\"zoom\"\r\n  [disableDefaultUI]=\"false\"\r\n  [zoomControl]=\"true\"\r\n  [mapDraggable]=\"editarOn\"\r\n  \r\n  (mapClick)=\"mapClicked($event)\">\r\n \r\n  <agm-marker \r\n      *ngFor=\"let m of markers; let i = index\"\r\n      (markerClick)=\"clickedMarker(m.label, i)\"\r\n      [latitude]=\"m.lat\"\r\n      [longitude]=\"m.lng\"\r\n      [label]=\"m.label\"\r\n      [markerDraggable]=\"m.draggable\"\r\n      (dragEnd)=\"markerDragEnd(m, $event)\">\r\n      \r\n    <agm-info-window>\r\n      <strong>InfoWindow content</strong>\r\n    </agm-info-window>\r\n    \r\n  </agm-marker> \r\n  <!--\r\n  <agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" \r\n      [radius]=\"5000\"\r\n      [fillColor]=\"'red'\"\r\n      [circleDraggable]=\"true\"\r\n      [editable]=\"true\">\r\n  </agm-circle>\r\n-->\r\n</agm-map>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/perfilnegocio/perfilnegocio.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/content/pages/components/perfilnegocio/perfilnegocio.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputBy {\n  color: #383734;\n  background: #fff;\n  border: 1px solid #e1e1e1;\n  border-radius: 4px;\n  min-height: 40px;\n  padding: 7px 10px;\n  resize: vertical;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\n.w100 {\n  display: block;\n  width: 100%; }\n\n.imgCheckBox {\n  height: 34px;\n  width: 34px;\n  border-radius: 20px;\n  margin: 5px 11px; }\n\n.txtF {\n  color: #383734;\n  font-size: 16px; }\n\n.w50 {\n  display: flex;\n  width: 50%; }\n\n.conteinInput {\n  margin-bottom: 30px; }\n\n.labelBy {\n  display: inline-block;\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: 500 !important;\n  line-height: 1.5;\n  color: #383734; }\n\ninput:focus {\n  outline: none !important;\n  border: 1px solid #34bfa3; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/perfilnegocio/perfilnegocio.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/content/pages/components/perfilnegocio/perfilnegocio.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PerfilnegocioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilnegocioComponent", function() { return PerfilnegocioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_layout_subheader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/layout/subheader.service */ "./src/app/core/services/layout/subheader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PerfilnegocioComponent = /** @class */ (function () {
    //asd
    function PerfilnegocioComponent(router, _location, activatedRoute, subheaderService, fb, mapsAPILoader, ngZone, cdr) {
        this.router = router;
        this._location = _location;
        this.activatedRoute = activatedRoute;
        this.subheaderService = subheaderService;
        this.fb = fb;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.dataCentro = [];
        this.editarOn = false;
        this.markers = [];
        this.zoom = 16;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.dataCentro['latitud'] = 51.673858;
        this.dataCentro['longitud'] = 7.815982;
    }
    PerfilnegocioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                componentRestrictions: { country: "pa" }
            });
            autocomplete.addListener("place_changed", function () {
                //  this.ngZone.run(() => {
                //get the place result
                var place = autocomplete.getPlace();
                //verify result
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                //set latitude, longitude and zoom
                _this.dataCentro['latitud'] = place.geometry.location.lat();
                _this.dataCentro['longitud'] = place.geometry.location.lng();
                _this.zoom = 16;
                _this.cdr.detectChanges();
                //});
            });
        });
    };
    PerfilnegocioComponent.prototype.goBack = function () {
        this._location.back();
        //	let _backUrl = 'servicios';
        //this.router.navigateByUrl(_backUrl);
    };
    PerfilnegocioComponent.prototype.mapClicked = function ($event) {
        if (this.editarOn) {
            this.dataCentro['longitud'] = $event.coords.lng;
            this.dataCentro['latitud'] = $event.coords.lat;
            this.markers[0] = {
                lat: $event.coords.lat,
                lng: $event.coords.lng,
                label: 'Nueva Ubicacion',
                draggable: true
            };
        }
    };
    PerfilnegocioComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    PerfilnegocioComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    PerfilnegocioComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            imageU: null,
            imageB: null
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("search"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PerfilnegocioComponent.prototype, "searchElementRef", void 0);
    PerfilnegocioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-perfilnegocio',
            template: __webpack_require__(/*! ./perfilnegocio.component.html */ "./src/app/content/pages/components/perfilnegocio/perfilnegocio.component.html"),
            styles: [__webpack_require__(/*! ./perfilnegocio.component.scss */ "./src/app/content/pages/components/perfilnegocio/perfilnegocio.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _core_services_layout_subheader_service__WEBPACK_IMPORTED_MODULE_4__["SubheaderService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PerfilnegocioComponent);
    return PerfilnegocioComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/servicios/servicios.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/content/pages/components/servicios/servicios.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row  m-subheader\" style=\"background: rgb(250,249,247) !important;\r\n    padding: 20px !important;\r\ntext-align: left !important;\r\nborder-bottom: solid 1px lightgray;    display: block;\">\r\n\t\r\n\t<div class=\"\" style=\"display: inline-block;font-size: 30px;font-weight: 300;padding-left: 30px;\">Servicios</div>\r\n\r\n\t<button  class=\"btn btn-success\" style=\"    margin-top: 3px;\r\n    float: right;\r\n    margin-right: 10px;\" \r\n\t\t[routerLink]=\"['/editservicio']\" \r\n\t\t[queryParams]=\"{id: 34}\" mat-raised-button color=\"primary\" matTooltip=\"Crear nuevo servicio\">Agregar Servicio</button>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-4\" style=\"padding-right: 0px;    border-right: solid 1px lightgray;\" >\r\n\r\n\t\t<div style=\"width: 100%\">\r\n\t\t\t\r\n\t\t\t<div style=\"margin-bottom: 30px;    box-shadow: 0 1px 15px 1px rgba(69,65,78,.08); background-color: #fff;\">\r\n\t\t\t\t<div style=\"display: flex;\r\n    flex-direction: row;\r\n    align-items: stretch;\r\n    justify-content: space-between;\r\n    padding: 16px 20px;\r\n    height: 69px;\r\n    position: relative;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    border-bottom: solid 1px lightgray;\">\r\n\r\n\t\t\t\t\t<div style=\"    display: flex;\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t\talign-content: flex-start;\">Ofertas</div>\r\n\r\n\t<button  class=\"btn btn-sm btn-success\" style=\"    margin-top: 3px;\r\n    float: right;\r\n    margin-right: 10px;\" color=\"primary\" [routerLink]=\"['/agregaroferta']\" >Agregar Oferta</button>\r\n\r\n\r\n\r\n\t\t\t\t</div>\r\n\r\n\r\n<!-- \t\t\t\t\t\t\t\t\t<div class=\"itemServicios\">\r\n\t\t\t\t\t<div class=\"boxItem\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"txtItemServ\">\r\n\t\t\t\t\t\t\t<h3 style=\" font-size: 16px !important;   color: #5f5d5b;\">Corte y Estilo</h3>\r\n\t\t\t\t\t\t\t<p style=\"color: #989794;font-size: 12px;\">\r\n\t\t\t\t\t\t\t\tHasta el 01/01/2018\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"txtItemServP\" style=\"color:darkgray !important; text-decoration: line-through;\">$50</div>\r\n\t\t\t\t\t\t<div class=\"txtItemServP\" >$30</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n -->\r\n\t\r\n<div class=\"example-container \" >\r\n  <mat-table #table [dataSource]=\"dataSource\">\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n    </ng-container>\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n    </ng-container>\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n    </ng-container>\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n    </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n  \r\n  <mat-paginator #paginator\r\n    [pageSize]=\"5\"\r\n\r\n    [showFirstLastButtons]=\"true\">\r\n  </mat-paginator>\r\n</div>\r\n\r\n\r\n\r\n\r\n\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t<div style=\"    box-shadow: 0 1px 15px 1px rgba(69,65,78,.08); background-color: #fff;\">\r\n\t\t\t\t<div style=\"display: flex;\r\n    flex-direction: row;\r\n    align-items: stretch;\r\n    justify-content: space-between;\r\n    padding: 16px 20px;\r\n    height: 69px;\r\n    position: relative;\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    border-bottom: solid 1px lightgray;border-top: solid 1px lightgray;\">\r\n\r\n\t\t\t\t\t<div style=\"    display: flex;\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t\talign-content: flex-start;\">Paquetes</div>\r\n\r\n\t<button  class=\"btn btn-sm btn-success\" style=\"    margin-top: 3px;\r\n    float: right;\r\n    margin-right: 10px;\" color=\"primary\" >Agregar Paquete</button>\r\n\r\n\r\n\r\n\t\t\t\t</div>\r\n\r\n\r\n<div class=\"example-container \">\r\n  <mat-table #table [dataSource]=\"dataSource2\">\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"position\">\r\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n    </ng-container>\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n    </ng-container>\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"weight\">\r\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n    </ng-container>\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"symbol\">\r\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n    </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n  \r\n  <mat-paginator #paginator2\r\n    [pageSize]=\"5\"\r\n\r\n    [showFirstLastButtons]=\"true\">\r\n  </mat-paginator>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-8\" >\r\n\r\n\r\n\t\t<div style=\"    padding: 40px 60px;width: 100%\">\r\n\r\n\t\t\t\t<div style=\"width: 100%; display: table;\">\r\n\t\t\t\t\t<input class='inputBy searchInput' style=\"padding-left: 10px\" placeholder=\"buscar servicios\"  autocomplete=\"off\"  type=\"text\" name=\"nombre\">\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"itemServicios\" *ngFor=\"let s of serviciosC; let i = index\" >\r\n\t\t\t\t\t<div class=\"boxItem\">\r\n\t\t\t\t\t\t<i class=\"la  la-angle-right iconR\"></i>\r\n\t\t\t\t\t\t<div class=\"txtItemServ\">\r\n\t\t\t\t\t\t\t<h3 style=\" font-size: 16px !important;   color: #5f5d5b;\">\r\n\t\t\t\t\t\t\t{{s.nombre}}</h3>\r\n\t\t\t\t\t\t\t<p style=\"color: #989794;font-size: 12px;\">\r\n\t\t\t\t\t\t\t\t{{s.nombreCategoria}} / {{s.nombreSubcategoria}}\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<!-- \t<div class=\"txtItemServP\"> \r\n\t\t\t\t<span >{{s.duracion}}min</span> \r\n\t\t\t\t\t\t</div>\r\n -->\r\n\r\n\t\t\t\t\t<div class=\"txtItemServP\">\r\n\t\t\t\t<span>{{getHoras(s.duracion)}}h</span>\t\t \r\n\t\t\t\t<span style=\"margin-left: 6px\">{{s.duracion % 60}}min</span> \r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"txtItemServP\">${{s.precio}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n<!-- \t\t\t\t\t\t\t\t<div class=\"itemServicios\">\r\n\t\t\t\t\t<div class=\"boxItem\">\r\n\t\t\t\t\t\t<i class=\"la  la-angle-right iconR\"></i>\r\n\t\t\t\t\t\t<div class=\"txtItemServ\">\r\n\t\t\t\t\t\t\t<h3 style=\" font-size: 16px !important;   color: #5f5d5b;\">Corte y Estilo</h3>\r\n\t\t\t\t\t\t\t<p style=\"color: #989794;font-size: 12px;\">\r\n\t\t\t\t\t\t\t\tPeluqueria / Cortes de Mujer\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"txtItemServP\">30min</div>\r\n\t\t\t\t\t\t<div class=\"txtItemServP\">30min</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"itemServicios\">\r\n\t\t\t\t\t<div class=\"boxItem\">\r\n\t\t\t\t\t\t<i class=\"la  la-angle-right iconR\"></i>\r\n\t\t\t\t\t\t<div class=\"txtItemServ\">\r\n\t\t\t\t\t\t\t<h3 style=\" font-size: 16px !important;   color: #5f5d5b;\">Corte y Estilo</h3>\r\n\t\t\t\t\t\t\t<p style=\"color: #989794;font-size: 12px;\">\r\n\t\t\t\t\t\t\t\tPeluqueria / Cortes de Mujer\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"txtItemServP\">30min</div>\r\n\t\t\t\t\t\t<div class=\"txtItemServP\">30min</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/servicios/servicios.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/content/pages/components/servicios/servicios.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itemServicios {\n  border: 1px solid #e1e1e1;\n  border-radius: 4px;\n  display: block;\n  margin-bottom: 10px; }\n\n.itemServicios:hover {\n  opacity: 0.8; }\n\n.boxItem {\n  position: relative;\n  background: #faf9f7 !important;\n  padding: 10px 50px 2px 40px; }\n\n.inputBy:focus {\n  outline: none !important;\n  border: 1px solid #34bfa3; }\n\n.searchInput {\n  float: right;\n  height: 40px;\n  width: 35%;\n  margin-bottom: 40px; }\n\n.iconR {\n  font-size: 16px;\n  position: absolute;\n  right: 5px;\n  top: 29px;\n  color: darkgray; }\n\n.txtItemServ {\n  width: 60% !important;\n  display: inline-block;\n  min-height: 1px;\n  vertical-align: top;\n  margin: 0;\n  padding: 0; }\n\n.txtItemServP {\n  width: 20% !important;\n  text-align: right !important;\n  display: inline-block;\n  min-height: 1px;\n  vertical-align: top;\n  margin: 0;\n  padding-left: 20px;\n  font-size: 16px;\n  font-weight: 400; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/servicios/servicios.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/components/servicios/servicios.component.ts ***!
  \***************************************************************************/
/*! exports provided: ServiciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosComponent", function() { return ServiciosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/auth/authentication.service */ "./src/app/core/auth/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiciosComponent = /** @class */ (function () {
    function ServiciosComponent(authService) {
        this.authService = authService;
        /*
         interface Element {
          name: string;
          position: number;
          weight: number;
          symbol: string;
        }
        */
        //const ELEMENT_DATA: Element[] = [
        this.ELEMENT_DATA = [
            { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
            { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
            { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
            { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
            { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
            { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
            { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        ];
        this.ELEMENT_DATA2 = [
            { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
            { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
            { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        ];
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.ELEMENT_DATA);
        this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.ELEMENT_DATA2);
        this.serviciosC = [];
        var retrievedObject = JSON.parse(localStorage.getItem('userADby2as'));
        this.idCentro = retrievedObject.idCentro;
        console.log(this.idCentro);
    }
    ServiciosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.serviciosC({ idCentro: this.idCentro })
            .subscribe(function (data) {
            _this.serviciosC = data;
            console.log(data);
        }, function (err) {
            console.log('someError');
            alert('Ups! Algo ha salido mal');
        });
    };
    ServiciosComponent.prototype.getHoras = function (hora) {
        return Math.floor(hora / 60);
    };
    ServiciosComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource2.paginator = this.paginator2;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ServiciosComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ServiciosComponent.prototype, "paginator2", void 0);
    ServiciosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-servicios',
            template: __webpack_require__(/*! ./servicios.component.html */ "./src/app/content/pages/components/servicios/servicios.component.html"),
            styles: [__webpack_require__(/*! ./servicios.component.scss */ "./src/app/content/pages/components/servicios/servicios.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], ServiciosComponent);
    return ServiciosComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/components/staff/staff.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/content/pages/components/staff/staff.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row  m-subheader\" style=\"background: rgb(250,249,247) !important;\r\n    padding: 20px !important;\r\ntext-align: left !important;\r\nborder-bottom: solid 1px lightgray;    display: block;\">\r\n\t\r\n\t<div class=\"\" style=\"display: inline-block;font-size: 30px;font-weight: 300;padding-left: 30px;\">Staff</div>\r\n\r\n\t<button  class=\"btn btn-success\" style=\"    margin-top: 3px;\r\n    float: right;\r\n    margin-right: 10px;\" \r\n\t\t[routerLink]=\"['/editservicio']\" \r\n\t\t[queryParams]=\"{id: 34}\" mat-raised-button color=\"primary\" matTooltip=\"Crear nuevo servicio\">Agregar miembro del Staff</button>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-4\" style=\"padding-right: 0px;    border-right: solid 1px lightgray;\" >\r\n\r\n\r\n\r\n<mat-nav-list style='padding-top: 0px '>\r\n  <mat-list-item [ngClass]=\"{'selectedItem': selected == 1}\" (click)=\"itemSelectedChange(1)\">\r\n    <img matListAvatar src=\"https://booksy.com/media/us/2015/11/23/21f309ce4859db0374e7fdb085bc776d_50x50.png\" >\r\n    <h3 matLine> Juan Ricardo Arguedas </h3>\r\n    <p matLine>\r\n      <span class=\"tagStaff\">MIEMBRO BASICO</span>\r\n \r\n    </p>\r\n  </mat-list-item>\r\n\r\n    <mat-list-item [ngClass]=\"{'selectedItem': selected == 2}\" (click)=\"itemSelectedChange(2)\">\r\n    <img matListAvatar src=\"https://booksy.com/media/us/2015/11/23/21f309ce4859db0374e7fdb085bc776d_50x50.png\" >\r\n    <h3 matLine> Maria Segura  </h3>\r\n    <p matLine>\r\n        <span class=\"tagStaff\">MIEMBRO ADMINISTRADOR</span>\r\n    </p>\r\n  </mat-list-item>\r\n\r\n      <mat-list-item [ngClass]=\"{'selectedItem': selected == 3}\" (click)=\"itemSelectedChange(3)\">\r\n    <img matListAvatar src=\"https://booksy.com/media/us/2015/11/23/21f309ce4859db0374e7fdb085bc776d_50x50.png\" >\r\n    <h3 matLine> Luisa Corrales </h3>\r\n    <p matLine>\r\n      <span class=\"tagStaff\">MIEMBRO ADMINISTRADOR</span>\r\n    </p>\r\n  </mat-list-item>\r\n\r\n\r\n\r\n</mat-nav-list>\r\n\r\n\r\n\r\n\r\n\t\t\t\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\r\n\r\n\t<div class=\"col-xl-8\" style=\"padding-left: 0px !important\">\r\n\r\n\t\t<div style=\"\">\r\n\t\t\t<div style=\"    border-bottom: solid 1px lightgray;font-size: 16px;font-weight: 400;line-height: 1.5;color: #383734;background: #fff;\">\r\n\t\t\t\t<div style=\"display: table-cell;padding: 0 10px;vertical-align: middle;\">\r\n\t\t\t\t\t<div style=\"font-size: 70px; width: 72px;min-height: 72px;\">\r\n\t\t\t\t\t\t <img  src=\"https://booksy.com/media/us/2015/11/23/21f309ce4859db0374e7fdb085bc776d_50x50.png\" style=\"border-radius: 50%;z-index: 1;position: relative;height: 70px;width: 70px;\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style=\"display: table-cell;padding: 0 10px;vertical-align: middle;    width: 100%;\">\r\n\t\t\t\t\t<div style=\"width: 100%;\">Hernry Morgan <span class=\"tagStaff\">MIEMBRO BASICO</span></div>\r\n\r\n\t\t\t\t\t<div style=\"display: block;vertical-align: top;\">\r\n\t\t\t\t\t\t\t\t\t\t<div style=\"float: right !important;display: inline-block; min-height: 1px;vertical-align: top; margin: 0;padding: 0;\">\r\n\t\t\t\t\t\t\t<button  \t[routerLink]=\"['/editstaff']\" \r\n\t\t class=\"btn btn-outline-success\" style=\"margin-top: 3px;float: right;margin-right: 10px;\"  mat-raised-button color=\"primary\" >Editar Perfil</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div style=\"float: right !important;display: inline-block; min-height: 1px;vertical-align: top; margin: 0;padding: 0;\">\r\n\t\t\t\t\t\t\t\t<button  class=\"btn btn-success\" style=\"margin-top: 3px;float: right;margin-right: 10px;\"  mat-raised-button color=\"primary\" >Nueva Reserva</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\r\n\t\t\t\t\t\t    \r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t<div class=\"m-section\" style=\"margin-top: 30px\">\r\n\t\t\t<div class=\"m-section__content\">\r\n\t\t\t\t<ngb-tabset>\r\n\t\t\t\t\t<ngb-tab title=\"Servicios\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t<div style=\"padding: 40px 60px; \">\r\n\t\t<div style=\"color:darkgray;font-size: 16px;font-weight: 500 !important;margin-bottom: 20px;\">\r\n\t\t\tElige los servicios que el empleado brinda</div>\r\n\t\t\t\t\t<div style=\"border: solid 1px lightgray;padding: 20px;\">\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<div class='tituloCateg'>Peluqueria</div>\r\n\t\t\t\t\t\t<div style=\"margin-bottom:3px;background: rgb(250,249,247);padding: 10px 10px;\" *ngFor=\"let item of [{nombre:'Corte y Estilo',precio:30},{nombre:'Lavado y tinte',precio:40}];  let i = index\">\r\n\t\t\t\t\t\t<mat-checkbox >\r\n\t\t\t\t\t\t\t<span class=\"txtF\">{{item.nombre}} / ${{item.precio}}.00</span></mat-checkbox>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class='tituloCateg'>Rostro y Cuerpo</div>\r\n\t\t\t\t\t\t<div style=\"margin-bottom:3px;background: rgb(250,249,247);padding: 10px 10px;\" *ngFor=\"let item of [{nombre:'Masaje espalda',precio:20}];  let i = index\">\r\n\t\t\t\t\t\t<mat-checkbox  >\r\n\t\t\t\t\t\t\t<span class=\"txtF\">{{item.nombre}} / ${{item.precio}}.00</span></mat-checkbox>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t<ngb-tab  title=\"Horario\">\r\n\t\t\t\t\t<ng-template ngbTabContent >\r\n\t\t\t\t\t\t<div style='padding: 30px 45px;'>\r\n\t\t\t\t\t\t<div style=\"margin-bottom:3px;background: white;padding: 0px 0px;\" *ngFor=\"let item of [{nombre:'Domingo'},{nombre:'Lunes'},{nombre:'Martes'}\r\n\t\t\t\t\t\t,{nombre:'Miercoles'},{nombre:'Jueves'},{nombre:'Viernes'},{nombre:'Sabado'}];  let i = index\">\r\n\t\t\t\t\t\t<mat-checkbox >\r\n\t\t\t\t\t\t\t<span class='labelBy' style='margin-bottom: 0px !important;'>{{item.nombre}}</span>\r\n\t\t\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t\t\t<div class=\"conteinInput\" style=\"margin-top: 20px\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div style=\"display: flex\">\r\n\r\n\t\t\t\t\t\t\t<mat-select class='inputBy w50'>\r\n\t\t\t\t\t\t\t<mat-option>None</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:55 AM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:55 AM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:55 AM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:55 AM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:55 AM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:00 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:05 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:10 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:15 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:20 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:25 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:30 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:35 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:40 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:45 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:50 AM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:55 AM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">12:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">01:55 PM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">02:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">03:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">04:55 PM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">05:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">06:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">07:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">08:55 PM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">09:55 PM</mat-option>\r\n\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">10:55 PM</mat-option>\r\n\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:00 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:05 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:10 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:15 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:20 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:25 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:30 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:35 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:40 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:45 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:50 PM</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">11:55 PM</mat-option>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t</mat-select>\r\n\r\n\t\t\t\t\t\t\t<mat-select class='inputBy w50'>\r\n\t\t\t\t\t\t\t<mat-option>None</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">Option 1</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option2\">Option 2</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option3\">Option 3</mat-option>\r\n\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-tab>\r\n\t\t\t\t\t<ngb-tab title=\"Dias Libres\" >\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\r\n\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-tab>\r\n\r\n\t\t\t\t\t<ngb-tab title=\"Detalle Contacto\" >\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\r\n\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ngb-tab>\r\n\r\n\t\t\t\t</ngb-tabset>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\r\n\r\n\t\t</div>\r\n<!-- \r\n\t\t<div style=\"    padding: 40px 60px;width: 100%\">\r\n\r\n\t\t\t\r\n\t</div> -->\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/content/pages/components/staff/staff.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/content/pages/components/staff/staff.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".txtF {\n  color: #383734;\n  font-size: 16px; }\n\n.tituloCateg {\n  font-size: 16px;\n  margin-bottom: 10px;\n  margin-top: 15px;\n  font-weight: 400; }\n\n.w50 {\n  display: flex;\n  width: 50%; }\n\ninput:focus {\n  outline: none !important;\n  border: 1px solid #34bfa3; }\n\n.inputBy {\n  color: #383734;\n  background: #fff;\n  border: 1px solid #e1e1e1;\n  border-radius: 4px;\n  min-height: 40px;\n  padding: 7px 10px;\n  resize: vertical;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\n.w100 {\n  display: block;\n  width: 100%; }\n\n.imgCheckBox {\n  height: 34px;\n  width: 34px;\n  border-radius: 20px;\n  margin: 5px 11px; }\n\n.conteinInput {\n  margin-bottom: 30px; }\n\n.labelBy {\n  display: inline-block;\n  margin-bottom: 10px;\n  font-size: 16px;\n  font-weight: 500 !important;\n  line-height: 1.5;\n  color: #383734; }\n\n.selectedItem {\n  background: dimgrey;\n  color: white; }\n\nmat-list-item:hover {\n  background: dimgrey !important;\n  color: white; }\n\nmat-list-item {\n  border-bottom: solid 1px lightgray; }\n\n.tagStaff {\n  color: #00beb7;\n  background: #e5f8f7;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 12px;\n  text-align: center;\n  text-transform: uppercase;\n  border-radius: 2px;\n  display: inline-block;\n  padding: 2px 10px;\n  min-width: 100px;\n  vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/content/pages/components/staff/staff.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/content/pages/components/staff/staff.component.ts ***!
  \*******************************************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
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

var StaffComponent = /** @class */ (function () {
    function StaffComponent() {
        this.typesOfShoes = ['Juan Mario', 'Clogs Leys', 'Loafers Ramires', 'Juana R', 'Ines Sacnes'];
        this.selected = 0;
    }
    StaffComponent.prototype.ngOnInit = function () {
    };
    StaffComponent.prototype.itemSelectedChange = function (i) {
        this.selected = i;
    };
    StaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-staff',
            template: __webpack_require__(/*! ./staff.component.html */ "./src/app/content/pages/components/staff/staff.component.html"),
            styles: [__webpack_require__(/*! ./staff.component.scss */ "./src/app/content/pages/components/staff/staff.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StaffComponent);
    return StaffComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/header/action/action.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/content/pages/header/action/action.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Portlet-->\r\n<div class=\"m-portlet\">\r\n\t<div class=\"m-portlet__head\">\r\n\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\tCreate A Post\r\n\t\t\t\t</h3>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--begin::Form-->\r\n\t<form class=\"m-form m-form--fit m-form--label-align-right\">\r\n\t\t<div class=\"m-portlet__body\">\r\n\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">Title</label>\r\n\t\t\t\t<div class=\"col-lg-7 col-md-7 col-sm-12\">\r\n\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter post title\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">Content</label>\r\n\t\t\t\t<div class=\"col-lg-7 col-md-7 col-sm-12\">\r\n\t\t\t\t\t<!-- @see https://github.com/kolkov/angular-editor -->\r\n\t\t\t\t\t<angular-editor name=\"htmlContent\" [(ngModel)]=\"htmlContent\" [config]=\"config\"></angular-editor>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n\t\t\t<div class=\"m-form__actions m-form__actions\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-9 ml-lg-auto\">\r\n\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-brand\">Submit</button>\r\n\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">Cancel</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\t<!--end::Form-->\r\n</div>\r\n<!--end::Portlet-->\r\n"

/***/ }),

/***/ "./src/app/content/pages/header/action/action.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/content/pages/header/action/action.component.ts ***!
  \*****************************************************************/
/*! exports provided: ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return ActionComponent; });
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

var ActionComponent = /** @class */ (function () {
    function ActionComponent() {
        this.htmlContent = '';
        this.config = {
            editable: true,
            spellcheck: true,
            height: '15rem',
            minHeight: '5rem',
            placeholder: 'Enter text here...',
            translate: 'no',
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ]
        };
    }
    ActionComponent.prototype.ngOnInit = function () {
    };
    ActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-action',
            template: __webpack_require__(/*! ./action.component.html */ "./src/app/content/pages/header/action/action.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ActionComponent);
    return ActionComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/header/profile/profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/content/pages/header/profile/profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-3 col-lg-4\">\r\n    <div class=\"m-portlet m-portlet--full-height\">\r\n      <div class=\"m-portlet__body\">\r\n        <div class=\"m-card-profile\">\r\n          <div class=\"m-card-profile__title m--hide\">\r\n            Your Profile\r\n          </div>\r\n          <div class=\"m-card-profile__pic\">\r\n            <div class=\"m-card-profile__pic-wrapper\">\r\n              <img src=\"assets/app/media/img/userB.png\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"m-card-profile__details\">\r\n            <span class=\"m-card-profile__name\">Mark Andre</span>\r\n            <a href=\"\" class=\"m-card-profile__email m-link\">mark.andre@gmail.com</a>\r\n          </div>\r\n        </div>\r\n        <ul class=\"m-nav m-nav--hover-bg m-portlet-fit--sides\">\r\n         <!--  <li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n          <li class=\"m-nav__section m--hide\">\r\n            <span class=\"m-nav__section-text\">Section</span>\r\n          </li>\r\n          <li class=\"m-nav__item\">\r\n            <a href=\"?page=header/profile&amp;demo=default\" class=\"m-nav__link\">\r\n              <i class=\"m-nav__link-icon flaticon-profile-1\"></i>\r\n              <span class=\"m-nav__link-title\">\r\n                  <span class=\"m-nav__link-wrap\">\r\n                      <span class=\"m-nav__link-text\">My Profile</span>\r\n                      <span class=\"m-nav__link-badge\">\r\n                          <span class=\"m-badge m-badge--success\">2</span>\r\n                      </span>\r\n                  </span>\r\n              </span>\r\n            </a>\r\n          </li>\r\n          <li class=\"m-nav__item\">\r\n            <a href=\"?page=header/profile&amp;demo=default\" class=\"m-nav__link\">\r\n              <i class=\"m-nav__link-icon flaticon-share\"></i>\r\n              <span class=\"m-nav__link-text\">Activity</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"m-nav__item\">\r\n            <a href=\"?page=header/profile&amp;demo=default\" class=\"m-nav__link\">\r\n              <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n              <span class=\"m-nav__link-text\">Messages</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"m-nav__item\">\r\n            <a href=\"?page=header/profile&amp;demo=default\" class=\"m-nav__link\">\r\n              <i class=\"m-nav__link-icon flaticon-graphic-2\"></i>\r\n              <span class=\"m-nav__link-text\">Sales</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"m-nav__item\">\r\n            <a href=\"?page=header/profile&amp;demo=default\" class=\"m-nav__link\">\r\n              <i class=\"m-nav__link-icon flaticon-time-3\"></i>\r\n              <span class=\"m-nav__link-text\">Events</span>\r\n            </a>\r\n          </li> -->\r\n          <li class=\"m-nav__item\">\r\n            <a href=\"?page=header/profile&amp;demo=default\" class=\"m-nav__link\">\r\n              <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n              <span class=\"m-nav__link-text\">Support</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <div class=\"m-portlet__body-separator\"></div>\r\n        <div class=\"m-widget1 m-widget1--paddingless\">\r\n          <div class=\"m-widget1__item\">\r\n            <div class=\"row m-row--no-padding align-items-center\">\r\n              <div class=\"col\">\r\n                <h3 class=\"m-widget1__title\">Member Profit</h3>\r\n                <span class=\"m-widget1__desc\">Awerage Weekly Profit</span>\r\n              </div>\r\n              <div class=\"col m--align-right\">\r\n                <span class=\"m-widget1__number m--font-brand\">+$17,800</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"m-widget1__item\">\r\n            <div class=\"row m-row--no-padding align-items-center\">\r\n              <div class=\"col\">\r\n                <h3 class=\"m-widget1__title\">Orders</h3>\r\n                <span class=\"m-widget1__desc\">Weekly Customer Orders</span>\r\n              </div>\r\n              <div class=\"col m--align-right\">\r\n                <span class=\"m-widget1__number m--font-danger\">+1,800</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"m-widget1__item\">\r\n            <div class=\"row m-row--no-padding align-items-center\">\r\n              <div class=\"col\">\r\n                <h3 class=\"m-widget1__title\">Issue Reports</h3>\r\n                <span class=\"m-widget1__desc\">System bugs and issues</span>\r\n              </div>\r\n              <div class=\"col m--align-right\">\r\n                <span class=\"m-widget1__number m--font-success\">-27,49%</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl-9 col-lg-8\">\r\n    <div class=\"m-portlet m-portlet--full-height m-portlet--tabs  \">\r\n      <div class=\"m-portlet__head\">\r\n        <div class=\"m-portlet__head-tools\">\r\n        </div>\r\n        <div class=\"m-portlet__head-tools\">\r\n          <ul class=\"m-portlet__nav\">\r\n            <li class=\"m-portlet__nav-item m-portlet__nav-item--last\">\r\n              <div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" m-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n                <a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\r\n                  <i class=\"la la-gear\"></i>\r\n                </a>\r\n                <div class=\"m-dropdown__wrapper\" style=\"z-index: 101;\">\r\n                  <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 21.5px;\"></span>\r\n                  <div class=\"m-dropdown__inner\">\r\n                    <div class=\"m-dropdown__body\">\r\n                      <div class=\"m-dropdown__content\">\r\n                        <ul class=\"m-nav\">\r\n                          <li class=\"m-nav__section m-nav__section--first\">\r\n                            <span class=\"m-nav__section-text\">Quick Actions</span>\r\n                          </li>\r\n                          <li class=\"m-nav__item\">\r\n                            <a href=\"\" class=\"m-nav__link\">\r\n                              <i class=\"m-nav__link-icon flaticon-share\"></i>\r\n                              <span class=\"m-nav__link-text\">Create Post</span>\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"m-nav__item\">\r\n                            <a href=\"\" class=\"m-nav__link\">\r\n                              <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n                              <span class=\"m-nav__link-text\">Send Messages</span>\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"m-nav__item\">\r\n                            <a href=\"\" class=\"m-nav__link\">\r\n                              <i class=\"m-nav__link-icon flaticon-multimedia-2\"></i>\r\n                              <span class=\"m-nav__link-text\">Upload File</span>\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"m-nav__section\">\r\n                            <span class=\"m-nav__section-text\">Useful Links</span>\r\n                          </li>\r\n                          <li class=\"m-nav__item\">\r\n                            <a href=\"\" class=\"m-nav__link\">\r\n                              <i class=\"m-nav__link-icon flaticon-info\"></i>\r\n                              <span class=\"m-nav__link-text\">FAQ</span>\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"m-nav__item\">\r\n                            <a href=\"\" class=\"m-nav__link\">\r\n                              <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n                              <span class=\"m-nav__link-text\">Support</span>\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"m-nav__separator m-nav__separator--fit m--hide\"></li>\r\n                          <li class=\"m-nav__item m--hide\">\r\n                            <a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">Submit</a>\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"m-portlet__body\">\r\n        <form class=\"m-form m-form--fit m-form--label-align-right\">\r\n          <div class=\"m-portlet__body\">\r\n            <div class=\"form-group m-form__group m--margin-top-10 m--hide\">\r\n              <div class=\"alert m-alert m-alert--default\" role=\"alert\">\r\n                The example form below demonstrates common HTML form elements that receive updated styles from Bootstrap with additional classes.\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <div class=\"col-10 ml-auto\">\r\n                <h3 class=\"m-form__section\">1. Personal Details</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-2 col-form-label\">Full Name</label>\r\n              <div class=\"col-7\">\r\n                <input class=\"form-control m-input\" type=\"text\" value=\"Mark Andre\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-2 col-form-label\">Occupation</label>\r\n              <div class=\"col-7\">\r\n                <input class=\"form-control m-input\" type=\"text\" value=\"CTO\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-2 col-form-label\">Company Name</label>\r\n              <div class=\"col-7\">\r\n                <input class=\"form-control m-input\" type=\"text\" value=\"Keenthemes\">\r\n                <span class=\"m-form__help\">If you want your invoices addressed to a company. Leave blank to use your full name.</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-2 col-form-label\">Phone No.</label>\r\n              <div class=\"col-7\">\r\n                <input class=\"form-control m-input\" type=\"text\" value=\"+456669067890\">\r\n              </div>\r\n            </div>\r\n            <div class=\"m-form__seperator m-form__seperator--dashed m-form__seperator--space-2x\"></div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <div class=\"col-10 ml-auto\">\r\n                <h3 class=\"m-form__section\">2. Address</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-2 col-form-label\">Address</label>\r\n              <div class=\"col-7\">\r\n                <input class=\"form-control m-input\" type=\"text\" value=\"L-12-20 Vertex, Cybersquare\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-2 col-form-label\">City</label>\r\n              <div class=\"col-7\">\r\n                <input class=\"form-control m-input\" type=\"text\" value=\"San Francisco\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-2 col-form-label\">State</label>\r\n              <div class=\"col-7\">\r\n                <input class=\"form-control m-input\" type=\"text\" value=\"California\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-2 col-form-label\">Postcode</label>\r\n              <div class=\"col-7\">\r\n                <input class=\"form-control m-input\" type=\"text\" value=\"45000\">\r\n              </div>\r\n            </div>\r\n            <div class=\"m-form__seperator m-form__seperator--dashed m-form__seperator--space-2x\"></div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <div class=\"col-10 ml-auto\">\r\n                <h3 class=\"m-form__section\">3. Social Links</h3>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-2 col-form-label\">Linkedin</label>\r\n              <div class=\"col-7\">\r\n                <input class=\"form-control m-input\" type=\"text\" value=\"www.linkedin.com/Mark.Andre\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-2 col-form-label\">Facebook</label>\r\n              <div class=\"col-7\">\r\n                <input class=\"form-control m-input\" type=\"text\" value=\"www.facebook.com/Mark.Andre\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-2 col-form-label\">Twitter</label>\r\n              <div class=\"col-7\">\r\n                <input class=\"form-control m-input\" type=\"text\" value=\"www.twitter.com/Mark.Andre\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-2 col-form-label\">Instagram</label>\r\n              <div class=\"col-7\">\r\n                <input class=\"form-control m-input\" type=\"text\" value=\"www.instagram.com/Mark.Andre\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n            <div class=\"m-form__actions\">\r\n              <div class=\"row\">\r\n                <div class=\"col-2\"></div>\r\n                <div class=\"col-7\">\r\n                  <button type=\"reset\" class=\"btn btn-accent m-btn m-btn--air m-btn--custom\">Save changes</button>&nbsp;&nbsp;\r\n\r\n                  <button type=\"reset\" class=\"btn btn-secondary m-btn m-btn--air m-btn--custom\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/content/pages/header/profile/profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/content/pages/header/profile/profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/content/pages/header/profile/profile.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/pages-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/content/pages/pages-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/content/pages/pages.component.ts");
/* harmony import */ var _header_action_action_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/action/action.component */ "./src/app/content/pages/header/action/action.component.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/profile/profile.component */ "./src/app/content/pages/header/profile/profile.component.ts");
/* harmony import */ var _snippets_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snippets/error-page/error-page.component */ "./src/app/content/pages/snippets/error-page/error-page.component.ts");
/* harmony import */ var _components_inner_inner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inner/inner.component */ "./src/app/content/pages/components/inner/inner.component.ts");
/* harmony import */ var _components_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/servicios/servicios.component */ "./src/app/content/pages/components/servicios/servicios.component.ts");
/* harmony import */ var _components_editservicio_editservicio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/editservicio/editservicio.component */ "./src/app/content/pages/components/editservicio/editservicio.component.ts");
/* harmony import */ var _components_agregaroferta_agregaroferta_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/agregaroferta/agregaroferta.component */ "./src/app/content/pages/components/agregaroferta/agregaroferta.component.ts");
/* harmony import */ var _components_staff_staff_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/staff/staff.component */ "./src/app/content/pages/components/staff/staff.component.ts");
/* harmony import */ var _components_editstaff_editstaff_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/editstaff/editstaff.component */ "./src/app/content/pages/components/editstaff/editstaff.component.ts");
/* harmony import */ var _components_perfilnegocio_perfilnegocio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/perfilnegocio/perfilnegocio.component */ "./src/app/content/pages/components/perfilnegocio/perfilnegocio.component.ts");
/* harmony import */ var _components_horario_horario_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/horario/horario.component */ "./src/app/content/pages/components/horario/horario.component.ts");
/* harmony import */ var _components_estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/estadistica/estadistica.component */ "./src/app/content/pages/components/estadistica/estadistica.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        // Remove comment to enable login
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsGuard"]],
        data: {
            permissions: {
                only: ['ADMIN', 'USER'],
                except: ['GUEST'],
                redirectTo: '/login'
            }
        },
        children: [
            {
                path: '',
                loadChildren: './components/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'servicios',
                component: _components_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_8__["ServiciosComponent"]
            },
            {
                path: 'horario',
                component: _components_horario_horario_component__WEBPACK_IMPORTED_MODULE_14__["HorarioComponent"]
            },
            {
                path: 'staff',
                component: _components_staff_staff_component__WEBPACK_IMPORTED_MODULE_11__["StaffComponent"]
            }, {
                path: 'estadistica',
                component: _components_estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_15__["EstadisticaComponent"]
            },
            {
                path: 'perfilnegocio',
                component: _components_perfilnegocio_perfilnegocio_component__WEBPACK_IMPORTED_MODULE_13__["PerfilnegocioComponent"]
            },
            {
                path: 'editstaff',
                component: _components_editstaff_editstaff_component__WEBPACK_IMPORTED_MODULE_12__["EditstaffComponent"]
            },
            {
                path: 'editservicio',
                component: _components_editservicio_editservicio_component__WEBPACK_IMPORTED_MODULE_9__["EditservicioComponent"]
            },
            {
                path: 'agregaroferta',
                component: _components_agregaroferta_agregaroferta_component__WEBPACK_IMPORTED_MODULE_10__["AgregarofertaComponent"]
            },
            {
                path: 'builder',
                loadChildren: './builder/builder.module#BuilderModule'
            },
            {
                path: 'header/actions',
                component: _header_action_action_component__WEBPACK_IMPORTED_MODULE_3__["ActionComponent"]
            },
            {
                path: 'profile',
                component: _header_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
            },
            {
                path: 'inner',
                component: _components_inner_inner_component__WEBPACK_IMPORTED_MODULE_7__["InnerComponent"]
            },
        ]
    },
    {
        path: 'login',
        // canActivate: [NgxPermissionsGuard],
        loadChildren: './auth/auth.module#AuthModule',
        data: {
            permissions: {
                except: 'ADMIN'
            }
        },
    },
    {
        path: '404',
        component: _snippets_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"]
    },
    {
        path: 'error/:type',
        component: _snippets_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"]
    },
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/content/pages/pages.component.html":
/*!****************************************************!*\
  !*** ./src/app/content/pages/pages.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin:: Page -->\r\n<ng-container  *ngIf=\"selfLayout !== 'blank' ; else selfLayoutBlank\">\r\n\t<m-header></m-header>\r\n\r\n\t<!-- begin::Body -->\r\n\t<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body\" [ngClass]=\"pageBodyClass$ | async\">\r\n\t\t<!-- BEGIN:: Aside Left -->\r\n\t\t<button class=\"m-aside-left-close\" id=\"m_aside_left_close_btn\" [ngClass]=\"asideLeftCloseClass | mJoin\">\r\n\t\t\t<i class=\"la la-close\"></i>\r\n\t\t</button>\r\n\t\t<ng-container *ngIf=\"asideLeftDisplay\">\r\n\t\t\t<m-aside-left></m-aside-left>\r\n\t\t</ng-container>\r\n\t\t<!-- END:: Aside Left -->\r\n\r\n\t\t<div #mContentWrapper class=\"m-grid__item m-grid__item--fluid m-wrapper\" style=\"margin-bottom: 0px !important\">\r\n\t\t\t<!-- <m-subheader></m-subheader> -->\r\n\t\t\t<div class=\"\" #mContent>\r\n\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<ng-container *ngIf=\"asideRightDisplay\">\r\n\t\t\t<m-aside-right ></m-aside-right>\r\n\t\t</ng-container>\r\n\t</div>\r\n\t<!-- end:: Body -->\r\n\r\n\t<!-- <m-footer></m-footer> -->\r\n<!--\t<m-quick-sidebar></m-quick-sidebar>\r\n \t<m-tooltips></m-tooltips> \r\n\t<m-scroll-top></m-scroll-top>-->\r\n</ng-container>\r\n\r\n<ng-template #selfLayoutBlank>\r\n\t<router-outlet></router-outlet>\r\n</ng-template>\r\n<!-- end:: Page -->\r\n"

/***/ }),

/***/ "./src/app/content/pages/pages.component.ts":
/*!**************************************************!*\
  !*** ./src/app/content/pages/pages.component.ts ***!
  \**************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_services_layout_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/layout-config.service */ "./src/app/core/services/layout-config.service.ts");
/* harmony import */ var _core_services_class_init_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/class-init.service */ "./src/app/core/services/class-init.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_layout_layout_ref_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/layout/layout-ref.service */ "./src/app/core/services/layout/layout-ref.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/services/translation.service */ "./src/app/core/services/translation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PagesComponent = /** @class */ (function () {
    function PagesComponent(el, configService, classInitService, router, layoutRefService, animationBuilder, translationService) {
        var _this = this;
        this.el = el;
        this.configService = configService;
        this.classInitService = classInitService;
        this.router = router;
        this.layoutRefService = layoutRefService;
        this.animationBuilder = animationBuilder;
        this.translationService = translationService;
        this.classes = 'm-grid m-grid--hor m-grid--root m-page';
        this.selfLayout = 'blank';
        // class for the header container
        this.pageBodyClass$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        this.configService.onLayoutConfigUpdated$.subscribe(function (model) {
            var config = model.config;
            var pageBodyClass = '';
            _this.selfLayout = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](config, 'self.layout');
            if (_this.selfLayout === 'boxed' || _this.selfLayout === 'wide') {
                pageBodyClass += ' m-container m-container--responsive m-container--xxl m-page__container';
            }
            _this.pageBodyClass$.next(pageBodyClass);
            _this.asideLeftDisplay = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](config, 'aside.left.display');
            _this.asideRightDisplay = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](config, 'aside.right.display');
        });
        this.classInitService.onClassesUpdated$.subscribe(function (classes) {
            _this.asideLeftCloseClass = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](classes, 'aside_left_close');
        });
        // animate page load
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
                if (_this.contenWrapper) {
                    // hide content
                    _this.contenWrapper.nativeElement.style.display = 'none';
                }
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                if (_this.contenWrapper) {
                    // show content back
                    _this.contenWrapper.nativeElement.style.display = '';
                    // animate the content
                    _this.animate(_this.contenWrapper.nativeElement);
                }
            }
        });
    }
    PagesComponent.prototype.ngOnInit = function () { };
    PagesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.mContent) {
                // keep content element in the service
                _this.layoutRefService.addElement('content', _this.mContent.nativeElement);
            }
        });
    };
    /**
     * Animate page load
     */
    PagesComponent.prototype.animate = function (element) {
        this.player = this.animationBuilder
            .build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0, transform: 'translateY(15px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('500ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1, transform: 'translateY(0)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ transform: 'none' }),
        ])
            .create(element);
        this.player.play();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "classes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "selfLayout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "asideLeftDisplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "asideRightDisplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "asideLeftCloseClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mContentWrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PagesComponent.prototype, "contenWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PagesComponent.prototype, "mContent", void 0);
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'm-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/content/pages/pages.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _core_services_layout_config_service__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"],
            _core_services_class_init_service__WEBPACK_IMPORTED_MODULE_4__["ClassInitService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _core_services_layout_layout_ref_service__WEBPACK_IMPORTED_MODULE_6__["LayoutRefService"],
            _angular_animations__WEBPACK_IMPORTED_MODULE_7__["AnimationBuilder"],
            _core_services_translation_service__WEBPACK_IMPORTED_MODULE_8__["TranslationService"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/content/pages/pages.module.ts":
/*!***********************************************!*\
  !*** ./src/app/content/pages/pages.module.ts ***!
  \***********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/content/layout/layout.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/content/pages/pages-routing.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.component */ "./src/app/content/pages/pages.component.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../partials/partials.module */ "./src/app/content/partials/partials.module.ts");
/* harmony import */ var _header_action_action_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/action/action.component */ "./src/app/content/pages/header/action/action.component.ts");
/* harmony import */ var _header_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/profile/profile.component */ "./src/app/content/pages/header/profile/profile.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _snippets_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./snippets/error-page/error-page.component */ "./src/app/content/pages/snippets/error-page/error-page.component.ts");
/* harmony import */ var _components_inner_inner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/inner/inner.component */ "./src/app/content/pages/components/inner/inner.component.ts");
/* harmony import */ var _components_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/servicios/servicios.component */ "./src/app/content/pages/components/servicios/servicios.component.ts");
/* harmony import */ var _components_editservicio_editservicio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/editservicio/editservicio.component */ "./src/app/content/pages/components/editservicio/editservicio.component.ts");
/* harmony import */ var _components_agregaroferta_agregaroferta_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/agregaroferta/agregaroferta.component */ "./src/app/content/pages/components/agregaroferta/agregaroferta.component.ts");
/* harmony import */ var _components_staff_staff_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/staff/staff.component */ "./src/app/content/pages/components/staff/staff.component.ts");
/* harmony import */ var _components_editstaff_editstaff_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/editstaff/editstaff.component */ "./src/app/content/pages/components/editstaff/editstaff.component.ts");
/* harmony import */ var _components_perfilnegocio_perfilnegocio_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/perfilnegocio/perfilnegocio.component */ "./src/app/content/pages/components/perfilnegocio/perfilnegocio.component.ts");
/* harmony import */ var _components_horario_horario_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/horario/horario.component */ "./src/app/content/pages/components/horario/horario.component.ts");
/* harmony import */ var _components_estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/estadistica/estadistica.component */ "./src/app/content/pages/components/estadistica/estadistica.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"],
                _header_action_action_component__WEBPACK_IMPORTED_MODULE_6__["ActionComponent"],
                _header_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _snippets_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__["ErrorPageComponent"],
                _components_inner_inner_component__WEBPACK_IMPORTED_MODULE_12__["InnerComponent"],
                _components_servicios_servicios_component__WEBPACK_IMPORTED_MODULE_13__["ServiciosComponent"],
                _components_editservicio_editservicio_component__WEBPACK_IMPORTED_MODULE_14__["EditservicioComponent"],
                _components_agregaroferta_agregaroferta_component__WEBPACK_IMPORTED_MODULE_15__["AgregarofertaComponent"],
                _components_staff_staff_component__WEBPACK_IMPORTED_MODULE_16__["StaffComponent"],
                _components_editstaff_editstaff_component__WEBPACK_IMPORTED_MODULE_17__["EditstaffComponent"],
                _components_perfilnegocio_perfilnegocio_component__WEBPACK_IMPORTED_MODULE_18__["PerfilnegocioComponent"],
                _components_horario_horario_component__WEBPACK_IMPORTED_MODULE_19__["HorarioComponent"], _components_estadistica_estadistica_component__WEBPACK_IMPORTED_MODULE_20__["EstadisticaComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_9__["AngularEditorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_21__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAT-tTbOja69paXaiAgAtNi9nGHRh75bzk',
                    libraries: ['geometry', 'places']
                })
            ],
            providers: []
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/content/pages/snippets/error-page/error-page.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/content/pages/snippets/error-page/error-page.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorType === 1\" class=\"m-grid__item m-grid__item--fluid m-grid m-error-1\" style=\"background-image: url(./assets/app/media/img/error/bg1.jpg);\">\r\n\t<div class=\"m-error_container\">\r\n\t\t<span class=\"m-error_number\">\r\n\t\t\t<h1>404</h1>\r\n\t\t</span>\r\n\t\t<p class=\"m-error_desc\">\r\n\t\t\tOOPS! Something went wrong here\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n\r\n<div *ngIf=\"errorType === 2\" class=\"m-grid__item m-grid__item--fluid m-grid m-error-2\" style=\"background-image: url(./assets/app/media/img/error/bg2.jpg);\">\r\n\t<div class=\"m-error_container\">\r\n\t\t<span class=\"m-error_title2 m--font-light\">\r\n\t\t\t<h1>OOPS!</h1>\r\n\t\t</span>\r\n\t\t<span class=\"m-error_desc m--font-light\">\r\n\t\t\tSomething went wrong here\r\n\t\t</span>\r\n\t</div>\r\n</div>\r\n\r\n<div *ngIf=\"errorType === 3\" class=\"m-grid__item m-grid__item--fluid m-grid m-error-3\" style=\"background-image: url(./assets/app/media/img/error/bg3.jpg);\">\r\n\t<div class=\"m-error_container\">\r\n\t\t<span class=\"m-error_number\">\r\n\t\t\t<h1>404</h1>\r\n\t\t</span>\r\n\t\t<p class=\"m-error_title m--font-light\">\r\n\t\t\tHow did you get here\r\n\t\t</p>\r\n\t\t<p class=\"m-error_subtitle\">\r\n\t\t\tSorry we can't seem to find the page you're looking for.\r\n\t\t</p>\r\n\t\t<p class=\"m-error_description\">\r\n\t\t\tThere may be amisspelling in the URL entered,<br>\r\n\t\t\tor the page you are looking for may no longer exist.\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n\r\n<div *ngIf=\"errorType === 4\" class=\"m-grid__item m-grid__item--fluid m-grid m-error-4\" style=\"background-image: url(./assets/app/media/img/error/bg4.jpg);\">\r\n\t<div class=\"m-error_container\">\r\n\t\t<h1 class=\"m-error_number\">\r\n\t\t\t404\r\n\t\t</h1>\r\n\t\t<p class=\"m-error_title\">\r\n\t\t\tERROR\r\n\t\t</p>\r\n\t\t<p class=\"m-error_description\">\r\n\t\t\tNothing left to do here.\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n\r\n<div *ngIf=\"errorType === 5\" class=\"m-grid__item m-grid__item--fluid m-grid m-error-5\" style=\"background-image: url(./assets/app/media/img/error/bg5.jpg);\">\r\n\t<div class=\"m-error_container\">\r\n\t\t<span class=\"m-error_title\">\r\n\t\t\t<h1>Oops!</h1>\r\n\t\t</span>\r\n\t\t<p class=\"m-error_subtitle\">\r\n\t\t\tSomething went wrong here.\r\n\t\t</p>\r\n\t\t<p class=\"m-error_description\">\r\n\t\t\tWe're working on it and we'll get it fixed<br>\r\n\t\t\tas soon possible.<br>\r\n\t\t\tYou can back or use our Help Center.\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n\r\n<div *ngIf=\"errorType === 6\" class=\"m-grid__item m-grid__item--fluid m-grid m-error-6\" style=\"background-image: url(./assets/app/media/img/error/bg6.jpg);\">\r\n\t<div class=\"m-error_container\">\r\n\t\t<div class=\"m-error_subtitle m--font-light\">\r\n\t\t\t<h1>Oops...</h1>\r\n\t\t</div>\r\n\t\t<p class=\"m-error_description m--font-light\">\r\n\t\t\tLooks like something went wrong.\r\n\t\t\t<br> We're working on it\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/pages/snippets/error-page/error-page.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/content/pages/snippets/error-page/error-page.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/pages/snippets/error-page/error-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/snippets/error-page/error-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent(route) {
        this.route = route;
        this.classes = 'm-grid m-grid--hor m-grid--root m-page';
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
        this.errorType = +this.route.snapshot.paramMap.get('type');
        if (!this.errorType) {
            this.errorType = Math.floor((Math.random() * 6) + 1);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], ErrorPageComponent.prototype, "classes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ErrorPageComponent.prototype, "errorType", void 0);
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'm-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/content/pages/snippets/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/content/pages/snippets/error-page/error-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-content-pages-pages-module.js.map