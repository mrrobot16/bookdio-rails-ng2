import { Component, Pipe, PipeTransform, OnInit } from '@angular/core';
import {BookFormComponent} from './book_form.component'
import { BookService } from '../../services/book.service';

import template from './book.component.html';

@Component({
  selector: 'books',
  template: template,
  styleUrls: ['./css/book.css']
})
export class BookComponent implements OnInit {
  books = [];
  constructor(book_service: BookService){
    this.book_service = book_service;
    this.book_id = 0;
  }

  ngOnInit(){
    this.selectBook = ''
    this.displayBooks()
  }

  displayBooks(){
    let books = this.book_service.getBooks()
    books.subscribe((books)=>{
      this.books = books
    }, this.logError)
  }

  selectBookID(event){
    let all_books = event.target.parentElement.parentElement.children
    for(var x=0; x < all_books.length; x++ ){
      all_books[x].classList.remove('selectedBook');
    }
    this.book_id = parseInt(event.target.parentNode.id);
    console.log("this.book_id: ", this.book_id);
    event.target.parentElement.classList.add('selectedBook')
  }

  logError(error){
    console.log("error: ", error);
  }
}


@Pipe({name: 'returnMonthYear'})
export class ReturnMonthYearPipe implements PipeTransform {
  transform(date) {
    "Oct 1, 2009"
    return date.slice(0,4)+date.substr(date.length-4)
  }
}
