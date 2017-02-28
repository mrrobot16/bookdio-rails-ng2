import { Component } from '@angular/core';
import {BookService} from '../../services/book.service'
import template from './book.component.html';

@Component({
  selector: 'books',
  template: template,
  styleUrls: ['./css/book.css']
})
export class BookComponent {
}
