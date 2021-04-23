import { Component } from '@angular/core';
import { MyLibOneService } from 'my-lib-one';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome Rockstar!!! ';

  constructor(private myLibOneService: MyLibOneService) {

  }
}
