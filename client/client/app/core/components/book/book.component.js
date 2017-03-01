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
    this.displayBooks()
  }

  displayBooks(){
    let books = this.book_service.getBooks()
    books.subscribe((books)=>{
      // console.log("this.books");
      // console.log(this.books);
      this.books = books

    }, this.logError)
  }

  selectBookID(event){
    console.log("selectBookID");
    this.book_id = parseInt(event.target.parentNode.id);
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
