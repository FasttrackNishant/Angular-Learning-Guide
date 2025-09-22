import { Component } from '@angular/core';
import { UserCompClass } from 'src/Models/User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  newUser: UserCompClass = new UserCompClass();

  constructor(private service: UserService, private router: Router) { }

  onSubmit(form: any) {
    this.newUser = form;
    this.service.addUser(this.newUser);

    this.router.navigate(['/user-list'])
  }

}
