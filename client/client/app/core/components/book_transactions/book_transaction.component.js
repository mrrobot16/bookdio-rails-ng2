import { Component, OnInit } from '@angular/core';
import { BookTransactionService } from '../../services/book_transaction.service';
import template from './book_transaction.component.html';

@Component({
  selector: 'book-transactions',
  template: template,
  styleUrls: ['./css/stylesheet.css']
})
export class BookTransactionComponent implements OnInit {
  constructor(book_transaction_service: BookTransactionService){
    this.book_transaction_service = book_transaction_service;

  }

  ngOnInit(){
    this.getBookTransactions(2)
  }

  getBookTransactions(id){
    let book_transactions = this.book_transaction_service.getBookTransactions(id)
    book_transactions.subscribe((book_transactions)=>{
      this.book_transactions = book_transactions
    }, this.logError)
  }
  returnBookIssue(book_transaction){
    this.book_transaction_service.updateBookTransaction()
  }

  returnBoolean(bool){
    return bool
  }

  logError(error){
    console.log("error: ", error);
  }

}
