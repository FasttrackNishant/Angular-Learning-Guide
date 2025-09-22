import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() Username: string;
  @Input() Mobile: string;
  @Input() Joinyear: number;
  @Input() Users: Array<string>;
  @Output() Messageevent = new EventEmitter<string>();
  @Input()
  exampleArray: string[] = ['Jane', 'John', 'Roy', 'Ravi', 'AJ'];

  sendMessage() {
    this.Messageevent.emit("Hello! This is message from event");
  }
}
