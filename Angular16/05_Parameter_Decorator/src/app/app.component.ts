import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '05_parameter_Deacorator';
  username: string = 'Tanmay';
  mobile: string = '8830203568';
  joinyear: number = 2024;
  users: Array<string> = ["Tanmay", "Santosh", "Yash", "Vishwjeet"];
  // users2:Array<string>=[];
  recivemsg: string;

  @ViewChild(ChildComponent) childComponent: ChildComponent;

  rmsg($event: string) {
    this.recivemsg = $event;
  }

  addEntryToChildArray(form:any) {
    const newEntry = form.value.name;
    this.childComponent.exampleArray.push(newEntry);
  }
}
