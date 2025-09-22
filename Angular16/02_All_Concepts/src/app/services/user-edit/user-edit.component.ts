import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCompClass } from 'src/Models/User';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a - z]{ 2, 4 }$";
  userForm: FormGroup = new FormGroup({})
  user: UserCompClass = new UserCompClass();

  constructor(private service: UserService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    let id = this.activeRoute.snapshot.params['id'];
    console.log(id);
    this.user= this.service.getUserById(id);
    console.log(this.user);


    this.userForm = new FormGroup({
      Id: new FormControl(this.user?.Id),
      firstname: new FormControl(this.user?.firstname, [Validators.required, Validators.minLength(4)]),
      lastname: new FormControl(this.user?.lastname, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(this.user?.email, [Validators.email]),
      profession: new FormControl(this.user?.profession, [Validators.required, Validators.pattern(this.emailPattern)]),

    })


  }
  submit() {
    console.log(this.userForm.value);
    this.service.updateUser(this.userForm.value);
    alert('User Updated Successfully')
    this.router.navigate(['/user-list'])
  }

}
