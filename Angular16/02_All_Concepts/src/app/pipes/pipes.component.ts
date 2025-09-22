import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  x: number = 5400.456;
  obj: Object = { foodname: 'Pasta', special: { topings: 'cheese' } }
  dateVal = Date.now();
  customer: Customer = { Id: 1, Name: "Bill", Address: 'Pune' };
  insitute: string = "Abc computers";
  city: string = "Nagpur";

}

class Customer {
  Id: number = 0;
  Name: string = "";
  Address: string = "";
}
