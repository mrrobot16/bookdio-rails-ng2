import { BookComponent, BookTransactionComponent } from './index';
export const routes = [
  { path: '', component: BookComponent, pathMatch: 'full' },
  { path: 'books', component: BookComponent },
  { path:'book_transactions/:id', component: BookTransactionComponent}
];
