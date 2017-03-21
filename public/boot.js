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

	var _core2 = __webpack_require__(65);

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

	var _index = __webpack_require__(65);

	var routes = exports.routes = [{ path: '', component: _index.BookComponent, pathMatch: 'full' }, { path: 'books', component: _index.BookComponent }, { path: 'book/:id/book_transactions', component: _index.BookTransactionComponent }];

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HelperService = exports.BookItem = exports.BookTransactionComponent = exports.BookComponent = exports.TopNavBar = exports.AppComponent = exports.CORE_DECLARATIONS = exports.CORE_PROVIDERS = undefined;

	var _app = __webpack_require__(66);

	var _topBar = __webpack_require__(69);

	var _book = __webpack_require__(70);

	var _book_item = __webpack_require__(77);

	var _book_form = __webpack_require__(71);

	var _book_transaction = __webpack_require__(78);

	var _book2 = __webpack_require__(72);

	var _shared = __webpack_require__(67);

	var _book_transaction2 = __webpack_require__(73);

	var _helper = __webpack_require__(74);

	var _return_month = __webpack_require__(80);

	var _highlight = __webpack_require__(81);

	// Export all


	// Pipes

	// Services
	// Components
	var CORE_PROVIDERS = exports.CORE_PROVIDERS = [_book2.BookService, _book_transaction2.BookTransactionService, _shared.SharedService, _helper.HelperService];
	// Directive
	var CORE_DECLARATIONS = exports.CORE_DECLARATIONS = [_app.AppComponent, _topBar.TopNavBar, _book.BookComponent, _book_item.BookItem, _book_form.BookFormComponent, _book_transaction.BookTransactionComponent, _highlight.HighlightDirective, _return_month.ReturnMonthYearPipe];
	exports.AppComponent = _app.AppComponent;
	exports.TopNavBar = _topBar.TopNavBar;
	exports.BookComponent = _book.BookComponent;
	exports.BookTransactionComponent = _book_transaction.BookTransactionComponent;
	exports.BookItem = _book_item.BookItem;
	exports.HelperService = _helper.HelperService;

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AppComponent = undefined;

	var _dec, _class;

	var _core = __webpack_require__(23);

	var _shared = __webpack_require__(67);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppComponent = exports.AppComponent = (_dec = (0, _core.Component)({
	  selector: 'my-app',
	  template: '\n  <div class="container body-container">\n      <div>\n        <span class=\'flex-center\'><h1>Welcome to our Book Recommendations</h1></span>\n        <top-nav-bar></top-nav-bar>\n      </div>\n    <router-outlet></router-outlet>\n  </div>\n  ',
	  styleUrls: ['./css/stylesheet.css']
	}), _dec(_class = function AppComponent() {
	  _classCallCheck(this, AppComponent);
	}) || _class);

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SharedService = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(23);

	var _Subject = __webpack_require__(24);

	__webpack_require__(68);

	__webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SharedService = exports.SharedService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
	  function SharedService() {
	    _classCallCheck(this, SharedService);

	    this.pushedBookID = new _core.EventEmitter();
	    this.book_id = 0;
	  }

	  _createClass(SharedService, [{
	    key: 'getBookID',
	    value: function getBookID() {
	      if (this.book_id) {
	        return this.book_id;
	      } else {
	        return 0;
	      }
	    }
	  }, {
	    key: 'setBookID',
	    value: function setBookID(id) {
	      this.book_id = id;
	    }
	  }, {
	    key: 'pushBookID',
	    value: function pushBookID(id) {
	      this.pushedBookID.emit(id);
	    }
	  }]);

	  return SharedService;
	}()) || _class);

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(6);
	var filter_1 = __webpack_require__(61);
	Observable_1.Observable.prototype.filter = filter_1.filter;
	//# sourceMappingURL=filter.js.map

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TopNavBar = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(23);

	var _shared = __webpack_require__(67);

	var _router = __webpack_require__(30);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TopNavBar = exports.TopNavBar = (_dec = (0, _core.Component)({
	  selector: 'top-nav-bar',
	  template: '\n        <div class="top-nav flex-center container">\n          <button class="btn-primary" type="button" name="button" (click)="viewBooks()">View Books</button>\n          <button class="btn btn-warning" [disabled]=\'button_disable\' type="button" name="button" (click)="viewBookTransactions()">View Book Transactions</button>\n        </div>\n  ',
	  styleUrls: ['./css/stylesheet.css']
	}), _dec(_class = function () {
	  function TopNavBar(shared_service, router) {
	    _classCallCheck(this, TopNavBar);

	    this.router = router;
	    this.shared_service = shared_service;
	    this.hash = this.router.location._platformStrategy._platformLocation.location.hash;
	    this.enableBookTransactions();
	  }

	  _createClass(TopNavBar, [{
	    key: 'enableBookTransactions',
	    value: function enableBookTransactions() {
	      var _this = this;

	      this.shared_service.pushedBookID.subscribe(function (book_id) {
	        _this.button_disable = true;
	        _this.book_id = book_id;
	        _this.book_id ? _this.button_disable = false : _this.button_disable = true;
	      });
	    }
	  }, {
	    key: 'viewBooks',
	    value: function viewBooks() {
	      this.router.navigate(['books']);
	    }
	  }, {
	    key: 'viewBookTransactions',
	    value: function viewBookTransactions() {
	      this.router.navigate(['book/' + this.book_id + '/book_transactions']);
	    }
	  }]);

	  return TopNavBar;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_shared.SharedService, _router.Router], TopNavBar);

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BookComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(23);

	var _book_form = __webpack_require__(71);

	var _book = __webpack_require__(72);

	var _shared = __webpack_require__(67);

	var _helper = __webpack_require__(74);

	var _Subscription = __webpack_require__(11);

	var _bookComponent = __webpack_require__(76);

	var _bookComponent2 = _interopRequireDefault(_bookComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BookComponent = exports.BookComponent = (_dec = (0, _core.Component)({
	  selector: 'books',
	  template: _bookComponent2.default,
	  styleUrls: ['./css/stylesheet.css', './css/mobile.css']
	}), _dec(_class = function () {
	  function BookComponent(book_service, shared_service, helper_service) {
	    _classCallCheck(this, BookComponent);

	    this.books = [];
	    this.current_books = [];
	    this.page_number = 1;
	    this.all_books = [];

	    this.book_service = book_service;
	    this.shared_service = shared_service;
	    this.helper_service = helper_service;
	  }

	  _createClass(BookComponent, [{
	    key: 'ngOnInit',
	    value: function ngOnInit() {
	      this.setBookID(0);
	      this.displayBooks();
	    }
	  }, {
	    key: 'displayBooks',
	    value: function displayBooks() {
	      var _this = this;

	      var books = this.book_service.getBooks();
	      books.subscribe(function (books) {
	        _this.books = books.sort(function (a, b) {
	          return b.book_issued - a.book_issued;
	        });
	        _this.current_books = books;
	        _this.setBookPage(_this.page_number);
	      }, this.helper_service.logError);
	    }
	  }, {
	    key: 'selectBookID',
	    value: function selectBookID(selected_book) {
	      var _this2 = this;

	      this.all_books = [].slice.call(selected_book.event.target.parentElement.parentElement.children);
	      this.all_books.forEach(function (book) {
	        book.classList.contains('selectedBook') && book != selected_book.event.target.parentElement ? _this2.setBookID(0) : _this2.helper_service.returnNone();
	      });
	      if (selected_book.event.target.parentElement.classList.contains('selectedBook')) {
	        selected_book.event.target.parentElement.classList.remove('selectedBook');
	        this.setBookID(0);
	      } else {
	        this.unSelectBooks(this.all_books);
	        selected_book.event.target.parentElement.classList.add('selectedBook');
	        this.setBookID(selected_book.id);
	      }
	    }
	  }, {
	    key: 'setBookID',
	    value: function setBookID(id) {
	      this.book_id = id;
	      this.emitBookChange(this.book_id);
	      this.shared_service.setBookID(this.book_id);
	    }
	  }, {
	    key: 'emitBookChange',
	    value: function emitBookChange(id) {
	      this.shared_service.pushBookID(id);
	    }
	  }, {
	    key: 'unSelectBooks',
	    value: function unSelectBooks(books) {
	      var _this3 = this;

	      if (books) {
	        var promise = new Promise(function (r, e) {
	          books.forEach(function (book) {
	            if (book.classList.contains('selectedBook')) {
	              book.classList.remove('selectedBook');
	            }
	          });
	        }, this.helper_service.logError);
	        return promise;
	      } else {
	        this.all_books.forEach(function (book) {
	          if (book.classList.contains('selectedBook')) {
	            book.classList.remove('selectedBook');
	            _this3.setBookID(0);
	          }
	        });
	      }
	    }
	  }, {
	    key: 'setBookPage',
	    value: function setBookPage(page_number) {
	      if (page_number === 1) {
	        this.page_number = 1;
	        this.current_books = this.books.slice(0, 10);
	      } else {
	        this.page_number = page_number;
	        this.current_books = this.books.slice((page_number - 1) * 10, page_number * 10);
	      }
	    }
	  }, {
	    key: 'paginateBooks',
	    value: function paginateBooks(state) {
	      this.setBookID(0);
	      if (state == 'previous') {
	        if (this.page_number < 2) {
	          this.page_number = 1;
	          return;
	        }
	        this.setBookPage(this.page_number - 1);
	      }
	      if (state == "next") {
	        if (this.current_books.length < 9) {
	          return;
	        } else {
	          this.setBookPage(this.page_number + 1);
	        }
	      }
	    }
	  }]);

	  return BookComponent;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_book.BookService, _shared.SharedService, _helper.HelperService], BookComponent);

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BookFormComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
	// Form Objects


	// Services


	// View


	var _core = __webpack_require__(23);

	var _forms = __webpack_require__(62);

	var _book = __webpack_require__(72);

	var _book_transaction = __webpack_require__(73);

	var _shared = __webpack_require__(67);

	var _helper = __webpack_require__(74);

	var _book_formComponent = __webpack_require__(75);

	var _book_formComponent2 = _interopRequireDefault(_book_formComponent);

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
	  template: _book_formComponent2.default,
	  styleUrls: ['./css/stylesheet.css']
	}), _dec2 = (0, _core.Input)(), _dec3 = (0, _core.Input)(), _dec4 = (0, _core.Input)(), _dec5 = (0, _core.Output)(), _dec6 = (0, _core.Output)(), _dec(_class = (_class2 = function () {
	  function BookFormComponent(book_service, book_transaction_service, shared_service, builder, helper_service) {
	    _classCallCheck(this, BookFormComponent);

	    _initDefineProp(this, 'book_id', _descriptor, this);

	    _initDefineProp(this, 'all_books', _descriptor2, this);

	    _initDefineProp(this, 'page_number', _descriptor3, this);

	    _initDefineProp(this, 'getAllBooks', _descriptor4, this);

	    _initDefineProp(this, 'deSelect', _descriptor5, this);

	    this.book_service = book_service;
	    this.book_transaction_service = book_transaction_service;
	    this.shared_service = shared_service;
	    this.builder = builder;
	    this.helper_service = helper_service;
	  }

	  _createClass(BookFormComponent, [{
	    key: 'ngOnInit',
	    value: function ngOnInit() {
	      this.property_names = ["book_name", "author_name", "isbn_code", "published_date", "book_category", "book_quantity"];
	      this.duplicate_isbn = null;
	      this.setToggleMode();
	      this.disableButton();
	      this.createForm();
	    }
	  }, {
	    key: 'setToggleMode',
	    value: function setToggleMode() {
	      this.editMode = false;
	      this.toggleShow = 'hide';
	      this.toggleMessage = 'hideMessage';
	      this.toggleEditError = 'hideMessage';
	      this.button_disable = true;
	      this.button_issue_disable = true;
	      this.button_edit_disable = true;
	    }
	  }, {
	    key: 'disableButton',
	    value: function disableButton() {
	      var _this = this;

	      this.shared_service.pushedBookID.subscribe(function (book_id) {
	        _this.book_id = book_id;
	        if (_this.book_id) {
	          _this.button_edit_disable = false;
	          var book = _this.all_books.filter(function (book) {
	            return book.id === book_id;
	          })[0];
	          _this.editBook();
	        }
	        book_id && book.book_quantity >= 1 ? _this.button_issue_disable = false : _this.helper_service.returnNone();
	        (book_id && book.book_issued) < 1 ? _this.button_disable = false : _this.helper_service.returnNone();
	        if (book_id === 0) {
	          _this.button_edit_disable = true;
	          _this.cleanForm();
	          _this.toggleDisabled("on");
	          _this.button_disable = true;
	          _this.button_issue_disable = true;
	        }
	      });
	    }
	  }, {
	    key: 'toggleEditMessage',
	    value: function toggleEditMessage() {
	      this.toggleEditError = 'showMessage';
	      this.toggleEditError == 'showMessage' ? this.toggleEditError = 'hideMessage' : this.toggleEditError = 'showMessage';
	    }
	  }, {
	    key: 'filterBookByID',
	    value: function filterBookByID(books, book_id) {
	      var book = books.filter(function (book) {
	        return book.id === book_id;
	      });
	      return book[0];
	    }
	  }, {
	    key: 'issueBook',
	    value: function issueBook() {
	      var _this2 = this;

	      if (this.book_id) {
	        var book = this.filterBookByID(this.all_books, this.book_id);
	        if (book.book_quantity > 0) {
	          book = {
	            book: {
	              id: this.book_id
	            }
	          };
	          return this.book_transaction_service.postBookTransaction(book).then(function () {
	            _this2.getAllBooks.emit(_this2.page_number);
	            _this2.deSelect.emit();
	            _this2.book_id = 0;
	          });
	        }
	      }
	    }
	  }, {
	    key: 'createForm',
	    value: function createForm() {
	      this.bookForm = this.builder.group({
	        book_name: [''],
	        author_name: [''],
	        isbn_code: [''],
	        book_quantity: [''],
	        published_date: [''],
	        book_category: ['']
	      });
	      this.checkBookDuplicates();
	    }
	  }, {
	    key: 'checkBookDuplicates',
	    value: function checkBookDuplicates() {
	      var _this3 = this;

	      this.bookForm.get('isbn_code').valueChanges.subscribe(function (res) {
	        _this3.isbn_code = res;
	        var book = _this3.all_books.filter(function (book) {
	          return book.isbn_code == _this3.isbn_code;
	        });
	        if (book.length > 0) {
	          _this3.duplicate_isbn = true;
	          _this3.toggleMessage = 'showMessage';
	        } else {
	          _this3.duplicate_isbn = false;
	          _this3.toggleMessage = 'hideMessage';
	        }
	      });
	    }
	  }, {
	    key: 'postBook',
	    value: function postBook(book) {
	      var _this4 = this;

	      return this.book_service.postBook(book).then(function () {
	        _this4.getAllBooks.emit();
	        _this4.bookForm.reset();
	      });
	    }
	  }, {
	    key: 'onSubmit',
	    value: function onSubmit(bookForm, event) {
	      var _this5 = this;

	      event.preventDefault();
	      if (this.editMode && this.book_id) {
	        return this.book_service.updateBook(this.book_id, bookForm.book_quantity).then(function () {
	          _this5.getAllBooks.emit(_this5.page_number);
	        });
	      } else if (this.duplicate_isbn && !this.editMode) {
	        var book = this.all_books.filter(function (book) {
	          return book.isbn_code == _this5.isbn_code;
	        })[0];
	        book.book_quantity = bookForm.book_quantity + book.book_quantity;
	        return this.book_service.updateBook(book.id, book.book_quantity).then(function () {
	          _this5.getAllBooks.emit();
	        });
	      } else {
	        this.postBook(bookForm);
	      }
	    }
	  }, {
	    key: 'toggleDisabled',
	    value: function toggleDisabled(status) {
	      var _this6 = this;

	      var property_names = this.property_names.filter(function (property) {
	        return property != "book_quantity";
	      });
	      this.status = status;
	      if (this.status == "off") {
	        property_names.forEach(function (inputs) {
	          _this6.bookForm.root.get(inputs).disable();
	        });
	      }
	      if (this.status == "on") {
	        property_names.forEach(function (inputs) {
	          _this6.bookForm.root.get(inputs).enable();
	        });
	      }
	    }
	  }, {
	    key: 'showForm',
	    value: function showForm() {
	      this.cleanForm();
	      this.toggleEditError = 'hideMessage';
	      var book_id = 0;
	      if (this.editMode) {
	        this.editMode = false;
	        this.toggleDisabled("on");
	      } else {
	        this.editMode = false;
	        this.toggleDisabled("on");
	      }
	      if (this.toggleShow == 'hide') {
	        if (this.editMode) {
	          this.editMode = false;
	        } else {
	          this.toggleShow = 'show';
	        }
	        if (this.toggleShow == 'hide') {
	          this.toggleShow = 'show';
	          this.toggleDisabled("on");
	        } else {
	          this.toggleDisabled("on");
	        }
	      }
	    }
	  }, {
	    key: 'editBook',
	    value: function editBook() {
	      this.loadBookEdit();
	      this.toggleEditError = 'hideMessage';
	      if (this.book_id) {
	        this.editMode = !this.editMode;
	        if (this.toggleShow == 'hide') {
	          this.toggleShow = 'show';
	          this.toggleDisabled("off");
	        } else {
	          this.toggleDisabled("off");
	        }
	      } else {
	        this.toggleEditError = 'showMessage';
	      }
	      this.toggleMessage = 'hideMessage';
	    }
	  }, {
	    key: 'loadBookEdit',
	    value: function loadBookEdit() {
	      var _this7 = this;

	      if (this.book_id) {
	        var book = this.all_books.filter(function (book) {
	          return book.id == _this7.book_id;
	        });
	        this.property_names.forEach(function (prop_name) {
	          prop_name == 'published_date' ? _this7.bookForm.get(prop_name).setValue(book[0][prop_name].slice(0, -3)) : _this7.bookForm.get(prop_name).setValue(book[0][prop_name]);
	        });
	      }
	    }
	  }, {
	    key: 'cleanForm',
	    value: function cleanForm() {
	      var _this8 = this;

	      this.deSelect.emit();
	      this.property_names.forEach(function (prop_name) {
	        _this8.bookForm.get(prop_name).setValue(null);
	      });
	    }
	  }, {
	    key: 'deleteBook',
	    value: function deleteBook() {
	      var _this9 = this;

	      if (this.book_id) {
	        var book = this.all_books.filter(function (book) {
	          return book.id == _this9.book_id;
	        });
	        if (book[0].book_issued < 1) {
	          return this.book_service.deleteBook(this.book_id).then(function () {
	            _this9.getAllBooks.emit();
	          }).then(function () {
	            _this9.cleanForm();
	          });
	        }
	      }
	    }
	  }]);

	  return BookFormComponent;
	}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'book_id', [_dec2], {
	  enumerable: true,
	  initializer: function initializer() {
	    return this.book_id;
	  }
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'all_books', [_dec3], {
	  enumerable: true,
	  initializer: function initializer() {
	    return this.all_books;
	  }
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'page_number', [_dec4], {
	  enumerable: true,
	  initializer: function initializer() {
	    return this.page_number;
	  }
	}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'getAllBooks', [_dec5], {
	  enumerable: true,
	  initializer: function initializer() {
	    return new _core.EventEmitter();
	  }
	}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'deSelect', [_dec6], {
	  enumerable: true,
	  initializer: function initializer() {
	    return new _core.EventEmitter();
	  }
	})), _class2)) || _class);
	Reflect.defineMetadata('design:paramtypes', [_book.BookService, _book_transaction.BookTransactionService, _shared.SharedService, _forms.FormBuilder, _helper.HelperService], BookFormComponent);

