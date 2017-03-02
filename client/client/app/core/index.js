// Components
import { AppComponent } from './components/app/app.component';
import { BookComponent} from './components/book/book.component';
import { BookFormComponent} from './components/book/book_form.component';
// Services
import { BookService } from './services/book.service';
import { BookTransactionService } from './services/book_transaction.service';

// Pipes
import { ReturnMonthYearPipe } from './pipes/return_month.pipe';
// Directive
import { HighlightDirective } from './directives/highlight.directive';
// Export all
export const CORE_PROVIDERS = [BookService, BookTransactionService];
export const CORE_DECLARATIONS = [BookComponent, ReturnMonthYearPipe, BookFormComponent, HighlightDirective, AppComponent];
export { AppComponent, BookService, BookTransactionService, HighlightDirective };
