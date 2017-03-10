import { Component,  OnInit } from '@angular/core';
import {BookFormComponent} from './book_form.component'
import { BookService } from '../../services/book.service';
import { SharedService } from '../../services/shared.service';
import { Subscription } from 'rxjs/Subscription';
import template from './book.component.html';

@Component({
  selector: 'books',
  template: template,
  styleUrls: ['./css/stylesheet.css']
})
export class BookComponent implements OnInit {
  books = [];
  all_books
  book_ids = [];
  subscription = Subscription;
  constructor(book_service: BookService, shared_service: SharedService){
    this.book_service = book_service;
    this.shared_service = shared_service;
    this.subscribe();
  }

  ngOnInit(){
    this.book_id = 0;
    this.send_id_book_transaction(this.book_id)
    this.displayBooks()
  }

  displayBooks(){
    let books = this.book_service.getBooks()
    books.subscribe((books)=>{
      this.books = books
    }, this.logError)
  }

  send_id_book_transaction(id) {
    let payload = {
      id:id,
      text: `Message ${id}`
    }
    this.shared_service.broadcast('receiver', payload);
  }

  selectBookID(event){
    this.all_books = event.target.parentElement.parentElement.children
    if(event.target.parentElement.classList.contains('selectedBook')){
      event.target.parentElement.classList.remove('selectedBook')
      this.resetBookID()
    }
    else {
      this.unSelectBooks(this.all_books)
      event.target.parentElement.classList.add('selectedBook')
      this.sendBookID(event.target.parentNode.id)
    }
  }

  resetBookID(){
    this.book_id = 0
    this.send_id_book_transaction(this.book_id)
  }

  sendBookID(id){
    this.book_id = parseInt(id);
    this.send_id_book_transaction(this.book_id)
  }

  unSelectBooks(books){
    if(books){
      books = [].slice.call(books)
      let promise = new Promise((r,e)=>{
        books.forEach((book)=>{
          if (book.classList.contains('selectedBook')) {
            book.classList.remove('selectedBook')
          }
        })
      }, this.logError)
      return promise;
    }
    else {
      this.all_books = [].slice.call(this.all_books)
      this.all_books.forEach((book)=>{
        if(book.classList.contains('selectedBook')){
          book.classList.remove('selectedBook')
          this.book_id = 0
          this.send_id_book_transaction(this.book_id)
        }
      })
    }
  }

  paginateBooks(){
    console.log(this.books);
  }

  subscribe(){
      this.subscription = this.shared_service.subscribe('sender', (payload) => {
        // this.book_ids.push(payload);
      })
    }

  logError(error){
    console.log("error: ", error);
  }
}
