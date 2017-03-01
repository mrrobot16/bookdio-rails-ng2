import { BookComponent} from './components/book/book.component';
import { ReturnMonthYearPipe } from './pipes/return_month.pipe';
import { BookFormComponent} from './components/book/book_form.component';
import { AppComponent } from './components/app/app.component';
import { BookService } from './services/book.service';
export { AppComponent, BookService };
export const CORE_PROVIDERS = [BookService];
export const CORE_DECLARATIONS = [BookComponent, ReturnMonthYearPipe, BookFormComponent, AppComponent];
