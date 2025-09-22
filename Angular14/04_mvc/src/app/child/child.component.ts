import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() mydata: string = '';

  @Input() myDataArray: string[] = [];

  @Input() myObjData: any = {};


  //pass data to the parent


}
