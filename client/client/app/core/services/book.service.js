import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
  books_endpoint = '/books';
  constructor(http: Http) {
    this.http = http;
  }

  getBooks(){
    let all_books = this.http.get(this.books_endpoint, {headers: new Headers({ 'Content-Type' : 'application/json; charset=utf-8'})}).map((res)=>{
      return res.json()
    });
    return all_books
  }

  postBook(book){
    var book_params = {
      book: {
        book_name: book.book_name,
        author_name:book.author_name,
        isbn_code:book.isbn_code,
        book_category:book.book_category,
        book_quantity:book.book_quantity,
        published_date:new Date(book.published_date)
      }
    }
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers })
    // console.log(options);
    let body = JSON.stringify(book_params)
    console.log("book_params: ", book_params);
    console.log("JSON.stringify(book_params): ", body, options);
    return this.http.post(this.books_endpoint, JSON.stringify(book_params)).map((res)=>{
      console.log("it happen");
      console.log("res: ", res);
      res.json();
    }).catch((error) => console.log(Observable.throw(error.json().error || 'Server error')))
  }

}
