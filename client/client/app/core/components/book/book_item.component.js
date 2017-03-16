import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'book-item',
  template: `
    <table id='books' class="table" width="400" height="5">
    <thead>
      <tr class="background-top">
        <th>Book Name</th>
        <th>Author</th>
        <th>ISBN</th>
        <th>Book Quantity</th>
        <th>Published Date</th>
        <th>Book Category</th>
        <th>Books Issued</th>
      </tr>
    </thead>
    <tbody>
          <tr class="animate" [myHighlight]="blue" id="{{book.id}}" [ngClass]="selectBook"  *ngFor="let book of current_books" (click)="selectBookID($event)">
            <td data-label="Book Name">{{book.book_name }}</td>
            <td>{{book.author_name}}</td>
            <td>{{book.isbn_code}}</td>
            <td>{{book.book_quantity}}</td>
            <td>{{book.published_date | date | returnMonthYear }}</td>
            <td>{{book.book_category}}</td>
            <td>{{book.book_issued}}</td>
          </tr>
    </tbody>
  </table>
  `,
  styleUrls: ['./css/stylesheet.css']
})
export class BookItem implements OnInit {
  // @Input() book;
  @Input() current_books;
  @Output() selectBook = new EventEmitter();
  constructor(){
  }

  ngOnInit(){

  }

  selectBookID(event){
    this.selectBook.emit(event)
  }


}
