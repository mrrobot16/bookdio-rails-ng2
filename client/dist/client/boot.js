webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _dec, _class;

	__webpack_require__(1);

	__webpack_require__(5);

	__webpack_require__(21);

	var _platformBrowserDynamic = __webpack_require__(29);

	var _platformBrowser = __webpack_require__(35);

	var _core = __webpack_require__(31);

	var _http = __webpack_require__(37);

	var _router = __webpack_require__(38);

	var _forms = __webpack_require__(63);

	var _app = __webpack_require__(65);

	var _core2 = __webpack_require__(68);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppModule = (_dec = (0, _core.NgModule)({
	  declarations: [_core2.CORE_DECLARATIONS],
	  imports: [_http.HttpModule, _platformBrowser.BrowserModule, _forms.FormsModule, _forms.ReactiveFormsModule, _router.RouterModule.forRoot(_app.routes, {
	    useHash: true
	  })],
	  providers: [_core2.CORE_PROVIDERS, { provide: 'ENVIRONMENT', useValue: ("development") }],
	  bootstrap: [_core2.AppComponent]
	}), _dec(_class = function AppModule() {
	  _classCallCheck(this, AppModule);
	}) || _class);


	(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(AppModule);

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(6);
	var mergeMap_1 = __webpack_require__(22);
	Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
	Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
	//# sourceMappingURL=mergeMap.js.map

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routes = undefined;

	var _book = __webpack_require__(66);

	var routes = exports.routes = [{ path: '', component: _book.BookComponent, pathMatch: 'full' }, { path: 'books', component: _book.BookComponent }];

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BookComponent = undefined;

	var _dec, _class;

	var _core = __webpack_require__(31);

	var _bookComponent = __webpack_require__(67);

	var _bookComponent2 = _interopRequireDefault(_bookComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BookComponent = exports.BookComponent = (_dec = (0, _core.Component)({
	  selector: 'books',
	  template: _bookComponent2.default,
	  styleUrls: ['css/book.css']
	}), _dec(_class = function BookComponent() {
	  _classCallCheck(this, BookComponent);
	}) || _class);

/***/ },

/***/ 67:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <h1>Welcome to our Book Recommendations</h1>\n        <p class=\"lead underlined\">Our Favorite books</p>\n        <ul>\n\n        </ul>\n    </div>\n</div>\n"

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CORE_DECLARATIONS = exports.CORE_PROVIDERS = exports.AppComponent = undefined;

	var _book = __webpack_require__(66);

	var _app = __webpack_require__(69);

	exports.AppComponent = _app.AppComponent;
	var CORE_PROVIDERS = exports.CORE_PROVIDERS = [];
	var CORE_DECLARATIONS = exports.CORE_DECLARATIONS = [_book.BookComponent, _app.AppComponent];

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AppComponent = undefined;

	var _dec, _class;

	var _core = __webpack_require__(31);

	var _appTemplate = __webpack_require__(70);

	var _appTemplate2 = _interopRequireDefault(_appTemplate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppComponent = exports.AppComponent = (_dec = (0, _core.Component)({
	  selector: 'my-app',
	  template: _appTemplate2.default
	}), _dec(_class = function AppComponent() {
	  _classCallCheck(this, AppComponent);
	}) || _class);

/***/ },

/***/ 70:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container body-container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }

});
//# sourceMappingURL=boot.js.map