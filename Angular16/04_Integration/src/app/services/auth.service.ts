import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from 'src/Model/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = "http://localhost:5076/api/v1/Auth/";

  constructor(private http: HttpClient) { }
  Login(user: LoginModel) {
    return this.http.post<any>(this.apiURL + "login", user, { observe: 'response' });
  }
}
