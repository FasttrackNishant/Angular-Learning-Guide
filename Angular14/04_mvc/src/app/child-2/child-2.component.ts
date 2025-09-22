import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-2',
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.css'
})
export class Child2Component {
  @Output() public childEvent = new EventEmitter();

  fireEvent()
  {
    this.childEvent.emit("More that what you think ");
  }

  public data = "hello";
}
