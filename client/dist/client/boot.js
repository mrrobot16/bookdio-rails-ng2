webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _dec, _class;

	__webpack_require__(1);

	__webpack_require__(5);

	var _platformBrowserDynamic = __webpack_require__(21);

	var _platformBrowser = __webpack_require__(27);

	var _core = __webpack_require__(23);

	var _http = __webpack_require__(29);

	var _router = __webpack_require__(30);

	var _forms = __webpack_require__(62);

	var _app = __webpack_require__(64);

	var _core2 = __webpack_require__(71);

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

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routes = undefined;

	var _book = __webpack_require__(65);

	var routes = exports.routes = [{ path: '', component: _book.BookComponent, pathMatch: 'full' }, { path: 'books', component: _book.BookComponent }];

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReturnMonthYearPipe = exports.BookComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _dec2, _class3;

	var _core = __webpack_require__(23);

	var _book_form = __webpack_require__(66);

	var _book = __webpack_require__(67);

	var _bookComponent = __webpack_require__(70);

	var _bookComponent2 = _interopRequireDefault(_bookComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BookComponent = exports.BookComponent = (_dec = (0, _core.Component)({
	  selector: 'books',
	  template: _bookComponent2.default,
	  styleUrls: ['./css/book.css']
	}), _dec(_class = function () {
	  function BookComponent(book_service) {
	    _classCallCheck(this, BookComponent);

	    this.books = [];

	    this.book_service = book_service;
	    this.book_id = 0;
	  }

	  _createClass(BookComponent, [{
	    key: 'ngOnInit',
	    value: function ngOnInit() {
	      this.dispayBooks();
	    }
	  }, {
	    key: 'dispayBooks',
	    value: function dispayBooks() {
	      var _this = this;

	      var books = this.book_service.getBooks();
	      books.subscribe(function (books) {
	        _this.books = books;
	      }, this.logError);
	    }
	  }, {
	    key: 'selectBookID',
	    value: function selectBookID(event) {
	      console.log("selectBookID");
	      this.book_id = parseInt(event.target.parentNode.id);
	    }
	  }, {
	    key: 'logError',
	    value: function logError(error) {
	      console.log("error: ", error);
	    }
	  }]);

	  return BookComponent;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_book.BookService], BookComponent);
	var ReturnMonthYearPipe = exports.ReturnMonthYearPipe = (_dec2 = (0, _core.Pipe)({ name: 'returnMonthYear' }), _dec2(_class3 = function () {
	  function ReturnMonthYearPipe() {
	    _classCallCheck(this, ReturnMonthYearPipe);
	  }

	  _createClass(ReturnMonthYearPipe, [{
	    key: 'transform',
	    value: function transform(date) {
	      "Oct 1, 2009";

	      return date.slice(0, 4) + date.substr(date.length - 4);
	    }
	  }]);

	  return ReturnMonthYearPipe;
	}()) || _class3);

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BookFormComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

	var _core = __webpack_require__(23);

	var _forms = __webpack_require__(62);

	var _book = __webpack_require__(67);

	__webpack_require__(68);

	var _book_formPartial = __webpack_require__(69);

	var _book_formPartial2 = _interopRequireDefault(_book_formPartial);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _initDefineProp(target, property, descriptor, context) {
	  if (!descriptor) return;
	  Object.defineProperty(target, property, {
	    enumerable: descriptor.enumerable,
	    configurable: descriptor.configurable,
	    writable: descriptor.writable,
	    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	  });
	}

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
	  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var BookFormComponent = exports.BookFormComponent = (_dec = (0, _core.Component)({
	  selector: 'book-form',
	  template: _book_formPartial2.default,
	  styleUrls: ['./css/book.css']
	}), _dec2 = (0, _core.Input)(), _dec(_class = (_class2 = function () {
	  function BookFormComponent(book_service, builder) {
	    _classCallCheck(this, BookFormComponent);

	    _initDefineProp(this, 'book_id', _descriptor, this);

	    this.book_service = book_service;
	    this.builder = builder;
	  }

	  _createClass(BookFormComponent, [{
	    key: 'ngOnInit',
	    value: function ngOnInit() {
	      this.now = new Date().getMonth();
	      this.property_names = [];
	      this.current_property_names = [];
	      this.editMode = false;
	      this.toggleShow = 'hideForm';
	      this.bookForm = this.builder.group({
	        book_name: ['The Hard Thing About Hard Things'],
	        author_name: ['Ben Horowitz'],
	        isbn_code: ['978-1-26310-644-4'],
	        book_quantity: [1],
	        published_date: [this.now],
	        book_category: ['Leadership']
	      });
	    }
	  }, {
	    key: 'property_names_array',
	    value: function property_names_array() {
	      if (this.current_property_names.length > 0) {
	        return this.current_property_names;
	      } else {
	        this.property_names = [];
	        for (var book_property in this.bookForm.root.value) {
	          this.property_names.push(book_property);
	        }
	        return this.property_names;
	      }
	    }
	  }, {
	    key: 'toggleDisabled',
	    value: function toggleDisabled(status) {
	      var _this = this;

	      this.status = status;
	      if (this.status == "off") {
	        this.current_property_names = this.property_names_array().filter(function (book) {
	          return book != "book_quantity";
	        });
	        this.current_property_names.forEach(function (inputs) {
	          _this.bookForm.root.get(inputs).disable();
	        });
	      }
	      if (this.status == "on") {
	        this.current_property_names = this.property_names_array().filter(function (book) {
	          return book;
	        });
	        this.current_property_names.forEach(function (inputs) {
	          _this.bookForm.root.get(inputs).enable();
	        });
	      }
	    }
	  }, {
	    key: 'showForm',
	    value: function showForm() {
	      var book_id = this.book_id;
	      console.log("this.book_id: ", this.book_id);
	      console.log("this.editMode: ", this.editMode);
	      if (this.editMode) {
	        console.log('showForm 1st IF: this:editMode: ', this.editMode);
	        this.editMode = false;
	      } else {
	        console.log(" else this.editMode: ");
	      }
	      if (this.toggleShow == 'hideForm') {
	        console.log("2nd IF inShowForm() if this.toggleShow == 'hideForm'");
	        this.toggleShow = 'showForm';
	        this.toggleDisabled("on");
	      } else {
	        this.toggleDisabled("on");
	      }
	    }
	  }, {
	    key: 'editBook',
	    value: function editBook(book) {
	      if (this.book_id) {
	        console.log(' first IF(this.book_id) editBook(): this.book_id:', this.book_id);
	        console.log("editBook() before this.editMode = !this.editMode ", this.editMode);
	        this.editMode = true;
	        console.log("this.book_id: ", this.book_id);
	        console.log("editBook() after this.editMode = !this.editMode ", this.editMode);
	        if (this.toggleShow == 'hideForm') {
	          this.toggleShow = 'showForm';
	          this.toggleDisabled("off");
	        } else {
	          console.log("else of if(this.toggleShow == 'hideForm'");
	          this.toggleDisabled("off");
	        }
	      } else {
	        console.log("else In editBook() this.book_id: ", this.book_id);
	      }
	    }
	  }, {
	    key: 'onSubmit',
	    value: function onSubmit(bookForm, event) {
	      event.preventDefault();
	      if (this.editMode && this.book_id) {

	        bookForm.id = this.book_id;
	        console.log("if(this.editMode && this.book_id) inside OnSUbmit editBook mode this.book_id: ", this.book_id);
	        console.log("bookForm");
	        console.log(bookForm);
	        // this.book_service.updateBook(bookForm)
	      } else {
	        console.log("onSubmit else");
	        return this.postBook(bookForm);
	      }
	    }
	  }, {
	    key: 'postBook',
	    value: function postBook(book) {
	      return this.book_service.postBook(book).subscribe(function (res) {
	        console.log("res: ", res);
	      }, function (err) {
	        console.log("err: ", err);
	      });
	    }
	  }, {
	    key: 'editBook',
	    value: function editBook(book) {
	      if (this.book_id) {
	        console.log(' first IF(this.book_id) editBook(): this.book_id:', this.book_id);
	        console.log("editBook() before this.editMode = !this.editMode ", this.editMode);
	        this.editMode = !this.editMode;
	        console.log("this.book_id: ", this.book_id);
	        console.log("editBook() after this.editMode = !this.editMode ", this.editMode);
	        if (this.toggleShow == 'hideForm') {
	          this.toggleShow = 'showForm';
	          this.toggleDisabled("off");
	        } else {
	          console.log("else of if(this.toggleShow == 'hideForm'");
	          this.toggleDisabled("off");
	        }
	      } else {
	        console.log("else In editBook() this.book_id: ", this.book_id);
	      }
	    }
	  }, {
	    key: 'printBookID',
	    value: function printBookID() {
	      if (this.book_id) {
	        console.log("in printBookID if(this.book_id) : ", this.book_id);
	        console.log("this.editMode", this.editMode);
	      } else {
	        console.log("else printBookID");
	        console.log("this.book_id: ", this.book_id);
	        console.log("this.editMode: ", this.editMode);
	      }
	    }
	  }, {
	    key: 'deleteBook',
	    value: function deleteBook() {}
	  }]);

	  return BookFormComponent;
	}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'book_id', [_dec2], {
	  enumerable: true,
	  initializer: function initializer() {
	    return this.book_id;
	  }
	})), _class2)) || _class);
	Reflect.defineMetadata('design:paramtypes', [_book.BookService, _forms.FormBuilder], BookFormComponent);

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BookService = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(23);

	var _http = __webpack_require__(29);

	__webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BookService = exports.BookService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
	  function BookService(http) {
	    _classCallCheck(this, BookService);

	    this.books_endpoint = '/books';

	    this.http = http;
	    this.headers = new Headers({ 'Content-Type': 'application/json' });
	  }

	  _createClass(BookService, [{
	    key: 'getBooks',
	    value: function getBooks() {
	      var all_books = this.http.get(this.books_endpoint, { headers: new Headers({ 'Content-Type': 'application/json; charset=utf-8' }) }).map(function (res) {
	        return res.json();
	      });
	      return all_books;
	    }
	  }, {
	    key: 'postBook',
	    value: function postBook(book) {
	      var book_params = {
	        book: book
	      };
	      var body = this.stringify(book_params);
	      return this.http.post(this.books_endpoint, body, { headers: this.headers }).map(function (res) {
	        return res.json();
	      });
	    }
	  }, {
	    key: 'stringify',
	    value: function stringify(object) {
	      return JSON.stringify(object);
	    }
	  }]);

	  return BookService;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_http.Http], BookService);

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(6);
	var toPromise_1 = __webpack_require__(63);
	Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },

