import { Component, Directive, Input } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { BookService } from '../../services/book.service';
import template from './book_form.partial.html';

@Component({
  selector: 'book-form',
  template: template
})
export class BookFormComponent {
  constructor(book_service: BookService, builder: FormBuilder){
    this.isOn = true;
    this.book_service = book_service;
    this.builder = builder;
    this.bookForm = this.builder.group({
      book_name: [''],
      author_name: [''],
      isbn_code: [''],
      book_quantity: [''],
      published_date: [''],
      book_category: ['Leadership'],
    });
  }

  onSubmit(bookForm, event){
    event.preventDefault();
    // bookForm.published_date = new Date(bookForm.published_date)
    return this.book_service.postBook(bookForm).subscribe(
            res => {
              console.log("res: ", res)
            },
            err => {
                console.log("err: ", err)
              }
        )
  }

  test(){
    return true
  }
}

@Directive({
  selector: '[disableFC][disableCond]'
})
export class DisableFCDirective {
  @Input() disableFC: FormControl;
  constructor() { }
  get disableCond(): boolean { // getter, not needed, but here only to completude
    return !!this.disableFC && this.disableFC.disabled;
  }
  @Input('disableCond') set disableCond(s: boolean) {
    if (!this.disableFC) return;
    else if (s) this.disableFC.disable();
    else this.disableFC.enable();
  }
}
