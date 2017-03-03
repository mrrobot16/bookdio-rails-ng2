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

	var routes = exports.routes = [{ path: '', component: _index.BookComponent, pathMatch: 'full' }, { path: 'books', component: _index.BookComponent }, { path: 'book_transactions', component: _index.BookTransactionComponent }];

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HighlightDirective = exports.BookTransactionService = exports.SharedService = exports.BookService = exports.BookTransactionComponent = exports.BookComponent = exports.AppComponent = exports.CORE_DECLARATIONS = exports.CORE_PROVIDERS = undefined;

	var _app = __webpack_require__(66);

	var _book = __webpack_require__(67);

	var _book_form = __webpack_require__(68);

	var _book_transaction = __webpack_require__(76);

	var _book2 = __webpack_require__(69);

	var _shared = __webpack_require__(73);

	var _book_transaction2 = __webpack_require__(70);

	var _return_month = __webpack_require__(78);

	var _highlight = __webpack_require__(79);

	// Export all


	// Pipes
	var CORE_PROVIDERS = exports.CORE_PROVIDERS = [_book2.BookService, _book_transaction2.BookTransactionService, _shared.SharedService];
	// Directive

	// Services
	// Components
	var CORE_DECLARATIONS = exports.CORE_DECLARATIONS = [_app.AppComponent, _book.BookComponent, _book_form.BookFormComponent, _book_transaction.BookTransactionComponent, _highlight.HighlightDirective, _return_month.ReturnMonthYearPipe];
	exports.AppComponent = _app.AppComponent;
	exports.BookComponent = _book.BookComponent;
	exports.BookTransactionComponent = _book_transaction.BookTransactionComponent;
	exports.BookService = _book2.BookService;
	exports.SharedService = _shared.SharedService;
	exports.BookTransactionService = _book_transaction2.BookTransactionService;
	exports.HighlightDirective = _highlight.HighlightDirective;

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AppComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(23);

	var _router = __webpack_require__(30);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppComponent = exports.AppComponent = (_dec = (0, _core.Component)({
	  selector: 'my-app',
	  template: '\n  <div class="container body-container">\n    <div>\n    <h1>Welcome to our Book Recommendations</h1>\n    <div class="flex-center">\n      <button class="btn-primary" type="button" name="button" (click)="viewBooks()">View Books</button>\n      <button class="btn-success" type="button" name="button" (click)="viewBookTransactions()">View Book Transactions</button>\n    </div>\n    </div>\n    <router-outlet></router-outlet>\n  </div>\n  ',
	  styleUrls: ['./css/stylesheet.css']
	}), _dec(_class = function () {
	  function AppComponent(router) {
	    _classCallCheck(this, AppComponent);

	    this.router = router;
	  }

	  _createClass(AppComponent, [{
	    key: 'viewBooks',
	    value: function viewBooks() {
	      console.log(this.router);
	      this.router.navigate(['books']);
	    }
	  }, {
	    key: 'viewBookTransactions',
	    value: function viewBookTransactions() {
	      // console.log(this.router);
	      this.router.navigate(['book_transactions']);
	    }
	  }]);

	  return AppComponent;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_router.Router], AppComponent);

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BookComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(23);

	var _book_form = __webpack_require__(68);

	var _book = __webpack_require__(69);

	var _shared = __webpack_require__(73);

	var _Subscription = __webpack_require__(11);

	var _bookComponent = __webpack_require__(75);

	var _bookComponent2 = _interopRequireDefault(_bookComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BookComponent = exports.BookComponent = (_dec = (0, _core.Component)({
	  selector: 'books',
	  template: _bookComponent2.default,
	  styleUrls: ['./css/stylesheet.css']
	}), _dec(_class = function () {
	  function BookComponent(book_service, shared_service) {
	    _classCallCheck(this, BookComponent);

	    this.books = [];
	    this.book_ids = [];
	    this.subscription = _Subscription.Subscription;

	    this.book_service = book_service;
	    this.shared_service = shared_service;
	    this.subscribe();
	  }

	  _createClass(BookComponent, [{
	    key: 'ngOnInit',
	    value: function ngOnInit() {
	      this.book_id = 0;
	      this.send_id_book_transaction(this.book_id);
	      this.displayBooks();
	    }
	  }, {
	    key: 'displayBooks',
	    value: function displayBooks() {
	      var _this = this;

	      var books = this.book_service.getBooks();
	      books.subscribe(function (books) {
	        _this.books = books;
	      }, this.logError);
	    }
	  }, {
	    key: 'send_id_book_transaction',
	    value: function send_id_book_transaction(id) {
	      var payload = {
	        id: id,
	        text: 'Message ' + id
	      };
	      this.shared_service.broadcast('receiver', payload);
	    }
	  }, {
	    key: 'selectBookID',
	    value: function selectBookID(event) {
	      var all_books = event.target.parentElement.parentElement.children;
	      all_books = [].slice.call(all_books);
	      all_books.forEach(function (book) {
	        if (book.classList.contains('selectedBook') && book != event.target.parentElement) {
	          book.classList.remove('selectedBook');
	        }
	      });
	      if (event.target.parentElement.classList.contains('selectedBook')) {
	        event.target.parentElement.classList.remove('selectedBook');
	        this.book_id = 0;
	        this.send_id_book_transaction(this.book_id);
	      } else {
	        this.book_id = parseInt(event.target.parentNode.id);
	        this.send_id_book_transaction(this.book_id);
	        event.target.parentElement.classList.toggle('selectedBook');
	      }
	    }
	  }, {
	    key: 'subscribe',
	    value: function subscribe() {
	      var _this2 = this;

	      this.subscription = this.shared_service.subscribe('sender', function (payload) {
	        _this2.book_ids.push(payload);
	      });
	    }
	  }, {
	    key: 'logError',
	    value: function logError(error) {
	      console.log("error: ", error);
	    }
	  }]);

	  return BookComponent;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_book.BookService, _shared.SharedService], BookComponent);

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BookFormComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

	var _core = __webpack_require__(23);

	var _forms = __webpack_require__(62);

	var _book = __webpack_require__(69);

	var _book_transaction = __webpack_require__(70);

	__webpack_require__(71);

	var _book_formPartial = __webpack_require__(72);

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
	  styleUrls: ['./css/stylesheet.css']
	}), _dec2 = (0, _core.Input)(), _dec3 = (0, _core.Input)(), _dec4 = (0, _core.Output)(), _dec(_class = (_class2 = function () {
	  function BookFormComponent(book_service, book_transaction_service, builder, element) {
	    _classCallCheck(this, BookFormComponent);

	    _initDefineProp(this, 'book_id', _descriptor, this);

	    _initDefineProp(this, 'all_books', _descriptor2, this);

	    _initDefineProp(this, 'getAllBooks', _descriptor3, this);

	    this.el = element;
	    this.book_service = book_service;
	    this.book_transaction_service = book_transaction_service;
	    this.builder = builder;
	  }

	  _createClass(BookFormComponent, [{
	    key: 'ngOnInit',
	    value: function ngOnInit() {
	      this.now = new Date();
	      this.property_names = [];
	      this.current_property_names = [];
	      this.editMode = false;
	      this.toggleShow = 'hide';
	      this.toggleMessage = 'hideMessage';
	      this.toggleEditError = 'hideMessage';
	      this.duplicate_isbn = null;
	      this.createForm();
	    }
	  }, {
	    key: 'toggleEditMessage',
	    value: function toggleEditMessage() {
	      this.toggleEditError = 'showMessage';
	      if (this.toggleEditError == 'showMessage') {
	        this.toggleEditError = 'hideMessage';
	      } else {
	        this.toggleEditError == 'showMessage';
	      }
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
	      var _this = this;

	      // books that need reclick so it marks as selected
	      // console.log(this.el.nativeElement.parentElement.parentElement.children[3].children["0"].children[1].children);
	      if (this.book_id) {
	        console.log(this.all_books);
	        var book = this.filterBookByID(this.all_books, this.book_id);
	        console.log(book);
	        if (book.book_quantity > 0) {
	          book = {
	            book: {
	              id: this.book_id
	            }
	          };
	          console.log("book.book_quantity < 1 is true");
	          return this.book_transaction_service.postBookTransaction(book).then(function () {
	            _this.getAllBooks.emit();
	            _this.book_id = 0;
	          });
	        } else {
	          console.log("Cant ISSUE Because no stock");
	        }
	      }
	    }
	  }, {
	    key: 'createForm',
	    value: function createForm() {
	      this.bookForm = this.builder.group({
	        book_name: ['Art Of War'],
	        author_name: ['Sun Tzu'],
	        isbn_code: ['523-1-19025-264-3'],
	        book_quantity: [5],
	        published_date: ['2017-04'],
	        book_category: ['Strategy']
	      });
	      this.checkBookDuplicates();
	    }
	  }, {
	    key: 'checkBookDuplicates',
	    value: function checkBookDuplicates() {
	      var _this2 = this;

	      this.bookForm.get('isbn_code').valueChanges.subscribe(function (res) {
	        _this2.isbn_code = res;
	        return new Promise(function (resolve, reject) {
	          var book = _this2.all_books.filter(function (book) {
	            return book.isbn_code == _this2.isbn_code;
	          });
	          if (book.length > 0) {
	            _this2.duplicate_isbn = true;
	            _this2.toggleMessage = 'showMessage';
	          } else {
	            _this2.duplicate_isbn = false;
	            _this2.toggleMessage = 'hideMessage ';
	          }
	        });
	      });
	    }
	  }, {
	    key: 'postBook',
	    value: function postBook(book) {
	      var _this3 = this;

	      return this.book_service.postBook(book).then(function () {
	        _this3.getAllBooks.emit();
	      });
	    }
	  }, {
	    key: 'onSubmit',
	    value: function onSubmit(bookForm, event) {
	      var _this4 = this;

	      event.preventDefault();
	      if (this.editMode && this.book_id) {
	        return this.book_service.updateBook(this.book_id, bookForm.book_quantity).then(function () {
	          _this4.getAllBooks.emit();
	        });
	      } else if (this.duplicate_isbn && !this.editMode) {
	        var book = this.all_books.filter(function (book) {
	          return book.isbn_code == _this4.isbn_code;
	        })[0];
	        book.book_quantity = bookForm.book_quantity + book.book_quantity;
	        return this.book_service.updateBook(book.id, book.book_quantity).then(function () {
	          _this4.getAllBooks.emit();
	        });
	      } else {
	        this.postBook(bookForm);
	      }
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
	      var _this5 = this;

	      this.status = status;
	      if (this.status == "off") {
	        this.current_property_names = this.property_names_array().filter(function (book) {
	          return book != "book_quantity";
	        });
	        this.current_property_names.forEach(function (inputs) {
	          _this5.bookForm.root.get(inputs).disable();
	        });
	      }
	      if (this.status == "on") {
	        this.current_property_names = this.property_names_array().filter(function (book) {
	          return book;
	        });
	        this.current_property_names.forEach(function (inputs) {
	          _this5.bookForm.root.get(inputs).enable();
	        });
	      }
	    }
	  }, {
	    key: 'showForm',
	    value: function showForm() {
	      this.toggleEditError = 'hideMessage';
	      var book_id = this.book_id;
	      console.log(book_id);
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
	    value: function editBook(book) {
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
	        console.log("no this.book_id");
	      }
	    }
	  }, {
	    key: 'deleteBook',
	    value: function deleteBook() {
	      var _this6 = this;

	      if (this.book_id) {
	        var book = this.all_books.filter(function (book) {
	          return book.id == _this6.book_id;
	        });
	        if (book[0].book_issued < 1) {
	          return this.book_service.deleteBook(this.book_id).then(function () {
	            _this6.getAllBooks.emit();
	          });
	        } else {
	          console.log("book[0].book_issued is not < 1");
	        }
	      } else {
	        console.log("no book ID found");
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
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'getAllBooks', [_dec4], {
	  enumerable: true,
	  initializer: function initializer() {
	    return new _core.EventEmitter();
	  }
	})), _class2)) || _class);
	Reflect.defineMetadata('design:paramtypes', [_book.BookService, _book_transaction.BookTransactionService, _forms.FormBuilder, _core.ElementRef], BookFormComponent);

/***/ },

/***/ 69:
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
	        console.log("res :", res);
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
	      return fetch(request).then(function (res) {
	        console.log("res: ");
	      }, function (error) {
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
	      return fetch(request).then(function (res) {
	        console.log('res: ', res);
	      }, function (error) {
	        console.log("error: ", error);
	      });
	    }
	  }]);

	  return BookService;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_http.Http], BookService);

