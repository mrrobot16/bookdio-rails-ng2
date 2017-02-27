import { BookComponent } from './components/book/book.component';
export const routes = [
  { path: '', component: BookComponent, pathMatch: 'full' },
  { path: 'books', component: BookComponent }
];