/***/ 69:
/***/ function(module, exports) {

	module.exports = "<div class=\"button-group\">\n  <button class=\"btn-primary\" type=\"button\" name=\"button\" (click)=\"showForm()\">Add</button>\n  <button class=\"btn-success\" type=\"button\" name=\"button\" (click)=\"editBook()\">Edit</button>\n  <button class=\"btn-danger\" type=\"button\" name=\"button\" (click)=\"deleteBook()\">Delete</button>\n  <button class=\"btn-danger\" type=\"button\" name=\"button\" (click)=\"printBookID()\">Print BookID</button>\n</div>\n\n<form [ngClass]=\"toggleShow\" (ngSubmit)=\"onSubmit(bookForm.value, $event)\" [formGroup]=\"bookForm\">\n    <div class=\"form-group\">\n\n        <label>Book Name</label>\n        <input type=\"text\" formControlName=\"book_name\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Author</label>\n        <input type=\"text\" formControlName=\"author_name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <label>ISBN Code</label>\n        <input type=\"text\" formControlName=\"isbn_code\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <label>Book Quantity</label>\n        <input type=\"number\" formControlName=\"book_quantity\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Published Date</label>\n        <input type=\"month\" formControlName=\"published_date\" maxlength=4 max='2018' class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Book Category</label>\n        <input type=\"text\" formControlName=\"book_category\" class=\"form-control\">\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Save Book</button>\n</form>\n"

/***/ },

