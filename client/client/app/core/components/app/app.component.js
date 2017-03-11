import { Component} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
  <div class="container body-container">
    <div>
    <h1>Welcome to our Book Recommendations</h1>
    <div class="flex-center">
      <button class="btn-primary" type="button" name="button" (click)="viewBooks()">View Books</button>
      <button class="btn btn-warning" [disabled]='button_disable' type="button" name="button" (click)="viewBookTransactions()">View Book Transactions</button>
    </div>
    </div>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls:['./css/stylesheet.css']
})
export class AppComponent {
  button_disable = true
  constructor(router: Router, shared_service: SharedService) {
    this.shared_service = shared_service
    this.router = router
    this.shared_service.selectBookEmitted.subscribe((book_id)=>{
      if(book_id){
        this.button_disable = false
      }
      else {
        this.button_disable = true
      }
    })
  }

  viewBooks(){
    this.router.navigate(['books'])
  }

  viewBookTransactions(){
    this.router.navigate(['book_transactions'])
  }
}