/***/ },

/***/ 72:
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
	    key: 'getBook',
	    value: function getBook(id) {
	      var book = this.http.get(this.books_endpoint + '/' + id, { headers: new Headers({ 'Content-Type': 'application/json; charset=utf-8' }) }).map(function (res) {
	        return res.json();
	      });
	      return book;
	    }
	  }, {
	    key: 'postBook',
	    value: function postBook(book) {
	      var book_params = {
	        book: {
	          book_name: book.book_name,
	          author_name: book.author_name,
	          isbn_code: book.isbn_code,
	          book_category: book.book_category,
	          book_quantity: book.book_quantity,
	          published_date: new Date(book.published_date)
	        }
	      };
	      var request = new Request(this.books_endpoint, { method: "POST", mode: "cors", headers: new Headers({ "Content-Type": "application/json" }), body: JSON.stringify(book_params) });
	      return fetch(request).then(function (res) {
	        return res.json();
	      }).then(function (res) {
	        res;
	      }, function (error) {
	        console.log("Error occurred: ", error);
	      });
	    }
	  }, {
	    key: 'updateBook',
	    value: function updateBook(id, quantity) {
	      var book_params = {
	        book: {
	          id: id,
	          book_quantity: quantity
	        }
	      };
	      var request = new Request(this.books_endpoint + "/" + book_params.book.id, {
	        method: "PUT",
	        mode: "cors",
	        redirect: "follow",
	        headers: new Headers({
	          'Content-Type': 'application/json'
	        }),
	        body: JSON.stringify(book_params)
	      });
	      return fetch(request).then(function (res) {}, function (error) {
	        console.log("error message: ", error);
	      });
	    }
	  }, {
	    key: 'deleteBook',
	    value: function deleteBook(id) {
	      var book_params = {
	        book: {
	          id: id
	        }
	      };
	      var request = new Request(this.books_endpoint + "/" + book_params.book.id, {
	        method: "DELETE",
	        mode: "cors",
	        redirect: "follow",
	        headers: new Headers({
	          'Content-Type': 'application/json'
	        }),
	        body: JSON.stringify(book_params)
	      });
	      return fetch(request).then(function (res) {}, function (error) {
	        console.log("error: ", error);
	      });
	    }
	  }]);

	  return BookService;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_http.Http], BookService);

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BookTransactionService = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(23);

	var _http = __webpack_require__(29);

	__webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BookTransactionService = exports.BookTransactionService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
	  function BookTransactionService(http) {
	    _classCallCheck(this, BookTransactionService);

	    this.book_transactions_endpoint = '/books/:book_id/book_transactions';
	    this.update_book_transaction = '/books/:book_id/book_transactions/:id';

	    this.http = http;
	  }

	  _createClass(BookTransactionService, [{
	    key: 'getBookTransactions',
	    value: function getBookTransactions(id) {
	      var all_book_transactions = this.http.get('/books/' + id + '/book_transactions', { headers: new Headers({ 'Content-Type': 'application/json; charset=utf-8' }) }).map(function (res) {
	        return res.json();
	      });
	      return all_book_transactions;
	    }
	  }, {
	    key: 'postBookTransaction',
	    value: function postBookTransaction(book) {
	      var request = new Request('/books/' + book.book.id + '/book_transactions', { method: "POST", mode: "cors", headers: new Headers({ "Content-Type": "application/json" }), body: JSON.stringify(book) });
	      return fetch(request).then(function (res) {
	        return res.json();
	      }).then(function (res) {
	        res;
	      }, function (error) {
	        console.log("Error occurred: ", error);
	      });
	    }
	  }, {
	    key: 'updateBookTransaction',
	    value: function updateBookTransaction(book_transaction) {
	      var book = {
	        book_transaction: {
	          id: book_transaction.id
	        }
	      };
	      var endpoint = '/books/' + book_transaction.book_id + '/book_transactions/' + book_transaction.id;
	      var request = new Request(endpoint, { method: "PUT", mode: "cors", headers: new Headers({ "Content-Type": "application/json" }), body: JSON.stringify(book) });
	      return fetch(request).then(function (res) {
	        return res.json();
	      }).then(function (res) {
	        res;
	      }, function (error) {
	        console.log("Error occurred: ", error);
	      });
	    }
	  }]);

	  return BookTransactionService;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_http.Http], BookTransactionService);

