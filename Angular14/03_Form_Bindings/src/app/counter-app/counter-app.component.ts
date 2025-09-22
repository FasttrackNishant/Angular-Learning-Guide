import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  standalone: true,
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css'
})
export class CounterAppComponent {
  
  public value: number = 0;

  public counter()
  {
    this.value++;
  }

}
