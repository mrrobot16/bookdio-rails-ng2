import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container body-container">
      <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  constructor() {
    console.log('ON TOP23');
  }
}
