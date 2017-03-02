import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  <div class="container body-container">
    <div>
    <h1>Welcome to our Book Recommendations</h1>
    <div class="button-group">
      <button class="btn-primary" type="button" name="button" (click)="viewBooks()">View Books</button>
      <button class="btn-success" type="button" name="button" (click)="viewBookTransactions()">View Book Transactions</button>
    </div>
    </div>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls:['./css/stylesheet.css']
})
export class AppComponent {
  constructor(router: Router) {
    this.router = router
  }
  viewBooks(){
    console.log(this.router);
    this.router.navigate(['books'])
  }
  viewBookTransactions(){
    // console.log(this.router);
    this.router.navigate(['book_transactions'])
  }


}
