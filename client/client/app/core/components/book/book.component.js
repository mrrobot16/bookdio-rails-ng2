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
    let all_books = event.target.parentElement.parentElement.children
    all_books = [].slice.call(all_books);
    all_books.forEach((book)=>{
      if(book.classList.contains('selectedBook') && book != event.target.parentElement){
        book.classList.remove('selectedBook')
      }
    })
    if(event.target.parentElement.classList.contains('selectedBook')){
      event.target.parentElement.classList.remove('selectedBook')
      this.book_id = 0
      this.send_id_book_transaction(this.book_id)
    }
    else {
      this.book_id = parseInt(event.target.parentNode.id)
      this.send_id_book_transaction(this.book_id)
      event.target.parentElement.classList.toggle('selectedBook')
    }
  }


  subscribe() {
      this.subscription = this.shared_service.subscribe('sender', (payload) => {
        this.book_ids.push(payload);
      })
    }

  logError(error){
    console.log("error: ", error);
  }
}
