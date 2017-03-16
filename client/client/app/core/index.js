// Components
import { AppComponent } from './components/app/app.component';
import { TopNavBar } from './components/nav-bar/top-bar.component';
import { BookComponent} from './components/book/book.component';
import { BookItem } from './components/book/book_item.component';
import { BookFormComponent } from './components/book/book_form.component';
import { BookTransactionComponent } from './components/book_transactions/book_transaction.component';
// Services
import { BookService } from './services/book.service';
import { SharedService } from './services/shared.service';
import { BookTransactionService } from './services/book_transaction.service';


// Pipes
import { ReturnMonthYearPipe } from './pipes/return_month.pipe';
// Directive
import { HighlightDirective } from './directives/highlight.directive';
// Export all
export const CORE_PROVIDERS = [BookService, BookTransactionService, SharedService];
export const CORE_DECLARATIONS = [AppComponent, TopNavBar, BookComponent, BookItem, BookFormComponent, BookTransactionComponent, HighlightDirective, ReturnMonthYearPipe];
export { AppComponent, TopNavBar,BookComponent, BookTransactionComponent, BookItem };
