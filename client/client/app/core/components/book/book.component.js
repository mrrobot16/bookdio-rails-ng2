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
    // this.subscription = subscription;
    this.shared_service = shared_service;
    this.book_id = 0;
    this.subscribe();
  }

  ngOnInit(){
    this.displayBooks()
  }

  displayBooks(){
    let books = this.book_service.getBooks()
    books.subscribe((books)=>{
      this.books = books
    }, this.logError)
  }

  send_id(id) {
    let payload = {
      id:id,
      text: `Message ${id}`
    }
    this.shared_service.broadcast('receiver', payload);
  }

  selectBookID(event){
    let all_books = event.target.parentElement.parentElement.children
    for(var x=0; x < all_books.length; x++ ){
      all_books[x].classList.remove('selectedBook');
    }
    this.book_id = parseInt(event.target.parentNode.id);
    this.send_id(this.book_id)
    console.log("this.book_id: ", this.book_id);
    event.target.parentElement.classList.add('selectedBook')
  }

  subscribe() {
      this.subscription = this.shared_service.subscribe('sender', (payload) => {
        console.log("bookComponet");
        this.book_ids.push(payload);
      })
    }

  logError(error){
    console.log("error: ", error);
  }
}
