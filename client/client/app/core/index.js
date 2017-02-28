import { BookComponent, ReturnMonthYearPipe } from './components/book/book.component';
import { BookFormComponent, DisableFCDirective } from './components/book/book_form.component';
import { AppComponent } from './components/app/app.component';
import { BookService } from './services/book.service';
export { AppComponent, BookService };
export const CORE_PROVIDERS = [BookService];
export const CORE_DECLARATIONS = [BookComponent, ReturnMonthYearPipe, BookFormComponent, DisableFCDirective, AppComponent];