/***/ 70:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <h1>Welcome to our Book Recommendations</h1>\n        <p class=\"lead underlined\">Our Favorite books</p>\n        <div class=\"books\">\n          <table>\n            <tr>\n              <th>Book Name</th>\n              <th>Author</th>\n              <th>ISBN</th>\n              <th>Book Quantiy</th>\n              <th>Published Date</th>\n              <th>Book Category</th>\n              <th>Books Issued</th>\n              <!-- <th>Book Transaction</th>\n              <th>Transaction Date</th>\n              <th>Transaction Type</th> -->\n            </tr>\n            <tr id=\"{{book.id}}\"  *ngFor=\"let book of books\" (click)=\"selectBookID($event)\">\n              <td>{{book.book_name }}</td>\n              <td>{{book.author_name}}</td>\n              <td>{{book.isbn_code}}</td>\n              <td>{{book.book_quantity}}</td>\n              <td>{{book.published_date | date | returnMonthYear }}</td>\n              <td>{{book.book_category}}</td>\n              <td>{{book.book_issued}}</td>\n              <!-- <td>{{book.book_transaction}}</td>\n              <td>{{book.transaction_date}}</td>\n              <td>{{book.transaction_type}}</td> -->\n            </tr>\n          </table>\n        </div>\n\n        <div class=\"book-form\">\n          <book-form [book_id]=\"book_id\"></book-form>\n        </div>\n    </div>\n</div>\n"

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CORE_DECLARATIONS = exports.CORE_PROVIDERS = exports.BookService = exports.AppComponent = undefined;

	var _book = __webpack_require__(65);

	var _book_form = __webpack_require__(66);

	var _app = __webpack_require__(72);

	var _book2 = __webpack_require__(67);

	exports.AppComponent = _app.AppComponent;
	exports.BookService = _book2.BookService;
	var CORE_PROVIDERS = exports.CORE_PROVIDERS = [_book2.BookService];
	var CORE_DECLARATIONS = exports.CORE_DECLARATIONS = [_book.BookComponent, _book.ReturnMonthYearPipe, _book_form.BookFormComponent, _app.AppComponent];

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AppComponent = undefined;

	var _dec, _class;

	var _core = __webpack_require__(23);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppComponent = exports.AppComponent = (_dec = (0, _core.Component)({
	  selector: 'my-app',
	  template: '\n  <div class="container body-container">\n      <router-outlet></router-outlet>\n  </div>\n  '
	}), _dec(_class = function AppComponent() {
	  _classCallCheck(this, AppComponent);
	}) || _class);

/***/ }

});
//# sourceMappingURL=boot.js.map