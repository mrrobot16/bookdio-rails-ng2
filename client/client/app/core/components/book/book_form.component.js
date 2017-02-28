import { Component, Directive, ElementRef, Input } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { BookService } from '../../services/book.service';
import 'rxjs/add/operator/toPromise';
import template from './book_form.partial.html';

@Component({
  selector: 'book-form',
  template: template,
  styleUrls:['./css/book.css']
})
export class BookFormComponent {
  @Input() book_id;
  constructor(book_service: BookService, builder: FormBuilder){
    this.now = new Date()
    this.property_names = [];
    this.current_property_names = [];
    this.editMode = true;
    this.book_service = book_service;
    this.builder = builder;
    this.bookForm = this.builder.group({
      book_name: ['The Hard Thing About Hard Things'],
      author_name: ['Ben Horowitz'],
      isbn_code: ['978-1-26310-644-4'],
      book_quantity: [1],
      published_date: [this.now],
      book_category: ['Leadership'],
    })
    // this.editBook()
  }

  property_names_array(){
    if(this.current_property_names.length > 0){
      return this.current_property_names;
    }
    else {
      for (var book_property in this.bookForm.root.value){
        this.property_names.push(book_property);
      }
      return this.property_names;
    }
  }

  toggleDisabled(status) {
    var property_names =
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

  onSubmit(bookForm, event){
    event.preventDefault();
    this.book_id ? console.log("this.book_id from component: ", this.book_id) : console.log('no book id');
    // console.log(bookForm.published_date);
    // bookForm.published_date = new Date(bookForm.published_date)
    return this.postBook(bookForm)
  }

  showForm(){
    this.book_id = 0
    this.toggleDisabled("on")
  }

  postBook(book){
    console.log(book);
    return this.book_service.postBook(book).subscribe(
            res => {
              console.log("res: ", res)
            },
            err => {
                console.log("err: ", err)
              }
        )
  }

  editBook(book){
    this.toggleDisabled('off');
  }

  deleteBook(){

  }


}
