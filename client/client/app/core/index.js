// Components
import { AppComponent } from './components/app/app.component';
import { BookComponent} from './components/book/book.component';
import { BookFormComponent} from './components/book/book_form.component';

// Services
import { BookService } from './services/book.service';
export { AppComponent, BookService };
// Pipes
import { ReturnMonthYearPipe } from './pipes/return_month.pipe';
// Directive
import {HighlightDirective} from './directives/hightlight.directive';
export const CORE_PROVIDERS = [BookService];
export const CORE_DECLARATIONS = [BookComponent, ReturnMonthYearPipe, BookFormComponent, HighlightDirective, AppComponent];