/***/ },

/***/ 70:
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
	      }).then(function (res) {}, function (error) {
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
	      }).then(function (res) {}, function (error) {
	        console.log("Error occurred: ", error);
	      });
	    }
	  }]);

	  return BookTransactionService;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_http.Http], BookTransactionService);

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(6);
	var toPromise_1 = __webpack_require__(63);
	Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },

/***/ 72:
/***/ function(module, exports) {

	module.exports = "<div class=\"flex-center\">\n  <button class=\"btn-primary\" type=\"button\" name=\"button\" (click)=\"showForm()\">Add</button>\n  <button class=\"btn-success\" type=\"button\" name=\"button\" (click)=\"editBook()\">Edit</button>\n  <button class=\"btn-success\" type=\"button\" name=\"button\" (click)=\"issueBook()\">Issue Book</button>\n  <button class=\"btn-danger\" type=\"button\" name=\"button\" (click)=\"deleteBook()\">Delete</button>\n</div>\n\n<div [ngClass]='toggleEditError' class=\"flex-center\">\n  <p>You must select book from in order to edit</p>\n</div>\n\n<form [ngClass]=\"toggleShow\" (ngSubmit)=\"onSubmit(bookForm.value, $event)\" [formGroup]=\"bookForm\">\n    <div class=\"form-group\">\n        <label>Book Name</label>\n        <input type=\"text\" formControlName=\"book_name\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Author</label>\n        <input type=\"text\" formControlName=\"author_name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <label>ISBN Code</label>\n        <div [ngClass]=\"toggleMessage\">\n          <span>Warning: Duplicate Book ISBN. You will only be able to add more book_quantity, Confirm?</span>\n          <button class=\"btn-primary\" type=\"button\" (click)=\"toggleDisabled('off')\">Confirm</button>\n        </div>\n        <input type=\"text\" formControlName=\"isbn_code\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n        <label>Book Quantity</label>\n        <input type=\"number\" formControlName=\"book_quantity\" class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Published Date</label>\n        <input type=\"month\" formControlName=\"published_date\" maxlength=4 max='2018' class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n        <label>Book Category</label>\n        <input type=\"text\" formControlName=\"book_category\" class=\"form-control\">\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Save Book</button>\n</form>\n"

/***/ },

