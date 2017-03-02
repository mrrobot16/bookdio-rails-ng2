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

  getBookTransactions(){
    console.log("get all book transactions");
    // get all book transactions
  }

  postBookTransaction(book){
    let request = new Request('/books/'+book.book.id+'/book_transactions', {method:"POST", mode:"cors", headers: new Headers({"Content-Type":"application/json"}), body:JSON.stringify(book)});
    return fetch(request).then((res)=>{return res.json()}).then((res)=> { console.log("res :", res)}, (error)=>{console.log("Error occurred: ", error)});
  }

  updateBookTransaction(){
    console.log("update book transactions");
    // update book transaction
  }


}
