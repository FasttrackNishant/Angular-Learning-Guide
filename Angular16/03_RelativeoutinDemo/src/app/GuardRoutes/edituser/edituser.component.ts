import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {
  userForm = new FormGroup(
    {
      id: new FormControl('1', Validators.required),
      firstname: new FormControl('sarita', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('Lad', [Validators.required, Validators.minLength(3)])
    }

  );
  get Firstname() {
    return this.userForm.controls['firstname'];
  }
  get Lastname() {
    return this.userForm.controls['lastname'];
  }
  submit() {
    console.log(this.userForm.value);
  }
}


