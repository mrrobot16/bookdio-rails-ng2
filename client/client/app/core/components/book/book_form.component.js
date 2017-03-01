import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { BookService } from '../../services/book.service';
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
  // @Input() disable_btn;
  @Output() getAllBooks = new EventEmitter()
  constructor(book_service: BookService, builder: FormBuilder){
    this.book_service = book_service;
    this.builder = builder;
  }



  ngOnInit(){
    this.now = new Date()
    this.property_names = [];
    this.current_property_names = [];
    this.editMode = false;
    this.createForm()
    this.toggleShow = 'hideForm';

  }

  issueBook(){
    return;
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
    if(this.editMode){
      this.editMode = false;
      this.toggleDisabled("on")
    }
    else {
      this.editMode = false
      this.toggleDisabled("on")
      console.log(" else in if(this.editMode:) ");
    }
    if(this.toggleShow == 'hideForm'){
    if(this.editMode){
      this.editMode = false;
    }
    else {
      console.log(" else this.editMode: ");
    }
    if(this.toggleShow == 'hideForm'){
      this.toggleShow = 'showForm'
      this.toggleDisabled("on")
    }
    else {
      this.toggleDisabled("on")
      }
    }
  }

  onSubmit(bookForm, event){
    event.preventDefault();
    if(this.editMode && this.book_id){
      console.log(bookForm);
      return this.book_service.updateBook(this.book_id, bookForm.book_quantity).then(()=>{
        this.getAllBooks.emit()
      })
    }
    else {
      console.log("onSubmit else");
      this.postBook(bookForm)
    }
  }

  postBook(book){
    return this.book_service.postBook(book).then(()=>{
      this.getAllBooks.emit();
    })
  }

  editBook(book){
    if(this.book_id){
      this.editMode = !this.editMode;
      if(this.toggleShow == 'hideForm'){
        this.toggleShow = 'showForm'
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

  printBookID() {
    if(this.book_id){
      console.log("in printBookID if(this.book_id) : ", this.book_id);
      console.log("this.editMode", this.editMode);
    }
    else{
      console.log("else printBookID");
      console.log("this.book_id: ", this.book_id);
      console.log("this.editMode: ", this.editMode);
    }
  }

  deleteBook(){
    if(this.book_id){
      let book = this.all_books.filter((book)=>{
        return book.id == this.book_id
      });
      if(book[0].book_issued < 1){
        console.log("book[0].book_issued is below 1 so it can be deleted");
        console.log(book[0].book_issued);
        return this.book_service.deleteBook(this.book_id).then(()=>{
          this.getAllBooks.emit();
        })
      }
      else {
        console.log("book[0].book_issued is not < 1");
        console.log(book[0].book_issued);
      }
    }
    else {
      console.log("no book ID found");
    }
  }

}
