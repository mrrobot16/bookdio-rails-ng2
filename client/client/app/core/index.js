import { BookComponent } from './components/book/book.component';
import { AppComponent } from './components/app/app.component';
import { BookService } from './services/book.service';
export { AppComponent, BookService };
export const CORE_PROVIDERS = [BookService];
export const CORE_DECLARATIONS = [BookComponent, AppComponent];
