import { Component, Input, Output, EventEmitter, OnInit, ElementRef } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { BookService } from '../../services/book.service';
import { BookTransactionService } from '../../services/book_transaction.service';
import 'rxjs/add/operator/toPromise';
import template from './book_form.partial.html';

@Component({
  selector: 'book-form',
  template: template,
  styleUrls:['./css/stylesheet.css']
})
export class BookFormComponent implements OnInit {
  @Input() book_id;
  @Input() all_books;
  @Input() page_number
  @Output() getAllBooks = new EventEmitter()
  @Output() deSelect = new EventEmitter()
  constructor(book_service: BookService, book_transaction_service: BookTransactionService,
    builder: FormBuilder, element: ElementRef){
    this.el = element;
    this.book_service = book_service;
    this.book_transaction_service = book_transaction_service;
    this.builder = builder;
  }

  ngOnInit(){
    this.now = new Date()
    this.property_names = ["book_name", "author_name", "isbn_code",
    "published_date", "book_category", "book_quantity"]

    this.editMode = false;
    this.toggleShow = 'hide';
    this.toggleMessage = 'hideMessage'
    this.toggleEditError = 'hideMessage'
    this.duplicate_isbn = null
    this.createForm()
  }

  toggleEditMessage(){
    this.toggleEditError = 'showMessage'
    if(this.toggleEditError == 'showMessage'){
      this.toggleEditError = 'hideMessage'
    }
    else {
      this.toggleEditError == 'showMessage'
    }
  }

  filterBookByID(books, book_id){
    let book = books.filter((book)=>{
      return book.id === book_id
    })
    return book[0];
  }

  issueBook(){
    // books that need reclick so it marks as selected
    // console.log(this.el.nativeElement.parentElement.parentElement.children[3].children["0"].children[1].children);
    if(this.book_id){
      let book = this.filterBookByID(this.all_books, this.book_id)
      if(book.book_quantity > 0){
        book = {
          book: {
            id:this.book_id
          }
      }
      return this.book_transaction_service.postBookTransaction(book).then(()=>{
        this.getAllBooks.emit(this.page_number);
        this.book_id = 0
        });
      }
      else {
      }
    }
  }

  createForm(){
    this.bookForm = this.builder.group({
        book_name: [''],
        author_name: [''],
        isbn_code: [''],
        book_quantity: [''],
        published_date: [''],
        book_category: ['']
    })
    this.checkBookDuplicates();
   }

   checkBookDuplicates(){
     this.bookForm.get('isbn_code').valueChanges.subscribe((res)=>{
       this.isbn_code = res
         let book = this.all_books.filter((book)=>{
         return book.isbn_code == this.isbn_code
        })
        if(book.length > 0){
          this.duplicate_isbn = true
          this.toggleMessage = 'showMessage'
        }
        else {
          this.duplicate_isbn = false
          this.toggleMessage = 'hideMessage'
        }
    })
   }

   postBook(book){
     return this.book_service.postBook(book).then(()=>{
       this.getAllBooks.emit();
       this.bookForm.reset();
     })
   }

   onSubmit(bookForm, event){
     event.preventDefault();
     if(this.editMode && this.book_id){
       return this.book_service.updateBook(this.book_id, bookForm.book_quantity).then(()=>{
         this.getAllBooks.emit(page_number)
       })
     }
     else if (this.duplicate_isbn && !this.editMode) {
       let book = this.all_books.filter((book)=>{
         return book.isbn_code == this.isbn_code
       })[0]
       book.book_quantity = bookForm.book_quantity + book.book_quantity
       return this.book_service.updateBook(book.id, book.book_quantity).then(()=>{
         this.getAllBooks.emit()
       })
     }
     else {
       this.postBook(bookForm)
     }
   }


  toggleDisabled(status) {
    let property_names = this.property_names.filter(property=>{
      return property != "book_quantity"
    })
    this.status = status;
    if(this.status=="off"){
     property_names.forEach((inputs)=>{
        this.bookForm.root.get(inputs).disable();
     })
    }
    if(this.status=="on") {
      property_names.forEach((inputs)=>{
         this.bookForm.root.get(inputs).enable();
      })
    }
  }

  showForm(){
    this.cleanForm()
    this.toggleEditError = 'hideMessage'
    let book_id = 0
    // console.log(book_id);
    if(this.editMode){
      this.editMode = false;
      this.toggleDisabled("on")
    }
    else {
      this.editMode = false
      this.toggleDisabled("on")
    }
    if(this.toggleShow == 'hide'){
      if(this.editMode){
        this.editMode = false;
      }
      else {
        this.toggleShow = 'show'
      }
      if(this.toggleShow == 'hide'){
        this.toggleShow = 'show'
        this.toggleDisabled("on")
      }
      else {
        this.toggleDisabled("on")
        }
    }
  }

  editBook(){
    this.loadBookEdit()
    this.toggleEditError = 'hideMessage'
    if(this.book_id){
      this.editMode = !this.editMode;
      if(this.toggleShow == 'hide'){
        this.toggleShow = 'show'
        this.toggleDisabled("off")
      }
      else {
        this.toggleDisabled("off")
      }
    }
    else {
      this.toggleEditError = 'showMessage'

    }
    this.toggleMessage = 'hideMessage'
  }

  loadBookEdit(){
    if(this.book_id){
      let book = this.all_books.filter((book)=>{return book.id == this.book_id})
      this.property_names.forEach(prop_name=>{
        prop_name=='published_date' ? this.bookForm.get(prop_name).setValue(book[0][prop_name].slice(0,-3)) : this.bookForm.get(prop_name).setValue(book[0][prop_name])
      })
    }
  }
  cleanForm(){
    this.deSelect.emit()
    this.property_names.forEach((prop_name)=>{
      this.bookForm.get(prop_name).setValue(null)
    })
  }

  deleteBook(){
    if(this.book_id){
      let book = this.all_books.filter((book)=>{
        return book.id == this.book_id
      });
      if(book[0].book_issued < 1){
        return this.book_service.deleteBook(this.book_id).then(()=>{
          this.getAllBooks.emit();
        })
      }
      else {

      }
    }
    else {

    }
  }

}