/***/ },

/***/ 74:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HelperService = exports.HelperService = function () {
	  function HelperService() {
	    _classCallCheck(this, HelperService);
	  }

	  _createClass(HelperService, [{
	    key: "logError",
	    value: function logError(error) {
	      console.log("Error: ", error);
	    }
	  }, {
	    key: "returnNone",
	    value: function returnNone() {
	      return false;
	    }
	  }]);

	  return HelperService;
	}();

/***/ },

/***/ 75:
/***/ function(module, exports) {

	module.exports = "<div class=\"flex-center container buttons\">\n  <button id=\"add-book\" class=\"btn-primary button\" type=\"button\" name=\"button\" (click)=\"showForm()\">Add Book</button>\n  <button class=\"btn btn-default button\" type=\"button\" name=\"button\" (click)=\"editBook()\" [disabled]=\"button_edit_disable\">Edit Book</button>\n  <button class=\"btn btn-success button\" type=\"button\" name=\"button\" (click)=\"issueBook()\" [disabled]='button_issue_disable'>Issue Book</button>\n  <button class=\"btn btn-danger button \" type=\"button\" name=\"button\" (click)=\"deleteBook()\" [disabled]=\"button_disable\">Delete Book</button>\n</div>\n\n<div [ngClass]='toggleEditError' class=\"flex-center container\">\n  <p>You must select book from in order to edit</p>\n</div>\n<div class=\"container\">\n  <form [ngClass]=\"toggleShow\" (ngSubmit)=\"onSubmit(bookForm.value, $event)\" [formGroup]=\"bookForm\">\n      <div class=\"form-group\">\n          <label>Book Name</label>\n          <input id=\"book_name\" type=\"text\" formControlName=\"book_name\" class=\"form-control\" required>\n      </div>\n\n      <div class=\"form-group\">\n          <label>Author</label>\n          <input id=\"author_name\" type=\"text\" formControlName=\"author_name\" class=\"form-control\" required>\n      </div>\n      <div class=\"form-group\">\n          <label>ISBN Code</label>\n          <div [ngClass]=\"toggleMessage\">\n            <span>Warning: Duplicate Book ISBN. You will only be able to add more book_quantity, Confirm?</span>\n            <button class=\"btn-primary\" type=\"button\" (click)=\"toggleDisabled('off')\">Confirm</button>\n          </div>\n          <input id=\"isbn_code\" type=\"text\" formControlName=\"isbn_code\" class=\"form-control\" required>\n      </div>\n      <div class=\"form-group\">\n          <label>Book Quantity</label>\n          <input id=\"book_quantity\" type=\"number\" formControlName=\"book_quantity\" class=\"form-control\" required>\n      </div>\n\n      <div class=\"form-group\">\n          <label>Published Date</label>\n          <input id=\"pub_date\" type=\"month\" formControlName=\"published_date\" maxlength=4 max='2018' class=\"form-control\" required>\n      </div>\n\n      <div class=\"form-group\">\n          <label>Book Category</label>\n          <input id=\"book_category\" type=\"text\" formControlName=\"book_category\" class=\"form-control\" required>\n      </div>\n\n      <span class=\"buttons\">\n        <button id='submit-book' type=\"submit\" class=\"btn btn-primary button\">Save Book</button>\n      </span>\n  </form>\n</div>\n"

/***/ },

