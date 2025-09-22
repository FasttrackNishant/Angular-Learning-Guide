import { Injectable } from '@angular/core';
import { User, UserCompClass } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  users: UserCompClass[] = [
    { Id: 1, firstname: 'bill', lastname: 'James', email: 'bill@gmail.com', profession: 'developer' },
    { Id: 2, firstname: 'Mill', lastname: 'James', email: 'bill@gmail.com', profession: 'developer' },
    { Id: 3, firstname: 'Kill', lastname: 'James', email: 'bill@gmail.com', profession: 'developer' },
    { Id: 4, firstname: 'Nill', lastname: 'James', email: 'bill@gmail.com', profession: 'developer' },
    { Id: 5, firstname: 'Zill', lastname: 'James', email: 'bill@gmail.com', profession: 'developer' }

  ]

  getAllUsers(): UserCompClass[] {
    return this.users;
  }

  getUserById(id: number): any {
    let userlist: UserCompClass[] = this.getAllUsers();
    return userlist.find(u => u.Id == id);
  }

  addUser(newuser: UserCompClass) {
    let users = this.users;
    users.push(newuser);
  }

  updateUser(user: any) {
    let i = this.users.findIndex(u => u.Id == user.Id);
    this.users.splice(i, 1);
    this.users.push(user);
  }

  removeUser(id: number) {
    let index = this.users.findIndex(u => u.Id == id);
    if (index !== -1) {
      this.users.splice(index, 1);
    } else {
      console.log(`User not found`);
    }
  }

  constructor() { }
}
