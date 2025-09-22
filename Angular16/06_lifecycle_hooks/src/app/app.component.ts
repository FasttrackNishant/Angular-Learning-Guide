import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '06_lifecycle_hooks';

  counter = 5;
  increment()
  {
    this.counter++;
  }

  decrement()
  {
    this.counter--;
  }
}
