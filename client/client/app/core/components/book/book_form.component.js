import { Component, Input, OnInit } from '@angular/core';
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
  constructor(book_service: BookService, builder: FormBuilder){
    this.book_service = book_service;
    this.builder = builder;
  }

  ngOnInit(){
    // console.log("New Form");
    this.now = new Date()
    this.property_names = [];
    this.current_property_names = [];
    this.editMode = false;
    this.createForm()
    this.toggleShow = 'hideForm';

  }

  viewTransaction(){
    return;
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

  ngOnInit(){
    this.now = new Date().getMonth()
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
      book_category: ['Leadership'],
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
    }
    else {
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

  editBook(book){
    if(this.book_id){
      this.editMode = true;
      if(this.toggleShow == 'hideForm'){
        this.toggleShow = 'showForm'
        this.toggleDisabled("off")
      }
      else {
        this.toggleDisabled("off")
      }
    }
    else {
      console.log("else In editBook() this.book_id: ",this.book_id);
    }
  }



  onSubmit(bookForm, event){
    event.preventDefault();
    if(this.editMode && this.book_id){
      bookForm.id = this.book_id
      console.log(bookForm);
      // this.book_service.updateBook(bookForm)
    }
    else {
      console.log("onSubmit else");
      return this.postBook(bookForm)
    }
  }

  editBook(book){
    if(this.book_id){
      this.editMode = true;
      if(this.toggleShow == 'hideForm'){
        this.toggleShow = 'showForm'
        this.toggleDisabled("off")
      }
      else {
        this.toggleDisabled("off")
      }
    }
    else {
      console.log("else In editBook() no this.book_id: ",this.book_id);
    }
  }





  postBook(book){
    return this.book_service.postBook(book).subscribe(
    res => {console.log("res: ", res)},
    err => { console.log("err: ", err)});
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

  }

}
