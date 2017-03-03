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

  }

  ngOnInit(){
    console.log('init');
    this.book_id = this.shared_service.getBookID()
    this.getBookTransactions(this.book_id)
    this.zero_transaction_message = false;
  }

  getBookID(){
    return this.shared_service.getBookID()
  }

  subscribe() {
    this.subscription = this.shared_service.subscribe('receiver', (payload) => {
      console.log("book_transactionsComponent")
    })
  }

  getBookTransactions(id){
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
      console.log('no id in getBookTransactions');
      return;
    }
  }
  // sortByStatus(book_transactions){
  //   this.book_transactions = book_transactions.sort((a,b)=>{
  //     return (a === b)? 0 : a? -1 : 1;
  //   }
  // }

  returnBookIssue(book_transaction){
    this.book_transaction_service.updateBookTransaction(book_transaction).then(()=>{
      this.getBookTransactions(this.shared_service.getBookID())
    })
  }

  logError(error){
    console.log("error: ", error);
  }

}
