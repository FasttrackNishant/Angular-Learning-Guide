import { Component } from '@angular/core';

@Component({
  selector: 'app-inline',
  // templateUrl: './inline.component.html',
  template: `<h2> This inline html </h2>`,
  // styleUrl: './inline.component.css'
  styles:[`
      p{ 
      color : red;
      }

      h2{
      color : yellow;}
    `]
})
export class InlineComponent {

}
