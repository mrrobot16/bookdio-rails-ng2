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
    this.book_transactions = ["1","2","3","5","6"];
  }
  returnBookIssue(book_transaction){
    console.log(book_transaction);
  }

}
