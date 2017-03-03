import { Component, OnInit } from '@angular/core';
import { BookTransactionService } from '../../services/book_transaction.service';
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
  constructor(book_transaction_service: BookTransactionService, shared_service: SharedService){
    this.book_transaction_service = book_transaction_service;
    this.shared_service = shared_service;
    this.subscribe()
    this.getBookTransactions(this.shared_service.getBookID())
  }

  ngOnInit(){
    console.log('init');
  }

  subscribe() {
    this.subscription = this.shared_service.subscribe('receiver', (payload) => {
      console.log("book_transactionsComponent")
    })
  }

  getBookTransactions(id){
    let book_transactions = this.book_transaction_service.getBookTransactions(id)
    book_transactions.subscribe((book_transactions)=>{
      this.book_transactions = book_transactions
    }, this.logError)
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
