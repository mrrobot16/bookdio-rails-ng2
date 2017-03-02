import { Component,  OnInit } from '@angular/core';
import { BookTransactionService } from '../../services/book_transaction.service';
import template from './book-transactions.component.html';

@Component({
  selector: 'book-transactions',
  template: template,
  styleUrls: ['./css/stylesheet.css']
})
export class BookTransactionComponent implements OnInit {
  books = [];
  constructor(book_transaction_service: BookTransactionService){
    this.book_transaction_service = book_transaction_service;
  }

  ngOnInit(){

  }

  returnBookIssue(){

  }

}
