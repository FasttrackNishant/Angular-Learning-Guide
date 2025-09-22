import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '04_mvc';
  name = "Jane Smith";

  changeData() {
    this.name = "Elon Musk";
  }

  fruits = ['apple', 'orange', 'mango']

  obj = {
    name:"Rohit",
    age : 23,
  }

  public msg = "";
}
