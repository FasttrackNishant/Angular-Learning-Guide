import { Component } from '@angular/core';
import { UserCompClass } from 'src/Models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userlist: UserCompClass[] | undefined;

  constructor(private service: UserService) { }

  ngOnInit() {
    this.userlist = this.service.getAllUsers();
  }

  deleteUser(id: any) {
    console.log(id);
    if (confirm("Please Confirm ! Do you want to Delete ? ")) {

      this.service.removeUser(id);
      alert("User Deleted Successfully")
    }


  }

}