/***/ 73:
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

	__webpack_require__(74);

	__webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SharedService = exports.SharedService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
	  function SharedService() {
	    _classCallCheck(this, SharedService);

	    this.handler = new _Subject.Subject();
	    this.book_id = 0;
	  }

	  _createClass(SharedService, [{
	    key: 'broadcast',
	    value: function broadcast(type, payload) {
	      console.log("broadcast");
	      this.handler.next({ type: type, payload: payload });
	      this.book_id = payload.id;
	    }
	  }, {
	    key: 'getBookID',
	    value: function getBookID() {
	      if (this.book_id) {
	        console.log(this.book_id);
	        return this.book_id;
	      } else {
	        console.log('no_book_id');
	        return 0;
	      }
	    }
	  }, {
	    key: 'subscribe',
	    value: function subscribe(type, callback) {
	      return this.handler.filter(function (message) {
	        return message.type === type;
	      }).map(function (message) {
	        message.payload;
	        console.log(message);
	      }).subscribe(callback);
	    }
	  }]);

	  return SharedService;
	}()) || _class);

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(6);
	var filter_1 = __webpack_require__(61);
	Observable_1.Observable.prototype.filter = filter_1.filter;
	//# sourceMappingURL=filter.js.map

/***/ },

/***/ 75:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n      <p class=\"lead underlined\">Our Favorite books</p>\n        <div class=\"books\">\n          <table width=\"400\" height=\"5\">\n            <thead>\n              <tr>\n                <th>Book Name</th>\n                <th>Author</th>\n                <th>ISBN</th>\n                <th>Book Quantity</th>\n                <th>Published Date</th>\n                <th>Book Category</th>\n                <th>Books Issued</th>\n              </tr>\n            </thead>\n            <tbody>\n                  <tr [myHighlight]=\"blue\" id=\"{{book.id}}\" [ngClass]=\"selectBook\"  *ngFor=\"let book of books\" (click)=\"selectBookID($event)\">\n                    <td>{{book.book_name }}</td>\n                    <td>{{book.author_name}}</td>\n                    <td>{{book.isbn_code}}</td>\n                    <td>{{book.book_quantity}}</td>\n                    <td>{{book.published_date | date | returnMonthYear }}</td>\n                    <td>{{book.book_category}}</td>\n                    <td>{{book.book_issued}}</td>\n                  </tr>\n            </tbody>\n\n          </table>\n          <div class=\"book-form\">\n            <book-form (getAllBooks)='displayBooks()' [all_books]='books' [book_id]=\"book_id\"></book-form>\n          </div>\n        </div>\n    </div>\n</div>\n"

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BookTransactionComponent = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _core = __webpack_require__(23);

	var _book_transaction = __webpack_require__(70);

	var _shared = __webpack_require__(73);

	var _Subscription = __webpack_require__(11);

	var _book_transactionComponent = __webpack_require__(77);

	var _book_transactionComponent2 = _interopRequireDefault(_book_transactionComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BookTransactionComponent = exports.BookTransactionComponent = (_dec = (0, _core.Component)({
	  selector: 'book-transactions',
	  template: _book_transactionComponent2.default,
	  styleUrls: ['./css/stylesheet.css']
	}), _dec(_class = function () {
	  function BookTransactionComponent(book_transaction_service, shared_service) {
	    _classCallCheck(this, BookTransactionComponent);

	    this.subscription = _Subscription.Subscription;

	    this.book_transaction_service = book_transaction_service;
	    this.shared_service = shared_service;
	    this.subscribe();
	  }

	  _createClass(BookTransactionComponent, [{
	    key: 'ngOnInit',
	    value: function ngOnInit() {
	      console.log('init');
	      this.book_id = this.shared_service.getBookID();
	      this.getBookTransactions(this.book_id);
	      this.zero_transaction_message = false;
	    }
	  }, {
	    key: 'getBookID',
	    value: function getBookID() {
	      return this.shared_service.getBookID();
	    }
	  }, {
	    key: 'subscribe',
	    value: function subscribe() {
	      this.subscription = this.shared_service.subscribe('receiver', function (payload) {
	        console.log("book_transactionsComponent");
	      });
	    }
	  }, {
	    key: 'getBookTransactions',
	    value: function getBookTransactions(id) {
	      var _this = this;

	      if (id) {
	        var book_transactions = this.book_transaction_service.getBookTransactions(id);
	        book_transactions.subscribe(function (book_transactions) {
	          _this.book_transactions = book_transactions;
	          if (_this.book_transactions.length === 0) {
	            _this.zero_transaction_message = true;
	          }
	          return;
	        }, this.logError);
	      } else {
	        console.log('no id in getBookTransactions');
	        return;
	      }
	    }
	  }, {
	    key: 'returnBookIssue',
	    value: function returnBookIssue(book_transaction) {
	      var _this2 = this;

	      this.book_transaction_service.updateBookTransaction(book_transaction).then(function () {
	        _this2.getBookTransactions(_this2.shared_service.getBookID());
	      });
	    }
	  }, {
	    key: 'logError',
	    value: function logError(error) {
	      console.log("error: ", error);
	    }
	  }]);

	  return BookTransactionComponent;
	}()) || _class);
	Reflect.defineMetadata('design:paramtypes', [_book_transaction.BookTransactionService, _shared.SharedService], BookTransactionComponent);

/***/ },

