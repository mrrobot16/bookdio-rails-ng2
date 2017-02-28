import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
  books_endpoint = '/books';
  constructor(http: Http) {
    this.http = http;
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  getBooks(){
    let all_books = this.http.get(this.books_endpoint, {headers: new Headers({ 'Content-Type' : 'application/json; charset=utf-8'})}).map((res)=>{
      return res.json()
    });
    return all_books
  }

  postBook(book){
    let book_params = {
      book: book
    }
    let body = this.stringify(book_params)
    return this.http.post(this.books_endpoint, body,{headers: this.headers}).map((res)=>{
      return res.json();
    })
  }

  stringify(object){
    return JSON.stringify(object)
  }
}
