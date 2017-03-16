import { Component,  OnInit } from '@angular/core';
import {BookFormComponent} from './book_form.component'
import { BookService } from '../../services/book.service';
import { SharedService } from '../../services/shared.service';
import { HelperService } from '../../helpers/helper.service';
import { Subscription } from 'rxjs/Subscription';
import template from './book.component.html';

@Component({
  selector: 'books',
  template: template,
  styleUrls: ['./css/stylesheet.css','./css/mobile.css']
})
export class BookComponent implements OnInit {
  books = []
  current_books = []
  page_number = 1
  all_books = []
  constructor(book_service: BookService, shared_service: SharedService, helper_service: HelperService ){
    this.book_service = book_service
    this.shared_service = shared_service
    this.helper_service = helper_service
  }

  ngOnInit(){
    this.resetBookID()
    // this.send_id_book_transaction(this.book_id)
    this.displayBooks()
  }

  displayBooks(){
    let books = this.book_service.getBooks()
    books.subscribe((books)=>{
      this.books = books.sort((a,b)=>{
        return b.book_issued - a.book_issued
      })
      this.current_books = books
      this.setBookPage(this.page_number)
    }, this.helper_service.logError)
  }

  selectBookID(event){
    this.all_books = [].slice.call(event.target.parentElement.parentElement.children)
    this.all_books.forEach((book)=>{
      book.classList.contains('selectedBook') && book != event.target.parentElement ? this.setBookID(0) : this.helper_service.returnNone();
    })
    if(event.target.parentElement.classList.contains('selectedBook')){
      event.target.parentElement.classList.remove('selectedBook')
      this.setBookID(0)
    }
    else {
      this.unSelectBooks(this.all_books)
      event.target.parentElement.classList.add('selectedBook')
      this.setBookID(event.target.parentNode.id)
    }
  }

  resetBookID(){
    this.book_id = 0
    this.emitBookChange(this.book_id)
    // this.send_id_book_transaction(this.book_id)
    this.shared_service.setBookID(this.book_id)
  }

  sendBookID(id){
    this.book_id = parseInt(id)
    this.emitBookChange(this.book_id)
    // this.send_id_book_transaction(this.book_id)
    this.shared_service.setBookID(this.book_id)
  }

  // send_id_book_transaction(id) {
  //   this.shared_service.setBookID(id)
  // }

  setBookID(id){
    if(id){
      this.book_id = parseInt(id)
      this.emitBookChange(this.book_id)
      // this.send_id_book_transaction(this.book_id)
      this.shared_service.setBookID(this.book_id)
    }
    else {
      this.book_id = id
      this.emitBookChange(this.book_id)
      // this.send_id_book_transaction(this.book_id)
      this.shared_service.setBookID(this.book_id)
    }
  }

  emitBookChange(id){
    this.shared_service.pushBookID(id);
  }

  unSelectBooks(books){
    if(books){
      let promise = new Promise((r,e)=>{
        books.forEach((book)=>{
          if (book.classList.contains('selectedBook')){
            book.classList.remove('selectedBook')
          }
        })
      }, this.helper_service.logError)
      return promise;
    }
    else {
      this.all_books.forEach((book)=>{
        if(book.classList.contains('selectedBook')){
            book.classList.remove('selectedBook')
            this.resetBookID()
        }
      })
    }
  }

  setBookPage(page_number){
    if(page_number === 1){
      this.page_number = 1
      this.current_books = this.books.slice(0,10)
    }
    else {
      this.page_number = page_number
      this.current_books = this.books.slice((page_number-1)*10, page_number*10)
    }
  }

  paginateBooks(state){
    if(state=='previous'){
      if(this.page_number < 2){
        this.page_number = 1
        return
      }
      this.setBookPage(this.page_number-1)
    }
    if(state=="next"){
      if(this.current_books.length < 9){
        return;
      }
      else {
        this.setBookPage(this.page_number+1)
      }
    }
  }
}
