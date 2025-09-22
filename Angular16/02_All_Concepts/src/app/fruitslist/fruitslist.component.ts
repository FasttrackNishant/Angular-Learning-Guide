import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitslist',
  templateUrl: './fruitslist.component.html',
  styleUrls: ['./fruitslist.component.css']
})
export class FruitslistComponent {

  search = "";
  fruits = ['Apple', 'Banana', 'Mango', 'Organge', 'Grapes', 'Guava']

  update() {
    this.fruits.push('Apricot')
  }
}
