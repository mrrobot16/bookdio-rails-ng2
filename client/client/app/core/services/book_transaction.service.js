import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookTransactionService {
  book_transactions_endpoint = '/books/:book_id/book_transactions';
  update_book_transaction = '/books/:book_id/book_transactions/:id';
  constructor(http: Http) {
    this.http = http;
  }

  getBookTransactions(id){
    let all_book_transactions = this.http.get('/books/'+id+'/book_transactions', {headers: new Headers({ 'Content-Type' : 'application/json; charset=utf-8'})}).map((res)=>{
      return res.json()
    })
    return all_book_transactions;
  }

  postBookTransaction(book){
    let request = new Request('/books/'+book.book.id+'/book_transactions', {method:"POST", mode:"cors", headers: new Headers({"Content-Type":"application/json"}), body:JSON.stringify(book)});
    return fetch(request).then((res)=>{return res.json()}).then((res)=> { }, (error)=>{console.log("Error occurred: ", error)});
  }

  updateBookTransaction(book_transaction){
    let book = {
      book_transaction: {
        id:book_transaction.id
      }
    }
    let endpoint = '/books/'+book_transaction.book_id+'/book_transactions/'+book_transaction.id
    let request = new Request(endpoint, {method:"PUT", mode:"cors", headers: new Headers({"Content-Type":"application/json"}), body:JSON.stringify(book)})
    return fetch(request).then((res)=>{return res.json()}).then((res)=> { }, (error)=>{console.log("Error occurred: ", error)});
  }

}
