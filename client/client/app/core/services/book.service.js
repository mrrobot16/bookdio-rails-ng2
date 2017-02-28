import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
  constructor(http: Http) {
    this.http = http;
  }

  getBooks(){
    let all_books = this.http.get('/books', {headers: new Headers({ 'Content-Type' : 'application/json; charset=utf-8'})}).map(res=>console.log(res.json()); return res.json());
    return all_books
  }


}