/***/ 76:
/***/ function(module, exports) {

	module.exports = "<div class=\"row container\">\n    <div class=\"col-sm-12\">\n      <p class=\"lead underlined\">Number of books <span id='total_books'>{{books.length}}</span></p>\n        <div class=\"books table-responsive\" *ngIf=\"books.length > 0\">\n          <book-item (selectBook)=\"selectBookID($event)\" [current_books]='current_books'></book-item>\n          <div class=\"flex-center container paginateBook\">\n            <button id=\"previous\" class=\"animate left-arrow button\" type=\"button\" name=\"button\" (click)=\"paginateBooks('previous')\"></button>\n              <span>\n                <div>\n                    <span>Showing from</span>\n                    <span>{{1+(page_number-1)*10}}</span>–\n                    <span>{{page_number*10 > books.length ? books.length : page_number*10  }}</span> of\n                    <span>{{books.length}}</span>\n                </div>\n              </span>\n            <button id=\"next\" class=\"animate right-arrow button\" type=\"button\" name=\"button\" (click)=\"paginateBooks('next')\"></button>\n          </div>\n          <div class=\"book-form\">\n            <book-form (getAllBooks)='displayBooks()' (deSelect)=\"unSelectBooks()\" [all_books]=\"books\" [book_id]=\"book_id\"></book-form>\n          </div>\n        </div>\n    </div>\n</div>\n"

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BookItem = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2;

	var _core = __webpack_require__(23);

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

	var BookItem = exports.BookItem = (_dec = (0, _core.Component)({
	  selector: 'book-item',
	  template: '\n    <table id=\'books\' class="table" width="400" height="5">\n    <thead>\n      <tr class="background-top">\n        <th>Book Name</th>\n        <th>Author</th>\n        <th>ISBN</th>\n        <th>Book Quantity</th>\n        <th>Published Date</th>\n        <th>Book Category</th>\n        <th>Books Issued</th>\n      </tr>\n    </thead>\n    <tbody>\n          <tr class="animate" id="{{book.id}}" [myHighlight]="blue" [ngClass]="selectBook"  *ngFor="let book of current_books" (click)="selectBookID($event, book.id)">\n            <td data-label="Book Name">{{book.book_name }}</td>\n            <td data-label="Author">{{book.author_name}}</td>\n            <td data-label="ISBN">{{book.isbn_code}}</td>\n            <td data-label="Book Quantity">{{book.book_quantity}}</td>\n            <td data-label="Published Date">{{book.published_date | date | returnMonthYear }}</td>\n            <td data-label="Book Category">{{book.book_category}}</td>\n            <td data-label="Books Issued">{{book.book_issued}}</td>\n          </tr>\n    </tbody>\n  </table>\n  ',
	  styleUrls: ['./css/stylesheet.css']
	}), _dec2 = (0, _core.Input)(), _dec3 = (0, _core.Output)(), _dec(_class = (_class2 = function () {
	  function BookItem() {
	    _classCallCheck(this, BookItem);

	    _initDefineProp(this, 'current_books', _descriptor, this);

	    _initDefineProp(this, 'selectBook', _descriptor2, this);
	  }

	  _createClass(BookItem, [{
	    key: 'ngOnInit',
	    value: function ngOnInit() {}
	  }, {
	    key: 'selectBookID',
	    value: function selectBookID(event, id) {
	      this.selectBook.emit({ event: event, id: id });
	    }
	  }]);

	  return BookItem;
	}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'current_books', [_dec2], {
	  enumerable: true,
	  initializer: function initializer() {
	    return this.current_books;
	  }
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'selectBook', [_dec3], {
	  enumerable: true,
	  initializer: function initializer() {
	    return new _core.EventEmitter();
	  }
	})), _class2)) || _class);

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BookTransactionComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(23);

	var _router = __webpack_require__(30);

	var _book_transaction = __webpack_require__(73);

	var _book = __webpack_require__(72);

	var _shared = __webpack_require__(67);

	var _helper = __webpack_require__(74);

	var _book_transactionComponent = __webpack_require__(79);

	var _book_transactionComponent2 = _interopRequireDefault(_book_transactionComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BookTransactionComponent = exports.BookTransactionComponent = (_dec = (0, _core.Component)({
	  selector: 'book-transactions',
	  template: _book_transactionComponent2.default,
	  styleUrls: ['./css/stylesheet.css']
	}), _dec(_class = function () {
	  function BookTransactionComponent(book_service, book_transaction_service, shared_service, router, helper_service) {
	    _classCallCheck(this, BookTransactionComponent);

	    this.book = {};
	    this.page_number = 1;
	    this.book_transactions = [];
	    this.current_book_transactions = [];

	    this.book_transaction_service = book_transaction_service;
	    this.book_service = book_service;
	    this.shared_service = shared_service;
	    this.helper_service = helper_service;
	    this.router = router;
	  }

	  _createClass(BookTransactionComponent, [{
	    key: 'ngOnInit',
	    value: function ngOnInit() {
	      this.book_id = parseInt(this.router.snapshot.params.id);
	      this.getBook(this.book_id);
	      this.getBookTransactions(this.book_id);
	      this.zero_transaction_message = false;
	    }
	  }, {
	    key: 'getBook',
	    value: function getBook(id) {
	      var _this = this;

	      if (id) {
	        var book = this.book_service.getBook(id);
	        book.subscribe(function (book) {
	          _this.book = book;
	        });
	      }
	    }
	  }, {
	    key: 'getBookTransactions',
	    value: function getBookTransactions(id) {
	      var _this2 = this;

	      if (id) {
	        var book_transactions = this.book_transaction_service.getBookTransactions(id);
	        book_transactions.subscribe(function (book_transactions) {
	          _this2.book_transactions = book_transactions;
	          _this2.current_book_transactions = _this2.book_transactions;
	          _this2.setBookTransactionPage(_this2.page_number);
	          if (_this2.book_transactions.length === 0) {
	            _this2.zero_transaction_message = true;
	          }
	          return;
	        }, this.helper_service.logError);
	      }
	    }
	  }, {
	    key: 'returnBookIssue',
	    value: function returnBookIssue(book_transaction) {
	      var _this3 = this;

	      this.book_transaction_service.updateBookTransaction(book_transaction).then(function () {
	        _this3.getBookTransactions(_this3.book_id);
	      });
	    }
	  }, {
	    key: 'paginateBooks',
	    value: function paginateBooks(state) {
	      if (state == 'previous') {
	        if (this.page_number < 2) {
	          this.page_number = 1;
	          return;
	        }
	        this.setBookTransactionPage(this.page_number - 1);
	      }
	      if (state == 'next') {
	        if (this.current_book_transactions.length < 9) {
	          return;
	        } else {
	          this.setBookTransactionPage(this.page_number + 1);
	        }
	      }
	    }
	  }, {
	    key: 'setBookTransactionPage',
	    value: function setBookTransactionPage(page_number) {
	      if (page_number === 1) {
	        this.page_number = 1;
	        // console.log(this.current_book_transactions.length);
	        this.current_book_transactions = this.book_transactions.slice(0, 10);
	        // console.log(this.current_book_transactions.length);
	      } else {
	        this.page_number = page_number;
	        this.current_book_transactions = this.book_transactions.slice((page_number - 1) * 10, page_number * 10);
	      }
	    }
	  }]);

	  return BookTransactionComponent;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_book.BookService, _book_transaction.BookTransactionService, _shared.SharedService, _router.ActivatedRoute, _helper.HelperService], BookTransactionComponent);

/***/ },

/***/ 79:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\n  <div *ngIf=\"book_id\">\n    <table width=\"400\" height=\"5\" id=\"book_transactions\">\n      <thead *ngIf='!zero_transaction_message'>\n        <h3>Book Transactions for {{book.book_name}}</h3>\n        <tr>\n          <th>Transaction Date</th>\n          <th>Transaction Type</th>\n          <th>Transaction Status</th>\n          <th>Returned Date </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"book_transactions\" *ngFor=\"let book_transaction of current_book_transactions\">\n          <td>{{book_transaction.created_at | date }}</td>\n          <td>{{book_transaction.transaction_type | uppercase}}</td>\n          <td>{{ book_transaction.transaction_status ? 'Open': 'Closed'}}</td>\n          <td>{{ book_transaction.transaction_status ? 'Not Returned': book_transaction.updated_at | date }}</td>\n          <button *ngIf='book_transaction.transaction_status' class=\"btn-danger\" (click)=\"returnBookIssue(book_transaction)\">Return Book</button>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"flex-center container paginateBook\">\n      <button class=\"animate left-arrow button\" type=\"button\" name=\"button\" (click)=\"paginateBooks('previous')\"></button>\n        <span>\n          <div>\n              <span>Showing from</span>\n              <span>{{1+(page_number-1)*10}}</span>–\n              <span>{{page_number*10 > book_transactions.length ? book_transactions.length : page_number*10  }}</span> of\n              <span>{{book_transactions.length}}</span>\n          </div>\n        </span>\n      <button class=\"animate right-arrow button\" type=\"button\" name=\"button\" (click)=\"paginateBooks('next')\"></button>\n    </div>\n</div>\n  <p class=\"flex-center\" *ngIf='zero_transaction_message'>No book transactions for <br><strong>{{book.book_name}} </strong></p>\n\n  <div *ngIf='!book_id' class=\"flex-center\">\n    <h3>No book selected go to <a href=\"#/books\">books</a> and select a book to view transactions</h3>\n  </div>\n</div>\n"

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReturnMonthYearPipe = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(23);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ReturnMonthYearPipe = exports.ReturnMonthYearPipe = (_dec = (0, _core.Pipe)({ name: 'returnMonthYear' }), _dec(_class = function () {
	  function ReturnMonthYearPipe() {
	    _classCallCheck(this, ReturnMonthYearPipe);
	  }

	  _createClass(ReturnMonthYearPipe, [{
	    key: 'transform',
	    value: function transform(date) {
	      return date.slice(0, 4) + date.substr(date.length - 4);
	    }
	  }]);

	  return ReturnMonthYearPipe;
	}()) || _class);

/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HighlightDirective = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2;

	var _core = __webpack_require__(23);

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

	var HighlightDirective = exports.HighlightDirective = (_dec = (0, _core.Directive)({
	  selector: '[myHighlight]'
	}), _dec2 = (0, _core.Input)(), _dec3 = (0, _core.Input)('myHighlight'), _dec4 = (0, _core.HostListener)('mouseenter'), _dec5 = (0, _core.HostListener)('mouseleave'), _dec(_class = (_class2 = function () {
	  function HighlightDirective(el) {
	    _classCallCheck(this, HighlightDirective);

	    _initDefineProp(this, 'defaultColor', _descriptor, this);

	    _initDefineProp(this, 'highlightColor', _descriptor2, this);

	    this.el = el;
	  }

	  _createClass(HighlightDirective, [{
	    key: 'onMouseEnter',
	    value: function onMouseEnter() {
	      this.highlight(this.highlightColor || this.defaultColor || 'red');
	    }
	  }, {
	    key: 'onMouseLeave',
	    value: function onMouseLeave() {
	      this.highlight(null);
	    }
	  }, {
	    key: 'highlight',
	    value: function highlight(color) {
	      this.el.nativeElement.style.backgroundColor = color;
	    }
	  }]);

	  return HighlightDirective;
	}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'defaultColor', [_dec2], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 'blue';
	  }
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'highlightColor', [_dec3], {
	  enumerable: true,
	  initializer: function initializer() {
	    return 'blue';
	  }
	}), _applyDecoratedDescriptor(_class2.prototype, 'onMouseEnter', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'onMouseEnter'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'onMouseLeave', [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'onMouseLeave'), _class2.prototype)), _class2)) || _class);
	Reflect.defineMetadata('design:paramtypes', [_core.ElementRef], HighlightDirective);

/***/ }

});
//# sourceMappingURL=boot.js.map