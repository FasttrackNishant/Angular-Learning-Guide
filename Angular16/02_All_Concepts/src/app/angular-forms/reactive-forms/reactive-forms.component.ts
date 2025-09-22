import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  userForm = new FormGroup(
    {
      Id: new FormControl(1, [Validators.required]),
      firstname: new FormControl('Jane', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('smith', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('smith123@gmail.com', [Validators.required, Validators.email]),
      profession: new FormControl('developer', [Validators.required, Validators.minLength(3)]),
    }
  )


  public get Id() {
    return this.userForm.controls['Id'];
  }

  get FirstName() {
    return this.userForm.controls['firstname'];
  }

  get LastName() {
    return this.userForm.controls['lastname'];
  }
  get Email() {
    return this.userForm.controls['email'];
  }

  get Profession() {
    return this.userForm.controls['profession'];
  }

  submit()
  {
    console.log(this.userForm.value);

  }

}
