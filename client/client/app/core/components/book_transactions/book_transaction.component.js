import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookTransactionService } from '../../services/book_transaction.service';
import { BookService } from '../../services/book.service';
import { SharedService } from '../../services/shared.service';
import template from './book_transaction.component.html';

@Component({
  selector: 'book-transactions',
  template: template,
  styleUrls: ['./css/stylesheet.css']
})
export class BookTransactionComponent implements OnInit {
  book = {}
  constructor(book_service: BookService, book_transaction_service: BookTransactionService, shared_service: SharedService, router: ActivatedRoute){
    this.book_transaction_service = book_transaction_service;
    this.book_service = book_service;
    this.shared_service = shared_service;
    this.router = router
  }

  ngOnInit(){
    this.book_id = parseInt(this.router.snapshot.params.id)
    this.getBook(this.book_id)
    this.getBookTransactions(this.book_id)
    this.zero_transaction_message = false;
  }

  getBook(id){
    if(id){
      let book = this.book_service.getBook(id)
      book.subscribe((book)=>{
        this.book = book;
      })
    }
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
  }

  returnBookIssue(book_transaction){
    this.book_transaction_service.updateBookTransaction(book_transaction).then(()=>{
      this.getBookTransactions(this.book_id)
    })
  }

  logError(error){
    console.log("error: ", error);
  }

}
