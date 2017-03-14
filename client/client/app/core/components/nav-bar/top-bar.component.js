import {Component} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {Router} from '@angular/router';
@Component({
  selector: 'top-nav-bar',
  template: `
        <div class="top-nav flex-center container">
          <button class="btn-primary" type="button" name="button" (click)="viewBooks()">View Books</button>
          <button class="btn btn-warning" [disabled]='button_disable' type="button" name="button" (click)="viewBookTransactions()">View Book Transactions</button>
        </div>
  `,
  styleUrls:['./css/stylesheet.css']
})
export class TopNavBar {
  button_disable = true
  constructor(shared_service: SharedService, router: Router) {
    this.router = router
    this.shared_service = shared_service
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
