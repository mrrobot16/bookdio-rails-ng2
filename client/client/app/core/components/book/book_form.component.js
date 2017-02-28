import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { BookService } from '../../services/book.service';
import template from './book_form.partial.html';

@Component({
  selector: 'book-form',
  template: template
})
export class BookFormComponent {
  constructor(book_service: BookService, builder: FormBuilder){
    this.book_service = book_service;
    this.builder = builder;
    this.bookForm = this.builder.group({
      book_name: [''],
      author_name: [''],
      isbn_code: [''],
      book_quantity: [''],
      published_date: [''],
      book_category: ['Leadership'],
    });
  }

  onSubmit(bookForm){
    console.log(bookForm);
  }


}
