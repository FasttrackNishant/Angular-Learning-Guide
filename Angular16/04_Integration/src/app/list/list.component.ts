import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from 'src/Model/Login';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  user: UserModel | null = null;
  error: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUserDetails();
  }

  loadUserDetails() {
    this.userService.getUserDetails()
      .subscribe({
        next: (response) => {
          this.user = response.data; // Assuming the API returns data in this structure
          console.log('User details:', this.user);
        },
        error: (error) => {
          this.error = 'Failed to load user details';
          console.error('Error loading user details:', error);
        }
      });
  }

}
