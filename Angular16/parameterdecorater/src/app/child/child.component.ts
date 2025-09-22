import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  Username: string | undefined;

  @Input()
  Mobile: string | undefined;

  @Input()
  Age: number | undefined;

  @Input()
  employee: Array<string> | undefined

  @Output()
  showEmployees: Boolean = false

  @Output()
  Messageevent = new EventEmitter<string>();

  @Input()
  friends: string[] = ['Sanket', 'Vishwajeet', 'Kanishk', 'Nilesh'];

  sendMessage() {
    this.Messageevent.emit("Hello! Good Morning");
    this.showEmployees = !this.showEmployees;
  }

  @Output()
  newEmpEvent = new EventEmitter<string>();

  sendMessage()
  {
    
  }






}
