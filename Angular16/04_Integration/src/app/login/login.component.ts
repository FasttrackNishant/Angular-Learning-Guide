import { Component } from '@angular/core';
import { UserModel } from '../../Model/Login';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: AuthService, private router: Router) { }

  currentUser: UserModel;

  isLoogedIn: string = 'true'
  onSubmit(form: any) {
    console.log(form);

    let loginUser = form.value;
    console.log(loginUser);

    this.service.Login(loginUser).subscribe((res: any) => {
      if (res.status == 200) {

        localStorage.setItem('loggedIn', this.isLoogedIn);
        sessionStorage.setItem('loginToken', res?.body?.data?.accessToken);
        const token = sessionStorage.getItem('loginToken');
        console.log(token);
        
        alert("login Successfull");
        console.log(res);
        this.router.navigate(['/list'])
      }
    }, (err: any) => {
      alert("Error in Login" + err.message)
    })
  }

}
