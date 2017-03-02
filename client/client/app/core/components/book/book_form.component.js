import { Component, Input, Output, EventEmitter, OnInit, ElementRef } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { BookService } from '../../services/book.service';
import { BookTransactionService } from '../../services/book_transaction.service';
import 'rxjs/add/operator/toPromise';
import template from './book_form.partial.html';

@Component({
  selector: 'book-form',
  template: template,
  styleUrls:['./css/book.css']
})
export class BookFormComponent implements OnInit {
  @Input() book_id;
  @Input() all_books;
  @Output() getAllBooks = new EventEmitter()
  constructor(book_service: BookService, book_transaction_service: BookTransactionService, builder: FormBuilder, element: ElementRef){
    this.el = element;
    this.book_service = book_service;
    this.book_transaction_service = book_transaction_service;
    this.builder = builder;
  }

  ngOnInit(){
    this.now = new Date()
    this.property_names = [];
    this.current_property_names = [];
    this.editMode = false;
    this.toggleShow = 'hide';
    this.toggleMessage = 'hideMessage'
    this.duplicate_isbn = null
    this.createForm()
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
      console.log(this.all_books);
      let book = this.filterBookByID(this.all_books, this.book_id)
      console.log(book);
      if(book.book_quantity > 0){
        book = {
          book: {
            id:this.book_id
          }
      }
      console.log("book.book_quantity < 1 is true");
      return this.book_transaction_service.postBookTransaction(book).then(()=>{
        this.getAllBooks.emit();
        this.book_id = 0
        });
      }
      else {
        console.log("Cant ISSUE Because no stock");
      }
    }
  }

  createForm(){
    this.bookForm = this.builder.group({
        book_name: ['Art Of War'],
        author_name: ['Sun Tzu'],
        isbn_code: ['523-1-19025-264-3'],
        book_quantity: [5],
        published_date: ['2017-04'],
        book_category: ['Strategy']
    })
    this.checkBookDuplicates();
   }

   checkBookDuplicates(){
     this.bookForm.get('isbn_code').valueChanges.subscribe((res)=>{
       this.isbn_code = res
       return new Promise((resolve,reject)=>{
         let book = this.all_books.filter((book)=>{
         return book.isbn_code == this.isbn_code
        })
        if(book.length > 0){
          this.duplicate_isbn = true
          this.toggleMessage = 'showMessage'
        }
        else {
          this.duplicate_isbn = false
          this.toggleMessage = 'hideMessage '
        }
      })
    })
   }

   postBook(book){
     return this.book_service.postBook(book).then(()=>{
       this.getAllBooks.emit();
     })
   }

   onSubmit(bookForm, event){
     event.preventDefault();
     if(this.editMode && this.book_id){
       return this.book_service.updateBook(this.book_id, bookForm.book_quantity).then(()=>{
         this.getAllBooks.emit()
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

  property_names_array(){
    if(this.current_property_names.length > 0){
      return this.current_property_names;
    }
    else {
      this.property_names = []
      for (var book_property in this.bookForm.root.value){
        this.property_names.push(book_property);
      }
      return this.property_names;
    }
  }

  toggleDisabled(status) {
    this.status = status;
    if(this.status=="off"){
     this.current_property_names = this.property_names_array().filter(function(book){
        return book != "book_quantity";
      })
     this.current_property_names.forEach((inputs)=>{
        this.bookForm.root.get(inputs).disable();
     })
    }
    if(this.status=="on") {
      this.current_property_names = this.property_names_array().filter(function(book){
         return book;
       })
      this.current_property_names.forEach((inputs)=>{
         this.bookForm.root.get(inputs).enable();
      })
    }
  }

  showForm(){
    let book_id = this.book_id
    console.log(book_id);
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

  editBook(book){
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
    console.log("no this.book_id");
    }
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
        console.log("book[0].book_issued is not < 1");
      }
    }
    else {
      console.log("no book ID found");
    }
  }

}
