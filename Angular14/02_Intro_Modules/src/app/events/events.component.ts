import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  public name = ""
    myEvent()
    {
      this.name = "Button set";
      console.log(this.name);    
    }

  newEvent(a: string) {
    console.log(a);
    }

    helloEvent(event:any)
    {
      console.log(event);
      
    }
}
