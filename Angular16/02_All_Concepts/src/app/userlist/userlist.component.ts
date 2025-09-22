import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/User';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  public users: User[] =
    [
      {
        id: 1, firstname: 'Bill', lastname: 'Gates', email: 'billg@gmail.com', profession: 'IT businessman', dateOfBirth: new Date(), imageUrl: '/assets/images/p1.jpeg'
      },
      {
        id: 2, firstname: 'Elon', lastname: 'Musk', email: 'elonmusk@gmail.com', profession: 'Entrepreneur', dateOfBirth: new Date('1971-06-28'), imageUrl: '/assets/images/mountain.jpg'
      },
      {
        id: 3, firstname: 'Sundar', lastname: 'Pichai', email: 'sundarp@gmail.com', profession: 'CEO of Google', dateOfBirth: new Date('1972-06-12'), imageUrl: ''
      }
    ];

  ngOnInit(): void {

  }

}
