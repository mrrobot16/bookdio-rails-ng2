import { Component, OnInit } from '@angular/core';
import { BookTransactionService } from '../../services/book_transaction.service';
import { BookService } from '../../services/book.service';
import { SharedService } from '../../services/shared.service';
import {Subscription} from 'rxjs/Subscription';
import template from './book_transaction.component.html';

@Component({
  selector: 'book-transactions',
  template: template,
  styleUrls: ['./css/stylesheet.css']
})
export class BookTransactionComponent implements OnInit {
  subscription = Subscription;
  book = {}
  constructor(book_service: BookService, book_transaction_service: BookTransactionService, shared_service: SharedService){
    this.book_transaction_service = book_transaction_service;
    this.book_service = book_service;
    this.shared_service = shared_service;
  }

  ngOnInit(){
    this.subscribe()
    this.book_id = this.shared_service.getBookID()
    this.getBook(this.book_id)
    this.getBookTransactions(this.book_id)
    this.zero_transaction_message = false;
  }

  getBookID(){
    return this.shared_service.getBookID()
  }

  getBook(id){
    if(id){
      let book = this.book_service.getBook(id)
      book.subscribe((book)=>{
        this.book = book;
        console.log(this.book);
      })
    }
  }
  
  subscribe() {
    this.subscription = this.shared_service.subscribe('receiver', (payload) => {
    })
  }

  getBookTransactions(id){
    console.log('getBTRams');
    if(id){
      let book_transactions = this.book_transaction_service.getBookTransactions(id)
      book_transactions.subscribe((book_transactions)=>{
        this.book_transactions = book_transactions
        if(this.book_transactions.length === 0){
          this.zero_transaction_message = true
        }
        return;
      }, this.logError)
    }
    else {
      return;
    }
  }

  returnBookIssue(book_transaction){
    this.book_transaction_service.updateBookTransaction(book_transaction).then(()=>{
      this.getBookTransactions(this.shared_service.getBookID())
    })
  }

  logError(error){
    console.log("error: ", error);
  }

}