/***/ 77:
/***/ function(module, exports) {

	module.exports = "<table *ngIf=\"shared_service.getBookID()\" width=\"400\" height=\"5\" id=\"book_transactions\">\n  <thead *ngIf='!zero_transaction_message'>\n    <tr>\n      <th>Transaction Date</th>\n      <th>Transaction Type</th>\n      <th>Transaction Status</th>\n      <th>Returned Date </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let book_transaction of book_transactions\">\n      <td>{{book_transaction.created_at | date }}</td>\n      <td>{{book_transaction.transaction_type | uppercase}}</td>\n      <td>{{ book_transaction.transaction_status ? 'Open': 'Closed'}}</td>\n      <td>{{ book_transaction.transaction_status ? 'Not Returned': book_transaction.updated_at | date }}</td>\n      <button *ngIf='book_transaction.transaction_status' class=\"btn-danger\" (click)=\"returnBookIssue(book_transaction)\">Return Book</button>\n    </tr>\n  </tbody>\n</table>\n<p class=\"flex-center\" *ngIf='zero_transaction_message'>No book transaction for this book</p>\n\n<div *ngIf='!shared_service.getBookID()' class=\"flex-center\">\n  <h3>No Book go to <a href=\"#/books\">Books</a> and select a book to view transactions</h3>\n</div>\n"

/***/ },

/***/ 78:
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
	      "Oct 1, 2009";

	      return date.slice(0, 4) + date.substr(date.length - 4);
	    }
	  }]);

	  return ReturnMonthYearPipe;
	}()) || _class);

/***/ },

/***/ 79:
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