import { Component} from '@angular/core';
import {SharedService} from '../../services/shared.service';


@Component({
  selector: 'my-app',
  template: `
  <div class="container body-container">
      <div>
        <span class='flex-center'><h1>Welcome to our Book Recommendations</h1></span>
        <top-nav-bar></top-nav-bar>
      </div>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls:['./css/stylesheet.css']
})
export class AppComponent {
  constructor(){}
}
