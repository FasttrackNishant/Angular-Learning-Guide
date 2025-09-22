import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParameterDecorater';
  username: string = "Jane";
  age: number = 25;
  mobile: string = "9975789242";
  persons: string[] = ['Vishwajeet', 'Yash', 'Nishant', 'Tanmay'];
  person: string | undefined;
  message: string | undefined
  showemployee: boolean = false;
  receiveMsg($event: string) {
    this.message = $event;
    !this.showemployee;
  }
  receiveEmpAsPerson($event: string) {
    this.person = $event;
    this.persons.push(this.person);
  }



}
