import { Component } from '@angular/core';
import { User } from 'src/Model/User';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  user: User;


  submit(form: any) {
    this.user = form.value;
    console.log(this.user);
  }
  // canExit():boolean
  // { if(this.user.id||this.user.firstname||this.user.lastname)
  //   {
  //    return  confirm('Do you want to leave the Form?, Data is not saved')}
  //   else
  //   return true;
  // }

}
