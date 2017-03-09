import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
@Injectable()
export class SharedService {
  handler = new Subject();
  book_id = 0;
  constructor() {

  }

  broadcast(type, payload){
    // console.log("broadcast");
    this.handler.next({ type, payload });
    this.book_id = payload.id
  }

  getBookID(){
    if (this.book_id) {
      console.log(this.book_id);
      return this.book_id
    }
    else {
      // console.log('no_book_id');
      return 0;
    }
  }

subscribe(type, callback){
  return this.handler
    .filter(message => message.type === type)
    .map((message) => {
      message.payload
      // console.log(message);
    })
    .subscribe(callback);
}

}
