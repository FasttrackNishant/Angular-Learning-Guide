import { Component } from '@angular/core';
import { UserCompClass } from 'src/Models/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  newuser : UserCompClass  | undefined

  onSubmit(form:any) {
    console.log(form);
    this.newuser = form;

  }



}
