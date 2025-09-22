import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent {

  title = "One way Bindig Component";
  x: number = 19;
  y: number = 20;
  name: string = 'Jane';
  profession: string = "Developer";
  user =
    {
      name: "Elon Musk",
      email: 'elon@yash.com',

    }

  getColor()
  {
    return 'red';
  }

  count : number = 0;

  ClickMe()
  {
    this.count++;
  }
  

  getBlueColor()
  {
    return 'blue';
  }

  alertMe()
  {
    alert('Welcome to ')
  }


}
