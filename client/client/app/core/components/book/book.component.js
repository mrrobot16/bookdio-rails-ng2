import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

import template from './book.component.html';

@Component({
  selector: 'books',
  template: template,
  styleUrls: ['./css/book.css']
})
export class BookComponent {
  books = [];
  constructor(book_service: BookService){
    this.book_service = book_service;
    this.dispayBooks()
  }

  dispayBooks(){
    let books = this.book_service.getBooks()
    books.subscribe((books)=>{
      this.setBooks(books);
    }, this.logError)
  }

  setBooks(books){
    this.books = books
    console.log(this.books);
  }


  logError(error){
    console.log("error: ", error);
  }
}
